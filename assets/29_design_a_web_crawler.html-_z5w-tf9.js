const e=JSON.parse('{"key":"v-e8dd593a","path":"/system-design/29_design_a_web_crawler.html","title":"9. 设计网络爬虫","lang":"zh-CN","frontmatter":{"description":"9. 设计网络爬虫 这是一个经典的系统设计问题：设计一个网络爬虫（Web Crawler）。 网络爬虫（又称机器人）用于在互联网上发现新内容或更新内容，例如文章、视频、PDF 等。","head":[["meta",{"property":"og:url","content":"https://2xiao.github.io/system-design/29_design_a_web_crawler.html"}],["meta",{"property":"og:site_name","content":"LeetCode-JS"}],["meta",{"property":"og:title","content":"9. 设计网络爬虫"}],["meta",{"property":"og:description","content":"9. 设计网络爬虫 这是一个经典的系统设计问题：设计一个网络爬虫（Web Crawler）。 网络爬虫（又称机器人）用于在互联网上发现新内容或更新内容，例如文章、视频、PDF 等。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-05T08:38:58.000Z"}],["meta",{"property":"article:author","content":"2xiao"}],["meta",{"property":"article:modified_time","content":"2024-12-05T08:38:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"9. 设计网络爬虫\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-05T08:38:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"2xiao\\",\\"url\\":\\"https://github.com/2xiao\\"}]}"]]},"headers":[{"level":2,"title":"第一步：理解问题并确定设计范围","slug":"第一步-理解问题并确定设计范围","link":"#第一步-理解问题并确定设计范围","children":[{"level":3,"title":"高层次的工作原理","slug":"高层次的工作原理","link":"#高层次的工作原理","children":[]},{"level":3,"title":"功能性需求","slug":"功能性需求","link":"#功能性需求","children":[]},{"level":3,"title":"非功能性需求","slug":"非功能性需求","link":"#非功能性需求","children":[]},{"level":3,"title":"粗略估算","slug":"粗略估算","link":"#粗略估算","children":[]}]},{"level":2,"title":"第二步：提出高层设计并获得认可","slug":"第二步-提出高层设计并获得认可","link":"#第二步-提出高层设计并获得认可","children":[]},{"level":2,"title":"第三步：深入设计","slug":"第三步-深入设计","link":"#第三步-深入设计","children":[{"level":3,"title":"DFS vs. BFS","slug":"dfs-vs-bfs","link":"#dfs-vs-bfs","children":[]},{"level":3,"title":"URL 队列","slug":"url-队列","link":"#url-队列","children":[]},{"level":3,"title":"友好性","slug":"友好性","link":"#友好性","children":[]},{"level":3,"title":"优先级","slug":"优先级","link":"#优先级","children":[]},{"level":3,"title":"内容更新","slug":"内容更新","link":"#内容更新","children":[]},{"level":3,"title":"内容存储","slug":"内容存储","link":"#内容存储","children":[]},{"level":3,"title":"URL 队列存储","slug":"url-队列存储","link":"#url-队列存储","children":[]},{"level":3,"title":"HTML 下载器","slug":"html-下载器","link":"#html-下载器","children":[]},{"level":3,"title":"性能优化","slug":"性能优化","link":"#性能优化","children":[]},{"level":3,"title":"鲁棒性","slug":"鲁棒性","link":"#鲁棒性","children":[]},{"level":3,"title":"可扩展性","slug":"可扩展性","link":"#可扩展性","children":[]},{"level":3,"title":"识别并避免问题内容","slug":"识别并避免问题内容","link":"#识别并避免问题内容","children":[]}]},{"level":2,"title":"第四步：总结","slug":"第四步-总结","link":"#第四步-总结","children":[]}],"git":{"createdTime":1733239379000,"updatedTime":1733387938000,"contributors":[{"name":"2xiao","email":"827574297wxxtb@sina.com","commits":2}]},"readingTime":{"minutes":9.63,"words":2890},"filePathRelative":"system-design/29_design_a_web_crawler.md","localizedDate":"2024年12月3日","excerpt":"<h1> 9. 设计网络爬虫</h1>\\n<p>这是一个经典的系统设计问题：设计一个网络爬虫（Web Crawler）。</p>\\n<p>网络爬虫（又称机器人）用于在互联网上发现新内容或更新内容，例如文章、视频、PDF 等。</p>","autoDesc":true}');export{e as data};