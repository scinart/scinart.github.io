---
layout: post
title: "An approach of segment tree storage"
date: 2014-03-23 
timestamp: "2014-03-23 00:59:47 scinart"
categories: acm
tag:
comments: true
toc: false
cc: "by-nc-sa"

---

This method is originally designed by 杨弋, and my approach is a slight different version.

Let's say we have a zero indexed segment tree [0,N).

![img]({{ site.img_url }}/My-Segment-Tree-Example.png)

We want it to be stored in an array that is exactly of size 2N-1.

To be accurate, each node is stored at the index that is its in-order traversal index.

that is, ``[0,1)`` shall be stored in ``ARRAY[0]``, ``[1,2)`` shall be stored in ``ARRAY[2]``, etc.

Here I give an algorithm that I'll not give its proof, to calculate its index.

$$
indexof([m,n)) = (m+n-1) - (\text{leaf?}0\text{:}(m+n)\text{&}1)
$$

Thus each node is stored in ``ARRAY[0..2N-1)`` without conflict.
