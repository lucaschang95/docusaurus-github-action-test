import debounce from "./debounce.js";
const log = () => console.log("invoke func");

const debouncedLog = debounce(log, 2000);

document.body.addEventListener("click", debouncedLog);
