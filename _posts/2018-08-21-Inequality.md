---
layout: post
title: "Inequality Notes"
date: 2018-08-21
timestamp: "2018-08-27 14:05:37 mama"
categories: Math
comments: true
cc: "by-nc-nd"

---

## Notes on Inequality

* 柯西-施瓦茨不等式(Cauchy Schwarz inequality)


更新：柯西-施瓦茨不等式，本质上是内积空间中内积的一个性质，在[另一篇笔记的6.15节](../26/Algebra-2)看到了这个不等式，以下是过时的原始内容：

-------------------------

这篇文章：[向量分析-Cauchy-Schwarz不等式之本質與意義-林琦焜](http://www.math.ncku.edu.tw/~fang/向量分析-Cauchy-Schwarz不等式之本質與意義-林琦焜.pdf)([缓存](/pdfs/向量分析-Cauchy-Schwarz不等式之本質與意義-林琦焜.pdf))写的非常好。

  在思考内积时，不能用欧式空间/余弦定理等，而要抽象成不依赖空间的东西，再用内积定义角度，神奇的是，角度定义可以不止一种，甚至可以是复数。

  如果 $$ a_1, a_2, \cdots, a_n, \text{ and } b_1, b_2, \cdots, b_n $$ 都是复数，那么

  $$
  \left\vert \sum_{i=1}^{n}{a_i\overline{b}_i} \right\vert^2 \leq \left( \sum_{i=1}^{n}{\lvert a_i \rvert^2} \right) \left( \sum_{i=1}^{n}{\lvert b_i \rvert^2} \right)
  $$

  证：设$$a,b$$是复向量, $$ a≠0 $$，$$λ$$是标量，$$c = b - λa$$

  $$ 0 ≤ \lvert c \rvert = c \overline{c} = (b-λa) (\overline{b} - λ \overline{a}) $$

  对$$λ$$应用判别式Δ≤0，得：

  $$
    ( b \overline{a} + a \overline{b} )^2 ≤ 4 \lvert a \rvert ^2 \lvert b \rvert ^2 \\
    ( b \overline{a} )^2 + (a \overline{b} )^2 ≤ 2 \lvert a \rvert ^2 \lvert b \rvert ^2
  $$

  注意到 $$ b \overline{a} = \overline{b \overline{a}} $$，所以

  $$ ( a \overline{b} )^2 ≤ \lvert a \rvert ^2 \lvert b \rvert ^2 $$

* 杨氏不等式(Young's inequality)

  $$ ab ≤ \int_0^a{f(x)} + \int_0^b{f^{-1}(y)} $$

  ![https://en.wikipedia.org/wiki/Young's_inequality_for_products#/media/File:Young.png](/assets/images/math/Inequality:Young.png)

  令 $$ f(x) = x^{p-1} \text{ where p > 1 } $$ 可得

  $$ ab ≤ \frac{a^p}{p} + \frac{b^q}{q} \text{ where } a,b>0,\,\frac{1}{p} + \frac{1}{q}=1 $$

  等号成立条件为 $$ b = a^{p-1} $$ ，亦即 $$ a = b^{q-1} $$ 亦即 $$ a^p = b^q $$

* Hölder不等式(实数版)

  给定任意实数$$a_1, \cdots, a_n,\, b_1, \cdots, b_n,\, p>1,\, q>1,\, \frac{1}{p} + \frac{1}{q} = 1 $$则：

  $$
    \sum_{i=1}^{n}{a_ib_i} ≤ \left( \sum_{i=1}^{n} \left\vert a_i \right\vert ^p \right) ^ { \frac{1}{p} }
                             \left( \sum_{i=1}^{n} \left\vert b_i \right\vert ^q \right) ^ { \frac{1}{q} }
  $$

  证：令

  $$ \widetilde{a}_i = \frac{a_i}{\left( \sum_{i=1}^{n} \left\vert a_i \right\vert ^p \right) ^ { \frac{1}{p} }},\, 
     \widetilde{b}_i = \frac{b_i}{\left( \sum_{i=1}^{n} \left\vert b_i \right\vert ^q \right) ^ { \frac{1}{q} }}, $$

  则由杨式不等式，左右累加并化简得 $$ \sum{\widetilde{a}_i \widetilde{b}_i} ≤ 1 $$，又分母大于0，所以分子小于分母，即为所求。

