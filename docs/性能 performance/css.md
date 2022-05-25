# CSS performance

> To optimize the CSSOM construction, remove unnecessary styles, minify, compress and cache it, and split CSS not required at page load into additional files to reduce CSS render blocking.

## Optimizing for render blocking

`<link rel="stylesheet" href="mobile.css" media="screen and (max-width: 480px)">`

## Animating on the GPU

promoted element into seperated layer

- `(transform: translateZ(), rotate3d()`
- `opacity, position: fixed, will-change, and filter`
- `<video>, <canvas> and <iframe>`