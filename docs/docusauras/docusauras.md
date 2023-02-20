---
sidebar_position: 1
---

# Docusaurus 使用说明

当前子节点就是用 `Docusaurus` 创建的，基于 markdown 文档生成对应的页面内容

> Facebook Docusaurus 官网：[https://docusaurus.io/](https://docusaurus.io/)

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

### 3. 边栏排序的依据

可以在 markdown 文档的前端添加如下内容，跟上边的效果是一样的

```markdown
---
sidebar_label: 科学上网
sidebar_position: 1
---
```

### 4. 可以在 `/docs` 中创建目录
当 `/docs` 中的目录名字与内部的文件名一样时，且只有一个文件的时候，就不再展示二级菜单，直接展示这个文档的内容



## 二、/pages

这个目录下，新建一个 `demo.js` 的文件，获得的路径就是 `/demo`
`demo.md` 也是一样 `/demo`


