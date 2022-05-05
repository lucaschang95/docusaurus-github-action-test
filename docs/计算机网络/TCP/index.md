# TCP 协议 (Transmition Control Protocal, 传输控制协议)

> 实现了任意长度消息的可靠传输

> 如何跨越不同网络, 是网络层、数据链路层、物理层进行处理的, 如何构造消息、构造什么消息, 是由应用层进行处理的, 数据链路层只负责消息的传输

## 基础

TCP协议是面向连接的, 可靠的, 基于字节流的传输协议.

- 面向连接的: 点对点, 无法像 UDP 那样一对多
- 可靠的: 可靠的传输服务, 有序接收, 重复报文自动丢弃
- 字节流: 任意长度消息的传输, 打包成报文段
- 流量缓冲
- 双向传递
- 拥塞控制

## 四次挥手

TCP全双工, 两个方向单独关闭

step 1: fin

step 2: ack

step 3: fin

step 4: ack

### 挥手时状态变迁

- initiator(发起者)
  - ESTABLISHED, FIN_WAIT_1, FIN_WAIT_2, TIME_WAIT, CLOSED
- receiver(接受者)
  - ESTABLISHED, CLOSE_WAIT, LAST_ACK, CLOSED
- TIME_WAIT持续2MSL (maximum segment lifetime), 4分钟. 但一般服务器不会这么做.

## 重传与确认

超时重传时间: **RTTs** (加权平均往返时间)

RTO (Retranmission TimeOut)

- RTO too small
  - unnecessary retransmission
- RTO too large
  - slow reaction to losses

## 流量控制

接收方通过报文告知发送方当前接收窗口剩余大小,

## 滑动窗口

1. Sent and Ackonwledged
2. Sent But Not Yet Acknowledged
3. Not Sent, Recipient Ready to Receive
4. Not Sent, Recipient Not Ready To Receive

发送窗口: 2 + 3
可用窗口: 3

## 拥塞控制

## 可靠传输

校验, 序号, 确认, 重传

- 累计确认
- 超时重传

- 动态改变重传时间

## SYN攻击

### 攻击方法

- 攻击者发送TCP SYN
- 服务器返回ACK之后, 攻击者不进行确认

#### 后果

- 服务器收不到确认, 重复发送ACK, 浪费了大量服务器的资源

https://juejin.im/post/6844903918334377991