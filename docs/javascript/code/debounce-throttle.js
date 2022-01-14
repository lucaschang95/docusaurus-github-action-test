// 防抖原理: 闭包, 密集触发时, 消除上一个留下的setTimeout, 再自己重新设置一个setTimeout
function debounce(fn, wait) {
  let timeout = null;
  return function() {
    if (timeout !== null) clearTimeout(timeout);
    timeout = setTimeout(fn, wait);
  };
}


/* 


*/
function throttle(callback, delay) {
  let timeout = null;
  return function() {
    if (!timeout) {
      timeout = setTimeout(() => {
        callback();
        timeout = null;
      }, delay);
    }
  };
}

function throttle(callback, interval) {
  let prevTime = -1;
  return function() {
    const currTime = new Date().getTime();
    if (currTime - prevTime > delay) {
      callback();
      prevTime = currTime;
    }
  };
}

function debounce(fn, time) {
  let timer;
  return () => {
    if (timer) {
      clearTimeout(timer);  
    }
    timer = setTimeout(() => {
      let arg = arguments;
      let context = this;
      fn.apply(context, arg);
    }, time);
  };
}

function throttle(fn, time) {
  let lastTime;
  return () => {
    let arg = arguments;
    let context = this;
    if (lastTime) {
      const tempTime = + new Date();
      if (tempTime - lastTime > time) {
        fn.apply(context, arg);
        lastTime = tempTime;
      }
    } else {
      lastTime = + new Date();
    }
  };
}

let fn = ()=>{
  console.log('boom')
}

setInterval(throttle(fn,1000),10)