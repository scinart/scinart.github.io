---
layout: post
title: "Linux 输入法折腾笔记"
date: 2014-04-22 
timestamp: "2014-04-22 23:54:54 scinart"
categories: linux
tag:
comments: true
toc: false
cc: "by-nc-sa"

---

首先，在linux下折腾输入法还是比较困难的。

[An Unreliable Guide to XKB Configuration](http://www.charvolant.org/~doug/xkb/) 是我的启蒙之路。

好了，看完这个你就可以创建自己的输入法了，不过最好还是改动现有的输入法。  
如果你还这个都不想看，不妨自己打开 /usr/share/X11/xkb/symbols/us 摸索一番吧。

命令 ``setxkbmap`` 也很有用。其实xkb预设了很多功能，这个功能列表可以在 /usr/share/X11/xkb/rules/base.lst 里找到。里面的注释很全。

举例如下

Swap Ctrl and Caps Lock `` setxkbmap -option ctrl:swapcaps ``

reset: `` setxkbmap -option crl:aa_ctrl ``

附：博主当前的keyboard layout(有一些shift+altgr的字符是复制时候带的我懒的删就没删。)

![图片]({{ site.img_url }}/my-keyboard-layout-000.png)
