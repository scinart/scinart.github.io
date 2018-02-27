---
layout: post
title: "CH analysis 笔记"
date: 2017-04-24
timestamp: "2018-02-24 19:56:20 scinart"
categories: Math
comments: true
visibility: false
cc: "by-nc-nd"

---

## 第0章 度量空间和赋范空间入门

+ 0.1.1 定义(度量空间) 
+ 0.1.2 定义 度量空间中的`收敛序列`和`柯西序列`
+ 0.1.3 引理 收敛序列是柯西序列
+ 0.1.4 定义 `完备度量空间`：每个柯西序列都收敛
+ 0.1.5 定义 度量空间中的
  * 开球(open ball)
  * 有界(bounded)
  * 开(open)
  * 拓扑(topology)
  * 内部(interior) 用的是开子集的并定义
  * 闭(closed)
  * 闭包(closure) 用的是闭超集的交定义
  * 密集(dense) 用闭包等于全集定义
  * 可分(separable)
  * 聚点(accumulation point or cluster point)
  * 边界点(boundary) 记号 ∂
+ 0.1.6 练习(略)
  闭集的定义等价于对极限运算封闭
+ 0.1.7 练习(略)
  1. (a) 证明用闭超集的交定义的闭包等价于用极限点定义的闭包
  2. (b) 证明E在X中密集等价于X等于E的闭包
+ 0.1.8 定义 `紧集`: 用凡开覆盖都有有限子覆盖定义
+ 0.1.9 定义 `列紧集`: 用每个无限子序列都有收敛于此集的子列定义
+ 0.1.10 定理 度量空间中紧集与列紧集等价
  证明见小卢丁2.37和p2.26
+ 0.1.11 引理 度量空间中紧集是闭且有界的
  证明见小卢丁2.34，有界的可能是太显然了，卢丁没有证。
+ 0.1.12 定理(Heine–Borel Theorem)
  证明见小卢丁2.41
+ 0.1.13 定义 度量空间上的`连续函数`: 用开集的原象都是开集定义
  注(by me) 与通常意义上的ε-δ定义等价，见小卢丁4.8

  > In contrast, the direct image of an open set under a continuous function
  > need not be open (for example, if f (x) = sin x then f (0, 2π) = [−1, 1]).
  > Likewise, the direct image of a closed set under a continuous function need not
  > be closed.

  此处求例子。
+ 0.1.14 练习
  连续函数把紧集映射成紧集

  用连续函数定义及紧性定义即可。
+ 0.1.15 练习
  证明连续函数的定义等价于用ε-δ定义的连续函数等价于用点列定义的连续函数

  证：见小卢丁4.1, 4.2, 4.8
+ 0.1.16 定义 `一致连续`
+ 0.1.17 定理 紧集上的连续函数有界且一致连续
  证：见小卢丁4.19
+ 0.1.18 习题
  1. (a) 证明度量空间是豪斯多夫(Hausdorff)空间，即x≠y ⟹ 存在不相交开集U,V使得x∈U且y∈V
  2. (b) 证明度量空间中xₙ→y && xₙ→z ⟹ y=z

  证：由度量(metric)的定义立得
+ 0.1.19 习题
  证明 度量空间中一个柯西序列的某子列收敛于a，证明该柯西序列收敛于a

  略
+ 0.1.20 习题
  1. (a) 证明度量空间中$$d(x_n, x_{n+1})<2^{-n}$$，证明$$x_n$$是柯西序列
  2. (b) 证明度量空间中$$y_n$$是柯西序列则存在子列$$x_n$$满足$$d(x_n, x_{n+1})<2^{-n}$$

  略
+ 0.1.21 习题
  证明度量空间中$$x_n→x$$等价于$$x_n$$的每个子列$$y_n$$都有子列$$z_n$$使得$$z_n→x$$

  证，正向trivial，反向反证。
+ 0.1.22 习题
  证明以实数为索引的收敛等价于对每个实序列都收敛

  证：正向trivial，反向构造。
+ 0.1.23 习题
  证明$$ℝ^d$$与$$ℂ^d$$在欧式距离下完备

  略
