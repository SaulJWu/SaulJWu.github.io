---
title: WLAN没有有效的IP配置
date: 2020-12-18 23:12:58
permalink: /pages/c33a36/
sidebar: auto
categories:
  - 随笔
tags:
  - 
---
一直以来都以个小问题困扰我，那就是我的笔记本（`Win10`）连上了WIFI却没有能上网，我就很纳闷，因为其他设备都是正常连接的，只有这台笔记本是这样的。

于是经过我百度一翻，靠以下解决。

> 取消勾选允许计算机关闭此设备以节约电源

<img src="https://raw.githubusercontent.com/SaulJWu/images/main/20201220011141.png" alt="image-20201218231540273" style="zoom: 50%;" />

<img src="https://raw.githubusercontent.com/SaulJWu/images/main/20201218232733.png" alt="image-20201218231556299" style="zoom:50%;" />

配置完这个发现还不能上网

> 命令行更新ip

1、连接着WiFi，但是不能上网

2、管理员运行`cmd`

3、释放ip

```bash
ipconfig /release
```

运行结果：

<img src="https://raw.githubusercontent.com/SaulJWu/images/main/20201218232102.png" alt="image-20201218231754571" style="zoom:50%;" />

4、运行了这个命令，重连一下WIFI，如果能上网了，就可以了。如果不能上网：

5、更新ip

```bash
ipconfig /renew
```

6、重新连接WiFi，现在可以上网了。



> 这些步骤，其实我执行到第4步就可以上网了。如果还是不行，自己找别的方法去吧。记录下来，以后发生类似情况，就回来抄作业，防止自己忘记了。