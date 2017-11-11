---
layout: post
title:  "openSUSE fcitx rime 设置五笔繁体输入法"
date: "2017-11-11 17:06:33"
timestamp: "2017-11-11 18:21:34 scinart"
categories: linux
comments: true
cc: "by-sa-cn"

---

## 为什么要再写一遍教程：

因为rime自带的`wubi86.schema.yaml`没有带简入繁出的功能，网上的教程又多数过时了。Linux下的教程也很少。

现有教程：

1. <https://gist.github.com/gkzhong/3467172> 很多链接引用这个，但是它是五年前的版本，已过时。
3. <http://www.jianshu.com/p/150919121375> 更是通过新建码表的方式完成了此项功能，可谓曲线救国，但是由于简到繁是一对多，不用opencc推测会损失功能。
2. <https://hexo.balaleica.com/2016/05/02/Mac Squirrel 輸出繁體中文/> 很有用，但是配置文件中包含了作者自己的配置，引入了不必要的麻烦。
4. <http://blog.csdn.net/rocloud/article/details/40021209> 也有用，但是也是配置文件过于复杂，没有抓住本质。
5. <https://github.com/rime/rime-wubi/blob/master/wubi_trad.schema.yaml> 文档快写完了，找到官方比较好的配置了，但是没有说明。

## 为什么要用Rime

除了 <https://www.byvoid.com/zhs/blog/recommend-rime> 中提到的原因，最重要的是它支持五笔整句输入。
(刚查了一下发现现在有很多这种整句输入的了，但是跨平台(现在甚至跨到了iOS上)的应该就这一个了吧)

## 安装：

    sudo zypper install fcitx-rime

然后在fcitx的配置中的Current Input Method中加入Rime即可。

Rime的配置完全是配置文件形式的，更改`$HOME/.config/fcitx/rime/default.yaml`，将`schema_list`改成wubi86即可。

## 配置繁体输出：

    --- wubi86自带.schema.yaml	2017-11-11 16:37:55.371886555 +0800
    +++ wubi86.schema.yaml	2017-11-11 17:44:00.603950133 +0800
    @@ -11,6 +11,7 @@
         五筆字型86版
         碼表源自 ibus-table
         敲 z 鍵進入拼音反查
    +    需要安裝 opencc 簡繁轉換詞典 (zypper install opencc)
       dependencies:
         - pinyin_simp
     
    @@ -24,6 +25,10 @@
         states: [ 常用, 增廣 ]
       - name: ascii_punct
         states: [ 。，, ．， ]
    +  #### 新增部分 ####
    +  - name: simplification
    +    reset: 0 # 设置为1为默认繁体
    +    states: [ 简体, 繁體 ]
     
     engine:
       processors:
    @@ -45,6 +50,15 @@
         - punct_translator
         - reverse_lookup_translator
         - table_translator
    +  #### 新增部分 ####
    +  filters:
    +    - simplifier
    +    - uniquifier
    +
    +#### 新增部分 ####
    +simplifier:
    +  opencc_config: s2t.json
    +  option_name: simplification
     
     speller:
       delimiter: " ;'"


## 注释：

可以看到只增加了三个部分

一是在`switches`部分增加了simplification模块，之所以叫simplification，
是因为`luma_pinyin`(朙月繁体拼音)输入法下也有此模块，是用于切换简体用的，且`default.yaml`里有预定义的快捷键，你也可以叫其他名字。

二是在`engine`部分增加了`filters`，这两个也是朙月拼音自带的模块。前者叫`simplifier`，是朙月拼音中繁⟶简的，这里用作简⟶繁，`uniquifier`顾名思义应为去重复的。

三是新增`simplifier`，如果不加这段(luma_pinyin.schema.yaml就中没有加)，想必有预定义的此模块，用于繁⟶简，现在将其手动设置为简⟶繁

有的配置文中中会有`prism: wubi_trad`，但是据[官方文档](https://github.com/rime/home/wiki/RimeWithSchemata)，xxxxxx.prism.bin是自动生成的，所以不用加。

以上均为个人猜测，要是我猜错了，你就自己探索吧。

## 简繁切换快捷键

因为在`default.yaml`中的`key_binder/bindings:`中默认有`{accept: "Control+Shift+4", toggle: simplification, when: always}`，也可以自定义其他快捷键。如果你的简繁转换模块不叫`simplification`，自己添加一个快捷键即可。

## Deploy

在改完配置文件后，要在输入法图标上点右键，然后点Deploy(部署)，否则不生效，这点不太符合直觉，一开始被坑了。
