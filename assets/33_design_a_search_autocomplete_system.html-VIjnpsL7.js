const e=JSON.parse('{"key":"v-7f83a67e","path":"/system-design/33_design_a_search_autocomplete_system.html","title":"13. 设计搜索自动补全系统","lang":"zh-CN","frontmatter":{"description":"13. 设计搜索自动补全系统 搜索自动补全是许多平台（如 Amazon、Google 等）提供的功能。当你在搜索栏中输入内容时，它会根据输入建议可能的查询： Google 搜索","head":[["meta",{"property":"og:url","content":"https://2xiao.github.io/system-design/33_design_a_search_autocomplete_system.html"}],["meta",{"property":"og:site_name","content":"LeetCode-JS"}],["meta",{"property":"og:title","content":"13. 设计搜索自动补全系统"}],["meta",{"property":"og:description","content":"13. 设计搜索自动补全系统 搜索自动补全是许多平台（如 Amazon、Google 等）提供的功能。当你在搜索栏中输入内容时，它会根据输入建议可能的查询： Google 搜索"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-05T08:38:58.000Z"}],["meta",{"property":"article:author","content":"2xiao"}],["meta",{"property":"article:modified_time","content":"2024-12-05T08:38:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"13. 设计搜索自动补全系统\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-05T08:38:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"2xiao\\",\\"url\\":\\"https://github.com/2xiao\\"}]}"]]},"headers":[{"level":2,"title":"第一步：理解问题并确定设计范围","slug":"第一步-理解问题并确定设计范围","link":"#第一步-理解问题并确定设计范围","children":[{"level":3,"title":"非功能性需求","slug":"非功能性需求","link":"#非功能性需求","children":[]},{"level":3,"title":"粗略估算","slug":"粗略估算","link":"#粗略估算","children":[]}]},{"level":2,"title":"第二步：提出高层设计并获得认可","slug":"第二步-提出高层设计并获得认可","link":"#第二步-提出高层设计并获得认可","children":[{"level":3,"title":"数据收集服务","slug":"数据收集服务","link":"#数据收集服务","children":[]},{"level":3,"title":"查询服务","slug":"查询服务","link":"#查询服务","children":[]}]},{"level":2,"title":"第三步：深入设计","slug":"第三步-深入设计","link":"#第三步-深入设计","children":[{"level":3,"title":"Trie 数据结构","slug":"trie-数据结构","link":"#trie-数据结构","children":[]},{"level":3,"title":"数据收集服务","slug":"数据收集服务-1","link":"#数据收集服务-1","children":[]},{"level":3,"title":"查询服务","slug":"查询服务-1","link":"#查询服务-1","children":[]},{"level":3,"title":"Trie 操作","slug":"trie-操作","link":"#trie-操作","children":[]},{"level":3,"title":"扩展存储","slug":"扩展存储","link":"#扩展存储","children":[]}]},{"level":2,"title":"第四步：总结","slug":"第四步-总结","link":"#第四步-总结","children":[]}],"git":{"createdTime":1733239379000,"updatedTime":1733387938000,"contributors":[{"name":"2xiao","email":"827574297wxxtb@sina.com","commits":2}]},"readingTime":{"minutes":7.38,"words":2215},"filePathRelative":"system-design/33_design_a_search_autocomplete_system.md","localizedDate":"2024年12月3日","excerpt":"<h1> 13. 设计搜索自动补全系统</h1>\\n<p>搜索自动补全是许多平台（如 Amazon、Google 等）提供的功能。当你在搜索栏中输入内容时，它会根据输入建议可能的查询：</p>\\n<figure><figcaption>Google 搜索</figcaption></figure>","autoDesc":true}');export{e as data};