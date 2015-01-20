---
layout: post
title: "矩阵求导 (1)"
date: 2015-01-20
timestamp: "2015-01-20 16:26:50 scinart"
categories: math
label: note
comments: true
toc: no
cc: "by-nc-nd"

---

主要参考[这个pdf](www.atmos.washington.edu/~dennis/MatrixCalculus.pdf)。

这里暂时只讨论

|             | 标量  | 向量   | 矩阵   |
|-------------+-------+--------+--------|
| 对标量求导  | ∂β/∂α | ∂x/∂α  | ∂A/∂α  |
| 对向量求导  | ∂α/∂x | ∂y/∂x  | 不讨论 |
| 对矩阵求导  | ∂α/∂A | 不讨论 | 不讨论 |

不讨论的是那些求导都是三维的或四维的，要么平铺开，要么出三，四维的矩阵了，暂时还理解不了。  
讨论的也都是一阶导数，高阶的也还没看。


矩阵求导居然还有[两种布局](http://xuehy.github.io/applied_math/2014/04/18/matrixcalc/)，以下用的都是分母布局(denominator layout)

### 定义1：

$$
设 \boldsymbol{y}=ψ(\boldsymbol{x})，其中\boldsymbol{y}是m×1向量，\boldsymbol{x}是n×1向量， \\
定义：
\frac{∂\boldsymbol{y}}{∂\boldsymbol{x}} = \begin{bmatrix}
 \frac{∂y_{1}}{∂x_{1}} & \frac{∂y_{1}}{∂x_{2}} &  \cdots & \frac{∂y_{1}}{∂x_{n}} \\
 \frac{∂y_{2}}{∂x_{1}} & \frac{∂y_{2}}{∂x_{2}} &  \cdots & \frac{∂y_{2}}{∂x_{n}} \\
 \vdots &  \vdots &  \ddots & \vdots \\
 \frac{∂y_{m}}{∂x_{1}} & \frac{∂y_{m}}{∂x_{2}} &  \cdots & \frac{∂y_{m}}{∂x_{n}} \\
\end{bmatrix}
$$

这个矩阵叫Jacobian matrix of the transformation ψ().

### 定理1：

若

$$
\boldsymbol{y}=\boldsymbol{Ax}
$$

其中$$\boldsymbol{y}$$是$$m×1$$, $$\boldsymbol{x}$$是$$n×1$$，$$\boldsymbol{A}$$不依赖$$\boldsymbol{x}$$，则

$$
\begin{equation}
\frac{∂\boldsymbol{y}}{∂\boldsymbol{x}}=\boldsymbol{A}
\label{mc.1}
\end{equation}
\tag{mc.1}
$$

证：

$$
显然
$$

### 定理2：

若

$$
\boldsymbol{y}=\boldsymbol{Ax} \\
\boldsymbol{x} = ψ(\boldsymbol{z})
$$

其中$$\boldsymbol{y}$$是$$m×1$$, $$\boldsymbol{x}$$是$$n×1$$, $$\boldsymbol{A}$$不依赖$$\boldsymbol{x}$$, $$\boldsymbol{x}$$是$$\boldsymbol{z}$$的函数，则

$$
\begin{equation}
\frac{∂\boldsymbol{y}}{∂\boldsymbol{x}}=\boldsymbol{A}\frac{∂\boldsymbol{x}}{∂\boldsymbol{z}}
\label{mc.2}
\end{equation}
\tag{mc.2}
$$

证：

$$
展开，稍微脑补一下，就成了。见参考资料。
$$

### 定理3：

若

$$
α = \boldsymbol{y}^{T}\boldsymbol{A}\boldsymbol{x}
$$

其中$$\boldsymbol{y}$$是$$m×1$$, $$\boldsymbol{x}$$是$$n×1$$, $$\boldsymbol{A}$$不依赖$$\boldsymbol{x},\boldsymbol{y}$$, 则

$$
\begin{equation}
\frac{∂α}{∂\boldsymbol{x}} = \boldsymbol{y}^{T}\boldsymbol{A} \\
\frac{∂α}{∂\boldsymbol{y}} = \boldsymbol{x}^{T}\boldsymbol{A}^{T} \\
\label{mc.3}
\end{equation}
\tag{mc.3}
$$

证：

$$
显然
$$

### 定理4：

若：

$$
α = \boldsymbol{y}^{T}\boldsymbol{x}
$$

其中$$\boldsymbol{y}$$是$$m×1$$, $$\boldsymbol{x}$$是$$n×1$$, $$\boldsymbol{y}$$和$$\boldsymbol{x}$$都是$$\boldsymbol{z}$$的函数，则

$$
\begin{equation}
\frac{∂α}{∂\boldsymbol{z}} = \boldsymbol{x}^{T}\frac{∂\boldsymbol{y}}{∂\boldsymbol{z}}+\boldsymbol{y}^{T}\frac{∂\boldsymbol{x}}{∂\boldsymbol{z}}
\label{mc.4}
\end{equation}
\tag{mc.4}
$$

证：

$$
\begin{align}
α &= \sum_{i}{x_{i}y_{i}} \\
\frac{∂α}{∂z_{k}} &= \sum_{i}{\left( x_i \frac{∂y_i}{∂z_k} + \frac{∂x_i}{∂z_k} y_i \right)} \\
脑补成矩阵 \\
\frac{∂α}{∂\boldsymbol{z}} &= \boldsymbol{x}^{T}\frac{∂\boldsymbol{y}}{∂\boldsymbol{z}} + \boldsymbol{y}^{T}\frac{∂\boldsymbol{x}}{∂\boldsymbol{z}} \\
\end{align}
$$

注意我们正好有$$\frac{∂α}{∂\boldsymbol{z}} = \frac{∂α}{∂\boldsymbol{y}}\frac{∂\boldsymbol{y}}{∂\boldsymbol{z}} + 
                                              \frac{∂α}{∂\boldsymbol{x}}\frac{∂\boldsymbol{x}}{∂\boldsymbol{z}}$$
成立。

### 定理5：

若：

$$
α = \boldsymbol{y}^{T}\boldsymbol{Ax}
$$

其中$$\boldsymbol{y}$$是$$m×1$$, $$\boldsymbol{x}$$是$$n×1$$, $$\boldsymbol{y}$$和$$\boldsymbol{x}$$都是$$\boldsymbol{z}$$的函数，$$\boldsymbol{A}$$不依赖$$\boldsymbol{z}$$，则

$$
\begin{equation}
\frac{∂α}{∂\boldsymbol{z}} = \boldsymbol{x}^{T}\boldsymbol{A}^{T}\frac{∂\boldsymbol{y}}{∂\boldsymbol{z}}
                            + \boldsymbol{y}^{T}\boldsymbol{A}\frac{∂\boldsymbol{x}}{∂\boldsymbol{z}}
\label{mc.5}
\end{equation}
\tag{mc.5}
$$

证：

$$
\begin{align}
\frac{∂α}{∂\boldsymbol{z}}
&= \boldsymbol{x}^{T}\frac{∂\left((\boldsymbol{y}^{T}\boldsymbol{A})^{T}\right)}{∂\boldsymbol{z}}
 + (\boldsymbol{y}^{T}\boldsymbol{A})\frac{∂\boldsymbol{x}}{∂\boldsymbol{z}} \text{由}\ref{mc.5}\text{得到} \\
&= \boldsymbol{x}^{T}\boldsymbol{A}^{T}\frac{∂\boldsymbol{y}}{∂\boldsymbol{z}}
 + \boldsymbol{y}^{T}\boldsymbol{A}\frac{∂\boldsymbol{x}}{∂\boldsymbol{z}}
\end{align}
$$


注意到我们也有$$\frac{∂α}{∂\boldsymbol{z}} = \frac{∂α}{∂\boldsymbol{y}}\frac{∂\boldsymbol{y}}{∂\boldsymbol{z}} + 
                                              \frac{∂α}{∂\boldsymbol{x}}\frac{∂\boldsymbol{x}}{∂\boldsymbol{z}}$$
成立

### 定义2：

$$
\frac{∂\boldsymbol{A}}{∂α} = \begin{bmatrix}
 \frac{∂a_{11}}{∂α} & \frac{∂a_{12}}{∂α} &  \cdots & \frac{∂a_{1n}}{∂α} \\
 \frac{∂a_{21}}{∂α} & \frac{∂a_{22}}{∂α} &  \cdots & \frac{∂a_{2n}}{∂α} \\
 \vdots &  \vdots &  \ddots & \vdots \\
 \frac{∂a_{m1}}{∂α} & \frac{∂a_{m2}}{∂α} &  \cdots & \frac{∂a_{mn}}{∂α} \\
\end{bmatrix}
$$

### 定理6：

若$$\boldsymbol{A}$$是满秩方阵，$$\boldsymbol{A}$$是$$α$$的函数，则

$$
\begin{equation}
\frac{∂\boldsymbol{A}^{-1}}{∂α} = -\boldsymbol{A}^{-1}\frac{∂\boldsymbol{A}}{∂α}\boldsymbol{A}^{-1}
\label{mc.6}
\end{equation}
\tag{mc.6}
$$

证：

$$
\boldsymbol{A}^{-1}\boldsymbol{A}=\boldsymbol{I} \\
\frac{∂\left(\boldsymbol{A}^{-1}\boldsymbol{A}\right)}{∂α} = \mathbf{0} \\
经过一番脑力劳动。\\
可以想像成\boldsymbol{A}^{-1}\boldsymbol{A}里的每一个元素，\\
对α求导由乘法法则分出两部分。\\
一部分是左边，一部分是右边。\\
\boldsymbol{A}^{-1}\frac{∂\boldsymbol{A}}{∂α}+\frac{∂\left(\boldsymbol{A}^{-1}\right)}{∂α}\boldsymbol{A} = \mathbf{0} \\
整理得到 \frac{∂\boldsymbol{A}^{-1}}{∂α} = -\boldsymbol{A}^{-1}\frac{∂\boldsymbol{A}}{∂α}\boldsymbol{A}^{-1}
$$

