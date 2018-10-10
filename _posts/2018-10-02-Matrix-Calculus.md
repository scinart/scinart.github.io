---
layout: post
title: "Matrix Calculus"
date: 2018-10-02 
timestamp: "2018-10-10 13:56:48 scinart"
categories: cs
tag: ML
comments: true
toc:
cc: "by-nc-nd"

---

## Matrix Calculus

main reference: <https://en.wikipedia.org/wiki/Matrix_calculus>

+ {: .foldme summary-style="font-size: 24px" } Numerator-layout notation

  + In numerator layout, numerator keeps its form, while denominator's transpose is used.
  + 对于分子布局(numerator layout),求导结果中分子保持原始形式,分母为转置形式
  + In denominator layout, denominator keeps its form, while numerator's transpose is used.
  + 对于分母布局(denominator layout),求导结果中分子为转置形式,分母保持原始形式

  Using numerator-layout notation, we have

  <div markdown="block" style="font-size: 18px">
  
  $$
  \frac{\partial y}{\partial \mathbf{x}} =
  \left[
  \frac{\partial y}{\partial x_1}
  \frac{\partial y}{\partial x_2}
  \cdots
  \frac{\partial y}{\partial x_n}
  \right]
  $$

  $$
  \frac{\partial \mathbf{y}}{\partial x} =
  \begin{bmatrix}
  \frac{\partial y_1}{\partial x}\\
  \frac{\partial y_2}{\partial x}\\
  \vdots\\
  \frac{\partial y_m}{\partial x}\\
  \end{bmatrix}
  $$

  $$
  \frac{\partial \mathbf{y}}{\partial \mathbf{x}} =
  \begin{bmatrix}
  \frac{\partial y_1}{\partial x_1} & \frac{\partial y_1}{\partial x_2} & \cdots & \frac{\partial y_1}{\partial x_n}\\
  \frac{\partial y_2}{\partial x_1} & \frac{\partial y_2}{\partial x_2} & \cdots & \frac{\partial y_2}{\partial x_n}\\
  \vdots & \vdots & \ddots & \vdots\\
  \frac{\partial y_m}{\partial x_1} & \frac{\partial y_m}{\partial x_2} & \cdots & \frac{\partial y_m}{\partial x_n}\\
  \end{bmatrix} = \begin{bmatrix}
    \frac{\partial \textbf{y}}{\partial x_1} & \cdots & \frac{\partial \textbf{y}}{\partial x_n}
  \end{bmatrix}
  $$

  $$
  \frac{\partial y}{\partial \mathbf{X}} =
  \begin{bmatrix}
  \frac{\partial y}{\partial x_{11}} & \frac{\partial y}{\partial x_{21}} & \cdots & \frac{\partial y}{\partial x_{p1}}\\
  \frac{\partial y}{\partial x_{12}} & \frac{\partial y}{\partial x_{22}} & \cdots & \frac{\partial y}{\partial x_{p2}}\\
  \vdots & \vdots & \ddots & \vdots\\
  \frac{\partial y}{\partial x_{1q}} & \frac{\partial y}{\partial x_{2q}} & \cdots & \frac{\partial y}{\partial x_{pq}}\\
  \end{bmatrix}
  $$

  $$
  \frac{\partial \mathbf{Y}}{\partial x} =
  \begin{bmatrix}
  \frac{\partial y_{11}}{\partial x} & \frac{\partial y_{12}}{\partial x} & \cdots & \frac{\partial y_{1n}}{\partial x}\\
  \frac{\partial y_{21}}{\partial x} & \frac{\partial y_{22}}{\partial x} & \cdots & \frac{\partial y_{2n}}{\partial x}\\
  \vdots & \vdots & \ddots & \vdots\\
  \frac{\partial y_{m1}}{\partial x} & \frac{\partial y_{m2}}{\partial x} & \cdots & \frac{\partial y_{mn}}{\partial x}\\
  \end{bmatrix}
  $$

  $$
  d\mathbf{X} =
  \begin{bmatrix}
  dx_{11} & dx_{12} & \cdots & dx_{1n}\\
  dx_{21} & dx_{22} & \cdots & dx_{2n}\\
  \vdots & \vdots & \ddots & \vdots\\
  dx_{m1} & dx_{m2} & \cdots & dx_{mn}\\
  \end{bmatrix}
  $$

  </div>

