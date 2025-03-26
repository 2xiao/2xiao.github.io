import{_ as t,r as p,o as e,c as o,b as s,d as n,e as c,a as l}from"./app-z-OzXc2F.js";const i={},u=l(`<h1 id="es6-中数组新增了哪些扩展" tabindex="-1"><a class="header-anchor" href="#es6-中数组新增了哪些扩展" aria-hidden="true">#</a> ES6 中数组新增了哪些扩展？</h1><h2 id="一、扩展运算符的应用" tabindex="-1"><a class="header-anchor" href="#一、扩展运算符的应用" aria-hidden="true">#</a> 一、扩展运算符的应用</h2><p><strong>扩展运算符 (<code>...</code>)</strong> 用于将数组转为参数序列：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1 2 3</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1 2 3 4 5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常见用途" tabindex="-1"><a class="header-anchor" href="#常见用途" aria-hidden="true">#</a> 常见用途：</h3><ol><li><p><strong>函数调用</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">38</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token operator">...</span>numbers<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 42</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>复制数组</strong>（浅拷贝）：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> a2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>a1<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// [1, 2]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>合并数组</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;d&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> arr3 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>arr1<span class="token punctuation">,</span> <span class="token operator">...</span>arr2<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>转换类数组对象</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> divs <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>divs<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 将 NodeList 转为数组</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>字符串转数组</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&#39;h&#39;, &#39;e&#39;, &#39;l&#39;, &#39;l&#39;, &#39;o&#39;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><blockquote><p><strong>注意</strong>：扩展运算符生成的是浅拷贝，嵌套引用会共享地址。</p></blockquote><h2 id="二、构造函数新增方法" tabindex="-1"><a class="header-anchor" href="#二、构造函数新增方法" aria-hidden="true">#</a> 二、构造函数新增方法</h2><ol><li><p><strong><code>Array.from()</code></strong><br> 转换类数组对象或可遍历对象为数组：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> arrayLike <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">0</span><span class="token operator">:</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token operator">:</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>arrayLike<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&#39;a&#39;, &#39;b&#39;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong><code>Array.of()</code></strong><br> 将参数值生成数组：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [3, 11, 8]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h2 id="三、数组实例新增方法" tabindex="-1"><a class="header-anchor" href="#三、数组实例新增方法" aria-hidden="true">#</a> 三、数组实例新增方法</h2><h3 id="_1-copywithin" tabindex="-1"><a class="header-anchor" href="#_1-copywithin" aria-hidden="true">#</a> 1. <strong><code>copyWithin()</code></strong></h3><p>将数组指定位置的值复制到其他位置：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">copyWithin</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [4, 5, 3, 4, 5]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-find-与-findindex" tabindex="-1"><a class="header-anchor" href="#_2-find-与-findindex" aria-hidden="true">#</a> 2. <strong><code>find()</code> 与 <code>findIndex()</code></strong></h3><ul><li><code>find()</code> 返回第一个符合条件的元素：<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><code>findIndex()</code> 返回第一个符合条件元素的位置：<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h3 id="_3-fill" tabindex="-1"><a class="header-anchor" href="#_3-fill" aria-hidden="true">#</a> 3. <strong><code>fill()</code></strong></h3><p>用指定值填充数组：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [7, 7, 7]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-keys-、values-、entries" tabindex="-1"><a class="header-anchor" href="#_4-keys-、values-、entries" aria-hidden="true">#</a> 4. <strong><code>keys()</code>、<code>values()</code>、<code>entries()</code></strong></h3><ul><li>遍历键、值、键值对：<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token punctuation">[</span>index<span class="token punctuation">,</span> value<span class="token punctuation">]</span> <span class="token keyword">of</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 0 &#39;a&#39;</span>
<span class="token comment">// 1 &#39;b&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_5-includes" tabindex="-1"><a class="header-anchor" href="#_5-includes" aria-hidden="true">#</a> 5. <strong><code>includes()</code></strong></h3><p>检查数组是否包含某值：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">NaN</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_6-flat-和-flatmap" tabindex="-1"><a class="header-anchor" href="#_6-flat-和-flatmap" aria-hidden="true">#</a> 6. <strong><code>flat()</code> 和 <code>flatMap()</code></strong></h3><ul><li><strong><code>flat()</code></strong>：将多层嵌套数组拍平成单层：<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">flat</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1, 2, 3, 4]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><strong><code>flatMap()</code></strong>：映射并展平：<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">flatMap</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>x<span class="token punctuation">,</span> x <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1, 2, 2, 4, 3, 6]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h2 id="四、数组空位处理" tabindex="-1"><a class="header-anchor" href="#四、数组空位处理" aria-hidden="true">#</a> 四、数组空位处理</h2><p>ES6 明确将空位视为 <code>undefined</code>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">,</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [undefined, 1, undefined]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="五、排序稳定性" tabindex="-1"><a class="header-anchor" href="#五、排序稳定性" aria-hidden="true">#</a> 五、排序稳定性</h2><p><code>sort()</code> 方法变为稳定排序：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;apple&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;banana&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;apple&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
arr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 原有顺序的相对位置保持不变</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><hr>`,32),r={href:"https://es6.ruanyifeng.com/#docs/array",target:"_blank",rel:"noopener noreferrer"};function d(k,m){const a=p("ExternalLinkIcon");return e(),o("div",null,[u,s("p",null,[n("更多内容可参考"),s("a",r,[n("阮一峰的 ES6 教程"),c(a)]),n("。")])])}const b=t(i,[["render",d],["__file","array.html.vue"]]);export{b as default};
