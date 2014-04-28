---
layout: post
title: "论gcc对C语言各种高大上的扩展"
date: 2014-04-28
timestamp: "2014-04-29 12:38:48 scinart"
categories: C
tag: tips
comments: true
toc: no
cc: "by-nc-sa"

---

<pre class="hljs">
#include &lt;ctype.h&gt;
#include &lt;stdio.h&gt;

#define MIN(x,y)            \
    ({                      \
        typeof(x) _x = (x); \
        typeof(y) _y = (y); \
        (void) (&amp;_x == &amp;_y); \
        _x < _y ? _x : _y;  \
    })
// void 一句检查参数x和y的类型是否相同
// 用括号将复合语句括起来也形成了表达式。你在一个表达式内允许使用循环，跳转和局部变量。
// http://gcc.gnu.org/onlinedocs/gcc/Statement-Exprs.html

#define showprintf(format, args...) printf("With args " #args " output is " format, ##args)
// Stringification
// see http://gcc.gnu.org/onlinedocs/cpp/Stringification.html
// Concatenation
// http://gcc.gnu.org/onlinedocs/cpp/Concatenation.html
// Variadic-Macros
// http://gcc.gnu.org/onlinedocs/cpp/Variadic-Macros.html

#define likely(x)       __builtin_expect((x),1)
#define unlikely(x)     __builtin_expect((x),0)
// http://stackoverflow.com/questions/109710/likely-unlikely-macros-in-the-linux-kernel
// http://gcc.gnu.org/onlinedocs/gcc/Other-Builtins.html

int main()
{
    switch('c')
    {
        // http://gcc.gnu.org/onlinedocs/gcc/Case-Ranges.html
      case '0'...'9':
      {
          printf("isnum\n");
          break;
      }
      case 'A'...'Z':
      case 'a'...'z':
      {
          printf("isalpha\n");
          break;
      }
    }

    int array_len = 10;
    // http://gcc.gnu.org/onlinedocs/gcc/Variable-Length.html
    int array[array_len];
    int intarray [10] = { [0 ... 4] = 0 , [5 ... 9] = 1};
    // http://gcc.gnu.org/onlinedocs/gcc/Designated-Inits.html

    int i;
    for(i=0; i<10; i++)
    {
        printf("%d", intarray[i]);
    }
    printf("\n");

    // see http://stackoverflow.com/questions/597078/file-line-and-function-usage-in-c
    // other predefined macros see http://gcc.gnu.org/onlinedocs/cpp/Standard-Predefined-Macros.html
    showprintf("FUNCTION: %s, FILE: %s, LINE: %d\n", __func__, __FILE__, __LINE__);

    int ia = 5;
    int ib = 8;

    showprintf("%d %d\n",ia?:ib, MIN(ia,ib));
    //http://gcc.gnu.org/onlinedocs/gcc/Conditionals.html

    // http://acl.readthedocs.org/en/latest/zhCN/ch1-cn.html#new-tools
    // ; Lisp
    // (defun addn (n)
    //   #'(lambda (x)
    //       (+ x n)))

    //nested function, see http://gcc.gnu.org/onlinedocs/gcc/Nested-Functions.html
#if defined(__clang__)
#elif defined(__GNUC__)
    typedef int (*int2int)(int);
    int2int addn(int n){int ret(int x){return x+n;}; return ret;}

    showprintf("%d\n", addn(5)(8));
#else
#endif

    // other C-Extensions see http://gcc.gnu.org/onlinedocs/gcc/C-Extensions.html

    // GCC的__attribute__机制 ==> http://blog.csdn.net/kee131/article/details/24291229

    return 0;
}
</pre>

