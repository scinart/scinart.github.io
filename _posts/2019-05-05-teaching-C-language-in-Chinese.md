---
layout: post
title:  "呆呆讲C语言"
date: "2019-05-05 12:23:18"
timestamp: "2019-05-15 19:43:57 mama"
categories: linux
comments: true
cc: "by-sa-cn"

---


# FAQ:

这不是入门教程，但是没有基础的人也可以直接看！最好找到你能找到的最好的入门教程，感到一知半解时就可以来看了！

* 为什么要做新的教程

  现有教程讲的不够深入
* 目标人群

  想把C语言学好的人。
* 更新地址

  https://scinart.github.io/linux/2019/05/05/teaching-C-language-in-Chinese.html

* 我会讲的内容：

  必要的逻辑电路，计算机组成原理，汇编语言，C语言，操作系统，SMP

* 我不会讲的内容：

  TCP/IP什么的。

* 使用须知：

  请尽量使用*Nix系统(包括Mac, Linux, Unix, 各种BSD)，小白Windows用户请使用Virtualbox安装Linux虚拟机(如Ubuntu)

# 第0章 数学基础

#### k进制

  <https://zhuanlan.zhihu.com/p/33439000>

  让一些符号代表自然数(ℕ+)(比如૦૧૨૩૪૫૬૭૮૯代表前十个自然数)，我们把这些数字连起来写，来表示更大的数字，比如૧૨૩૪就表示一千二百三十四

  如果我们用k个符号表示0~(k-1)这些数字，用abc连起来写表示$$a*k^2 + b*k^1 + c$$, 就叫做k进制。

  在计算机世界中，常用的有十六进制，十进制，八进制，二进制。用0123456789ABCDEF (或0123456789abcdef) 来表示前十六个自然数。

  为了将不同的进制分开，可以在数字后面加上括号，里面用十进制写这个数字是用多少进制表示的。

  例如：22(16)，代表16进制，它的值为三十四。110(2)代表二进制，它的值为六。

  在计算机领域，通常用0b表示二进制，0o表示八进制，0x表示十六进制，不写表示十进制加以区分。

  比如，0x0a表示十，0x0d表示十三，0xff表示二百五十五

  习题：1. 如何将一个十进制的数字转化成二进制？2. 如何快速的将一个十六进制的数字转化成二进制，如何快速的将一个八进制的数字转化成二进制，快速的将一个十六进制的数字转化成八进制呢？

#### 布尔代数

  为什么叫做布尔代数？我也不知道。。。

  在集合{0,1}上规定

  1. 二元运算"或"∨: 0∨0=0, 0∨1=1, 1∨0=1, 1∨1=1;
  2. 二元运算"与"∧: 0∧0=0, 0∧1=0, 1∧0=0, 1∧1=1;
  3. 二元运算"异或"⊻: 0⊻0=0, 0⊻1=1, 1⊻0=1, 1⊻1=0;
  4. 一元运算"非"¬: ¬0=1, ¬1=0;

  嗯知道这些就够了。 

  举几个例子：

  若x=0, y=1, 则

  1. x ∧ y = 0
  2. x ∨ y = 1
  3. ¬x = 1
  4. ¬y = 0
  5. a ⊻ (b ⊻ c) = (a ⊻ b) ⊻ c
  6. a ∧ (b ∨ c) = (a ∧ b) ∨ (a ∧ c)
  7. ¬(a ∧ b) = ¬a ∨ ¬b
  8. ¬(a ∨ b) = ¬a ∧ ¬b
  9. 三个人，多数表决器？ f(a,b,c) = (a ∧ (b ∨ c))  ∨ (¬a ∧ (b ∧ c))

# 第1章 背景知识：

