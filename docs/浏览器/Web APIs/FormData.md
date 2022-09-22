# FormData

```js
const form = document.forms.namedItem("fileinfo");
const formData = new FormData(form);
formData.append('customField', 'some extra data');
request.send(formData);
```