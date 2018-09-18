---
layout: post
title:  "第一篇博客看来是Markdown语法的笔记了。"
date:   2014-01-17 15:30:25
timestamp: "2018-09-17 22:49:06 scinart"
categories: markdown
comments: true
toc: true
cc: "by-nc-sa"

---

### 标题 ##
	# 这是一级标题，就像这样。
	## 这是二级标题。
	### 这是三级标题。
	#### 这是四级标题。
	##### 这是五级标题。
	###### 这是六级标题。#######################
	可以在行尾加任意数量的#，就像上边那样。

### 基本格式化

**(\*和\_等效)<br/>**

`` **\*\*粗体\*\*** : `` **\*\*粗体\*\***

` *\*斜体\** :` *\*斜体\**

` ***\*\*\*粗斜体\*\*\**** : ` ***\*\*\*粗斜体\*\*\****

` ~~删除线~~ : ` ~~删除线测试~~

水平线 如果在一行里只放三个或更多个连字符，或星号或下划线，你就会得到一个水平线标记(&lt;hr /&gt;)。如:  
<pre>`` * * * ``        `` *** ``        `` - - - ``        `` _________ ``</pre>

想要分成两行，需要在行尾输入两个空格。__  
我说的对吧~

### 列表 ##

##### 无序列表
<pre><code>* A
+ B
- C
* 他们是等效的。
  * 二级列表就像这样。都是一个 \*，缩进用四空格或一Tab都可以。(现在换成kramdown之后两个空格也行)
  * 如果列表项目间用空行分开，
在输出 HTML 时 Markdown 就会将项目内容用 &amp;lt;p&amp;gt; 标签包起来。
  * 一个列表项的多个条目可以不缩进。但缩进看起来更整齐(本地测试未成功？)。
效果是：</code></pre>

* A
+ B
- C
* 他们是等效的。
  * 二级列表就像这样。都是一个 \*，缩进用四空格或一Tab都可以。
  * 如果列表项目间用空行分开，
在输出 HTML 时 Markdown 就会将项目内容用 &lt;p&gt; 标签包起来。
  * 一个列表项的多个条目可以不缩进。但缩进看起来更整齐。
* A
  * A1
  * A2

##### 有序列表
<pre><code>1. This is the First.
3. This is the Second.
2. This is the Third.
4. There are *NO* typos here.
5. which displays as follows:</code></pre>

1. This is the First.
3. This is the Second.
2. This is the Third.
4. There are *NO* typos here.
5. which displays as follows:

**取消转义** <br/>
`` 2014\. : `` 2014\.

### 引用

<pre><code>加&gt;就是引用，&gt; &gt; 就是两层引用。

&gt; Rep 1
&gt;
&gt; &gt; Rep 2

which displays as:</code></pre>

> Rep 1
>
> > Rep 2

### 代码

	四个空格或者一个Tab就能format成<pre><code>，若代码以星号等打头，有些引擎可能会不识别。

内联代码可以用 `` ` `` 来包围，如果代码里有`` ` ``, 可以用 ``` `` ```包含代码。

#### 代码高亮

<https://highlightjs.org/> ps: 这个东西被设计成不支持line number.

<https://www.hacksparrow.com/how-to-disable-github-pages-default-rouge-code-highlighter.html>

short story

~~~apache
markdown: kramdown

kramdown:
  input: GFM
  hard_wrap: false
  syntax_highlighter_opts:
    disable: true
~~~

范例是初学别吐槽。

```haskell

-- this is trial division...

module NotSieve (primesUpTo) where

primesUpTo n
  | n < 2 = []
  | otherwise = reverse $ aid2 ([2], [3,5..n])


aid2 (p,remain) = if null remain then
                    p
                  else
                    aid2 (aid p remain)

-- aid [3,2] [5,7,...] = [5,3,2] [7,...]
aid :: [Integer] -> [Integer] -> ([Integer], [Integer])
aid p n = (pn:p, filter ((/= 0) . (`mod` pn)) n)
          where pn = head n

```

### 链接

<pre><code>&lt;https://www.google.com&gt;
[google](https://www.google.com)</code></pre>

<https://www.google.com>  
[google](https://www.google.com)

<pre><code>![图片链接，这里是alt标签内容](http://www.google.rw/images/srpr/logo4w.png)<br/></code></pre>

See a big Mandelbrot set:
![Mandelbrot_set_photo](http://upload.wikimedia.org/wikipedia/commons/2/21/Mandel_zoom_00_mandelbrot_set.jpg)
file from <http://en.wikipedia.org/wiki/File:Mandel_zoom_00_mandelbrot_set.jpg>


