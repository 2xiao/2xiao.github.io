import{_ as n,o as s,c as a,a as t}from"./app-z-OzXc2F.js";const p={},e=t(`<h1 id="_8-实现-runtime-dom" tabindex="-1"><a class="header-anchor" href="#_8-实现-runtime-dom" aria-hidden="true">#</a> 8. 实现 runtime-dom</h1><h2 id="_1-渲染器的作用" tabindex="-1"><a class="header-anchor" href="#_1-渲染器的作用" aria-hidden="true">#</a> 1.渲染器的作用</h2><p>渲染器的作用是把虚拟 DOM 渲染为特定平台上的真实元素。在浏览器中，渲染器会把虚拟 DOM 渲染成真实 DOM 元素。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
	createRenderer<span class="token punctuation">,</span>
	h<span class="token punctuation">,</span>
	render
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/node_modules/@vue/runtime-dom/dist/runtime-dom.esm-browser.js&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> renderer <span class="token operator">=</span> <span class="token function">createRenderer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token function">createElement</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token function">setElementText</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> text<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		el<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> text<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token function">insert</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> container<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		container<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 自定义渲染器</span>
renderer<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;h1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;hello world&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 内置渲染器</span>
<span class="token function">render</span><span class="token punctuation">(</span><span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;h1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;hello world&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-创建-runtime-dom-包" tabindex="-1"><a class="header-anchor" href="#_2-创建-runtime-dom-包" aria-hidden="true">#</a> 2.创建 runtime-dom 包</h2><p>runtime-dom 针对浏览器运行时，包括 DOM API 、属性、事件处理等</p><p><strong>runtime-dom/package.json</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@vue/runtime-dom&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index.js&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dist/runtime-dom.esm-bundler.js&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;unpkg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dist/runtime-dom.global.js&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;buildOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;VueRuntimeDOM&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;formats&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;esm-bundler&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;cjs&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;global&quot;</span><span class="token punctuation">]</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    <span class="token function">pnpm</span> <span class="token function">install</span> @vue/shared@workspace <span class="token parameter variable">--filter</span> @vue/runtime-dom
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-实现节点常用操作" tabindex="-1"><a class="header-anchor" href="#_3-实现节点常用操作" aria-hidden="true">#</a> 3.实现节点常用操作</h2><blockquote><p><code>runtime-dom/src/nodeOps</code> 这里存放常见 DOM 操作 API，不同运行时提供的具体实现不一样，最终将操作方法传递到<code>runtime-core</code>中，所以<code>runtime-core</code>不需要关心平台相关代码~</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> nodeOps <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token function-variable function">insert</span><span class="token operator">:</span> <span class="token punctuation">(</span>child<span class="token punctuation">,</span> parent<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token comment">// 添加节点</span>
		parent<span class="token punctuation">.</span><span class="token function">insertBefore</span><span class="token punctuation">(</span>child<span class="token punctuation">,</span> anchor <span class="token operator">||</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token function-variable function">remove</span><span class="token operator">:</span> <span class="token punctuation">(</span>child<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token comment">// 节点删除</span>
		<span class="token keyword">const</span> parent <span class="token operator">=</span> child<span class="token punctuation">.</span>parentNode<span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>parent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			parent<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token function-variable function">createElement</span><span class="token operator">:</span> <span class="token punctuation">(</span>tag<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 创建节点</span>
	<span class="token function-variable function">createText</span><span class="token operator">:</span> <span class="token punctuation">(</span>text<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> document<span class="token punctuation">.</span><span class="token function">createTextNode</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 创建文本</span>
	<span class="token function-variable function">setText</span><span class="token operator">:</span> <span class="token punctuation">(</span>node<span class="token punctuation">,</span> text<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>nodeValue <span class="token operator">=</span> text<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">//  设置文本节点内容</span>
	<span class="token function-variable function">setElementText</span><span class="token operator">:</span> <span class="token punctuation">(</span>el<span class="token punctuation">,</span> text<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>textContent <span class="token operator">=</span> text<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 设置文本元素中的内容</span>
	<span class="token function-variable function">parentNode</span><span class="token operator">:</span> <span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> node<span class="token punctuation">.</span>parentNode<span class="token punctuation">,</span> <span class="token comment">// 父亲节点</span>
	<span class="token function-variable function">nextSibling</span><span class="token operator">:</span> <span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> node<span class="token punctuation">.</span>nextSibling<span class="token punctuation">,</span> <span class="token comment">// 下一个节点</span>
	<span class="token function-variable function">querySelector</span><span class="token operator">:</span> <span class="token punctuation">(</span>selector<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>selector<span class="token punctuation">)</span> <span class="token comment">// 搜索元素</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-比对属性方法" tabindex="-1"><a class="header-anchor" href="#_4-比对属性方法" aria-hidden="true">#</a> 4.比对属性方法</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">patchProp</span> <span class="token operator">=</span> <span class="token punctuation">(</span>el<span class="token punctuation">,</span> key<span class="token punctuation">,</span> prevValue<span class="token punctuation">,</span> nextValue<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">===</span> <span class="token string">&#39;class&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">patchClass</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> nextValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">===</span> <span class="token string">&#39;style&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">patchStyle</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> prevValue<span class="token punctuation">,</span> nextValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^on[^a-z]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">patchEvent</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> key<span class="token punctuation">,</span> nextValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		<span class="token function">patchAttr</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> key<span class="token punctuation">,</span> nextValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="操作类名" tabindex="-1"><a class="header-anchor" href="#操作类名" aria-hidden="true">#</a> 操作类名</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">patchClass</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 根据最新值设置类名</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		el<span class="token punctuation">.</span><span class="token function">removeAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;class&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		el<span class="token punctuation">.</span>className <span class="token operator">=</span> value<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="操作样式" tabindex="-1"><a class="header-anchor" href="#操作样式" aria-hidden="true">#</a> 操作样式</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">patchStyle</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> prev<span class="token punctuation">,</span> next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 更新style</span>
	<span class="token keyword">const</span> style <span class="token operator">=</span> el<span class="token punctuation">.</span>style<span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 用最新的直接覆盖</span>
		style<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> next<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>prev<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> prev<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 老的有新的没有删除</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>next<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				style<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="操作事件" tabindex="-1"><a class="header-anchor" href="#操作事件" aria-hidden="true">#</a> 操作事件</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">createInvoker</span><span class="token punctuation">(</span>initialValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> <span class="token function-variable function">invoker</span> <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> invoker<span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
	invoker<span class="token punctuation">.</span>value <span class="token operator">=</span> initialValue<span class="token punctuation">;</span>
	<span class="token keyword">return</span> invoker<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">patchEvent</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> rawName<span class="token punctuation">,</span> nextValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 更新事件</span>
	<span class="token keyword">const</span> invokers <span class="token operator">=</span> el<span class="token punctuation">.</span>_vei <span class="token operator">||</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>_vei <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> exisitingInvoker <span class="token operator">=</span> invokers<span class="token punctuation">[</span>rawName<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 是否缓存过</span>

	<span class="token keyword">if</span> <span class="token punctuation">(</span>nextValue <span class="token operator">&amp;&amp;</span> exisitingInvoker<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		exisitingInvoker<span class="token punctuation">.</span>value <span class="token operator">=</span> nextValue<span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> name <span class="token operator">=</span> rawName<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 转化事件是小写的</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>nextValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 缓存函数</span>
			<span class="token keyword">const</span> invoker <span class="token operator">=</span> <span class="token punctuation">(</span>invokers<span class="token punctuation">[</span>rawName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">createInvoker</span><span class="token punctuation">(</span>nextValue<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			el<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> invoker<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>exisitingInvoker<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			el<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> exisitingInvoker<span class="token punctuation">)</span><span class="token punctuation">;</span>
			invokers<span class="token punctuation">[</span>rawName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>在绑定事件的时候，绑定一个伪造的事件处理函数 invoker，把真正的事件处理函数设置为 invoker.value 属性的值</p></blockquote><h3 id="操作属性" tabindex="-1"><a class="header-anchor" href="#操作属性" aria-hidden="true">#</a> 操作属性</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">patchAttr</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 更新属性</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		el<span class="token punctuation">.</span><span class="token function">removeAttribute</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		el<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-创建渲染器" tabindex="-1"><a class="header-anchor" href="#_5-创建渲染器" aria-hidden="true">#</a> 5.创建渲染器</h2><blockquote><p>最终我们在 <code>index.js</code>中引入写好的方法，渲染选项就准备好了。 稍后将虚拟 DOM 转化成真实 DOM 会调用这些方法</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> nodeOps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./nodeOps&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> patchProp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./patchProp&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// 准备好所有渲染时所需要的的属性</span>
<span class="token keyword">const</span> renderOptions <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span> patchProp <span class="token punctuation">}</span><span class="token punctuation">,</span> nodeOps<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> container<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token function">createRenderer</span><span class="token punctuation">(</span>renderOptions<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> container<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>createRenderer 接受渲染所需的方法，h 方法为创建虚拟节点的方法。这两个方法和平台无关，所以我们将这两个方法在 runtime-core 中实现。</p></blockquote>`,27),o=[e];function c(i,u){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","8.html.vue"]]);export{k as default};