+ {: .foldme open="" summary-style="font-size: 24px" } Matrix Calculation Formula

  Notation:

  $$ a, b, c, d, e, \textbf{a}, \textbf{b}, \textbf{c}, \textbf{d}, \textbf{e} $$ are not a function of $$ \textbf{x} $$

  $$ A, B, C, D, E, \textbf{A}, \textbf{B}, \textbf{C}, \textbf{D}, \textbf{E} $$ are not a function of $$ \textbf{x} $$

  $$ f, g, h, u, v, \textbf{f}, \textbf{g}, \textbf{h}, \textbf{u}, \textbf{v} $$ are functions of $$ \textbf{x} $$

  {: style="font-size: 18px; text-align: center" }
  |------------------------------------------+------------------------------------------+--------------------------------------------------------------|
  |                                          |                                          |                                                              |
  |------------------------------------------+------------------------------------------+--------------------------------------------------------------|
  | <40>                                     | <40>                                     | <60>                                                         |
  | $ \partial $ vector                      | $ \partial $ vector                      |                                                              |
  |------------------------------------------+------------------------------------------+--------------------------------------------------------------|
  | \[ \frac{\partial \textbf{a}}{\partial \textbf{x}} \] | \[ \textbf{0} \]                         | Zero matrix                                                  |
  | \[ \frac{\partial \textbf{x}}{\partial \textbf{x}} \] | \[ \textbf{I} \]                         | Identity matrix                                              |
  | \[ \frac{\partial \textbf{Ax}}{\partial \textbf{x}} \] | \[ \textbf{A} \]                         |                                                              |
  | \[ \frac{\partial a \textbf{u}}{\partial \textbf{x}} \] | \[ a \frac{\partial \textbf{u}}{\partial \textbf{x}} \] |                                                              |
  | \[ \frac{\partial u \textbf{v}}{\partial \textbf{x}}\] | \[ u \frac{\partial \textbf{v}}{\partial \textbf{x}} + \textbf{v} \frac{\partial u}{\partial \textbf{x}} \] |                                                              |
  | \[ \frac{\partial \textbf{Au}}{\partial \textbf{x}} \] | \[ \textbf{A} \frac{\partial \textbf{u}}{\partial \textbf{x}} \] | \[ \textbf{A} \begin{bmatrix} \frac{\partial \textbf{u}}{\partial x_1} & \cdots & \frac{\partial \textbf{u}}{\partial x_n} \end{bmatrix} \] |
  | \[ \frac{\partial \textbf{u} + \textbf{v}}{\partial \textbf{x}} \] | \[ \frac{\partial \textbf{u}}{\partial \textbf{x}} + \frac{\partial \textbf{v}}{\partial \textbf{x}}\] |                                                              |
  | \[ \frac{\partial \textbf{g(u)} }{\partial \textbf{x}} \] | \[ \frac{\partial \textbf{g(u)}}{\partial \textbf{u}} \frac{\partial \textbf{u}}{\partial \textbf{x}}\] | \[ \begin{bmatrix} \frac{\partial \textbf{g}}{\partial u_1} & \cdots & \frac{\partial \textbf{g}}{\partial u_m} \end{bmatrix} \begin{bmatrix} \frac{\partial \textbf{u}}{\partial x_1} & \cdots & \frac{\partial \textbf{u}}{\partial x_n} \end{bmatrix} \] |
  | \[ \frac{\partial \textbf{f(g(u))} }{\partial \textbf{x}} \] | \[ \frac{\partial \textbf{f(g(u))}}{\partial \textbf{g(u)}} \frac{\partial \textbf{g(u)}}{\partial \textbf{u}} \frac{\partial \textbf{u}}{\partial \textbf{x}} \] |                                                              |
  |------------------------------------------+------------------------------------------+--------------------------------------------------------------|
  | $ \partial $ scalar                      | $ \partial $ vector                      |                                                              |
  |------------------------------------------+------------------------------------------+--------------------------------------------------------------|
  | \[ \frac{\partial a}{\partial \textbf{x}} \] | \[ \textbf{0}^T \]                       |                                                              |
  | \[ \frac{\partial au}{\partial \textbf{x}} \] | \[ a \frac{\partial u}{\partial \textbf{x}} \] |                                                              |
  | \[ \frac{\partial u+v}{\partial \textbf{x}} \] | \[ \frac{\partial u}{\partial \textbf{x}} + \frac{\partial v}{\partial \textbf{x}} \] |                                                              |
  | \[ \frac{\partial uv}{\partial \textbf{x}} \] | \[ u \frac{\partial v}{\partial \textbf{x}} + v \frac{\partial u}{\partial \textbf{x}} \] |                                                              |
  | \[ \frac{\partial g(u)}{\partial \textbf{x}} \] | \[ \frac{\partial g(u)}{\partial u} \frac{\partial u}{\partial \textbf{x}} \] |                                                              |
  | \[ \frac{\partial f(g(u))}{\partial \textbf{x}} \] | \[ \frac{\partial f(g(u))}{\partial g(u)} \frac{\partial g(u)}{\partial u} \frac{\partial u}{\partial \textbf{x}} \] |                                                              |
  | \[ \frac{\partial \textbf{a} \cdot \textbf{x}}{\partial \textbf{x}} \] | \[ \textbf{a}^T \]                       |                                                              |
  | \[ \frac{\partial \textbf{u} \cdot \textbf{v}}{\partial \textbf{x}} \] | \[ \textbf{u}^T \frac{\partial \textbf{v}}{\partial \textbf{x}} + \textbf{v}^T \frac{\partial \textbf{u}}{\partial \textbf{x}} \] | \[ \begin{bmatrix} \textbf{u} \cdot \frac{\partial \textbf{v}}{\partial x_1} & \cdots \ \textbf{u} \cdot \frac{\partial \textbf{v}}{\partial x_n} \end{bmatrix} + \begin{bmatrix} \textbf{v} \cdot \frac{\partial \textbf{u}}{\partial x_1} & \cdots \ \textbf{v} \cdot \frac{\partial \textbf{u}}{\partial x_n} \end{bmatrix} \] |
  | \[ \frac{\partial \textbf{u}^T \textbf{Av}}{\partial \textbf{x}} \] | \[ \textbf{u}^T \textbf{A} \frac{\partial \textbf{v}}{\partial \textbf{x}} +  (\textbf{Av})^T \frac{\partial \textbf{u}}{\partial \textbf{x}} \] |                                                              |
  | \[ \frac{\partial \textbf{x}^T \textbf{A} \textbf{x}}{\partial \textbf{x}} \] | \[ (\textbf{x}^T \textbf{A}) + ( \textbf{Ax} )^T = \textbf{x}^T(\textbf{A} + \textbf{A}^T) \] |                                                              |
  | \[ \frac{\partial \textbf{a}^T \textbf{x} \textbf{x}^T \textbf{b}}{\partial \textbf{x}} \] | \[ \textbf{x}^T (\textbf{ab}^T + \textbf{ba}^T) \] | Let $$ u = \textbf{a}^T \textbf{x} $$ and $$ v = \textbf{b}^T \textbf{x} $$ |
  |------------------------------------------+------------------------------------------+--------------------------------------------------------------|
  | $ \partial $ scalar                      | $ \partial $ Matrix                      |                                                              |
  |------------------------------------------+------------------------------------------+--------------------------------------------------------------|
  | \[ \frac{\partial a}{\partial \textbf{X}} ] | \[ \textbf{0}^\top \]                    |                                                              |
  | \[ \frac{\partial au}{\partial \textbf{X}} ] | \[ a \frac{\partial u}{\partial \textbf{X}} \] |                                                              |
  | \[ \frac{\partial u+v}{\partial \textbf{X}} ] | \[ \frac{\partial u}{\partial \textbf{X}} + \frac{\partial v}{\partial \textbf{X}} \] |                                                              |
  | \[ \frac{\partial uv}{\partial \textbf{X}} ] | \[ u \frac{\partial v}{\partial \textbf{X} } + v \frac{\partial u}{\partial \textbf{X}} \] |                                                              |
  | \[ \frac{\partial g(u)}{\partial \textbf{X}} ] | \[ \frac{\partial g(u)}{\partial u} \frac{\partial u}{\partial \textbf{X}} \] |                                                              |
  | \[ \frac{\partial g(\textbf{U}) }{\partial X_{ij}} \] | \[ \operatorname{tr} \left( \frac{\partial g(\textbf{U})}{\partial \textbf{U} } \frac{\partial \textbf{U}}{\partial X_{ij}} \right)  \] |                                                              |
  | \[ \frac{\partial \textbf{a}^\top \textbf{Xb}}{\partial \textbf{X}} \] | \[ (a^\top b)^\top = ba^\top \]          |                                                              |
  | \[ \frac{\partial \textbf{a}^\top \textbf{X}^\top\textbf{b}}{\partial \textbf{X}} \] | \[ ab^\top \]                            |                                                              |
  | \[ \frac{\partial (\textbf{Xa})^\top \textbf{C} ( \textbf{Xb} ) }{\partial \textbf{X}} \] | \[ a(\textbf{CXb})^\top + b (\textbf{Xa})^\top \textbf{C} \] | or \[ \left( \textbf{CXba}^\top + \textbf{C}^\top \textbf{X} ab^\top \right)^\top \] |
  |------------------------------------------+------------------------------------------+--------------------------------------------------------------|
  | \[ \frac{\partial \operatorname{tr}(\textbf{X}) }{\partial \textbf{X}} \] | \[ \textbf{I} \]                         |                                                              |
  | \[ \frac{\partial \operatorname{tr}(\textbf{U} + \textbf{V})}{\partial \textbf{X}} \] | \[ \frac{\partial \operatorname{tr}(\textbf{U})}{\partial \textbf{X} } + \frac{\partial \operatorname{tr}(\textbf{V})}{\partial \textbf{X}} \] |                                                              |
  | \[ \frac{\partial \operatorname{tr}(a \textbf{U})}{\partial \textbf{X} } \] | \[ a \frac{\partial \operatorname{tr}(\textbf{U})}{\partial \textbf{X} } \] |                                                              |
  | \[ \frac{\partial \operatorname{tr}(\textbf{AX})}{\partial \textbf{X}} = \frac{\partial \operatorname{tr}(\textbf{XA})}{\partial \textbf{X}} \] | \[ \textbf{A} \]                         |                                                              |
  | \[ \frac{\partial \operatorname{tr}(\textbf{AX}^\top)}{\partial \textbf{X}} = \frac{\partial \operatorname{tr}(\textbf{X}^\top \textbf{A})}{\partial \textbf{X}} \] | \[ \textbf{A}^\top \]                    |                                                              |
  | \[ \frac{\partial \operatorname{tr}(\textbf{X}^\top \textbf{AX})}{\partial \textbf{X}} \] | \[ \textbf{X}^\top (\textbf{A} + \textbf{A}^\top)\] |                                                              |
  | \[ \frac{\partial \operatorname{tr}(\textbf{X}^{-1}\textbf{A})}{\partial \textbf{X}} \] | \[ - \textbf{X}^{-1} \textbf{AX}^{-1} \] | Deduction see below:                                         |
  | \[ \frac{\partial \textbf{AXB}}{\partial \textbf{X}} = \frac{\partial \textbf{ABX}}{\partial \textbf{X} } \] | \[ \textbf{BA} \]                        |                                                              |
  | \[ \frac{\partial \textbf{AXBX}^\top \textbf{C} }{\partial \textbf{X}} \] | \[ \textbf{BX}^\top \textbf{CA} + (\textbf{CAXB})^\top \] |                                                              |
  | \[ \frac{\partial \operatorname{tr}(\textbf{X}^n) }{\partial \textbf{X}} \] | \[ n \textbf{X}^{n-1} \]                 | n is positive integer                                        |
  | \[ \frac{\partial \operatorname{tr}(\textbf{AX}^n) }{\partial \textbf{X}} \] | \[ \sum_{i=0}^{n-1}{\textbf{X}^i \textbf{AX}^{n-i-1}} \] |                                                              |
  | \[ \frac{\partial \operatorname{tr}(e^{\textbf{X}}) }{\partial \textbf{X} }\] | \[ e^{\textbf{X}}\]                      | \[ e^{\textbf{X}} = \sum_{i=0}^{\infty}{\frac{\textbf{X}^i}{i!}} \] |
  | \[ \frac{\partial \operatorname{tr}(\sin(\textbf{X}))}{\partial \textbf{X}} \] | \[ \cos(\textbf{X}) \]                   | $ \sin(\textbf{X}) $ are defined in a similar way.           |
  | \[ \frac{\partial \operatorname{tr}(\textbf{g}(\textbf{X})) }{\partial \textbf{X}} \] | \[ \textbf{g}'(\textbf{X}) \]            | $ \textbf{g}(\textbf{X}) $ is any polynomial with scalar coefficients, or any matrix function defined by an infinite polynomial series (e.g. $ e^{\textbf{X}},\, \sin(\textbf{X}),\, \cos(\textbf{X}),\, \ln(\textbf{X}) $, etc. using a Taylor series); $g(x)$ is the equivalent scalar function, $g'(x)$ is its derivative, and $\textbf{g}'(\textbf{X})$ is the corresponding matrix function. |
  |------------------------------------------+------------------------------------------+--------------------------------------------------------------|
  | \[ \frac{\partial \left\vert \textbf{X} \right\vert }{\partial \textbf{X}} \] | \[ \operatorname{cofactor}(\textbf{X})^\top = \left\vert \textbf{X} \right\vert \textbf{X}^{-1} \] | because \[ \frac{\partial \left\vert \textbf{X} \right\vert }{\partial X_{ij}} = \textbf{C}_{ij} \] and \[ \textbf{C}^\top \textbf{X} = \left\vert \textbf{X} \right\vert \textbf{I} \] |
  | \[ \frac{\partial \ln \left( \left\vert a \textbf{X} \right\vert \right) }{\partial \textbf{X}} \] | \[ \textbf{X}^{-1} \]                    |                                                              |
  |                                          |                                          |                                                              |


  To be continued.

  <https://math.stackexchange.com/a/190463/414321>
