---
layout: post
title: "Convex Optimization Notes"
date: 2018-09-03
timestamp: "2018-09-03 17:20:33 mama"
categories: Math
comments: true
cc: "by-nc-nd"

---

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

<!-- 1.1.4-d3 ***closed*** -->

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












