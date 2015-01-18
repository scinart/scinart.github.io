---
layout: post
title: "矩阵的意义 (1)"
date: 2015-01-18
timestamp: "2015-01-18 19:01:29 scinart"
categories: math
tag: note
comments: true
toc: no
cc: "by-nc-nd"

---

前言，读了N遍Gilbert Strang的Introduction to Linear Algebra. 该忘的还是忘了。终于我要开始做笔记了。

以下讨论的都是实矩阵，还没有想过复矩阵的意义。

## 矩阵作为线性变换

假设用粗体上标表示维度，那么

$$
\boldsymbol{y^{m}} = \boldsymbol{A^{m×n}}\boldsymbol{x^{n}}
$$

定义了一个线性变换 $$ f : \mathbb{R}^n → \mathbb{R}^m $$，满足 $$f(\boldsymbol{x}+\boldsymbol{y}) = f(\boldsymbol{x})+f(\boldsymbol{y})$$

思考：任何满足 $$f(\boldsymbol{x}+\boldsymbol{y}) = f(\boldsymbol{x})+f(\boldsymbol{y})$$的$$ f : \mathbb{R}^n → \mathbb{R}^m $$都一一对应一个矩阵么？

存在一个矩阵$$\boldsymbol{A}$$，肯定存在一个函数 $$f_{\boldsymbol{A}}$$，因为这个$$\boldsymbol{A}$$就是一个函数。反之，任何以上函数都能找到一个$$\boldsymbol{A}$$么？(好像没有那么显然，待我想想。)

#### 线性变换之旋转

在二维中，我们知道旋转矩阵是$$ \begin{bmatrix}
cosθ & -sinθ \\
sinθ & cosθ \end{bmatrix}$$，在高维，有[吉文斯旋转矩阵](https://zh.wikipedia.org/wiki/%E5%90%89%E6%96%87%E6%96%AF%E6%97%8B%E8%BD%AC)

$$
G(i,j,θ) = \begin{bmatrix}
     1 & \cdots &      0 & \cdots &      0 & \cdots &      0 \\
\vdots & \ddots & \vdots &        & \vdots &        & \vdots \\
     0 & \cdots &      c & \cdots &     -s & \cdots &      0 \\
\vdots &        & \vdots & \ddots & \vdots &        & \vdots \\
     0 & \cdots &      s & \cdots &      c & \cdots &      0 \\
\vdots &        & \vdots &        & \vdots & \ddots & \vdots \\
     0 & \cdots &      0 & \cdots &      0 & \cdots &      1 \\
\end{bmatrix}
$$

有关旋转更深的理解暂时还不有。

#### 线性变换之放缩，镜像

没啥可写的

#### 线性变换之投影

以后写。

## 满秩矩阵与距离

学名**范数**，欧氏距离记为$$\|\boldsymbol{x}\|_2 = \sqrt{x_1^2+\cdots+x_n^2} $$

思考：任何满秩方阵，都可以通过放缩，镜像和旋转的组合得到么？

#### 满秩方阵对单位圆的变换

断言：任何满秩方阵，作用于单位圆之后得到一个中心在原点的椭球。

思考：真的么？

#### 定义新距离

来源于[实用多元统计分析](http://book.douban.com/subject/3519805/)1.5 距离

假设我们要定义一种新距离，叫椭圆距离。椭圆用$$\boldsymbol{C}$$表示。(没错，就是二次型)

定义$$\|\boldsymbol{x}\|_{\boldsymbol{C}} = \sqrt{\boldsymbol{x'}\boldsymbol{C}\boldsymbol{x}} $$，其意义是等距离线(想像成等高线)是个椭圆形。

当然，距离(范数)不是你想定义就定义的，必须满足[三角不等式等条件](https://zh.wikipedia.org/zh/%E8%8C%83%E6%95%B0#.E5.AE.9A.E7.BE.A9)。

三角不等式我没证出来。证出来之后补在这里。![挥泪](http://bbs.nankai.edu.cn/data/ueditor/dialogs/emotion/images/jx2/j_0008.gif)

#### 变换与新距离

假设我们有一个满秩方阵$$\boldsymbol{A}$$。我们希望找到一个$$\boldsymbol{C}$$，使得变换前欧氏距离相同的点，变换后的$$\boldsymbol{C}$$椭圆距离相同。换句话说：Given full rank square matrix $$\boldsymbol{A}$$, find $$\boldsymbol{C}$$ such that

$$
\|\boldsymbol{x}\|_2 = \|\boldsymbol{Ax}\|_{\boldsymbol{C}}
$$

另一个记法为
$$
\|\boldsymbol{x}\|_\boldsymbol{I} = \|\boldsymbol{Ax}\|_{\boldsymbol{C}}
$$
其中$$\boldsymbol{I}$$ 是单位矩阵。

要找这个很容易。由定义：

$$
\begin{aligned} 
\|\boldsymbol{x}\|_\boldsymbol{I} &= \|\boldsymbol{Ax}\|_{\boldsymbol{C}} \\
\boldsymbol{x}^T\boldsymbol{I}\boldsymbol{x} &= (\boldsymbol{Ax})^T\boldsymbol{C}\boldsymbol{Ax} \\
\boldsymbol{x}^T\boldsymbol{I}\boldsymbol{x} &= \boldsymbol{x}^T\boldsymbol{A^{T}CA}\boldsymbol{x} \\
\boldsymbol{I} &= \boldsymbol{A^{T}CA} \;\;\;\;\;\;\;\;\cdots\cdots\cdots\cdots\text{一定么？一定么？一定是这样么？} \\
\boldsymbol{C} &= \boldsymbol{A^{-T}A^{-1}}
\end{aligned} 
$$
