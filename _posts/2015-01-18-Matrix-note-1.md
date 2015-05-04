---
layout: post
title: "矩阵的意义 (1)"
date: 2015-01-18
timestamp: "2015-02-10 21:01:04 scinart"
categories: math
tag: note
comments: true
toc: no
cc: "by-nc-nd"

---

前言，读了N遍Gilbert Strang的Introduction to Linear Algebra. 该忘的还是忘了。终于我要开始做笔记了。

以下讨论的都是实矩阵，还没有想过复矩阵的意义。

## 矩阵作为线性变换

$$
\underset{m×1}{\boldsymbol{y}} = \underset{m×n}{\boldsymbol{A}}\underset{n×1}{\boldsymbol{x}}
$$

定义了一个线性变换 $$ f : \mathbb{R}^n → \mathbb{R}^m $$，满足
$$f(c_1\boldsymbol{x}+c_2\boldsymbol{y}) = c_1f(\boldsymbol{x})+c_2f(\boldsymbol{y})$$

思考：任何满足
$$f(c_1\boldsymbol{x}+c_2\boldsymbol{y}) = c_1f(\boldsymbol{x})+c_2f(\boldsymbol{y})$$
的$$ f : \mathbb{R}^n → \mathbb{R}^m $$都一一对应一个矩阵么？

存在一个矩阵$$\boldsymbol{A}$$，肯定存在一个函数 $$f_{\boldsymbol{A}}$$，因为这个$$\boldsymbol{A}$$就是一个函数。  
<!-- 反之，任何以上函数都能找到一个$$\boldsymbol{A}$$么？(好像没有那么显然，待我想想。) -->
反之，任意给定$$f$$，我们把$$f$$应用于$$\boldsymbol{I^{n×n}}$$的每个列向量，得到$$n$$个$$m$$维的向量，定义$$\boldsymbol{A}$$等于这$$n$$个列向量横向排列的矩阵，则有$$f(\boldsymbol{I})=\boldsymbol{AI}$$，由线性性可知，$$\boldsymbol{A}$$完全赞同于$$f$$

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

直接参考 Gilbert Strang "Introduction to linear algebra" 4.2节吧。

## 满秩矩阵与距离

学名**范数**，欧氏距离记为$$\|\boldsymbol{x}\|_2 = \sqrt{x_1^2+\cdots+x_n^2} $$

思考：任何满秩方阵，都可以通过放缩，镜像和旋转的组合得到么？

#### 满秩方阵对单位圆的变换

断言：任何满秩方阵，作用于单位圆之后得到一个中心在原点的椭球。

思考：真的么？

#### 定义新距离

来源于[实用多元统计分析](http://book.douban.com/subject/3519805/)1.5 距离

<s>假设我们要定义一种新距离，叫椭圆距离。椭圆用C表示。(C是一个正定矩阵)</s>  
今天才知道这个叫“[马氏距离](https://zh.wikipedia.org/zh/%E9%A9%AC%E6%B0%8F%E8%B7%9D%E7%A6%BB)”，后面的名称不改了。
<img src="http://bbs.nankai.edu.cn/data/ueditor/dialogs/emotion/images/jx2/j_0008.gif" alt="挥泪">

定义$$\|\boldsymbol{x}\|_{\boldsymbol{C}} = \sqrt{\boldsymbol{x'}\boldsymbol{C}\boldsymbol{x}} $$，其意义是等距离线(想像成等高线)是个椭圆形。

当然，距离(范数)不是你想定义就定义的，必须满足[三角不等式等条件](https://zh.wikipedia.org/zh/%E8%8C%83%E6%95%B0#.E5.AE.9A.E7.BE.A9)。

<span><s>三角不等式我没证出来。证出来之后补在这里。</s><img src="http://bbs.nankai.edu.cn/data/ueditor/dialogs/emotion/images/jx2/j_0008.gif" alt="挥泪"></span>

在
<a href="javascript:;" 
   class="screenshot" 
   rel="http://cdn2.comtrya.com/wp-content/uploads/2013/05/tamayura2_thumb.jpg" 
   title="">
 不愿透露的大牛
</a>
的帮助下。给出个证明。

<!-- TODO: 此段应该做可折叠的 -->

给定正定矩阵C，它是[正交可对角化](https://ccjou.wordpress.com/2011/02/09/%E5%AF%A6%E5%B0%8D%E7%A8%B1%E7%9F%A9%E9%99%A3%E5%8F%AF%E6%AD%A3%E4%BA%A4%E5%B0%8D%E8%A7%92%E5%8C%96%E7%9A%84%E8%AD%89%E6%98%8E/)的。
换句话说，存在正交矩阵$$\boldsymbol{Q}$$使得$$\boldsymbol{C}=\boldsymbol{Q}\mathbf{Λ}\boldsymbol{Q}^{T}$$

<p class="font12px">
<s>我还不知道为什么正定矩阵就是正交可对角化呢。</s><br>
<a href="/math/2015/02/24/Matrix-Note-5/">谱定理的证明终于找到一个</a>
</p>

且$$\mathbf{Λ}$$都是正值。

设两向量为$$\boldsymbol{x},\boldsymbol{y}$$，设

$$
\boldsymbol{Q}^{T}\boldsymbol{x}=\begin{pmatrix}a_1 a_2 ⋯ a_n \end{pmatrix}^{T} \\
\boldsymbol{Q}^{T}\boldsymbol{y}=\begin{pmatrix}b_1 b_2 ⋯ b_n \end{pmatrix}^{T} \\
则有： \\
\begin{align}
\|\boldsymbol{x}+\boldsymbol{y}\|_\boldsymbol{C}^{2}
&= (\boldsymbol{x}+\boldsymbol{y})^{T} \boldsymbol{C} (\boldsymbol{x}+\boldsymbol{y}) \\
&= (\boldsymbol{Q}^{T}\boldsymbol{x}+\boldsymbol{Q}^{T}\boldsymbol{y})^{T}\mathbf{Λ}(\boldsymbol{Q}^{T}\boldsymbol{x}+\boldsymbol{Q}^{T}\boldsymbol{y}) \\
&= λ_1(a_1+b_1)^2 + ⋯ + λ_n(a_n+b_n)^2 \\
&= \sum_{i}{λ_i(a_i+b_i)^2}
\end{align}
$$

$$
同样地：
\begin{align}
(\|\boldsymbol{x}\|_\boldsymbol{C}+\|\boldsymbol{y}\|_\boldsymbol{C})^{2}
&= \left(\sqrt{\sum_{i}{λ_{i}a_{i}^{2}}} + \sqrt{\sum_{i}{λ_{i}b_{i}^{2}}} \right)^2
\end{align}
\\
接下来三角不等式就有点显然了。
$$



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
\boldsymbol{I} &= \boldsymbol{A^{T}CA} \;\;\;\;\cdots\cdots\text{把上式展开，逐项对比系数可以得到。} \\
\boldsymbol{C} &= \boldsymbol{A^{-T}A^{-1}}
\end{aligned} 
$$
