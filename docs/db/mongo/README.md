# MongoDB



## 概念

database 数据库

collection 数据库表/集合

document 数据库记录行/文档

field 数据字段/域

index 索引

primay key 主键



## 数据库操作

库名：test

创建数据库: use test

查看数据库名: db, db.getName( )

删除: db.dropDatabase( )



## 集合操作

创建: db.createCollection('collection_name')



## 文档操作

### 插入

新增: db.collection_name.insert(document)

- 每当插入一条新文档时候mongo会自动为文档生成\_id属性，也可以自己指定\_id属性，但如果\_id值已存在，则会插入失败

保存(替换): db.collection_name.save(document)

- 不同点：指定\_id属性，但如果\_id值已存在，则会替换已有数据

### 更新

db.collection.update(
	<query>,
	<updateObj>,
	{
		upsert: <boolean>,
		multi: <boolean>
	}
)









