const e=JSON.parse('{"key":"v-0013182e","path":"/system-design/47_digital_wallet.html","title":"27. 设计数字钱包","lang":"zh-CN","frontmatter":{"description":"27. 设计数字钱包 支付平台通常提供钱包服务，允许客户在应用内存储资金，稍后可以提取这些资金。 您还可以使用它来支付商品和服务，或将钱转账给其他使用数字钱包服务的用户。这比通过传统支付通道进行支付可能更快且更便宜。","head":[["meta",{"property":"og:url","content":"https://2xiao.github.io/system-design/47_digital_wallet.html"}],["meta",{"property":"og:site_name","content":"LeetCode-JS"}],["meta",{"property":"og:title","content":"27. 设计数字钱包"}],["meta",{"property":"og:description","content":"27. 设计数字钱包 支付平台通常提供钱包服务，允许客户在应用内存储资金，稍后可以提取这些资金。 您还可以使用它来支付商品和服务，或将钱转账给其他使用数字钱包服务的用户。这比通过传统支付通道进行支付可能更快且更便宜。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-05T17:52:30.000Z"}],["meta",{"property":"article:author","content":"2xiao"}],["meta",{"property":"article:modified_time","content":"2024-12-05T17:52:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"27. 设计数字钱包\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-05T17:52:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"2xiao\\",\\"url\\":\\"https://github.com/2xiao\\"}]}"]]},"headers":[{"level":2,"title":"第一步：理解问题并确定设计范围","slug":"第一步-理解问题并确定设计范围","link":"#第一步-理解问题并确定设计范围","children":[{"level":3,"title":"粗略估算","slug":"粗略估算","link":"#粗略估算","children":[]}]},{"level":2,"title":"第二步：提出高级设计并获得认可","slug":"第二步-提出高级设计并获得认可","link":"#第二步-提出高级设计并获得认可","children":[{"level":3,"title":"API 设计","slug":"api-设计","link":"#api-设计","children":[]},{"level":3,"title":"内存分片方案","slug":"内存分片方案","link":"#内存分片方案","children":[]},{"level":3,"title":"分布式事务","slug":"分布式事务","link":"#分布式事务","children":[]},{"level":3,"title":"使用尝试-确认/取消（TC/C）的分布式事务","slug":"使用尝试-确认-取消-tc-c-的分布式事务","link":"#使用尝试-确认-取消-tc-c-的分布式事务","children":[]},{"level":3,"title":"TC/C 的故障模式","slug":"tc-c-的故障模式","link":"#tc-c-的故障模式","children":[]},{"level":3,"title":"使用 Saga 实现分布式事务","slug":"使用-saga-实现分布式事务","link":"#使用-saga-实现分布式事务","children":[]},{"level":3,"title":"事件溯源","slug":"事件溯源","link":"#事件溯源","children":[]}]},{"level":2,"title":"第三步：深入设计","slug":"第三步-深入设计","link":"#第三步-深入设计","children":[{"level":3,"title":"高性能事件溯源","slug":"高性能事件溯源","link":"#高性能事件溯源","children":[]},{"level":3,"title":"可靠的高性能事件溯源","slug":"可靠的高性能事件溯源","link":"#可靠的高性能事件溯源","children":[]},{"level":3,"title":"分布式事件溯源","slug":"分布式事件溯源","link":"#分布式事件溯源","children":[]}]},{"level":2,"title":"第四步：总结","slug":"第四步-总结","link":"#第四步-总结","children":[]}],"git":{"createdTime":1733239379000,"updatedTime":1733421150000,"contributors":[{"name":"2xiao","email":"827574297wxxtb@sina.com","commits":2}]},"readingTime":{"minutes":15.79,"words":4736},"filePathRelative":"system-design/47_digital_wallet.md","localizedDate":"2024年12月3日","excerpt":"<h1> 27. 设计数字钱包</h1>\\n<p>支付平台通常提供钱包服务，允许客户在应用内存储资金，稍后可以提取这些资金。</p>\\n<p>您还可以使用它来支付商品和服务，或将钱转账给其他使用数字钱包服务的用户。这比通过传统支付通道进行支付可能更快且更便宜。</p>","autoDesc":true}');export{e as data};