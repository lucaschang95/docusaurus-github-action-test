# TLS

## step 1: 建立TCP连接

三次握手

### step 2: 非对称加密验证身份, 协商出新密钥

- client生成随机数, 加密后发送给server
- server生成随机数, 连同证书发送给client
- 根据两个随机数生成新密钥 (DH密钥交换协议) (PKI基础设施)

#### step 3:  使用新密钥, 通过对称加密进行通信

### 非对称加密

- 每个参与方都有一对密钥
    - 公钥: 向对方公开
    - 私钥: 仅自己使用
RSA算法

命令行`openssl`可以生成private key和public key

证书: 网站的公钥和信息通过CA的私钥加密后得到的密文为证书

数字证书: Data Hash过后 private key过后的密文, Data

AES对称加密
- 发送方: 明文P和密钥K通过AES加密函数生成密文C
- 接收方: 密文C和密钥K通过AES解密函数得到明文P

对称加密基于**XOR**异或运算, 明文经过两次密钥的XOR运算得明文本身

AES分组长度是128位(16字节)
AES-128, AES-192, AES-256