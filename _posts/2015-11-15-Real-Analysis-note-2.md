---
layout: post
title: "实变函数笔记 (2)"
date: 2015-11-15
timestamp: "2015-11-16 23:29:27 scinart"
categories: math
tag:
comments: true
toc:
cc: "by-nc-nd"

---

* 各种定义：

20. 实数列$$\{a_n\}$$收敛于$$a$$定义为$$\forall ε>0(\exists N (\forall n>N(\lvert a-a_n\rvert<ε)))$$
21. 实数列和的极限：$$\sum_{k=1}^{∞}{a_k}$$定义为$$\lim_{n→∞}{\sum_{k=1}^{n}{a_k}}$$
22. 实函数的连续性，设D是定义域：$$f$$在点$$x$$连续定义为$$∀ε>0(∃δ>0(∀x'∈D, \lvert x-x' \rvert <δ ⇒ \lvert f(x')-f(x) \rvert < ε ))$$
23. $$f$$是Lipschitz定义为：$$∀c>0,x∈D,x'∈D(\lvert f(x')-f(x)\rvert ≤ c⋅\lvert x'-x \rvert)$$
24. $$f$$是一致连续(uniformly continuous)定义为：$$∀ε>0\{∃δ>0\{∀x,x'\{\lvert x-x' \rvert <δ⇒\lvert f(x)-f(x')\rvert<ε\}\}\}$$

* 各种定理引理

15. 设$$\{a_n\}→a$$，实数列收敛则收敛到唯一的点，实数列收敛则有界，实数列收敛则$$(\forall n(a_n≤c))⇒a≤c$$

    证明略

16. 单调收敛必有界，单调有界必收敛

    等价于公理，证明略。(比如可由实数完备公理找到由小上界)

17. [Bolzano-Weierstrass Theorem](https://en.wikipedia.org/wiki/Bolzano%E2%80%93Weierstrass_theorem) 有界数列必有收敛子数列

    证：royden的没看懂，见[维基百科的证明](https://zh.wikipedia.org/wiki/%E6%B3%A2%E7%88%BE%E6%9F%A5%E8%AB%BE%EF%BC%8D%E9%AD%8F%E7%88%BE%E6%96%AF%E7%89%B9%E6%8B%89%E6%96%AF%E5%AE%9A%E7%90%86)

18. 柯西收敛准则

    $$\{a_n\}→a ⇔ \forall ε>0(\exists N(\forall n,m≥N(\lvert a_m - a_n \rvert < ε ))) $$

    证：正向，显然，反向也很显然，只是借Bolzano-Weierstrass Theorem找到确定的一个数a罢了

19. 极限的线性和单调性

    $$(\{a_n\}→a, \{b_n\}→b) ⇒ \{α⋅a_n+β⋅b_n\}→α⋅a+β⋅b$$  
	$$\forall i(a_i≤b_i)⇒a≤b$$

    这个很奇怪，实数不是用有理数定义的么，那应该先有这个性质再有实数啊。

20. 数列和的极限的性质：

    1. 数列和的极限存在$$⇔ ∀ε>0(∃N(∀n≥N,m∈\mathbf{N}(\lvert \sum_{k=n}^{n+m}{a_k} < ε \rvert)))$$  
	2. $$\sum_{k=1}^{∞}{\lvert a_k \rvert }$$存在推出$$\sum_{k=1}^{∞}{ a_k }$$存在

    证：1: 设前辍和序列为$$b_n$$，$$b_n→b$$，和的极限存在说明$$∀ε>0(∃N(∀m,n>N(\lvert b_m-b_n \rvert < ε)))$$(柯西收敛准则)，把$$b_i$$换成$$\sum_{x=1}^{i}{a_x}$$即可。(这里上下标可能差一，忽略之)  
	    1的反向，还是柯西收敛准则。  
        2: 利用1，再利用绝对值展开之后sum不会变多即可。

21. 连续与子列极限收敛的关系

    设$$f$$是$$E$$上的连续函数，$$\{x_n\} ∈ E$$则

    $$
    f\text{在点}x\text{处连续} ⇔ ∀\{x_n\}→x (\{f(x_n)\}→f(x))
    $$

    证：  
	1. 左⇒右：由连续定义，$$∀ε>0(∃δ>0(∀x'∈D, \lvert x-x' \rvert <δ ⇒ \lvert f(x')-f(x) \rvert < ε ))$$，  
              由$$\{x_n\}→x$$得到$$∀δ>0(∃N(n>N ⇒ \lvert x_n-x\rvert<δ))$$，  
              所以$$∀ε>0(∃N(n>N ⇒ \lvert x_n-x \rvert<某δ ∧ \lvert f(x_n)-f(x) \rvert <ε))$$  
    2. 右⇒左：等价于非左⇒非右，假设非左，既$$∃ε>0(∀δ>0 ¬(∀x'∈D, \lvert x-x' \rvert <δ ⇒ \lvert f(x')-f(x) \rvert < ε ))$$  
               那么让$$δ_i$$取$$1,1/2,1/3,...$$，对每个$$δ_i$$，由假设，  
			   存在$$x_i$$使得$$\lvert x_i - x \rvert<δ_i $$且$$ \lvert f(x')-f(x) \rvert ≥ ε$$，  
			   $$\{x_i\}$$显然收敛于$$x$$，但$$f(x_i)$$显然不收敛于$$f(x)$$，于是我们找到了反例，于是右边不成立，证毕。

22. 设$$f$$是$$E$$上的函数，$$O,U$$是开集，则

    $$
	f\text{在}E\text{上连续} ⇔ ∀O(∃U(f^{-1}(O)=E ∩ U))
    $$

    证：  
	1. 右⇒左：设$$x∈E$$，令$$O=(f(x)-ε,f(x)+ε)$$，则$$∃U(x∈f^{-1}(O)=E∩U)$$，所以 $$x∈U$$，  
               所以$$∃δ\{(x-δ,x+δ) ⊂ U\}$$，此时∀ε∃δ使得xxx满足极限定义。  
    2. 左⇒右：设某开集$$O，x∈f^{-1}(O)$$，空集trivial略，$$I_x = (x-δ,x+δ)$$，由极限定义，  
              总存在$$I_x$$使得$$x_0∈E ∩ I_x ⇒ f(x_0) ∈ (f(x)-ε,f(x)+ε) ⊂ O$$  
              定义$$U= \bigcup_{x ∈ f^{-1}(O)}{I_x}$$，显然U是开集，且$$∀x∈f^{-1}(O)\{ x ∈ I_x ⊂ U ⊂ E∩U \}$$  
              所以存在$$U$$使得$$f^{-1}(O)⊂E∩U$$，又由$$I_x$$的生成方式，$$f(E∩I_x)⊂O⇒E∩I_x⊂f^{-1}(O)$$，  
			  所以$$E∩U⊂f^{-1}(O)$$，所以$$U$$存在。
			
23. 有界闭集上的连续函数必有最值

24. 中值定理：有界闭区间上的连续函数必能取到端点之中所有值。

25. 有界闭集上连续则一致连续

    证：给定$$ε>0$$，设$$δ_x$$是满足x在δx附近时f(x)相差小于ε/2，定义$$I_x=(x-δ_x/2,x+δ_x/2)$$，  
	那么$${\{I_x\}}_{x∈E}$$是$$E$$的一个开覆盖，则必有有限开覆盖，设之为$$\{I_{x_1},⋯, I_{x_n}\}$$，  
    设$$δ=\frac{1}{2}min(δ_{x_i})$$，那么$$∀x,x'∈E, \lvert x-x' \rvert <δ$$, 总能找到一个$$I_{x_k}$$覆盖$$x$$，  
	则$$\lvert x-x_k \rvert ≤ \frac{1}{2}δ_{x_i}$$，由于$$x$$与$$x'$$也很近，所以$$\lvert x'-x_k \rvert ≤ δ_{x_i}$$  
	由$$δ_{x_i}$$定义，有$$\lvert f(x')-f(x) \rvert ≤ \lvert f(x') - f(x_k) \rvert + \lvert f(x) - f(x_k) \rvert < ε/2+ε/2 = ε$$
