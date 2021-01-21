---
title: Termux开箱笔记
date: 2019-09-26 12:45:00
tags:
- Android
- Termux
- 笔记
---

## Termux下载地址

- [官网](https://termux.com/)
- [从Google play下载](https://play.google.com/store/apps/details?id=com.termux)

## 更换为清华镜像源

[清华镜像源](https://mirror.tuna.tsinghua.edu.cn/help/termux/)

1. 复制粘贴下面命令更换

```shell
sed -i 's@^\(deb.*stable main\)$@#\1\ndeb https://mirrors.tuna.tsinghua.edu.cn/termux stable main@' $PREFIX/etc/apt/sources.list 
```

2. 刷新缓存并更新

```shell
pkg up
```
## 获取Android储存权限

```shell
termux-setup-storage
```

## 美化终端

1. 安装oh-my-zsh

```shell
pkg i curl -y && sh -c "$(curl -fsSL https://github.com/Cabbagec/termux-ohmyzsh/raw/master/install.sh)"
```

脚本运行后先后有如下两个选项：分别选择背景色和字体

想要继续更改挑选配色的话,继续运行脚本来再次选择:

```shell
~/termux-ohmyzsh/install.sh
```

重启Termux会话后生效

2. 设置oh-my-zsh的主题为随机

编辑配置文件

```shell
nano ~/.zshrc
```

将`ZSH_THEME`改为`random`

重启Termux会话生效

3. 更改Termux底端快捷键

编辑配置文件

```shell
nano $HOME/.termux/termux.properties
```

输入文本后保存重启Termux生效

```shell
extra-keys= [['ESC','/','-','HOME','UP','END','PGUP'],['TAB','CTRL','ALT','LEFT','DOWN','RIGHT','PGDN']]
```

## 待完成...
