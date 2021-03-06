---
layout: post
title: "Baby Rudin 笔记"
date: 2017-03-20
timestamp: "2018-08-23 12:04:48 scinart"
categories: Math
comments: true
cc: "by-nc-nd"

---

## 记号：

+ `$`: such that
+ `∃°`: exist exactly one
+ `U(p,r)`: neighborhood of p


## 第一章 实数系与复数系

+ 1.1 $$ ¬ (∃ x ∈ Q \,$\, x^2=2 ) $$
+ 1.5 在集合是定义了`<`，具体见维基百科
+ 1.7 定义`上界`，`下界`
+ 1.8 定义`最小上界`，`最大下界`
+ 1.10 定义`最小上界性`
+ 1.11 证明`最小上界性`等价于`最大下界性`
+ 1.12 定义`域`
+ 1.17 定义`有序域`
+ 1.19 定理：具有最小上界性的有序域$$\mathbb{R}$$存在，$$\mathbb{R}$$的元叫做`实数`
   注意：这里是具有最小上界性的有序域存在，我们把它叫做$$\mathbb{R}$$
+ 1.20
  * $$\mathbb{R}$$的阿基米德性： $$ (x∈R ∧ y∈R ∧ x>0) ⇒ (∃n∈\mathbb{N}^+ \,$\, nx>y) $$
  * $$\mathbb{Q}$$在$$\mathbb{R}$$中稠密： $$ (x∈R ∧ y∈R ∧ x<y) ⇒ (∃q∈\mathbb{Q} \,$\, x<q<y) $$
+ 1.21 $$∀x>0, n>0, x∈\mathbb{R}, n∈\mathbb{N} \,$\, ∃^° y>0 \,$\, y^n=x $$
+ 1.23 定义`广义实数系`
+ 1.24 定义`复数域`
+ 1.30 定义`共轭得数，实部，虚部`，有时写成 $$ z=(a,b) \,\, a=\text{Re}(z) \,\, b=\text{Im}(z) $$
+ 1.31 定理

  * $$ \overline{z+w} = \overline{z} + \overline{w} $$.
  * $$ \overline{zw} = \overline{z} \cdot \overline{w} $$.
  * $$ z + \overline{z} = 2\text{Re}(z),\, z-\overline{z} = 2i \text{Im}(z) $$.
  * $$ z \overline{z} $$ 是正实数(除了z=0时)

+ 1.32 定义

  如果z是一复数，它的绝对值 $$ \lvert z \rvert $$ 是 $$ z \overline{z} $$ 的非负平方根

+ 1.33 定理 设z和w都是复数，那么

  * $$ \lvert z \rvert ≥ 0,\, \lvert z \rvert = 0 ⟹ z=0 $$.
  * $$ \lvert \overline{z} \rvert = \lvert z \rvert $$.
  * $$ \lvert zw \rvert = \lvert z \rvert \lvert w \rvert $$.
  * $$ \lvert \text{Re}z \rvert ≤ \lvert z \rvert $$.
  * $$ \lvert z+w \rvert ≤ \lvert z \rvert + \lvert w \rvert $$.

+ 1.35 定理 柯西-施瓦茨(Cauchy–Schwarz_inequality)不等式

  如果 $$ a_1, a_2, \cdots, a_n, \text{ and } b_1, b_2, \cdots, b_n $$ 都是复数，那么

  $$
  \lvert \sum_{j=1}^{n}{a_j\overline{b}_j} \rvert^2 \leq \sum_{j=1}^{n}{\lvert a_j \rvert^2}\sum_{j=1}^{n}{\lvert b_j \rvert^2}
  $$

  **证**：设 $$ A = \sum { \lvert a_j \rvert ^2 },\,
                B = \sum { \lvert b_j \rvert ^2 },\,
                C = \sum { a_j \overline{b_j} } $$，且设$$ B>0 $$，则：

  $$ \begin{aligned} \sum \lvert Ba_j - Cb_j \rvert ^2 &= \sum { (Ba_j - Cb_j) ( B \overline{a}_j - \overline{Cb_j}) } \\
       &= B^2 \sum { \lvert a_j \rvert ^2 } - B \overline{C} \sum { a_j \overline{b}_j } - BC\sum{ \overline{a}_j b_j } + \lvert C \rvert ^2\sum \lvert b_j \rvert ^2 \\
       &= B^2A-B \lvert C \rvert ^2 \\
       &= B(AB- \lvert C \rvert ^2) ≥ 0 \end{aligned} $$

  另一个证明见[这里](../../../2018/08/21/Inequality.md)

**注：此处插入一点抽象代数**

* 原群 (Magma)

  在抽象代數裡，原群是一種基本的代數結構。具體地說，原群有一個集合 M 和一個 M 上的二元運算 M × M → M 。此二元運算依定義是封閉的，且除此之外便沒有其他公理被加在此運算中。
* 半群

  符合结合律的原群
* 幺半群

  有單位元的半群
* 群

  有逆元的幺半群，或整理一下：  
  群(G,·)是由集合G和二元運算"·"构成的，符合以下四个性质（称“群公理”）的数学结构。其中，二元运算结合任何兩個元素a和b而形成另一個元素，记為a·b，符號"·"是具體的運算，比如整數加法。

    1. 封閉性：對于所有G中a, b，運算$$ a·b $$的結果也在G中。
    2. 結合律：對于所有G中的a, b和c，等式 $$ (a·b)·c = a· (b·c) $$ 成立。
    3. 單位元：存在G中的一個元素e，使得對于所有G中的元素a，总有等式 $$ e·a = a·e = a $$ 成立。
    4. __逆元：對于每個G中的a，存在G中的一個元素b使得总有 $$ a·b = b·a = e $$ ，此处e为單位元。
+ 阿貝爾群（Abelian group）

  也稱爲交換群（commutative group）或可交換群，滿足交换律的群
+ 域 (不严格定义，严格的以后补)

  A field has two operations, the addition and the multiplication; it is an abelian group under addition, with 0 as additive identity; the nonzero elements form an abelian group under multiplication, and the multiplication is distributive over addition. 

+ 向量空间

  域$$F$$上的向量空间是一个集合$$V$$，$$V$$上有两个运算$$ + : V × V → V $$(加法)和$$ · : F × V → V $$(标量乘法)，满足以下性质：

  | 公理                       | 说明                                                          |
  |----------------------------+---------------------------------------------------------------|
  | 向量加法的结合律           | u + (v + w) = (u + v) + w                                     |
  | 向量加法的交换律           | u + v = v + u                                                 |
  | 向量加法的单位元           | 存在一个叫做零向量的元素0 ∈ V，使得对任意u ∈ V都满足u + 0 = u |
  | 向量加法的逆元素           | 对任意v ∈ V都存在其逆元素−v ∈ V使得v + (−v) = 0               |
  | 标量乘法与标量的域乘法相容 | a(bv) = (ab)v                                                 |
  | 标量乘法的单位元           | 域F存在乘法单位元1满足1v = v                                  |
  | 标量乘法对向量加法的分配律 | a(u + v) = au + av                                            |
  | 标量乘法对域加法的分配律   | (a + b)v = av + bv                                            |

+ 范数(norm)定义

  Given a vector space $$V$$ over a **subfield F of the complex numbers**, a norm on $$V$$ is a **nonnegative-valued** scalar function $$p: V → [0,+∞)$$ with the following properties:

  For all $$a ∈ F$$ and all $$u, v ∈ V$$,

    * $$p(u + v) ≤ p(u) + p(v)$$ (being subadditive or satisfying the triangle inequality).
    * $$ p(av) = \left\vert a \right\vert p(v) $$ (being absolutely homogeneous or absolutely scalable).
    * If $$p(v) = 0$$ then $$v=0$$ is the zero vector being positive definite or being point-separating).

A seminorm on V is a function p : V → R with the properties 1 and 2 above. 
  
+ 1.36 定义`欧式空间`

  定义 $$ \boldsymbol{x} $$ 与 $$ \boldsymbol{y} $$ 的内积为

  $$ \boldsymbol{x} \cdot \boldsymbol{y} = \sum{x_iy_i} $$

  定义 $$ \boldsymbol{x} $$ 的范数(由1.37可见满足范数的四个条件(1235))为 $$ \| x \| = \left( \boldsymbol{x} \cdot \boldsymbol{x} \right)^{1/2} $$

  定义 有上述内积和范数的 $$ \mathbb{R}^n $$ 上的向量空间为$$n$$维欧式空间

+ 1.37 定理
  
  设 $$ \boldsymbol{x},\, \boldsymbol{y},\, \boldsymbol{z},\, \in \mathbb{R}^k,\, a \in \mathbb{R} $$:

  1. $$ \| \boldsymbol{x} \| \geq 0 $$.
  2. $$ \| \boldsymbol{x} \| = 0 \iff \boldsymbol{x} = \boldsymbol{0} $$.
  3. $$ \| a \boldsymbol{x} \| = \left\vert a \right\vert \| \boldsymbol{x} \| $$.
  4. $$ \left\vert \boldsymbol{x} \cdot \boldsymbol{y} \right\vert \leq \| \boldsymbol{x} \| \| \boldsymbol{y} \| $$.
  5. $$ \| \boldsymbol{x} + \boldsymbol{y} \| \leq \| \boldsymbol{x} \| + \| \boldsymbol{y} \| $$.
  6. $$ \| \boldsymbol{x} - \boldsymbol{z} \| \leq \| \boldsymbol{x} - \boldsymbol{y} \| + \| \boldsymbol{y} - \boldsymbol{z} \| $$.

  注意：这里的$$ \mathbb{R} $$换成 $$ \mathbb{C} $$也是成立的
  证：1,2显然成立，3由定义可得，4即Schwarz不等式，
  5由$$ \| \boldsymbol{x}+\boldsymbol{y}\|^2 = (\boldsymbol{x}+\boldsymbol{y})^*(\boldsymbol{x}+\boldsymbol{y}) $$ 展开加Schwarz可得，
  6由5中用$$ \boldsymbol{x} - \boldsymbol{y} $$替代 $$ \boldsymbol{x} $$，$$ \boldsymbol{y} - \boldsymbol{z} $$ 代 $$ \boldsymbol{y} $$ 得

  
+ 习题9，没有，例如集合$$\left\{ \frac{n}{n+1} \right\}$$
 
## 第二章 基础拓扑
 
+ 2.1 定义`函数`
+ 2.2 定义`象`，`值域`，`映满`
+ 2.3 定义`1-1对应`，称这为等价
+ 2.4 定义`有限`，`无限`，`可数`，`不可数`，`至多可数`
+ 2.7 定义`序列`：序列是定义在正整数上的函数
+ 2.8 定理：可数集的每个无限子集也是可数集
+ 2.9 定义集合的`并`，`交`
+ 2.12 定理：可数个可数集是可数的
+ 2.14 定理，值域是$${0,1}$$的序列是不可数的(康托尔对角线)
+ 2.15 定义`度量空间`，`距离`，其中距离d满足
  1. $$d(p,q)=0 ⇔ p=q$$.
  2. $$d(p,q)=d(q,p)$$.
  3. 三角不等式

  满足这三种性质的函数又叫`距离函数`或`度量`
 
