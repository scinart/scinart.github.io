---
layout: post
title: "矩阵的意义 (3)"
date: 2015-02-24
timestamp: "2015-02-24 13:32:33 scinart"
categories: math
tag: note
comments: true
toc: no
cc: "by-nc-sa"

---

## 谱定理

对任意实对称矩阵$$\boldsymbol{A}$$，都存在一个$$\boldsymbol{Q}$$使得$$\boldsymbol{Q}^{T}\boldsymbol{Q}=\boldsymbol{I} 且 \boldsymbol{AQ}=\boldsymbol{QΛ}$$

我觉得能直观理解的余地越来越少了，只能靠证明了。

这个证明几乎是一个构造性的证明。  
<https://inst.eecs.berkeley.edu/~ee127a/book/login/thm_sed.html>

没发现证明不对，但也没直观理解。  
(还是没有直观理解为什么几何重数足够)  
(证明是说，只要找到一个特征向量，其他特征向量都通过递归构造出来。)  
(我觉得很神奇了。)


这样实对称矩阵就可以理解成

$$
\boldsymbol{Ax} = \boldsymbol{QΛQ}^{T}\boldsymbol{x} = \boldsymbol{Q}(\boldsymbol{Λ}(\boldsymbol{Q}^{T}\boldsymbol{x}))
$$

先把$$\boldsymbol{x}$$从用以$$\boldsymbol{Q}$$为基的表示变成以$$\boldsymbol{I}$$为基的表示(某种旋转加镜像变回来)($$\boldsymbol{Q}^{T}$$的作用)，再用$$\boldsymbol{Λ}$$拉伸，最后再变成以$$\boldsymbol{Q}$$为基的表示(某种旋转加镜像变回去)

理解成$$\boldsymbol{Ax}=\boldsymbol{AQu}=\boldsymbol{QΛu}$$好像也行，但是如果特征向量不是实数或不足的意义那我就暂时没有理解了。
