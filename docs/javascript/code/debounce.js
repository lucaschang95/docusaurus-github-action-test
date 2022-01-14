const debounce = (func, wait, options) => {
    let timerId,
        lastCallTime = 0,
        lastInvokeTime = 0;

    const shouldInvoke = (time) => {
        const timeSinceLastCall = time - lastCallTime;
        const timeSinceLastInvoke = time - lastInvokeTime;
        return timeSinceLastCall > wait && timeSinceLastInvoke > wait;
    };

    const startTimer = () => {
        return setTimeout(timerExpired, wait);
    };

    const invokeFunc = () => {
        func();
    };

    const timerExpired = () => {
        const time = Date.now();
        if (shouldInvoke(time)) {
            return invokeFunc();
        }
    };

    const debounced = () => {
        const time = Date.now();
        lastCallTime = time;
        const invoking = shouldInvoke(time);
        if (invoking) {
            timerId = startTimer();
        } else {
            console.log("should not invoking");
            const prevTimerId = timerId;
            timerId = startTimer();
            clearTimeout(prevTimerId);
        }
    };

    return debounced;
};

export default debounce;
