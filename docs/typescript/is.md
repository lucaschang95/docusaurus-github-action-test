# is 操作符


```typescript
function isADoc(doc: ADoc | BDoc): doc is ADoc {
  return "a" in doc;
}
```
