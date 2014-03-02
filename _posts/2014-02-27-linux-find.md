---
layout: post
title: "Linux Find 查找文件"
date: 2014-02-27 20:55:28
timestamp: "2014-02-28 23:23:59 scinart"
categories: linux
tag: linux-command
comments: true
toc: false
cc: "by-nc-sa"

---
## find (GNU findutils) 4.4.2

### find [-H] [-L] [-P] [-Olevel] [-D ... ] [path...] [expression]

##### find {-H | -L | -P}* 这组是find是否follow symbolic link的。它们同时出现时，后者覆盖前者。
<ul>
<li>-H除命令行参数，不follow</li>
<li>-L follow</li>
<li>-P never follow</li></ul>

##### find [-Olevel] 是优化等级，默认0级与1级是一样的。这部分看man find可以看懂。

##### find [-D ...] 调试的，不知道是做什么的。而且查了半天也查不到，谁知道麻烦告诉我啊。

#### find [path...] [expression] [path...] 说明可以接多个，默认路径是当前目录，默认表达式是-print

例：
    find dir1 dir2 -name "*.txt" -print

### 表达式可以是options, tests, actions或operators

#### operators (降优先级序; 默认是-and): 有短路规则

* ( EXPR )
* ! EXPR  -not EXPR
* EXPR1 -a EXPR2	EXPR1 -and EXPR2
* EXPR1 -o EXPR2	EXPR1 -or EXPR2
* EXPR1 , EXPR2

  All these parameters have an impact on the following expressions. But what if you want to have all expressions evaluated, regardless of whether an earlier one has succeeded or failed? For this, find provides the comma operator:
However, only the output of the last command is returned, but the first is evaluated anyway.

  **在使用中``()``和``!``都需要用``\``转义**

#### positional options (always true):

* -daystart

  从今天的0时开始计算atime, ctime, mtime的时间。  
  从今天的24时计算amin, cmin, mmin的时间。  
  见atime, amin.
* -follow

  过时了，用-L吧。Dereference symbolic links.的意思。
* -regextype type

  Changes the regular expression syntax understood by -regex and -iregex tests which occur later on the command line.   Currently-implemented types are emacs (this is the default), posix-awk, posix-basic, posix-egrep and posix-extended.

#### normal options (always true, specified before other expressions):

* -depth
* --help 帮助
* -maxdepth LEVELS
* -mindepth LEVELS
* -mount
* -noleaf
* --version 版本
* -xdev
* -ignore_readdir_race
* -noignore_readdir_race

#### tests (N can be +N or -N or N):


+N 相当于N+1, N+2, …

-N 相当于0, 1, …, N-1

* -amin N

  $$ atime \in [X-N(min), X-N(min)+1min] $$ 的文件。

    **其中如果指定-daystart, X = 今天的24点，否则，X = 此刻。**
* -anewer FILE

  见-newer FILE
* -atime N

  $$\color{red}{-atime\,N的意思是以X为基准计算， atime \in [X-N*24h, X-N*24h+24h] 的文件。} $$
  
  **其中如果指定-daystart, X = 今天的零点，否则，X = 昨天的此刻。**

  **所以，通常意义上的“两天前”的文件，是2×24小时以前那一时刻所属的那天的文件，应该用``-daystart -atime 2``来指明，两天内，应该用``-daystart -atime -3``(相当于2(前天的),1(昨天的),0(今天的))**

  **过去24小时内的，应该用``-atime 0``来指明。**

* -cmin N

  见-amin N
* -cnewer FILE

  见-newer FILE
* -ctime N

  见-atime N
* -empty

  文件或目录是空的
* -false

  永远为假
* -fstype TYPE

  file处于type类型的文件系统上。

  你可以用find -printf "%F"打印文件所处的文件系统。
* -gid N

  文件的group ID是N
* -group NAME

  文件的group name是NAME
* -ilname PATTERN
* -iname PATTERN
* -inum N
* -iwholename PATTERN
* -iregex PATTERN
  
  以上以i开头的是大小写不敏感的意思，见相应条目。
* -links N

  File has N links.

  一个文件的links是什么我还不知道。
* -lname PATTERN

  **返回所有是symbolic link且其内容符合PATTERN(shell PATTERN)的文件**

  **如果-L, -follow生效，只返回那些broken的symbolic link.**
