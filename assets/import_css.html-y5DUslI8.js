import{_ as s,o as n,c as a,a as t}from"./app-z-OzXc2F.js";const p={},e=t(`<h1 id="说说-react-中引入-css-的方式有哪几种-区别" tabindex="-1"><a class="header-anchor" href="#说说-react-中引入-css-的方式有哪几种-区别" aria-hidden="true">#</a> 说说 react 中引入 css 的方式有哪几种？区别？</h1><h2 id="一、是什么" tabindex="-1"><a class="header-anchor" href="#一、是什么" aria-hidden="true">#</a> 一、是什么</h2><p>组件式开发选择合适的<code>css</code>解决方案尤为重要</p><p>通常会遵循以下规则：</p><ul><li>可以编写局部 css，不会随意污染其他组件内的原生；</li><li>可以编写动态的 css，可以获取当前组件的一些状态，根据状态的变化生成不同的 css 样式；</li><li>支持所有的 css 特性：伪类、动画、媒体查询等；</li><li>编写起来简洁方便、最好符合一贯的 css 风格特点</li></ul><p>在这一方面，<code>vue</code>使用<code>css</code>起来更为简洁：</p><ul><li>通过 style 标签编写样式</li><li>scoped 属性决定编写的样式是否局部有效</li><li>lang 属性设置预处理器</li><li>内联样式风格的方式来根据最新状态设置和改变 css</li></ul><p>而在<code>react</code>中，引入<code>CSS</code>就不如<code>Vue</code>方便简洁，其引入<code>css</code>的方式有很多种，各有利弊</p><h2 id="二、方式" tabindex="-1"><a class="header-anchor" href="#二、方式" aria-hidden="true">#</a> 二、方式</h2><p>常见的<code>CSS</code>引入方式有以下：</p><ul><li>在组件内直接使用</li><li>组件中引入 .css 文件</li><li>组件中引入 .module.css 文件</li><li>CSS in JS</li></ul><h3 id="在组件内直接使用" tabindex="-1"><a class="header-anchor" href="#在组件内直接使用" aria-hidden="true">#</a> 在组件内直接使用</h3><p>直接在组件中书写<code>css</code>样式，通过<code>style</code>属性直接引入，如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> div1 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&quot;300px&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token string">&quot;30px auto&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&quot;#44014C&quot;</span><span class="token punctuation">,</span>  <span class="token comment">//驼峰法</span>
  <span class="token literal-property property">minHeight</span><span class="token operator">:</span> <span class="token string">&quot;200px&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">boxSizing</span><span class="token operator">:</span> <span class="token string">&quot;border-box&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
     <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
       <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span>div1<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token number">123</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
       <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token literal-property property">backgroundColor</span><span class="token operator">:</span><span class="token string">&quot;red&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
     <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Test<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面可以看到，<code>css</code>属性需要转换成驼峰写法</p><p>这种方式优点：</p><ul><li>内联样式, 样式之间不会有冲突</li><li>可以动态获取当前 state 中的状态</li></ul><p>缺点：</p><ul><li><p>写法上都需要使用驼峰标识</p></li><li><p>某些样式没有提示</p></li><li><p>大量的样式, 代码混乱</p></li><li><p>某些样式无法编写(比如伪类/伪元素)</p></li></ul><h3 id="组件中引入-css-文件" tabindex="-1"><a class="header-anchor" href="#组件中引入-css-文件" aria-hidden="true">#</a> 组件中引入 css 文件</h3><p>将<code>css</code>单独写在一个<code>css</code>文件中，然后在组件中直接引入</p><p><code>App.css</code>文件：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.title</span> <span class="token punctuation">{</span>
	<span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
	<span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.desc</span> <span class="token punctuation">{</span>
	<span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
	<span class="token property">text-decoration</span><span class="token punctuation">:</span> underline<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>组件中引入：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> PureComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">&#39;./Home&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string">&#39;./App.css&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span>
	<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token punctuation">(</span>
			<span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&quot;app&quot;</span><span class="token operator">&gt;</span>
				<span class="token operator">&lt;</span>h2 className<span class="token operator">=</span><span class="token string">&quot;title&quot;</span><span class="token operator">&gt;</span>我是App的标题<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
				<span class="token operator">&lt;</span>p className<span class="token operator">=</span><span class="token string">&quot;desc&quot;</span><span class="token operator">&gt;</span>我是App中的一段文字描述<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
				<span class="token operator">&lt;</span>Home <span class="token operator">/</span><span class="token operator">&gt;</span>
			<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
		<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种方式存在不好的地方在于样式是全局生效，样式之间会互相影响</p><h3 id="组件中引入-module-css-文件" tabindex="-1"><a class="header-anchor" href="#组件中引入-module-css-文件" aria-hidden="true">#</a> 组件中引入 .module.css 文件</h3><p>将<code>css</code>文件作为一个模块引入，这个模块中的所有<code>css</code>，只作用于当前组件。不会影响当前组件的后代组件</p><p>这种方式是<code>webpack</code>特工的方案，只需要配置<code>webpack</code>配置文件中<code>modules:true</code>即可</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> PureComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">&#39;./Home&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string">&#39;./App.module.css&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span>
	<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token punctuation">(</span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
				</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">我是App的标题</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
				</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>desc<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">我是App中的一段文字描述</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
				</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Home</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
			</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
		<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种方式能够解决局部作用域问题，但也有一定的缺陷：</p><ul><li>引用的类名，不能使用连接符(.xxx-xx)，在 JavaScript 中是不识别的</li><li>所有的 className 都必须使用 {style.className} 的形式来编写</li><li>不方便动态来修改某些样式，依然需要使用内联样式的方式；</li></ul><h3 id="css-in-js" tabindex="-1"><a class="header-anchor" href="#css-in-js" aria-hidden="true">#</a> CSS in JS</h3><p>CSS-in-JS， 是指一种模式，其中<code>CSS</code>由 <code>JavaScript </code>生成而不是在外部文件中定义</p><p>此功能并不是 React 的一部分，而是由第三方库提供，例如：</p><ul><li>styled-components</li><li>emotion</li><li>glamorous</li></ul><p>下面主要看看<code>styled-components</code>的基本使用</p><p>本质是通过函数的调用，最终创建出一个组件：</p><ul><li>这个组件会被自动添加上一个不重复的 class</li><li>styled-components 会给该 class 添加相关的样式</li></ul><p>基本使用如下：</p><p>创建一个<code>style.js</code>文件用于存放样式组件：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> SelfLink <span class="token operator">=</span> styled<span class="token punctuation">.</span>div<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
	height: 50px;
	border: 1px solid red;
	color: yellow;
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> SelfButton <span class="token operator">=</span> styled<span class="token punctuation">.</span>div<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
	height: 150px;
	width: 150px;
	color: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> props<span class="token punctuation">.</span>color<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;
	background-image: url(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> props<span class="token punctuation">.</span>src<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">);
	background-size: 150px 150px;
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>引入样式组件也很简单：</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> SelfLink<span class="token punctuation">,</span> SelfButton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./style&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token punctuation">(</span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
				</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SelfLink</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>People&#39;s Republic of China<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">app.js</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">SelfLink</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
				</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SelfButton</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>palevioletred<span class="token punctuation">&quot;</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;pink&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">src</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>fist<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
					SelfButton
				</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">SelfButton</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
			</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
		<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Test<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、区别" tabindex="-1"><a class="header-anchor" href="#三、区别" aria-hidden="true">#</a> 三、区别</h2><p>通过上面四种样式的引入，可以看到：</p><ul><li><p>在组件内直接使用<code>css</code>该方式编写方便，容易能够根据状态修改样式属性，但是大量的演示编写容易导致代码混乱</p></li><li><p>组件中引入 .css 文件符合我们日常的编写习惯，但是作用域是全局的，样式之间会层叠</p></li><li><p>引入.module.css 文件能够解决局部作用域问题，但是不方便动态修改样式，需要使用内联的方式进行样式的编写</p></li><li><p>通过 css in js 这种方法，可以满足大部分场景的应用，可以类似于预处理器一样样式嵌套、定义、修改状态等</p></li></ul><p>至于使用<code>react</code>用哪种方案引入<code>css</code>，并没有一个绝对的答案，可以根据各自情况选择合适的方案</p><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2><ul><li>https://zh-hans.reactjs.org/docs/faq-styling.html#gatsby-focus-wrapper</li><li>https://mp.weixin.qq.com/s/oywTpNKEikMXn8QTBgITow</li></ul>`,50),o=[e];function c(l,i){return n(),a("div",null,o)}const r=s(p,[["render",c],["__file","import_css.html.vue"]]);export{r as default};
