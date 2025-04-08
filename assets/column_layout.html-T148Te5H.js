import{_ as n,o as s,c as a,e as t}from"./app-8BcPXs48.js";const p={},e=t(`<h1 id="如何实现两栏布局-右侧自适应-三栏布局中间自适应呢" tabindex="-1"><a class="header-anchor" href="#如何实现两栏布局-右侧自适应-三栏布局中间自适应呢" aria-hidden="true">#</a> 如何实现两栏布局，右侧自适应？三栏布局中间自适应呢？</h1><h2 id="一、背景" tabindex="-1"><a class="header-anchor" href="#一、背景" aria-hidden="true">#</a> 一、背景</h2><p>在日常布局中，无论是两栏布局还是三栏布局，使用的频率都非常高</p><h3 id="两栏布局" tabindex="-1"><a class="header-anchor" href="#两栏布局" aria-hidden="true">#</a> 两栏布局</h3><p>两栏布局实现效果就是将页面分割成左右宽度不等的两列，宽度较小的列设置为固定宽度，剩余宽度由另一列撑满，</p><p>比如 <code>Ant Design</code> 文档，蓝色区域为主要内容布局容器，侧边栏为次要内容布局容器</p><blockquote><p>这里称宽度较小的列父元素为次要布局容器，宽度较大的列父元素为主要布局容器</p></blockquote><p>这种布局适用于内容上具有明显主次关系的网页</p><h3 id="三栏布局" tabindex="-1"><a class="header-anchor" href="#三栏布局" aria-hidden="true">#</a> 三栏布局</h3><p>三栏布局按照左中右的顺序进行排列，通常中间列最宽，左右两列次之</p><h2 id="二、两栏布局" tabindex="-1"><a class="header-anchor" href="#二、两栏布局" aria-hidden="true">#</a> 二、两栏布局</h2><p>两栏布局非常常见，往往是以一个定宽栏和一个自适应的栏并排展示存在</p><p>实现思路也非常的简单：</p><ul><li>使用 float 左浮左边栏</li><li>右边模块使用 margin-left 撑出内容块做内容展示</li><li>为父级元素添加 BFC，防止下方元素飞到上方内容</li></ul><p>代码如下：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
	<span class="token selector">.box</span><span class="token punctuation">{</span>
	    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span> 添加BFC
	<span class="token punctuation">}</span>
	<span class="token selector">.left</span> <span class="token punctuation">{</span>
	    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
	    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
	    <span class="token property">background-color</span><span class="token punctuation">:</span> gray<span class="token punctuation">;</span>
	    <span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">.right</span> <span class="token punctuation">{</span>
	    <span class="token property">margin-left</span><span class="token punctuation">:</span> 210px<span class="token punctuation">;</span>
	    <span class="token property">background-color</span><span class="token punctuation">:</span> lightgray<span class="token punctuation">;</span>
	    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>left<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>左边<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>右边<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还有一种更为简单的使用则是采取：flex 弹性布局</p><h3 id="flex-弹性布局" tabindex="-1"><a class="header-anchor" href="#flex-弹性布局" aria-hidden="true">#</a> flex 弹性布局</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
	<span class="token selector">.box</span> <span class="token punctuation">{</span>
		<span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">.left</span> <span class="token punctuation">{</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">.right</span> <span class="token punctuation">{</span>
		<span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>left<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>左边<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>右边<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>flex</code>可以说是最好的方案了，代码少，使用简单</p><p>注意的是，<code>flex</code>容器的一个默认属性值:<code>align-items: stretch;</code></p><p>这个属性导致了列等高的效果。 为了让两个盒子高度自动，需要设置: <code>align-items: flex-start</code></p><h2 id="三、三栏布局" tabindex="-1"><a class="header-anchor" href="#三、三栏布局" aria-hidden="true">#</a> 三、三栏布局</h2><p>实现三栏布局中间自适应的布局方式有：</p><ul><li>两边使用 float，中间使用 margin</li><li>两边使用 absolute，中间使用 margin</li><li>两边使用 float 和负 margin</li><li>display: table 实现</li><li>flex 实现</li><li>grid 网格布局</li></ul><h3 id="两边使用-float-中间使用-margin" tabindex="-1"><a class="header-anchor" href="#两边使用-float-中间使用-margin" aria-hidden="true">#</a> 两边使用 float，中间使用 margin</h3><p>需要将中间的内容放在<code>html</code>结构最后，否则右侧会臣在中间内容的下方</p><p>实现代码如下：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
	<span class="token selector">.wrap</span> <span class="token punctuation">{</span>
	    <span class="token property">background</span><span class="token punctuation">:</span> #eee<span class="token punctuation">;</span>
	    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span> &lt;!-- 生成BFC，计算高度时考虑浮动的元素 --&gt;
	    <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
	    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">.left</span> <span class="token punctuation">{</span>
	    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
	    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
	    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
	    <span class="token property">background</span><span class="token punctuation">:</span> coral<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">.right</span> <span class="token punctuation">{</span>
	    <span class="token property">width</span><span class="token punctuation">:</span> 120px<span class="token punctuation">;</span>
	    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
	    <span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
	    <span class="token property">background</span><span class="token punctuation">:</span> lightblue<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">.middle</span> <span class="token punctuation">{</span>
	    <span class="token property">margin-left</span><span class="token punctuation">:</span> 220px<span class="token punctuation">;</span>
	    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
	    <span class="token property">background</span><span class="token punctuation">:</span> lightpink<span class="token punctuation">;</span>
	    <span class="token property">margin-right</span><span class="token punctuation">:</span> 140px<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wrap<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>left<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>左侧<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>右侧<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>middle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>中间<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>原理如下：</p><ul><li>两边固定宽度，中间宽度自适应。</li><li>利用中间元素的 margin 值控制两边的间距</li><li>宽度小于左右部分宽度之和时，右侧部分会被挤下去</li></ul><p>这种实现方式存在缺陷：</p><ul><li><p>主体内容是最后加载的。</p></li><li><p>右边在主体内容之前，如果是响应式设计，不能简单的换行展示</p></li></ul><h3 id="两边使用-absolute-中间使用-margin" tabindex="-1"><a class="header-anchor" href="#两边使用-absolute-中间使用-margin" aria-hidden="true">#</a> 两边使用 absolute，中间使用 margin</h3><p>基于绝对定位的三栏布局：注意绝对定位的元素脱离文档流，相对于最近的已经定位的祖先元素进行定位。无需考虑 HTML 中结构的顺序</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
	<span class="token selector">.container</span> <span class="token punctuation">{</span>
		<span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token selector">.left,
	.right,
	.main</span> <span class="token punctuation">{</span>
		<span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
		<span class="token property">line-height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
		<span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token selector">.left</span> <span class="token punctuation">{</span>
		<span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
		<span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
		<span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
		<span class="token property">background</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token selector">.right</span> <span class="token punctuation">{</span>
		<span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
		<span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
		<span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
		<span class="token property">background</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token selector">.main</span> <span class="token punctuation">{</span>
		<span class="token property">margin</span><span class="token punctuation">:</span> 0 110px<span class="token punctuation">;</span>
		<span class="token property">background</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
		<span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>left<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>左边固定宽度<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>右边固定宽度<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>main<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>中间自适应<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实现流程：</p><ul><li>左右两边使用绝对定位，固定在两侧。</li><li>中间占满一行，但通过 margin 和左右两边留出 10px 的间隔</li></ul><h3 id="两边使用-float-和负-margin" tabindex="-1"><a class="header-anchor" href="#两边使用-float-和负-margin" aria-hidden="true">#</a> 两边使用 float 和负 margin</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
	<span class="token selector">.left,
	.right,
	.main</span> <span class="token punctuation">{</span>
		<span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
		<span class="token property">line-height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
		<span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token selector">.main-wrapper</span> <span class="token punctuation">{</span>
		<span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token selector">.main</span> <span class="token punctuation">{</span>
		<span class="token property">margin</span><span class="token punctuation">:</span> 0 110px<span class="token punctuation">;</span>
		<span class="token property">background</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
		<span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token selector">.left,
	.right</span> <span class="token punctuation">{</span>
		<span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
		<span class="token property">margin-left</span><span class="token punctuation">:</span> -100%<span class="token punctuation">;</span>
		<span class="token property">background</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token selector">.right</span> <span class="token punctuation">{</span>
		<span class="token property">margin-left</span><span class="token punctuation">:</span> -100px<span class="token punctuation">;</span> <span class="token comment">/* 同自身宽度 */</span>
	<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>main-wrapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>main<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>中间自适应<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>left<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>左边固定宽度<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>右边固定宽度<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实现过程：</p><ul><li>中间使用了双层标签，外层是浮动的，以便左中右能在同一行展示</li><li>左边通过使用负 margin-left:-100%，相当于中间的宽度，所以向上偏移到左侧</li><li>右边通过使用负 margin-left:-100px，相当于自身宽度，所以向上偏移到最右侧</li></ul><p>缺点：</p><ul><li>增加了 .main-wrapper 一层，结构变复杂</li><li>使用负 margin，调试也相对麻烦</li></ul><h3 id="使用-display-table-实现" tabindex="-1"><a class="header-anchor" href="#使用-display-table-实现" aria-hidden="true">#</a> 使用 display: table 实现</h3><p><code>&lt;table&gt;</code> 标签用于展示行列数据，不适合用于布局。但是可以使用 <code>display: table</code> 来实现布局的效果</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
	<span class="token selector">.container</span> <span class="token punctuation">{</span>
		<span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
		<span class="token property">line-height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
		<span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
		<span class="token property">display</span><span class="token punctuation">:</span> table<span class="token punctuation">;</span>
		<span class="token property">table-layout</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token selector">.left,
	.right,
	.main</span> <span class="token punctuation">{</span>
		<span class="token property">display</span><span class="token punctuation">:</span> table-cell<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token selector">.left,
	.right</span> <span class="token punctuation">{</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
		<span class="token property">background</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token selector">.main</span> <span class="token punctuation">{</span>
		<span class="token property">background</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
		<span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>left<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>左边固定宽度<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>main<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>中间自适应<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>右边固定宽度<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实现原理：</p><ul><li>层通过 display: table 设置为表格，设置 table-layout: fixed\`表示列宽自身宽度决定，而不是自动计算。</li><li>内层的左中右通过 display: table-cell 设置为表格单元。</li><li>左右设置固定宽度，中间设置 width: 100% 填充剩下的宽度</li></ul><h3 id="使用-flex-实现" tabindex="-1"><a class="header-anchor" href="#使用-flex-实现" aria-hidden="true">#</a> 使用 flex 实现</h3><p>利用<code>flex</code>弹性布局，可以简单实现中间自适应</p><p>代码如下：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
	<span class="token selector">.wrap</span> <span class="token punctuation">{</span>
		<span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
		<span class="token property">justify-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token selector">.left,
	.right,
	.middle</span> <span class="token punctuation">{</span>
		<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token selector">.left</span> <span class="token punctuation">{</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
		<span class="token property">background</span><span class="token punctuation">:</span> coral<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token selector">.right</span> <span class="token punctuation">{</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 120px<span class="token punctuation">;</span>
		<span class="token property">background</span><span class="token punctuation">:</span> lightblue<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token selector">.middle</span> <span class="token punctuation">{</span>
		<span class="token property">background</span><span class="token punctuation">:</span> #555<span class="token punctuation">;</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
		<span class="token property">margin</span><span class="token punctuation">:</span> 0 20px<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wrap<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>left<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>左侧<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>middle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>中间<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>右侧<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实现过程：</p><ul><li>仅需将容器设置为<code>display:flex;</code>，</li><li>盒内元素两端对其，将中间元素设置为<code>100%</code>宽度，或者设为<code>flex:1</code>，即可填充空白</li><li>盒内元素的高度撑开容器的高度</li></ul><p>优点：</p><ul><li>结构简单直观</li><li>可以结合 flex 的其他功能实现更多效果，例如使用 order 属性调整显示顺序，让主体内容优先加载，但展示在中间</li></ul><h3 id="grid-网格布局" tabindex="-1"><a class="header-anchor" href="#grid-网格布局" aria-hidden="true">#</a> grid 网格布局</h3><p>代码如下：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
	<span class="token selector">.wrap</span> <span class="token punctuation">{</span>
		<span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
		<span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 300px auto 300px<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token selector">.left,
	.right,
	.middle</span> <span class="token punctuation">{</span>
		<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token selector">.left</span> <span class="token punctuation">{</span>
		<span class="token property">background</span><span class="token punctuation">:</span> coral<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token selector">.right</span> <span class="token punctuation">{</span>
		<span class="token property">background</span><span class="token punctuation">:</span> lightblue<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token selector">.middle</span> <span class="token punctuation">{</span>
		<span class="token property">background</span><span class="token punctuation">:</span> #555<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wrap<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>left<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>左侧<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>middle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>中间<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>右侧<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>跟<code>flex</code>弹性布局一样的简单</p><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2><ul><li><p>https://zhuqingguang.github.io/2017/08/16/adapting-two-layout/</p></li><li><p>https://segmentfault.com/a/1190000008705541</p></li></ul>`,63),l=[e];function c(o,i){return s(),a("div",null,l)}const k=n(p,[["render",c],["__file","column_layout.html.vue"]]);export{k as default};
