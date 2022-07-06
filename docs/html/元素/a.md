# `<a>` 标签

> The `<a>` HTML element (or anchor element), with its href attribute, creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address.

## 属性

### `download`

1. download 属性指定下载文件的文件名。
2. 不指定时，自动生成文件名

### `href`

any URL scheme supported by browsers, 可以是其他URL scheme，如 `data:`

### `referrerpolicy`

- `no-referrer`: 不发送referrer
- `no-referrer-when-downgrade`: http时，不发送referrer
- `origin`: 发送当前页面的 referrer
- `same-origin`: 同源请求时发送
- `strict-origin`:

## target

- _self: 当前
- _blank: a new tab
- _parent
- _top

## rel

### nofollow, noopener和noreferrer

noreferrer 隐藏了引用者的信息（跳转之后，人们不知道是从哪儿跳转过来的）

nofollow 

noopener 防止window.opener.location来进行攻击

## title

- 鼠标悬停时显示的信息