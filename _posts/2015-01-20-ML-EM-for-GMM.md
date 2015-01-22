---
layout: post
title: "EM算法推导GMM参数"
date: 2015-01-20
timestamp: "2015-01-22 13:34:35 scinart"
categories: cs
tag: ml
comments: true
toc:
cc: "by-nc-nd"

---

网上写EM算法的好文章就那么几篇[(列举在这里)](/cs/2015/01/20/ML-EM-note-2/)，可惜它们都没把EM for GMM这个步骤推导全。

## 下面我就把它推出来

首先你此时应该懂EM算法了。  
关于矩阵的微积分，贴两篇自己的文章，  
注意我积分的两种形态，以下用到的积分式  
在我的两篇文章中都铺垫好了。  
[矩阵求导 (1)](/math/2015/01/20/Matrix-note-2)，
[矩阵求导 (2)](/math/2015/01/20/Matrix-note-3)。


我们要推的是：

$$
θ := arg \max_{θ} \sum_{i=1}^{m}{\sum_{z^{(i)}}{Q_{i}(z^{(i)}) log \frac{p(\mathbf{x}^{(i)}, z^{(i)}; θ)}{Q_{i}(z^{(i)})}}}
$$

其中$$θ$$是$$(\mathbf{ϕ,μ,Σ})$$，一个ϕ，一个μ，好多个Σ。

$$
\begin{align}
令 w_{j}^{i} = Q_i (z^{(i)}=j)
&= p(z^{(i)}=j|\mathbf{x}^{(i)};ϕ,μ,Σ) \\
&= \frac{p(z^{(i)}=j,\mathbf{x}^{(i)};ϕ,μ,Σ)}{\underset{z^{(i)}}{\sum{}}{p(z^{(i)}=j,\mathbf{x}^{(i)};ϕ,μ,Σ)}}
\end{align}
$$

$$
\begin{align}
J(Q,θ)
&= \sum_{i=1}^{m}{\sum_{z^{(i)}}{Q_i (z^{(i)}) log \frac{p(\mathbf{x}^{(i)},z^{(i)}; \mathbf{ϕ},\mathbf{μ},\mathbf{Σ})}{Q_i (z^{(i)})}}} \\
&= \sum_{i=1}^{m}{\sum_{j}{Q_i (z^{(i)}=j) log \frac{p(\mathbf{x}^{(i)}|z^{(i)}=j;\mathbf{μ},\mathbf{Σ})p(z^{(i)} = j;ϕ)}{Q_i (z^{(i)}=j)}}} \\
&= \sum_{i=1}^{m}{\sum_{j}{w^{(i)}_j log \frac{(2π)^{-\frac{n}{2}} |Σ_j|^{-\frac{1}{2}}exp{\left(-\frac{1}{2} (x^{(i)}-μ_j)^{T} Σ_j^{-1}(x^{(i)}-μ_j) \right)}ϕ_j}{w^{(i)}_j}}}
\end{align}
$$

## 求导大法，常数项随时扔掉

对$$\mathbf{μ_l}$$求导

$$
\begin{align}
\frac{∂J}{∂μ_l}
&= \frac{∂}{∂μ_l} \sum_{i=1}^{m}{w^{(i)}_{l}\left(-\frac{1}{2} (x^{(i)}-μ_l)^{T} Σ_l^{-1}(x^{(i)}-μ_l) \right)} \\
&= \sum_{i=1}^{m}{w^{(i)}_{l} (x^{(i)}-μ_l)^{T} Σ_l^{-1}(-\mathbf{I})} \\
&= \sum_{i=1}^{m}{w^{(i)}_{l} (μ_l-x^{(i)})^{T} Σ_l^{-1}} \\
\end{align}
$$

令之为$$0$$，得到

$$
μ_l = \frac{\underset{i}{\sum{}}{w^{(i)}_{l}\mathbf{x}^{i}}}{\underset{i}{\sum{}}{w^{(i)}_{l}}}
$$

