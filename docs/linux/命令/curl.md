# curl

> curl is a command-line tool to transfer data to or from a server, using any of the supported protocols (HTTP, FTP, IMAP, POP3, SCP, SFTP, SMTP, TFTP, TELNET, LDAP, or FILE).

powered by libcurl

## 语法

```bash
curl [options] [URL...]

curl -# # 显示 progress meter

curl -o [file_name] [URL...] # 保存 curl 的结果

curl https://www.geeksforgeeks.org > log.html --libcurl code.c # 输出 c 代码
```