---
layout: post
title: "How to install vpnc on MacOS"
date: 2018-06-01
timestamp: "2018-06-01 13:47:18 scinart"
categories: linux
tag: note
comments: false
cc: "by-nc-sa"

---

main source: <http://www.nivas.hr/blog/2017/02/15/install-vpnc-macos-sierra/>

```bash
brew cask install tuntap
brew install libgcrypt
git clone https://github.com/breiter/vpnc.git
cd vpnc
make
sudo make install
```

Note:

1. see <https://github.com/breiter/vpnc/issues/3>
2. if anything goes wrong, ( errorous grammar for `sed` for example ), see <https://gist.github.com/crazygit/800b902d50e4d14a3b5d7ebaff34748b>

