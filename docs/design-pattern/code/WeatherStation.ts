interface Subject {
    registerObserver(o: Observer) : void;
    removeObserver(o: Observer) : void;
    notifyObservers(): void;
}

interface Observer {
    update(temp: number, humidity: number, pressure: number) : void;
}

interface DisplayElement {
    display(): void;
}

class WeatherData implements Subject {
    private observers: Observer[];
    private temperature: number;
    private humidity: number;
    private pressure: number;

    constructor() {
        this.observers = [];
    }

    registerObserver(o) {
        this.observers.push(o);
    }

    removeObserver(o) {
        this.observers = this.observers.filter((ob) => ob !== o);
    }

    notifyObservers() {
        this.observers.forEach((o) => {
            o.update(this.temperature, this.humidity, this.pressure);
        });
    }

    private measurementsChanged() {
        this.notifyObservers();
    }

    setMeasurements(temperature: number, humidity: number, pressure: number) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurementsChanged();
    }
}

class CurrentConditionDispaly implements Observer, DisplayElement {
    private temperature: number;
    private humidity: number;
    private weatherData: Subject;

    constructor(weatherData: Subject) {
        this.weatherData = weatherData;
        weatherData.registerObserver(this as Observer);
    }

    update(temperature: number, humidity: number) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.display();
    }

    display() {
        console.log(`Current conditions: ${this.temperature}F degrees and ${this.humidity}% humidity.`);
    }
}

const weatherData = new WeatherData();
const currentConditionDispaly = new CurrentConditionDispaly(weatherData);

weatherData.setMeasurements(50, 40, 30);
weatherData.setMeasurements(50, 60, 30);

