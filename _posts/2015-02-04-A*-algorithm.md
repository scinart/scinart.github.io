---
layout: post
title: "A* 算法"
date: 2015-02-04
timestamp: "2015-02-05 19:18:50 scinart"
categories: cs
tag: note
comments: true
toc: true
cc: "by-nc-nd"

---

## 前言：

一年半以前的一个项目用上了A*, 没想到现在以用上了。写个博客记录一下。

## 参考

**这部分才是最有价值的**

关于A*的介绍，见<http://www.redblobgames.com/pathfinding/a-star/introduction.html>.

关于A*的实现细节，估值函数，变体等等，见<http://theory.stanford.edu/~amitp/GameProgramming/>.

关于原作者的证明，见<http://ai.stanford.edu/~nilsson/OnlinePubs-Nils/PublishedPapers/astar.pdf>.

## A* 算法

**主要参考原作者论文**

原作者的论文铺垫比较长，定义比较多，还考虑了有多个终点的情况。我尽量以接近严谨的方式论述，只考虑一个起点(s)和一个终点(t)。但是思路稍加改变就能应用于一个终点集合。由于A*算法常用在游戏的寻路上，所以有时算法执行过程简称为寻路过程。另外，所有边的权值都大于一个正数δ

定义dis(a,b)为a到b最短路径的长度。

给定s,t，对于节点n，定义

$$
g(n)=dis(s,n) \\
h(n)=dis(n,t) \\
f(n)=g(n)+h(n)
$$

并记

$$
f(n),\, g(n),\, h(n)的估计值分别为\hat{f}(n),\, \hat{g}(n),\, \hat{h}(n) \\
且有\hat{f}(n) = \hat{g}(n)+\hat{h}(n)
$$

#### 算法描述

    定义两个点集，open和close
    定义g^(n)为在算法执行过程中已知的从s到n的最短距离
    定义h^(n)为任意满足h^(n)<=h(n)的估值函数
    1. Mark s "open" and calculate f^(s).
    2. while (¬(t is open and t is one of the smallest f^)) do
	3. Arbitrarily select a node u with smallest f^, mark u closed.
       for each vertex v ∈ G.Adj[n]
           if v ∉ close || f^(v)变小
               mark v as open.
    4. mark t "close", terminate.

#### 灵光一闪 [idea来自这里](http://11011110.livejournal.com/135302.html)

有没有觉得和什么很像？(S)  
有没有觉得和什么很像？(P)  
有没有觉得和什么很像？(F)  
有没有觉得和什么很像？(A)

**For each edge $$\overrightarrow{uv}$$，reweight $$w(u,v)$$ as $$w(u,v)-\hat{h}(u)+\hat{h}(v)$$.**

这样reweight之后，如果原来没有负环那么reweight之后也没有负环。

#### 复习一下其他的算法

* 朴素Bellman：
  运行过程：Relax, Relax, Relax.
* 队列优化Bellman(SPFA)：
  运行过程：Relax, enqueue, Relax, popqueue.
* SLF优化和LLL优化：
  优化一下如何enqueue和如何popqueue.
* Dijkstra：
  利用没有负边这个先验知识。用最小堆每次从queue里选最小的。
* A*算法：
  利用先验知识reweight，然后跑某种Dijkstra和Bellman的杂糅体。

**在Bellman和Dijkstra中，也可以想像成一个open集和一个close集。它们本质上都是某种队列优化的Bellman.**

#### Admissible 证明

我们看到，在reweight之后，每次选最小的，这点相似于Dijkstra, 当t为最小的时候就停止，这点也相似于Dijkstra, 但是每个点可能多次标记为open, 这点又像Bellman. 特别的，A*要求$$\hat{h}(n)≤h(n)$$，这究竟是为什么？

首先，注意到$$\hat{h}(n)≤h(n)\text{ implies }\hat{h}(t)≤h(t)=0$$  
其次，注意到在算法结束前(寻路过程中)，最优路径一定有机会继续延伸。这是由$$\hat{h}(n)≤h(n)$$保证的。  
假设寻路得到了一条非最优路径。那么在t一定不是open set里$$\hat{f}$$最小的，因为此时$$\hat{f}(t)=\hat{g}(t)$$  
而最优路径上的点n都有$$\hat{f}(n)=\hat{g}(n)+\hat{h}(n)$$  
这里点中一定有一个点n'满足$$\hat{g}(n')=g(n')$$  
从而有$$\hat{f}(n')=g(n')+\hat{h}(n')≤g(t)≤\hat{g}(t)$$  
如果没有找到最优路径则最后一步是小于号，所以最优路径上的点继续扩展。

带着 **reweight** 的思想，原论文中的引理和定理都非常显然和自然，而且更容易理解。  
如果告诉你A*是某种reweight之后的某个Dijkstra和Bellman的杂糅，那么你自己也能证出来。

思考：

* 为什么$$\hat{h}$$为0时退化成Dijkstra
* reopen是如何产生的？举出一个reopen特别多的例子
* 在什么情况下$$\hat{h}>h$$会得不到最优解。

<!-- TODO: 等到有了折叠功能我把我的答案写下来 -->

## $$\hat{h}$$的一致性

原论文中一致性这一块写的不是很好，而且引入了一个未定义的函数h(m,n); 根据上下文它的意思应该是dis(m,n)

此处抛开原文，自己写！

$$\hat{h}$$的一致性意思是什么呢，就是你猜测的两个点到终点的最短距离($$\hat{h}(m), \hat{h}(n)$$)不能与两点间的实际最短距离(dis(m,n))矛盾。

<a href="javascript:;" 
   class="screenshot"
   rel="/assets/images/for_example_lizi_(Rayna_Handsome).png"
   title="">
  举个栗子
</a>
，你到m到t估值为10，对n到t估值为20，但是dis(m,n)=5，如果从n走到m再走到t估值为15，所以对n的估值不应该大于15，这是一个矛盾。
一致性原则指的是不存在这种矛盾。表达成公式就是 $$ \lvert \hat{h}(m) - \hat{h}(n) \rvert ≤ dis(m,n) $$.

#### 在一致性原则下没有reopen

如果你想明白了reopen的条件 (选中可见)

<hidden>
在open一个点m(which will be reopen)的时候，存在一个更好从s到m的路径(reopen了么。)，
但是这个路径上的某个点n，却由于高估了h^，没有被open。
如果符合一致性原则，就有

$$
\hat{g}(n)+dis(m,n)<\hat{g}(m)
$$

推出

$$
\hat{g}(n)+\hat{h}(n)≤\hat{g}(n)+dis(m,n)+\hat{h}(m)<\hat{g}(m)+\hat{h}(m)
$$

所以先open n，而不会先open m之后再从n到m再reopen m了。
</hidden>

所以，显然，一致性原则下没有reopen.

推论：  
这就意味着：一致性原则下，凡是close的点。$$\hat{g}(n)=g(n)$$，大白话就是已经close的点就是最短路径了。

没有reopen，直接成Dijkstra了。

## Optimality of A*

原论文最后分别证了A*在有tie和没tie情况下的optimality. 不过更难看了。只能说说自己的理解。

由于在一致性的原则下，有$$\hat{g}(n)=g(n)$$，则它和Dijkstra一样，都可以理解成以等势线的形式向外扩张。只不过Dijk的等势线是到起点距离一样，而A\*的等势线被人为扭曲了。等势线的意思是这些点到终点的猜测距离一样。在一致性原则下，任意的$$\hat{h}$$都不会使结果更慢。
A\*也没有理由不检查那些$$\hat{f}<g(t)$$的节点。因为任何已知信息都不能排除它不是最优路径的可能性。
