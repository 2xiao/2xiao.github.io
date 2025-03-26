import{_ as n,o as s,c as a,a as e}from"./app-z-OzXc2F.js";const i={},p=e(`<h1 id="说下你的-vue-项目的目录结构-如果是大型项目你该怎么划分结构和划分组件呢" tabindex="-1"><a class="header-anchor" href="#说下你的-vue-项目的目录结构-如果是大型项目你该怎么划分结构和划分组件呢" aria-hidden="true">#</a> 说下你的 vue 项目的目录结构，如果是大型项目你该怎么划分结构和划分组件呢？</h1><h2 id="一、为什么要划分" tabindex="-1"><a class="header-anchor" href="#一、为什么要划分" aria-hidden="true">#</a> 一、为什么要划分</h2><p>使用<code>vue</code>构建项目，项目结构清晰会提高开发效率，熟悉项目的各种配置同样会让开发效率更高</p><p>在划分项目结构的时候，需要遵循一些基本的原则：</p><ul><li>文件夹和文件夹内部文件的语义一致性</li><li>单一入口/出口</li><li>就近原则，紧耦合的文件应该放到一起，且应以相对路径引用</li><li>公共的文件应该以绝对路径的方式从根目录引用</li><li><code>/src</code> 外的文件不应该被引入</li></ul><h3 id="文件夹和文件夹内部文件的语义一致性" tabindex="-1"><a class="header-anchor" href="#文件夹和文件夹内部文件的语义一致性" aria-hidden="true">#</a> 文件夹和文件夹内部文件的语义一致性</h3><p>我们的目录结构都会有一个文件夹是按照路由模块来划分的，如<code>pages</code>文件夹，这个文件夹里面应该包含我们项目所有的路由模块，并且仅应该包含路由模块，而不应该有别的其他的非路由模块的文件夹</p><p>这样做的好处在于一眼就从 <code>pages</code>文件夹看出这个项目的路由有哪些</p><h3 id="单一入口-出口" tabindex="-1"><a class="header-anchor" href="#单一入口-出口" aria-hidden="true">#</a> 单一入口/出口</h3><p>举个例子，在<code>pages</code>文件夹里面存在一个<code>seller</code>文件夹，这时候<code>seller</code> 文件夹应该作为一个独立的模块由外部引入，并且 <code>seller/index.js</code> 应该作为外部引入 seller 模块的唯一入口</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 错误用法</span>
<span class="token keyword">import</span> sellerReducer <span class="token keyword">from</span> <span class="token string">&#39;src/pages/seller/reducer&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// 正确用法</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> reducer <span class="token keyword">as</span> sellerReducer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;src/pages/seller&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样做的好处在于，无论你的模块文件夹内部有多乱，外部引用的时候，都是从一个入口文件引入，这样就很好的实现了隔离，如果后续有重构需求，你就会发现这种方式的优点</p><h3 id="就近原则-紧耦合的文件应该放到一起-且应以相对路径引用" tabindex="-1"><a class="header-anchor" href="#就近原则-紧耦合的文件应该放到一起-且应以相对路径引用" aria-hidden="true">#</a> 就近原则，紧耦合的文件应该放到一起，且应以相对路径引用</h3><p>使用相对路径可以保证模块内部的独立性</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 正确用法</span>
<span class="token keyword">import</span> styles <span class="token keyword">from</span> <span class="token string">&#39;./index.module.scss&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// 错误用法</span>
<span class="token keyword">import</span> styles <span class="token keyword">from</span> <span class="token string">&#39;src/pages/seller/index.module.scss&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>举个例子</p><p>假设我们现在的 seller 目录是在 <code>src/pages/seller</code>，如果我们后续发生了路由变更，需要加一个层级，变成 <code>src/pages/user/seller</code>。</p><p>如果我们采用第一种相对路径的方式，那就可以直接将整个文件夹拖过去就好，<code>seller</code> 文件夹内部不需要做任何变更。</p><p>但是如果我们采用第二种绝对路径的方式，移动文件夹的同时，还需要对每个 <code>import</code> 的路径做修改</p><h3 id="公共的文件应该以绝对路径的方式从根目录引用" tabindex="-1"><a class="header-anchor" href="#公共的文件应该以绝对路径的方式从根目录引用" aria-hidden="true">#</a> 公共的文件应该以绝对路径的方式从根目录引用</h3><p>公共指的是多个路由模块共用，如一些公共的组件，我们可以放在<code>src/components</code>下</p><p>在使用到的页面中，采用绝对路径的形式引用</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 错误用法</span>
<span class="token keyword">import</span> Input <span class="token keyword">from</span> <span class="token string">&#39;../../components/input&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// 正确用法</span>
<span class="token keyword">import</span> Input <span class="token keyword">from</span> <span class="token string">&#39;src/components/input&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同样的，如果我们需要对文件夹结构进行调整。将 <code>/src/components/input</code> 变成 <code>/src/components/new/input</code>，如果使用绝对路径，只需要全局搜索替换</p><p>再加上绝对路径有全局的语义，相对路径有独立模块的语义</p><h3 id="src-外的文件不应该被引入" tabindex="-1"><a class="header-anchor" href="#src-外的文件不应该被引入" aria-hidden="true">#</a> /src 外的文件不应该被引入</h3><p><code>vue-cli</code>脚手架已经帮我们做了相关的约束了，正常我们的前端项目都会有个<code>src</code>文件夹，里面放着所有的项目需要的资源，<code>js</code>,<code> css</code>, <code>png</code>, <code>svg</code> 等等。<code>src</code> 外会放一些项目配置，依赖，环境等文件</p><p>这样的好处是方便划分项目代码文件和配置文件</p><h2 id="二、目录结构" tabindex="-1"><a class="header-anchor" href="#二、目录结构" aria-hidden="true">#</a> 二、目录结构</h2><p>单页面目录结构</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>project
│  <span class="token punctuation">.</span>browserslistrc
│  <span class="token punctuation">.</span>env<span class="token punctuation">.</span>production
│  <span class="token punctuation">.</span>eslintrc<span class="token punctuation">.</span>js
│  <span class="token punctuation">.</span>gitignore
│  babel<span class="token punctuation">.</span>config<span class="token punctuation">.</span>js
│  <span class="token keyword">package</span><span class="token operator">-</span>lock<span class="token punctuation">.</span>json
│  <span class="token keyword">package</span><span class="token punctuation">.</span>json
│  <span class="token constant">README</span><span class="token punctuation">.</span>md
│  vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>js
│  yarn<span class="token operator">-</span>error<span class="token punctuation">.</span>log
│  yarn<span class="token punctuation">.</span>lock
│
├─<span class="token keyword">public</span>
│      favicon<span class="token punctuation">.</span>ico
│      index<span class="token punctuation">.</span>html
│
<span class="token operator">|</span><span class="token operator">--</span> src
    <span class="token operator">|</span><span class="token operator">--</span> components
        <span class="token operator">|</span><span class="token operator">--</span> input
            <span class="token operator">|</span><span class="token operator">--</span> index<span class="token punctuation">.</span>js
            <span class="token operator">|</span><span class="token operator">--</span> index<span class="token punctuation">.</span>module<span class="token punctuation">.</span>scss
    <span class="token operator">|</span><span class="token operator">--</span> pages
        <span class="token operator">|</span><span class="token operator">--</span> seller
            <span class="token operator">|</span><span class="token operator">--</span> components
                <span class="token operator">|</span><span class="token operator">--</span> input
                    <span class="token operator">|</span><span class="token operator">--</span> index<span class="token punctuation">.</span>js
                    <span class="token operator">|</span><span class="token operator">--</span> index<span class="token punctuation">.</span>module<span class="token punctuation">.</span>scss
            <span class="token operator">|</span><span class="token operator">--</span> reducer<span class="token punctuation">.</span>js
            <span class="token operator">|</span><span class="token operator">--</span> saga<span class="token punctuation">.</span>js
            <span class="token operator">|</span><span class="token operator">--</span> index<span class="token punctuation">.</span>js
            <span class="token operator">|</span><span class="token operator">--</span> index<span class="token punctuation">.</span>module<span class="token punctuation">.</span>scss
        <span class="token operator">|</span><span class="token operator">--</span> buyer
            <span class="token operator">|</span><span class="token operator">--</span> index<span class="token punctuation">.</span>js
        <span class="token operator">|</span><span class="token operator">--</span> index<span class="token punctuation">.</span>js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>多页面目录结构</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>my<span class="token operator">-</span>vue<span class="token operator">-</span>test<span class="token operator">:</span><span class="token punctuation">.</span>
│  <span class="token punctuation">.</span>browserslistrc
│  <span class="token punctuation">.</span>env<span class="token punctuation">.</span>production
│  <span class="token punctuation">.</span>eslintrc<span class="token punctuation">.</span>js
│  <span class="token punctuation">.</span>gitignore
│  babel<span class="token punctuation">.</span>config<span class="token punctuation">.</span>js
│  <span class="token keyword">package</span><span class="token operator">-</span>lock<span class="token punctuation">.</span>json
│  <span class="token keyword">package</span><span class="token punctuation">.</span>json
│  <span class="token constant">README</span><span class="token punctuation">.</span>md
│  vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>js
│  yarn<span class="token operator">-</span>error<span class="token punctuation">.</span>log
│  yarn<span class="token punctuation">.</span>lock
│
├─<span class="token keyword">public</span>
│      favicon<span class="token punctuation">.</span>ico
│      index<span class="token punctuation">.</span>html
│
└─src
    ├─apis <span class="token comment">//接口文件根据页面或实例模块化</span>
    │      index<span class="token punctuation">.</span>js
    │      login<span class="token punctuation">.</span>js
    │
    ├─components <span class="token comment">//全局公共组件</span>
    │  └─header
    │          index<span class="token punctuation">.</span>less
    │          index<span class="token punctuation">.</span>vue
    │
    ├─config <span class="token comment">//配置（环境变量配置不同passid等）</span>
    │      env<span class="token punctuation">.</span>js
    │      index<span class="token punctuation">.</span>js
    │
    ├─contant <span class="token comment">//常量</span>
    │      index<span class="token punctuation">.</span>js
    │
    ├─images <span class="token comment">//图片</span>
    │      logo<span class="token punctuation">.</span>png
    │
    ├─pages <span class="token comment">//多页面vue项目，不同的实例</span>
    │  ├─index <span class="token comment">//主实例</span>
    │  │  │  index<span class="token punctuation">.</span>js
    │  │  │  index<span class="token punctuation">.</span>vue
    │  │  │  main<span class="token punctuation">.</span>js
    │  │  │  router<span class="token punctuation">.</span>js
    │  │  │  store<span class="token punctuation">.</span>js
    │  │  │
    │  │  ├─components <span class="token comment">//业务组件</span>
    │  │  └─pages <span class="token comment">//此实例中的各个路由</span>
    │  │      ├─amenu
    │  │      │      index<span class="token punctuation">.</span>vue
    │  │      │
    │  │      └─bmenu
    │  │              index<span class="token punctuation">.</span>vue
    │  │
    │  └─login <span class="token comment">//另一个实例</span>
    │          index<span class="token punctuation">.</span>js
    │          index<span class="token punctuation">.</span>vue
    │          main<span class="token punctuation">.</span>js
    │
    ├─scripts <span class="token comment">//包含各种常用配置，工具函数</span>
    │  │  map<span class="token punctuation">.</span>js
    │  │
    │  └─utils
    │          helper<span class="token punctuation">.</span>js
    │
    ├─store <span class="token comment">//vuex仓库</span>
    │  │  index<span class="token punctuation">.</span>js
    │  │
    │  ├─index
    │  │      actions<span class="token punctuation">.</span>js
    │  │      getters<span class="token punctuation">.</span>js
    │  │      index<span class="token punctuation">.</span>js
    │  │      mutation<span class="token operator">-</span>types<span class="token punctuation">.</span>js
    │  │      mutations<span class="token punctuation">.</span>js
    │  │      state<span class="token punctuation">.</span>js
    │  │
    │  └─user
    │          actions<span class="token punctuation">.</span>js
    │          getters<span class="token punctuation">.</span>js
    │          index<span class="token punctuation">.</span>js
    │          mutation<span class="token operator">-</span>types<span class="token punctuation">.</span>js
    │          mutations<span class="token punctuation">.</span>js
    │          state<span class="token punctuation">.</span>js
    │
    └─styles <span class="token comment">//样式统一配置</span>
        │  components<span class="token punctuation">.</span>less
        │
        ├─animation
        │      index<span class="token punctuation">.</span>less
        │      slide<span class="token punctuation">.</span>less
        │
        ├─base
        │      index<span class="token punctuation">.</span>less
        │      style<span class="token punctuation">.</span>less
        │      <span class="token keyword">var</span><span class="token punctuation">.</span>less
        │      widget<span class="token punctuation">.</span>less
        │
        └─common
                index<span class="token punctuation">.</span>less
                reset<span class="token punctuation">.</span>less
                style<span class="token punctuation">.</span>less
                transition<span class="token punctuation">.</span>less
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h3><p>项目的目录结构很重要，因为目录结构能体现很多东西，怎么规划目录结构可能每个人有自己的理解，但是按照一定的规范去进行目录的设计，能让项目整个架构看起来更为简洁，更加易用</p><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2><ul><li><p>https://juejin.cn/post/6844904129186234381#heading-0</p></li><li><p>https://zhuanlan.zhihu.com/p/89693668</p></li></ul>`,37),c=[p];function l(t,o){return s(),a("div",null,c)}const r=n(i,[["render",l],["__file","structure.html.vue"]]);export{r as default};
