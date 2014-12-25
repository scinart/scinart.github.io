---
layout: post
title: "费马小定理等等"
date: 2014-12-17
timestamp: "2014-12-25 19:19:20 scinart"
categories: math
tag: note
comments: true
toc: false
cc: "by-nc-sa"

---

发现很多人都写过了，于是不重复造轮子了。

<http://www.xieguofang.cn/Maths/Number_Theory/Introduction_to_Number_Theory_1.htm>  
<http://www.xieguofang.cn/Maths/Number_Theory/Introduction_to_Number_Theory_2.htm>  
<http://www.xieguofang.cn/Maths/Number_Theory/Introduction_to_Number_Theory_3.htm>  

<https://www.youtube.com/watch?v=XPMzosLWGHo>  
<http://www.matrix67.com/blog/archives/234>  

欧拉定理(数论)

1. 所有与$$p$$互素的数，对模p乘法构成群(G)。
    1. 封闭性 (因为都没有公约数，所以怎么乘都没有公约数，就那几个数)
	2. 結合律 (乘法结合律)
	3. 單位元 (1)
	4. 逆元   ($$1,\, a,\, a^2,\, a^3,\, …,\, a^x$$, 必然会回到$$1$$，所以$$a^x$$是$$a$$的逆元)
        1. 上述数列一定会有圈(略)，即O形或者6形
        2. 上述数列圈的起点一定是1(即一定是O形)，否则就意味者在圈起点，存在$$a^p-a^q≡0$$，就是$$(a^{(p-q)}-1)*a^q≡0$$，就是$$a^{(p-q)}-1≡0$$，就是$$a^{(p-q)}≡1$$，与假设不符。

2. $$1,\, a,\, a^2,\, a^3,\, …,\, a^x$$是它的一个子群。显然它四个条件都满足。

由Lagrange定理，子群(H)的阶整除群(G)的阶。所以 $$a^{φ(n)} ≡ 1 $$ ‼

[维基百科](http://zh.wikipedia.org/zh/欧拉定理_(数论))上有一个更简单的证明，不过，这也要在读完群的定义才能理解。

**没错我就是搬运工。**

Lagrange定理：读完以下链接的1-8就可以了。

<http://dogschool.tripod.com/index.html> (有广告，不过写的很好)


