# AbortController

```js
let controller;
const url = "video.mp4";

const downloadBtn = document.querySelector('.download');
const abortBtn = document.querySelector('.abort');

downloadBtn.addEventListener('click', fetchVideo);

abortBtn.addEventListener('click', function() {
  if (controller) controller.abort();
  console.log('Download aborted');
});

function fetchVideo() {
  controller = new AbortController();
  const signal = controller.signal;
  fetch(url, { signal })
    .then(function(response) {
      console.log('Download complete', response);
    })
    .catch(function(e) {
      console.log('Download error: ' + e.message);
    });
}
```