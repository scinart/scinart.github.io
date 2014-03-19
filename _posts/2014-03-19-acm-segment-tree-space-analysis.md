---
layout: post
title: "线段树为什么要开4倍空间"
date: 2014-03-19
timestamp: "2014-03-20 00:45:01 scinart"
categories: acm
tag:
comments: false
toc: 
cc: "by-nc-sa"

---

最近在看《具体数学》，这篇当做是一个练习吧。

假设我们用一个数组来头轻脚重地存储一个线段树，根节点是1，孩子节点分别是2*n, 2*n+1, 那么，设线段长为L(即[1..L+1))

![img]({{ site.img_url }}/Segment-Tree-Example.png)

设树的高度为H，对H，有：

$$
H(L) = 
\begin{cases}
1, & \text{L = 1} \\
1 + H(\lceil \frac{L}{2} \rceil), & \text{L > 1} \\
\end{cases} \\
$$

这是一个很简单的递归式，并用公式[3.11]({{site.url}}/math/note/2014/03/16/QA39.2.G733-1994-CM-3/#mjx-eqn-3.11)逐次代换，就等到

$$
H(L) = k + H\left( \left\lceil \frac{L}{2^k} \right\rceil \right), \text{其中 k 是满足} 2^k≥L \text{的最小值} \\
$$

所以

$$
H(L) = \left\lceil \lg{L} \right\rceil + 1.
$$

所以显然所需空间为

$$
\begin{align}
2^H-1 =& 2^{\left\lceil \lg{L} \right\rceil + 1} - 1 \\
      =& 2 \times 2^{\left\lceil \lg{L} \right\rceil } - 1 \\
      ≤& 2 \times 2(L-1) - 1 \\
	  =& 4L-5
\end{align}
$$


