---
layout: post
title: "Clipboard"
date: 2018-10-03 
timestamp: "2018-11-13 13:25:02 scinart"
categories: GT
published: false
comments: true
cc: "by-nc-nd"

---

UCB algorithm

+ Settings:

  + There is K different distributions governing rewards for K actions (arms).
  + Each distribution doesn’t change over time
  + At time $t$, algorithm select arm $i_t$, then reward is revealed as $X^{(t)}_i$, which is sampled i.i.d from distribution $\mathcal{D}_i$

  The best arm to choose is the $i^*$ that maximize reward $ {\displaystyle u_i = u(i) = \mathop{\operatorname{\mathbb{E}}}_{X \sim \mathcal{D}_i}{[X]} } $, a.k.a, the best arm in expectation.

+ Define regret

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

+ UCB1 intuition

  The idea is like this:

  Without loss of generosity, suppose that #1 is the best arm.

  As we explore, by hoeffing's inequality, with a very high probability, estimated cost is similar to real expected cost.

  Suppose we choose a tuning parameter $ε$, at time $t$, suppose algorithm choose arm $i_t ≠ 1$, then consider the following events:

  + $ S^{(t)}_1: \hat{u_1} < u_1 - ε $, which is, the estimated $\hat{u_1}$ is very low
  + $ L^{(t)}_ {i_t}: \hat{u_{i_t}} > u_{i_t} + ε $ which is, the estimated $\hat{u_{i_t}}$ is very high

  These events are less and less likely to occur as we play. So we want to bond to things:

  + #times $S_1$ or $L_{i_t}$ occurs.
  + total loss when this events do not occur.

  There is one technical issue, which is that, when applying the Heoffding's inequality, the $N$ is changing (see following) 

  Suppose at time $t$ algorithm choose $i_t$, and $i_t$ has been choosen $ N^{(t)}_{i_t}$ times, by Hoeffding's inequality:
  
  $$
  \mathop{\operatorname{Pr}}(\hat{u_j} < u_j - ε ) < e^{-2N_jε^2} \\
  \mathop{\operatorname{Pr}}(\hat{u_j} > u_j + ε ) < e^{-2N_jε^2}
  $$

  I'm not thinking thoroughly now what will occur if we choose to optimize $\epsilon$, but they use a variable exchange.

+ Algorithm (somehow different from the original)
  
  let $\delta = e^{-2N_jε^2}$

  $$
  \mathop{\operatorname{Pr}}(\hat{u_j} < u_j - \sqrt{\frac{\log \frac{1}{\delta}}{2N_j}} ) < \delta \\
  \mathop{\operatorname{Pr}}(\hat{u_j} > u_j + \sqrt{\frac{\log \frac{1}{\delta}}{2N_j}} ) < \delta
  $$

  Now redefine event (smaller, larger)

  $$
  \mathop{\operatorname{Pr}}(S_j: u_j < \hat{u_j} - \sqrt{\frac{\log \frac{1}{\delta}}{2N_j}}) < \delta \\
  \mathop{\operatorname{Pr}}(L_j: u_j > \hat{u_j} + \sqrt{\frac{\log \frac{1}{\delta}}{2N_j}}) < \delta
  $$

  for time t from 1 to T,

  + First consider the event $ S^{(t)}_1 ∨ L^{(t)} _ {i_t}$ occurs.

    this means that we highly underestimate the best arm $u_1$ or highly overestimate arm $i_t$,
    we suffer loss at most 1. (since loss defined to be in $0\leq \text{loss} \leq 1$).
    So the expected loss, under this case, is $2T\delta$

  + Now consider the step where the event doesn't occur.

    How should we pick.

    <div>
    <pre id="UCB1-algorithm" class="render-pseudocode" style="display:none">
      \begin{algorithm}
      \caption{UCB1}
      \begin{algorithmic}
        \STATE $ \text{Initialize: play each arm once} $
        \STATE $ \text{let } n \text{ be the number of times we played.} $
        \STATE $ \text{For each action } j \text{ record the average reward } \bar{x}_j $
        \STATE $ \text{For each action } j \text{ record the number of times we played as } n_j $
        \WHILE {$ \text{True} $}
          \STATE $ \text{play arm that maximize } \bar{x}_j + \sqrt{\frac{\log \frac{1}{\delta}}{2N_j}} $
        \ENDWHILE
      \end{algorithmic}
      \end{algorithm}
    </pre>
    </div>

    Suppose our algorithm choose $i_t$ at time t

    $$
    u_1 < \hat{u_1} + \sqrt{\frac{\log \frac{1}{\delta}}{2N_1}} < \hat{u_{i_t}} + \sqrt{\frac{\log \frac{1}{\delta}}{2N_{i_t}}} < u_{i_t} + 2\sqrt{\frac{\log \frac{1}{\delta}}{2N_{i_t}}}
    $$

    + Explain:

      + The first inequality means $S^{(t)}_1$ doesn't occur.
      + The second is by our algorithm
      + The third inequality means $L^{(t)}_{i_t}$ doesn't occur.

    Now we have

    $$
    Δ_{i_t} = u_1 - u_{i_t} < 2\sqrt{\frac{\log \frac{1}{\delta}}{2N_{i_t}}}
    $$

    This is nice, since when we pick, we always pick the one with highest optimistic value, but as $N_{i_t}$ goes up, confidence interval of $i_t$ shrinks.
    So we will not choose $i_t$ after certain steps.

    $$
    Δ_{i_t} = u_1 - u_{i_t} < 2\sqrt{\frac{\log \frac{1}{\delta}}{2N_{i_t}}} \\
    \implies \left( \frac{Δ_{i_t}}{2} \right)^2 < \frac{\log \frac{1}{\delta}}{2N_{i_t}} \\
    \implies N_{i_t} < \frac{2\log \frac{1}{\delta}}{Δ_{i_t}^2} \\
    $$

    The maximum loss possible of arm k will be:

    $$
    \sum_{i=1}^{\lfloor {2\log \frac{1}{\delta}} / {Δ_k^2} \rfloor}{2\sqrt{\frac{\log \frac{1}{\delta}}{2}} \sqrt{\frac{1}{i}}}
    $$

    Using calculus we know that

    $$
    \sum_{i=1}^{n} \sqrt{\frac{1}{i}} \leq 1 + \int_{1}^{n}{\sqrt{\frac{1}{x}} \mathop{\operatorname{dx}}} = 1 + 2\sqrt{n}
    $$

    So, 

    $$
    \sum_{i=1}^{\lfloor {2\log \frac{1}{\delta}} / {Δ_k^2} \rfloor}{2\sqrt{\frac{\log \frac{1}{\delta}}{2}} \sqrt{\frac{1}{i}}} < 2\sqrt{\frac{\log \frac{1}{\delta}}{2}}{\left(1+2\sqrt{\lfloor {2\log \frac{1}{\delta}} / {Δ_k^2} \rfloor}\right)} \approx 4 \log(1/\delta) / Δ_k
    $$

  So, the total regret expected is

  $$
  \mathop{\operatorname{\mathbb{E}}}[\mathop{\operatorname{Regret}_T}] \lessapprox K + 2Tδ + \sum_{k=2}^{K}{4\log(1/δ)/Δ_k}
  $$

  Setting $δ = 1/T$, we get something like $\sum_{k=2}^{K}{O(\log(T))/Δ_k}$

  My teacher said that factor $1/Δ_k$ is inevitable somehow..., by some theory...

