---
layout: post
title: "矩阵的意义 (2)"
date: 2015-02-10
timestamp: "2015-02-12 22:52:16 scinart"
categories: math
tag: note
comments: true
toc: false
cc: "by-nc-sa"

---

前言：线性代数已经不够了，要看矩阵论了。

## 参考资料：

Introduction to linear algebra - Gilbert Strang  
[行列式的幾何意義](https://ccjou.wordpress.com/2010/04/29/%E8%A1%8C%E5%88%97%E5%BC%8F%E7%9A%84%E5%B9%BE%E4%BD%95%E6%84%8F%E7%BE%A9/)

## 行列式

#### 行列式的函数特征

**如果一个函数依次对其各变元的一个给定划分中的每一组变元都是线性的，就称这个函数是** ***多重线性*** **的**。  
例如，$$f(x_1,x_2)=x_1x_2$$关于划分$$\{x_1\}, \{x_2\}$$是多重线性的。  

对于任何一个纯量值函数(纯量值≈标量)，行列式是唯一满足下列条件的函数$$f:M^{n×n}(F)→F$$(从n×n矩阵到标量):

1. 多重线性的
2. 交错的：对行初等交换使结果乘以-1
3. 规范的：$$f(I)=1$$

给定行列式的Big Formula

$$
det \boldsymbol{A} = \text{sum over all }\boldsymbol{n}!\text{ column permutations }\boldsymbol{P} = (α, β, …, ω) \\
\sum{(det \boldsymbol{P})a_{lα}a_{2β}\cdots a_{nω}}
$$

给定公式和三条性质，它们之间是可以互相推出来的。所以，行列式是唯一满足这三条性质的公式。

关于推导。还是看Gilbert Strang的公开课或者他那本教材吧。美妙之极。

#### Schmidt 正交化

设线性无关向量$$\boldsymbol{a}, \boldsymbol{b}, \boldsymbol{c}$$ 等

$$
\begin{bmatrix}
\boldsymbol{a} & \boldsymbol{b} & \boldsymbol{c}
\end{bmatrix}
 = 
\begin{bmatrix}
\boldsymbol{q_1} & \boldsymbol{q_2} & \boldsymbol{q_3}
\end{bmatrix}
\begin{bmatrix}
\boldsymbol{q}_{1}^{T}\boldsymbol{a} & \boldsymbol{q}_{1}^{T}\boldsymbol{b} & \boldsymbol{q}_{1}^{T}\boldsymbol{c} \\
                                     & \boldsymbol{q}_{2}^{T}\boldsymbol{b} & \boldsymbol{q}_{2}^{T}\boldsymbol{c} \\
									 &                                      & \boldsymbol{q}_{3}^{T}\boldsymbol{c}
\end{bmatrix}
$$

思路很好理解。Schmidt正交化么。展开也好理解。$$\boldsymbol{q}_{1}\boldsymbol{q}_{1}^{T}$$是投影矩阵，由于$$\boldsymbol{q}$$可以看成一组正交基底，那$$\boldsymbol{q}_{1}\boldsymbol{q}_{1}^{T}$$就是投影到坐标轴的矩阵。$$\boldsymbol{A}=\boldsymbol{QR}$$就是把$$\boldsymbol{A}$$用一组找出来的正交基(Schmidt正交化的过程)分解了一下。

记

$$
\begin{bmatrix}
\boldsymbol{q}_{1}^{T}\boldsymbol{a} & \boldsymbol{q}_{1}^{T}\boldsymbol{b} & \boldsymbol{q}_{1}^{T}\boldsymbol{c} \\
                                     & \boldsymbol{q}_{2}^{T}\boldsymbol{b} & \boldsymbol{q}_{2}^{T}\boldsymbol{c} \\
									 &                                      & \boldsymbol{q}_{3}^{T}\boldsymbol{c}
\end{bmatrix}
=
\begin{bmatrix}
r_{11} & r_{12} & r_{13} \\
       & r_{22} & r_{23} \\
       &        & r_{33} \\
\end{bmatrix} = \boldsymbol{R}.
$$

则显然，这几个向量张成的面积，不考虑方向的话，等于$$\lvert R \rvert $$

所以，神奇的事情发生了。

$$
\begin{align}
\sqrt{\lvert \boldsymbol{A}^{T}\boldsymbol{A} \rvert} 
&= \sqrt{ \lvert \boldsymbol{R}^{T}\boldsymbol{Q}^{T}\boldsymbol{QR} \rvert } \\
&= \sqrt{ \lvert \boldsymbol{R}^{T}\boldsymbol{R} \rvert } \\
&= \sqrt{ \lvert \boldsymbol{R}^{T}\rvert \lvert \boldsymbol{R} \rvert } \\
&= \lvert R \rvert 的绝对值
\end{align}
$$

#### 行列式的意义

明显是n个列向量(或行向量)张成的面积。  
正负代表一种方向，方向应该也都是人为规定的，  
以 [1 0 0 ... ], [0 1 0 ... ], [0 0 1 ... ]为单位正方向。
这部分暂时理解到这里。  
其实$$\lvert \boldsymbol{A}^{T} \rvert = \lvert \boldsymbol{A} \rvert$$挺神奇的，记得在Gilbert Strang讲公开课的时候，他也不知道为什么会这样(几何解释)。
