---
layout: post
title: "Common lisp 简单爬虫"
date: 2014-06-14
timestamp: "2014-06-14 23:26:59 scinart"
categories: lisp
tag: lisp
comments: true
toc: true
cc: "by-nc-sa"

---

这篇文章介绍了我写的一个包，可以用来爬虫用。  
代码请见<https://github.com/scinart/net>

### how to load this package.
see [Quicklisp: How to load a local project](http://www.quicklisp.org/beta/faq.html#local-project)

### function wget

(没想出来叫什么好，就叫wget吧)

<pre class="hljs">
(defun wget (url &rest args)
  "url is a string
result stored in global variable of package net"
  (multiple-value-bind (body status-code headers URI stream should-be-closed reason)
      (apply #'drakma:http-request url :additional-headers *extra-headers* :external-format-in :utf-8 args)
    (setf *body* body
	  *status* status-code
	  *headers* headers
	  *URI* URI
	  *stream* stream
	  *closed* should-be-closed
	  *reason* reason)
    body))
</pre>
  利用dramka读取网页并将七个结果存在包内变量中  
  注意到 **\*extra-headers\*** 这个变量，你可以在这设置cookies

### function parse

  利用[Closure HTML](http://common-lisp.net/project/closure/closure-html/)将网页变成表形式  
  就像这样``(:HTML NIL (:HEAD NIL) (:BODY NIL (:P NIL "nada")))``

<pre class="hljs">
(defun parse (body-string)
  (chtml:parse body-string (chtml:make-lhtml-builder)))
</pre>

### function find-node
<pre class="hljs">
(defun (find-node list filter selector)
  "find all subtrees that 
   1. (filter subtree) is true
   2. no parent of it satisfies (filter subtree)
  a.k.a. find all outermost subtree that satisfies filter.)
</pre>

Example：(ql:quickload :cl-utilities)

<pre class="hljs">
(find-node (parse (wget "http://bbs.nankai.edu.cn/group/view/1?page=1"))
	   #'(lambda (x) (and (listp x)
		       (eq :div (first x))
		       (listp (cadr x))
		       (listp (caadr x))
		       (eq :class (caaadr x))
		       (listp (cdaadr x))
		       (string-equal "article_title" (car (cdaadr x)))
		       (= 5 (length x))
		       ))
	   (cl-utilities:compose #'second #'second #'second #'fourth))
</pre>

<pre class="hljs">
&lt;div class="article_title"&gt;
  &lt;a target="_blank" href="http://bbs.nankai.edu.cn/group/article/197148"&gt;
  【出售】【全新】托业英语考试书
  &lt;/a&gt;
&lt;/div&gt;
</pre>

parse =>

<pre class="hljs">
(:DIV ((:CLASS "article_title")) "
  "
      (:A
       ((:TARGET "_blank")
        (:HREF "http://bbs.nankai.edu.cn/group/article/197148"))
       "
  【出售】【全新】托业英语考试书
  ")
      "
")
</pre>

这些多余的空白字符串我还不知道怎么去掉。总之，find-node的第二个参数将网页中这个部分选出来，第三个参数把那个
``"http://bbs.nankai.edu.cn/group/article/197148"``选了出来。由find-node的documentation部分吧。我尽量写明白了。

### Crawl Example

<pre class="hljs">
;; Get all post links of Nankai BBS Used exchange forum
(with-open-file (file "test.txt"
                      :direction :output
                      :if-exists :append
                      :if-does-not-exist :create)
  (loop for page from 1 upto 1 do
       (loop for i in (find-node (parse (wget (concatenate 'string
                                                           "http://bbs.nankai.edu.cn/group/view/"
                                                           "1" ;;Used exchange group
                                                           "?page="
                                                           (write-to-string page))))
                                 #'(lambda (x) (and (listp x)
                                             (eq :div (first x))
                                             (listp (cadr x))
                                             (listp (caadr x))
                                             (eq :class (caaadr x))
                                             (listp (cdaadr x))
                                             (string-equal "article_title" (car (cdaadr x)))
                                             (= 5 (length x))
                                             ))
                                 (cl-utilities:compose #'second #'second #'second #'fourth))
          do (format file "~A~%" i) finally (print page))))
</pre>

<pre class="hljs">
(defun set-cookie (str)
  (setf *cookie* str)
  (setf *extra-headers* `(("Cookie" . ,*cookie*)
			  ("Host" . "bbs.nankai.edu.cn")
			  ("Connection" . "keep-alive")
			  ("User-Agent" . "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:29.0) Gecko/20100101 Firefox/29.0"))))

</pre>

### cookies or post

<pre class="hljs">
(setf net:*extra-headers* `(("Cookie" . "YOUR COOKIE")
                            ("Host" . "www.example.com")
                            ("Connection" . "keep-alive")
                            ("User-Agent" . "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:29.0) Gecko/20100101 Firefox/29.0")))

(let ((post `(("user" . "scinart")
              ("page" . "1"))))
    (wget "http://www.example.com/"
          :content-type "application/x-www-form-urlencoded"
          :method :post
          :parameters post))
</pre>

### 编码问题

在defun wget时我使用了utf-8，如果对那些gbk的网页很可能返回二进制流(octet)  
这时使用(babel:octets-to-string octets :encoding :gbk)就可以了。

