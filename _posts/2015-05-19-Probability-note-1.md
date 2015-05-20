---
layout: post
title:  "概率论笔记 (1)"
date:   2015-05-19
timestamp: "2015-05-21 01:32:32 scinart"
categories: markdown
comments: true
toc: true
cc: "by-nc-sa"

---

好久没看了，发现可能要用到，快速复习一下：
(主要参考[概率论基础教程](http://book.douban.com/subject/4291764/))

----


### 贝叶斯公式

先验概率(prior) $$P(H_i)$$  
然后事件E发生  
后验概率(posterior) $$P(H_i|E)=\frac{P(E|H_i) P(H_i)}{P(E)} = \frac{P(E|H_i) P(H_i)}{\sum_{j}{P(E|H_j)P(H_j)}}$$

### 二项随机变量

参数为$$(n,p)$$的二项随机变量

$$
\begin{align}
P(i) &= \binom{n}{i}p^i(1-p)^{n-i}, \,i=0,1,\cdots,n \\
\sum{P(i)} &=\sum{\binom{n}{i}p^i(1-p)^{n-i}} = (p+(1-p))^n = 1  \\

E[X^k] &= \sum_{i=0}^{n}{i^k\binom{n}{i}p^i(1-p)^{n-i}} \\
       &= \sum_{i=1}^{n}{i^{k-1}n\binom{n-1}{i-1}p^i(1-p)^{n-i}}\,\,\,\,\text{由}i{n \choose i} = n {n-1 \choose i-1} \\
       &= np \sum_{j=0}^{n-1}{(j+1)^{k-1}\binom{n-1}{j}p^j(1-p)^{n-1-j}}\,\,\,\,\text{令i=j+1} \\
	   &= np E[(Y+1)^{k-1}]\,\,\,\,\text{其中Y是参数为(n-1,p)的二项分布} \\
E[X] &= np \\
Var(X) &= npq \\
\end{align}
$$

二项分布最大值

$$
\frac{P\{X=k\}}{P\{X=k-1\}} = \frac{\binom{n}{k}p^k(1-p)^{n-k}}
                                   {\binom{n}{k-1}p^{k-1}(1-p)^{n-(k-1)}}
= \frac{n-k+1}{k}\frac{p}{1-p} \\

{P\{X=k\}} ≥{P\{X=k-1\}} \iff (n-k+1)p≥k(1-p) \iff k≤(n+1)p

$$

所以在$$k=\lfloor(n+1)p\rfloor$$时$$P\{X=k\}$$最大，  
如果$$k=\lfloor(n+1)p\rfloor = (n+1)p$$那么$${P\{X=k\}} = {P\{X=k-1\}}$$

### 泊松随机变量


以下文字并没有理解：

λ可解释为单位时间内事件发生的速率

**泊松范例**  
考虑n个事件，每个事件发生的概率为$$p_i,\,i=1,\cdots,n.$$ 如果所有$$p_i$$都很小，且试验或者独立，或者至多弱相信，那么事件发生次数近似服从参数为$$\sum{p_i}$$的泊松分布。

$$
\begin{aligned}
& p(i) = P\{X=i\} = e^{-λ}{λ^i \over i!},\,\,\,\,i=0,1,2,\cdots \\
& \sum{p(i)} = e^{-λ}\sum_{i=0}^{∞}{λ^i \over i!} = e^{-λ}e^λ = 1 \\
& E[X] = \sum_{i=0}^{∞}{i e^{-λ} {λ^i \over i!}} = λe^{-λ} \sum_{i=0}^{∞}{λ^{i-1} \over (i-1)!} = λ \\
& \begin{split}
E[X^2] = \sum_{i=0}^{∞}{i^2 e^{-λ} {λ^i \over i!}} &= λe^{-λ} \sum_{i=0}^{∞}{i {λ^{i-1} \over (i-1)!}} \\
&= λe^{-λ}\left(\sum_{i=0}^{∞}{(i-1) {λ^{i-1} \over (i-1)!}} + \sum_{i=0}^{∞}{λ^{i-1} \over (i-1)!}\right) \\
&= λe^{-λ}(λe^λ + e^λ) \\
&= λ(λ+1) \\
\end{split}\\
& Var(X) = λ
\end{aligned} \\
$$

### 几何随机变量(geometric)

重复直到概率为p的事件发生时，做实验的次数。

$$
P{X=n} = (1-p)^{n-1}p  
\sum_{n=1}^{∞}P{X=n} = p\sum_{n=1}^{∞}{(1-p)^n} = p \frac{1}{1-(1-p)} = 1 \\
E[X^k] = p+(1-p)(E[(X+1)^k])\,\,\,\,\text{自己想的} \\
E[X] = \frac{1}{p} \\
Var(X) = \frac{1-p}{p^2}
$$

### 负二项分布

重复直到概率为p的事件发生r次时，做实验的次数。

$$
P{X=n} = \binom{n-1}{r-1}p^{r-1}(1-p)^{n-r}p,\,\,\,\,n=r,r+1,\cdots
$$

记$$X_{r,p}$$为服从分布为$$(r,p)$$的负二项随机变量，则

$$
\begin{align}
E[X_{r,p}^k] &= pE[(X_{r-1,p}+1)^k] + qE[(X_{r,p}+1)^k] \,\,\,\,\text{也是自己想的}\\
E[X_{0,p}^k] &= 0 \\
\end{align}
$$

令$$k=1,2$$，然后推导一下，得

$$
\begin{align}
E[X_{r,p}] &= \frac{r}{p} \\
E[X_{r,p}^2] &= \frac{r}{p}\left(\frac{r+1}{p}-1\right) \\
Var(X) &= \frac{r(1-p)}{p^2}
\end{align}
$$

### 超几何随机变量

一共N个总体，m个为目标，取n个，取中目标的个数

$$
P\{X=i\} = \frac{\binom{m}{i} \binom{N-m}{n-i}}{\binom{N}{n}}
$$

计算 $$E[X^k]$$ (抄书)：

$$
\begin{align}
E[X^k] &= \sum_{i=1}^{n}{i^k       \frac{\binom{m}{i}\binom{N-m}{n-i}}{\binom{N}{n}}} \\
       &= \sum_{i=1}^{n}{i^{k-1} m n N^{-1} \frac{\binom{m-1}{i-1}\binom{N-m}{n-i}}{\binom{N-1}{n-1}}} \\
       &= \frac{nm}{N} \sum_{j=0}^{n-1}{(j+1)^{k-1}\frac{\binom{m-1}{j}\binom{N-m}{n-j-1}}{\binom{N-1}{n-1}}} \\
       &= \frac{nm}{N} E[(Y+1)^{k-1}]
\end{align}
$$

其中 Y 是一个服从参数为$$(n-1,N-1,m-1)$$的超几何分布的随机变量

$$
E[X] = \dfrac{mn}{N} \\
Var(X) = npq(1-\dfrac{n-1}{N-1})
$$

### 期望和方差的性质

$$
E[aX+b] = aE[x]+b \\
Var(aX+b) = a^2Var(X)
$$

### 正态随机变量

$$
f(x) = \frac{1}{\sqrt{2πσ^2}}\exp\left(-\frac{1}{2}\frac{(x-μ)^2}{σ^2}\right) \,\,\,\,\text{单变量}\\
f(\boldsymbol{x})= (2π)^{-D/2}|Σ|^{-1/2}\exp\left(-\frac{1}{2} \boldsymbol{x-μ}^T Σ^{-1} \boldsymbol{x-μ} \right) \,\,\,\,\text{多变量} \\
$$

标准形式：

$$
f(x) = \frac{1}{\sqrt{2π}}\exp\left(-\frac{1}{2}x^2\right)\\
$$

积分，令$$I=\int_{-∞}^{∞}{e^{-\frac{x^2}{2}}dx}$$

$$
\begin{align}
I^2 &= \int_{-∞}^{∞}{e^{-\frac{y^2}{2}}\,dy}\int_{-∞}^{∞}{e^{-\frac{x^2}{2}}\,dx} \\
    &= \int_{-∞}^{∞}{\int_{-∞}^{∞}{e^{-\frac{y^2}{2}}\,dy}\, e^{-\frac{x^2}{2}}\,dx} \,\,\,\,\text{将其视为常数}\\
    &= \int_{-∞}^{∞}{\int_{-∞}^{∞}{e^{-\frac{x^2}{2}} e^{-\frac{y^2}{2}}\,dy} \,dx} \,\,\,\,\text{将其视为常数}\\
	&= \int_{-∞}^{∞}{\int_{-∞}^{∞}{e^{-(x^2+y^2)/2}\,dx\,dy}} \\
	&= \int_{0}^{∞}{\int_{0}^{2π} {e^{-r^2/2} \lvert \begin{vmatrix}
	∂x/∂r & ∂x/∂θ \\
	∂y/∂r & ∂y/∂θ \end{vmatrix} \rvert \,dr \,dθ}} \\
	&=\int_{0}^{∞}{\int_{0}^{2π} {e^{-r^2/2} r \, dr\, dθ } } \\
	&=2π \int_{0}^{∞}{r e^{-r^2/2}\, dr} \\ 
	&=2π \\
I &= \sqrt{2π}
\end{align}
$$

标准正态分布 $$Z = \dfrac{X-μ}{σ} ~ N(0,1)$$

$$
\begin{align}
& E[Z] = \int_{-∞}{∞}{xf(x)}dx = (2π)^{-1/2} \int_{-∞}^{∞} { x e^ {-x^2/2} \, dx} = (2π)^{-1/2} (- e^{-x^2/2}) \bigg|_{-∞}^{∞} = 0 \\
& Var(Z) = E[Z^2] - 0 = (2π)^{-1/2} \int_{-∞}^{∞} {x^2 e^ {-x^2/2} \, dx } \\
& \begin{split}\text{令} u&=x \\
          v&=-e^{-x^2/2} \\
  \end{split}\\
& \begin{split}\text{则} Var(Z) &= (2π)^{-1/2} \left( uv\bigg|_{-∞}^{∞} - \int_{-∞}^{∞}{v\,du} \right) \\
                 &= (2π)^{-1/2} \int_{-∞}^{∞}{e^{-x^2/2}\,dx} \\
                 &= 1 \\
  \end{split}
\end{align}
$$

通常记 $$ ϕ(x) = (2π)^{-1/2} \int_{-∞}^{x}{e^{-x^2/2}\,dx} \,\,\,\,\,\,\,\,\text{CDF}$$

### 指数随机变量

$$

\begin{align}
f(x) &=
\begin{cases}
λe^{-λx},  & x≥0 \\
0, & x<0
\end{cases} \\
F(x) &= \int_{0}^{x}{λe^{-λx}\,dx} = (-e^{-λx})\bigg|_0^x = 1-e^{-λx},\,\,\,\,\,\,x≥0 \\
E[X^n] &= \int_{0}^{∞}{x^nλe^{-λx}\,dx} \\
       &= \int_{0}^{∞}{u\,dv} \,\,\,\,\text{令$u=x^n,\,v=-e^{-λx}$} \\
	   &= uv\bigg|_0^∞ - \int_{0}^{∞}{v\,du} \\
	   &= 0 + \int_{0}^{∞}{nx^{n-1}e^{-λx}\,dx} \\
	   &= \frac{n}{λ}\int_{0}^{∞}{x^{n-1}λe^{-λx}\,dx} \\
	   &= \frac{n}{λ}E[X^{n-1}] = \dfrac{n!}{λ^n} \\
E[X]   &= \dfrac{1}{λ} \\
Var(X) &= \dfrac{1}{λ^2}
\end{align}
$$

### 无记忆性

一个非负随机变量$$X$$是无记忆的，若对于任意$$s,t≥0$$：

$$
P\{X>s+t|X>t\}≡P\{X>s\}
$$

$$
P{X>s+t|X>t}≡P{X>s} \\
\frac{P{X>s+t,X>t}}{P{X>t}}=P{X>s} \\
P{X>s+t} = P{X>s}P{X>t}
$$

记$$\bar{F}(x) = 1-F(x) = P{X>a} = e^{-λx}$$，则显然

$$
e^{-λ(s+t)} = e^{-λs}e^{-λt}
$$

指数分布是唯一无记忆的分布，因为：

若X无记忆，则$$\bar{F}(s+t) = \bar{F}(s)\bar{F}(t)$$，记$$g$$是这样的$$\bar{F}$$，那么：

$$
g(1) = g(\underbrace{\frac{1}{n}+\frac{1}{n}+\cdots+\frac{1}{n}}_{n个\frac{1}{n}}) = (g(\frac{1}{n}))^n \\
∴ g(\frac{m}{n}) = (g(1))^{\frac{m}{n}} \\
\text{因为连续} \\
∴ g(x) = (g(1))^x \\
g(1)=(g(0.5)^2)≥0 \,\,\,\,\text{非平凡}\,\,g(1)>0 \\
∴g(x)=e^{\ln g(1) x} \\
g(x)=e^{-λx} \text{其中$λ=-\ln g(1)$}
$$

### 危险率函数

若将正连续型随机变量$$X$$解释成某个零件的寿命  
则危险率(Hazard rate)或失效率(failure rate) $$λ(t)$$定义为：

$$
λ(t) = \frac{f(t)}{\bar{F}(t)},\,\,\,\,\text{其中$\bar{F}(x)=1-F(x)$}
$$

其意义是在已经使用t小时后，不能再使用dt小时的概率。

由$$λ(t)$$推$$F(t)$$

$$
\begin{align}
& λ(t)= \dfrac{\frac{d}{dt}F(t)}{1-F(t)} \\
\text{两边积分} & \ln (1-F(t)) = -\int_{0}^{t}{λ(t)\,dt}+k \\
& 1-F(t) = e^k \exp\{-\int_{0}^{t}{λ(t)\,dt}\} \\
\text{令$t=0$得$k=0$} & ∴ \\
& F(t) = 1-\exp\{-\int_{0}^{t}{λ(t)\,dt}\}
\end{align}
$$


### 未完待续