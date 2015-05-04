---
layout: post
title: "矩阵的意义 (4)"
date: 2015-05-04
timestamp: "2015-05-04 14:54:21 scinart"
categories: math
tag: note
comments: true
toc: no
cc: "by-nc-nd"

---

这几篇矩阵的意义写的有点乱，主要原因是证明复杂，和依赖关系多。如[谱定理的证明](/math/2015/02/24/Matrix-Note-5/)是一个并不直觉(not intuitive)的递归证法。并依赖了[代数基本定理](/math/2015/02/25/math-FTA/)。
在[線代啟示錄](https://ccjou.wordpress.com/2011/02/09/%E5%AF%A6%E5%B0%8D%E7%A8%B1%E7%9F%A9%E9%99%A3%E5%8F%AF%E6%AD%A3%E4%BA%A4%E5%B0%8D%E8%A7%92%E5%8C%96%E7%9A%84%E8%AD%89%E6%98%8E/)里给出了一个几乎类似的递归证明。可惜证明中用到了[不變子空間](https://ccjou.wordpress.com/2011/01/29/%E4%B8%8D%E8%AE%8A%E5%AD%90%E7%A9%BA%E9%96%93-%E8%A7%A3%E6%A7%8B%E7%B7%9A%E6%80%A7%E7%AE%97%E5%AD%90%E7%9A%84%E5%88%A9%E5%99%A8/)的概念，这个我现在还不太懂。

这篇文章从谱定理开始，推导出矩阵的SVD分解，然后说一下矩阵的伪逆(pseudo-inverse)

## 谱定理的续

我们已经证明了，对任意实对称矩阵$$\boldsymbol{A}$$，都存在一个$$\boldsymbol{Q}$$使得$$\boldsymbol{Q}^{T}\boldsymbol{Q}=\boldsymbol{I}$$ 且 $$\boldsymbol{AQ}=\boldsymbol{QΛ}$$

我们现在把它们的维度都标出来：

$$
\underset{n×n}{\boldsymbol{A}}= \underset{n×n}{\boldsymbol{Q}} \underset{n×n}{\boldsymbol{Λ}} \underset{n×n}{\boldsymbol{Q}^T}
$$

现在证明它的另一个版本：

对任意实对称矩阵$$ \underset{n×n}{\boldsymbol{A}} $$，设 $$ \boldsymbol{A} $$的秩为$$k$$，那么存在一个$$ \underset{n×k}{\boldsymbol{Q}}$$使得$$\boldsymbol{Q}^{T}\boldsymbol{Q}=\underset{k×k}{\boldsymbol{I}}$$，且

$$
\underset{n×n}{\boldsymbol{A}}= \underset{n×k}{\boldsymbol{Q}} \underset{k×k}{\boldsymbol{Λ}} \underset{k×n}{\boldsymbol{Q}^T}
$$

由于任意实对称矩阵都是可对角化的，所以它所有的特征根的代数重数都是等于几何重数的，
又由于矩阵$$\boldsymbol{A}$$的秩为$$k$$，
所以它的解空间(null-space)的维度为$$n-k$$，
所以它的特征根$$0$$的几何重数是$$n-k$$，
所以在$$\underset{n×n}{\boldsymbol{A}}= \underset{n×n}{\boldsymbol{Q}} \underset{n×n}{\boldsymbol{Λ}} \underset{n×n}{\boldsymbol{Q}^T}$$中，$$\underset{n×n}{\boldsymbol{Λ}}$$的对角线上必定有$$n-k$$个0，
所以$$\underset{n×n}{\boldsymbol{A}}= \underset{n×k}{\boldsymbol{Q}} \underset{k×k}{\boldsymbol{Λ}} \underset{k×n}{\boldsymbol{Q}^T}$$成立。


## 矩阵的两种理解方式

矩阵 $$ \boldsymbol{A} = \begin{bmatrix} \boldsymbol{a}_1, \boldsymbol{a}_2, \cdots, \boldsymbol{a}_n \end{bmatrix} $$有两种理解方式。

1. 把矩阵看成是线性变换，矩阵的第$$i$$列代表的是 $$ \boldsymbol{I}$$的第$$i$$列变换之后所去的位置。
2. 把矩阵的每一列看成一个基，$$ \boldsymbol{A} \boldsymbol{x} $$表示的是如果向量是以$$ \boldsymbol{A} $$ 为基底的(用 $$ \boldsymbol{x}_{\boldsymbol{A}}$$表示)，那么有$$ \boldsymbol{A} \boldsymbol{x}_{\boldsymbol{A}} = \boldsymbol{x}_{\boldsymbol{I}}$$，注意到$$ \boldsymbol{x}_{\boldsymbol{A}}$$和$$ \boldsymbol{x}_{\boldsymbol{I}}$$表示同一个向量，只是用来表示的基底不同。

## SVD分解

我们希望在$$ \boldsymbol{A}$$ 的 row-space 里找到一组基 $$ \boldsymbol{V} $$，使得 $$ (\boldsymbol{AV}^T) (\boldsymbol{AV}) $$ 是满秩对角矩阵

由谱定理的另一种形式，设$$ \boldsymbol{A}$$ 是 $$n×p$$的矩阵，秩为$$k$$，那么

$$
\begin{align}

\underset{\text{(rank k)}}{\boldsymbol{A}^T \boldsymbol{A}}
&=
\underset{p×k}{\boldsymbol{V}}
\underset{k×k}{\boldsymbol{Λ}}
\underset{k×p}{\boldsymbol{V}^T} \\

\underset{k×p}{\boldsymbol{V}^T}
\underset{p×n}{\boldsymbol{A}^T}
\underset{n×p}{\boldsymbol{A}}
\underset{p×k}{\boldsymbol{V}}
&=
\underset{k×k}{\boldsymbol{Λ}} \\

\underset{k×k}{\boldsymbol{Λ}^{-1/2}}
\underset{k×p}{\boldsymbol{V}^T}
\underset{p×n}{\boldsymbol{A}^T}
\underset{n×p}{\boldsymbol{A}}
\underset{p×k}{\boldsymbol{V}}
\underset{k×k}{\boldsymbol{Λ}^{-1/2}}
&=
\underset{k×k}{\boldsymbol{I}} \\

\end{align}
$$

令 $$ \mathbf{Σ} = \boldsymbol{Λ}^{1/2}$$，令$$ \boldsymbol{U} = \boldsymbol{AV}\mathbf{Σ}^{-1}$$，则有 $$ \boldsymbol{U}^T \boldsymbol{U} = \underset{k×k}{\boldsymbol{I}}$$，并有

$$
\begin{align}
\underset{n×p}{\boldsymbol{A}}
\underset{p×k}{\boldsymbol{V}}
&=
\underset{n×k}{\boldsymbol{U}}
\underset{k×k}{\mathbf{Σ}} \\

\underset{n×p}{\boldsymbol{A}}
&=
\underset{n×k}{\boldsymbol{U}}
\underset{k×k}{\mathbf{Σ}}
\underset{k×p}{\boldsymbol{V}^T}

\end{align}
$$

到此，任意一个矩阵的意义，其实就是在row-space和column-space之间做一个映射，映射的方法是，先左乘$$\underset{k×p}{\boldsymbol{V}^T}$$，再左乘$$\underset{k×k}{\mathbf{Σ}}$$，再左乘$$\underset{n×k}{\boldsymbol{U}}$$。

## 矩阵的伪逆

比较显然了，应该是$$ \underset{n×k}{\boldsymbol{U}} \underset{k×k}{\mathbf{Σ}} \underset{k×p}{\boldsymbol{V}^T} $$ 的逆过程，所以是先左乘$$\underset{n×k}{\boldsymbol{U}^T}$$，再左乘$$\underset{k×k}{\mathbf{Σ}^{-1}}$$，再左乘$$\underset{k×p}{\boldsymbol{V}}$$，即

$$
\boldsymbol{A}^{†}
 = 
\underset{p×k}{\boldsymbol{V}}
\underset{k×k}{\mathbf{Σ}^{-1}}
\underset{k×n}{\boldsymbol{U}^T}
$$

其中$$ \boldsymbol{A}^{†}$$表示 $$ \boldsymbol{A} $$ 的伪逆(pseudo-inverse)，†是U+2020, dagger