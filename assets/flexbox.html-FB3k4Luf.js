import{_ as e,o as s,c as n,a}from"./app-z-OzXc2F.js";const i="/assets/interview-css-15-WkdjpVxQ.png",l="/assets/interview-css-16-JFW-lIO_.png",c="/assets/interview-css-17-m8dSuRig.png",t="/assets/interview-css-18-UopJ1eCh.png",o="/assets/interview-css-19-9PTws5P1.png",d="/assets/interview-css-20-NqlwRPM0.png",p="/assets/interview-css-21-vC8t1omQ.png",r="/assets/interview-css-22-rWfkgCgi.png",u={},f=a('<h1 id="说说-flexbox-弹性盒布局模型-以及适用场景" tabindex="-1"><a class="header-anchor" href="#说说-flexbox-弹性盒布局模型-以及适用场景" aria-hidden="true">#</a> 说说 flexbox（弹性盒布局模型）,以及适用场景？</h1><h2 id="一、是什么" tabindex="-1"><a class="header-anchor" href="#一、是什么" aria-hidden="true">#</a> 一、是什么</h2><p><code>Flexible Box</code> 简称 <code>flex</code>，意为”弹性布局”，可以简便、完整、响应式地实现各种页面布局</p><p>采用 Flex 布局的元素，称为<code>flex</code>容器<code>container</code></p><p>它的所有子元素自动成为容器成员，称为<code>flex</code>项目<code>item</code></p><figure><img src="'+i+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>容器中默认存在两条轴，主轴和交叉轴，呈 90 度关系。项目默认沿主轴排列，通过<code>flex-direction</code>来决定主轴的方向</p><p>每根轴都有起点和终点，这对于元素的对齐非常重要</p><h2 id="二、属性" tabindex="-1"><a class="header-anchor" href="#二、属性" aria-hidden="true">#</a> 二、属性</h2><p>关于<code>flex</code>常用的属性，我们可以划分为容器属性和容器成员属性</p><p>容器属性有：</p><ul><li>flex-direction</li><li>flex-wrap</li><li>flex-flow</li><li>justify-content</li><li>align-items</li><li>align-content</li></ul><h3 id="flex-direction" tabindex="-1"><a class="header-anchor" href="#flex-direction" aria-hidden="true">#</a> flex-direction</h3><p>决定主轴的方向(即项目的排列方向)</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
	<span class="token property">flex-direction</span><span class="token punctuation">:</span> row | row-reverse | column | column-reverse<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>属性对应如下：</p><ul><li>row（默认值）：主轴为水平方向，起点在左端</li><li>row-reverse：主轴为水平方向，起点在右端</li><li>column：主轴为垂直方向，起点在上沿。</li><li>column-reverse：主轴为垂直方向，起点在下沿</li></ul><p>如下图所示：</p><figure><img src="`+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="flex-wrap" tabindex="-1"><a class="header-anchor" href="#flex-wrap" aria-hidden="true">#</a> flex-wrap</h3><p>弹性元素永远沿主轴排列，那么如果主轴排不下，通过<code>flex-wrap</code>决定容器内项目是否可换行</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
	<span class="token property">flex-wrap</span><span class="token punctuation">:</span> nowrap | wrap | wrap-reverse<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>属性对应如下：</p><ul><li>nowrap（默认值）：不换行</li><li>wrap：换行，第一行在下方</li><li>wrap-reverse：换行，第一行在上方</li></ul><p>默认情况是不换行，但这里也不会任由元素直接溢出容器，会涉及到元素的弹性伸缩</p><h3 id="flex-flow" tabindex="-1"><a class="header-anchor" href="#flex-flow" aria-hidden="true">#</a> flex-flow</h3><p>是<code>flex-direction</code>属性和<code>flex-wrap</code>属性的简写形式，默认值为<code>row nowrap</code></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
	<span class="token property">flex-flow</span><span class="token punctuation">:</span> &lt;flex-direction&gt; || &lt;flex-wrap&gt;<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="justify-content" tabindex="-1"><a class="header-anchor" href="#justify-content" aria-hidden="true">#</a> justify-content</h3><p>定义了项目在主轴上的对齐方式</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
	<span class="token property">justify-content</span><span class="token punctuation">:</span> flex-start | flex-end | center | space-between | space-around<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>属性对应如下：</p><ul><li>flex-start（默认值）：左对齐</li><li>flex-end：右对齐</li><li>center：居中</li><li>space-between：两端对齐，项目之间的间隔都相等</li><li>space-around：两个项目两侧间隔相等</li></ul><p>效果图如下：</p><figure><img src="`+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="align-items" tabindex="-1"><a class="header-anchor" href="#align-items" aria-hidden="true">#</a> align-items</h3><p>定义项目在交叉轴上如何对齐</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
	<span class="token property">align-items</span><span class="token punctuation">:</span> flex-start | flex-end | center | baseline | stretch<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>属性对应如下：</p><ul><li>flex-start：交叉轴的起点对齐</li><li>flex-end：交叉轴的终点对齐</li><li>center：交叉轴的中点对齐</li><li>baseline: 项目的第一行文字的基线对齐</li><li>stretch（默认值）：如果项目未设置高度或设为 auto，将占满整个容器的高度</li></ul><h3 id="align-content" tabindex="-1"><a class="header-anchor" href="#align-content" aria-hidden="true">#</a> align-content</h3><p>定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
	<span class="token property">align-content</span><span class="token punctuation">:</span> flex-start | flex-end | center | space-between | space-around |
		stretch<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>属性对应如吓：</p><ul><li>flex-start：与交叉轴的起点对齐</li><li>flex-end：与交叉轴的终点对齐</li><li>center：与交叉轴的中点对齐</li><li>space-between：与交叉轴两端对齐，轴线之间的间隔平均分布</li><li>space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍</li><li>stretch（默认值）：轴线占满整个交叉轴</li></ul><p>效果图如下：</p><figure><img src="`+t+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>容器成员属性如下：</p><ul><li><code>order</code></li><li><code>flex-grow</code></li><li><code>flex-shrink</code></li><li><code>flex-basis</code></li><li><code>flex</code></li><li><code>align-self</code></li></ul><h3 id="order" tabindex="-1"><a class="header-anchor" href="#order" aria-hidden="true">#</a> order</h3><p>定义项目的排列顺序。数值越小，排列越靠前，默认为 0</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>
	<span class="token property">order</span><span class="token punctuation">:</span> &lt;integer&gt;<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="flex-grow" tabindex="-1"><a class="header-anchor" href="#flex-grow" aria-hidden="true">#</a> flex-grow</h3><p>上面讲到当容器设为<code>flex-wrap: nowrap;</code>不换行的时候，容器宽度有不够分的情况，弹性元素会根据<code>flex-grow</code>来决定</p><p>定义项目的放大比例（容器宽度&gt;元素总宽度时如何伸展）</p><p>默认为<code>0</code>，即如果存在剩余空间，也不放大</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>
	<span class="token property">flex-grow</span><span class="token punctuation">:</span> &lt;number&gt;<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果所有项目的<code>flex-grow</code>属性都为 1，则它们将等分剩余空间（如果有的话）</p><figure><img src="`+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>如果一个项目的<code>flex-grow</code>属性为 2，其他项目都为 1，则前者占据的剩余空间将比其他项多一倍</p><figure><img src="'+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>弹性容器的宽度正好等于元素宽度总和，无多余宽度，此时无论<code>flex-grow</code>是什么值都不会生效</p><h3 id="flex-shrink" tabindex="-1"><a class="header-anchor" href="#flex-shrink" aria-hidden="true">#</a> flex-shrink</h3><p>定义了项目的缩小比例（容器宽度&lt;元素总宽度时如何收缩），默认为 1，即如果空间不足，该项目将缩小</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>
	<span class="token property">flex-shrink</span><span class="token punctuation">:</span> &lt;number&gt;<span class="token punctuation">;</span> <span class="token comment">/* default 1 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果所有项目的<code>flex-shrink</code>属性都为 1，当空间不足时，都将等比例缩小</p><p>如果一个项目的<code>flex-shrink</code>属性为 0，其他项目都为 1，则空间不足时，前者不缩小</p><figure><img src="`+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在容器宽度有剩余时，<code>flex-shrink</code>也是不会生效的</p><h3 id="flex-basis" tabindex="-1"><a class="header-anchor" href="#flex-basis" aria-hidden="true">#</a> flex-basis</h3><p>设置的是元素在主轴上的初始尺寸，所谓的初始尺寸就是元素在<code>flex-grow</code>和<code>flex-shrink</code>生效前的尺寸</p><p>浏览器根据这个属性，计算主轴是否有多余空间，默认值为<code>auto</code>，即项目的本来大小，如设置了<code>width</code>则元素尺寸由<code>width/height</code>决定（主轴方向），没有设置则由内容决定</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>
	<span class="token property">flex-basis</span><span class="token punctuation">:</span> &lt;length&gt; | auto<span class="token punctuation">;</span> <span class="token comment">/* default auto */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当设置为 0 的是，会根据内容撑开</p><p>它可以设为跟<code>width</code>或<code>height</code>属性一样的值（比如 350px），则项目将占据固定空间</p><h3 id="flex" tabindex="-1"><a class="header-anchor" href="#flex" aria-hidden="true">#</a> flex</h3><p><code>flex</code>属性是<code>flex-grow</code>, <code>flex-shrink</code> 和 <code>flex-basis</code>的简写，默认值为<code>0 1 auto</code>，也是比较难懂的一个复合属性</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>
	<span class="token property">flex</span><span class="token punctuation">:</span> none | [ &lt; <span class="token string">&#39;flex-grow&#39;</span> &gt; &lt; <span class="token string">&#39;flex-shrink&#39;</span> &gt;? || &lt; <span class="token string">&#39;flex-basis&#39;</span> &gt;]<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一些属性有：</p><ul><li>flex: 1 = flex: 1 1 0%</li><li>flex: 2 = flex: 2 1 0%</li><li>flex: auto = flex: 1 1 auto</li><li>flex: none = flex: 0 0 auto，常用于固定尺寸不伸缩</li></ul><p><code>flex:1</code> 和 <code>flex:auto</code> 的区别，可以归结于<code>flex-basis:0</code>和<code>flex-basis:auto</code>的区别</p><p>当设置为 0 时（绝对弹性元素），此时相当于告诉<code>flex-grow</code>和<code>flex-shrink</code>在伸缩的时候不需要考虑我的尺寸</p><p>当设置为<code>auto</code>时（相对弹性元素），此时则需要在伸缩时将元素尺寸纳入考虑</p><p>注意：建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值</p><h3 id="align-self" tabindex="-1"><a class="header-anchor" href="#align-self" aria-hidden="true">#</a> align-self</h3><p>允许单个项目有与其他项目不一样的对齐方式，可覆盖<code>align-items</code>属性</p><p>默认值为<code>auto</code>，表示继承父元素的<code>align-items</code>属性，如果没有父元素，则等同于<code>stretch</code></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>
	<span class="token property">align-self</span><span class="token punctuation">:</span> auto | flex-start | flex-end | center | baseline | stretch<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果图如下：</p><figure><img src="`+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="三、应用场景" tabindex="-1"><a class="header-anchor" href="#三、应用场景" aria-hidden="true">#</a> 三、应用场景</h2><p>在以前的文章中，我们能够通过<code>flex</code>简单粗暴的实现元素水平垂直方向的居中，以及在两栏三栏自适应布局中通过<code>flex</code>完成，这里就不再展开代码的演示</p><p>包括现在在移动端、小程序这边的开发，都建议使用<code>flex</code>进行布局</p><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2><ul><li>https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex</li><li>http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html</li></ul>',95),g=[f];function x(h,v){return s(),n("div",null,g)}const b=e(u,[["render",x],["__file","flexbox.html.vue"]]);export{b as default};
