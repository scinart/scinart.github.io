---
layout: post
title: "Clipboard"
date: 2018-10-03 
timestamp: "2018-11-13 11:43:48 mama"
categories: GT
published: false
comments: true
cc: "by-nc-nd"

---

UCB algorithm

Settings:

+ There is a different distribution governing rewards for each action.
+ Each distribution doesn’t change over time
+ We have K actions (arms), at time $t$, algorithm select arm $i$, then reward is revealed as $X^{(t)}_i$, which is sampled i.i.d from distribution $\mathcal{D}_i$

The best arm to choose is the $i^*$ that maximize reward $ {\displaystyle u(i) = \mathop{\operatorname{\mathbb{E}}}_{X \sim \mathcal{D}_i}{[X]} } $, a.k.a, the best arm in expectation.

Define regret

$$
\mathop{\operatorname{Regret}}_T = Tu(i^*) - \sum_{t=1}^{T}{X^{(t)}_{i_t}}
$$

which is the reward we lost by not following the best policy.

+ [Example](https://www.cs.bham.ac.uk/internal/courses/robotics/lectures/ucb1.pdf): So let’s take the action with the highest average reward directly.

  + Assume two actions.
  + Action 1 has reward of 1 with probability 0.3 and otherwise has reward 0f 0.
  + Action 2 has reward of 1 with probability 0.7 and otherwise has reward of 0.
  + Play action 1, get reward of 1.
  + Play action 2, get reward of 0.
  + Now average reward of action 1 will never drop to 0, so we’ll never play action 2

  + This illustrates a classic problem, which is the defining characteristic of decision making:
  + the trade-off between exploring and exploiting.
  + Exploring means to try new actions to learn their effects.
  + Exploiting means to try what we know has worked in the past.
  + The algorithm above does not explore sufficiently.

<pre id="UCB1-algorithm" class="render-pseudocode" style="display:none">
  \begin{algorithm}
  \caption{UCB1}
  \begin{algorithmic}
    \STATE $ \text{Initialize: play each arm once} $
    \STATE $ \text{let } n \text{ be the number of times we played.} $
    \STATE $ \text{For each action } j \text{ record the average reward } \bar{x}_j $
    \STATE $ \text{For each action } j \text{ record the number of times we played as } n_j $
    \WHILE {$ \text{True} $}
      \STATE $ \text{play arm that maximize } \bar{x}_j + \sqrt{\frac{2 \ln n}{n_j}} $
    \ENDWHILE
  \end{algorithmic}
  \end{algorithm}
</pre>

The idea is like this:

Without loss of generosity, suppose that #1 is the best arm.

As we explore, by hoeffing's inequality, with a very high probability, estimated cost is similar to real expected cost.

Suppose we choose a tuning parameter $ε$, at time $t$, suppose algorithm choose arm $i_t ≠ 1$, then consider the following events:

+ A. $ \hat{u_1} > u_1 - ε $, which is, the estimated $\hat{u_1}$ is not very low
+ B. $ \hat{u_{i_t}} < u_{i_t} + ε $ which is, the estimated $\hat{u_{i_t}}$ is not very high

We want to consider these event seperately. Try to limit to number that A or B fails, and also limit the number when A and B both occur.

This is feasible because that, as we sample, the probability of A or B fails will decay, and when A and B holds, we can pick the wrong $ u_{i_t} $ for only a certain amount of times, which stops when $2ε<(u_1 - u_{i_t})$

There is one technical issue, which is that, when applying the Heoffding's inequality, there will be an $N$ on the denominator.

I'm not thinking thoroughly now what will occur if we choose to optimize $\epsilon$, but they use a variable exchange.

Suppose at time $t$ algorithm choose $i_t$, and $i_t$ has been choosen $ N^{(t)}_{i_t}$ times, by Hoeffding's inequality:

$$
\mathop{\operatorname{Pr}}(\hat{u_j} < u_j - ε ) < e^{-2N_jε^2}
$$

let $\delta = e^{-2N_jε^2}$

$$
\mathop{\operatorname{Pr}}(\hat{u_j} > u_j - \sqrt{\frac{\log \frac{1}{\delta}}{2N_j}} ) < \delta
$$

