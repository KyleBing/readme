---
sidebar_label: 五笔码表助手
sidebar_position: 0
---

# 五笔码表助手使用说明
> github：[https://github.com/KyleBing/wubi-dict-editor](https://github.com/KyleBing/wubi-dict-editor)

![cover](https://user-images.githubusercontent.com/12215982/208109387-5062a921-8eef-4063-9936-42762197d6c8.png)


## 说明
该工具主要是适用于 Rime 输入法的码表编辑工具，主要服务于 [Rime 极点五笔词库](https://github.com/KyleBing/rime-wubi86-jidian)。
可以
- [x] 添加、编辑、删除词条
- [x] 批量添加、移动、删除词条
- [x] 词条查重
- [x] 词条查错、纠错

## 一、 安装
下载适应你系统的文件， Windows 或 macOS

下载地址：[https://gitee.com/KyleBing/wubi-dict-editor/releases](https://gitee.com/KyleBing/wubi-dict-editor/releases)

### windows
直接解压打开 `.exe` 文件即可

### macOS
如果提示无法打开，文件损坏什么的，将 app 移到应用程序 `Applications` 文件夹后，打开终端 `Terminal`，这样操作：

```bash
sudo xattr -rd com.apple.quarantine /Applications/wubi-dict-editor.app/
```

这样应该就能打开了。

## 二、码表格式定义

### 1. 标记码表为分组模式
文件头中需要添加如下内容，让工具知道这个码表是分组模式的：
```yaml
dict_grouped: true # 词库管理应用识别：标记该码表为分组模式
```

### 2. 设置分组名
经过上面的操作之后，该码表就会被工具识别为分组模式，展示的时候也会以分组模式展示。  
分组名也需要重新修改一下，码表中以 `## ` 开头的就是分组名，后面紧跟的词条就是该组的词条。

__注意__：组名与词条之间不要留空行，不然会被识别为新组词条。

像这样：
```yaml
## 电视剧
铁齿铜牙纪晓岚	qhqm
纪晓岚	xjmm
和珅	tkgj
男人帮	lwdt

## 影视
黑镜	lfqu
你好，李焕英	soam
危情三日	qndj
时间旅行者的妻子	juyb
星际穿越	jbpf
无敌破坏王	ftdg
盗梦空间	uspu
黑客帝国	lpul
利刃出鞘	tvba
电锯惊魂	jqnf
阿凡达	bmdp
切尔诺贝利	aqyt
```


## 二、词条操作
### 1. 添加
输入想要添加的词条后，会自动生成对应的五笔编码，当然你也可以自己修改编码，然后点击<kbd>添加</kbd>即可添加到当前显示的码表文件中。  
如果你想添加到对应的分组中，需要先点击左侧的分组名，再执行添加操作，新添加的词就会直接添加到对应的分组中。

### 2. 删除
可以单条删除，也可以批量删除

单条删除：直接点击词条右侧的 x 号即可删除  
批量删除：点选词条前方的选择框，然后点击 <kbd>删除</kbd> 即可
> **注意** 所有的词条操作在没有点保存之前，都不会保存到文件。

### 3. 移动
可以移动任意个选中的词条到任意码表中，或者任意码表的某个分组中。同时删除原来码表的移动词条。  
> **注意** 词条移动操作会立即保存到文件

### 4. 搜索
可以通过词条或编码进行搜索，这两个是同时生效的。

### 5. 调整位置，词序

可以点击词条上的上下箭头来调整位置  
也可以点选一条词条，然后使用键盘的上下键来调整它的位置  
> **注意** 所有的词条操作在没有点保存之前，都不会保存到文件。

## 3. 同步功能

可以登录帐户，实现实时更新上线词库（我维护的）、上传自己的词条、同步自己的个人词库 等功能。