+ 问题1，Rn中是否所有椭球是度量
+ 问题2，Rn中是否所有中心对称凸集是度量
 
+ 2.17 定义`开区间`，`闭区间`
+ 2.18 定义
  * `邻域`
  * `极限点`(每个去心邻域都包含)
  * `孤立点`(属于但不是极限点)
  * `闭`(包含它的所有极限点)
  * `内点`(存在邻域属于)
  * `开`(每个点都是内点)
  * `完全`(闭且每个点都是极限点)
  * `有界`(存在某点使所有点与之距离有限)
  * `稠密`(E在X中稠密 $$ ⇔ (X ⊂ \overline{E}) $$)
+ 2.19 定理 邻域是开集
+ 2.20 定理 如果p是E的一个极限点，那么p的每个邻域都有E的无限多个点。
       推论 有限点集没有极限点
+ 2.22 定理 设$$\{E_α\}$$是一簇集，则 $$\left(\bigcup_α E_α\right)^c = \bigcap_α(E_α^c)$$
+ 2.23 定理 开集的余集是闭集，闭集的余集是开集。
+ 2.24 定理 开集的并是开集，闭集的交是闭集。有限开集的交是开集，有限闭集的并是闭集。
+ 2.26 定义 E'为E在X中所有极限点的集。$$\overline{E} = E ∪ E' $$叫做E的`闭包`
+ 2.27 定理
  * $$\overline{E}$$闭
  * $$\overline{E} = E $$ ⇔ E闭
  * $$E ⊂ F ⇒ \overline{E} ⊂ \overline{F}$$.
+ 2.28 定理 设E是不空实数集，上有界，令$$y=\text{sup}E$$，那么$$y∈\overline{E}$$
+ 2.30 定理 设Y ⊂ X，Y的子集E关于Y是开的 ⇔ 存在开集G ⊂ X使E=Y∩G
  * 证：  
    正向：取E中所有点的所有小领域的并，得到G  
    反向：E的每个点的领域一开始在G中，所以在Y∩G中，a.k.a E中，所以E是开集
+ 2.30 推论by me 设Y ⊂ X，Y的子集E关于Y是闭的 ⇔ 存在闭集G ⊂ X使E=Y∩G
  * 证：E关于Y是闭的 ⇔ $$E^c$$关于Y是开的 ⇔ 存在开集$$G^c ⊂ X$$ 使 $$E^c = Y ∩ G^c$$ ⇔ 存在闭集 G ⊂ X 使 E = Y∩G
+ 2.31 定义 `开覆盖`
+ 2.32 定义 `紧集`:每个开覆盖都有一个有限的子覆盖
+ 2.33 定理 设K ⊂ Y ⊂ X，那么K关于X是紧的 ⇔ K关于Y是紧的 (由定理2.30证)
+ 2.34 定理 凡度量空间的紧子集都是闭集
  * 证明by书:
  * 设K是度量空间X的紧子集，p∈X, p∉K, 对q∈K, 令V_q=U(p,d(p,q)/2)，则{V_q}是K的开覆盖，由K的紧性，有有限子覆盖，所以p的一个邻域交K为空，所以$$K^c$$为开集
  * 证明by me:
  * 反证：设K是度量空间X的紧子集，但不是闭集，∴∃p∈X, p∉K, p是K的极限点，对q∈K, 令V_q=U(p,d(p,q)/2)，则{V_q}是K的开覆盖，但是显然没有有限子覆盖，与紧性矛盾。
+ 2.35 定理 凡紧集的闭子集都是紧集
  * 证：设F ⊂ K ⊂ X, F关于X是闭的，K是紧的。F的开覆盖，并F^c是K的开覆盖，所以有有限开覆盖，去掉F^c，也是F的有限开覆盖。
+ 2.35 推论：F闭 K紧 ⇒ F ∩ K 紧，因为由2.34, K紧⇒K闭
+ **2.36 定理** 如果{K_α}是度量空间X的一组紧子集，并且{K_α}中任意有限个集的交都不空，那么$$\bigcap{K_α}$$不空
  * 反证：设$$G_α = K_α^c$$，由于$$\bigcap{K_α}$$空，所以G_α是K_1的一个开覆盖。所以有有限子覆盖$$\left\{G_{α_n}\right\}$$。这就意味着K中的每个点，都不在某个$$K_{α_i}$$中，所以$$\bigcap{K_α,K_1}$$为空，与题设矛盾。
+ 2.36 推论 非空紧集套之交是非空的。
+ 2.37 设E是紧集K的无限子集，则E在K中有极限点。
  * 证：反之，K中的所有点都不是E的极限点，或者说相对于E孤立，所以由孤立点构成的开覆盖每个覆盖最多盖住E的一个点，所以没有有限开覆盖可以盖住E，更盖不住K。与K的紧性矛盾。
+ 2.38 定理 $$\mathbb{R}^1$$中的闭区间套序列之交不是空集
  * 证：暴力找一个点，比如下界的上确界
+ 2.39 定理 $$\mathbb{R}^n$$中的闭方格套序列之交不是空集
+ 2.40 定理 每个k-方格是紧集
  * 证：二分
+ 2.41 定理 在R^k中 (a)E闭且有界⇔(b)E紧⇔(c)E的每个无限子集在E内有极限点。
  * 证
  * (a)⇒(b) 由2.40和2.35
  * (b)⇒(c) 等价于定理2.37
  * (c)⇒(a) E显然有界，如果E不闭，说明E的一个极限点∉E，把这个极限点的构造点列取出来，则这个点列是E的无限子集，在E中没有极限点。
+ 2.42 定理(Weierstrass) $$\mathbb{R}^k$$中每个有界无限子集在$$\mathbb{R}^k$$中有极限点。
  * 证：把E装进某个k-方格中，由2.37, 证毕
+ 2.43 定理 令P是R^k中的非空完全集，则P不可数
  * 证：因为P非空，所以令x∈P，由于x是P的极限点(由完全集定义)，P包含无限个点。现假如
        P可数，那么将P的点排成一列x_1, x_2, …，令V_1是x_1的一个邻域，半径为r，在邻域内任取一个点p_2，
        令$$V_2=U(p_2, min(r-d(x_1,p_2), d(x_1,p_2))/2)$$，则$$x_1∉\overline{V_2} ∧ V_2⊂V_1$$，
		递归，每次保证$$x_i ∉ \overline{V_{i+1}}$$，得到{V_n}  
        设$$K_n = \overline{V_n}∩P$$，由完全集的定义，P是闭集，则$$K_n$$是闭集，
        由V_n的构造过程，$$\overline{K_n}$$是非空紧集套，由2.36推论，非空紧集套之交非空，
		然而P中任何一个点$$x_n$$都不属于$$K_{n+1}$$，矛盾。
+ 2.43 推论 每个闭区间是不可数的
+ 2.44 定义(Cantor 集)
  由于构造方法是闭区间套，所以Cantor集不空。由2.24，Cantor闭。由于每个点都在一个闭区间套内，所以每个点都是极限点。所以Cantor集完全。
+ 2.45 定义 A和B是分离的：$$A∩\overline{B} = \overline{A}∩B = ϕ$$
+ 2.47 定理 $$\mathbb{R}^1$$的子集E是连通的 ⇔ (∀x∈E,y∈E,x<z<y $ z∈E)
  * 证：显然

习题

+ p2.13 作一个实数的紧集，使它的极限点构成一个可数集
  * 设X⊂[1,2]是的紧集，并且极限点只有一个，为{1}，这是可以做到的。显然1∈X
  * 将如上所述的集合/2，得到[0.5, 1]上的一个紧集，极限点为{0.5}
  * 将如上所述的集合再/2，然后将这些无限个集合并起来。
  * 因为0的一个开覆盖覆盖住了无限个上述集合，只剩有限个紧集，所以并之后的集合是紧集，以1, 1/2, 1/4..., 0为极限点
+ p2.17 令E是所有x∈[0,1]其十进制小数展开式中只有数字4和7的数的集合，则
  * ¬ $ E可数
  * ¬ $ E在[0,1]稠密
  * id $ E紧
  * id $ E完全
+ p2.18 ℝ¹中是否存在不含有理数的不空完全集
  * 是，令E是所有x∈[0,1]其十进制小数展开式中只有数字1和2的数的集合，令y=0.303003000300003000003...，,  
    令$$F=\{x+y \vert x∈E\}$$，则由p2.17，F是完全集，下面证明F不含有理数
  * 设u∈F, 则u的十进制展开式为$$0.babaabaaabaaaabaaaaa...$$，其中a=1或2，b=4或5，显然没有循环节
  * 注释：设C是Cantor集，令$$x=0.01001000100001000001...$$，那么C+x也不含无理数
  * 证：设c∈C，则c的三进制展开中只有0和2，把c的三进制展开中所有位做如下变换，这当前位与下一位是'xy'，则x→z
    * '00' → '0'
    * '02' → '1'
	* '20' → '-1'
	* '22' → '0'
  * 例：$$ 0.022002220\dot{2}$$变成$$0.10\{-1\}0100\{-1\}1\dot{0}$$，虽然最后看似少了一个-1，但是它们的值显然是相等的。
  * 所以 ∀c∈C $ c的三进制展开是数码1与-1交替出现。
  * 设c+x是有理数，则有循环节，设循环节长度为n，那么在x第O(n²)之后的展开式，一定有大于n个数全是0(不妨取3*n的一个区间)，
    所以循环节中的数码与c中相同(因为c中没有连续的1，所以进位不可能)，所以循环节中是1, -1交替，
    但是在继续展开，会在循环节中加一个'1'，这个'1'无论加在哪一位都会破坏+1,-1交替出现，所以循环节被破坏。
+ p2.26 设X是一个度量空间，X的每个无限子集都有极限点(这个叫做列紧性)，证明X是紧的
  证：由之前的习题，X有可数基，所以X的每个开覆盖都有可数子开覆盖。令这些开覆盖为{Gₙ}，如果没有{Gₙ}的有限子组可以覆盖X，
  那么令Fₙ = G₁∪⋯∪Gₙ的余集，Fₙ不空，F₁ ⊃ F₂ ⊃ ⋯，又有∩Fₙ是空集。设E是从每个Fₙ中取一点，由大前提，E有极限点，设为p，
  设p被Gₚ覆盖，则p∈Gₚ意味着p是Gₚ的内点，就是说从Fₙ之后，无论怎么限点都会与p有距离，这就与p是E的极限点矛盾。
