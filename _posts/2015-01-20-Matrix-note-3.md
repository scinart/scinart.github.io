---
layout: post
title: "矩阵求导 (2)"
date: 2015-01-20
timestamp: "2015-01-20 22:23:44 scinart"
categories: math
tag: note
comments: true
toc: no
cc: "by-nc-nd"

---

### 定义3：

$$
\frac{∂α}{∂\boldsymbol{A}} = \begin{bmatrix}
 \frac{∂α}{∂a_{11}} & \frac{∂α}{∂a_{21}} &  \cdots & \frac{∂α}{∂a_{n1}} \\
 \frac{∂α}{∂a_{12}} & \frac{∂α}{∂a_{22}} &  \cdots & \frac{∂α}{∂a_{n2}} \\
 \vdots &  \vdots &  \ddots & \vdots \\
 \frac{∂α}{∂a_{1m}} & \frac{∂α}{∂a_{2m}} &  \cdots & \frac{∂α}{∂a_{nm}} \\
\end{bmatrix}
$$

此处有的有转置，有的没转置，比较混乱。我定义了一个有转置的。

此处定理应该也比较多。作为个人笔记，我就看懂哪个写哪个了。

### 定理：

$$
\frac{∂(\boldsymbol{y}^{T}\boldsymbol{A}\boldsymbol{x})}{∂\boldsymbol{A}} = \boldsymbol{x}\boldsymbol{y}^{T}
$$

### 定理：

$$
\frac{∂\left\lvert \boldsymbol{X} \right\rvert}{∂\boldsymbol{X}} = \left\lvert\boldsymbol{X}\right\rvert\boldsymbol{X}^{-1}
$$

证：<a href="javascript:;" 
   class="screenshot" 
   rel="http://cdn2.comtrya.com/wp-content/uploads/2013/05/tamayura2_thumb.jpg" 
   title="">
 (不愿透露的大牛告诉我的)
</a>

$$
\begin{align}
\frac{∂\left\lvert \boldsymbol{X} \right\rvert}{∂\boldsymbol{X}}
&=
\begin{vmatrix}
 \boldsymbol{A}_{11} & \boldsymbol{A}_{12} &  \cdots & \boldsymbol{A}_{1n} \\
 \boldsymbol{A}_{21} & \boldsymbol{A}_{22} &  \cdots & \boldsymbol{A}_{2n} \\
 \vdots &  \vdots &  \ddots & \vdots \\
 \boldsymbol{A}_{n1} & \boldsymbol{A}_{n2} &  \cdots & \boldsymbol{A}_{nn} \\
\end{vmatrix}^{T} \\
&= \left\lvert \boldsymbol{X} \right\rvert \boldsymbol{X}^{-1} \;\;\;\;\text{余子式，伴随矩阵什么的，最后还有一个转置，就出来了。}
\end{align}
$$

### 定理：

$$
\frac{∂ln\left\lvert \boldsymbol{X} \right\rvert}{∂\boldsymbol{X}} = \boldsymbol{X}^{-1}
$$

证：

$$
链式法则么 \\
自己在脑中展开一下。 \\
然后你就总结出规律了。 \\
\frac{∂β}{∂\boldsymbol{X}} = \frac{∂β}{∂α}\frac{∂α}{∂\boldsymbol{X}}
$$

### 参考

The Matrix Cookbook.

