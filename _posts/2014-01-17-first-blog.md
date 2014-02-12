---
layout: post
title:  "第一篇博客看来是Markdown语法的笔记了。"
date:   2014-01-17 15:30:25
timestamp: "2014-02-12 09:38:14 scinart"
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
` **\*\*粗体\*\*** : ` **\*\*粗体\*\***

` *\*斜体\** :` *\*斜体\**

` ***\*\*\*粗斜体\*\*\**** : ` ***\*\*\*粗斜体\*\*\****

~~删除线~~ 本地测试未成功。

水平线 如果在一行里只放三个或更多个连字符，或星号或下划线，你就会得到一个水平线标记(&lt;hr /&gt;)。如:  
` * * * `&nbsp;&nbsp;&nbsp;&nbsp;` *** `&nbsp;&nbsp;&nbsp;&nbsp;` - - - `&nbsp;&nbsp;&nbsp;&nbsp;` _________ `

想要分成两行，需要在行尾输入两个空格。  
我说的对吧~
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

####代码高亮

代码高亮有几种方案，我选择轻量级的前端渲染，用的是google-code-prettify

下载[google-code-prettify](https://code.google.com/p/google-code-prettify/)，将`run_prettify.js`和某css(ps：给了好几种，可以根据自己的喜好选择，有预览)加到网页模板中。比如我加到了我的 `_include/themes/...../post.html`里了。

以后要贴代码的时候，放在 `<pre class="prettyprint linenums">`和`</pre>`标签之间。(ps:linenums表示显示代码的行号，如果要从第四行开始，可以写成这样linenums:4)

<strong>
[其他的基本是按这里做的](http://blog.evercoding.net/2013/02/27/highlight-code-with-google-code-prettify/)
</strong>

<pre class="prettyprint lang-html">
&lt;pre class="prettyprint lang-html"&gt;
  The lang-* class specifies the language file extensions.
  File extensions supported by default include
    "bsh", "c", "cc", "cpp", "cs", "csh", "cyc", "cv", "htm", "html",
    "java", "js", "m", "mxml", "perl", "pl", "pm", "py", "rb", "sh",
    "xhtml", "xml", "xsl".
&lt;/pre&gt;
</pre>

### 链接

Inline:
<pre><code>&lt;https://www.google.com&gt;</code></pre>
<pre><code>[google](https://www.google.com)</code></pre>
Reference:
<pre><code>[scinart's github][scinart_github]<br/>[scinart_github]:https://www.github.com/scinart</code></pre>

<http://www.google.com>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[scinart's github][scinart_github]
[scinart_github]:https://www.github.com/scinart

**可惜用<>包含的东西只能用http, https亲测不行。**

<pre><code>
![这里是alt内容](http://www.google.rw/images/srpr/logo4w.png)<br/>
![][google_url]<br/>
[google_url]:http://www.google.rw/images/srpr/logo4w.png<br/>
</code></pre>

See a big Mandelbrot set:
![Mandelbrot_set](http://upload.wikimedia.org/wikipedia/commons/2/21/Mandel_zoom_00_mandelbrot_set.jpg)
file from <http://en.wikipedia.org/wiki/File:Mandel_zoom_00_mandelbrot_set.jpg>


