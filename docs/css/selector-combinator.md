# CSS 选择器（Selectors）

## 选择器类型

-   元素选择器 (Element Selector)

    -   p { ... }

-   id 选择器 (ID Selector)

    -   #id { ... }

-   类选择器 Class Selector

    -   .class { ... }
    -   多个 class 可以串联：必须所有 class 满足

-   属性选择器 Attribute Selector

    -   属性存在 a[attr] { ... }
    -   属性相等 a[href="https://example.com"] { ... }
    -   属性包含 a[attr~="xxx"]
    -   属性匹配 a[attr|="xxx"]

-   伪类选择器 (Pseudo-Class Selector)

    -   给某些元素加上了类别
    -   button:hover { ... }
    -   `:first-child :last-child :only-child :invalid :hover :focus :nth-child() :first-chil :last-child :nth-of-type()`

-   伪元素选择器 (Pseudo-Element Selector)

    -   选中的**不是元素**，相当于创造了一些新元素
    -   渲染元素的某一部分 style certain part of element
    -   p::first-line { color: white}

    -   ::first-line ::before ::after

-   通用选择器（Universal Selector）
    -   对于优先级无贡献

## 选择器组合

-   后代组合 （Descendant Combinator）
    -   后代，而不须为直接子类（direct children）
    -   li em{ ... }
-   子类组合（Child Combinator）
    -   表示：大于号需要是子类
    -   article > p { ... }
-   相邻兄弟组合器（Adjacent Sibling Combinator）

    -   li + p{ ... }
    -   same level, right after

-   后续兄弟组合器（General Sibling Combinator）
    -   div~p { ... }
-   多个选择器

    -   逗号
    -   命中多个规则

## Specificity 优先级

#### 基本原则

1. universal selector 和 combinator 不影响优先级大小
2. 如有直接命中的, 则不会从父类继承
3. 优先级加和后进行比较

## 优先级

**优先级为 1**: 元素选择器, 伪元素选择器

**优先级为 10**: 类选择器, 属性选择器, 伪类选择器

**优先级为 100**: id 选择器

**优先级为 1000**: inline-style

**优先级为 10000**: !important

## ref

https://specifishity.com/
