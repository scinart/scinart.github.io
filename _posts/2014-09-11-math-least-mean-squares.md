---
layout: post
title:  "终于再一次理解最小二乘法了"
date:   2014-09-11 15:30:25
timestamp: "2014-09-11 14:26:27 scinart"
categories: math
tag: note
comments: true
toc: false
cc: "by-nc-sa"

---

在[上篇文章](/cs/2014/06/19/Linear-Regression/)中还不是很理解，现在终于觉得又理解了。  
长话短说：给定 $$ m × n $$ 的矩阵 $$ \mathbf{X} $$，和$$ m × 1 $$的矩阵 $$\mathbf{y}$$，求$$n×1$$的矩阵$$ \mathbf{θ} $$，使得$$ \mathbf{X⋅θ}$$最**接近**$$\mathbf{y}$$.

### 不理解：

只要使 $$ \mathbf{X⋅θ} - \mathbf{y} $$尽量小就可以了，取个sum吧，但是这个值有正有负；
取个绝对值吧，取个平方绝对值吧，这样会强调一下偏差更远的一些点。

### 代数理解：

不就是解$$ \mathbf{X⋅θ} = \mathbf{y} $$么，前者可以达到$$\mathbf{X}$$的所有列空间(column space)，所以我们只要取$$\mathbf{y}$$在$$\mathbf{X}$$的列空间上的投影就好了。此时设$$\mathbf{ε} = \mathbf{X⋅θ-y}$$，那么$$\mathbf{ε}$$代表了误差向量，最小二乘就相当于最小化这个误差向量的长度，也就相当于取到了投影。
(Gilbert Strang - Introduction to Linear Algebra 4.3 Least Squares Approximations)

### 概率论理解：

我们设 $$ \mathbf{X⋅θ} + \mathbf{ε} = \mathbf{y} $$，
其中$$\mathbf{ε}$$是标准差为0的正态分布噪声，
样本($$\mathbf{X}$$的行向量)在给定$$\mathbf{θ}$$是独立同分布的。
那么

<p class="font18px">

$$
p(ε^{(i)}) = \frac{1}{\sqrt{2π}θ}e^{-\frac{\left(ε^{(i)}\right)^2}{2σ^2}}
  ⇒ p(y^{(i)}|x^{(i)};θ) = \frac{1}{\sqrt{2π}θ}e^{-\frac{\left(y^{(i)}-θ^{T}x^{(i)}\right)^2}{2σ^2}}
$$

</p>

由最大似然估计

<p class="font18px">

$$

\begin{align}
L(θ) &= p(\mathbf{y} | \mathbf{X} ; \mathbf{θ}) \\
     &= \prod_{i}^{m}{p(y^{(i)}|x^{(i)};θ)} \\
	 &= \prod_{i}^{m}{\frac{1}{\sqrt{2π}σ} e^{-\frac{\left( y^{(i)}-θ^T x{(i)}\right)^{2}}{2σ^{2}}}}

\end{align}
$$

$$

\begin{align}
\log(L(θ)) &= \sum_{i}^{m}\log{\frac{1}{\sqrt{2π}σ} e^{-\frac{\left( y^{(i)}-θ^T x{(i)}\right)^{2}}{2σ^{2}}}} \\
          &= m \log{\frac{1}{\sqrt{2π}σ}} - \frac{1}{2σ^2}\sum_{i}^{m}\left(y^{(i)}-θ^T x^{(i)}\right)^2
\end{align}
$$

$$
maximize(L(θ)) ⇒ minimize \sum_{i}^{m}\left(y^{(i)}-θ^T x^{(i)}\right)^2
$$
</p>

### See:

Hulu Slideshare chunyang Wei 2013.10.17 ([Hulu微博](http://weibo.com/hulujobs)分享过，下载地址不可考)
