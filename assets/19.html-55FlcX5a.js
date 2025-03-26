const n=JSON.parse(`{"key":"v-53048680","path":"/my-vue/19.html","title":"19. 实现 KeepAlive","lang":"zh-CN","frontmatter":{"description":"19. 实现 KeepAlive 1.基本使用 // 1.组件 const My1 = { \\tname: 'My1', \\tsetup() { \\t\\tonMounted(() =&gt; { \\t\\t\\tconsole.log('my1 mounted'); \\t\\t}); \\t\\treturn () =&gt; h('h1', 'my1'); \\t} }; // 2.组件 const My2 = { \\tname: 'My2', \\tsetup() { \\t\\tonMounted(() =&gt; { \\t\\t\\tconsole.log('my2 mounted'); \\t\\t}); \\t\\treturn () =&gt; h('h1', 'my2'); \\t} }; // keepAlive会对渲染的组件进行缓存 render( \\th(KeepAlive, null, { \\t\\tdefault: () =&gt; h(My1) // 缓存1 \\t}), \\tapp ); setTimeout(() =&gt; { \\trender( \\t\\th(KeepAlive, null, { \\t\\t\\tdefault: () =&gt; h(My2) // 缓存2 \\t\\t}), \\t\\tapp \\t); }, 1000); setTimeout(() =&gt; { \\trender( \\t\\th(KeepAlive, null, { \\t\\t\\tdefault: () =&gt; h(My1) // 复用1 \\t\\t}), \\t\\tapp \\t); }, 2000);","head":[["meta",{"property":"og:url","content":"https://wangfuyou.com/my-vue/19.html"}],["meta",{"property":"og:site_name","content":"LeetCode-JS"}],["meta",{"property":"og:title","content":"19. 实现 KeepAlive"}],["meta",{"property":"og:description","content":"19. 实现 KeepAlive 1.基本使用 // 1.组件 const My1 = { \\tname: 'My1', \\tsetup() { \\t\\tonMounted(() =&gt; { \\t\\t\\tconsole.log('my1 mounted'); \\t\\t}); \\t\\treturn () =&gt; h('h1', 'my1'); \\t} }; // 2.组件 const My2 = { \\tname: 'My2', \\tsetup() { \\t\\tonMounted(() =&gt; { \\t\\t\\tconsole.log('my2 mounted'); \\t\\t}); \\t\\treturn () =&gt; h('h1', 'my2'); \\t} }; // keepAlive会对渲染的组件进行缓存 render( \\th(KeepAlive, null, { \\t\\tdefault: () =&gt; h(My1) // 缓存1 \\t}), \\tapp ); setTimeout(() =&gt; { \\trender( \\t\\th(KeepAlive, null, { \\t\\t\\tdefault: () =&gt; h(My2) // 缓存2 \\t\\t}), \\t\\tapp \\t); }, 1000); setTimeout(() =&gt; { \\trender( \\t\\th(KeepAlive, null, { \\t\\t\\tdefault: () =&gt; h(My1) // 复用1 \\t\\t}), \\t\\tapp \\t); }, 2000);"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-18T09:50:23.000Z"}],["meta",{"property":"article:author","content":"2xiao"}],["meta",{"property":"article:modified_time","content":"2024-10-18T09:50:23.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"19. 实现 KeepAlive\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-18T09:50:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"2xiao\\",\\"url\\":\\"https://github.com/2xiao\\"}]}"]]},"headers":[{"level":2,"title":"1.基本使用","slug":"_1-基本使用","link":"#_1-基本使用","children":[]},{"level":2,"title":"2.缓存组件","slug":"_2-缓存组件","link":"#_2-缓存组件","children":[]},{"level":2,"title":"3.复用组件","slug":"_3-复用组件","link":"#_3-复用组件","children":[{"level":3,"title":"卸载组件","slug":"卸载组件","link":"#卸载组件","children":[]},{"level":3,"title":"挂载组件","slug":"挂载组件","link":"#挂载组件","children":[]}]},{"level":2,"title":"4.max 控制缓存","slug":"_4-max-控制缓存","link":"#_4-max-控制缓存","children":[]}],"git":{"createdTime":1729245023000,"updatedTime":1729245023000,"contributors":[{"name":"2xiao","email":"827574297wxxtb@sina.com","commits":1}]},"readingTime":{"minutes":2.54,"words":762},"filePathRelative":"my-vue/19.md","localizedDate":"2024年10月18日","excerpt":"<h1> 19. 实现 KeepAlive</h1>\\n<h2> 1.基本使用</h2>\\n<div class=\\"language-typescript line-numbers-mode\\" data-ext=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"token comment\\">// 1.组件</span>\\n<span class=\\"token keyword\\">const</span> My1 <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span>\\n\\tname<span class=\\"token operator\\">:</span> <span class=\\"token string\\">'My1'</span><span class=\\"token punctuation\\">,</span>\\n\\t<span class=\\"token function\\">setup</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n\\t\\t<span class=\\"token function\\">onMounted</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n\\t\\t\\t<span class=\\"token builtin\\">console</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'my1 mounted'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t\\t<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t\\t<span class=\\"token keyword\\">return</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token function\\">h</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'h1'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'my1'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token comment\\">// 2.组件</span>\\n<span class=\\"token keyword\\">const</span> My2 <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span>\\n\\tname<span class=\\"token operator\\">:</span> <span class=\\"token string\\">'My2'</span><span class=\\"token punctuation\\">,</span>\\n\\t<span class=\\"token function\\">setup</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n\\t\\t<span class=\\"token function\\">onMounted</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n\\t\\t\\t<span class=\\"token builtin\\">console</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'my2 mounted'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t\\t<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t\\t<span class=\\"token keyword\\">return</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token function\\">h</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'h1'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'my2'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token comment\\">// keepAlive会对渲染的组件进行缓存</span>\\n<span class=\\"token function\\">render</span><span class=\\"token punctuation\\">(</span>\\n\\t<span class=\\"token function\\">h</span><span class=\\"token punctuation\\">(</span>KeepAlive<span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">{</span>\\n\\t\\t<span class=\\"token function-variable function\\">default</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token function\\">h</span><span class=\\"token punctuation\\">(</span>My1<span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\">// 缓存1</span>\\n\\t<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n\\tapp\\n<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token function\\">setTimeout</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n\\t<span class=\\"token function\\">render</span><span class=\\"token punctuation\\">(</span>\\n\\t\\t<span class=\\"token function\\">h</span><span class=\\"token punctuation\\">(</span>KeepAlive<span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">{</span>\\n\\t\\t\\t<span class=\\"token function-variable function\\">default</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token function\\">h</span><span class=\\"token punctuation\\">(</span>My2<span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\">// 缓存2</span>\\n\\t\\t<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n\\t\\tapp\\n\\t<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">1000</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token function\\">setTimeout</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n\\t<span class=\\"token function\\">render</span><span class=\\"token punctuation\\">(</span>\\n\\t\\t<span class=\\"token function\\">h</span><span class=\\"token punctuation\\">(</span>KeepAlive<span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">{</span>\\n\\t\\t\\t<span class=\\"token function-variable function\\">default</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token function\\">h</span><span class=\\"token punctuation\\">(</span>My1<span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\">// 复用1</span>\\n\\t\\t<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n\\t\\tapp\\n\\t<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">2000</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
