---
title: Cloudflare CDN与Hexo主题「NexT」v7.4.0冲突解决方案
date: 2019-09-22 23:31:57
tags: 
- Hexo
---

问题：

1. 使用`Cloudflare`后使用了NexT主题的Hexo博客会出现空白页面的情况

解决方法：关闭Cloudflare的Rocket Loader。`Speed`->`Rocket Loader`，关闭，解决。

解决方案来源：[NexT主题的issues](https://github.com/theme-next/hexo-theme-next/issues/1170)
