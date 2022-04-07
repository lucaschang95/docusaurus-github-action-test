# 表单（form）

## 常见控件

- Text Input: 文本输入
- Textarea: 多行文本输入
- Checkbox: 复选框
- Radio: 单选框
- Select: 下拉框
- File: 文件上传
- Clickable: 点击控件
- Submit and Reset Button: 提交和重置按钮

## HTML Form 表单提交请求时的关键属性

- action: 提交时发起 HTTP 请求的 URI
- method: 提交时发起 HTTP 请求的 http 方法
  - GET: URI 参数的方式提交
  - POST: 放在请求包体中提交
- enctype: 表单内容在请求包体中的编码方式
  - application/x-www-form-urlencoded: 参数名和参数值之间用 `&` 符号连接
  - multipart/form-data
    - boundary: 分隔符
    - 每部分都有 HTTP 头部描述

## form标签

**支持的属性**

- **method**: 可以选择**GET**和**POST**

## Input标签

#### 支持的属性

- **type**：决定输入类型, 是single-line text, 还是 checkbox, 还是其他的...

- **placeholder**：提示性信息

- **name**：提交表单数据的标识



value: default value



id: 作用 1. 绑定相同 for 值的`<label>`
        2. CSS, JavaScript进行选择





### Input Type

text

password

hidden: --> timestamp

checkbox

radio button
Several radio buttons can be **tied** together


HTML5
email, search, tel, url, number, range, color



## button

#### 支持的属性

- **type**：submit，reset（这两个是原生支持的）
  Attribute:
  type: 'submit' (submit your form), 'reset' (reset to default value), 'button' (custom)



**button的替代方法**：使用一个`type='submit'`的**input**元素, 

- **区别**：button内部可以插入其他HTML代码

### Fieldset, legend

```html
<fieldset>
    <legend></legend>
    里面是<label><input>
</fieldset>
```

fieldset 和 legend 是将输入分为几类, 便于管理

### Example

(example)[https://github.com/mdn/learning-area/blob/master/html/forms/html-form-structure/payment-form.html]