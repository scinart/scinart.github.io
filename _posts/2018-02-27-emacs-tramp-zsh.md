---
layout: post
title:  "Emacs加prezto(或oh-my-zsh)加tramp连接失败的解决办法"
date: "2018-02-27 08:41:04"
timestamp: "2018-10-01 10:09:35 scinart"
categories: linux
comments: true
cc: "by-sa-cn"

---

更新：[已修复](https://github.com/sorin-ionescu/prezto/issues/1552#issuecomment-425576712)

---

记得好久以前Emacs用Tramp连接zsh的时候就失败了，今天终于修好了。

因为调试了半天，Tramp连接时默认TERM是dumb，而prezto在TERM是dumb时会把color和prompt都关掉。

但是Tramp连接失败的原因依旧是prompt无法匹配上。注意Emacs中``tramp-terminal-prompt-regexp’s value is "\\(TERM = (.*)\\|Terminal type\\? \\[.*\\]\\)\\s-*"``
这个超长的repexp应该能包括很多情况了，真正找到原因的调试方法是这句：

    TERM=dumb ssh user@ip | xxd

用`xxd`才看到，在提示里边混了一个奇怪的^[[?2004h，搜之，找到[解决办法](https://emacs.stackexchange.com/a/19853/16444)。

在你的zshrc的最后加上

    if [[ $TERM = dumb ]]; then
      unset zle_bracketed_paste
    fi

另：

又发现了[另一篇文章](https://archive.zhimingwang.org/blog/2015-09-21-zsh-51-and-bracketed-paste.html)([存档](https://web.archive.org/web/20180227005820/https://archive.zhimingwang.org/blog/2015-09-21-zsh-51-and-bracketed-paste.html))，写的更好。
