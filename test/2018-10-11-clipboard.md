---
layout: post
title:  "XX YY ZZ"
date: 2018-10-19
timestamp: "2018-10-31 01:36:24 scinart"
categories: markdown
comments: true
toc: true
cc: "by-nc-sa"

---

+ Test

  ~~~c++
  int main(int argc, char* argv[], char* envp[])
  {
      return 0;
  }
  ~~~

+ Test2

  <pre id="EXP3-alg" class="render-pseudocode" style="display:none">
    \begin{algorithm}
    \caption{EXP3-Abernethy}
    \begin{algorithmic}
      \STATE $\boldsymbol{w}^0 = \boldsymbol{1}$ \COMMENT{Weight vector, N 1s}
      \FOR{$t = 1$ \TO $T$}
        \STATE $p_i^t = \frac{w_i^t}{\sum_{i=1}^{N}{w_i^t}}$
        \STATE $\text{Sample } I_t \sim \boldsymbol{p}^t$ \COMMENT{ Index at time t}
        \STATE $\text{Observe } \ell_{I_t}^t $
        \STATE $\text{Estimate } \hat{\boldsymbol{\ell}}^t = \begin{bmatrix} 0,0,\cdots,0,\frac{\ell^t_{I_t}}{p^t_{I_t}},0,\cdots,0 \end{bmatrix}^\top $
        \COMMENT {Note: \textbf{unbiased} estimate since $\mathop{\operatorname{\mathbb{E}}}{[\hat{\boldsymbol{\ell}}^t]} = \boldsymbol{\ell}^t$}
        \STATE $ \boldsymbol{w}^{t+1} = \boldsymbol{w}\, .* \exp {-\eta \hat{\boldsymbol{\ell}}^t } $ \COMMENT {element wise product, eq to $w_i^{t+1} = w_i^t e^{-\eta \ell_i^t}$}
      \ENDFOR
    \end{algorithmic}
    \end{algorithm}
  </pre>
