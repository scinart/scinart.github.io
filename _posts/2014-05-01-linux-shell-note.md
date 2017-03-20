---
layout: post
title: "Bash/Zsh Startup Files Loading Order"
date: 2014-05-01
timestamp: "2017-03-20 16:36:17 scinart"
categories: linux
tag: note
comments: false
cc: "by-nc-sa"

---

## DEFINITION:

* **Interactive shell**
  An interactive shell reads commands from user input on a tty.
* **Non-interactive shell**
  a shell reads commands from a file -- a shell script
* **Login shell**
  Typically, most users will encounter a login shell only if either:
  * they logged in from a tty, not through a GUI.
  * they logged in remotely, such as through ssh.
* **Non-login shell**
  If the shell was started any other way, such as through GNOME's gnome-terminal or KDE's konsole, then it is typically not a login shell.

For more accurate definitions, see <http://docstore.mik.ua/orelly/unix3/upt/ch03_04.htm> 

For testing whether a running shell is interactive, see <http://www.tldp.org/LDP/abs/html/intandnonint.html>

Note: (There's no rule that only noninteractive shells can read shell scripts or that only interactive shells can read commands from a terminal. But this is generally true.) 

## For Bash
They work as follows. Read down the appropriate column. Executes A, then B, then C, etc. The B1, B2, B3 means it executes only the first of those files found.

<pre>
+----------------+-----------+-----------+---------------+
|                |Interactive|Interactive|Non-interactive|
|                |login      |non-login  |               |
+----------------+-----------+-----------+---------------+
|/etc/profile    |   A       |           |               |
+----------------+-----------+-----------+---------------+
|/etc/bash.bashrc|           |    A      |               |
+----------------+-----------+-----------+---------------+
|~/.bashrc       |           |    B      |               |
+----------------+-----------+-----------+---------------+
|~/.bash_profile |   B1      |           |               |
+----------------+-----------+-----------+---------------+
|~/.bash_login   |   B2      |           |               |
+----------------+-----------+-----------+---------------+
|~/.profile      |   B3      |           |               |
+----------------+-----------+-----------+---------------+
|BASH_ENV        |           |           |  A            |
+----------------+-----------+-----------+---------------+
|                |           |           |               |
+----------------+-----------+-----------+---------------+
|                |           |           |               |
+----------------+-----------+-----------+---------------+
|~/.bash_logout  |    C      |           |               |
+----------------+-----------+-----------+---------------+
</pre>

<table class="image">
<caption align="bottom">From <a href="http://www.solipsys.co.uk/new/BashInitialisationFiles.html">http://www.solipsys.co.uk/new/BashInitialisationFiles.html</a>
</caption>
<tr><td><img src="{{ site.img_url }}/bash-rc-loading.png" alt="nth"/></td></tr>
</table>

## For Zsh:

<pre>
+----------------+-----------+-----------+------+
|                |Interactive|Interactive|Script|
|                |login      |non-login  |      |
+----------------+-----------+-----------+------+
|/etc/zshenv     |    A      |    A      |  A   |
+----------------+-----------+-----------+------+
|~/.zshenv       |    B      |    B      |  B   |
+----------------+-----------+-----------+------+
|/etc/zprofile   |    C      |           |      |
+----------------+-----------+-----------+------+
|~/.zprofile     |    D      |           |      |
+----------------+-----------+-----------+------+
|/etc/zshrc      |    E      |    C      |      |
+----------------+-----------+-----------+------+
|~/.zshrc        |    F      |    D      |      |
+----------------+-----------+-----------+------+
|/etc/zlogin     |    G      |           |      |
+----------------+-----------+-----------+------+
|~/.zlogin       |    H      |           |      |
+----------------+-----------+-----------+------+
|                |           |           |      |
+----------------+-----------+-----------+------+
|                |           |           |      |
+----------------+-----------+-----------+------+
|~/.zlogout      |    I      |           |      |
+----------------+-----------+-----------+------+
|/etc/zlogout    |    J      |           |      |
+----------------+-----------+-----------+------+
</pre>


#### Note:

+ For bash, put stuff in ~/.bashrc, and make ~/.bash_profile source it.
+ For zsh, put stuff in ~/.zshrc, which is always executed.

#### References:

+ <http://shreevatsa.wordpress.com/2008/03/30/zshbash-startup-files-loading-order-bashrc-zshrc-etc/>
+ <http://meta.ath0.com/2007/10/23/cleaning-up-bash-customizations/>
