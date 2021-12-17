---
sidebar_position: 1
---

# Docusaurus 使用说明

## 一、/docs

### 1. 根据目录结构生成边栏目录
如果 `@/sidebars.js` 里设置了目录自动获取，也就是没有改过的样子

此时就会自动读取 `docs` 中的文件，生成目录

```bash
docs/v2ray/v2ray.md
```` 
文件的目录就是

```bash
docs/v2ray/v2ray
```

> **注意** 这里的目录不能使用 `i-love-you` 这样的命名方式，只能使用 js 变量的命名方式，所以使用 `iLoveYou` 这样的命名方式就可以了。

### 2. 另一种边栏目录生成方式
当然，还可以在 `/docs/adc` 目录下建一个名为 `_category_.json` 的文件，内容如下，就会生成侧边栏

```json
{
  "label": "五笔助手",
  "position": 2
}
```


## 二、/pages

这个目录下，新建一个 `demo.js` 的文件，获得的路径就是 `/demo`
`demo.md` 也是一样 `/demo`