对 $$ϕ_j$$ 求导

$$
\begin{align}
\frac{∂J}{∂ϕ_l}
&= \frac{∂}{∂ϕ_l} \sum_{i=1}^{m}{w^{(i)}_{l} log ϕ_l}
\end{align}
$$

还要满足的条件是$$\sum_{j}{ϕ_j}=1$$

拉格朗日乘数大法：

$$
\frac{∂}{∂ϕ_l} \sum_{i=1}^{m}{w^{(i)}_{l} log ϕ_l} = λ \frac{∂}{∂ϕ_l} \sum_{j}{ϕ_j} \\
\frac{1}{ϕ_l} \sum_{i=1}^{m}{w^{(i)}_{l}} = λ
$$

再加上条件$$\sum_{j}{ϕ_j}=1$$，得到

$$
\sum_{j=1}^{m}{\frac{1}{λ}\sum_{i=1}^{m}{w^{(i)}_{j}}} = 1 \\
λ = m
$$

故

$$
ϕ_l = \frac{1}{m} \sum_{i=1}^{m}{w^{(i)}_{l}}
$$

对 $$\mathbf{Σ_l}$$ 求导

$$
J(Q,θ) = \sum_{i=1}^{m}{\sum_{j}{w^{(i)}_j log \frac{(2π)^{-\frac{n}{2}} |Σ_j|^{-\frac{1}{2}}exp{\left(-\frac{1}{2} (x^{(i)}-μ_j)^{T} Σ_j^{-1}(x^{(i)}-μ_j) \right)}ϕ_j}{w^{(i)}_j}}} \\
\begin{align}
\frac{∂J}{∂({Σ_l}^{-1})}
&= \frac{∂}{∂({Σ_l}^{-1})} \sum_{i=1}^{m}{w^{(i)}_{l} log \frac{(2π)^{-\frac{n}{2}} |Σ_l|^{-\frac{1}{2}}exp{\left(-\frac{1}{2} (x^{(i)}-μ_l)^{T} Σ_l^{-1}(x^{(i)}-μ_l) \right)ϕ_j}}{w^{(i)}_{l}}} \\
&= \frac{∂}{∂({Σ_l}^{-1})} \sum_{i=1}^{m}{w^{(i)}_{l} log \left({|Σ_l|^{-\frac{1}{2}}exp{\left(-\frac{1}{2} (x^{(i)}-μ_l)^{T} Σ_l^{-1}(x^{(i)}-μ_l) \right)}} \right)} \\
&= \frac{∂}{∂({Σ_l}^{-1})} \sum_{i=1}^{m}{w^{(i)}_{l} \frac{1}{2} log {|Σ_l|^{-1}}} +
   \frac{∂}{∂({Σ_l}^{-1})} \sum_{i=1}^{m}{w^{(i)}_{l}\left(-\frac{1}{2} (x^{(i)}-μ_l)^{T} Σ_l^{-1}(x^{(i)}-μ_l) \right)} \\
&= \frac{∂}{∂({Σ_l}^{-1})} \sum_{i=1}^{m}{w^{(i)}_{l} log {|Σ_l|^{-1}}} -
   \frac{∂}{∂({Σ_l}^{-1})} \sum_{i=1}^{m}{w^{(i)}_{l}\left((x^{(i)}-μ_l)^{T} Σ_l^{-1}(x^{(i)}-μ_l) \right)} \\
&= \sum_{i=1}^{m}{w^{(i)}_{l}{Σ_l}} -
   \sum_{i=1}^{m}{w^{(i)}_{l}\left((x^{(i)}-μ_l)(x^{(i)}-μ_l)^{T} \right)}
\end{align}
$$

令之为0

$$
Σ_l = \frac{\sum_{i=1}^{m}{w^{(i)}_{l}\left((x^{(i)}-μ_l)(x^{(i)}-μ_l)^{T} \right)}}{\sum_{i=1}^{m}w^{(i)}_{l}}
$$
