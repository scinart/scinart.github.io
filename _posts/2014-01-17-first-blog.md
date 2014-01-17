---
layout: post
title:  "第一篇博客看来是Markdown语法的笔记了。"
date:   2014-01-17 15:30:25
categories: markdown
---
	更新时间： Time-stamp: <2014-01-17 22:53:34 scinart>
* This will become a table of contents (this text will be scraped). 目录测试
{:toc}

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
` **\*\*粗体\*\*** : ` **\*\*粗体\*\***

` *\*斜体\** :` *\*斜体\**

` ***\*\*\*粗斜体\*\*\**** : ` ***\*\*\*粗斜体\*\*\****
 
水平线 如果在一行里只放三个或更多个连字符，或星号或下划线，你就会得到一个水平线标记(&lt;hr /&gt;)。如:<br/>
` * * * `&nbsp;&nbsp;&nbsp;&nbsp;` *** `&nbsp;&nbsp;&nbsp;&nbsp;` - - - `&nbsp;&nbsp;&nbsp;&nbsp;` _________ `
### 列表 ##

##### 无序列表
<pre><code>* A
+ B
- C
* 他们是等效的。
	* 二级列表就像这样。都是一个 \*，缩进用四空格或一Tab都可以。
	* 如果列表项目间用空行分开，
在输出 HTML 时 Markdown 就会将项目内容用 &amp;lt;p&amp;gt; 标签包起来。
	* 一个列表项的多个条目可以不缩进。但缩进看起来更整齐(本地测试未成功？)。
效果是：</code></pre>

* 他们是等效的。
	* 二级列表就像这样。都是一个 \*，缩进用四空格或一Tab都可以。
	* 如果列表项目间用空行分开，
在输出 HTML 时 Markdown 就会将项目内容用 &lt;p&gt; 标签包起来。
	* 一个列表项的多个条目可以不缩进。但缩进看起来更整齐。
* A
	* A1
	* A2

##### 有序列表
<pre><code>	1. This is the First.
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
` 2014\. : ` 2014\. 0x7DE.

### 引用

<pre><code>加&gt;就是引用，&gt; &gt; 就是两层引用。
&gt; Rep 1
&gt; &gt; Rep 2
which displays as:</code></pre>
> Rep 1
> > Rep 2

### 代码

	本来加四个空格或者一个Tab就是代码，只是代码若以星号等打头则我还不知道语法。
内联代码可以用 `` ` `` 来包围，如果代码里有`` ` ``, 可以用多个``` `` ```包含代码。
也可以用???来指明语言。如


-- EOF --


<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/3.0/"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by-nc-sa/3.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/3.0/">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>.



<p>{{ page.date | date_to_string }}</p>