+ 0.2.0 定义
  `向量空间(vector space)`：给定域F, F上的向量空间是一个集合，满足[一定条件](https://en.wikipedia.org/wiki/Vector_space#Definition)。
  这个集合比如是$$F^n$$，或是$$F$$上的实连续函数，或是别的。
  这个定义书上省略了。本书中域始终为$$ℝ$$或者$$ℂ$$，域中的元素叫`标量(scalar)`
+ 0.2.1 定义
  1. (a) 向量集合的`有限生成`(finite linear span)为其所有元素的有限线性组合。
  2. (b) 向量集合的`有限线性无关`(finitely linear independent)，如果其中任何有限组合都是线性无关。
+ 0.2.2 定义 `Hamel基`(或`代数基`) 线性无关且生成为整个向量空间。
+ 0.2.3 定义 
  设$$X$$是一个向量空间，函数$$\| ⋅ \| : X → ℝ$$对任意$$x,y∈X$$和标量c，有

  1. (a) 非负性：$$\|x\|≥0$$
  2. (b) 绝对一次齐次性(这么蛋疼的名字见维基百科吧)：$$\|cx\| = \vert c \vert \|x\|$$
  3. (c) 三角不等式：\|x+y\|≤\|x\|+\|y\|.

  这个函数就叫`半范数(seminorm)`，如果还有
  4. (d) 正定性：\|x\|=0 ⇔ x=0

  这个函数就叫`范数(norm)`

  一个向量空间和范数一起，就叫`赋范向量空间(normed vector space)`，或简称`赋范空间(normed space)`, $$\|x\|$$叫向量x的`长度(length)`，$$\|x-y\|$$叫x与y的`距离(distance)`

+ 0.2.4 练习 或$$X$$是个向量空间，那么以下命题成立
  1. (a) Reverse Triangle Inequality: $$ \bigl\lvert \|x\|-\|y\| \bigr\rvert ≤ \|x-y\| $$
    证：不妨设$$\|x\|>\|y\|$$，由$$\|(x-y)+y\| ≤ \|x-y\| + \|y\|$$可得
  2. (b) Convergent implies Cauchy 这个度量空间就已经成立了
  3. (c) 柯西序列有界: 若$$\{x_n\}$$是柯西序列，则$$\sup{\|x_n\|}<∞$$ 这个度量空间就已经成立了
  4. (d) 范数是连续函数
  5. (e) 向量加是连续的
  6. (f) 向量数乘是连续的
+ 0.2.5 定义 `巴拿赫空间(Banach Space)`：设$$X$$是赋范空间，若$$X$$中的每个柯西列都收敛于$$X$$中的元素，则称$$X$$是`完备的(complete)`，$$X$$叫`巴拿赫空间(Banach space)`
+ 0.2.6 定理 赋范空间的每个有限维子空间是闭的
  证：思路：设子空间中$$y_n -> x$$，但$$y_n$$可以用基表示，显然每个分量都收敛。于是取每个分量收敛后的分量组成一个$$y$$，则$$y$$在字空间中，$$y_n → y$$，所以x=y，x在子空间中。
+ 0.2.7 赋范空间(由定义，加法和数乘都已经定义了)中的级数收敛，若它的部分和收敛
+ 0.2.8 赋范空间中的绝对收敛 类似
  注意，0.2.8不意味着0.2.7，比如在$$ℚ^2$$上，一组向量绝对收敛，和为2，但是这组向量收敛于极坐标(2,45°)，不是有理点。
+ 0.2.9 定理，若X是赋范空间，则以下两个命题等价
  1. (a) X完全(即X是巴拿赫空间)
  2. (b) 0.2.8 ⇒ 0.2.7

  证：  
  (a) ⇒ (b)：绝对收敛，说明部分和是个柯西列，由完全的定义，说明0.2.7成立  
  (b) ⇒ (a)：设$$u_n$$是柯西列，由0.1.20，存在性质非常好的一头猛扎进去振幅指数递减的子列$$x_n$$，在子列中取$$y_n = x_{n+1} - x_{n}$$，则$$y_n$$绝对收敛，  
  所以由前提，$$y_n$$收敛，设收敛于$$y$$，由前提，$$y$$在这个空间里，又$$x_{n+1}$$ = $$x_1 + \sum{y_{1..n}}$$，则$$x_n → x_1 + y$$，又$$x_n$$是$$u_n$$的子列，不说了。

+ 0.2.10 习题
  设X是赋范空间，证明X中任意开球是凸的，即if y,z ∈ Bᵣ(x), 0≤t≤1, then ty+(1-t)z ∈ Bᵣ(x)

  证：(完蛋了，脑子不好使了)

  $$\|ty\| < tr,\,\|(1-t)z\|<(1-t)r,\,r > \|ty\| + \|(1-t)z\| > \|ty + (1-t)z\|$$

+ 0.2.11 习题
  设X是巴拿赫空间，Y是它的子空间(取相同的范数)，证明：Y是巴拿赫空间 ⟺ Y在X中是闭集

  这个正反好像都很好证。

+ 0.3.0 定义
  设X是个度量空间(敲黑板，注意了我们回到度量空间了，不是向量空间了)，定义C(X)是X是的连续实值(或复值)函数。定义

  $$ C_b(X) = \{ f ∈ C(X) : f \text{ is bounded}  \} $$

  (注：卢丁书中记为$$\mathscr{C}(X)$$)

+ 0.3.1 定义Uniform Norm，即小卢丁7.14的上确范数(supremum norm)

  $$ \| f \|_u = \sup_{x∈X}{\vert f(x) \vert}$$

跳过部分----------

## 第1章 Lebesgue Measure

+ 1.1.1 定义 Box, Cube, 体积Vol为各边长之积
+ 1.1.2 定义 不重叠Box: 内部不重叠即可
+ 1.1.4 定义 被一组Box覆盖
+ 1.1.5 引理 开集小盒子引理

  $$R^d$$中的开集可以表示成可数个不重叠的Cube的并

  设开集为$$U$$，$$Q_i$$为边长为$$1/i$$在整数点(1/2整数点，1/3整数点，类推)上的Cube的集合，  
  先从$$Q_1$$中选出在$$U$$内部的Cube, 再从$$Q_2$$中选出在$$U$$内部，但是不在刚才选出的$$Q_1$$中的Cube，再选$$Q_3$$等。

+ 1.1.6

  若$$Q, Q_1, Q_2, ...$$为nonoverlapping Box, 且$$ Q = Q_1 ∪ Q_2 ∪ Q_3 ∪ ... $$，则$$\text{Vol}(Q) = \text{Vol}(Q_1) + \text{Vol}(Q_2) + ... $$

  证：见书
+ 1.1.7 练习

  若$$Q, Q_1, Q_2, ...$$为Box, 且$$ Q ⊂ Q_1 ∪ Q_2 ∪ Q_3 ∪ ... $$，则$$\text{Vol}(Q) ≤ \text{Vol}(Q_1) + \text{Vol}(Q_2) + ... $$

  证：令$$Q_i' = Q ∩ Q_i$$，则$$Q = Q_1' ∪ Q_2' ∪ Q_3' ∪ ... $$，则$$\text{Vol}(Q) = \text{Vol}(Q_1') + \text{Vol}(Q_2') + ... ≤ \text{Vol}(Q_1) + \text{Vol}(Q_2) + ... $$

+ 1.1.8 定义：外测度(Exterior Measure)：$$E ⊂ R^d$$，为所有包含$$E$$的可数Cube的体积的和的下确界

  $$ \lvert E \rvert_e = \inf \left\{ \sum_k{\text{vol}(Q_k)} \right\} $$

+ 1.1.13 定理：(Countable Subadditivity) 外测度是次可数可加的
+ 1.1.14 定义：Limsup Liminf

  上极限limsup, 至少出现无穷次  
  下极限liminf, 至多不出现有限次

+ 1.1.16 练习 (Borel—Cantelli Lemma)

  令$$E_k ⊂ R^d, \,\, \sum{\lvert E_k \rvert_e} < \inf $$，则$$E_k$$的上下极限的外测度趋于0

  证，设$$Q_1$$为包含$$E_1$$的Cube的集合，且 $$\sum{Q_1} < \lvert E_1 \rvert_e + ε/2$$  
  证，设$$Q_2$$为包含$$E_2$$的Cube的集合，且 $$\sum{Q_2} < \lvert E_2 \rvert_e + ε/4$$  
  等等

  由$$\sum{\lvert E_k \rvert} < \inf$$可知，$$∀ε, ∃N, \lvert E_N \rvert_e + \lvert E_{N+1} \rvert_e + ... < ε$$  
  所以∃N, \sum{Q_N} + \sum{Q_{N+1}} + ... < ε, 所以$$E_N$$之后的Union的外测度是很小的，而上极限又包含于$$E_N$$之后的Union.所以上极限的外测度是很小的。

+ 1.1.17 定理 Box的外测度为其体积

  由定义，外测度是所有Box包含方式的inf, 它自己包含自己，是一个option，所以Box的外测度一定≤其体积

  外测度>其体积是不可能的，因为这相当于说，一群小盒子包住了一个大盒子，严谨证明如下(改编自书)：

  一群瘦小盒子包住了大盒子，且瘦小盒子的体积和小于大盒子，将每个瘦小盒子稍微放大一点点，  
  一群胖小盒子包住了大盒子，且胖小盒子的体积和小于大盒子，将每个胖小盒子扒掉边界，  
  一群开集小盒子包住了大盒子，且开集小盒子的体积和小于大盒子，由有限覆盖定理，取出有限个开集小盒子，  
  因为是有限情形，开集小盒子的体积显然大于大盒子(这些开集小盒子穿上衣服正是练习1.1.7)，这与“且开集小盒子的体积和小于大盒子”矛盾。

+ 1.1.20 练习 有限不相交小盒子的并的外测度为其外测度的并。

  证，因为是有限的，直接套用1.1.17的证明，有限覆盖定理依然成立。

+ 1.1.23 例子 康托尔集 (Cantor set)

+ 1.1.26 定理(Regularity of Exterior Measure) 胀小盒子定理

  $$ E ⊂ R^d, ε > 0 ⇒ ∃U ⊃ E, \text{ such that } U \text{ is open set and } \lvert E \rvert_e ≤ \lvert U \rvert_e ≤ \lvert E \rvert_e + ε $$

  证：因为外测度是用可数个Box包围定义的，把可数个Box每个扩大一点点，(ε/2, ε/4, ε/8, ...)就变成了开集U, 可数开集之并仍然是开集。

+ 1.1.28 习理 证明可数个外测度为0的集的并的外测度为0

  证，(ε/2, ε/4, ε/8, ...)大法好，可证并的外测度 < ε

+ 1.1.29 习理 若Z ⊂ R^d, Z的外测度为0，测 R \ Z (差集) 在R中是dense的

  证，若不是，设点p ∈ R^d, p 不是 R \ Z 的极限点，则存在一个开球B, p ∈ B ∧ B ⊂ Z, 与Z的外测度为0矛盾。

+ 1.1.30 习题，若Z ⊂ R 的外测度为0，则$$Z^2 = \left\{ x^2 : x ∈ Z \right\} $$ 的外测度为0

  证：只要设 $$ Z ⊂ \mathbb{R}^+ $$ 即可，将Z切成小段，0-1段取覆盖 < ε, 1-2段取 < ε/2/4, 2-3段取 < ε/4/9, 3-4段取 < ε / 8 / 16 等等。

  这样平方之后加进来仍然是 < ε 的。

+ 1.1.31 习题，若$$f : \mathbb{R} → \mathbb{R} $$是连续的，证明其图像在 $$ \mathbb{R}^2 $$ 上的外测度为0

  证：只需证明$$f : [0-1] → [0-1] $$的图像的外测度为0即可

  由连续函数的定义，对于任意ε, 存在δ，使得 $$ x - y < δ ⇒ f(x) - f(y) < ε $$，所以只需要用1/δ个高度为2ε的长方形就能把函数包住，则总面积为 $$ \sum_δ{2ε} = 2ε $$

+ 1.1.40 习题，证明每次去掉1/n的康托尔尔(正常是n=3)是完全集，无内点，外测度为0

  略

+ 1.1.41 习题，求所有以十进制展开表示不含数码4者的外测度

  为0，略。

+ 1.1.42 习题，$$ \mathbb{R}^d $$ 中的完全集不可数

  见 小卢丁2.43

## 勒贝格测度

注意，这里用了两套定义，交错写成，为的是推出对方，不加撇为书上的，加撇为我加的。只有一种定义的，则通用于两种勒贝格测度的定义

+ 1.2.1 定义 勒贝格测度 (Lebesgue Measure)

  $$ E ⊂ \mathbb{R}^d $$ is measureable iff $$ ∀ ε > 0, ∃ \text{open}U ⊃ E,\, \lvert U \setminus E \rvert_e ≤ ε $$

  E可测，说人话就是，存在开集 U 包含 E 且使得 U \ E 的外测度很小。

+ 1.2.1' 定义 勒贝格测度 (Lebesgue Measure)

  $$ E ⊂ \mathbb{R}^d $$ is measureable iff $$ ∀ ε > 0, ∃ \text{closed}F ⊂ E,\, \lvert E ∖ F \rvert_e ≤ ε $$

  E可测，说人话就是，存在闭集 F 包含于 E 且使得 E \ F 的外测度很小。

+ 1.2.2 记法 $$ \mathbb{R}^d $$ 中的所有可测集，记为 $$ \mathcal{L} $$

+ 1.2.3 引理：开集可测。
+ 1.2.3' 引理：闭集可测。

+ 1.2.4 引理：外测度为0的集合可测。

  证：由1.1.26 外测度为0，说明一些小盒子可以包进来它，胀小盒子，就变成了开集小盒子。
  证'：取K=∅加定义即可。

+ 1.2.5 定理：(Closure under Countable Unions) 可数可测的并可测，且可数可测集的并的测度小于等于其测度的并。

  证： 设$$E_1, E_2, ⋯$$可测, $$E = ∪{E_k}$$

    分支1: 则存在$$U_1, U_2, ⋯$$使得 $$ \lvert U_k ∖ E_k \rvert_e < ε/2^k $$，取$$U = ∪{U_k}$$，则$$U ∖ E ⊂ ∪{U_k ∖ E_k}$$，$$U$$即满足定义

    分支2: 则存在$$F_1, F_2, ⋯$$使得 $$ \lvert E_k ∖ F_k \rvert_e < ε/2^k $$，取$$F = ∪{F_k}$$，即$$E ∖ F ⊂ ∪{E_k ∖ F_k}$$，$$F$$即满足定义

+ 1.2.6 引理：Box可测

+ 1.2.7.0 此处书写的很好

+ 1.2.7.1 定义，A 与 B 的距离(dist)是所有点对距离的inf

+ 1.2.7 $$ A, B ⊂ \mathbb{R}^d,\, \text{dist}(A,B) > 0 ⇒ \lvert A \rvert_e + \lvert B \rvert_e = \lvert A ∪ B \rvert_e $$

+ 1.2.31 问题：

  设 $$ F, K ⊂ \mathbb{R}^d $$ 非空，$$F$$闭，$$K$$紧，$$F, K$$不相交，证明$$ \text{dist}(F,K) > 0 $$，举例说明$$K$$如果不紧只闭是不够的。

  证：由 Baby Rudin 2.41， 紧集等价于有界闭集。我们证明，存在ε，使得，$$ \text{dist}(F,K) > ε $$，反证：

  如果不存在，那么对于1, 1/2, 1/3, ... 必然有 $$ p_n ∈ F,\, q_n ∈ K,\, \text{dist}(p_n, q_n) < 1/n $$，

  所以 $$ \left\{ q_n \right\} $$ 是 $$ K $$ 的无限子集，由小卢丁2.37，必有极限点$$ q ∈ K $$

  从 $$ \left\{ q_n \right\} $$ 选出一子列 $$ \left\{ q'_n \right\} $$ ，满足 $$ \text{dist}(q'_n, q) < 1/n $$ 

  于是对应的子列 $$ \left\{ p'_n \right\} $$ ，满足 $$ \text{dist}(p'_n, q) < 2/n $$ ，于是$$q$$也是$$ \left\{ p'_n \right\} $$ 的极限点，

  所以 $$ q ∈ F $$，加上$$ q ∈ K $$，与$$F, K$$不相交矛盾。

+ 1.2.8 引理 有限不相交紧集的并的外测度为其外测度的和

  由1.2.31，不相交紧集的距离为正，再由1.2.7，距离为正的集合的外测度可加

+ 1.2.9 定理 紧集可测(实为有界闭集可测)

  此处需要先看书再看我的理解。

  这个证明好像比较tricky. 见书，思路是：设$$F$$是非空紧集，则由1.1.26(胀小盒子定理)，存在开集 $$ U ⊃ F $$ 使得 $$ \lvert U \rvert_e < \lvert F \rvert_e + ε $$

  而 $$ U \setminus F $$ 是开集，由1.1.5开集小盒子引理，开集可以表示成可数个小盒子的并，所以

  $$ \lvert F \rvert_e + \lvert \text{一堆小盒子} \rvert_e = \lvert F ∪ \text{一堆小盒子} \rvert_e < \lvert U \rvert_e < \lvert F \rvert_e + ε $$

  其中第一个等号是由1.2.8得到的，一堆小盒子是有限的，所以一堆小盒子的外测度 < ε，而这当 N 趋于无穷时，有一堆小盒子的外测度 ≤ ε

  ( 这里需求补充一下：任意有限成立的情况下，无限不一定成立，在这里成立需要推导，可以理解为：前N项和是一个递增数列，这个数列的每一个都 < ε，所以单调有界 )

  而这当 N 趋于无穷时，这一堆小盒子既为 $$ U \setminus F $$，所以$$ \lvert U \setminus F \rvert_e $$很小，所以满足可测定义。

  补充：2017-11-27 $$R^d$$中紧集等价于有界闭集，现在已经觉得不tricky了，见1.2.9'

+ 1.2.9' 定理 有界开集可测

  直接由定理1.1.5(开集小盒子引理)，开集可以表示成不重叠Box的并，再加上1.2.5可数可测集的并可测，可得。

  闭集能直接并成开集，而1.2.9中开集要挖去一个闭集，剩下的小开集再由1.1.5的小盒子涨成。

+ 1.2.10 引理 闭集可测

  证明，容易将闭集表示成有界闭集的并，再由有界闭集可测及可测集的可数并可测可得。

+ 1.2.10' 引理 开集可测

  证明，容易将开集表示成有界开集的并，再由有界开集可测及可测集的可数并可测可得。

+ 1.2.11 定理 (Closure Under Complements) 可测集的补集可测

  证明，见书，大意是，设$$E$$可测，令开集 $$ \lvert U_k ∖ E \rvert < 1/k $$，$$ U $$ 的补与$$ E $$的补相差任意小，所以将$$ E $$的补集为U的补的并与一测度为0的集，所以E的补可测。

+ 1.2.12 推论 (Closure Under Countable Intersections) 可数可测的交可测

  由可数可测集的并可测及可测集的补集可测可得

+ 1.2.13 推论 (Closure Under Relative Complements) 两个可测集的差集可测

+ 1.2.14 定义 (Sigma Algebra) Σ代数

  称 $$ Σ ⊂ \mathcal{P}(X) \text{(power set)} $$ 是 $$ \mathcal{P}(X) $$ 的 σ-algebra，如果

  1. $$ Σ $$ 不空
  2. $$ Σ $$ 的元素对X的补集运算封闭
  3. $$ Σ $$ 的元素对可数并运算封闭

+ 1.2.15 $$ E ⊂ ℝ^d $$，则E可测的两种定义是等价的

  证：由之前的结论可得，用个补集倒一下就完事了。

+ 1.2.16 定理 可数可加性

  不相交的可测集的测度的和为其并的测度

  证明略，见书

+ 1.2.17 推论 不重叠的Box的测度的和为其并的测度

+ 1.2.18 $$ℝ^d$$中，$$G_δ$$集：开集的可数交；$$F_σ$$集：闭集的可数并

+ 1.2.19 例子，略

+ 1.2.20 引理 $$ E ⊂ ℝ^d $$，则存在H为$$G_δ$$集，$$H ⊃ E$$，$$ \lvert E \rvert_e = \lvert H \rvert $$，且H可表示为嵌套开集的交

  证略

+ 1.2.21 引理 $$ E ⊂ ℝ^d $$, E可测等价于$$E=H∖Z$$($$H$$是$$G_δ$$, $$ \lvert Z \rvert = 0$$)等价于$$E=H∪Z$$($$H$$是$$F_σ$$, $$ \lvert Z \rvert = 0$$)

  证略

+ 1.2.22 练习

  (a) 连续函数$$f:ℝ^n→ℝ^m$$将紧集映射到紧集。即为小卢丁4.14

  (b) 连续函数$$f:ℝ^n→ℝ^m$$将$$F_σ$$集映射到$$F_σ$$集。

  由于F_σ可以表示成可数有界闭集的并。

+ 1.2.23 定理 Carathéodory's Criterion (卡拉西奥多里条件，可测集判别条件)

  $$ E ⊂ ℝ^d $$，E可测 ⟺ $$∀A ⊂ ℝ^d,\,\lvert A \rvert_e = \lvert A ∩ E \rvert_e + \lvert A ∖ E \rvert_e $$

  证：正向：设一个$$G_δ$$-set $$H ⊃ A,\, \lvert H \rvert = \lvert A \rvert_e$$，则

  $$ \lvert A \rvert_e = \lvert H \rvert = \lvert H ∩ E \rvert + \lvert H ∖ E \rvert ≥ \lvert A∩E \rvert_e + \lvert A∖E \rvert_e ≥ \lvert A \rvert_e $$

  反向：

  $$k∈ℕ,\,E_k=\{x∈E: \lvert x \rvert ≤ k\},\,H_k ⊃ E_k$$是$$G_δ$$集，$$ \lvert H_k \rvert = \lvert E_k \rvert_e $$

  可以看到 ∪H 和 ∪E 差了可数个零测集。

+ 1.2.24 记号 Almost Everywhere (a.e.) (几乎处处)

+ 1.2.25 例子 略

+ 1.2.26 定义 Essential Supremum (本质上确界)

  若 $$ E ⊂ ℝ^d,\,f:E→[-∞, ∞] $$，则

  $$ \underset{x∈E}{\text{esssup}}f(x) = \inf{M∈[-∞,∞]:f(x) ≤ M \text{ for a.e. } x ∈ E} $$

  若 $$ \underset{x∈E}{\text{esssup}} \lvert f(x) \rvert = < ∞ $$ 则称$$f$$是essentially bounded (本质上有界)

+ 1.2.27 例子 略

+ 1.2.28 引理 把定义换了一种说法，略

+ 1.2.29 推论 将1.2.28又换了一种说法，略

+ 1.2.30 练习 设$$U⊂ℝ^d$$是非空开集，$$f:U→ℝ$$是连续的，证明$$f$$的上确界等于其本质上确界

  很容易想，略

+ 1.2.31 习题，见1.2.7

+ 1.2.32 习题 若$$A,\,B$$可测，证明$$ \lvert A∪B \rvert + \lvert A∩B \rvert = \lvert A \rvert + \lvert B \rvert $$

  证：略

+ 1.2.33 习题 设$$E_n$$可测，两两相交测度均为0，证明 $$ \lvert ∪E_n \rvert = \sum { \lvert E_n \rvert } $$

  证：已经证明过可测可加，但是当时的条件是不相交，现在这个条件弱化为交集的测度为0

  令$$E_1' = E_1,\, E_2' = E_2 ∖ E_1,\, E_3' = E_3 ∖ E_2 ∖ E_1,\, ⋯$$，则显然$$∪E_n = ∪E_n'$$，又对于每一个$$E_n,\, \lvert E_n \rvert = \lvert E_n' \rvert $$，证毕

+ 1.2.34 习题 证明ℝⁿ中半径为r的球壳S的测度为0

  按维度递归做就行了，好想，但是应该比较难写。

+ 1.2.35 习题 若$$E⊂ℝ^m,\,F⊂𝔽^n$$，$$E,\,F$$可测，$$f:(E×F)→\{0,1\}$$, 且

  $$ ∀x∈E,\,\text{a.e. }y∈F,\, f(x,y) = 1 $$

  问以下命题是否成立：

  $$ \text{a.e. } y∈F,\,∀x∈E,\,f(x,y) = 1 $$

  <!-- 证：显然不成立，先假设E⊂ℝ, F⊂ℝ, f(x,y) = (x≠y)，则 $$ ∀x∈E,\,\text{a.e. }y∈F,\, f(x,y) = 1 $$，但是 $$ ¬(∃y∈F,\,∀x∈E,\,f(x,y) = 1) $$ -->
  <!-- 接下来我们把这个结论推广到$$ℝ^m × 𝔽^n$$上，显然$$ℝ$$与$$ℝ^m,\,𝔽^n$$等势，(用[Hilbert Curve](https://www.youtube.com/watch?v=3s7h2MHQtxc)也可以推出来) 思路好像错了-->

  令x和y低维相同时(把x和y看成向量，取两者维度较小的那个的维度，做n次比较)，令f为0，否则为1
  <!-- array<double, M> x; array<double, N> y; if (x[0]==y[0] && x[1]==y[1] && ... && x[min(M,N)-1] == y[min(M,N)-1]) f=0; else f=1;-->

  易证 $$ ∀x∈E,\,\text{a.e. (除去一个点或一个低维超平面)}y∈F,\, f(x,y) = 1 $$，但是 $$ ¬(∃y∈F,\,∀x∈E,\,f(x,y) = 1) $$ (因为肯定有x与y的低维相同)

+ 1.2.36 习题

  证明 $$ E可测 ⟺ ∀ε>0,\,∃U开,F闭,\, F⊂E⊂U,\, \lvert U ∖ F \rvert <ε $$

  证：由可测集的两种定义可得

  证明 $$ E可测 ⟺ ∀ε>0,\,∃G\text{(G_δ-set)},H\text{F_σ-set},\, H⊂E⊂G,\, \lvert G ∖ H \rvert = 0 $$

  证：由上一题的结论，加ε→0可得，由1.2.21亦可得

+ 1.2.37 习题

  设 $$ E⊂ℝ^d,\,0 < \lvert E \rvert_e < ∞,\, 0 < α < 1 $$ 求证存在box $$Q$$满足$$ \lvert E ∩ Q \rvert_e ≥ α \lvert Q \rvert $$

  思路：由外测度定义：存在$$Q_1,\,Q_2,\,⋯$$使得$$ \sum{\lvert Q_k \rvert} < \lvert E \rvert_e + ε $$

  我们断定$$Q_k$$中一定有一个满足条件，因为否则的话，相当于每一个 $$ \lvert E ∩ Q_k \rvert_e < α \lvert Q_k \rvert $$

  这样每一个$$Q_k$$用一列新的$$Q_{k_1},\,Q_{k_2},\,⋯$$替代，可数乘可数为可数，新$$Q_n$$数列包含$$E$$，相当于$$E$$的外测度变成了原来的α倍

  当然外测度定义时还有一个ε，这个很好消去，就不在此严密化了。

+ 1.2.43 习题

  设 $$ E⊂ℝ^d,\,\lvert A \rvert_e + \lvert B \rvert_e = \lvert E \rvert < ∞,\,A∪B=E,\,A∩B=∅,\,$$，求证$$A$$可测

  <!-- 证：由 1.2.20 存在H_{A_1}为$$G_δ$$集，$$H_{A_1} ⊃ A$$，$$ \lvert A \rvert_e = \lvert H_{A_1} \rvert $$，同理有$$H_{B_1}$$， -->
  <!-- 且由已知条件，$$ \lvert H_{A_1} \rvert + \lvert H_{B_1} \rvert_e = \lvert E \rvert $$ -->

  <!-- 令$$H_A = H_{A_1} ∩ E,\,H_B = H_{B_1} ∩ E$$，则有$$H_A$$可测，且$$A ⊂ H_A ⊂ E$$，同理$$B ⊂ H_B ⊂ E$$ -->

  <!-- 于是$$\lvert H_A \rvert + \lvert H_B \rvert ≤ \lvert H_{A_1} \rvert + \lvert H_{B_1} \rvert = \lvert E \rvert $$ -->

  <!-- 又$$H_A ∪ H_B = E$$，所以$$\lvert H_A \rvert + \lvert H_B ≥ \lvert E \rvert$$，所以$$\lvert H_A \rvert + \lvert H_B = \lvert E \rvert$$ -->

  <!-- 于是$$ \lvert H_A ∩ H_B \rvert = 0 $$，由 1.2.21 A可测等价于$$A=H∖Z$$($$H$$是$$G_δ$$-set, $$ \lvert Z \rvert = 0$$)，所以只需证 -->

  证：由 1.2.20 存在$$H_A$$为$$G_δ$$集，$$H_A ⊃ A$$，$$ \lvert A \rvert_e = \lvert H_A \rvert $$，同理有$$H_B$$，
  且由已知条件，$$ \lvert H_A \rvert + \lvert H_B \rvert = \lvert E \rvert $$，又$$H_A ∪ H_B ⊃ E$$，这里很直观，但是要写一下：

  由于 $$H_A ∪ H_B ⊃ E$$，所以 $$ \lvert H_A ∪ H_B \rvert = \lvert H_A \rvert + \lvert H_B \rvert - \lvert H_A ∩ H_B \rvert ≥ \lvert E \rvert $$

  于是$$ \lvert H_A ∩ H_B \rvert = 0 $$，$$ \lvert H_A ∪ H_B \rvert = \lvert E \rvert $$，

  另外有$$ \lvert (H_A ∪ H_B) ∖ E \rvert = 0 = \lvert (H_A ∖ E) ∪ (H_B ∖ E) \rvert = \lvert (H_A ∖ E) \rvert + \lvert (H_B ∖ E) \rvert - 0 $$，所以$$\lvert (H_A ∖ E) \rvert = 0$$

  由 1.2.21 $$A$$可测等价于$$A=H∖Z$$($$H$$是$$G_δ$$-set, $$ \lvert Z \rvert = 0$$)，所以只需证$$ \lvert H_A ∖ A \rvert = 0$$即可

  $$ \lvert H_A ∖ A \rvert_e = \lvert ((H_A ∖ A) ∖ H_B) ∪ ((H_A ∖ A) ∩ H_B) \rvert_e ≤ \lvert (H_A ∖ A) ∖ H_B \rvert_e + 0 $$

  $$ \lvert (H_A ∖ A) ∖ H_B \rvert_e = \lvert H_A ∖ (A∪B) ∖ (H_B ∖ B) \rvert_e = \lvert (H_A ∖ E) ∖ (H_B ∖ B) \rvert_e = 0 $$

  所以$$ \lvert H_A ∖ A \rvert = 0$$，故$$A$$可测

+ 1.2.44 习题 给出集合$$E$$，函数$$f:E→ℝ$$，$$f$$在$$E$$上连续，但是 $$ \text{esssup} \lvert f(x) \rvert ≠ \sup { \lvert f(x) \rvert }

  $$ f(x) = x,\, E = [0,1] ∪ {2} $$

+ 1.2.45 习题

  (a) G-δ 和 F-σ 互为补集 略

  (b) 每个可数集是F-σ 略

  (c) 可数集是G-δ

  <!-- 想了想好像也是，既然可数，   -->
  <!-- 第一个点涨1/1, 第二个涨1/2，第三个涨1/4, ...，并起来也是开集，作为第一个开集。   -->
  <!-- 第一个点涨1/2, 第二个涨1/4，第三个涨1/8, ...，并起来也是开集，作为第二个开集。   -->
  <!-- 等等。 -->
  <!-- TODO: 查了一下好像结论不对，不知道过程哪儿错了中。-->

  (d)，找出G-δ-σ, F-σ-δ, G-δ-σ-δ, F-σ-δ-σ, etc, 但不是G-δ，也不是F-σ

  <!-- 开集是G-δ, 可数闭集是G-σ, 考虑不可数闭集康托尔集，嗯，边界点是可数的，还是可以由可数开集交而来。 -->

  <!-- TODO: 这个暂时还没想到。 -->
  
  (c)和(d)好像还挺复杂的，暂时没想明白，附几个链接以后看

  <https://math.stackexchange.com/questions/73296/example-of-a-borel-set-that-is-neither-f-sigma-nor-g-delta>
  <https://math.stackexchange.com/questions/69451/how-to-show-that-mathbbq-is-not-g-delta>

  这表明现在我对“可测”这个概念还是没理解全啊。<!-- 2018-02-24 17:04:20 -->

+ 1.3.1 引理 \lvert A \rvert < ∞ ⟹ $$ \lvert B ∖ A \rvert = \lvert B \rvert - \lvert A \rvert $$
+ 1.3.2 定理 (Continuity from Below)

  若$$E_1 ⊂ E_2 ⊂ ⋯ ⊂ ℝ^d $$，$$E_k$$可测，则$$ \lvert E_1 \rvert ≤ \lvert E_2 \rvert ≤ ⋯ $$ 且 $$ \lvert \bigcup_{k=1}^{∞}{E_k} \rvert = \lim_{k→∞}{ \lvert E_k \rvert} $$
+ 1.3.3 例子 Let $$B_k(0)$$ be the open ball of radius k centered at the origin, and let $$E_k$$ be its complement:

  $$ E_k = ℝ^d ∖ B_k(0) = x ∈ Rd : \|x\| ≥ k $$ 测不满足Continuity from Above，(即越变越小)

+ 1.3.4 定理 (Continuity from Above)

  若$$ ℝ ⊃ E_1 ⊃ E_2 ⊃ ⋯ $$，$$E_k$$可测且$$∃k,\lvert E_k \rvert < ∞$$，则$$ \lvert E_1 \rvert ≥ \lvert E_2 \rvert ≥ ⋯ $$ 且 $$ \lvert \bigcap_{k=1}^{∞}{E_k} \rvert = \lim_{k→∞}{ \lvert E_k \rvert} $$

+ 1.3.5 推论 $$ E ⊂ ℝ^d,\, \lvert E \rvert < ∞ ⟹ V_1 ⊃ V_2 ⊃ ⋯ ⊃ E,\, V_k\text{开},\,\lim_{k→∞}\lvert V_k \rvert = \lvert E \rvert $$

  由1.2.20找到nested decreasing open sets $$U_1, U_2, ⋯ $$交于$$G_δ$$-set $$H$$，$$H⊃E,\,\lvert H \rvert = \lvert E \rvert $$

  再找到一个包含$$H$$的开集，与$$U_k$$取交即可。

+ 1.3.6 练习

  这个练习真是妙哉，结论便是1.3.7

  (a) 设$$Q ⊂ ℝ^m,\, R ⊂ ℝ^n\,Q,R\text{ are boxes}$$，则$$Q×R\text{ is a box in }ℝ^{m+n},\,\lvert Q×R \rvert = \lvert Q \rvert \lvert R \rvert $$

  略

  (b) 设$$U ⊂ ℝ^m,\, V ⊂ ℝ^n\,U,V\text{ are non-empty open sets}$$，则$$U×V\text{ is open},\,\lvert U×V \rvert = \lvert U \rvert \lvert V \rvert $$

  开集的笛卡尔积显然是开集，由开集小盒子定理，开集是一系列小盒子的并，所以$$U×V$$是可数个小盒子乘可数个小盒子，可得。

  (c) 设$$G ⊂ ℝ^m,\, H ⊂ ℝ^n\,G,H\text{ are bounded }G_δ\text{-sets}$$，则$$G×H\text{ is a G_δ-set},\,\lvert G×H \rvert = \lvert G \rvert \lvert H \rvert $$

  由$$G_δ$$-set可以表示成嵌套开集的可数交，再加上Continuity from Above，再加上(b)可得。

  (d) 设$$E ⊂ ℝ^m \text{ measurable},\,Z ⊂ ℝ^n, \lvert Z \rvert = 0 $$，则$$ \lvert E×Z \rvert = 0 = \lvert E \rvert \lvert Z \rvert $$

  单位方格乘Z为0测，E可划分成可数个单位方格

  (e) 设$$E ⊂ ℝ^m,\,F ⊂ ℝ^n,\, E,F \text{ are measurable} $$，则$$ \lvert E×F \rvert = \lvert E \rvert \lvert F \rvert $$

  把$$E,F$$表示成$$G_δ$$-set和一个零测集的并即可

+ 1.3.7 定理 $$E ⊂ ℝ^m,\,F ⊂ ℝ^n,\, E,F \text{ are measurable} $$，则$$ E × F ⊂ ℝ^{m+n} \text{ is measurable},\, \lvert E×F \rvert = \lvert E \rvert \lvert F \rvert $$

+ 1.3.8 例子 高维中的零测集降维之后可能变成不可测集

+ 1.3.9 引理 若连续函数$$f$$将零测集映射为零测集，则$$f$$将可测集映射为可测集

  证：可测集可以表示成$$F_σ$$-set的一个零测集的并，$$F_σ$$可以表示成有界闭集(紧集)的并，而$$f$$将紧集映射为紧集。

+ 1.3.10 定义 [Lipschitz Function](https://zh.wikipedia.org/zh-cn/利普希茨連續)

+ 1.3.11 线性函数都是Lipschitz的

+ 1.3.12 练习 设$$f:ℝ^d→ℝ^d$$是Lipschitz的，求证$$∃C≥0,\,∀Q⊂ℝ^d,\, \lvert f(Q) \rvert ≤ C \lvert Q \rvert $$

  略。

+ 1.3.13 定理 设$$f:ℝ^d→ℝ^d$$是Lipschitz的，则$$f$$将零测集映射到零测集。

  由1.3.12可得

+ 1.3.14 推论 线性函数$$L:ℝ^d→ℝ^d$$将可测集映射为可测集。

  略

+ 1.3.15 定理 (Linear Change of Variables) $$L:ℝ^d→ℝ^d, E⊂ℝ^d ⟹ \lvert L(E) \rvert = \lvert \text{det}(L) \rvert \lvert E \rvert \$$

  证明: 和 1.3.6 一样，也是先证cube，再开集，再可测集

+ 1.3.16 练习 为1.3.15的证明，略
+ 1.3.17 习题
  $$E⊂ℝ^d,\,0<\lvert E \rvert<∞,\,A_n ⊂ E,\,\lvert A_n \rvert → \lvert E \rvert $$ 求证 $$ ∃ B_n \text{是}A_n\text{的子列},\,\lvert ∩B_n \rvert > 0$$

  证：设 $$ \lvert E \rvert = 5$$, $$ \lvert A_1 \rvert = 4 $$, $$ \lvert A_2 \rvert = 3 $$，其实只要证 $$ \lvert A_1 ∩ A_2 \rvert ≥ 2 $$ 就可以了。

  这说明，$$ \lvert A_1 ∩ A_2 \rvert $$ 的损失程度是受限的，只要按 $$ \lvert B_n \rvert > 5 - \frac{1}{2^n} $$ 选子列就行了。

  举例说明 $$ \lvert E \rvert = ∞ $$ 有反例

  $$E = ℝ, A_n = (2^n, 2^{n+1})$$

+ 1.3.18 习题 证明E可测 ⟺ 对每个box Q, $$ \lvert Q \rvert = \lvert Q∩E \rvert_e + \lvert Q∖E \rvert_e $$

  证：和1.2.23的证法一样，可数乘可数还是可数，用Q填充起一个个开集(开集小盒子定理)就行了。

  评：证明虽然更麻烦了，但是理解起来更简单了，不可测就是有一个Box Q, $$ \lvert Q∩E \rvert_e + \lvert Q∖E \rvert_e > \lvert Q \rvert $$

+ 1.3.21 习题 设$$E⊂ℝ,\, \lvert E \rvert ≥ 0,\, ∀t≠0:\, \lvert E∩(E+t) \rvert = 0$$，求证 $$ \lvert E \rvert = 0 $$

  证：因为是一维上的，把$$E$$看成开区间与零测集的差集，问题就变成了

  $$ A,B ⊂ (0,1),\, \lvert A \rvert = 1,\, \lvert B \rvert = 1 $$，求证 $$ \lvert A∩B \rvert = 1 $$，非常简单。

+ 1.3.24 习题 $$ E ⊂ ℝ^d,\, d_E(x) = \text{dist}(x, E) = \inf_{x∈ℝ^d,\,y∈E}{ \| x-y \| },\,E_r = \{ x ∈ ℝ^d: d_E(x)<r \}  $$

  (a) $$d_E$$ 是 $$ℝ^d$$ 上的连续函数

  证$$d_E$$是 Lipschitz 就可以，常数为1

  (b) $$r > 0 ⇒ E_r$$是开集 略

  (c) 设$$E$$为闭集，$$d_E(x)=0 ⇔ x ∈ E$$ 略

  (d) $$ℝ^d$$中闭集是$$G_δ$$-set (开集的交)

  是$$E_{r_n}$$的交, $$r_n=1/n$$

  (e) $$ℝ^d$$中开集是$$F_δ$$-set (闭集的交)

  怀疑是笔误，应为$$ℝ^d$$中开集是$$F_σ$$-set (闭集的并)，对(d)取补集即可。

  (f) $$ E\text{紧} ⇒ \lvert E \rvert = lim_{r→0^+}{ \lvert E_r \rvert }，但无界闭集，无界开集，有界开集不成立

  证：直接由紧集的性质(每个点都是极限点)，推出$$E_r$$收敛于$$E$$

  反例1，E为无界闭集，如所有整数点，$$ \lvert E_r \rvert = ∞ $$  
  反例2，E为无界开集，如所有整数点扩大一点点($$1/2^n$$大法好)，$$ \lvert E \rvert $$ 有限而 $$ \lvert E_r \rvert $$ 无限。  
  反例3，E为有界开集

  在(0,1)区间上取所有$$\frac{1}{2^n}$$这些点，然后每个点再取小邻域($$ε/2^n$$)，再并，构成一个开区间，且测度很小(小于ε)  
  但是由于包含了$$\frac{1}{2^n}$$这些点，这个开区间是稠密的，所以 $$ \lvert E_r \rvert > 1 $$
  
