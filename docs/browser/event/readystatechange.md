# readystatechange



## document.readyState

- 'loading'
  - the document is still loading
- 'interactive'
  - the document has finished loading. We can now access the DOM elements
  - But sub-resources such as scripts, images, stylesheets and frames are still loading
- 'complete'
  - the page is fully loaded





## 顺序

- readystatechange: 'interactive'
- DOMContentLoaded
- readystatechange: 'interactive'
- load