---
layout: post
title: "Convex Optimization Notes"
date: 2018-09-03
timestamp: "2018-09-20 14:35:11 mama"
categories: Math
comments: true
cc: "by-nc-nd"

---

Convex Optimization

+ 2.1.1 Line

  Suppose $$ x_1 \neq x_2 $$ are two points in $$ \mathbb{R}^n $$. Points of the form

  $$ y = θx1 + (1 − θ)x2 $$

  where θ ∈ R, form the line passing through $$x_1$$ and $$x_2$$.

+ 2.1.2 Affine sets

  (It is hyperplane (may not passing the origin))

  A set $$ C ⊆ \mathbb{R}^n $$ is affine if the line through any two distinct points in $$C$$ lies in $$C$$

  We refer to a point of the form $$ θ_1 x_1 + · · · + θ_k x_k,\text{ where }θ_1 + · · · + θ_k = 1$$, as an affine combination of the points $$ x_1 , . . . , x_k $$

  If $$ C $$ is an affine set and $$ x_0 ∈ C $$, then the set

  $$ V = C − x_0 = \{x − x_0 \vert x ∈ C\} $$

  is a subspace

  The set of all affine combinations of points in some set $$ C ⊆ \mathbb{R} $$ n is called the affine hull of $$C$$, and denoted $$\operatorname{aff} C$$:

  $$ \operatorname{aff} C = \{ θ_1x_1 + \cdots + θ_kx_k \vert x_1,\ldots,x_k ∈ C, θ_1+\ldots+θ_k = 1 \} $$

  The affine hull is the smallest affine set that contains $$C$$

+ 2.1.3 **Affine dimension** and relative interior

  We define the ***affine dimension*** of a set $$ C $$ as the dimension of its affine hull

  We define the ***relative interior*** of the set $$ C $$, denoted $$ \operatorname{relint} C $$ as its interior relative to $$ \operatorname{aff} C $$:

  $$ \operatorname{relint} = \{x ∈ C \vert B(x, r) ∩ aff C ⊆ C \text{ for some }r > 0\} $$

  where $$ B(x, r) = \{y \vert \|y − x\| ≤ r\} $$, the ball of radius $$ r $$ and center $$ x $$ in the norm $$ \| \cdot \| $$

  We can then define the ***relative boundary*** of a set $$ C $$ as $$ \operatorname{cl} C \setminus \operatorname{relint} C $$, where $$ \operatorname{cl} C $$ is the closure of C.

+ 2.1.4 Convex sets

  A set $$C$$ is convex iff

  $$ θx_1 + (1 − θ)x_2 ∈ C,\,\,\forall θ∈[0,1], x_1,x_2∈C $$

  Roughly speaking, a set is convex if every point in the set can be seen by every other point,
  along an unobstructed straight path between them, where unobstructed means lying in the set.
  Every affine set is also convex, since it contains the entire line between any two distinct points in it,
  and therefore also the line segment between the points.

  We call a point of the form $$ θ_1x_1 + \cdots + θ_kx_k $$, where $$ θ_1 + \cdots + θ_k = 1 $$ and $$θ_i ≥ 0$$, a convex combination of the points $$x_1, \ldots, x_k$$.
  As with affine sets, it can be shown that a set is convex if and only if it contain contains every convex combination of its points.
  A convex combination of points can be thought of as a mixture or weighted average of the points, with $$ θ_i $$ the fraction of $$x_i$$ in the mixture.

  The ***convex hull*** of a set $$ C $$, denoted $$ \operatorname{conv} C $$, is the set of all convex combinations of points in $$C$$:

  $$ \operatorname{conv} C = \{θ_1x_1 + \ldots + θ_kx_k \vert x_i ∈ C,\, θ_i ≥ 0\, θ_1 + \cdots + θ_k = 1\} $$

  As the name suggests, the convex hull $$ \operatorname{conv} C $$ is always convex. It is the smallest convex set that contains $$C$$

