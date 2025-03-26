const e=JSON.parse('{"key":"v-98b6fad6","path":"/system-design/37_nearby_friends.html","title":"17. 设计附近的朋友","lang":"zh-CN","frontmatter":{"description":"17. 设计附近的朋友 本章重点设计一个可扩展的后端系统，用于支持一个应用程序，用户可以分享自己的位置并发现附近的朋友。 与“邻近”章节的主要区别在于，在本问题中，位置是不断变化的，而在“邻近”章节中，商业地址大致保持不变。","head":[["meta",{"property":"og:url","content":"https://wangfuyou.com/system-design/37_nearby_friends.html"}],["meta",{"property":"og:site_name","content":"LeetCode-JS"}],["meta",{"property":"og:title","content":"17. 设计附近的朋友"}],["meta",{"property":"og:description","content":"17. 设计附近的朋友 本章重点设计一个可扩展的后端系统，用于支持一个应用程序，用户可以分享自己的位置并发现附近的朋友。 与“邻近”章节的主要区别在于，在本问题中，位置是不断变化的，而在“邻近”章节中，商业地址大致保持不变。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-05T17:52:30.000Z"}],["meta",{"property":"article:author","content":"2xiao"}],["meta",{"property":"article:modified_time","content":"2024-12-05T17:52:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"17. 设计附近的朋友\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-05T17:52:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"2xiao\\",\\"url\\":\\"https://github.com/2xiao\\"}]}"]]},"headers":[{"level":2,"title":"第一步：理解问题并确定设计范围","slug":"第一步-理解问题并确定设计范围","link":"#第一步-理解问题并确定设计范围","children":[{"level":3,"title":"功能需求","slug":"功能需求","link":"#功能需求","children":[]},{"level":3,"title":"非功能需求","slug":"非功能需求","link":"#非功能需求","children":[]},{"level":3,"title":"粗略估算","slug":"粗略估算","link":"#粗略估算","children":[]}]},{"level":2,"title":"第二步：提出高层设计并获得认同","slug":"第二步-提出高层设计并获得认同","link":"#第二步-提出高层设计并获得认同","children":[{"level":3,"title":"高层设计","slug":"高层设计","link":"#高层设计","children":[]},{"level":3,"title":"定期位置更新","slug":"定期位置更新","link":"#定期位置更新","children":[]},{"level":3,"title":"API 设计","slug":"api-设计","link":"#api-设计","children":[]},{"level":3,"title":"数据模型","slug":"数据模型","link":"#数据模型","children":[]}]},{"level":2,"title":"第三步：深入设计","slug":"第三步-深入设计","link":"#第三步-深入设计","children":[{"level":3,"title":"每个组件的扩展性如何？","slug":"每个组件的扩展性如何","link":"#每个组件的扩展性如何","children":[]},{"level":3,"title":"深入扩展 Redis pub/sub 组件","slug":"深入扩展-redis-pub-sub-组件","link":"#深入扩展-redis-pub-sub-组件","children":[]},{"level":3,"title":"添加/移除朋友","slug":"添加-移除朋友","link":"#添加-移除朋友","children":[]},{"level":3,"title":"拥有许多朋友的用户","slug":"拥有许多朋友的用户","link":"#拥有许多朋友的用户","children":[]},{"level":3,"title":"随机附近的人","slug":"随机附近的人","link":"#随机附近的人","children":[]},{"level":3,"title":"Redis pub/sub 的替代方案","slug":"redis-pub-sub-的替代方案","link":"#redis-pub-sub-的替代方案","children":[]}]},{"level":2,"title":"第四步：总结","slug":"第四步-总结","link":"#第四步-总结","children":[]}],"git":{"createdTime":1733239379000,"updatedTime":1733421150000,"contributors":[{"name":"2xiao","email":"827574297wxxtb@sina.com","commits":2}]},"readingTime":{"minutes":10.94,"words":3281},"filePathRelative":"system-design/37_nearby_friends.md","localizedDate":"2024年12月3日","excerpt":"<h1> 17. 设计附近的朋友</h1>\\n<p>本章重点设计一个可扩展的后端系统，用于支持一个应用程序，用户可以分享自己的位置并发现附近的朋友。</p>\\n<p>与“邻近”章节的主要区别在于，在本问题中，位置是不断变化的，而在“邻近”章节中，商业地址大致保持不变。</p>","autoDesc":true}');export{e as data};
