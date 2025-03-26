import{_ as n,o as s,c as a,a as t}from"./app-z-OzXc2F.js";const p={},e=t(`<h1 id="_17-实现-teleport" tabindex="-1"><a class="header-anchor" href="#_17-实现-teleport" aria-hidden="true">#</a> 17. 实现 Teleport</h1><h2 id="_1-teleport组件介绍" tabindex="-1"><a class="header-anchor" href="#_1-teleport组件介绍" aria-hidden="true">#</a> 1.<code>Teleport</code>组件介绍</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token function">render</span><span class="token punctuation">(</span><span class="token function">h</span><span class="token punctuation">(</span>Teleport<span class="token punctuation">,</span> <span class="token punctuation">{</span> to<span class="token operator">:</span> <span class="token string">&#39;#root&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">123</span><span class="token punctuation">,</span> <span class="token number">456</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> app<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Vue3 新增组件，该组件可以将制定内容渲染到制定容器中。默认内容都是渲染到元素<code>app</code>内，我们可以将其渲染到任意节点 （传送门）</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> shapeFlag <span class="token operator">=</span> <span class="token function">isString</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span>
	<span class="token operator">?</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">ELEMENT</span>
	<span class="token operator">:</span> <span class="token function">isTeleport</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token comment">// 如果是穿梭框</span>
	<span class="token operator">?</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">TELEPORT</span>
	<span class="token operator">:</span> <span class="token function">isObject</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span>
	<span class="token operator">?</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">STATEFUL_COMPONENT</span>
	<span class="token operator">:</span> <span class="token function">isFunction</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span>
	<span class="token operator">?</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">FUNCTIONAL_COMPONENT</span>
	<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 函数式组件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>创建虚拟节点的时候标识组件类型。</p></blockquote><h2 id="_2-teleport-挂载" tabindex="-1"><a class="header-anchor" href="#_2-teleport-挂载" aria-hidden="true">#</a> 2.<code>Teleport</code> 挂载</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>shapeFlag <span class="token operator">&amp;</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">TELEPORT</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	type<span class="token punctuation">.</span><span class="token function">process</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">,</span> <span class="token punctuation">{</span>
		mountChildren<span class="token punctuation">,</span> <span class="token comment">// 挂载孩子</span>
		patchChildren<span class="token punctuation">,</span> <span class="token comment">// 更新孩子</span>
		<span class="token function">move</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 移动元素</span>
			<span class="token function">hostInsert</span><span class="token punctuation">(</span>
				vnode<span class="token punctuation">.</span>component <span class="token operator">?</span> vnode<span class="token punctuation">.</span>component<span class="token punctuation">.</span>subTree<span class="token punctuation">.</span>el <span class="token operator">:</span> vnode<span class="token punctuation">.</span>el<span class="token punctuation">,</span>
				container<span class="token punctuation">,</span>
				anchor
			<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> TeleportImpl <span class="token operator">=</span> <span class="token punctuation">{</span>
	__isTeleport<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	<span class="token function">remove</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> unmount<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> <span class="token punctuation">{</span> shapeFlag<span class="token punctuation">,</span> children <span class="token punctuation">}</span> <span class="token operator">=</span> vnode<span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>shapeFlag <span class="token operator">&amp;</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">ARRAY_CHILDREN</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> children<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">const</span> child <span class="token operator">=</span> children<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
				<span class="token function">unmount</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token function">process</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">,</span> internals<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> <span class="token punctuation">{</span> mountChildren<span class="token punctuation">,</span> patchChildren<span class="token punctuation">,</span> move <span class="token punctuation">}</span> <span class="token operator">=</span> internals<span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>n1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 创建一个目标</span>
			<span class="token keyword">const</span> target <span class="token operator">=</span> <span class="token punctuation">(</span>n2<span class="token punctuation">.</span>target <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>n2<span class="token punctuation">.</span>props<span class="token punctuation">.</span>to<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token function">mountChildren</span><span class="token punctuation">(</span>n2<span class="token punctuation">.</span>children<span class="token punctuation">,</span> target<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token function">patchChildren</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 比对儿子</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>n2<span class="token punctuation">.</span>props<span class="token punctuation">.</span>to <span class="token operator">!==</span> n1<span class="token punctuation">.</span>props<span class="token punctuation">.</span>to<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// 更新并且移动位置</span>
				<span class="token comment">// 获取下一个元素</span>
				<span class="token keyword">const</span> nextTarget <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>n2<span class="token punctuation">.</span>props<span class="token punctuation">.</span>to<span class="token punctuation">)</span><span class="token punctuation">;</span>
				n2<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">move</span><span class="token punctuation">(</span>child<span class="token punctuation">,</span> nextTarget<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">isTeleport</span> <span class="token operator">=</span> <span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> type<span class="token punctuation">.</span>__isTeleport<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-teleport-卸载" tabindex="-1"><a class="header-anchor" href="#_3-teleport-卸载" aria-hidden="true">#</a> 3.<code>Teleport</code> 卸载</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token function-variable function">unmount</span> <span class="token operator">=</span> <span class="token punctuation">(</span>vnode<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> <span class="token punctuation">{</span> shapeFlag <span class="token punctuation">}</span> <span class="token operator">=</span> vnode<span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>type <span class="token operator">===</span> Fragment<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">unmountChildren</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>shapeFlag <span class="token operator">&amp;</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">COMPONENT</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">unmount</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>component<span class="token punctuation">.</span>subTree<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>shapeFlag <span class="token operator">&amp;</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">TELEPORT</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		vnode<span class="token punctuation">.</span>type<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> unmount<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		<span class="token function">hostRemove</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>el<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),o=[e];function c(u,l){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","17.html.vue"]]);export{k as default};