+ p2.27 度量空间X中的点p叫做E ⊂ X中的`凝点`，如果p的每个领域含有E的不可数无穷多个点。  
  设 $$E⊂R^k$$ 不可数，P为E的所有凝点组成的集。证明P完全，并且E中最多有可数个点不在P中

  证：先证P不空：思路，如果是$$E⊂R^k$$的一个闭子集，那么直接二分就可以。但是现在$$E⊂R^k$$，
  我们把E中的每个点随便映射成半径1以内的一个有理数，这样无理个点映射成了有理个数，
  必有一个有理点被不可数个点映射(因为有理×有理=有理)
  又因为映射时限制了半径。所以出现了一个闭球里有不可数个E的点，二分找凝点。故P不空

  证：任何p∈P, p是P的极限点。反之，p是P的孤立点，就证明p的一个领域内只有一个凝点。
  于是有$$ (U(p,r) \setminus U(p,\frac{1}{2}r)) ∩ E $$ 可数，
  $$ (U(p,r) \frac{1}{2} \setminus U(p,\frac{1}{4}r)) ∩ E $$可数，等等。
  但是 U(p,r) ∩ E 等于以上的并，可数×可数=可数，与p是凝点矛盾。

  证：$$P=\overline{P}$$这个很trivial，略。

  由以上可知P是完全集。

  再证E中最多有可数个点不在P中

  思路，让每个不在P中的E的点映射到一个有理数，证明每个有理数最多由可数个点映射过来。然后可数×可数=可数

  证：设e∈E, e∉P, 所以存在e的一个邻域只包含E的至多可数个点
  令q为一有理点，q与e的距离≤r/2，将e映射到q，所以U(q,d(q,e))只包含E的至多可数个点
  这样我们就建立了一个E→Q的映射，其中Q是有理点集，只要证明∀q∈Q，{q}的原象(不妨设之为无限集)至多可数，  
  令$$r = \limsup_{p:f(p)=q}{d(p,q)}$$，若r→∞，则q的任意邻域内只包含E的至多可数个点，与P不空矛盾。所以r有限
  下面证明U(q,r)包含E的至多可数个点。令$$\{r_n\}→r$$，$$r_n$$递增，则$$U(q,r) = \bigcup{U(q,r_n)}$$，所以可数×可数=可数
  
+ p2.28
+ p2.29

## 第三章 数列与级数

+ 3.1 定义 度量空间X中的序列{p_n}是`收敛`的：∃p∈X $ ∀ε>0 $ ∃N $ n≥N ⇒ d(p_n,p)<ε
+ 3.2 定理 设X中的序列{p_n}是收敛的
  * (a) {p_n}收敛于p ⇔ p的每个邻域包含{p_n}的所有项去掉有限项 (等价于定义)
  * (b) {p_n}收敛于p ∧ {p_n}收敛于p' ⇒ p=p'
  * (c) {p_n}有界
+ 3.3 定理 极限满足四则运算
+ 3.4 定理 向量的收敛，加法，数乘，内积
+ 3.5 定义`子序列`，子序列的极限叫做`部分极限`
+ 3.6 定理 设{p_n}是紧度量空间X中的序列，那么{p_n}有某个子序列收敛到X中的某个点。
  * 证，设E的{p_n}的值域，如果E有限，显然，否则，由2.37，E在X中有极限点，显然了吧。
+ 3.7 定理 度量空间X里的序列{p_n}的部分极限组成X的闭子集
  大白话就是极限的极限是原来的极限。
+ 3.8 定义 `Cauchy序列`
+ 3.9 定义 `直径`，记作$$\text{diam}E$$
+ 3.10 定理
  * (a) $$\text{diam}\overline{E} = \text{diam}E$$.
  * (b) $$ K_n\text{是非空紧集} ∧ K_n ⊃ K_{n+1} ∧ \lim_{n→∞}{\text{diam}K_n}=0 ⇒ \bigcap_1^∞{K_n}\text{只有一个点}$$.
  * (a) 可以理解成就是极限的极限含在原来的极限中。
  * (b) 由2.36非空紧集套定理$$\bigcap_1^∞{K_n}$$不空，又由于$$\lim_{n→∞}{\text{diam}K_n}=0$$所以有两个点显然矛盾
+ 3.11 定理
  * (a) 在度量空间中，收敛序列是Cauchy序列
  * (b) 紧度量空间X中的Cauchy序列收敛于X中的某个点
  * (c) 在$$\mathbb{R}^k$$中，每个Cauchy序列收敛

  证：
  * (a) 显然
  * (b) 设{p_n}是X中的Cauchy序列，令$$ E_n = \left\{p_n, p_{n+1},…\right\} $$，则$$\overline{E_n}$$满足定理3.10 (b)中的条件。  
        所以有惟一的p∈X在$$\bigcap{\overline{E_n}}$$中，由定义，$$p_n → p$$
  * (c) 由(b)立得
+ 3.12 定义 `完备`：度量空间X的每个Cauchy序列在X中收敛
  由定义及3.11，紧度量空间和$$\mathbb{R}^k$$是完备的。完备度量空间的闭子集是完备的。
+ 3.13 定义 对实数序列，`单调递增`(≥)，`单调递减`(≤)
+ 3.14 定理 对实数序列 对单调序列 收敛 ⇔ 有界
+ 3.15 定义 对实数序列 收敛到+∞ -∞
+ 3.16 定义 对实数序列 `上极限`，`下极限`，可记作$$s^*, s_*$$
+ 3.17 定理 对实数序列 上极限是一个子列的极限，上极限唯一
+ 3.19 定理 若n>N时, $$s_n≤t_n$$则$$s^*≤t^*,\,s_*≤t_*$$
+ 3.20 定理
  * (a) $$ ∀p>0 \,$\, \lim_{n→∞}{\frac{1}{n^p}} = 0 $$
  * (b) $$ ∀p>0 \,$\, \lim_{n→∞}{\sqrt[n]{p}} = 0 $$
  * (c) $$ \lim_{n→∞}{\sqrt[n]{n}} = 1 $$
  * (d) $$ ∀p>0, α∈\mathbb{R} \,$\, \lim_{n→∞}{\frac{n^α}{(1+p)^n}} = 0 $$
  * (e) $$ \lvert x \rvert<1 ⇒ \lim_{n→∞}{x^n}=0 $$

  证：
  * (c) 令$$x_n = \sqrt[n]{n} - 1 $$，那么$$x_n≥0$$，由二项式定理 $$ n = (1+x_n)^n ≥ \frac{n(n-1)}{2}x_n^2 $$
  * (d) 设k是一个正整数，k>α，当n>2k时  
    $$ (1+p)^n > {n \choose k}p^k = \frac{(n/2)^k}{k!}p^k $$  
    所以  
    $$ 0 < \frac{n^α}{(1+p)^n} < \frac{k!2^k}{p^k}n^{α-k} \,\, (n>2k) $$
+ 3.21 定义 `无穷级数`
+ 3.22 定理 $$\sum{a_n}\text{收敛} ⇔ ∀ε>0 \,$\, ∃ N \,$\, ∀m≥n≥N$$ (由定义立得)

  $$ \left|\sum_{k=n}^{m}{a_k}\right|≤ε $$

+ 3.23 定理 $$\sum{a_n}\text{收敛} ⇒ \lim_{n→∞}{a_n}=0 $$，由3.22
+ 3.24 定理 非负级数收敛 ⇔ 部分和有界 (显然)
+ 3.25 定理 `比较验敛法`
  若cₙ≥0收敛, dₙ≥0发散, n≥N ⇒ \|aₙ\|≤cₙ, n≥N ⇒ bₙ≥dₙ，则aₙ收敛，bₙ发散
+ 3.26 定理 几何级数0≤x<1时，xⁿ收敛，x≥1时xⁿ发散
+ 3.27 定理 设aₙ非负递减，则aₙ收敛 ⇔ a₁ + 2a₂ + 4a₄ + 8a₈ + ⋯ 收敛  
  证：显然左≤右，但是2*左≥右
+ 3.28 定理 $$\sum{\frac{1}{n^p}}$$在p>1收敛，p≤1发散  
  证，用3.27
+ 3.29 定理 $$\sum{\frac{1}{n(\log{n})^p}}$$在p>1收敛，p≤1发散  
  证，用3.27和3.28，略
+ 3.30 定义 $$ e = \sum_{n=0}^{∞}{\frac{1}{n!}} $$
+ 3.31 定理 $$\lim_{n→∞}{\left(1+\frac{1}{n}\right)^n} = e$$  
  证：见<http://www-personal.umich.edu/~boweiwu/euler_num_proof.pdf>([缓存](/pdfs/euler_num_proof.pdf))
+ 3.32 定理 e是无理数  
  证：设$$s_p = \sum_{n=0}^{p}{\frac{1}{n!}}$$

  $$ e-s_n=\frac{1}{(n+1)!} + \frac{1}{(n+2)!} + \frac{1}{(n+3)!} + ⋯ < \frac{1}{(n+1)!}\left\{1 + \frac{1}{n+1} + \frac{1}{(n+1)^2} + ⋯ \right\} = \frac{1}{n!n} $$

  假设e是有理数，e=p/q，那么  
  $$0<e-s_q<\frac{1}{q!q}$$  
  $$0<q!(e-s_q)<1/q$$  
  但是$$q!(e-s_q)$$是整数，于是矛盾。
+ 3.33 定理 `根值验敛法` 设有∑aₙ, 令$$α=\limsup_{n→∞}{\sqrt[n]{\lvert a_n \rvert}}$$，那么
  * (a) α<1时, ∑aₙ收敛
  * (b) α>1时, ∑aₙ发散
  * (a) α=1时, 不确定

  证：
  (a)说明$$ ∃β,N \,$\, α<β<1, n≥N ⇒ \sqrt[n]{\lvert a_n \rvert}<β $$，也就是说$$\lvert a_n \rvert<β^n$$，由比较验敛法，∑aₙ收敛
+ 3.34 定理 `比率验敛法` 关于级数∑aₙ
  * (a) 如果$$\limsup_{n→∞}{\lvert \frac{a_{n+1}}{a_n} \rvert}<1$$，它就收敛
  * (b) 如果n>n₀时，$$\lvert \frac{a_{n+1}}{a_n} \rvert ≥ 1$$，它就收敛
+ 3.37 定理 对于正数序列cₙ

  $$ \liminf_{n→∞}{\frac{c_{n+1}}{c_n}} ≤ \liminf_{n→∞}{\sqrt[n]{c_n}} \\
     \limsup_{n→∞}{\sqrt[n]{c_n}} ≤ \limsup_{n→∞}{\frac{c_{n+1}}{c_n}} $$
