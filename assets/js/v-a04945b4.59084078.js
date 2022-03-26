"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5475],{2875:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-a04945b4",path:"/learn/markdown.html",title:"Markdown",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"语法扩展",slug:"语法扩展",children:[{level:3,title:"内置",slug:"内置",children:[]},{level:3,title:"标题锚点",slug:"标题锚点",children:[]},{level:3,title:"链接",slug:"链接",children:[]},{level:3,title:"Emoji 🎉",slug:"emoji",children:[]},{level:3,title:"目录",slug:"目录",children:[]},{level:3,title:"代码块",slug:"代码块",children:[]},{level:3,title:"导入代码块",slug:"导入代码块",children:[]}]},{level:2,title:"在 Markdown 中使用 Vue",slug:"在-markdown-中使用-vue",children:[{level:3,title:"模板语法",slug:"模板语法",children:[]},{level:3,title:"组件",slug:"组件",children:[]}]},{level:2,title:"注意事项",slug:"注意事项",children:[{level:3,title:"已废弃的 HTML 标签",slug:"已废弃的-html-标签",children:[]}]}],git:{}}},1208:(n,s,a)=>{a.r(s),a.d(s,{default:()=>Aa});var e=a(6252),l=a(3577);const t=(0,e._)("h1",{id:"markdown",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#markdown","aria-hidden":"true"},"#"),(0,e.Uk)(" Markdown")],-1),p=(0,e.Uk)("在阅读本章节之前，请确保你已经对 Markdown 有所了解。如果你还不了解 Markdown ，请先学习一些 "),r={href:"https://commonmark.org/help/",target:"_blank",rel:"noopener noreferrer"},o=(0,e.Uk)("Markdown 教程"),c=(0,e.Uk)("。"),u=(0,e._)("h2",{id:"语法扩展",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#语法扩展","aria-hidden":"true"},"#"),(0,e.Uk)(" 语法扩展")],-1),i=(0,e.Uk)("VuePress 会使用 "),m={href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"},k=(0,e.Uk)("markdown-it"),d=(0,e.Uk)(" 来解析 Markdown 内容，因此可以借助于 markdown-it 插件来实现 "),b={href:"https://github.com/markdown-it/markdown-it#syntax-extensions",target:"_blank",rel:"noopener noreferrer"},g=(0,e.Uk)("语法扩展"),h=(0,e.Uk)(" 。"),_=(0,e._)("p",null,"本章节将会介绍 VuePress 内置支持的 Markdown 语法扩展。",-1),f=(0,e.Uk)("你也可以通过 "),v={href:"https://v2.vuepress.vuejs.org/zh/reference/config.html#markdown",target:"_blank",rel:"noopener noreferrer"},w=(0,e.Uk)("markdown"),U=(0,e.Uk)(" 和 "),x={href:"https://v2.vuepress.vuejs.org/zh/reference/plugin-api.html#extendsmarkdown",target:"_blank",rel:"noopener noreferrer"},W=(0,e.Uk)("extendsMarkdown"),j=(0,e.Uk)(" 来配置这些内置扩展、加载更多 markdown-it 插件、实现你自己的扩展等。"),M=(0,e._)("h3",{id:"内置",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#内置","aria-hidden":"true"},"#"),(0,e.Uk)(" 内置")],-1),E=(0,e._)("p",null,"由 markdown-it 内置支持：",-1),q={href:"https://help.github.com/articles/organizing-information-with-tables/",target:"_blank",rel:"noopener noreferrer"},T=(0,e.Uk)("表格"),L=(0,e.Uk)(" (GFM)"),V={href:"https://help.github.com/articles/basic-writing-and-formatting-syntax/#styling-text",target:"_blank",rel:"noopener noreferrer"},P=(0,e.Uk)("删除线"),y=(0,e.Uk)(" (GFM)"),z=(0,e._)("h3",{id:"标题锚点",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#标题锚点","aria-hidden":"true"},"#"),(0,e.Uk)(" 标题锚点")],-1),R=(0,e._)("p",null,[(0,e.Uk)("你可能已经注意到，当你把鼠标放在各个章节的标题上时，会显示出一个 "),(0,e._)("code",null,"#"),(0,e.Uk)(" 锚点。点击这个 "),(0,e._)("code",null,"#"),(0,e.Uk)(" 锚点，可以直接跳转到对应章节。")],-1),C={class:"custom-container tip"},H=(0,e._)("p",{class:"custom-container-title"},"TIP",-1),A=(0,e.Uk)("标题锚点扩展由 "),I={href:"https://github.com/valeriangalliat/markdown-it-anchor",target:"_blank",rel:"noopener noreferrer"},B=(0,e.Uk)("markdown-it-anchor"),D=(0,e.Uk)(" 支持。"),O=(0,e.Uk)("配置参考： "),F=(0,e.Uk)("markdown.anchor"),S=(0,e._)("h3",{id:"链接",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#链接","aria-hidden":"true"},"#"),(0,e.Uk)(" 链接")],-1),G=(0,e.Uk)("在你使用 Markdown 的 "),J={href:"https://spec.commonmark.org/0.29/#link-reference-definitions",target:"_blank",rel:"noopener noreferrer"},N=(0,e.Uk)("链接语法"),Y=(0,e.Uk)(" 时， VuePress 会为你进行一些转换。"),K=(0,e.uE)('<p>以我们文档的源文件为例：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>└─ docs\n   └─ zh\n      ├─ guide\n      │  ├─ getting-started.md\n      │  ├─ markdown.md    <span class="token comment"># &lt;- 我们在这里</span>\n      │  └─ README.md\n      ├─ reference\n      │  └─ config.md\n      └─ README.md\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><strong>原始 Markdown</strong></p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token comment">&lt;!-- 相对路径 --&gt;</span>\n<span class="token url">[<span class="token content">首页</span>](<span class="token url">../README.md</span>)</span>  \n<span class="token url">[<span class="token content">配置参考</span>](<span class="token url">../reference/config.md</span>)</span>  \n<span class="token url">[<span class="token content">快速上手</span>](<span class="token url">./getting-started.md</span>)</span>  \n<span class="token comment">&lt;!-- 绝对路径 --&gt;</span>\n<span class="token url">[<span class="token content">指南</span>](<span class="token url">/zh/guide/README.md</span>)</span>  \n<span class="token url">[<span class="token content">配置参考 &gt; markdown.links</span>](<span class="token url">/zh/reference/config.md#links</span>)</span>  \n<span class="token comment">&lt;!-- URL --&gt;</span>\n<span class="token url">[<span class="token content">GitHub</span>](<span class="token url">https://github.com</span>)</span> \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><strong>转换为</strong></p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouterLink</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/zh/<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>首页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RouterLink</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouterLink</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/zh/reference/config.html<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>配置参考<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RouterLink</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouterLink</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/zh/guide/getting-started.html<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>快速上手<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RouterLink</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouterLink</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/zh/guide/<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>指南<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RouterLink</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouterLink</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/zh/reference/config.html#links<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>配置参考 <span class="token entity named-entity" title="&gt;">&amp;gt;</span> markdown.links<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RouterLink</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://github.com<span class="token punctuation">&quot;</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>_blank<span class="token punctuation">&quot;</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>noopener noreferrer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>GitHub<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>OutboundLink</span><span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><strong>渲染为</strong></p>',7),Z=(0,e.Uk)("首页"),Q=(0,e._)("br",null,null,-1),X=(0,e.Uk)("配置参考"),$=(0,e._)("br",null,null,-1),nn=(0,e.Uk)("快速上手"),sn=(0,e._)("br",null,null,-1),an={href:"/zh/guide/README.md",target:"_blank",rel:"noopener noreferrer"},en=(0,e.Uk)("指南"),ln=(0,e._)("br",null,null,-1),tn={href:"/zh/reference/config.md#links",target:"_blank",rel:"noopener noreferrer"},pn=(0,e.Uk)("配置参考 > markdown.links"),rn=(0,e._)("br",null,null,-1),on={href:"https://github.com",target:"_blank",rel:"noopener noreferrer"},cn=(0,e.Uk)("GitHub"),un=(0,e._)("p",null,[(0,e._)("strong",null,"解释")],-1),mn=(0,e._)("li",null,[(0,e.Uk)("内部链接会被转换为 "),(0,e._)("code",null,"<RouterLink>"),(0,e.Uk)(" 以便进行 SPA 导航。")],-1),kn=(0,e.Uk)("指向 "),dn=(0,e._)("code",null,".md",-1),bn=(0,e.Uk)(" 文件的内部链接会被转换为目标页面的 "),gn=(0,e.Uk)("路由路径"),hn=(0,e.Uk)("，并且支持绝对路径和相对路径。"),_n=(0,e._)("li",null,[(0,e.Uk)("外部链接会被添加 "),(0,e._)("code",null,'target="_blank" rel="noopener noreferrer"'),(0,e.Uk)(" 属性和一个 "),(0,e._)("code",null,"<OutboundLink />"),(0,e.Uk)(" 标记。")],-1),fn=(0,e._)("p",null,[(0,e._)("strong",null,"建议")],-1),vn=(0,e._)("p",null,"对于内部链接，尽可能使用相对路径而不是绝对路径。",-1),wn=(0,e._)("li",null,"相对路径是指向目标文件的有效链接，在你的编辑器或者代码仓库中浏览源文件时也可以正确跳转。",-1),Un=(0,e._)("li",null,"相对路径在不同 locales 下都是一致的，这样在翻译你的内容时就不需要修改 locale 路径了。",-1),xn=(0,e.Uk)("在使用绝对路径时，如果你站点的 "),Wn=(0,e.Uk)("base"),jn=(0,e.Uk)(" 不是 "),Mn=(0,e._)("code",null,'"/"',-1),En=(0,e.Uk)("，你需要手动添加 "),qn=(0,e._)("code",null,"base",-1),Tn=(0,e.Uk)(" 或者使用 "),Ln=(0,e.Uk)("base helper"),Vn=(0,e.Uk)(" 。"),Pn={class:"custom-container tip"},yn=(0,e._)("p",{class:"custom-container-title"},"TIP",-1),zn=(0,e._)("p",null,"链接扩展是由我们的内置插件支持的。",-1),Rn=(0,e.Uk)("配置参考： "),Cn=(0,e.Uk)("markdown.links"),Hn=(0,e.Uk)("参考: "),An=(0,e.Uk)("內置组件 > OutboundLink"),In=(0,e._)("h3",{id:"emoji",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#emoji","aria-hidden":"true"},"#"),(0,e.Uk)(" Emoji 🎉")],-1),Bn=(0,e._)("p",null,[(0,e.Uk)("你可以在你的 Markdown 内容中输入 "),(0,e._)("code",null,":EMOJICODE:"),(0,e.Uk)(" 来添加 Emoji 表情。")],-1),Dn=(0,e.Uk)("前往 "),On={href:"https://github.com/ikatyang/emoji-cheat-sheet",target:"_blank",rel:"noopener noreferrer"},Fn=(0,e.Uk)("emoji-cheat-sheet"),Sn=(0,e.Uk)(" 来查看所有可用的 Emoji 表情和对应代码。"),Gn=(0,e._)("p",null,[(0,e._)("strong",null,"输入")],-1),Jn=(0,e._)("div",{class:"language-markdown ext-md line-numbers-mode"},[(0,e._)("pre",{class:"language-markdown"},[(0,e._)("code",null,"VuePress 2 已经发布 :tada: ！\n")]),(0,e._)("div",{class:"line-numbers"},[(0,e._)("span",{class:"line-number"},"1"),(0,e._)("br")])],-1),Nn=(0,e._)("p",null,[(0,e._)("strong",null,"输出")],-1),Yn=(0,e._)("p",null,"VuePress 2 已经发布 🎉 ！",-1),Kn={class:"custom-container tip"},Zn=(0,e._)("p",{class:"custom-container-title"},"TIP",-1),Qn=(0,e.Uk)("Emoji 扩展由 "),Xn={href:"https://github.com/markdown-it/markdown-it-emoji",target:"_blank",rel:"noopener noreferrer"},$n=(0,e.Uk)("markdown-it-emoji"),ns=(0,e.Uk)(" 支持。"),ss=(0,e.Uk)("配置参考： "),as=(0,e.Uk)("markdown.emoji"),es=(0,e.uE)('<h3 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h3><p>如果你想要把当前页面的目录添加到 Markdown 内容中，你可以使用 <code>[[toc]]</code> 语法。</p><p><strong>输入</strong></p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>[[toc]]\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>输出</strong></p>',5),ls={class:"table-of-contents"},ts=(0,e.Uk)("语法扩展"),ps=(0,e.Uk)("内置"),rs=(0,e.Uk)("标题锚点"),os=(0,e.Uk)("链接"),cs=(0,e.Uk)("Emoji 🎉"),us=(0,e.Uk)("目录"),is=(0,e.Uk)("代码块"),ms=(0,e.Uk)("导入代码块"),ks=(0,e.Uk)("在 Markdown 中使用 Vue"),ds=(0,e.Uk)("模板语法"),bs=(0,e.Uk)("组件"),gs=(0,e.Uk)("注意事项"),hs=(0,e.Uk)("已废弃的 HTML 标签"),_s=(0,e._)("p",null,[(0,e.Uk)("目录中的标题将会链接到对应的 "),(0,e._)("a",{href:"#%E6%A0%87%E9%A2%98%E9%94%9A%E7%82%B9"},"标题锚点"),(0,e.Uk)("，因此如果你禁用了标题锚点，可能会影响目录的功能。")],-1),fs={class:"custom-container tip"},vs=(0,e._)("p",{class:"custom-container-title"},"TIP",-1),ws=(0,e.Uk)("目录扩展是由我们的内置插件支持的，该扩展 Fork 并修改自 "),Us={href:"https://github.com/nagaozen/markdown-it-toc-done-right",target:"_blank",rel:"noopener noreferrer"},xs=(0,e.Uk)("markdown-it-toc-done-right"),Ws=(0,e.Uk)("。"),js=(0,e.Uk)("配置参考： "),Ms=(0,e.Uk)("markdown.toc"),Es=(0,e.uE)('<h3 id="代码块" tabindex="-1"><a class="header-anchor" href="#代码块" aria-hidden="true">#</a> 代码块</h3><p>下列代码块扩展是在 Node 端进行 Markdown 解析的时候实现的。这意味着代码块并不会在客户端被处理。</p><h4 id="行高亮" tabindex="-1"><a class="header-anchor" href="#行高亮" aria-hidden="true">#</a> 行高亮</h4><p>你可以在代码块添加行数范围标记，来为对应代码行进行高亮：</p><p><strong>输入</strong></p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>​```ts{1,6-8}\nimport type { UserConfig } from &#39;@vuepress/cli&#39;\n\nexport const config: UserConfig = {\n  title: &#39;你好， VuePress&#39;,\n\n  themeConfig: {\n    logo: &#39;https://vuejs.org/images/logo.png&#39;,\n  },\n}\n```\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><strong>输出</strong></p><p>​```ts{1,6-8} import type { UserConfig } from &#39;@vuepress/cli&#39;</p><p>export const config: UserConfig = { title: &#39;你好， VuePress&#39;,</p><p>themeConfig: { logo: &#39;https://vuejs.org/images/logo.png&#39;, }, }</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\n行数范围标记的例子：\n\n- 行数范围： `{5-8}`\n- 多个单行： `{4,7,9}`\n- 组合： `{4,7-13,16,23-27,40}`\n\n::: tip\n行高亮扩展是由我们的内置插件支持的，该扩展 Fork 并修改自  [markdown-it-highlight-lines](https://github.com/egoist/markdown-it-highlight-lines)。\n\n配置参考： [markdown.code.highlightLines](../reference/config.md#markdown-code-highlightlines)\n:::\n\n#### 行号\n\n你肯定已经注意到在代码块的最左侧会展示行号。这个功能是默认启用的，你可以通过配置来禁用它。\n\n你可以在代码块添加 `:line-numbers` / `:no-line-numbers` 标记来覆盖配置项中的设置。\n\n**输入**\n\n````md\n​```ts\n// 行号默认是启用的\nconst line2 = &#39;This is line 2&#39;\nconst line3 = &#39;This is line 3&#39;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token comment">// 行号被禁用</span>\n<span class="token keyword">const</span> line2 <span class="token operator">=</span> <span class="token string">&#39;This is line 2&#39;</span>\n<span class="token keyword">const</span> line3 <span class="token operator">=</span> <span class="token string">&#39;This is line 3&#39;</span>\n</code></pre></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\n**输出**\n\n​```ts\n// 行号默认是启用的\nconst line2 = &#39;This is line 2&#39;\nconst line3 = &#39;This is line 3&#39;\n```\n\n```ts:no-line-numbers\n// 行号被禁用\nconst line2 = &#39;This is line 2&#39;\nconst line3 = &#39;This is line 3&#39;\n```\n\n::: tip\n行号扩展是由我们的内置插件支持的。\n\n配置参考： [markdown.code.lineNumbers](../reference/config.md#markdown-code-linenumbers)\n:::\n\n#### 添加 v-pre\n\n由于 [模板语法可以在 Markdown 中使用](#模板语法)，它也同样可以在代码块中生效。\n\n为了避免你的代码块被 Vue 编译， VuePress 默认会在你的代码块添加 [v-pre](https://v3.vuejs.org/api/directives.html#v-pre) 指令。这一默认行为可以在配置中关闭。\n\n\n你可以在代码块添加 `:v-pre` / `:no-v-pre` 标记来覆盖配置项中的设置。\n\n::: warning\n模板语法的字符有可能会被语法高亮器解析，比如 &quot;Mustache&quot; 语法（即双花括号）。因此，就像下面的例子一样，在某些语言中 `:no-v-pre` 可能并不能生效。\n\n如果你无论如何都想在这种语言中使用 Vue 语法，你可以尝试禁用默认的语法高亮，然后在客户端实现你的自定义代码高亮。\n:::\n\n**输入**\n\n````md\n​```md\n&lt;!-- 默认情况下，这里会被保持原样 --&gt;\n1 + 2 + 3 = {{ 1 + 2 + 3 }}\n```\n\n```md:no-v-pre\n&lt;!-- 这里会被 Vue 编译 --&gt;\n1 + 2 + 3 = {{ 1 + 2 + 3 }}\n```\n\n```js:no-v-pre\n// 由于 JS 代码高亮，这里不会被正确编译\nconst onePlusTwoPlusThree = {{ 1 + 2 + 3 }}\n```\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br></div></div><p><strong>输出</strong></p><p>​```md</p><p>1 + 2 + 3 = 6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\n```md:no-v-pre\n&lt;!-- 这里会被 Vue 编译 --&gt;\n1 + 2 + 3 = {{ 1 + 2 + 3 }}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 由于 JS 代码高亮，这里不会被正确编译</span>\n<span class="token keyword">const</span> onePlusTwoPlusThree <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>',18),qs={class:"custom-container tip"},Ts=(0,e._)("p",{class:"custom-container-title"},"TIP",-1),Ls=(0,e._)("p",null,"v-pre 扩展是由我们的内置插件支持的。",-1),Vs=(0,e.Uk)("配置参考： "),Ps=(0,e.Uk)("markdown.code.vPre"),ys=(0,e.uE)('<h3 id="导入代码块" tabindex="-1"><a class="header-anchor" href="#导入代码块" aria-hidden="true">#</a> 导入代码块</h3><p>你可以使用下面的语法，从文件中导入代码块：</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token comment">&lt;!-- 最简单的语法 --&gt;</span>\n@<span class="token url">[<span class="token content">code</span>](<span class="token url">../foo.js</span>)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>如果你只想导入这个文件的一部分：</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token comment">&lt;!-- 仅导入第 1 行至第 10 行 --&gt;</span>\n@<span class="token url">[<span class="token content">code{1-10}</span>](<span class="token url">../foo.js</span>)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>代码语言会根据文件扩展名进行推断，但我们建议你显式指定：</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token comment">&lt;!-- 指定代码语言 --&gt;</span>\n@<span class="token url">[<span class="token content">code js</span>](<span class="token url">../foo.js</span>)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>实际上，<code>[]</code> 内的第二部分会被作为代码块标记来处理，因此在上面 <a href="#%E4%BB%A3%E7%A0%81%E5%9D%97">代码块</a> 章节中提到的语法在这里都可以支持：</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token comment">&lt;!-- 行高亮 --&gt;</span>\n@<span class="token url">[<span class="token content">code js{2,4-5}</span>](<span class="token url">../foo.js</span>)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>下面是一个复杂的例子：</p><ul><li>导入 <code>&#39;../foo.js&#39;</code> 文件的第 3 行至第 10 行</li><li>指定语言为 <code>&#39;js&#39;</code></li><li>对导入代码的第 3 行进行高亮，即 <code>&#39;../foo.js&#39;</code> 文件的第 5 行</li><li>禁用行号</li></ul><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>@<span class="token url">[<span class="token content">code{3-10} js{3}:no-line-numbers</span>](<span class="token url">../foo.js</span>)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>需要注意的是，路径别名在导入代码语法中不会生效。你可以通过下面的配置来自行处理路径别名：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">markdown</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">importCode</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token function-variable function">handleImportPath</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>\n        str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^@src</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;path/to/src&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token comment">&lt;!-- 会被解析至 &#39;path/to/src/foo.js&#39; --&gt;</span>\n@<span class="token url">[<span class="token content">code</span>](<span class="token url">@src/foo.js</span>)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>',15),zs={class:"custom-container tip"},Rs=(0,e._)("p",{class:"custom-container-title"},"TIP",-1),Cs=(0,e._)("p",null,"导入代码扩展是由我们的内置插件支持的。",-1),Hs=(0,e.Uk)("配置参考： "),As=(0,e.Uk)("markdown.importCode"),Is=(0,e._)("h2",{id:"在-markdown-中使用-vue",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#在-markdown-中使用-vue","aria-hidden":"true"},"#"),(0,e.Uk)(" 在 Markdown 中使用 Vue")],-1),Bs=(0,e._)("p",null,"这一章节会介绍 Vue 在 Markdown 中一些基本用法。",-1),Ds=(0,e.Uk)("可以前往 "),Os=(0,e.Uk)("Cookbook > Markdown 和 Vue SFC"),Fs=(0,e.Uk)(" 来了解更多内容。"),Ss=(0,e._)("h3",{id:"模板语法",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#模板语法","aria-hidden":"true"},"#"),(0,e.Uk)(" 模板语法")],-1),Gs=(0,e._)("p",null,"我们知道：",-1),Js=(0,e._)("ul",null,[(0,e._)("li",null,"Markdown 中允许使用 HTML。"),(0,e._)("li",null,"Vue 模板语法是和 HTML 兼容的。")],-1),Ns=(0,e.Uk)("这意味着， Markdown 中允许直接使用 "),Ys={href:"https://v3.vuejs.org/guide/template-syntax.html",target:"_blank",rel:"noopener noreferrer"},Ks=(0,e.Uk)("Vue 模板语法"),Zs=(0,e.Uk)("。"),Qs=(0,e.uE)('<p><strong>输入</strong></p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>一加一等于： {{ 1 + 1 }}\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>i in 3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> span: {{ i }} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>输出</strong></p><p>一加一等于： 2</p>',4),Xs=(0,e.uE)('<h3 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h3><p>你可以在 Markdown 中直接使用 Vue 组件。</p><p><strong>输入</strong></p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>这是默认主题内置的 <span class="token code-snippet code keyword">`&lt;Badge /&gt;`</span> 组件 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>演示<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>输出</strong></p>',5),$s=(0,e.Uk)("这是默认主题内置的 "),na=(0,e._)("code",null,"<Badge />",-1),sa=(0,e.Uk)(" 组件 "),aa={class:"custom-container tip"},ea=(0,e._)("p",{class:"custom-container-title"},"TIP",-1),la=(0,e.Uk)("前往 "),ta=(0,e.Uk)("内置组件"),pa=(0,e.Uk)(" 查看所有内置组件。"),ra=(0,e.Uk)("前往 "),oa=(0,e.Uk)("默认主题 > 内置组件"),ca=(0,e.Uk)(" 查看默认主题中的所有内置组件。"),ua=(0,e._)("h2",{id:"注意事项",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#注意事项","aria-hidden":"true"},"#"),(0,e.Uk)(" 注意事项")],-1),ia=(0,e._)("h3",{id:"已废弃的-html-标签",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#已废弃的-html-标签","aria-hidden":"true"},"#"),(0,e.Uk)(" 已废弃的 HTML 标签")],-1),ma=(0,e.Uk)("已废弃的 HTML 标签默认不允许在 VuePress 的 Markdown 中使用，比如 "),ka={href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/center",target:"_blank",rel:"noopener noreferrer"},da=(0,e.Uk)("<center>"),ba=(0,e.Uk)(" 和 "),ga={href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/font",target:"_blank",rel:"noopener noreferrer"},ha=(0,e.Uk)("<font>"),_a=(0,e.Uk)(" 等。"),fa=(0,e._)("p",null,"这些标签不会被 Vue 模板编译器识别成原生 HTML 标签。相反，Vue 会尝试将这些标签解析为 Vue 组件，而显然这些组件通常是不存在的。",-1),va=(0,e._)("p",null,"你应该尽量避免使用已废弃的 HTML 标签。不过，如果你无论如何都要使用这些标签的话，可以尝试下面两种方法之一：",-1),wa=(0,e.Uk)("添加一个 "),Ua={href:"https://v3.cn.vuejs.org/api/directives.html#v-pre",target:"_blank",rel:"noopener noreferrer"},xa=(0,e.Uk)("v-pre"),Wa=(0,e.Uk)(" 指令来跳过这个元素和它的子元素的编译过程。注意所有的模板语法也都会失效。"),ja=(0,e.Uk)("设置 "),Ma={href:"https://v3.vuejs.org/api/application-config.html#compileroptions",target:"_blank",rel:"noopener noreferrer"},Ea=(0,e.Uk)("compilerOptions.isCustomElement"),qa=(0,e.Uk)(" 来告诉 Vue 模板编译器不要尝试作为组件来解析它们。 "),Ta=(0,e.Uk)("对于 "),La=(0,e._)("code",null,"@bundler-webpack",-1),Va=(0,e.Uk)(" ，设置 "),Pa=(0,e.Uk)("vue.compilerOptions"),ya=(0,e.Uk)("对于 "),za=(0,e._)("code",null,"@bundler-vite",-1),Ra=(0,e.Uk)(" ，设置 "),Ca=(0,e.Uk)("vuePluginOptions.template.compilerOptions"),Ha={},Aa=(0,a(3744).Z)(Ha,[["render",function(n,s){const a=(0,e.up)("ExternalLinkIcon"),Ha=(0,e.up)("RouterLink"),Aa=(0,e.up)("Badge");return(0,e.wg)(),(0,e.iD)(e.HY,null,[t,(0,e._)("p",null,[p,(0,e._)("a",r,[o,(0,e.Wm)(a)]),c]),u,(0,e._)("p",null,[i,(0,e._)("a",m,[k,(0,e.Wm)(a)]),d,(0,e._)("a",b,[g,(0,e.Wm)(a)]),h]),_,(0,e._)("p",null,[f,(0,e._)("a",v,[w,(0,e.Wm)(a)]),U,(0,e._)("a",x,[W,(0,e.Wm)(a)]),j]),M,E,(0,e._)("ul",null,[(0,e._)("li",null,[(0,e._)("a",q,[T,(0,e.Wm)(a)]),L]),(0,e._)("li",null,[(0,e._)("a",V,[P,(0,e.Wm)(a)]),y])]),z,R,(0,e._)("div",C,[H,(0,e._)("p",null,[A,(0,e._)("a",I,[B,(0,e.Wm)(a)]),D]),(0,e._)("p",null,[O,(0,e.Wm)(Ha,{to:"/reference/config.html#markdown-anchor"},{default:(0,e.w5)((()=>[F])),_:1})])]),S,(0,e._)("p",null,[G,(0,e._)("a",J,[N,(0,e.Wm)(a)]),Y]),K,(0,e._)("p",null,[(0,e.Wm)(Ha,{to:"/"},{default:(0,e.w5)((()=>[Z])),_:1}),Q,(0,e.Wm)(Ha,{to:"/reference/config.html"},{default:(0,e.w5)((()=>[X])),_:1}),$,(0,e.Wm)(Ha,{to:"/learn/getting-started.html"},{default:(0,e.w5)((()=>[nn])),_:1}),sn,(0,e._)("a",an,[en,(0,e.Wm)(a)]),ln,(0,e._)("a",tn,[pn,(0,e.Wm)(a)]),rn,(0,e._)("a",on,[cn,(0,e.Wm)(a)])]),un,(0,e._)("ul",null,[mn,(0,e._)("li",null,[kn,dn,bn,(0,e.Wm)(Ha,{to:"/learn/page.html#%E8%B7%AF%E7%94%B1"},{default:(0,e.w5)((()=>[gn])),_:1}),hn]),_n]),fn,vn,(0,e._)("ul",null,[wn,Un,(0,e._)("li",null,[xn,(0,e.Wm)(Ha,{to:"/reference/config.html#base"},{default:(0,e.w5)((()=>[Wn])),_:1}),jn,Mn,En,qn,Tn,(0,e.Wm)(Ha,{to:"/learn/assets.html#base-helper"},{default:(0,e.w5)((()=>[Ln])),_:1}),Vn])]),(0,e._)("div",Pn,[yn,zn,(0,e._)("p",null,[Rn,(0,e.Wm)(Ha,{to:"/reference/config.html#markdown-links"},{default:(0,e.w5)((()=>[Cn])),_:1})]),(0,e._)("p",null,[Hn,(0,e.Wm)(Ha,{to:"/reference/components.html#outboundlink"},{default:(0,e.w5)((()=>[An])),_:1})])]),In,Bn,(0,e._)("p",null,[Dn,(0,e._)("a",On,[Fn,(0,e.Wm)(a)]),Sn]),Gn,Jn,Nn,Yn,(0,e._)("div",Kn,[Zn,(0,e._)("p",null,[Qn,(0,e._)("a",Xn,[$n,(0,e.Wm)(a)]),ns]),(0,e._)("p",null,[ss,(0,e.Wm)(Ha,{to:"/reference/config.html#markdown-emoji"},{default:(0,e.w5)((()=>[as])),_:1})])]),es,(0,e._)("nav",ls,[(0,e._)("ul",null,[(0,e._)("li",null,[(0,e.Wm)(Ha,{to:"#语法扩展"},{default:(0,e.w5)((()=>[ts])),_:1}),(0,e._)("ul",null,[(0,e._)("li",null,[(0,e.Wm)(Ha,{to:"#内置"},{default:(0,e.w5)((()=>[ps])),_:1})]),(0,e._)("li",null,[(0,e.Wm)(Ha,{to:"#标题锚点"},{default:(0,e.w5)((()=>[rs])),_:1})]),(0,e._)("li",null,[(0,e.Wm)(Ha,{to:"#链接"},{default:(0,e.w5)((()=>[os])),_:1})]),(0,e._)("li",null,[(0,e.Wm)(Ha,{to:"#emoji"},{default:(0,e.w5)((()=>[cs])),_:1})]),(0,e._)("li",null,[(0,e.Wm)(Ha,{to:"#目录"},{default:(0,e.w5)((()=>[us])),_:1})]),(0,e._)("li",null,[(0,e.Wm)(Ha,{to:"#代码块"},{default:(0,e.w5)((()=>[is])),_:1})]),(0,e._)("li",null,[(0,e.Wm)(Ha,{to:"#导入代码块"},{default:(0,e.w5)((()=>[ms])),_:1})])])]),(0,e._)("li",null,[(0,e.Wm)(Ha,{to:"#在-markdown-中使用-vue"},{default:(0,e.w5)((()=>[ks])),_:1}),(0,e._)("ul",null,[(0,e._)("li",null,[(0,e.Wm)(Ha,{to:"#模板语法"},{default:(0,e.w5)((()=>[ds])),_:1})]),(0,e._)("li",null,[(0,e.Wm)(Ha,{to:"#组件"},{default:(0,e.w5)((()=>[bs])),_:1})])])]),(0,e._)("li",null,[(0,e.Wm)(Ha,{to:"#注意事项"},{default:(0,e.w5)((()=>[gs])),_:1}),(0,e._)("ul",null,[(0,e._)("li",null,[(0,e.Wm)(Ha,{to:"#已废弃的-html-标签"},{default:(0,e.w5)((()=>[hs])),_:1})])])])])]),_s,(0,e._)("div",fs,[vs,(0,e._)("p",null,[ws,(0,e._)("a",Us,[xs,(0,e.Wm)(a)]),Ws]),(0,e._)("p",null,[js,(0,e.Wm)(Ha,{to:"/reference/config.html#markdown-toc"},{default:(0,e.w5)((()=>[Ms])),_:1})])]),Es,(0,e._)("div",qs,[Ts,Ls,(0,e._)("p",null,[Vs,(0,e.Wm)(Ha,{to:"/reference/config.html#markdown-vpre"},{default:(0,e.w5)((()=>[Ps])),_:1})])]),ys,(0,e._)("div",zs,[Rs,Cs,(0,e._)("p",null,[Hs,(0,e.Wm)(Ha,{to:"/reference/config.html#markdown-importcode"},{default:(0,e.w5)((()=>[As])),_:1})])]),Is,Bs,(0,e._)("p",null,[Ds,(0,e.Wm)(Ha,{to:"/advanced/cookbook/markdown-and-vue-sfc.html"},{default:(0,e.w5)((()=>[Os])),_:1}),Fs]),Ss,Gs,Js,(0,e._)("p",null,[Ns,(0,e._)("a",Ys,[Ks,(0,e.Wm)(a)]),Zs]),Qs,(0,e._)("p",null,[((0,e.wg)(),(0,e.iD)(e.HY,null,(0,e.Ko)(3,(n=>(0,e._)("span",null," span: "+(0,l.zw)(n),1))),64))]),Xs,(0,e._)("p",null,[$s,na,sa,(0,e.Wm)(Aa,{text:"演示"})]),(0,e._)("div",aa,[ea,(0,e._)("p",null,[la,(0,e.Wm)(Ha,{to:"/reference/components.html"},{default:(0,e.w5)((()=>[ta])),_:1}),pa]),(0,e._)("p",null,[ra,(0,e.Wm)(Ha,{to:"/reference/default-theme/components.html"},{default:(0,e.w5)((()=>[oa])),_:1}),ca])]),ua,ia,(0,e._)("p",null,[ma,(0,e._)("a",ka,[da,(0,e.Wm)(a)]),ba,(0,e._)("a",ga,[ha,(0,e.Wm)(a)]),_a]),fa,va,(0,e._)("ul",null,[(0,e._)("li",null,[wa,(0,e._)("a",Ua,[xa,(0,e.Wm)(a)]),Wa]),(0,e._)("li",null,[ja,(0,e._)("a",Ma,[Ea,(0,e.Wm)(a)]),qa,(0,e._)("ul",null,[(0,e._)("li",null,[Ta,La,Va,(0,e.Wm)(Ha,{to:"/reference/bundler/webpack.html#vue"},{default:(0,e.w5)((()=>[Pa])),_:1})]),(0,e._)("li",null,[ya,za,Ra,(0,e.Wm)(Ha,{to:"/reference/bundler/vite.html#vuepluginoptions"},{default:(0,e.w5)((()=>[Ca])),_:1})])])])])],64)}]])}}]);