+ 2.1.5 Cones

  A set $$ C $$ is called a cone, or nonnegative homogeneous, if for every $$ x ∈ C $$ and $$θ ≥ 0$$, 
  we have $$ θx ∈ C $$. A set $$ C $$ is a convex cone if it is convex and a cone, which means that for any$$ x1, x2 ∈ C $$ and $$ θ1 , θ2 ≥ 0 $$, we have

  $$ θ_1x_1 + θ_2x_2 ∈ C. $$

  A point of the form $$ θ_1x_1 + \cdots + θ_kx_k $$ with $$ θ_1, \ldots, θ_k ≥ 0 $$ is called a conic combination
  (or a nonnegative linear combination) of $$ x_1, \ldots, x_k $$. If $$ x_i $$ are in a convex cone $$ C $$,
  then every conic combination of $$ x_i $$ is in $$ C $$. Conversely, a set $$C$$ is a convex cone if and only if it contains all conic combinations of its elements. 

  The conic hull of a set $$ C $$ is the set of all conic combinations of points in $$C$$, i.e.,

  $$ \{ θ_1x_1 + \cdots + θ_kx_k \vert x_i ∈ C,\, θ_i ≥ 0,\, i = 1, \ldots , k\} $$

  which is also the smallest convex cone that contains $$C$$.

#### Convex functions

+ 3.1 Basic properties and examples

+ 3.1.1 Definition

  A function $$ f: \mathbb{R}^n \mapsto \mathbb{R} $$ is convex if $$ \operatorname{dom} f $$ is a convex set and

  $$ \forall x,y ∈ \operatorname{dom} f,\,\, 0 ≤ θ ≤ 1,\,\, f(θx + (1 − θ)y) ≤ θf(x) + (1 − θ)f(y) $$ 

  We say $$ f $$ is concave if $$ −f $$ is convex, and strictly concave if $$ −f $$ is strictly convex.

  A function is convex if and only if it is convex when restricted to any line that intersects its domain.
  In other words $$ f $$ is convex if and only if for all $$ x ∈ \operatorname{dom} f $$ and all $$ v $$, the function $$ g(t) = f (x + tv) $$ is convex
  (on its domain, $$ \{t | x + tv ∈ \operatorname{dom} f \} $$).
  This property is very useful, since it allows us to check whether a function is convex by restricting it to a line.

+ 3.1.2 Extended-value extensions

  It is often convenient to extend a convex function to all of $$ \mathbb{R}^n $$ by defining its value $$ f $$ to be $$ \infty $$ outside its domain.

  If f is convex we define its extended-value extension $$ \widetilde{f} : \mathbb{R}^n \mapsto \mathbb{R} ∪ \{\infty\} $$ by

  $$
  \widetilde{f}(x) = \begin{cases}
    f(x) & x \in \operatorname{dom} f.\\
    \infty & x \not\in \operatorname{dom} f.
  \end{cases}
  $$

+ 3.1.3 First-order conditions

  Suppose $$ f $$ is differentiable (**i.e.**, its gradient $$∇f$$ exists at each point in $$ \operatorname{dom} f $$, which is open).
  Then $$f$$ is convex if and only if $$ \operatorname{dom} f $$ is convex and $$ f(y)≥f(x) + ∇f(x)^T(y − x) $$ holds for all $$ x, y ∈ \operatorname{dom} f $$

  Strict convexity can also be characterized by a first-order condition: $$ f $$ is strictly convex if and only if $$ \operatorname{dom} f $$ is convex and for $$ x, y ∈ \operatorname{dom} f, x \neq y $$, we have

  $$ f (y) > f (x) + ∇f(x)^T (y − x). $$

+ 3.1.4 Second-order conditions

  We now assume that $$f$$ is twice differentiable, that is, its Hessian or second derivative $$ ∇^2f $$ exists at each point in $$ \operatorname{dom} f $$, which is open.
  Then $$ f $$ is convex if and only if $$ \operatorname{dom} f $$ is convex and its Hessian is positive semidefinite: for all $$ x ∈ \operatorname{dom} f $$

  $$ ∇^2 f(x) \succeq 0. $$

  Strict convexity can be partially characterized by second-order conditions.
  If $$ ∇^2f (x) \succ 0 $$ for all $$ x ∈ \operatorname{dom} f $$, then $$f$$ is strictly convex.
  The converse, however, is not true: for example, the function $$ f : \mathbb{R} \mapsto \mathbb{R} $$ given by
  $$ f(x) = x^4 $$ is strictly convex but has zero second derivative at $$ x = 0 $$.

  Remark 3.1 The separate requirement that $$ \operatorname{dom} f $$ be convex cannot be dropped from the first- or second-order characterizations of convexity and concavity.
  For example, the function $$ f(x) = \frac{1}{x2} $$, with $$ \operatorname{dom} f = \{x ∈ R \vert x \neq 0 \} $$,
  satisfies $$ f''(x) > 0 $$ for all $$ x ∈ \operatorname{dom} f $$, but is not a convex function.

