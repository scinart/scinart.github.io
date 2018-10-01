---
layout: post
title:  "第一篇博客看来是<del>Markdown</del>Kramdown语法的笔记了。"
date:   2014-01-17 15:30:25
author: scinart
timestamp: "2018-09-30 21:21:50 scinart"
categories: markdown
comments: true
toc: true
cc: "by-nc-sa"

---
  
+ {: .foldme open="" summary-style="font-size: 24px"} 新增功能

  Heavily copy-and-paste from <http://gohom.win/2015/11/06/Kramdown-note/>

  ## Header ID

      ## Header1 {#ID1}
      
      #### Header2 #### {#ID2}
      
      Header3 {#ID3}
      -----
      
      [GoH1](#ID1), [GoH2](#ID2), [GoH3](#ID3)

  效果：

  ## Header1 {#ID1}

  #### Header2 #### {#ID2}

  Header3 {#ID3}
  -----

  [GoH1](#ID1), [GoH2](#ID2), [GoH3](#ID3)

  ## Footnote脚注

  This is some text.[^1]. Other text.[^footnote]. Not exist: [^noexist]
  
  [^1]: Some *crazy* footnote definition.
  
  [^footnote]:
      > Blockquotes can be in a footnote.
  
          as well as code blocks
  
      or, naturally, simple paragraphs
  
  [^another]: Another test.

  ## 缩略语：

  就是html的abbr. 鼠标移到相关词上面会出现词义解析. 在文档任意位置``*[word]: explanation``即可.

  Move to HTML please.

  *[HTML]: Hyper Text Markup Language

  ## Inline Attribute Lists (IAL)

    IAL就是允许对block元素甚至span元素增加HTML的属性,例如class, name, id, 颜色等。
    在block/span元素后跟`{:property=value}`即可, 
    对于id可以直接`{: #id}`, 对于class直接`{: .classname}`。
	甚至像css一样先定义一个简称{:shortcut: p1=v1 p2=v2}. 多个相同属性时或者合并(如class),或者覆盖(一般属性,后者覆盖前者.)
  
    对于block元素，这种IAL属性修饰可以在其前，也可以在其后，可以有多个，甚至有空格，直到空行为止。
    对于span级元素，则必须紧跟其后(同行)并且不能有空格，支持多个IAL紧跟。

+ {: .foldme notopen="" summary-style="font-size: 24px"} 表格：

      |-----------------+------------+-----------------+----------------|
      | Default aligned |Left aligned| Center aligned  | Right aligned  |
      |-----------------|:-----------|:---------------:|---------------:|
      | First body part |Second cell | Third cell      | fourth cell    |
      | Second line     |foo         | **strong**      | baz            |
      | Third line      |quux        | baz             | bar            |
      |-----------------+------------+-----------------+----------------|
      | Second body     |            |                 |                |
      | 2 line          |            |                 |                |
      |=================+============+=================+================|
      | Footer row      |            |                 |                |
      |-----------------+------------+-----------------+----------------|

  效果：

  |-----------------+------------+-----------------+----------------|
  | Default aligned |Left aligned| Center aligned  | Right aligned  |
  |-----------------|:-----------|:---------------:|---------------:|
  | First body part |Second cell | Third cell      | fourth cell    |
  | Second line     |foo         | **strong**      | baz            |
  | Third line      |quux        | baz             | bar            |
  |-----------------+------------+-----------------+----------------|
  | Second body     |            |                 |                |
  | 2 line          |            |                 |                |
  |=================+============+=================+================|
  | Footer row      |            |                 |                |
  |-----------------+------------+-----------------+----------------|

+ {: .foldme notopen="" summary-style="font-size: 24px"} 基本格式化

  + **\*\*粗体\*\***
  + __\_\_粗体\_\___
  + *\*斜体\**
  + _\_斜体\__
  + ***\*\*\*粗斜体\*\*\****
  + ___\_\_\_粗斜体\_\_\____
  + ``~~删除线~~``
  + 水平线

    如果在一行里只放三个或更多个连字符，或星号或下划线，你就会得到一个水平线标记(&lt;hr /&gt;)。如: `` * * * ``        `` *** ``        `` - - - ``        `` _________ ``

  + 换行

    想要分成两行，需要在行尾输入两个空格。__  
    我说的对吧~

+ {: .foldme notopen="" summary-style="font-size: 24px"} 列表

  + {: .foldme notopen="" } 无序列表

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
  
  + {: .foldme notopen="" } 有序列表
  
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

+ {: .foldme notopen="" summary-style="font-size: 24px"} 引用

  <pre><code>加&gt;就是引用，&gt; &gt; 就是两层引用。
  
  &gt; Rep 1
  &gt;
  &gt; &gt; Rep 2
  
  which displays as:</code></pre>
  
  > Rep 1
  >
  > > Rep 2

+ {: .foldme notopen="" summary-style="font-size: 24px"} 代码

  四个空格或者一个Tab就能format成<pre><code>, 内联代码可以用 `` ` `` 来包围，如果代码里有`` ` ``, 可以用 ``` `` ```包含代码。

  代码高亮

  目前使用 <https://highlightjs.org/> ps: 这个东西被设计成不支持line number.

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
  
  用法：
  
  ```
  ~~~c++
  int main(int argc, char* argv[], char* envp[])
  {
      return 0;
  }
  ~~~
  ```

  效果：
  
  ~~~c++
  int main(int argc, char* argv[], char* envp[])
  {
      return 0;
  }
  ~~~

+ {: .foldme notopen="" summary-style="font-size: 24px"} 链接

  <pre><code>&lt;https://www.google.com&gt;
  [google](https://www.google.com "悬停显示此标题")</code></pre>
  <pre><code>![图片链接，这里是alt标签内容](http://www.google.rw/images/srpr/logo4w.png)<br/></code></pre>

  See a big Mandelbrot set:
  ![Mandelbrot_set_photo](http://upload.wikimedia.org/wikipedia/commons/2/21/Mandel_zoom_00_mandelbrot_set.jpg)
  file from <http://en.wikipedia.org/wiki/File:Mandel_zoom_00_mandelbrot_set.jpg>
