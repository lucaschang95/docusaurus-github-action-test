# JavaScript继承

- 对象访问一个属性时
  - 首先查找自有属性
  - 如果没有，在`[[proto]]`指向的原型对象中继续查找。

## 好处

- 代码复用
- 逻辑清晰

## 获得原型对象的方法

- 可以使用浏览器提供的`__proto__`属性
  - 其实是一个getter和setter, 
- `Object.getPrototypeOf()]]`



## API

- Object.getPrototypeOf( )
- Object.setPrototypeOf( )
- `__proto__`属性
- Object.create( )
  - newObj = Object.create(protoObj, propDescriptor)



#### 调用Object.create()发生了什么

1. 创建一个空对象, 并赋值给相应变量(newObj)
2. 设置该obj的隐式属性`[[proto]]`为`Object.create()`的第一个参数
3. 在该对象上调用`Object.defineProperties(obj, propDescriptor)`, 并将第二个参数传入





## 各个继承方式



#### 原型链继承

子类型实例的__proto__指向父类一个实例

- 注意修正constructor的指向

**优缺点**

- 缺点：同时继承了父类实例的实例属性和原型属性（一般来说实例属性是不需要被继承的）
- 无法向父类构造函数传递参数



#### 构造函数继承

子类型构造函数中借用父类构造函数（Parent.call）



**优缺点**

- 多继承
- 可以向父类构造函数传递参数
- 无法继承父类原型对象上的属性和方法



#### 组合继承

**结合了前两种方法**

- 调用了两次父类构造函数



#### 组合继承优化1

- **`Student.prototype = Person.prototype`**
- 无法分清楚对象是父类实例化还是子类实例化的



#### 组合继承优化2

- **`Student.prototype = Object.create(Person.prototype), Student.prototype.constructor = Student`**
- react中, **Component** 和 **PureComponent**之间就是使用的这种方法

## 寄生组合

- 增加一个中间层
- 新建一个空对象，子构造prototype指向它，它只想父构造的prototype



## ref

https://segmentfault.com/a/1190000016708006