+ 3.1.6 Sublevel sets

  The $$ α $$-sublevel set of a function $$f : \mathbb{R}^n \mapsto R $$ is defined as

  $$ C_α = \{x ∈ \operatorname{dom} f \vert f(x) ≤ α \} $$.

+ 3.1.7 Epigraph

  The epigraph of a function $$ f : \mathbb{R}^n \mapsto R $$ is defined as

  $$ \operatorname{epi} f = \{(x, t) \vert x ∈ \operatorname{dom} f, f(x) ≤ t \} $$

+ 3.1.8 Jensen’s inequality and extensions

+ 3.1.9 Inequalities





<!--

## Convex Optimization Theory

+ 1.1.1-d **convex**

A subset C of $$ \mathbb{R}^N $$ is called ***convex*** if

$$ \alpha x + (1-\alpha)y \in C,\,\,\,\, \forall x,y\in C,\, \forall \alpha \in [0,1] $$

Note that the empty set is by convention considered to be convex.
Generally, when referring to a convex set, it will usually be apparent from the context
whether this set can be empty, but we will often be specific in order to minimize ambiguities.

+ 1.1.1-p 

  * The intersection $$ \bigcap_{i\in I}{C_i} $$ of any collection $$ \{ C_i \vert i \in I \} $$ of convex sets is convex.
  * The vector sum $$ C_1 + C_2 $$ of two convex sets is convex.
  * The set $$ \lambda C $$ is convex.
  * The closure and the interior of a convex set are convex.
  * The image and the inverse image of a convexs te under an affine function are convex.

  1, 2, 3, 5 are easy to proof by definition. proof 4a by considering a series of points.
  proof 4b by considering an open interior ball.

+ 1.1.1-misc

  * hyperplane: $$ \{ \textbf{x} \vert \textbf{a}^T \textbf{x} = b \},\, \textbf{a} \neq 0 $$
  * halfspace:  $$ \{ \textbf{x} \vert \textbf{a}^T \textbf{x} \leq b \},\, \textbf{a} \neq 0 $$
  * polyhedral: $$ \{ \textbf{x} \vert \textbf{a}_j^T \textbf{x} \leq b_j \} $$
  * cone: A set $$C$$ where $$ \forall \textbf{x} \in C, \lambda > 0, \lambda \textbf{x} \in C $$.
  * polyhedral cone: $$ \{ \textbf{x} \vert \textbf{a}_j^T \textbf{x} \leq 0 \} $$
  
+ 1.1.2-d1 Let $$ C $$ be a convex subset of $$ \textbf{R}^n $$, We say that a function $$ f : C \to \mathbb{R} $$ is ***convex*** if

  $$ f(\alpha x + (1-\alpha)y) \leq \alpha f(x) + (1-\alpha)f(y),\,\,\,\, \forall x,y \in C,\,\alpha\in[0,1] $$

  If $$ f(\alpha x + (1-\alpha)y) < \alpha f(x) + (1-\alpha)f(y),\, \forall x \neq y $$, then it is ***strictly convex***

  If $$(-f)$$ is convex, then $$f$$ is ***concave***

  Examples of convex function: affine function, norm.

+ 1.1.2­d2 level sets

  the sets $$ \{ x \in C \vert f(x) < \gamma \} $$ and $$ \{ x \in C \vert f(x) \leq \gamma \} $$ are called ***level sets*** of $$f$$.

  $$f$$ convex ⟹ level sets of $$f$$ are convex.
  
  Note, however, that convexityof the level sets does not imply convexity of the function;

+ 1.1.2-d3 ***epigraph***

  The ***epigraph*** of an (extended-value-real-function) $$ f : X \to [-\infty , \infty],\, X \subset \mathbb{R}^n $$ is defined to be the subset of $$ \mathbb{R}^{n+1} $$ given by:

  $$ \operatorname{epi}(f) = \left\{ (x,w) \vert x\in X, w\in \mathbb{R}, f(x) \leq w \right\} $$

  The ***effective domain*** of $$f$$ is defined to be the set

  $$ \operatorname{dom}(f) = \left\{ x\in X \vert f(x) < \infty \right\} $$

  It can be seen that

  $$ \operatorname{dom}(f) = \left\{ x \vert \text{there exists } w\in \mathbb{R} \text{ s.t. } (x,w) \in \operatorname{epi}(f) \right\} $$

  i.e., $$ \operatorname{dom}(f) $$ is obtained by a projection of $$ \operatorname{epi}(f) $$ on $$ \mathbb{R}^n $$ (th espace of x).

  Note that if we restrict $$f$$ to its effective domain, its epigraph remains unaffected. Similarly, if we enlarge the domain of $$f$$ by defining $$f(x) = \infty$$ for $$ x \not\in X$$, the epigraph and the effective domain remain unaffected.

