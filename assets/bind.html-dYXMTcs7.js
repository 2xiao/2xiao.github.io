import{_ as n,o as s,c as a,a as t}from"./app-z-OzXc2F.js";const p="/assets/interview-vue-16-A0bWI0hL.png",e="/assets/interview-vue-17-KNwFFfSq.png",o="/assets/interview-vue-18-KbIhl6qg.png",c="/assets/interview-vue-19-3S9kforO.png",i="/assets/interview-vue-20-20lCc9Jn.png",l={},u=t('<h1 id="双向数据绑定是什么" tabindex="-1"><a class="header-anchor" href="#双向数据绑定是什么" aria-hidden="true">#</a> 双向数据绑定是什么</h1><h2 id="一、什么是双向绑定" tabindex="-1"><a class="header-anchor" href="#一、什么是双向绑定" aria-hidden="true">#</a> 一、什么是双向绑定</h2><p>我们先从单向绑定切入单向绑定非常简单，就是把<code>Model</code>绑定到<code>View</code>，当我们用<code>JavaScript</code>代码更新<code>Model</code>时，<code>View</code>就会自动更新双向绑定就很容易联想到了，在单向绑定的基础上，用户更新了<code>View</code>，<code>Model</code>的数据也自动被更新了，这种情况就是双向绑定举个栗子</p><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>当用户填写表单时，<code>View</code>的状态就被更新了，如果此时可以自动更新<code>Model</code>的状态，那就相当于我们把<code>Model</code>和<code>View</code>做了双向绑定关系图如下</p><figure><img src="'+e+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="二、双向绑定的原理是什么" tabindex="-1"><a class="header-anchor" href="#二、双向绑定的原理是什么" aria-hidden="true">#</a> 二、双向绑定的原理是什么</h2><p>我们都知道 <code>Vue</code> 是数据双向绑定的框架，双向绑定由三个重要部分构成</p><ul><li>数据层（Model）：应用的数据及业务逻辑</li><li>视图层（View）：应用的展示效果，各类 UI 组件</li><li>业务逻辑层（ViewModel）：框架封装的核心，它负责将数据与视图关联起来</li></ul><p>而上面的这个分层的架构方案，可以用一个专业术语进行称呼：<code>MVVM</code>这里的控制层的核心功能便是 “数据双向绑定” 。自然，我们只需弄懂它是什么，便可以进一步了解数据绑定的原理</p><h3 id="理解-viewmodel" tabindex="-1"><a class="header-anchor" href="#理解-viewmodel" aria-hidden="true">#</a> 理解 ViewModel</h3><p>它的主要职责就是：</p><ul><li>数据变化后更新视图</li><li>视图变化后更新数据</li></ul><p>当然，它还有两个主要部分组成</p><ul><li>监听器（Observer）：对所有数据的属性进行监听</li><li>解析器（Compiler）：对每个元素节点的指令进行扫描跟解析,根据指令模板替换数据,以及绑定相应的更新函数</li></ul><h3 id="三、实现双向绑定" tabindex="-1"><a class="header-anchor" href="#三、实现双向绑定" aria-hidden="true">#</a> 三、实现双向绑定</h3><p>我们还是以<code>Vue</code>为例，先来看看<code>Vue</code>中的双向绑定流程是什么的</p><ol><li><code>new Vue()</code>首先执行初始化，对<code>data</code>执行响应化处理，这个过程发生<code>Observe</code>中</li><li>同时对模板执行编译，找到其中动态绑定的数据，从<code>data</code>中获取并初始化视图，这个过程发生在<code>Compile</code>中</li><li>同时定义⼀个更新函数和<code>Watcher</code>，将来对应数据变化时<code>Watcher</code>会调用更新函数</li><li>由于<code>data</code>的某个<code>key</code>在⼀个视图中可能出现多次，所以每个<code>key</code>都需要⼀个管家<code>Dep</code>来管理多个<code>Watcher</code></li><li>将来 data 中数据⼀旦发生变化，会首先找到对应的<code>Dep</code>，通知所有<code>Watcher</code>执行更新函数</li></ol><p>流程图如下：</p><figure><img src="'+o+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h3><p>先来一个构造函数：执行初始化，对<code>data</code>执行响应化处理</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Vue</span> <span class="token punctuation">{</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>$options <span class="token operator">=</span> options<span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>$data <span class="token operator">=</span> options<span class="token punctuation">.</span>data<span class="token punctuation">;</span> <span class="token comment">// 对data选项做响应式处理</span>
		<span class="token function">observe</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 代理data到vm上</span>
		<span class="token function">proxy</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 执行编译</span>
		<span class="token keyword">new</span> <span class="token class-name">Compile</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>el<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对<code>data</code>选项执行响应化具体操作</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">observe</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> obj <span class="token operator">!==</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">||</span> obj <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">new</span> <span class="token class-name">Observer</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Observer</span> <span class="token punctuation">{</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">walk</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">walk</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
			<span class="token function">defineReactive</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> key<span class="token punctuation">,</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="编译compile" tabindex="-1"><a class="header-anchor" href="#编译compile" aria-hidden="true">#</a> 编译<code>Compile</code></h4><p>对每个元素节点的指令进行扫描跟解析,根据指令模板替换数据,以及绑定相应的更新函数</p><figure><img src="`+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Compile</span> <span class="token punctuation">{</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> vm</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>$vm <span class="token operator">=</span> vm<span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>$el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 获取dom</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">compile</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token function">compile</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> childNodes <span class="token operator">=</span> el<span class="token punctuation">.</span>childNodes<span class="token punctuation">;</span>
		Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>childNodes<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
			<span class="token comment">// 遍历子元素</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isElement</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// 判断是否为节点</span>
				console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;编译元素&#39;</span> <span class="token operator">+</span> node<span class="token punctuation">.</span>nodeName<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isInterpolation</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;编译插值⽂本&#39;</span> <span class="token operator">+</span> node<span class="token punctuation">.</span>textContent<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 判断是否为插值文本 {{}}</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>childNodes <span class="token operator">&amp;&amp;</span> node<span class="token punctuation">.</span>childNodes<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// 判断是否有子元素</span>
				<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">compile</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 对子元素进行递归遍历</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">isElement</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> node<span class="token punctuation">.</span>nodeType <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">isInterpolation</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> node<span class="token punctuation">.</span>nodeType <span class="token operator">==</span> <span class="token number">3</span> <span class="token operator">&amp;&amp;</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\{\\{(.*)\\}\\}</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>textContent<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="依赖收集" tabindex="-1"><a class="header-anchor" href="#依赖收集" aria-hidden="true">#</a> 依赖收集</h4><p>视图中会用到<code>data</code>中某<code>key</code>，这称为依赖。同⼀个<code>key</code>可能出现多次，每次都需要收集出来用⼀个<code>Watcher</code>来维护它们，此过程称为依赖收集多个<code>Watcher</code>需要⼀个<code>Dep</code>来管理，需要更新时由<code>Dep</code>统⼀通知</p><figure><img src="`+i+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>实现思路</p><ol><li><code>defineReactive</code>时为每⼀个<code>key</code>创建⼀个<code>Dep</code>实例</li><li>初始化视图时读取某个<code>key</code>，例如<code>name1</code>，创建⼀个<code>watcher1</code></li><li>由于触发<code>name1</code>的<code>getter</code>方法，便将<code>watcher1</code>添加到<code>name1</code>对应的 Dep 中</li><li>当<code>name1</code>更新，<code>setter</code>触发时，便可通过对应<code>Dep</code>通知其管理所有<code>Watcher</code>更新</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 负责更新视图</span>
<span class="token keyword">class</span> <span class="token class-name">Watcher</span> <span class="token punctuation">{</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">vm<span class="token punctuation">,</span> key<span class="token punctuation">,</span> updater</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>vm <span class="token operator">=</span> vm<span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>key <span class="token operator">=</span> key<span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>updaterFn <span class="token operator">=</span> updater<span class="token punctuation">;</span> <span class="token comment">// 创建实例时，把当前实例指定到Dep.target静态属性上</span>

		Dep<span class="token punctuation">.</span>target <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span> <span class="token comment">// 读一下key，触发get</span>
		vm<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 置空</span>
		Dep<span class="token punctuation">.</span>target <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token comment">// 未来执行dom更新函数，由dep调用的</span>

	<span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">updaterFn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>vm<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>vm<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>声明<code>Dep</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Dep</span> <span class="token punctuation">{</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>deps <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 依赖管理</span>
	<span class="token punctuation">}</span>
	<span class="token function">addDep</span><span class="token punctuation">(</span><span class="token parameter">dep</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>deps<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>dep<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>deps<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">dep</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> dep<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建<code>watcher</code>时触发<code>getter</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Watcher</span> <span class="token punctuation">{</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">vm<span class="token punctuation">,</span> key<span class="token punctuation">,</span> updateFn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		Dep<span class="token punctuation">.</span>target <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>vm<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
		Dep<span class="token punctuation">.</span>target <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>依赖收集，创建<code>Dep</code>实例</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">defineReactive</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> key<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> dep <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dep</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
		<span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			Dep<span class="token punctuation">.</span>target <span class="token operator">&amp;&amp;</span> dep<span class="token punctuation">.</span><span class="token function">addDep</span><span class="token punctuation">(</span>Dep<span class="token punctuation">.</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Dep.target也就是Watcher实例</span>
			<span class="token keyword">return</span> val<span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token function">set</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>newVal <span class="token operator">===</span> val<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
			dep<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 通知dep执行更新方法</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2><ul><li>https://www.liaoxuefeng.com/wiki/1022910821149312/1109527162256416</li><li>https://juejin.cn/post/6844903942254510087#heading-9</li></ul>`,43),d=[u];function k(r,v){return s(),a("div",null,d)}const b=n(l,[["render",k],["__file","bind.html.vue"]]);export{b as default};
