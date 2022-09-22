# select

- the data returned is stored in a result table, called the result-set

## 语法

```sql
SELECT column1, column2, ...
FROM table_name; -- 选取特定几行

SELECT * FROM table_name; -- 选取所有行
```

## SELECT DISTINCT

```sql
SELECT DISTINCT Country FROM Customers; -- 对于 Country 进行去重
SELECT COUNT(DISTINCT Country) FROM Customers; -- 对于 Country 进行统计
```
