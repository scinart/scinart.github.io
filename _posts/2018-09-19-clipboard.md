---
layout: post
title: "Clipboard"
date: 2018-10-03 
timestamp: "2018-11-13 23:44:36 scinart"
categories: GT
published: false
comments: true
cc: "by-nc-nd"

---

+ Rademacher Complexity

  Given a set $ {\displaystyle A\subseteq \mathbb {R} ^{m}} $, the Rademacher complexity of A is defined as follows

  $$
  \operatorname {Rad} (A):={\frac {1}{m}}\mathbb {E} _{\sigma }\left[\sup _{a\in A}\sum _{i=1}^{m}\sigma _{i}a_{i}\right]
  $$

+ Emperical Rademacher

  Let $ S = \{ x_1,\ldots,x_m \} \in \mathcal{X}^m $, the emperical rademacher complexity of $ \mathcal{H}$ is

  $$
  \widehat{\mathfrak{R}}_S(\mathcal{H}) = \mathop{\operatorname{Rad}}(\{ [h(x_1), \ldots, h(x_n)] \vert h\in \mathcal{H} \})
  $$

  or

  $$
  \widehat{\mathfrak{R}}_S(\mathcal{H}) = \frac{1}{m} \mathop{\operatorname{\mathbb{E}}}_{σ_{1\ldots m}}{ \left[ \sup_{h\in \mathcal{H}}{\sum_{i=1}^{m}{σ_ih(x_i)}} \right]}
  $$

+ Rademacher

  Given distribution $ \mathcal{D} \in Δ(\mathcal{X}) $ and a sample size $m$, the Rademacher complexity of $ \mathcal{H} $ is

  $$
  \mathop{\operatorname{\mathbb{E}}}_{S \stackrel{\mathop{\operatorname{i.i.d}}}{\sim} \mathcal{D}^m}[\widehat{\mathfrak{R}}_S(\mathcal{H})]
  $$

+ Theorem 3.1

  Let $ G $ be a family of functions mapping from $\mathcal{X}$ to $ [0, 1] $, 
  given a distribution $ \mathcal{D} \in Δ(\mathcal{X}) $ and a sample $ S $ of size $m$
  Then, for any $δ > 0$, with probability at least $ 1 − δ $, the following holds.

  $$
  \Phi(S) = \sup_{g \in G} \left\{ \mathop{\operatorname{\mathbb{E}}}[g] - \widehat{\mathop{\operatorname{\mathbb{E}}}_{S}}[g] \right\} \leq 2 \mathfrak{R}_S(G) + \sqrt{\frac{\log 1/\delta}{2m}} 
  $$

  where

  $$
  \mathop{\operatorname{\mathbb{E}}}[g] = \mathop{\operatorname{\mathbb{E}}}_{X \sim \mathcal{D}}[g(X)] \\
  \widehat{\mathop{\operatorname{\mathbb{E}}}_{S}}[g] = \mathop{\operatorname{\mathbb{E}}}_{X \sim \mathop{\operatorname{uniform}}S}[g(X)] 
  $$

  + Proof

    We can use McDiarmid's inequality to $ \Phi(S) $, why? suppose $S$ and $S'$ differ by one index, say $z_m$ and $z_m^*$

    $$
    \begin{aligned}
      \Phi(S') - \Phi(S) &= \sup_{g' \in G} \left\{ \mathop{\operatorname{\mathbb{E}}}[g'] - \widehat{\mathop{\operatorname{\mathbb{E}}}_{S'}}[g'] \right\} - \sup_{g \in G} \left\{ \mathop{\operatorname{\mathbb{E}}}[g] - \widehat{\mathop{\operatorname{\mathbb{E}}}_{S}}[g] \right\} \\
      &\leq \sup_{g' \in G} \left\{ \mathop{\operatorname{\mathbb{E}}}[g'] - \widehat{\mathop{\operatorname{\mathbb{E}}}_{S'}}[g'] \right\} - \left\{ \mathop{\operatorname{\mathbb{E}}}[g'] - \widehat{\mathop{\operatorname{\mathbb{E}}}_{S}}[g'] \right\} \\
      &\leq \sup_{g' \in G} \left\{ \mathop{\operatorname{\mathbb{E}}}[g'] - \widehat{\mathop{\operatorname{\mathbb{E}}}_{S'}}[g'] - \left( \mathop{\operatorname{\mathbb{E}}}[g'] - \widehat{\mathop{\operatorname{\mathbb{E}}}_{S}}[g'] \right) \right\} \\
      &= \sup_{g \in G} \left\{ \widehat{\mathop{\operatorname{\mathbb{E}}}_{S}}[g] - \widehat{\mathop{\operatorname{\mathbb{E}}}_{S'}}[g] \right\} \\
      &= \sup_{g \in G} \frac{g(z_m) - g(z_m')}{m} \\
      &\leq \frac{1}{m}      
    \end{aligned}
    $$

    Similarly, we have $ \Phi(S) - \Phi(S') \leq \frac{1}{m} $. So, by McDiarmid's inequality

    TODO: For the rest, see Book Foundations of Machine Learning. will write down later.

