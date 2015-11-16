---
layout: post
title: "实变函数笔记 (1)"
date: 2015-11-12
timestamp: "2015-11-16 23:30:59 scinart"
categories: math
tag:
comments: true
toc:
cc: "by-nc-nd"

---

* 各种定义：

1. 函数 mapping/function f:A→B
2. 定义域 domain
3. 值域/象 image/range
4. 满射 onto 若B=image
5. 单射 one-to-one 若像中任意值只有一个原像
6. 双射 one-to-one correspondence
7. 等势 equipotent
8. 选择公理： 设$$\mathcal{F}$$是一非空的非空集合的集簇，一个选择函数$$f:\mathcal{F}→\cup_{F \in \mathcal{F}}{F}$$
是满足对每个$$F \in \mathcal{F}, f(F) \in F$$，选择公理是说，这样的$$f$$存在。
9. 偏序的upper bound: 设$$R$$是$$X$$是的偏序，E是X的子集，$$x \in X$$是E的upper bound定义为$$ \forall y \in E, y \preccurlyeq x $$
10. 偏序的maximal: 设$$R$$是$$X$$的偏序，$$x \in X$$是maximal定义为$$\forall y \in X, x \preccurlyeq y ⇒ x = y$$
11. [佐恩引理](https://zh.wikipedia.org/wiki/%E4%BD%90%E6%81%A9%E5%BC%95%E7%90%86) - [Zorn's Lemma](https://en.wikipedia.org/wiki/Zorn%27s_lemma)

12. 开集$$O \subset \mathbb{R}$$定义为：$$\forall x \in O, \exists r \in \mathbb{R^+} \, s.t. \, (x-r, x+r) \subset O $$
13. 极限点(数列)：$$\{x_n\}$$是一实数列，$$\lim_{n→∞}{x_n}=x_0 ⇔\forall ε>0\, \exists N \,s.t.\, n>N ⇒\lvert x_n - x_0 \rvert < ε$$
13. 极限点/导集：设$$A$$是直线上的点集，$$x$$是一点，若$$\forall δ, \mathring{U}(x,δ) \cap A ≠ Φ$$，则称$$x$$是$$A$$的极限点，极限点的集合称为导集，记为$$A'$$
14. 闭包点(point of closure)/闭包：同极限点定义，把$$\mathring{U}$$换成$$U$$，$$A$$的闭包记为$$\bar{A}$$
15. 孤立点/孤立集：若$$x\in A$$且$$x$$不是极限点则称$$x$$是孤立点。若集合中每个点都是孤立点，称之为孤立集。
16. 闭集：定义1(夏道行): 若$$A' \subset A$$则称点集$$A$$是闭集
16. 闭集：定义2(royden): 若$$A = \bar{A}$$，则称$$A$$是闭集，注意到$$A \cup A' = \bar{A}$$
17. 开覆盖(open cover)：一个集合被一个开集的集簇覆盖
18. 有限覆盖(finite cover)：一个集合被一个有限的集合全体构成的集簇覆盖。
19. σ代数： Given a set X, a collection A of subsets of X is called a σ-algebra (of subsets of X)
provided (i) the empty-set, Φ, belongs to A; (ii) the complement in X of a set in A also belongs
to A; (iii) the union of a countable collection of sets in A also belongs to A


* 各种定理引理

1. 每个非空自然数集合都有一个最小成员 (不知道为啥这也要证)
2. 有理数在R上是密集(dense)的，即，$$\forall a \in \mathbb{R}, b \in \mathbb{R}, a<b, \exists c \in \mathbb{Q} \,\, s.t. a<c<b. $$ (不知道为啥这也要证)
3. 每个可数集合的子集都是可数的。(不知道为啥这也要证)
4. 设n是自然数，$$\aleph^n = \aleph$$
5. 每个非空可数集都是一个非空可数集的一一映射的象
6. 可数集的可数并是可数的。(对角线法即可)
7. 非单点的实数区间是不可数的。
8. 开集的有限交是开集，任意开集的并是开集

   证：设开集$$O_1, O_2, \cdots, O_n$$, 它们的交为$$O$$，U表示领域，  
   则$$\forall x \in O, \exists{r_i} \in \mathbb{R^+},i=1,2,\cdots,n \, s.t. \, U(x,r_i) \in O_i$$，  
   所以取最小的$$r_i$$即可，注意，无限时可能无法取到$$r_i$$，任意开集的并是开集由定义是显然的。

9. 每个开集都是可数个不相交开区间的并

   证：

   设开集$$O$$，对任意$$x \in O$$，定义  
   $$ a_x = \inf \{a\mid(a,x] \subseteq O\},\,  
      b_x = \sup \{b\mid[x,b) \subseteq O\},\,  
      I_x = (a_x, b_x) $$，则$$I_x$$属于$$O$$但$$a_x \notin O, b_x \notin O$$。

   (若$$a_x \in O$$，那么由开u区间定义，总存在一个$$U(a,δ) \in O$$，这与$$a_x$$定义不符)

   $$I_x ≠ I_y ⇒ I_x \cap I_y ⇒ Φ\$$，否则，不妨设$$I_x \subsetneqq I_x \cup I_y$$，与$$I_x$$定义不符。

   所以每个开集都是可数个不相交开区间的并，（可数个很容易证，利用有理数可数）

10. $$\bar{E}$$是包含$$E$$的最小闭集

    证：先证$$\bar{E}$$是闭集：若$$x$$是$$\bar{E}$$的闭包点，则$$x$$任一邻域$$I_x \cap \bar{E} ≠ Φ$$，设$$y \in I_x \cap \bar{E}$$，  
    由$$\bar{E}$$的定义必有$$z \in I_x$$使得$$z \in E$$，所以$$x$$的任一邻域中包含$$E$$的点，所以$$x \in \bar{E}$$，所以$$\bar{E}$$是闭集

    再证$$\bar{E}$$是最小闭集，由定义，显然$$E \subset F ⇒ \bar{E} \subset \bar{F}$$，设$$F$$是包含$$E$$的任意闭集，则$$ \bar{E} \subset \bar{F} = F$$，所以$$\bar{E}$$是最小闭集。

11. 开集的补集是闭集，闭集的补集是开集

    证：设$$E$$是一个开集，$$O=\mathbf{R} \sim E$$，$$x \in \bar{O} ⇒ x \notin E$$，否则由开集定义$$x$$的某个邻域内不含$$O$$的点。  
    又$$x \notin E ⇒ x \in O$$，所以$$ \bar{O} \subset O$$，所以$$O$$是闭集。

    再证：设$$O$$是一个闭集，$$ E= \mathbf{R} \sim O$$，则$$x \in E ⇒ \exists δ>0(U(x,δ)\subset E)$$，  
    否则$$x$$的任何开区间都包含一个非$$E$$的元素(即O的元素)，由定义$$x \in \bar{O} = O$$。所以$$E$$满足开集定义，所以$$E$$是开集。

12. $$Φ$$和$$\mathbf{R}$$既是开集又是闭集，闭集的有限并是闭集，闭集的交是闭集。

    证：前半句由定义，后半句由定理8和[德摩根律](https://zh.wikipedia.org/wiki/%E5%BE%B7%E6%91%A9%E6%A0%B9%E5%AE%9A%E5%BE%8B)得到。

13. [Heine–Borel theorem](https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem)
    [海涅－博雷尔定理](https://zh.wikipedia.org/wiki/海涅－博雷尔定理)

    设$$F$$是实数上的有界闭集，则$$F$$的任何开覆盖都有一个子集是$$F$$的有限覆盖

    证：先考虑$$F$$是闭区间$$[a,b]$$，$$\mathcal{F}$$是$$[a,b]$$的一个开覆盖，  
	设$$E=\{x \in [a,b]|\mathcal{F}\text{中存在}[a,x]\text{的有限覆盖}\}$$，  
	则$$E$$非空有界($$a \in E$$且有上界$$b$$)，推出$$E$$有最大值，设$$c = \sup E$$，  
	则$$c≠b ⇒ c=c+ε$$矛盾，所以$$c=b$$.

    再考虑一般情况，设$$F$$被闭区间$$[a,b]$$包间，$$\mathcal{F}$$是$$F$$的一个开覆盖，  
	设$$O=\mathbf{R} \sim F$$，则$$\{O\} \cup \mathcal{F}$$是$$[a,b]$$的一个开覆盖，  
	所以$$[a,b]$$有一个有限的开覆盖，再把$$O$$刨去，就得到$$F$$的一个有限的开覆盖。
	
14. 闭区间套定理

    设$$\{F_n\}_{n=1}^{∞}$$ 是嵌套的可列非空闭集簇，$$F_1$$有界，那么$$\bigcap{F_n}≠Φ$$

    证：反之，则设$$O_n = \mathbf{R} \sim F_n$$，有$$\bigcup {O_n} = \mathbf{R}$$，所以$$O_n$$是$$\mathbf{R}$$的开覆盖，  
    所以$$O_n$$也是$$\mathbf{F_1}$$的开覆盖，由Heine–Borel theorem及$$O_n$$是递增的，总有$$n=N$$使得$$O_n \supset F_1$$成立。  
	但显然存在$$x \in F_n \subset F_1$$不在$$O_n$$里，所以矛盾。