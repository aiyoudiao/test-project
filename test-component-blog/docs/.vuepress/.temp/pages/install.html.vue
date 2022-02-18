<template><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<h3 id="npm-安装" tabindex="-1"><a class="header-anchor" href="#npm-安装" aria-hidden="true">#</a> npm 安装</h3>
<p>推荐使用 npm 的方式安装，它能更好的和<a href="https://webpack.js.org/" target="_blank" rel="noopener noreferrer">webpack<ExternalLinkIcon/></a>打包工具配合使用</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i element3 -S
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="cdn" tabindex="-1"><a class="header-anchor" href="#cdn" aria-hidden="true">#</a> CDN</h3>
<p>目前可以通过<a href="https://unpkg.com/element3" target="_blank" rel="noopener noreferrer">unpkg.com/element3<ExternalLinkIcon/></a> 获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- 引入样式 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>
  <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span>
  <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://unpkg.com/element3/lib/theme-chalk/index.css<span class="token punctuation">"</span></span>
<span class="token punctuation">/></span></span>
<span class="token comment">&lt;!-- 引入组件库 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://unpkg.com/element3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>我们建议使用 CDN 引入 Element3 的用户在链接地址上锁定版本，以免将来Element3 升级时受到非兼容性更新的影响。锁定版本的方法请查看<a href="https://unpkg.com" target="_blank" rel="noopener noreferrer">unpkg.com<ExternalLinkIcon/></a>。</p>
</div>
<h3 id="hello-world" tabindex="-1"><a class="header-anchor" href="#hello-world" aria-hidden="true">#</a> Hello world</h3>
<p>通过CDN 的方式我们可以很容易的使用Element3 写出一个 Hello world 页面。<a href="https://codepen.io/imjustaman/pen/abZajYg" target="_blank" rel="noopener noreferrer">在线演示<ExternalLinkIcon/></a></p>
<iframe height="265" style="width: 100%;" scrolling="no" title="Element3 Demo" src="https://codepen.io/imjustaman/embed/abZajYg?height=265&theme-id=light&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/imjustaman/pen/abZajYg'>Element3 Demo</a> by ImJustAMan
  (<a href='https://codepen.io/imjustaman'>@imjustaman</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
如果是通过 npm 安装，并希望配合 webpack 使用，请阅读下一节：[快速上手](/#/zh-CN/component/quickstart)。</template>
