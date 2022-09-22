# where

作用是 filter records（过滤）

- 不仅能用在 SELECT, 还能用在 UPDATE, DELETE

## syntax

```sql
SELECT column1, column2, ...
FROM table_name
WHERE condition;
```

例子

```sql
SELECT * FROM Customers
WHERE CustomerID = 1;
```

在 sql 中，text field 需要用 single quote 包裹，numeric field 不需要进行包裹

## operator

> 这个是做条件控制，

```sql
=
>
<
>=
<=
<>
BETWEEN ... AND
LIKE
IN
```

## AND, OR, NOT

```sql
SELECT column1, column2, ...
FROM table_name
WHERE condition1 AND condition2 AND condition3 ...;

SELECT column1, column2, ...
FROM table_name
WHERE condition1 OR condition2 OR condition3 ...;

SELECT column1, column2, ...
FROM table_name
WHERE NOT condition;
```

- use parenthesis to form complex expressions 使用括号来实现优先级