## 逻辑电路

  计算机中的0,1是用电压表示的，高电压(如2.5~5V)表示1，低电压(如0~2.5V)表示0。(这里只是举例，你也可以让低电压代表1)

  1. 与门(AND gate)，符号![and gate img](https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/AND_ANSI.svg/150px-AND_ANSI.svg.png){:height="50px"}：一个电路组件，两根线输入，一根线输出，当两根线输入都是高电压时，输出为高电压，否则输出为低电压。
  2. 或门(OR gate)，符号![or gate img](https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/OR_ANSI_Labelled.svg/180px-OR_ANSI_Labelled.svg.png){:height="50px"}：一个电路组件，两根线输入，一根线输出，当两根线输入都是低电压时，输出为低电压，否则输出为高电压。
  3. 非门(NOT gate)，符号![not gate img](https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/NOT_ANSI_Labelled.svg/180px-NOT_ANSI_Labelled.svg.png){:height="50px"}：一个电路组件，一根线输入，一根线输出，当输入是低电压时，输出为高电压，否则输出为低电压。

  (输入只能高电压和低电压二者之一)

  这样门电路就和布尔代数对应上了。

  至于电路是如何实现不做讲解，这门课叫做模拟电路，具体例子见[这里](https://blog.csdn.net/yedongnan001/article/details/79471329)，  
  但是更暴力一点的方法是与门可以用继电器实现，比如与门可以这样实现 ![img](https://upload.wikimedia.org/wikipedia/commons/6/6e/Relay_and.svg)

  为了完整性，再介绍几个其他的门：

  异或门 (XOR gate) ![xor gate img](https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/XOR_ANSI_Labelled.svg/180px-XOR_ANSI_Labelled.svg.png){:height="50px"}

  与非门 (NAND gate) ![nand gate img](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/NAND_ANSI_Labelled.svg/180px-NAND_ANSI_Labelled.svg.png){:height="50px"}, a NAND b = NOT (a AND b)

  或非门 (NOR gate) ![nor gate img](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/NOR_ANSI_Labelled.svg/180px-NOR_ANSI_Labelled.svg.png){:height="50px"}, a NOR b = NOT (a OR b)

  同或门 (XNOR gate) ![xnor gate img](https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Xnor-gate-en.svg/417px-Xnor-gate-en.svg.png){:height="50px"}, a XNOR b = NOT (a XOR b)

#### 全加器(full adder)

  有了门电路，我们就可以制作一个全加器了，

  ![1-bit full adder](https://en.wikipedia.org/wiki/File:1-bit_full-adder.svg)

  设a,b,c,x,y表示二进制的一位数，制作电路接受输入为a,b,c，令输出x,y的值符合a+b+c = x*2+y，则这个电路就是一个半加器。

  怎么实现呢？很简单

  y = a ⊻ b ⊻ c;
  x = (a ∧ (b ∨ c))  ∨ (¬a ∧ (b ∧ c)); 见三人多数表决器

#### 多位数全加器(full adder)

  直接上图了。
  ![4-bit full adder](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/4-bit_ripple_carry_adder.svg/330px-4-bit_ripple_carry_adder.svg.png)

  当然这是最简单的全加器了。计算机中的各种运算单元，如加法单元，乘法单元，都是由这些电路实现的。

#### SR锁存器 (SR latch) (Set-Reset latch)

  直接上图了
  ![SR latch img](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/R-S_mk2.gif/330px-R-S_mk2.gif)

  当然这只是一个例子，实际工程什么样我也不知道。


#### 结语：

  实际应用中，所有的逻辑都是通过电路实现，对这方面感兴趣的同学，可以找本关于数字逻辑的书学。

# 第2章 汇编语言

  先来看个小程序，别慌，讲解在后面。 

      #include <stdio.h>
      int main() {
          asm (
               "movl $5, %eax\n\t" // a number
               "movl $0, %esi\n\t" // counter
               "jmp BEGIN\n\t"
               "ODD: imull $3, %eax\n\t"
               "inc %eax\n\t"
               "jmp BEGIN\n\t"
               "EVEN: shrl $1, %eax\n\t"
               "BEGIN:"
               "cmpl $1, %eax\n\t"
               "jle EXIT\n\t"
               "inc %esi\n\t"
               "test $1, %eax\n\t"
               "jz EVEN\n\t"
               "jmp ODD\n\t"
               "EXIT: movl %eax, %edx\n\t"
              );
          printf("it takes %d iteration to become %d\n");
          return 0;
      }

  指令和数据都是数字


      movl $5, %eax: b8 05 00 00 00
      movl $0, %esi: be 00 00 00 00
      jmp BEGIN:     e9 0c

  此处有讲解

  ![inside cpu](/assets/images/c/Figure-5.9-CPU_Register.jpg)

  此处讲解内存存取指令

  此处讲解push pop

  此处讲解call ret

  此处讲解ebp

  此处讲解函数调用约定

# 第3章 C语言

  汇编语言是低级语言，因为，写个简单的程序就要很多行代码。C语言是高级语言，虽然它是很“笨”的高级语言，但是写起来方便多了。

  以上代码用C写，就变成了。

      #include <stdio.h>
      int main() {
          int x=5, counter=0;
          while(x>1) {
              counter++;
              x = (x&1)?3*x+1:x/2;
          }
          printf("it takes %d iteration to become %d\n", counter, x);
          return 0;
      }

  此处讲解基本语法，递归等。

# 第4章 编译，链接

  参考 https://www.cnblogs.com/catch/p/3857964.html

# 第5章 一些操作系统的知识

  分页，上下文切换，虚拟地址，中断

# 第6章 SMP, Cache coherence and Memory consistency
