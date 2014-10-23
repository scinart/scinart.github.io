---
layout: post
title: "刷面试题"
date: 2014-04-07
timestamp: "2014-09-27 21:13:15 scinart"
categories: acm
tag:
comments: true
toc: false
cc: "by-nc-sa"

---

### 操作系统

[什么是优先级反转+有何危害+如何避免和解决](http://www.crifan.com/task_thread_schedule_what_is_priority_inversion_and_hazardous_and_solution/)
[操作系统中的进程与线程](http://www.cnblogs.com/CareySon/archive/2012/05/04/2482134.html)


### C++

[C++ 虚函数表解析](http://blog.csdn.net/haoel/article/details/1948051)


### Graph

[Bellman-Ford method](http://www.cnblogs.com/AbandonZHANG/archive/2012/08/12/2610833.html)

### 题都是从网上找的。

##### 定义栈的数据结构，要求添加一个min函数，能够得到栈的最小元素。要求函数min、push以及pop的时间复杂度都是O(1)。#####

来源： 06 google

思路：

<hidden>
如果考虑内存分配的话，push和pop只能做到amortized cost是O(1)，见CLRS第17章. <br/>
然后就是用satellite data的方法。<br/>
Stack 有属性index指向当前最小。<br/>
考虑三元组<Type, bool, int>，其中Type是stack中放的数据，bool是当前元素在栈顶时是否为最小，int是pop当前元素之后最小值的位置。<br/>
</hidden>


##### 给定数组，求子数组的和最大的那个数组之和

等价描述： 给定A[0..N) 求 max { A[i..j) | 0<=i<j<=N }

来源： 05 zju

思路：

<hidden>
设A[p..q)是最大的，那么一定有A[i..p)<0 和 A[j..q)<0。所以<br/>
...... 代码好想不想写，就不写了。<br/>
简而言之，从前向后加，一旦小于0，置零重新加，数组全负特殊处理。
</hidden>

##### 给定一个整数数组，判断该数组是不是某二元查找树的后序遍历的结果。

来源： trilogy

思路：

<hidden>
设给定数组为A[0..N) <br/>
从头向尾扫描，一旦发现有后者小于前者，就判断后者，前者，前前者是不是一个符合后序遍历，若是，就删除前前者和前者，再从头扫，最后只剩一个点就对了。

由均摊分析，每个元素最多被删除一次，比较两次，入栈时用一次，出栈时用一次，其他情况用别人的。空间用栈，O(N)，时间O(N);
</hidden>

##### 最小三元组距离

来源： 13 alibaba

已知三个升序整数数组a[l],b[m]和c[n]。请在三个数组中各找一个元素，是的组成的三元组距离最小。三元组的距离定义是：假设a[i]、b[j]和c[k]是一个三元组，那么距离为:

    Distance = max( |a[i]-b[j]| , |a[i]-c[k]| , |b[j]-c[k]| )

请设计一个求最小三元组距离的最优算法，并分析时间复杂度。

解见<http://blog.csdn.net/thebestdavid/article/details/11975809>
