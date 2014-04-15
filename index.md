---
layout: page
title: Scinart's Blog
tagline: Supporting tagline
---
{% include JB/setup %}

> Carpe Diem.

<p style="text-align: right"> -- 《死亡诗社》台词 </p>

此处应该是自我介绍，或者是博客介绍什么的。
可我还没想好怎么写，以后随时会变吧。

[死亡诗社](http://en.wikipedia.org/wiki/Mandelbrot_set)是我最喜欢的电影了吧。(路过的可以看看，**博主推荐**)

[Mozart](http://en.wikipedia.org/wiki/Wolfgang_Amadeus_Mozart)是我最喜欢的音乐了吧。

[Mandelbrot Set](http://en.wikipedia.org/wiki/Mandelbrot_set)是最好看的图案了吧。

<p>关于我，请见<a href="about.html">ABOUT ME.</a></p>
<p>文章列表，请见<a href="archive.html">Archive.</a></p>
<p>文章分类浏览：<a href="categories.html">Categories.</a></p>

最新文章：<br/>

<ul>
  <!-- the following line will work after jekyll 2.0.0 (now 1.5.1) -->
  {% assign sorted = site.posts | sort:"timestamp" %}
  {% if sorted %}
  {% else %}
    {% assign sorted = site.posts %}
  {% endif %}

  {% for post in sorted limit:20 %}
    <li>
    <a href="{{ post.url }}">{{ post.date | date_to_string }} &raquo; {{ post.title }}</a>
    {% if post.content contains '<!-- more -->' %}
    <span style="padding-left: 20px">{{ post.content | split:'<!-- more -->' | first }}</span>
    <!-- <p><a href="{{ post.url }}">Continue reading</a></p> -->
	<br/>......
	{% endif %}
    </li>
  {% endfor %}
</ul>


