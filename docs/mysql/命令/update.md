# update

> modify the existing records in a table.

## 语法

```sql
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
```

- `WHERE` 定义了哪些 records 应该被更新
- omit the WHERE clause, all records in the table will be updated!
