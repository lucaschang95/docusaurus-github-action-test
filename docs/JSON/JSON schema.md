# JSON schema

## why JSON schema?

```json
{
  "productId": 1,
  "productName": "A green door",
  "price": 12.50,
  "tags": [ "home", "green" ]
}
```

给定这个 schema，我们可能会有很多疑问？

因此，我们需要 JSON shcema to provide some metadata about this data structure.

## basic JSON schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://example.com/product.schema.json",
  "title": "Product",
  "description": "A product in the catalog",
  "type": "object"
}
```

这个相当于整个 json 的 metadata

## 参考

- https://json-schema.org/
- https://json-schema.org/understanding-json-schema/