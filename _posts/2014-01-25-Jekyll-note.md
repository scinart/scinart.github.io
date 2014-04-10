---
layout: post
title:  "Jekyll的笔记，网页就是这货生成的。"
date:   2014-01-25 00:00:00
timestamp: "2014-04-01 23:21:33 scinart"
categories: markdown
comments: true
toc: false
cc: "by-nc-sa"

---

## 基本结构
引自<http://www.soimort.org/posts/101/>

>Jekyll从核心上来说是一个文本转换引擎。该系统内部的工作原理是：你输入一些用自己喜爱的标记语言格式书写的文本，可以是Markdown、Textile或纯粹的HTML，它将这些文本混合后放入一个或一整套页面布局当中。在整个过程中，你可以自行决定你的站点URL的模式、以及哪些数据将被显示在页面中，等等。这一切都将通过严格的文本编辑完成，而生成的Web界面则是最终的产品。
>
>一个典型的Jekyll站点通常具有如下结构：
>
><pre>.
>|-- _config.yml
>|-- _includes
>|-- _layouts
>|   |-- default.html
>|   `-- post.html
>|-- _posts
>|   |-- YYYY-MM-DD-TITLE.md
>|   `-- YYYY-MM-DD-TITLE(2).md
>|-- _site
>`-- index.html</pre>

### 以markdown的文章为例说一下过程吧。
<ol><li>比如一个文件叫2014-01-25-something.md 文件开头的元数据是这样的：

<pre>---
layout: post
title:  "Jekyll的笔记，网页就是这货生成的。"
date:   2014-01-25 00:00:00
categories: markdown jekyll
comments: true
othertag: value as string

---</pre>
将来就可以用`page.title`来引用。(纯属个人瞎猜)

接下来就是markdown了，不介绍了。

</li>
<li>
layout: post

然后Jekyll就去_layout文件夹里找到post.html并按照它的指示生成代码去了。
jekyll bootstrap twitter 主题的post长这样⇓&nbsp;&nbsp;
<s><strong>救命啊，{和%挨着doesn't work啊。</strong></s><br/>
用{% raw %}{% raw %}{% endraw %} 和 endraw 括出来就可以暂时不解析了。
{% raw %}
<pre>
---
layout: default
---
{% include JB/setup %}
{% include themes/twitter/post.html %}

{% endraw %}
</pre>

</li>

</ol>