+ 3.38 定义 `幂级数` 设有复数序列{cₙ}，级数 $$\sum{c_nz^n}叫做幂级数，cₙ叫做这个级数的`系数`，$$z$$是复数
+ 3.39 令

  $$ α = \limsup_{n→∞}{\sqrt[n]{\lvert c_n \rvert},\,R=\frac{1}{α}} $$

  那么∑cₙzⁿ在\|z\|<R时收敛，\|z\|>R时发散，\|z\|=R叫做收敛圆，R叫收敛半径
+ 3.41 定理 `分部求和` 设{aₙ},{bₙ}, n≥0时，令$$A_n = \sum_{k=0}^{n}{a_k}$$，令$$A_{-1}=0$$，那么在0≤p≤q时，有

  $$ \sum_{n=p}^{q}{a_nb_n} = \sum_{n=p}^{q-1}{A_n(b_n-b_{n+1})} + A_qb_q - A_{p-1}b_p $$
+ 3.42 定理 若Aₙ有界，bₙ递减，bₙ→0，则∑aₙbₙ收敛
+ 3.43 定理 `交错级数` 若\|cₙ\|递减并→0，cₙ是交错级数，则∑cₙ收敛
+ 3.44 定理 设∑cₙzⁿ的收敛半径是1，cₙ递减并→0，则∑cₙzⁿ在\|z\|=1 and z≠1时收敛
+ 3.45 定义 `绝对收敛`
+ 3.45 定理 绝对收敛的数列收敛
+ 3.46 定义 `非绝对·收敛` 收敛但不绝对收敛
+ 3.47 定理 级数满足加法和数乘
+ 3.48 定义 级数的Cauchy乘积
+ 3.50 定理(Mertens) 设
  * (a) ∑aₙ绝对收敛
  * (b) ∑aₙ → A
  * (c) ∑bₙ → B
  * (d) $$c_n = \sum_{k=0}^{n}{a_kb_{n-k}}\,\, (n=0,1,2,⋯)$$

  那么

  $$ \sum_{n=0}^{∞}{c_n}=AB $$

  证：令

  $$ A_n = \sum_{k=0}^{n}{a_k},\,B_n = \sum_{k=0}^{n}{b_k}, C_n = \sum_{k=0}^{n}{c_k}, β_n = B_n-B $$

  则

  $$\begin{eqnarray} C_n &=& a_0b_0 + (a_0b_1+a_1b_0) + ⋯ + (a_0b_n + a_1b_{n-1} + ⋯ + a_nb_0) \\
                         &=& a_0B_n + a_1B_{n-1} + ⋯ + a_nB_0 \\
						 &=& a_0(B+β_n) + a_1(B+β_{n-1}) + ⋯ + a_n(B+β_0) \\
						 &=& A_nB + a_0β_n + ⋯ + a_nβ_0 \end{eqnarray}$$

  令$$γ = a_0β_n + ⋯ + a_nβ_0$$

  这里的idea是交错级数乘完之后不一定收敛，但是如果有一个绝对收敛，就可以切成有穷和无穷两部分，有穷部分显然→0，无穷部分如果是$${a_{n⋯∞}}$$那么无穷个β只能放缩到β₀，不行，所以无穷部分是$${β_{n...∞}}$$，放缩到βₙ<ε
  | a₀ | a₁ | a₂ | ⋯ | aₙ |
  | βₙ | βₙ₋₁| βₙ₋₂| ⋯ | β₀ |
+ 3.51 定理(缺少证明) 如果级数∑aₙ, ∑bₙ, ∑cₙ分别收敛于A, B, C，并且cₙ = a₀bₙ + ⋯ + aₙb₀，那么C=AB
+ 3.52 定义 级数的`重排`
+ 3.54 定理 设实级数aₙ非绝对收敛，那么∀α, β, α≤β $ ∃∑aₙ' $ aₙ'是aₙ的重排，它的部分和下极限是α，上极限是β
+ 3.55 定理 绝对收敛的级数重排之后绝对收敛于同一个和

习题

+ p3.7
+ p3.11
+ p3.12
+ p3.14 设$$\{s_n\}$$为得数序列，定义它的算术平均数$$σ_n$$为

  $$ σ_n = \frac{s_0+s_1+⋯+s_n}{n+1},\,\,\,(n=0,1,2,⋯)$$

  1. (a) 如果$$\lim{s_n}=s$$，求证$$\lim{σ_n}=s$$
  2. (b) 作一个序列$$\{s_n\}$$，使$$\lim{σ_n}=0$$但$$\{s_n\}$$不收敛
  3. (c) 命题是否为真 $$ ∃ {s_n} \,$\, ∀ n \,$\, s_n > 0 ∧ \lim{σ_n}=0 ∧ \limsup{s_n} = ∞$$
  4. (d) n≥1, 令$$a_n = s_n - s_{n-1}$$，证明

     $$ s_n - σ_n = \frac{1}{n+1}\sum_{k=1}^{n}{ka_k} $$

     假定$$\lim{(na_n)}=0$$并且$$\{σ_n\}$$收敛，证明$$\{s_n\}$$收敛。
  5. (e) 以后补

  证：

  1. (a) 思路是当n充分大，s_n与s充分接近，这样不管以前有限个数差的多远随着n增大都可以被平均成s
  2. (b) $$ \begin{cases} s_{p_n} = 1,\,\,\,(p_n=n^2) \\ 0,\,\,\,\text{otherwise} \end{cases} $$
  3. (c) $$ \begin{cases} s_{p_n} = 1,\,\,\,(p_n=(1+2+⋯+n)^2) \\ 0,\,\,\,\text{otherwise} \end{cases} $$
  4. (d) 等式证明直接展开即可，由于$$\lim{(na_n)}=0$$并且$$\{σ_n\}$$收敛，立得$$\{s_n\}$$收敛。
  <!-- 5. (e) 在较弱的假定下，推导上一个结论：假设$$M<∞, ∀n, 'vert na_n 'vert ≤ M ∧ 'lim{σ_n} = σ$$ -->

+ p3.21 证：如果序列$$\{E_n\}$$里的$$E_n$$都是完备度量空间$$X$$中的有界闭集，
  $$E_n ⊃ E_{n+1}$$且$$\lim_{n→∞}{\text{diam}{E_n}} = 0$$，那么$$\bigcap_{n=1}^{∞}{E_n}$$恰由一点构成

  证：由题意知$$E_n$$不空。取$$p_n ∈ E_n$$，显然$$p_n$$是柯西序列，由完备定义$$\{p_n\}→p ∈ X$$
  如果$$\bigcap_{n=1}^{∞}{E_n}$$有两个点则与$$\lim_{n→∞}{\text{diam}{E_n}} = 0$$矛盾。
  又$$p ∈ E_n$$(反之，$$p$$是$$E_n$$的极限点，但$$E_n$$是闭集，还是$$p ∈ E_n$$)，所以$$p ∈ \bigcap_{n=1}^{∞}{E_n}$$

+ p3.22 设X是完备度量空间，而序列$$\{G_n\}$$里的$$G_n$$都是$$X$$的稠密开子集，
  证明Baire定理：$$\bigcap_{n=1}^{∞}{G_n}$$不空(事实上它在$$X$$中稠密)

  证：任取$$p_1 ∈ G_1$$，取$$p_1$$的领域$$E_1$$使$$\overline{E_1} ⊂ G_1 $$，
  再在$$E_1$$中取点$$P_2$$，由于$$G_n$$稠密所以可以取到。再取$$E_2$$使$$\overline{E_2}⊂G_2$$且$$\overline{E_2} ⊂ \overline{E_1}$$
  且让半径减半，类推，得到$$\{\overline{E_n}\}$$，则习题3.21，$$\lim_{n→∞}{\text{diam}{\overline{E_n}}} = \{p\}\$$
  则$$ p ∈ \bigcap_{n=1}^{∞}{G_n}$$，由于第一次取$$p_1$$和$$E_1$$可以在很多位置($$G_1$$稠密性)，
  相当于$$E_1$$可以在任何点的任何领域，所以$$\bigcap_{n=1}^{∞}{G_n}$$稠密

+ p3.23 设$$\{p_n\}$$和$$\{q_n\}$$是度量空间$$X$$里的Cauchy序列。证明$$\{d(p_n, q_n)\}$$收敛

  见提示即可
+ p3.24 接上，若$$\{d(p_n, q_n)\} → 0$$就说$$X$$中$$\{p_n\}$$和$$\{q_n\}$$是等价的。求证这是一个等价关系。

  显然自反，对称，由三角不等式，传递也满足。

+ p3.25 p3.24和之后几问和p3.25直觉上都很显然，证明也不难，不写了。但是`完备化`这个概念非常有意思。

## 第四章 连续性

+ 4.1 定义 设X和Y是度量空间，E⊂X, f:E→Y, 用ε-δ定义函数在定义域的极限点`连续`
+ 4.2 定理 用ε-δ定义与用序列极限定义的连续性等价
+ 4.3 定义 复数域上 函数的加，乘，数乘
+ 4.4 定义(by me) 若$$lim_{x→p}f(x)=q$$则称q为函数f在p点的假值
+ 4.4 定理 函数上连续点的假值满足加法，乘法，除法
+ 4.5 定义 如果函数在p点的假值等于f(p)，那么称f在p点`连续`
+ 4.7 定理 复合函数的连续性
+ **4.8 定理** 设度量空间X, Y, f:X→Y, f在X是连续 当且仅当 ∀V⊂Y, V开⇒$$f^{-1}(V)$$在X中是开集  
  证：
  * 正向：若f在X是连续 ，V是Y中的开集，f(p)∈V，由连续性，p是$$f^{-1}(V)$$的内点
  * 反向：V不断缩小，$$f^{-1}(V)$$始终是开集，所以f连续

  注意， $$∀V⊂Y$$, $$V$$开⇒$$f^{-1}(V)$$在$$X$$中是开集  
  等价于 $$∀V^C⊂Y$$,$$V^C$$闭⇒$$f^{-1}(V^C) = (f^{-1}(V))^C$$在X中是闭集
+ 4.9 定理 复数域上 连续函数的和，积，商连续
+ 4.10 定理 R^k上连续 ⇔ 每个分量都连续，且连续性满足加法，乘法。
+ 4.13 定义 E→R^k有界
+ 4.14 定理 设度量空间X, Y，X紧，f:X→Y连续，则f(X)紧
  证：由4.8和紧性的定义立得
+ 4.15 定理 设度量空间X, X紧, f:X→ℝⁿ连续，则f(X)闭且有界  
  证：由4.14，f(X)紧，再上2.41
+ 4.16 定理 设度量空间X, X紧, f:X→ℝ连续，则$$ ∃x,y∈X \,$\, f(x)=\sup{f(X)}, f(y)=\inf{f(y)} $$  
  证：由4.15 f(X)闭，立得
