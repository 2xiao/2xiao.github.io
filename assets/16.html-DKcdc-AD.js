import{_ as n,o as s,c as a,a as p}from"./app-53EDpe6z.js";const t={},e=p(`<h1 id="_16-简化版-ref-实现" tabindex="-1"><a class="header-anchor" href="#_16-简化版-ref-实现" aria-hidden="true">#</a> 16. 简化版 Ref 实现</h1><p>简化版 Ref 实现，创建虚拟节点时获取 ref。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>    <span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createVnode</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> props<span class="token punctuation">,</span> children<span class="token operator">?</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> shapeFlag <span class="token operator">=</span> <span class="token function">isString</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span>
        <span class="token operator">?</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">ELEMENT</span> <span class="token comment">// 元素</span>
        <span class="token operator">:</span> <span class="token function">isObject</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span>
        <span class="token operator">?</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">STATEFUL_COMPONENT</span> <span class="token comment">// 组件</span>
        <span class="token operator">:</span> <span class="token function">isFunction</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span>
        <span class="token operator">?</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">FUNCTIONAL_COMPONENT</span>
        <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> vnode <span class="token operator">=</span> <span class="token punctuation">{</span>
        __v_isVnode<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        type<span class="token punctuation">,</span>
        props<span class="token punctuation">,</span>
        children<span class="token punctuation">,</span>
        key<span class="token operator">:</span> props<span class="token operator">?.</span>key<span class="token punctuation">,</span>
        el<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        shapeFlag<span class="token punctuation">,</span>
        ref<span class="token operator">:</span> props <span class="token operator">&amp;&amp;</span> props<span class="token punctuation">.</span>ref<span class="token punctuation">,</span> <span class="token comment">// 提取ref</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">setRef</span><span class="token punctuation">(</span>rawRef<span class="token punctuation">,</span> vnode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> refValue <span class="token operator">=</span>
		vnode<span class="token punctuation">.</span>shapeFlag <span class="token operator">&amp;</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">STATEFUL_COMPONENT</span>
			<span class="token operator">?</span> vnode<span class="token punctuation">.</span>component<span class="token punctuation">.</span>exposed <span class="token operator">||</span> vnode<span class="token punctuation">.</span>component<span class="token operator">!</span><span class="token punctuation">.</span>proxy
			<span class="token operator">:</span> vnode<span class="token punctuation">.</span>el<span class="token punctuation">;</span>

	<span class="token keyword">if</span> <span class="token punctuation">(</span>rawRef<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		rawRef<span class="token punctuation">.</span>value <span class="token operator">=</span> refValue<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">patch</span> <span class="token operator">=</span> <span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span> parentComponent <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token comment">// ...</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>ref <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 新ref 和 老ref</span>
		<span class="token function">setRef</span><span class="token punctuation">(</span>ref<span class="token punctuation">,</span> n2<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","16.html.vue"]]);export{r as default};