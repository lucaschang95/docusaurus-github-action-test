# null

在 mysql 中，a field with null value is a field without a value

- 前提是定义 table 的时候，这个 field 是 optional

## 特性

- null value 无法使用 `=`, `<` 或者 `<>`
- 必须使用关键词 `IS NULL` `IS NOT NULL`