+ 4.17 定理 设度量空间X, Y，f:X→Y是一一映射，g是f的反函数，那么g是连续映射
+ 4.18 定义 `一致连续`
+ 4.19 定理 设度量空间X, Y，X紧，f:X→Y连续，则f在X是一致连续  
  证：给每个点配置一个小邻域，让这个小邻域的值域的直径小于ε，再由紧性可得
+ 4.22 设度量空间X, Y，X连通，f:X→Y连续，则f(X)连通  
  证：若f(X)不连通，设f(X)=A∪B，令$$G=f^{-1}(A)$$, $$H=f^{-1}(B)$$，则由f的连续性  
  $$f(\overline{G}) ⊂ \overline{A}, f(\overline{H}) ⊂ \overline{B}$$，然后差不多显然了。
+ 4.23 定理 f:[a,b]→R, ∀c ( f(a)<c<f(b) ⇒ ( ∃x∈(a,b) $ f(x)=c ) )  
  证：由4.22立得
+ 4.25 定义 `左极限`，`右极限`
+ 4.26 定义 设f:(a,b)→Y，x∈(a,b)，如果f在x不连续，称为f在点x间断，  
  如果左右极限存在，则称f在x发生`第一类间断`，或`简单间断`，否则称为`第二类间断`
+ 4.28 定义 对f:(a,b)→ℝ `单调递增`，`单调递减`
+ 4.29 定理 单调函数在定义域上每个点的左右极限都存在
  由1.19可得
+ 4.29 推论 单调函数没有第二类间断
+ 4.30 定理 单调函数的间断点的集是至多可数的
+ 4.32 定义 +∞的邻域，-∞的邻域
+ 4.33 定义 广义实数系上的极限，略

习题：以后补

## 第五章 微分法

+ 5.1 定义 `导数`，`导函数`，`左导数`，`右导数`
+ 5.2 定理 f:[a,b]→ℝ, f可微→f连续
+ 5.3 定理 可微函数的加，乘，除
+ 5.5 定理 可微函数的`链式法则`
+ 5.7 定义 f:X→ℝ，`局部极大值`，`局部极小值`
+ 5.8 定理 f:[a,b]→ℝ，如果f在x取得局部极值并且f'(x)存在，那么f'(x)=0
+ 5.9 定理(柯西中值定理) f,g:[a,b]→R，f,g在[a,b]上连续，在(a,b)上可微(以下简称`闭连开微`(by me))，那么∃x $

  $$ [f(b)-f(a)]g'(x) = [g(b)-g(a)]f'(x) $$

  证：需要用到4.16和5.8
+ 5.10 定理(拉格朗日中值定理) f:[a,b]→ℝ，闭连开微，那么∃x∈(a,b) $ f(b)-f(a) = (b-a)f'(x)
+ 5.11 定理 f:(a,b)→ℝ，f可微，
  * (a) f'(x)恒大于0⇒f单调递增
  * (a) f'(x)恒小于0⇒f单调递减
  * (a) f'(x)恒等于0⇒f是常数
+ 5.12 定理 f:[a,b]→ℝ，可微，f'(a)<λ<f'(b)，那么∃x∈(a,b) $ f'(x)=λ
  证：令g(t)=f(t)-λt，于是g'(a)<0，从而有t∈(a,b)使g(t)<g(a)，这里用导数的定义即可得到t，g(b)那边同理，由于g连续，由4.16和5.8在最小值处
