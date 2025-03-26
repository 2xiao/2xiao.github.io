import{_ as n,o as s,c as a,a as e}from"./app-z-OzXc2F.js";const t="/assets/interview-vue-13-iMZf9VV-.png",p="/assets/interview-vue-14-J-LpYk5X.png",o="/assets/interview-vue-15-nCuMapuC.png",i={},c=e('<h1 id="spa-首屏加载速度慢的怎么解决" tabindex="-1"><a class="header-anchor" href="#spa-首屏加载速度慢的怎么解决" aria-hidden="true">#</a> SPA 首屏加载速度慢的怎么解决？</h1><h2 id="一、什么是首屏加载" tabindex="-1"><a class="header-anchor" href="#一、什么是首屏加载" aria-hidden="true">#</a> 一、什么是首屏加载</h2><p>首屏时间（First Contentful Paint），指的是浏览器从响应用户输入网址地址，到首屏内容渲染完成的时间，此时整个网页不一定要全部渲染完成，但需要展示当前视窗需要的内容</p><p>首屏加载可以说是用户体验中<strong>最重要</strong>的环节</p><h3 id="关于计算首屏时间" tabindex="-1"><a class="header-anchor" href="#关于计算首屏时间" aria-hidden="true">#</a> 关于计算首屏时间</h3><p>利用<code>performance.timing</code>提供的数据：</p><figure><img src="'+t+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>通过<code>DOMContentLoad</code>或者<code>performance</code>来计算出首屏时间</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 方案一：</span>
document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;DOMContentLoaded&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;first contentful painting&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 方案二：</span>
performance<span class="token punctuation">.</span><span class="token function">getEntriesByName</span><span class="token punctuation">(</span><span class="token string">&quot;first-contentful-paint&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>startTime

<span class="token comment">// performance.getEntriesByName(&quot;first-contentful-paint&quot;)[0]</span>
<span class="token comment">// 会返回一个 PerformancePaintTiming的实例，结构如下：</span>
<span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;first-contentful-paint&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entryType</span><span class="token operator">:</span> <span class="token string">&quot;paint&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">startTime</span><span class="token operator">:</span> <span class="token number">507.80000002123415</span><span class="token punctuation">,</span>
  <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、加载慢的原因" tabindex="-1"><a class="header-anchor" href="#二、加载慢的原因" aria-hidden="true">#</a> 二、加载慢的原因</h2><p>在页面渲染的过程，导致加载速度慢的因素可能如下：</p><ul><li>网络延时问题</li><li>资源文件体积是否过大</li><li>资源是否重复发送请求去加载了</li><li>加载脚本的时候，渲染内容堵塞了</li></ul><h2 id="三、解决方案" tabindex="-1"><a class="header-anchor" href="#三、解决方案" aria-hidden="true">#</a> 三、解决方案</h2><p>常见的几种 SPA 首屏优化方式</p><ul><li>减小入口文件积</li><li>静态资源本地缓存</li><li>UI 框架按需加载</li><li>图片资源的压缩</li><li>组件重复打包</li><li>开启 GZip 压缩</li><li>使用 SSR</li></ul><h3 id="减小入口文件体积" tabindex="-1"><a class="header-anchor" href="#减小入口文件体积" aria-hidden="true">#</a> 减小入口文件体积</h3><p>常用的手段是路由懒加载，把不同路由对应的组件分割成不同的代码块，待路由被请求的时候会单独打包路由，使得入口文件变小，加载速度大大增加</p><figure><img src="`+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在<code>vue-router</code>配置路由的时候，采用动态加载路由的形式</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">routes</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;Blogs&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ShowBlogs&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./components/ShowBlogs.vue&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以函数的形式加载路由，这样就可以把各自的路由文件分别打包，只有在解析给定的路由时，才会加载路由组件</p><h3 id="静态资源本地缓存" tabindex="-1"><a class="header-anchor" href="#静态资源本地缓存" aria-hidden="true">#</a> 静态资源本地缓存</h3><p>后端返回资源问题：</p><ul><li><p>采用<code>HTTP</code>缓存，设置<code>Cache-Control</code>，<code>Last-Modified</code>，<code>Etag</code>等响应头</p></li><li><p>采用<code>Service Worker</code>离线缓存</p></li></ul><p>前端合理利用<code>localStorage</code></p><h3 id="ui-框架按需加载" tabindex="-1"><a class="header-anchor" href="#ui-框架按需加载" aria-hidden="true">#</a> UI 框架按需加载</h3><p>在日常使用<code>UI</code>框架，例如<code>element-UI</code>、或者<code>antd</code>，我们经常性直接引用整个<code>UI</code>库</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> ElementUI <span class="token keyword">from</span> <span class="token string">&#39;element-ui&#39;</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElementUI<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>但实际上我用到的组件只有按钮，分页，表格，输入与警告 所以我们要按需引用</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
	Button<span class="token punctuation">,</span>
	Input<span class="token punctuation">,</span>
	Pagination<span class="token punctuation">,</span>
	Table<span class="token punctuation">,</span>
	TableColumn<span class="token punctuation">,</span>
	MessageBox
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-ui&#39;</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Button<span class="token punctuation">)</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Input<span class="token punctuation">)</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Pagination<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组件重复打包" tabindex="-1"><a class="header-anchor" href="#组件重复打包" aria-hidden="true">#</a> 组件重复打包</h3><p>假设<code>A.js</code>文件是一个常用的库，现在有多个路由使用了<code>A.js</code>文件，这就造成了重复下载</p><p>解决方案：在<code>webpack</code>的<code>config</code>文件中，修改<code>CommonsChunkPlugin</code>的配置</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">minChunks</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>minChunks</code>为 3 表示会把使用 3 次及以上的包抽离出来，放进公共依赖文件，避免了重复加载组件</p><h3 id="图片资源的压缩" tabindex="-1"><a class="header-anchor" href="#图片资源的压缩" aria-hidden="true">#</a> 图片资源的压缩</h3><p>图片资源虽然不在编码过程中，但它却是对页面性能影响最大的因素</p><p>对于所有的图片资源，我们可以进行适当的压缩</p><p>对页面上使用到的<code>icon</code>，可以使用在线字体图标，或者雪碧图，将众多小图标合并到同一张图上，用以减轻<code>http</code>请求压力。</p><h3 id="开启-gzip-压缩" tabindex="-1"><a class="header-anchor" href="#开启-gzip-压缩" aria-hidden="true">#</a> 开启 GZip 压缩</h3><p>拆完包之后，我们再用<code>gzip</code>做一下压缩 安装<code>compression-webpack-plugin</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>cnmp i compression<span class="token operator">-</span>webpack<span class="token operator">-</span>plugin <span class="token operator">-</span><span class="token constant">D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在<code>vue.congig.js</code>中引入并修改<code>webpack</code>配置</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> CompressionPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;compression-webpack-plugin&#39;</span><span class="token punctuation">)</span>

<span class="token function-variable function">configureWebpack</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 为生产环境修改配置...</span>
            config<span class="token punctuation">.</span>mode <span class="token operator">=</span> <span class="token string">&#39;production&#39;</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">CompressionPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                    <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$|\\.html$|\\.css</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token comment">//匹配文件名</span>
                    <span class="token literal-property property">threshold</span><span class="token operator">:</span> <span class="token number">10240</span><span class="token punctuation">,</span> <span class="token comment">//对超过10k的数据进行压缩</span>
                    <span class="token literal-property property">deleteOriginalAssets</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token comment">//是否删除原文件</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在服务器我们也要做相应的配置 如果发送请求的浏览器支持<code>gzip</code>，就发送给它<code>gzip</code>格式的文件 我的服务器是用<code>express</code>框架搭建的 只要安装一下<code>compression</code>就能使用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const compression = require(&#39;compression&#39;)
app.use(compression())  // 在其他中间件使用之前调用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-ssr" tabindex="-1"><a class="header-anchor" href="#使用-ssr" aria-hidden="true">#</a> 使用 SSR</h3><p>SSR（Server side ），也就是服务端渲染，组件或页面通过服务器生成 html 字符串，再发送到浏览器</p><p>从头搭建一个服务端渲染是很复杂的，<code>vue</code>应用建议使用<code>Nuxt.js</code>实现服务端渲染</p><h3 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结：</h3><p>减少首屏渲染时间的方法有很多，总的来讲可以分成两大部分 ：资源加载优化 和 页面渲染优化</p><p>下图是更为全面的首屏优化的方案</p><figure><img src="`+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>大家可以根据自己项目的情况选择各种方式进行首屏渲染的优化</p><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2><ul><li>https://zhuanlan.zhihu.com/p/88639980?utm_source=wechat_session</li><li>https://www.chengrang.com/how-browsers-work.html</li><li>https://juejin.cn/post/6844904185264095246</li><li>https://vue3js.cn/docs/zh</li></ul>',56),l=[c];function r(u,d){return s(),a("div",null,l)}const v=n(i,[["render",r],["__file","first_page_time.html.vue"]]);export{v as default};
