# open url

### 普通的跳转

第一步，UI thread 响应输入，并判断是否为一个合法的网址，当然输入的也可能是个搜索协议，这就会导致分发到另外的服务处理。

第二步，如果第一步输入的是合法网址，则 UI thread 会通知 network thread 获取网页内容，network thread 会寻找合适的协议处理网络请求，一般会通过 [DNS 协议](https://en.wikipedia.org/wiki/Domain_Name_System) 寻址，通过 [TLS 协议](https://en.wikipedia.org/wiki/Transport_Layer_Security) 建立安全链接。如果服务器返回了比如 301 重定向信息，network thread 会通知 UI thread 这个信息，再启动一遍第二步。

第三步，读取响应内容，在这一步 network thread 会首先读取首部一些字节，即我们常说的响应头，其中包含 [Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) 告知返回内容是什么。如果返回内容是 HTML，则 network thread 会将数据传送给 renderer process。这一步还会校验安全性，比如 [CORB](https://www.chromium.org/Home/chromium-security/corb-for-developers) 或 [cross-site](https://en.wikipedia.org/wiki/Cross-site_scripting) 问题。

第四步，寻找 renderer process。一旦所有检查都完成，network thread 会通知 UI thread 已经准备好跳转了（注意此时并没有加载完所有数据，第三步只是检查了首字节），UI thread 会通知实力化 renderer process 进行渲染。为了提升性能，UI thread 在通知 network thread 的同时就会实力化一个 renderer process 等着，一旦 network thread 完毕后就可以立即进入渲染阶段，如果检查失败则丢弃提前实例化的 renderer process。

第五步，确认导航。第四步后，browser process 通过 IPC 向 renderer process 传送 stream（[精读《web streams》](https://github.com/ascoders/weekly/blob/master/前沿技术/214.精读《web streams》.md)）数据。此时导航会被确认，浏览器的各个状态（比如导航状态、前进后退历史）将会被修改，同时为了方便 tab 关闭后快速恢复，会话记录会被存储在硬盘。

额外步骤，加载完成。当 renderer process 加载完成后（具体做了什么下一篇会说明），会通知 browser process `onLoad` 事件，此时浏览器完成最终加载完毕状态，loading 圆圈也会消失，各类 onLoad 的回调触发。注意此时 js 可能会继续加载远程资源，但这都是加载状态完成后的事了。