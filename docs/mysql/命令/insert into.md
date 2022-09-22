# insert into

## 语法

```sql
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);
```

```sql
INSERT INTO table_name
VALUES (value1, value2, value3, ...);
```

- 省略 column 内容原因是 adding values for all the columns of the table

- only insert in specified columns (没有被赋值的会成为 null 或者其他默认值)