+ 1.1.2-d4 ***proper***

  $$f$$ is ***proper*** if $$ f(x) < \infty $$ for at least one $$ x \in X $$ and $$ f(x) > -\infty $$ for all $$x\in X$$

+ 1.1.3-d1 Let $$ C $$ be a convex subset of $$ \textbf{R}^n $$, We say that an extended real-valued function $$ f : C \to [ -\infty, \infty ] $$ is ***convex*** if $$ \operatorname{epi}(f) $$ is a convex subset of $$ \mathbb{R}^{n+1} $$.
  
  * by above definition, convexity of $$f$$ implies that its effective domain $$\operatorname{dom}(f)$$ and its level sets are convex sets. Furthermore, if $$ \left\vert f(x) \right\vert < \infty $$ for all x, then $$ f(\alpha x + (1-\alpha)y) \leq \alpha f(x) + (1-\alpha)f(y),\,\,\,\, \forall x,y \in C,\,\alpha\in[0,1] $$. So the preceding definition is consistent with the earlier definition of convexity for real-velued funtions.

  * **indicator function** $$ \delta_X : \mathbb{R}n \to (-\infty, \infty]$$ if a set $$X \in \mathbb{R}^n$$, defined by

    $$ \delta_X(x) = \begin{cases} 0 & \text{if }x \in X \\ \infty & \text{otherwise} \end{cases} $$

    a set is convex if and only if its indifator function is convex.
    it is nonempty if and only if its indifator function is proper.

+ 1.1.4-d1 Let $$ C $$ and $$ X $$ be subsets of $$\mathbb{R}^n$$ s.t. $$C$$ is nonempty and convex, and $$ C \subset X$$. We say that an extended real-valued function $$ f : X \mapsto [-\infty , \infty] $$ is ***convex over*** $$C$$ if $$f$$ becomes convex when the domain of $$f$$ is restricted ot $$C$$.

+ 1.1.4-d2 ***lower semicontinuous***

  $$ f(x) \leq \liminf_{k\to\infty}{f(x_k)} $$

+ 1.1.2-p For a function $$ f : \mathbb{R}^n \mapsto [ -\infty, \infty ] $$, the following are equivalent:

  * The level set $$V_\gamma = \left\{ x \vert f(x) \leq \gamma \right\} $$ is closed for every scalar $\gamma$.
  * $$f$$ is lower semicontinuous
  * $$\operatorname{epi}(f) is closed. 

  Proof see page 10. will transcribe later.

+ 1.1.3-p Let $$f : X \mapsto [ -\infty , \infty ] $$ be a function. If $$ \operatorname{dom}(f) $$
is closed and $$f$$ is lower semicontinuous at each $$ x \in \operatorname{dom}(f) $$, then $$f$$ is closed.

+ 1.1.4-p Let $$f : \mathbb{R}^m \mapsto ( -\infty , \infty ] $$ be a given function, let A be an $$m\times n$$ matrix, and let $$F:\mathbb{R}^n \mapsto (-\infty, \infty] $$ be the function

  $$ F(x) = f(Ax),\,\,\,\,x\in \mathbb{R}^n $$

  If $$f$$ is convex, then $$F$$ is also convex, while if $$f$$ is closed, then $$F$$ is also closed.

+ 1.1.5-p Let $$f_i : \mathbb{R}^n \mapsto ( -\infty , \infty ] $$ be given functions, let $$\gamma_i$$ be positive scalars, and let $$F:\mathbb{R}^n \mapsto (-\infty, \infty] $$ be the function

  $$ F(x) = \gamma_1f_1(x) + \cdots ,\,\,\,\,x\in \mathbb{R}^n $$

  If $$f_1,\cdots,f_m$$ are convex, then $$F$$ is also convex, while if $$f_1,\cdots,f_m$$ are closed, then $$F$$ is also closed.

