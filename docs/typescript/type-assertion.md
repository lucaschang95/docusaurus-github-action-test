# Type assertion 类型断言

- 告诉编译器，你比他更了解这个类型，并且它不应该再发出任何错误提示。

两种语法：尖括号，as

- const a = (expr as any) as T;
- 一般只允许到更不具体的，更具体的（有交集）



#### 非空断言

x! 加上!会把null和undefined从x的取值中排除出去

非空断言要确认



#### 确定赋值断言

let x!: number; 告诉ts编译器改属性会被明确的赋值

