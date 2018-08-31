---
layout: post
title: "CSE 6140 Algorithms Notes on Betweenness Centrality"
date: 2018-08-26
timestamp: "2018-08-30 20:59:37 mama"
categories: GT
comments: true
cc: "by-nc-nd"

---

#### Betweenness Centrality

[Original Paper](http://www.inf.uni-konstanz.de/algo/publications/b-fabc-01.pdf)([Cached](/pdfs/Betweenness-Centrality-Paper.pdf))

Let $$ G = (V,E) $$ be a graph that is **undirectional**, **weighted**, **no multiple edges**, **connected**.

Let $$ V $$ be the set of **vertices**, $$ E $$, the set of all **edges**

Let $$ \omega $$ be the weight function such that $$ \omega(e) > 0 \text{ for all } e \in E $$.

Let $$ d_G(s,t) $$ be the minimum distance from $$s$$ to $$t$$($$s,t \in V $$), $$ d_G(s,s)=0 $$

Let $$ P_s(v) = \{ u \in V : \{u,v\} \in E,\, d_G(s,v) = d_G(s,u) + \omega(\{u,v\})\} $$

<!-- %% $$ P_s(v) $$ 可以理解为，从$$v$$点回到$$s$$点，第一步可以走什么节点是最近的。 -->
$$ P_s(v) $$ can be perceived as: if you go first from v to s, what point is best to choose in the first step.

It is clear that $$ P_s(v) = \emptyset \iff v = s $$

Let $$ \sigma_{st} $$ be the number of **shortest paths** from $$s$$ to $$t$$. Define $$ \sigma_{ss} = 1 $$

Let $$ \sigma_{st}(v) $$ be the number of **shortest paths** from $$s$$ to $$t$$ **containging** $$v$$.  
Let $$ \sigma_{st}(v,e) $$ be the number of **shortest paths** from $$s$$ to $$t$$ **containging** $$v$$ and $$e$$.

$$
\sigma_{st}(v) = \begin{cases} 0 & \text{ if } d_G(s,t) < d_G(s,v) + d_G(v,t) \\
                     \sigma_{sv} \cdot \sigma_{vt} & \text{otherwise}
               \end{cases}
$$

Let $$ \delta_{st}(v) $$ be $$ \frac{\sigma_{st}(v)}{\sigma_{st}} $$.  
Let $$ \delta_{st}(v,e) $$ be $$ \frac{\sigma_{st}(v,e)}{\sigma_{st}} $$.

Common definition of `Centrality`

$$
\begin{aligned}
C_C(v) = \frac{1}{\sum_{t\in V}{d_G(v,t)}} & & \text { closeness centrality } \\
C_G(v) = \frac{1}{\max_{t\in V}{d_G(v,t)}} & & \text { graph centrality } \\
C_S(v) = \sum_{s,v,t \in V, s\neq v \neq t}{\sigma_{st}(v)} & & \text { stress centrality } \\
C_B(v) = \sum_{s,v,t \in V, s\neq v \neq t}{\frac{\sigma_{st}(v)}{\sigma_{st}}} & & \text { stress centrality } \\
\end{aligned}
$$

Lemma 1: (Bellman criterion)

$$ \sigma_{st}(v) > 0 \iff d_G(s,t) = d_G(s,v) + d_G(v,t) $$

Lemma 2: (Combinatorial shortest-path counting)

If $$ s,v \in V,\, s \neq v $$, then

$$ \sigma_{sv} = \sum_{u\in P_s(v)}{\sigma_{su}} $$ 

Definition:

$$ \delta_{s\bullet}(v) = \sum_{t\in V, t\neq s \neq v}{ \delta_{st}(v) } $$

We have:

$$
\begin{aligned}
  \delta_{s\bullet}(v) &= \sum_{t\in V, t\neq s \neq v}{ \left( \delta_{st}(v) \right) } \\
                     &= \sum_{t\in V, t\neq s \neq v}{ \left( \frac{\sigma_{st}(v)}{\sigma_{st}} \right) } \\
                     &= \sum_{t\in V, t\neq s \neq v}{ \left( \frac{\sum_{w:v\in P_s(w)}{\sigma_{st}(v,\{v,w\})}}{\sigma_{st}} \right) } \\
\end{aligned}
$$

Note in the parenthesis above that we have

$$
\sigma_{st}(v, \{v,w\}) = \frac{\sigma_{sv}}{\sigma_{sw}} \cdot \sigma_{st}(w)
$$

Why?.The definition of $$w$$ means that $$v$$ is closer to $$s$$ than $$w$$. and $$ \sigma_{st}(v, \{v,w\}) = \sigma_{st}(w, \{v,w\}) $$. So the equation means that of all the paths from $$s$$ to $$t$$ via $$w$$, which is $$ \sigma_{st}(w)$$, we take a fraction by only allowing one way (a.k.a $$\{v,w\}$$) of entering $$w$$. We had $$ \sigma_{sw} $$ ways of entering $$w$$ but now we have only $$ \sigma_{sv} $$. Hence the total possible ways is also fractured by $$\frac{\sigma_{sv}}{\sigma_{sw}}$$.

Continue the equation:

$$
\begin{aligned}
  \delta_{s\bullet}(v) &= \sum_{t\in V, t\neq s \neq v}{ \left( \delta_{st}(v) \right) } \\
                     &= \sum_{t\in V, t\neq s \neq v}{ \left( \frac{\sigma_{st}(v)}{\sigma_{st}} \right) } \\
                     &= \sum_{t\in V, t\neq s \neq v}{ \left( \frac{\sum_{w:v\in P_s(w)}{\sigma_{st}(v,\{v,w\})}}{\sigma_{st}} \right) } \\
                     &= \sum_{t\in V, t\neq s \neq v}{ \left( \frac{\sum_{w:v\in P_s(w)}{\frac{\sigma_{sv}}{\sigma_{sw}} \cdot \sigma_{st}(w)}}{\sigma_{st}} \right) } \\
                     &= \sum_{t\in V, t\neq s \neq v}{ \sum_{w:v\in P_s(w)} { \left( \frac{\sigma_{sv}}{\sigma_{sw}} \cdot \delta_{st}(w) \right) }} \\
                     &= \sum_{w:v\in P_s(w)} { \sum_{t\in V, t\neq s \neq v} { \left( \frac{\sigma_{sv}}{\sigma_{sw}} \cdot \delta_{st}(w) \right) }} \\
                     &= \sum_{w:v\in P_s(w)} \left( \frac{\sigma_{sv}}{\sigma_{sw}} \cdot { \sum_{t\in V, t\neq s \neq v} { \left( \delta_{st}(w) \right) }} \right) \\
                     &= \sum_{w:v\in P_s(w)} \left( \frac{\sigma_{sv}}{\sigma_{sw}} \cdot \left( { \left( \sum_{t\in V, t\neq s \neq w} { \delta_{st}(w) } \right) } + \delta_{sw}(w) - \delta_{sv}(w) \right) \right) \\
                     &= \sum_{w:v\in P_s(w)} \left( \frac{\sigma_{sv}}{\sigma_{sw}} \cdot ( \delta_{s\bullet}(w) + 1 ) \right)
\end{aligned}
$$
