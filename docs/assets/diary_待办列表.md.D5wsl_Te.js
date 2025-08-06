import{_ as s}from"./chunks/diary_detail_todo.Db_GSx-g.js";import{_ as n,c as p,o as e,ag as l}from"./chunks/framework.BjE8olX4.js";const i="/readme/assets/todo_sort.CAiSw7nw.png",b=JSON.parse('{"title":"待办列表 TODO","description":"","frontmatter":{},"headers":[],"relativePath":"diary/待办列表.md","filePath":"diary/待办列表.md"}'),t={name:"diary/待办列表.md"};function o(c,a,r,d,h,_){return e(),p("div",null,a[0]||(a[0]=[l(`<h1 id="待办列表-todo" tabindex="-1">待办列表 TODO <a class="header-anchor" href="#待办列表-todo" aria-label="Permalink to &quot;待办列表 TODO&quot;">​</a></h1><p>这也算是一个比较特殊的功能。<br> 平时会记录一些要做的事项到 iPhone 的待办列表，为了统一管理，在这个项目中也添加了差不多的功能。区别是，这里只支持记录，不支持提醒等。</p><p>我平常会用它用记录一年的待办、一些项目待实现功能记录、想买的东西等。</p><h2 id="_1-待办的书写规则" tabindex="-1">1. 待办的书写规则 <a class="header-anchor" href="#_1-待办的书写规则" aria-label="Permalink to &quot;1. 待办的书写规则&quot;">​</a></h2><p>待办日记本质还是纯文本，但感觉 markdown 那种 <code>-[]</code> <code>-[x]</code> 书写方式太过繁琐，所以制定了自己的待办列表书写规则。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>= 开头的是已完成的</span></span>
<span class="line"><span>- 开头的是未完成的</span></span>
<span class="line"><span>- 备注加在最后面，使用 # 间隔</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>每条 TODO 中 # 后面的内容会被识别成备注信息</span></span></code></pre></div><h2 id="_2-展示方式" tabindex="-1">2. 展示方式 <a class="header-anchor" href="#_2-展示方式" aria-label="Permalink to &quot;2. 展示方式&quot;">​</a></h2><p>当日记内容是下面内容时</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>- 进入统计页面时，因加载时间过长，添加过渡动画 使用 router</span></span>
<span class="line"><span>- 手机端详细列表显示时，背景加深</span></span>
<span class="line"><span>- 账单条目可以自定义顺序，优先级</span></span>
<span class="line"><span>- 写文章：日记的使用说明书</span></span>
<span class="line"><span>= 日期和时间选择，更快捷一些 #点击时间后，可以直接输入时间</span></span>
<span class="line"><span>= 移动端更方便的出现搜索框</span></span>
<span class="line"><span>= 待办增强 #考虑添加完成时间字段，在查看页面直接编辑</span></span>
<span class="line"><span>= 窗口缩放后，当前编辑的内容不见了。 #2025-03-08</span></span>
<span class="line"><span>= 分离五笔、日记数据库 #2025-01-06</span></span>
<span class="line"><span>= 上面的类别筛选可能会被误以为是新建日记的类别</span></span>
<span class="line"><span>= 暗黑模式下， markdown 表格显示不正常</span></span>
<span class="line"><span>= 一页展示所有日记内容，瀑布流</span></span>
<span class="line"><span>= 移动端 TODO 左右 padding 过大</span></span>
<span class="line"><span>= 添加账单隐藏收入的按钮 #有时候截图不方便</span></span>
<span class="line"><span>= fix 隐藏模式时，保存后把星号给保存了</span></span>
<span class="line"><span>= 移动端详情详情列表时字体加大，现在太小了</span></span>
<span class="line"><span>= 账单列表页横向滚动有问题，需要优化下</span></span>
<span class="line"><span>= 账单筛选问题</span></span>
<span class="line"><span>= 添加日期选择，使用 vCalendar 插件</span></span>
<span class="line"><span>= 点击 navbar category 未保存，重新页面后就重置了</span></span>
<span class="line"><span>= 添加待办快速筛选入口，方便查看待办列表</span></span>
<span class="line"><span>= 账单在没有输入字的时候不显示提示窗口，不然直接输入1就把第一项上屏了</span></span>
<span class="line"><span>= bug 修改用户名之后，请求时 token 丢失</span></span>
<span class="line"><span>= 编辑界面，日期快速上下切换</span></span>
<span class="line"><span>= 移动端编辑界面需要优化下，总感觉不太方便</span></span></code></pre></div><p>它的最终展示方式是这样，它会自动将未完成的排序到最上面，标记完成的会被移到下面。</p><p><img src="`+s+'" alt="diary"></p><h2 id="_3-标记已完成、未完成" tabindex="-1">3. 标记已完成、未完成 <a class="header-anchor" href="#_3-标记已完成、未完成" aria-label="Permalink to &quot;3. 标记已完成、未完成&quot;">​</a></h2><p>标记方式跟普通的 TODO 一致，点击前面的标记即可切换这两种状态。</p><h2 id="_4-顺序调整" tabindex="-1">4. 顺序调整 <a class="header-anchor" href="#_4-顺序调整" aria-label="Permalink to &quot;4. 顺序调整&quot;">​</a></h2><p>在日记详情显示页面，可以通过拖动 TODO 项目来实现排序。</p><p><img src="'+i+'" alt="todo_sort"></p>',16)]))}const g=n(t,[["render",o]]);export{b as __pageData,g as default};
