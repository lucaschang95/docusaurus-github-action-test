# in 操作符

```typescript
function print(doc: ADoc | BDoc) {
  if ("a" in ADoc) {
    console.log(doc.a);
  } else {
    console.log(doc.b);
  }
}
```