+ 5.13 定理(L'Hospital 法则) 设f,g:(a,b)→ℝ, -∞≤a<b≤+∞; ∀x∈(a,b) $ g'(x)≠0; 那么
  * (a) x→a时 { f'(x)/g'(x)→A, f(x)→0, g(x)→0 } ⇒ f(x)/g(x)→A
  * (b) x→a时 { f'(x)/g'(x)→A, g(x)→±∞ } ⇒ f(x)/g(x)→A
  * (c) x→b时 { f'(x)/g'(x)→B, f(x)→0, g(x)→0 } ⇒ f(x)/g(x)→B
  * (d) x→b时 { f'(x)/g'(x)→B, g(x)→±∞ } ⇒ f(x)/g(x)→B


  证：首先，在a附近或b附近，g(x)单调
  * (a)，直接由拉格朗日中值定理可得
  * (b)，直接由拉格朗日中值定理也可得
  * (c)，直接由拉格朗日中值定理也可得
  * (d)，直接由拉格朗日中值定理也可得
  * 为什么觉得书上证的这么麻烦，难道是我疏忽了什么？
+ 5.14 定义 `n阶导数`
+ 5.15 定理(Taylor 定理) f:[a,b]→ℝ，$$f^{(n-1)}$$在[a,b]上闭连开微，α,β∈[a,b], α<β，令

  $$P(t) = \sum_{k=0}^{n-1}{\frac{f^{(n)}(α)}{k!} (t-α)^k}$$

  那么，∃x∈(α,β) $

  $$ f(β) = P(β) + \frac{f^{(n)}(x)}{n!}(β-α)^n $$

  证：见书。  
  其实还是挺intuitive的，因为如果直接对f-P用中值定理，会发现区间不断变小，无法保证(β-α)ⁿ的出现。
  所以只能用f, P, (β-α)ⁿ构成一个新函数，要求在α和β点的值为0
+ 5.19 定理 设$$\mathbf{f}:[a,b]→ℝ^k$$, f在(a,b)内可微，那么$$ ∃x∈(a,b) \,$\, \|\mathbf{f}(b)-\mathbf{f}(a)\|≤(b-a)\|\mathbf{f}'(x)\| $$

  证：令$$\mathbf{z}=\mathbf{f}(b)-\mathbf{f}(a),\,\,ϕ(t) = \mathbf{z ⋅ f}(t)\,\,(a≤t≤b)$$，对$$ϕ(t)$$用中值定理

## 第六章 RIEMANN-STIELTJES 积分

+ 6.1 定义 对f是[a,b]上的有界实函数：`Riemann上积分`, `Riemann下积分`, `Riemann可积`，Riemann可积函数集合记为$$\mathscr{R}$$
+ 6.2 定义 对α是[a,b]上的单调递增函数：`Riemann-Stieltjes积分`(简称Stieltjes积分) 记法为$$\int_{a}^{b}{f\text{d}α}$$，$$f ∈\mathscr{R}(α)$$

  评注(by me)：太喜欢这个记法了，之前教科书里的微分记号一点意义都没有。
  还假装在链式法则里推导，写了一堆看似很好用但是poorly-defined的东西。
+ 6.3 定义 分法的`加细`，`共同加细`
+ 6.4 定理 如果P*是P的加细，那么$$L(P,f,α) ≤ L(P*,f,α),\,\,U(P,f,α) ≥ U(P*,f,α)$$
+ 6.5 定理 $$ \underline{\int_{a}^{b}}f\text{d}α ≤ \overline{\int_{a}^{b}}f\text{d}α $$
+ 6.6 定理 可积等价于∀ε $ ∃P $ U(P,f,α)-L(P,f,α) < ε
+ 6.7 定理 略
+ 6.8 定理 f在[a,b]是连续，则$$ f ∈ \mathscr{R}(α) $$
  证：由闭区间连续则一致连续易证
+ 6.9 定理 f在[a,b]上单调，α在[a,b]上连续，则$$ f ∈ \mathscr{R}(α) $$
+ 6.10 定理 f在[a,b]上只有有限个间断点，α在断点上连续，则$$ f ∈ \mathscr{R}(α) $$
  证：用α的连续性，在间断点取很小的区间，把间断点的变化吃掉，剩下的部分f是连续的，用定理6.8
+ 6.11 定理 设在[a,b]上$$f ∈ \mathscr{R}(α),\,m≤f≤M$$, ϕ在[m,M]上连续，在[a,b]上h(x) = ϕ(f(x))，那么在[a,b]上$$h∈\mathscr{R}(α)$$
  证：思路，由ϕ连续得一致连续，所以∀ε $ ∃ δ $ ϕ在δ区间内的variation小于ε  
  对于某个分法，如果分法里的max f - min f < δ, 这里区间最后加起来显然 < ε(α(b)-α(a))  
  对于max f - min f > δ的区间，设ϕ的variation为K, K是max ϕ - min ϕ, 只能让区间长度很小。这通过让U(P,f,α) - L(P,f,α)变小就可以。  
  设U(P,f,α) - L(P,f,α)为B，则max f - min f > δ的区间长度总和小于B/δ，于是令B = δ*ε/K即可(原证明是令B=δ²，再让δ<ε)，这样最后总长度<ε  
  这样最后ϕ在这个分法上U和L差了ε(α(b)-α(a)+1)，由ε的任意性，ϕ可积

+ 6.12 定理 积分满足加法，数乘，保号，区间可拆，对α满足加法，数乘  
  specifically $$ f ∈ \mathscr{R}(α_1) ∧ f ∈ \mathscr{R}(α_2) ⇒ f∈\mathscr{R}(α_1+α_2)$$，并且右式的积分值等于左边相加
+ 6.13 定理 在[a,b]上, $$f,g∈\mathscr{R}(α)$$，那么
  * (a) $$fg ∈ \mathscr{R}(α)$$
  * (b) $$\vert f\vert∈\mathscr{R}(α)$$且$$\vert \int{f\text{d}α} \vert ≤ \int{\vert f \vert \text{d} α}$$

  证：
  * (a) 由$$(f+g)^2 - (f-g)^2$$立得
  * (b) 由f和绝对值函数复合即可。
+ 6.14 定义 单位阶跃函数$$I$$的定义如下，定义(by me)函数$$I_x(t) = I(x-t)$$

  $$I(x) = \begin{cases}0,\,\,x≤0 \\ 1,\,\,x>0\end{cases}$$
+ 6.15 定理 a<s<b, f在s点连续，则

  $$\int_{a}^{b}{f\text{d}I_s} = f(s)$$
+ 6.16 定理 设cₙ≥0, ∑cₙ收敛，{sₙ}是(a,b)内一串不同的点，令

  $$α = \sum_{n=1}^{∞}{c_nI_{s_n}}$$

  则

  $$\int_a^b{f\text{d}α} = \sum_{n=1}^{∞}{c_nf(s_n)}$$

+ 6.17 定理 设α单增，在[a,b]上$$α'∈\mathscr{R}$$, f在[a,b]上有界，那么 $$ f ∈ \mathscr{R}(α) ⇔ fα' ∈ \mathscr{R}$$，此时

  $$\int_a^b{f\text{d}α} = \int_a^b{fα'\text{d}x}$$

  评注(by me)：国内高数的换元啊，一般是用微积分基本定理证的，要求f和α'连续，dx记号乱七八糟，太坑啦。

  评注(by me)：从(30)到(31)这个trick我一时竟没反应过来。

  证明本质上是说区间非常小的时候Δα和α'Δx很像，可以用中值定理保证。

+ 6.19 定理(换元) 设$$\varphi: [A-B]→[a,b]$$严格单增，在[a,b]上$$f ∈ \mathscr{R}(α)$$，在[A,B]上定义

  $$ \begin{aligned} β(y) &= α(\varphi(y)) \\ g(y) &= f(\varphi(y)) \end{aligned} $$

  那么$$g ∈ \mathscr{R}(β) $$ 而且 $$\int_A^B{g\text{d}β} = \int_a^b{f\text{d}α}$$

  评注(by me)：这个还挺intuitive的，就是本来是f,α，现在[a,b]下边通过$$\varphi$$又加了一层，
  α的任意分法，由于$$\varphi$$严格单增，β也有一个对应的，所以结论还是挺显然的。

  特殊情形：令$$α(x)=x$$, 则$$β=\varphi$$，将之用于

  $$\int_a^b{f\text{d}α} = \int_a^b{fα'\text{d}x}$$

  有

  $$\int_a^b{f\text{d}x} = \int_A^B{g\text{d}\varphi} = \int_A^B{g\varphi'\text{d}x} = \int_A^B{(f\circ \varphi) \varphi ' \text{d}x}$$

+ 6.20 定理 设在[a,b]上$$f ∈ \mathscr{R} $$，对于a≤x≤b，令$$F(x) = \int_a^x{f(t)\text{d}t}$$，则F在[a,b]上连续  
  如果f在x₀∈[a,b]连续，那么F在x₀可微并且$$F'(x_0) = f(x_0)$$

  证：由f可积等到f有界，再由F的定义立得F连续，闭区间有界其实是一致连续。  
  如果f在x₀连续，可以想像成x₀附近f是平的，那F'(x₀)当然等于f(x₀)

+ 6.21 定理(微积分基本定理) 设在[a,b]上$$f ∈ \mathscr{R}$$，且$$F' = f$$，则

  $$\int_a^b{f(x)\text{d}x} = F(b)-F(a)$$

  证：选一个上下界很小的分法：$$U(P,f)-L(P,f)<ε$$，由中值定理，$$∃ t_i ∈ [x_{i-1}, x_i] \,$\, F(x_i)-F(x_{i-1}) = f(t_i)Δx_i $$，全加起来即可。

+ 6.22 定理(分部积分)，设F和G是[a,b]上的可微函数，$$ F'=f ∈ \mathscr{R}, G'=g∈\mathscr{R}$$，则

  $$\int_a^b{F(x)g(x)\text{d}x} = F(b)G(b) - F(a)G(a) - \int_a^b{f(x)G(x)\text{d}x}$$

  由$$H(x)=F(x)G(x)$$可得，注意到闭区间可微意味着连续(5.2)，闭区间连续意味着可积(6.8)，微分和积分都满足加法和乘法

+ 6.23 定义，向量值函数和积分，$$f:[a,b]→ℝ^k$$，如果每个分量都可积。

  向量值函数的积分满足加法，数乘，区间可拆，对α满足加法，数乘  
  也满足换元，微积分基本定理。这些都是逐项满足的所以整体满足的。

+ 6.25 定理 6.13(b)变形

  $$\vert \mathbf{f} \vert∈\mathscr{R}(α)$$且$$\vert \int_a^b{ \mathbf{f}\text{d}α} \vert ≤ \int_a^b{\vert \mathbf{f} \vert \text{d} α}$$

  其中

  $$ \vert \mathbf{f} \vert = (f_1^2 + ⋯ + f_k^2)^{1/2}$$

  证：由$$ \vert \mathbf{f} \vert $$定义，它可积。从意义上看，$$ \vert \mathbf{f} \vert $$是f在每一点的切线的导数。由定(zhí)理(jué)6.27得知，$$\int_a^b{\vert \mathbf{f} \vert \text{d} x}$$是曲线长度，证明肯定是构造施瓦茨不等式，抄书如下：

  设 $$\mathbf{y} = \int_a^b{\vert \mathbf{f} \vert \text{d} α}$$，于是$$\vert \mathbf{y} \vert^2 = \sum{y_i^2} = \sum{y_i (\int{f_i\text{d}α})} = \int{(\sum{y_jf_j})\text{d}α}$$

  由Schwarz不等式，$$\sum{y_jf_j(t)} ≤ \vert \mathbf{y} \vert \vert \mathbf{f}(t) \vert,\,\,t ⊂ [a,b]$$

  由积分保号性，就有

  $$ \vert \mathbf{y} \vert ^ 2 ≤ \vert \mathbf{y} \vert \int{\vert \mathbf{f} \vert \text{d} α}$$

+ 6.26 定义 将$$γ: [a,b]→ℝ^k$$叫做$$ℝ^k$$里的`曲线`，也可以说$$γ$$是$$[a,b]$$上的曲线
  * 如果γ是一对一的，就叫`弧`
  * 如果γ(a)=γ(b)，就叫`闭曲线`

  对曲线的某个分法P, 令

  $$ Λ(P, γ) = \sum_{i=1}^{n}{\vert γ(x_i) - γ(x_{i-1}) \vert}$$

  即：用折线逼近，定义 $$ Λ(γ) = \sup_P{Λ(P,γ)}$$，如果$$ Λ(γ) < ∞$$就说$$γ$$是`可求长的`

+ 6.27 定理 若γ'在[a,b]上连续，则γ是可求长的，且

  $$Λ(γ) = \int_a^b{\vert γ'(t) \vert\text{d}t}$$

  证：$$Λ(γ) ≤ \int_a^b{\vert γ'(t) \vert\text{d}t}$$可以由6.25推出来。

  $$ Λ(γ) ≥ \int_a^b{\vert γ'(t) \vert\text{d}t} - ε $$
  可以由6.25推出来。：当分法足够小时，可以用中值定理逼近，
  由闭区间连续就一致连续，推出用中值定理逼近是可以任意充分的。

## 第七章 函数序列与函数项级数

以下定义域都用$$E$$表示

+ 7.1 定义 函数序列的`收敛`(`逐点收敛`)，函数列的极限或`极限函数`
+ 7.7 定义 函数列的`一致收敛`
+ 7.8 定理 函数列的一致收敛等价于函数序列是柯西列[在函数之间的距离定义为$$\sup_{x∈E}{f_m(x)-f_n(x)}$$，其中E是定义域]
+ 7.9 定理 fₙ→f ⇒ d(fₙ, f)→0
+ 7.10 定理 若$$\vert f_n(x) ≤ M_n$$且$$\sum{M_n}$$收敛，则$$\sum{f_n}$$一致收敛

#### 一致收敛性与连续性

+ 7.11 定理 若$$f_n → f$$，$$x$$是$$E$$的极限点，$$\lim_{t→x}{f_n(t)} = A_n$$，则$$\{A_n\}$$收敛，且

  $$ \lim_{t→x}{f(t)} = \lim_{n→∞}{A_n} $$

  亦即

  $$ \lim_{t→x}{(\lim_{n→∞}f_n)(t)} = \lim_{n→∞}{(\lim_{t→x}{f_n(t)})} $$

  证明见书

+ 7.12 定理 连续函数一致收敛到连续函数

  由7.11立得

+ 7.13 设K是紧集，fₙ连续，单调，逐点收敛到连续函数f，则一致收敛。

  观察(by me): 若$$E=[0,1), f_n = x^n$$, 则$$f_n→0$$，但$$d(f_m, f_n)↛0$$。但若是把端点封死，就不会有这种情况发生。
  
  证：令$$g_n = f_n - f$$，则$$g_n$$连续，单调，逐点收敛于0，给定ε>0，令$$K_n$$是$$g_n ≥ ε$$的集合，则$$K_n$$是闭区间套。
  但是由于$$g_n → 0$$，所以没有一点是属于$$\bigcap{K_n}$$的，所以由闭区间套定理的推论的逆否命题，n很大是$$K_n$$全部为空集。这就证明了$$g_n$$是一致收敛于$$g$$的。

+ 7.14 定义 若X是度量空间，则$$\mathscr{C}(X)$$表示以X为定义域的复值连续有界函数的集，若$$f ∈ \mathscr{C}(X)$$，则它的`上确范数`为

  $$ \| f \| = \sup_{x∈X}{\vert f(x) \vert}$$

  定义$$\mathscr{C}(X)$$中f与g的距离是  $$ \| f - g \| $$，于是$$\mathscr{C}(X)$$变成了度量空间。

+ 7.15 定理 $$\mathscr{C}(X)$$是完备的

  这个定理基本上是把函数列的柯西序列用范数的方式又重新说了一遍。

+ 7.16 定理 一致收敛可以与积分换序

  $$\int_a^b{f\text{d}α} = \lim_{n→∞}{\int_a^b{f_n\text{d}α}}$$

  证：直接由$$\|f_n - f\| → 0$$立得

+ 7.17 定理 若$$\{f_n\}$$可微，在[a,b]上某点$$x_0$$处$$\{f_n\}$$收敛，$$\{f'\}$$在[a,b]上一致收敛，则$$\{f_n\}$$一致收敛于$$f$$且

  $$f'(x) = \lim_{n→∞}{f'_n(x)}$$

  观察(by me)，  
  1. 如果没有$$x_0$$这一点的绑定，那么$$\{f_n\}$$可能是平行的函数(相差为常数)
  2. 如果$$\{f'n\}$$不一致收敛，那么逐点收敛可能有第一类间断点，而导函数不会存在第一类间断点。

  证：由导函数的一致收敛性，直接从$$x_0$$这一点出发用中值定理即可。后半段证明略。

+ 7.18 定理 存在处处连续处处不可微的实函数

  证：无穷锯齿放缩叠加

+ 7.19 定义 一个函数序列 `逐点有界` `一致有界`
+ 7.22 定义 一族函数`等度连续`：即同一个δ满足作为所有函数的一致连续的δ
+ 7.23 定理 若$$\{f_n\}$$是在可数集$$E$$上逐点有界的复值函数序列，则有子序列对于每个$$x∈E$$收敛

  证：先选出一列让它们在$$E$$的第一个元素上收敛，再从这列中选出一子列在$$E$$的第二个元素上收敛，类推。
+ 7.24 定理 若$$K$$是紧度量空间，$$f_n ∈ \mathscr{C}(K)$$且一致收敛，则$$\{f_n\}$$在K上等度连续。

  证：紧集上连续一定一致连续。n比较小时穷举，n比较大时由一致收敛，可以用同一个δ
+ 7.25 若$$K$$是紧集，$$f_n ∈ \mathscr{C}(K)$$且$$\{f_n\}$$在$$K$$上逐点有界又等度连续。则

  1. (a) $$\{f_n\}$$在$$K$$上一致有界
  2. (b) $$\{f_n\}$$含有一致收敛的子序列

  证：  
  1. 由等度连续，可以先一δ，对K中每个点都做一个δ邻域，由紧性，有有限个邻域就可以把K盖住，而这有限个点有界，再加上等度连续，$$\{f_n\}$$一致有界
  2. 选一个可数稠密子集，再选一个子序列在可数稠密子集上收敛。再按1.的方法和7.24的方法证一致收敛就可以了。
+ 7.26 定理(Weierstrass) 若$$f:[a,b]→ℂ$$，则存在多项式$$\{P_n\}$$一致收敛于$$f$$，如果$$f$$是实函数，则$$P_n$$可以是实多项式

  证：设[a,b]=[0,1]，再设g(0) = g(1) = 0，然后让g与一个趋向于δ函数的多项式做卷积

  [这篇文章](http://web.math.sinica.edu.tw/math_media/d223/22302.pdf)([缓存](/pdfs/22302.pdf))里第三部分写的比卢丁明白些  

  <!-- （在此我不得不吐槽卢丁的书越到后来越不好好写了，省略的东西越来越多([例子](http://math.stackexchange.com/questions/1701175/partitions-of-unity-from-pma-rudin))）。 -->
  <!-- 被baba鄙视了again -->
  <!-- 我觉得baba不会看源码的。 -->

+ 7.28 等(Stone-Weierstrass定理)

  这个不想写了，虽然证明能看懂，但是卢丁似乎不愿意写多，各种没有intuition. 等将来好好学学再补吧。

  <!-- 等将来 baba 给我讲讲intuition吧，毕竟我姿势水平不够 -->

## 第八章 一些特殊函数

这章的主要idea是用无穷级数重新定义(事实上是首次定义)指数函数，对数函数，三角函数，甚至π，并验证了它们确实具有我们以前熟知的一些性质。

#### 复数域的代数完备性

+ 8.8 定理(代数基本定理)

证明思路应该是这样的(我改编过)，先令$$μ = \inf \vert P(z) \vert$$，再在$$μ$$周围去很小的一个变化量$$δ$$，使$$δ$$的高次方忽略不计，最底次方的方向使$$\vert P(z) \vert$$再变小，于是矛盾。

## 第九章

+ 9.1 定义 非空集$$X ∈ ℝ^n $$且对加法和数乘封闭则被称为`向量空间`，`线性组合`，`生成`，`线性相关`，向量空间的`维度`，`基`，`标准基`
+ 9.2 定理 若向量空间$$X$$可以由$$r$$个向量生成，则$$\dim{X} ≤ r$$
+ 9.3 定理 设$$X$$为向量空间，$$\dim X = n$$
  1. (a) $$X$$中$$n$$个向量的集$$E$$能生成$$X$$ ⇔ $$E$$是无关的
  2. (b) $$X$$必有基，每个基由n个向量组成
  3. (c) 若$$1≤r≤n$$，而$$\{\mathbf{y}_1, ⋯, \mathbf{y}_n\}$$是$$X$$中的一个无关集，则$$X$$中必有$$\{\mathbf{y}_1, ⋯, \mathbf{y}_n\}$$包含的基
+ 9.4 定义 向量空间$$X$$到向量空间$$Y$$的一个映射`线性变换`，$$X$$到$$X$$的线性变换叫`线性算子`，
  一个线性算子是一一映射等价于它把$$X$$映满X，这种情况下把它叫做`可逆的`
+ 9.5 定理 一个线性算子是一一映射等价于它把$$X$$映满X
+ 9.6 定义 $$L(X,Y)$$是$$X→Y$$的所有线性变换的集，$$L(X,X)$$简写为$$L(X)$$，若$$A_1, A_2 ∈ L(X,Y)$$，$$c_1, c_2$$是标量，
  定义$$c_1A_1 + c_2A_2$$为

  $$(c_1A_1 + c_2A_2)\mathbf{x} = c_1A_1\mathbf{x} + c_2A_2\mathbf{x},\,\, x ∈ X$$

  定义$$BA$$为

  $$(BA)x = B(Ax),\,\,x∈X$$

  定义$$\|A\|$$为

  $$\sup_{\vert \mathbf{x} \vert ≤ 1}{\vert A\mathbf{x} \vert}$$

  注意到

  $$∀x∈R^n,\,\,\vert Ax \vert ≤ \|A\|\vert x\vert $$

  其实这个定义就是2范数，补充材料见[矩陣範數](https://ccjou.wordpress.com/2010/05/10/%E7%9F%A9%E9%99%A3%E6%A8%A1/)

+ 9.7 定理
  1. (a) 若$$A ∈ L(R^n, R^m)$$，则$$\|A\|<∞$$且$$A$$为一致连续映射
  2. (b) 若$$A,B ∈ L(R^n, R^m)$$，$$c$$为标量，则

    $$ \|A+B\|≤\|A\|+\|B\|,\,\, \|cA\|=\vert c\vert \|A\|$$

    以$$\|A-B\|$$为度量，则$$L(R^n, R^m)$$是一个度量空间
  3. (c) 若$$A ∈ L(R^n, R^m), \,\,B ∈ L(R^m, R^k)$$，则

    $$ \|BA\|≤\|B\|\|A\|$$
+ 9.8 设$$Ω$$为$$R^n$$上可逆线性算子的集
  1. (a) 若$$A ∈ Ω, \,\,B∈L(R^n),\,\,\|B-A\|⋅\|A^{-1}\| < 1 $$，则$$B ∈ Ω$$
  2. (b) $$Ω$$是$$L(R^n)$$的开子集，$$f(A) = A^{-1},\,\,A ∈ Ω$$连续

  吐槽(by me)，卢丁你多写一句intuition会死啊。

  观察(by me)：这个intuition是这样的，如果B和A充分接近，换句话说就是$$\| B - A \|$$很小，
  小到什么程度呢，$$B-A$$的最大奇异值比$$A$$的最小奇异值还小，那么显然$$(B-A)x$$没有办法把$$Ax$$变成0
  就是说$$B$$没办法走出$$A$$可逆的影子。第二个证明的本质上是说若$$B$$充分接近$$A$$，则$$B^{-1}$$充分接近$$A^{-1}$$

  证明：见书
+ 9.9 定义 终于把线性映射和通常意义的矩阵等价起来了
+ 9.11 定义 $$f:E→R^m,\,\,E ⊂R^n\text{ 是开集}$$，定义`可微`
+ 9.12 定理 可微矩阵唯一
+ 9.15 定理 可微函数可复合且结果等于矩阵乘
+ 9.16 定义 `偏导数`，记号 $$\frac{∂f_i}∂{x_j}$$也记为$$D_jf_i$$

  $$ (D_jf_i)(\mathbf{x}) = \lim_{t→0}{\frac{f_i(\mathbf{x} + t\mathbf{e}_j) - f_i(\mathbf{x})}{t}} $$

  其中 $$f_i(\mathbf{x}) = \mathbf{f}(\mathbf{x}) ⋅ \mathbf{u}_i$$，u是值空间的标准基
+ 9.17 定理 若导数存在则各个偏导数存在且

  $$ D_jf_i(x) = f'(x) \text{的第i行第j列} $$
+ 9.19 定理 设$$f$$把凸开集$$E⊂R^n$$映入$$R^m$$内，$$f$$在$$E$$内可微且$$\| f'(x) \| ≤ M$$，则

  $$ \vert \mathbf{f}(\mathbf{b}) - \mathbf{f}(\mathbf{a}) \vert ≤ M \vert \mathbf{b} - \mathbf{a} \vert $$

  证：令$$\mathbf{g}(t) = \mathbf{f}((1-t)\mathbf{a}+t\mathbf{b})就可以了
+ 9.20 定义，如果f'是连续的，则称f是连续可微的，也称f是$$\mathscr{C}'$$映射，或者$$\mathbf{f} ∈ \mathscr{C}'(E)$$(E是定义域)
+ 9.21 定理 $$\mathbf{f} ∈ \mathscr{C}'(E)$$ ⇔ f的所有偏导数存在并连续

  观察：$$L(R^n, R^m)$$与$$ℝ^{n×m}$$完全是一一对应，我们考虑$$ℝ^{n×m}$$就好了。

  此处傻逼了，矩阵距离是$$\|A-B\|$$让我当成\|A\|-\|B\|了，想了半天。

  这个问题的本质是矩阵的范数很小等价于矩阵的每个元素很小。  
  正向，若范数很小，随意代入一个标准基，$$Au_i$$的每个分向都很小(由范数很小的定义)，所以每个元素都很小  
  反向，显然啊。

+ 9.22 定义 凝缩函数, φ:X→X, c<1, ∀x,y∈X d(φ(x), φ(y)) ≤ cd(x,y)
+ 9.23 定理(不动点定理) 若X是完备度量空间，φ:X→X是凝缩函数，则存在唯一不动点

  证明，比较trivial，略

#### 反函数定理

+ 9.24 定理(反函数定理) 设$$\mathbf{f}$$是把开集 $$E⊂R^n$$映入 $$R^n$$内的$$\mathscr{c}'$$映射，对某个$$\mathbf{a}∈E$$
  $$\mathbf{f}'(\mathbf{a})$$可逆，且$$\mathbf{b} = \mathbf{f}(\mathbf{a})$$，则
  1. (a) 在$$R^n$$内存在开集U,V，使得$$\mathbf{a}∈U,\,\,\mathbf{b}∈V,\,\,\mathbf{f}\text{在}U$$上是一一的，并且$$\mathbf{f}(U)=V$$
  2. (b) 在V上设$$\mathbf{g}(\mathbf{f}(\mathbf{x})) = \mathbf{x}$$，则$$\mathbf{g}∈\mathscr{C}'(V)$$

  废话(by me):

  想了好久，终于把(a)的intuition想懂了。证明的记号非常混乱，被我重新排版过，思路在这儿好好写写，然后再慢慢更新。

  这个证明的关键在于函数$$φ_\mathbf{y}(\mathbf{x}) := \mathbf{x} + A^{-1}(\mathbf{y}-\mathbf{f}(\mathbf{x}))$$，
  这里$$\mathbf{y}$$是某确定的值，是常数，$$\mathbf{x}$$是参数，这就很不人道了。卢丁的书里连下标都省了。  
  我觉得写法应该是这样，(注：以下的x和y均在a,b附近)：

  $$φ_{\mathbf{y}_c}(\mathbf{x}) := \mathbf{x} + A^{-1}(\mathbf{y}_c-\mathbf{f}(\mathbf{x})),\,\,\text{其中}\mathbf{y}_c\text{表示某个}\mathbf{y},\,\,c\text{表示const}$$

  现在设$$\mathbf{y}=\mathbf{f}(\mathbf{x})$$，代入上式，得到

  $$ \begin{align} φ_{\mathbf{y}_c}(\mathbf{x}) &= \mathbf{x} + A^{-1}(\mathbf{y}_c-\mathbf{y}) \\
                                              &≈ \mathbf{x} + \mathbf{x}_c-\mathbf{x} ≈ \mathbf{x}_c \end{align}$$

  它还有个很好的性质，就是$$φ_{\mathbf{y}_c}'(\mathbf{x}) = I - A^{-1}\mathbf{f}'(\mathbf{x}) ≈ 0 $$

  证明第一步是让$$\|φ_{\mathbf{y}_c}'(x)\| ≤ \frac{1}{2}$$，
  于是有$$\vert φ_{\mathbf{y}_c}(\mathbf{x}_1) - φ_{\mathbf{y}_c}(\mathbf{x}_2) \vert  ≤ \frac{1}{2} \vert \mathbf{x}_1 - \mathbf{x}_2 \vert $$，
  若$$\mathbf{y}$$有两个原象，则有$$\vert φ_{\mathbf{y}_c}(\mathbf{x}_1) - φ_{\mathbf{y}_c}(\mathbf{x}_2) \vert = \vert \mathbf{x}_1 - \mathbf{x}_2 \vert ≤ \frac{1}{2} \vert \mathbf{x}_1 - \mathbf{x}_2 \vert $$，产生矛盾。


  证：

  $$ A := \mathbf{f}'(a) \\
     λ := \frac{\|A\|}{2} \\
     U := \text{以}a\text{为中心的开球且}\|f'(\mathbf{x})-A\|<λ,\,\,(\mathbf{x}∈U) \\
     φ_{\mathbf{y}_c}(\mathbf{x}) := \mathbf{x} + A^{-1}(\mathbf{y}_c-\mathbf{f}(\mathbf{x})),\,\,(\mathbf{x}∈E,\,\mathbf{y}_c∈R^n) \\
     \mathbf{f}(\mathbf{x}_c)=\mathbf{y}_c ⇔ \mathbf{x}_c\text{是}φ_{\mathbf{y}_c}\text{的不动点} \\
     φ_{\mathbf{y}_c}'(\mathbf{x}) = I - A^{-1}\mathbf{f}'(\mathbf{x}) = A^{-1}(A-\mathbf{f}'(\mathbf{x})) \\
     \|φ_{\mathbf{y}_c}'(x)\| ≤ \frac{1}{2},\,\,(x∈U) \\ 
     \text{于是由定理9.19 } \vert φ_{\mathbf{y}_c}(\mathbf{x}_1) - φ_{\mathbf{y}_c}(\mathbf{x}_2) \vert  ≤ \frac{1}{2} \vert \mathbf{x}_1 - \mathbf{x}_2 \vert \\
	 \text{于是，这个}\mathbf{y}_c\text{，至多有一个原象，由}\mathbf{y}_c\text{的任意性，}\mathbf{f}\text{是一一的。}
  $$

  令$$V=\mathbf{f}(U)$$，下面证$$V$$是开集，思路：任取$$\mathbf{y}_0∈V$$，
  于是有一个$$\mathbf{x}_0 ∈ U$$满足$$\mathbf{y}_0=\mathbf{f}(\mathbf{x}_0)$$
  只要证明对于$$\mathbf{y}$$，如果$$\mathbf{y}$$与$$\mathbf{y}_0$$很接近，就有$$\mathbf{y} ∈ V$$，就证明了$$V$$是开集。

  要想证$$\mathbf{y} ∈ V$$，只能通过压缩不动点定理把它找到。设$$B = U(\mathbf{x}_0, r),\,\overline{B} ⊂ U$$

  我们想像中，当$$\mathbf{y}_c→\mathbf{y}_0$$时，就有$$\mathbf{x}_c ∈ \overline{B}$$使$$\mathbf{y}_c = f(\mathbf{x}_c)$$
 
  我们已经有 $$ \vert φ_{\mathbf{y}_c}(\mathbf{x}_0) - φ_{\mathbf{y}_c}(\mathbf{x}) \vert  ≤ \frac{1}{2} \vert \mathbf{x}_0 - \mathbf{x} \vert $$

  也有 $$ \vert φ_{\mathbf{y}_c}(\mathbf{x}) - \mathbf{x}_0 \vert ≤ \vert φ_{\mathbf{y}_c}(\mathbf{x}) - φ_{\mathbf{y}_c}(\mathbf{x}_0) \vert + \vert φ_{\mathbf{y}_c}(\mathbf{x}_0) - \mathbf{x}_0 \vert $$

  只需让$$\vert φ_{\mathbf{y}_c}(\mathbf{x}_0) - \mathbf{x}_0 \vert$$很小，就可以让$$φ_{\mathbf{y}_c}$$在$$\overline{B}$$上是凝缩函数，从而一定有不动点。


  证：

  $$
    \mathbf{y}_0 :∈ V \\
    \mathbf{x}_0 :∈ U \text{ such that } \mathbf{y}_0=\mathbf{f}(\mathbf{x}_0) \\
    B := U(\mathbf{x}_0, r) \text{ such that } \overline{B} ⊂ U \\
    \text{下面证对于某个}\mathbf{y}_c,\,\, \vert \mathbf{y}_c-\mathbf{y}_0 \vert < λr ⇒ \mathbf{y}_c ∈ V \\
	\vert φ_{\mathbf{y}_c}(\mathbf{x}_0) - \mathbf{x}_0 \vert = \vert \mathbf{x}_0 + A^{-1}(\mathbf{y}_c - \mathbf{f}(\mathbf{x}_0)) - \mathbf{x}_0 \vert = \vert A^{-1}(\mathbf{y}_c-\mathbf{y}_0) \vert < \| A^{-1} \|λr = \frac{r}{2} \\
  $$
  
  $$ \begin{align} x ∈ \overline{B} ⇒ \vert φ_{\mathbf{y}_c}(\mathbf{x}) - \mathbf{x}_0 \vert &≤ \vert φ_{\mathbf{y}_c}(\mathbf{x}) - φ_{\mathbf{y}_c}(\mathbf{x}_0) \vert + \vert φ_{\mathbf{y}_c}(\mathbf{x}_0) - \mathbf{x}_0 \vert \\ &< \frac{1}{2} \vert \mathbf{x}-\mathbf{x}_0 \vert + \frac{r}{2} ≤ r \end{align} $$

  于是$$x ∈ \overline{B} ⇒ φ_{\mathbf{y}_c}(x) ∈ \overline{B}$$，
  注意到$$\vert φ_{\mathbf{y}_c}(\mathbf{x}_1) - φ_{\mathbf{y}_c}(\mathbf{x}_2) \vert  ≤ \frac{1}{2} \vert \mathbf{x}_1 - \mathbf{x}_2 \vert$$在$$U$$上成立，$$\overline{B} ⊂ U$$，于是在$$\overline{B}$$上也成立。
  于是$$\overline{B}$$是的凝缩函数，由不动点定理，有$$\mathbf{x}_c ∈ \overline{B}$$使得$$\mathbf{f}(\mathbf{x}_c)=\mathbf{y}_c$$，于是$$\mathbf{y}_c∈V$$

  反函数定理 (b) 

  下面证$$\mathbf{g}∈\mathscr{C}'(V)$$

  取$$\mathbf{y}_c ∈ V,\,\,\mathbf{y}_c+\mathbf{k}∈V$$，于是有$$\mathbf{x}_c∈U,\,\,\mathbf{x}_c+\mathbf{h}∈U$$，使
  $$\mathbf{y}_c=\mathbf{f}(\mathbf{x}_c), \mathbf{y}_c+\mathbf{k}=\mathbf{f}(\mathbf{x}_c+\mathbf{h})$$成立。
  设$$\mathbf{f}'(\mathbf{x}_c)$$的逆为$$T$$，则

  $$\mathbf{g}(\mathbf{y}_c+\mathbf{k})-\mathbf{g}(\mathbf{y}_c)-T\mathbf{k} = \mathbf{h}-T\mathbf{k} = T\mathbf{f}'(\mathbf{x}_c)\mathbf{h} - T(\mathbf{f}(\mathbf{x}_c+\mathbf{h})-\mathbf{f}(\mathbf{x}_c)) $$

  于是 $$ \frac{ \vert \mathbf{g}(\mathbf{y}_c+\mathbf{k})-\mathbf{g}(\mathbf{y}_c)-T\mathbf{k} \vert }{\vert \mathbf{k} \vert} ≤ \frac{1}{\vert \mathbf{k} \vert} \| T \| \vert \mathbf{f}(\mathbf{x}+\mathbf{h})-\mathbf{f}(\mathbf{x})-\mathbf{f}'(\mathbf{x})\mathbf{h} \vert$$

  接下来只要证$$\mathbf{h}< \text{some }\mathbf{k}$$即可。

  $$ \vert φ(\mathbf{x}+\mathbf{h}) - φ(\mathbf{x}) \vert = \vert \mathbf{h} + A^{-1}(\mathbf{f}(\mathbf{x})-\mathbf{f}(\mathbf{x}+\mathbf{h})) \vert = \vert \mathbf{h} - A^{-1}\mathbf{k} \vert≤ \frac{1}{2} \vert \mathbf{h} \vert$$

  其中最后一个不等号是由φ的性质($$\|φ_{\mathbf{y}_c}'(x)\| ≤ \frac{1}{2},\,\,(x∈U)$$)导出的。

  于是$$\vert A^{-1}\mathbf{k} \vert ≥ \frac{1}{2} \vert \mathbf{h} \vert$$

  于是我们证明了$$\mathbf{g}'(\mathbf{y}_c) = T$$

  于是有$$\mathbf{g}'(\mathbf{y}) = (\mathbf{f}'(\mathbf{g}(\mathbf{y})))^{-1}$$，
  但注意到不论是g，还是f'(注意这是证明中唯一用到条件$$\mathbf{f} ∈ \mathscr{C}'(E)$$的地方，换句话说其他都是局部性质，但要想推出$$\mathbf{g} ∈ \mathscr{C}'(V)$$，就要f'在一个小开区间上有更好的性质。)，还是$$()^{-1}$$都是连续映射，所以$$\mathbf{g} ∈ \mathscr{C}'(V)$$

+ 9.25 定理(反函数定理part (a)直接推论) 如果$$\mathbf{f}$$是开集$$E⊂R^n$$到$$R^n$$内的$$\mathscr{C}'$$映射，$$\mathbf{f}'(\mathbf{x})$$在每个$$\mathbf{x}∈E$$可逆，那么对于每个开集$$W⊂E,\,\,\mathbf{f}(W)$$是$$R^n$$的开子集。

  由反函数定理part (a)，任意$$\mathbf{y}∈\mathbf{f}(W)$$都是内点。

#### 隐函数定理

  看懂了，不想抄了，证明不难，记号稍微有点混乱。理解一下就可以。

## 完结撒花

别的证明先不看了，第十章和第十一章实在适合单独找书看，后续也许补补习题吧。