* -mmin N

  见-amin N
* -mtime N

  见-atime N
* -name PATTERN

  **这个pattern是shell模式pattern，元字符(``*``, ``?``,還有``[]``)。**
* -newer FILE

  所查找的文件的mtime新于FILE.mtime，即就mtime来说，所查找的文件比FILE要新。
  要找到那些在某个时间点之后修改过的文件，可以使用下例中的技巧：

  ``touch -d "13 may 2001 17:54:19" date_marker``

  ``find . -newer date_marker``

* -nouser

  找到那些user ID对应的user是UNKNOWN的文件
* -nogroup

  找到那些group ID对应的user是UNKNOWN的文件
* -path PATTERN

  找到file name满足PATTERN(shell PATTERN)的。如果指定-prune，则一旦目录满足，就不再find这个目录之中的任何文件了。
* -perm [+-]MODE

  文件的权限与MODE完全匹配。

  如果是-MODE，则文件权限按位与上MODE等于MODE即可。

  如果是+MODE，则文件权限与上MODE不为零即可。
* -regex PATTERN

  这个pattern是regexp, find defaults to Emacs-style regular expressions, 可以用-regextype type 指定。
* -readable

  不知道，看man page没看懂。
* -writable

  不知道，看man page没看懂。
* -executable

  不知道，看man page没看懂。
* -wholename PATTERN

  man page上只说它是一个less portable的-path，具体是什么不知道。
* -size N[bcwkMG]
  File uses n units of space.  The following suffixes can be used:
    * 'b'    for 512-byte blocks (this is the default if no suffix is used)
    * 'c'    for bytes
    * 'w'    for two-byte words
    * 'k'    for Kilobytes (units of 1024 bytes)
    * 'M'    for Megabytes (units of 1048576 bytes)
    * 'G'    for Gigabytes (units of 1073741824 bytes)

    The size does not count indirect blocks, but it does count blocks in sparse files that are not actually allocated.  Bear in mind that the '%k' and '%b' format specifiers of -printf handle sparse files differently.  The 'b' suffix always denotes 512-byte blocks and never 1 Kilobyte blocks, which is different to the behaviour of -ls.

* -true

  总是true
* -type [bcdpflsD]
    * b block (buffered) special
    * c character (unbuffered) special
    * d directory
    * p named pipe (FIFO)
    * f regular file
    * l symbolic link; this is never true if the -L option or the -follow option is in effect, unless the symbolic link is broken. If you want to search for symbolic links when -L is in effect, use -xtype.
    * s socket
    * D door (Solaris)

* -uid N

  File's numeric user ID
* -used N

  File was last accessed n days after its status was last changed. 没看懂。
* -user NAME

  File is owned by user uname (numeric user ID allowed).
* -xtype [bcdpfls]

  The same as -type unless the file is a symbolic link.  For symbolic links: if the -H or -P option was specified, true if the file is a link to a file of type c; if the -L option has been given, true if c is 'l'.  In other words, for symbolic links, -xtype checks the type of the file that -type does not check.

actions:

* -delete

  Delete files; true if removal succeeded.  If the removal failed, an error message is issued.  If -delete fails, find's  exit  status  will  be  nonzero (when it eventually exits).  Use of -delete automatically turns on the -depth option.

  $$ \color{red}{Warnings: 这个一定要放最后，否则来一个文件删一个。} $$Don't forget that the find command line is evaluated as an expression, so putting -delete first will make find try to delete everything below the starting points you specified.  When testing a find command line that you later intend to use with -delete, you should explicitly specify -depth in order to avoid later surprises.  Because -delete implies -depth, you cannot usefully use -prune and -delete together.

* -print0
* -printf FORMAT
* -fprintf FILE FORMAT
* -print
* -fprint0 FILE
* -fprint FILE
* -ls
* -fls FILE
* -prune
* -quit
* -exec COMMAND
* -exec COMMAND {} + -ok COMMAND
* -execdir COMMAND
* -execdir COMMAND {} + -okdir COMMAND

以上这前你们去看man page吧。

### REFS

http://www.refining-linux.org/archives/25/18-GNU-find-operators/

http://www.187299.com/archives/812

http://jax-work-archive.blogspot.com/2009/05/find-linux.html
