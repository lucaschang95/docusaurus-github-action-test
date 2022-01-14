function ajax(url, options) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(options.method, url, true);
        for (let header in options.headers) {
            xhr.setRequestHeader(header, options.headers[header]);
        }
        xhr.timeout = 1000 * 30;
        xhr.onabort = function() {
            reject('xxx is aborted');
        };
        xhr.onerror = (e) => {
            reject('xxx is rejected');
        };
        xhr.onreadystatechange = function () {
            console.log(this);
        };
    })
}

const btn = document.getElementById('btn');
console.log(btn);
btn.addEventListener('click', (e) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/rest/n/ip', true);
    xhr.onreadystatechange = function () {
        console.log(this);
        console.log(this.status);
    };
    xhr.send();
});
