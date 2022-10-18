# join 操作

> A JOIN clause is used to combine rows from two or more tables, based on a related column between them.

根据相关联的列（column）来合并行（row）的操作叫`join`

## 分类

join 分为: inner join, left join, right join, cross join, self join

- INNER JOIN: Returns records that have matching values in both tables
- LEFT JOIN: Returns all records from the left table, and the matched records from the right table
- RIGHT JOIN: Returns all records from the right table, and the matched records from the left table
- CROSS JOIN: Returns all records from both tables

## inner join

取并集, 只有两个表中的 join 列有相同值才会被筛选出来

inner join 说明两个表的 join 列的枚举可能不是完全相同

### 语法

```sql
SELECT column_name(s)
FROM table1
INNER JOIN table2
ON table1.column_name = table2.column_name;
```

inner join .. on ...

## left join

- customer 表，订单表，left join 情况下，一个 customer 和多个订单会产生多个记录

```sql
SELECT column_name(s)
FROM table1
LEFT JOIN table2
ON table1.column_name = table2.column_name; -- 不要忘记 on 条件
```

过程：取出左表，取出满足条件的右表

- join
- table2 没有值的则为 null, 多个值 则会 join 形成多个数据

## right join

```sql
SELECT column_name(s)
FROM table1
RIGHT JOIN table2
ON table1.column_name = table2.column_name;
```

table1 : table2 是 N:1 的关系

## cross join 

交叉连接，笛卡尔积

交叉连接是其他连接的基础 