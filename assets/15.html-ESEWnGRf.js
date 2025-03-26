const n=JSON.parse(`{"key":"v-60ab4b78","path":"/my-vue/15.html","title":"15. 依赖注入原理","lang":"zh-CN","frontmatter":{"description":"15. 依赖注入原理 1.基本使用 const My = { \\tsetup() { \\t\\tconst name = inject('name'); \\t\\treturn { name }; \\t}, \\trender() { \\t\\treturn h('div', this.name); \\t} }; const VueComponent = { \\tsetup() { \\t\\tconst state = reactive({ name: 'mrs erxiao' }); \\t\\tprovide('name', state.name); \\t\\tsetTimeout(() =&gt; { \\t\\t\\tstate.name = 'erxiao'; \\t\\t}, 1000); \\t\\treturn () =&gt; h(My); \\t} }; render(h(VueComponent), app);","head":[["meta",{"property":"og:url","content":"https://wangfuyou.com/my-vue/15.html"}],["meta",{"property":"og:site_name","content":"LeetCode-JS"}],["meta",{"property":"og:title","content":"15. 依赖注入原理"}],["meta",{"property":"og:description","content":"15. 依赖注入原理 1.基本使用 const My = { \\tsetup() { \\t\\tconst name = inject('name'); \\t\\treturn { name }; \\t}, \\trender() { \\t\\treturn h('div', this.name); \\t} }; const VueComponent = { \\tsetup() { \\t\\tconst state = reactive({ name: 'mrs erxiao' }); \\t\\tprovide('name', state.name); \\t\\tsetTimeout(() =&gt; { \\t\\t\\tstate.name = 'erxiao'; \\t\\t}, 1000); \\t\\treturn () =&gt; h(My); \\t} }; render(h(VueComponent), app);"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-18T09:50:23.000Z"}],["meta",{"property":"article:author","content":"2xiao"}],["meta",{"property":"article:modified_time","content":"2024-10-18T09:50:23.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"15. 依赖注入原理\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-18T09:50:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"2xiao\\",\\"url\\":\\"https://github.com/2xiao\\"}]}"]]},"headers":[{"level":2,"title":"1.基本使用","slug":"_1-基本使用","link":"#_1-基本使用","children":[]},{"level":2,"title":"2.Provide","slug":"_2-provide","link":"#_2-provide","children":[]},{"level":2,"title":"3.Inject","slug":"_3-inject","link":"#_3-inject","children":[]}],"git":{"createdTime":1729245023000,"updatedTime":1729245023000,"contributors":[{"name":"2xiao","email":"827574297wxxtb@sina.com","commits":1}]},"readingTime":{"minutes":1.1,"words":329},"filePathRelative":"my-vue/15.md","localizedDate":"2024年10月18日","excerpt":"<h1> 15. 依赖注入原理</h1>\\n<h2> 1.基本使用</h2>\\n<div class=\\"language-typescript line-numbers-mode\\" data-ext=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"token keyword\\">const</span> My <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span>\\n\\t<span class=\\"token function\\">setup</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n\\t\\t<span class=\\"token keyword\\">const</span> name <span class=\\"token operator\\">=</span> <span class=\\"token function\\">inject</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'name'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t\\t<span class=\\"token keyword\\">return</span> <span class=\\"token punctuation\\">{</span> name <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n\\t<span class=\\"token function\\">render</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n\\t\\t<span class=\\"token keyword\\">return</span> <span class=\\"token function\\">h</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'div'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>name<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">const</span> VueComponent <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span>\\n\\t<span class=\\"token function\\">setup</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n\\t\\t<span class=\\"token keyword\\">const</span> state <span class=\\"token operator\\">=</span> <span class=\\"token function\\">reactive</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span> name<span class=\\"token operator\\">:</span> <span class=\\"token string\\">'mrs erxiao'</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t\\t<span class=\\"token function\\">provide</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'name'</span><span class=\\"token punctuation\\">,</span> state<span class=\\"token punctuation\\">.</span>name<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t\\t<span class=\\"token function\\">setTimeout</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n\\t\\t\\tstate<span class=\\"token punctuation\\">.</span>name <span class=\\"token operator\\">=</span> <span class=\\"token string\\">'erxiao'</span><span class=\\"token punctuation\\">;</span>\\n\\t\\t<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">1000</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t\\t<span class=\\"token keyword\\">return</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token function\\">h</span><span class=\\"token punctuation\\">(</span>My<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token function\\">render</span><span class=\\"token punctuation\\">(</span><span class=\\"token function\\">h</span><span class=\\"token punctuation\\">(</span>VueComponent<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span> app<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
