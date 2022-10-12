# in

## 语法

```sql
SELECT column_name(s)
FROM table_name
WHERE column_name IN (value1, value2, ...);
```

- 此时，只要 `column_value` 满足 `value1 | value2 | value3` 即可

```sql
SELECT column_name(s)
FROM table_name
WHERE column_name IN (SELECT STATEMENT);
```
