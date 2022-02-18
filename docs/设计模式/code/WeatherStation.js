var WeatherData = /** @class */ (function () {
    function WeatherData() {
        this.observers = [];
    }
    WeatherData.prototype.registerObserver = function (o) {
        this.observers.push(o);
    };
    WeatherData.prototype.removeObserver = function (o) {
        this.observers = this.observers.filter(function (ob) { return ob !== o; });
    };
    WeatherData.prototype.notifyObservers = function () {
        var _this = this;
        this.observers.forEach(function (o) {
            o.update(_this.temperature, _this.humidity, _this.pressure);
        });
    };
    WeatherData.prototype.measurementsChanged = function () {
        this.notifyObservers();
    };
    WeatherData.prototype.setMeasurements = function (temperature, humidity, pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurementsChanged();
    };
    return WeatherData;
}());
var CurrentConditionDispaly = /** @class */ (function () {
    function CurrentConditionDispaly(weatherData) {
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }
    CurrentConditionDispaly.prototype.update = function (temperature, humidity) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.display();
    };
    CurrentConditionDispaly.prototype.display = function () {
        console.log("Current conditions: " + this.temperature + "F degrees and " + this.humidity + "% humidity.");
    };
    return CurrentConditionDispaly;
}());
var weatherData = new WeatherData();
var currentConditionDispaly = new CurrentConditionDispaly(weatherData);
weatherData.setMeasurements(50, 40, 30);
weatherData.setMeasurements(50, 60, 30);
