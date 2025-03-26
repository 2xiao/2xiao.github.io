const n=JSON.parse(`{"key":"v-1dc252d5","path":"/my-vue/5.html","title":"5. Ref 实现","lang":"zh-CN","frontmatter":{"description":"5. Ref 实现 proxy 代理的目标必须是非原始值，所以 reactive 不支持原始值类型。所以我们需要将原始值类型进行包装。 const flag = ref(false); effect(() =&gt; { \\tdocument.body.innerHTML = flag.value ? 30 : 'erxiao'; }); setTimeout(() =&gt; { \\tflag.value = true; }, 1000);","head":[["meta",{"property":"og:url","content":"https://wangfuyou.com/my-vue/5.html"}],["meta",{"property":"og:site_name","content":"LeetCode-JS"}],["meta",{"property":"og:title","content":"5. Ref 实现"}],["meta",{"property":"og:description","content":"5. Ref 实现 proxy 代理的目标必须是非原始值，所以 reactive 不支持原始值类型。所以我们需要将原始值类型进行包装。 const flag = ref(false); effect(() =&gt; { \\tdocument.body.innerHTML = flag.value ? 30 : 'erxiao'; }); setTimeout(() =&gt; { \\tflag.value = true; }, 1000);"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-18T09:50:23.000Z"}],["meta",{"property":"article:author","content":"2xiao"}],["meta",{"property":"article:modified_time","content":"2024-10-18T09:50:23.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"5. Ref 实现\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-18T09:50:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"2xiao\\",\\"url\\":\\"https://github.com/2xiao\\"}]}"]]},"headers":[{"level":2,"title":"1.Ref & ShallowRef","slug":"_1-ref-shallowref","link":"#_1-ref-shallowref","children":[]},{"level":2,"title":"2.toRef & toRefs","slug":"_2-toref-torefs","link":"#_2-toref-torefs","children":[]},{"level":2,"title":"3.proxyRefs","slug":"_3-proxyrefs","link":"#_3-proxyrefs","children":[]}],"git":{"createdTime":1729245023000,"updatedTime":1729245023000,"contributors":[{"name":"2xiao","email":"827574297wxxtb@sina.com","commits":1}]},"readingTime":{"minutes":1.75,"words":526},"filePathRelative":"my-vue/5.md","localizedDate":"2024年10月18日","excerpt":"<h1> 5. Ref 实现</h1>\\n<p>proxy 代理的目标必须是非原始值，所以 reactive 不支持原始值类型。所以我们需要将原始值类型进行包装。</p>\\n<div class=\\"language-typescript line-numbers-mode\\" data-ext=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"token keyword\\">const</span> flag <span class=\\"token operator\\">=</span> <span class=\\"token function\\">ref</span><span class=\\"token punctuation\\">(</span><span class=\\"token boolean\\">false</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token function\\">effect</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n\\tdocument<span class=\\"token punctuation\\">.</span>body<span class=\\"token punctuation\\">.</span>innerHTML <span class=\\"token operator\\">=</span> flag<span class=\\"token punctuation\\">.</span>value <span class=\\"token operator\\">?</span> <span class=\\"token number\\">30</span> <span class=\\"token operator\\">:</span> <span class=\\"token string\\">'erxiao'</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token function\\">setTimeout</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n\\tflag<span class=\\"token punctuation\\">.</span>value <span class=\\"token operator\\">=</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">1000</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
