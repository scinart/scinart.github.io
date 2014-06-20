---
layout: post
title: "Linear Regression Note"
date: 2014-06-19
timestamp: "2014-06-20 17:38:03 scinart"
categories: cs
tag: note
comments: true
toc: true
cc: "by-nc-sa"

---

### Problem

假设我们有矩阵$$ \mathbf{X} $$ ，向量 $$ \mathbf{Y} $$

我们希望找到 $$ \mathbf{XA} + b $$ 让它尽量接近 $$ \mathbf{Y} $$。接近程度用Cost function来衡量，这个值越小越好。  
设误差向量 $$ \mathbf{e} = \mathbf{XA} + b - \mathbf{Y} $$。那么cost function 通常被定义为 $$ \mathbf{e^{T}}\mathbf{e} $$  
注：$$b$$ 是一个数，一个矩阵加一个数的意思是这个矩阵的每个元素都加上了这个数。

为了简便记法，我们在$$ \mathbf{X} $$ 之前附上值全为1的一列，并把 $$ b $$ 加在 $$ A $$ 的上边，记为 $$ \mathbf{θ} $$。

这样就变成了：

令 $$ \mathbf{e} = {\mathbf{Xθ}-\mathbf{Y}} $$ ， 求 $$ \mathbf{θ} $$ 让它使 $$ \mathbf{e^{T}e} $$ 最小，也就是说Cost function 最小。  
cost function 记为 $$J(\mathbf{θ}) = \mathbf{e^{T}e} $$

### Normal Equation

当然了，从几何上来说，$$ \mathbf{Xθ} $$ 可取到 $$ \mathbf{X} $$ 的 column space 里的所有向量，所以肯定是取
$$\mathbf{θ}$$ 使 $$ \mathbf{Xθ} $$ 是 $$\mathbf{Y}$$ 在 $$ \mathbf{X} $$ 的 column space 上的投影时(艾玛好长～)， $$ \mathbf{Xθ-Y}$$ 最小  
这个问题在 [Introduction to Linear Algebra](http://book.douban.com/subject/1781318/) 4.3 节有很经典的解释。

当然了，从这个意义上说， $$\mathbf{θ} $$ 偏离标准的 $$ \mathbf{θ} $$ 越多，误差就越在，无论往哪个方向偏。所以如果画出$$J(\mathbf{θ})—\mathbf{θ}$$的图像来(不论几维)，都是凸的。
这就为我们将要用到的数值算法提供了很好的保障。

见我写的[Normal Equation](../../../../../math/2014/06/20/Normal-Equation/)文章。

### Gradient Descent

简而言之，就是，随便取一个 $$ \mathbf{θ} $$ 然后在$$ J(\mathbf{θ})—\mathbf{θ} $$ 图像中沿着它的梯度向量(gradient vector)反方向前进一点。再前进一点，直到趋于理想值。

关于 gradient vector 在 [Thomas' Calculus](http://book.douban.com/subject/4304500/) 14.5 节有很经典的解释。

但是，在机器学习的领域事情稍微有些不同，以至于我们必须改变 $$ J(\mathbf{θ}) $$ 为 $$ \frac{1}{m}\mathbf{e^{T}e} $$，其中 $$ m $$ 是 $$ e $$ 的维度，也就是样本的个数。

这样做的目的是，样本随时可能会增加，样本增加时，它的几何模型就会多出一维，这样即使是最佳拟合的线(或超平面)，它的 $$ \mathbf{e^{T}e} $$ 也一定会增加(也有可能恰好不变)。于是我们无法在同一模型中对不同样本数量的回归误差好坏程度进行对比。

从这个道理或者其他直觉上来说， $$ J(\mathbf{θ}) $$ 就应该取**平均平方误差**

见[StackOverflow上的讨论](http://stackoverflow.com/questions/21099289/cant-understand-the-cost-function-for-linear-regression)。

为了求导方便，总之，现在的 $$ J(\mathbf{θ}) $$ 正式的定为 $$ \frac{1}{2m}\mathbf{e^{T}e} $$。

$$ \mathbf{θ} $$ 的更新过程为 $$ \mathbf{θ} := \mathbf{θ} - α∇J $$ ，其中 $$ α $$ 是步长。

### Vectorization

现在讨论如何把 $$ \mathbf{θ} := \mathbf{θ} - α∇J $$ 变成一个可计算的式子。

$$
\begin{align}

J(\mathbf{θ}) =& \frac{1}{2m}\mathbf{e^{T}e} \\
              =& \frac{1}{2m}\sum{\left(\left(\mathbf{Xθ-y}\right)\text{.^}{2}\right)} \\
∇J			  =& \begin{bmatrix}
                     \frac{\partial{}}{\partial{θ_0}}J(\mathbf{θ}) \\
					 \frac{\partial{}}{\partial{θ_1}}J(\mathbf{θ}) \\
					 \vdots \\
					 \frac{\partial{}}{\partial{θ_n}}J(\mathbf{θ}) \\
				 \end{bmatrix} \\
			  =& \begin{bmatrix}
    		         \frac{1}{m}{\left(\mathbf{Xθ-y}\right)⋅\left[x^{(0)}_0, x^{(1)}_0, \cdots, x^{(n)}_0\right]^{T}} \\
    		         \frac{1}{m}{\left(\mathbf{Xθ-y}\right)⋅\left[x^{(0)}_1, x^{(1)}_1, \cdots, x^{(n)}_1\right]^{T}} \\
					 \vdots \\
    		         \frac{1}{m}{\left(\mathbf{Xθ-y}\right)⋅\left[x^{(0)}_n, x^{(n)}_n, \cdots, x^{(n)}_n\right]^{T}} \\
				 \end{bmatrix} \quad \text{其中 } x^{(i)}_{j} \text{ 的意思是矩阵 } \mathbf{X} \text{ 的第i行第j列}\\
			  =& \frac{1}{m}{\left(\left(\mathbf{Xθ-y}\right)^{T}\mathbf{X}\right)}^{T} \text{ 此处自己画个图就明白了。}
\end{align}
$$

### In Practice

在机器学习中，矩阵 $$ \mathbf{X} $$ 实际是一系列样本不同feature的值，它的每一行是一个样本，每一列是一个feature.
这样不同feature的差别可能非常大，导致 J(**θ**) 在某的维度上的变化可能会比其他维度上变化剧烈的多。
为了快速的使算法收敛，我们希望不同feature上变化差别不大。

方法是把每个 feature 标准化一下，使他们都接近[-1 1]这个区间，一个通常的方法是减去它们的平均值然后除以标准差。

还有α的选择也可能通过画出J(**θ**)—**θ**图像的方法对比选取多个不同α时J(**θ**)的收敛速度。如果J(**θ**)不收敛，那么很可能是α取太大了，如果J(**θ**)收敛太慢则可以增大α.

### See:

Coursera [Machine Learning](https://class.coursera.org/ml-006)