+ 1.1.6-p Let $$f_i : \mathbb{R}^n \mapsto ( -\infty , \infty ] $$ be given functions for $$i \in I$$, where $$I$$ is an arbitrary index set, and let $$F:\mathbb{R}^n \mapsto (-\infty, \infty] $$ be the function

  $$ F(x) = \sup_{i\in I}{f_i(x)} $$

  If $$f_1, i\in I$$ is convex, then $$F$$ is also convex, while if $$f_i,i \in I$$ are closed, then $$F$$ is also closed.

  Proof see page 13. Will transcribe later.

+ 1.1.7-p

  Let $$ C $$ be a nonempty convex subset of $$ \mathbb{R}^n $$ and let $$ f : \mathbb{R}^n \mapsto \mathbb{R} $$ be differentiable over an open set that contains $$C$$

  + (a) $$f$$ is convex over $$C$$ if and only if

    $$ f(z) ≥ f(x) + \nabla f(x)^T(z-x),\,\,\,\,\forall x,z \in C $$
  + (b) $$f$$ is strictly convex over $$ C $$ if and only if the above inequality is strict whenever $$ x \neq z $$.

  from 1.1.7-p (a) we get:
  
+ 1.1.8-p Let $$ C $$ be a nonempty convex subset of $$ \mathbb{R}^n $$ and let $$ f : \mathbb{R}^n \mapsto \mathbb{R} $$ be convex and differentiable over an open set that contains $$C$$. Then $$ x^* \in C $$ minimizes $$f$$ over $$C$$ if and only if

  $$ \nabla f(x^*)^T(z-x^*) \geq 0,\,\,\,\, \forall z \in C $$

+ 1.1.9-p (Projection Theorem)

  Let $$C$$ be a nonempty closed convex subset of $$ \mathbb{R}^n $$, and let $$z$$ be a vector in $$ \mathbb{R}^n $$. There exists a unique vector that minimizes $$ \|z-x\| $$ over $$ x \in C $$, called the projection of $$z$$ on $$C$$. Furthermore, a vector $$x^*$$ is the projection of $$z$$ on $$C$$ if and only if

  $$ (z-x^*)^T(x-x^*) \leq 0,\,\,\,\, \forall x \in C $$

  Proof: Minimizing $$ \left\vert z-x \right\vert $$ is equivalent to minimizing the convex and differentiable function

  $$ f(x) = \frac{1}{2} \| z-x \| ^2 $$

  By 1.1.8-p $$ x^* $$ minimizes $$f$$ over $$C$$ iff

  $$ \nabla f(x^*)^T (x-x^*) \geq 0,\,\,\,\,\forall x \in C $$

  Since $$ \nabla f(x^*) = x^* - z $$, this condition is just $$ (z-x^*)^T(x-x^*) \leq 0,\,\,\,\, \forall x \in C $$.

  Minimizing $$f$$ over $$C$$ is equivalent to minimizing $$f$$ over a compact set $$C \cap \left\{ x \vert \left\vert z-x \right\vert  \leq \left\vert z-w \right\vert \right\} $$ where $$w$$ is any vector in $$C$$. By restricting C to a compact set we can know that continuous functinos maps compact sets to compact sets. In $$\mathbb{R}$$ it is bounded closed set. So such $$x^*$$ exists.

  To prove uniqueness, suppose $$ x_1^* $$ and $$ x_2^* $$ are both minimizing vectors. Then we have

  $$ (z-x_1^*)^T(x_2^*-x_1^*) \leq 0 \\
     (z-x_2^*)^T(x_1^*-x_2^*) \leq 0 $$

  which leads to $$ \left\vert x_1^* - x_2^* \right\vert \leq 0 $$

+ 1.1.10-p Let $$C$$ be a nonempty convex subset of $$\mathbb{R}^n $$ and let $$f : \mathbb{R}^n \mapsto \mathbb{R} $$ be twice continuously differentiable over an open set that contains $$C$$.

  * If $$\nabla^2f(x)$$ is positive semidefinite for all $$ x \in C $$, then $$f$$ in convex over $$C$$.
  * If $$\nabla^2f(x)$$ is positive definite for all $$ x \in C $$, then $$f$$ in strictly convex over $$C$$.
  * If $$C$$ is open and $$F$$ is convex over $$C$$, then $$\nabla^2f(x)$$ is positive semidefinite for all $$ x \in C $$

!-->