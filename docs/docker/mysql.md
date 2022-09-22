# mysql

```bash
docker run --name mysql-vol
-p 3306:3306
-e MYSQL_ROOT_PASSWORD=my-secret-pw
-d
--mount source=mysqlval, target=/var/lib/mysql
mysql
```

```bash
docker run --name mysql-test --mount type=volume,source=mysql-test,target=/var/lib/mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -d -p 3306:3306 mysql
```

- mysql -u root -p
- password: my-secret-pw
