const e=JSON.parse('{"key":"v-dffbaad8","path":"/system-design/19_message_queues.html","title":"20. 消息队列","lang":"zh-CN","frontmatter":{"description":"20. 消息队列 什么是消息队列 消息队列（Message Queue, MQ）是一种用于在分布式系统中实现异步通信的数据结构。消息队列通过在消息的发送方和接收方之间引入缓冲区，解耦了发送和接收流程，提高了系统的可扩展性和可靠性。它是现代软件架构中非常常见的工具，尤其在微服务、事件驱动设计和分布式系统中。","head":[["meta",{"property":"og:url","content":"https://2xiao.github.io/system-design/19_message_queues.html"}],["meta",{"property":"og:site_name","content":"LeetCode-JS"}],["meta",{"property":"og:title","content":"20. 消息队列"}],["meta",{"property":"og:description","content":"20. 消息队列 什么是消息队列 消息队列（Message Queue, MQ）是一种用于在分布式系统中实现异步通信的数据结构。消息队列通过在消息的发送方和接收方之间引入缓冲区，解耦了发送和接收流程，提高了系统的可扩展性和可靠性。它是现代软件架构中非常常见的工具，尤其在微服务、事件驱动设计和分布式系统中。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-03T15:22:59.000Z"}],["meta",{"property":"article:author","content":"2xiao"}],["meta",{"property":"article:modified_time","content":"2024-12-03T15:22:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"20. 消息队列\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-03T15:22:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"2xiao\\",\\"url\\":\\"https://github.com/2xiao\\"}]}"]]},"headers":[{"level":2,"title":"什么是消息队列","slug":"什么是消息队列","link":"#什么是消息队列","children":[{"level":3,"title":"消息队列的常见模式","slug":"消息队列的常见模式","link":"#消息队列的常见模式","children":[]}]},{"level":2,"title":"高性能","slug":"高性能","link":"#高性能","children":[]},{"level":2,"title":"高扩展性","slug":"高扩展性","link":"#高扩展性","children":[]},{"level":2,"title":"高可用","slug":"高可用","link":"#高可用","children":[]},{"level":2,"title":"持久化和过期策略","slug":"持久化和过期策略","link":"#持久化和过期策略","children":[]},{"level":2,"title":"Consumer Group","slug":"consumer-group","link":"#consumer-group","children":[]},{"level":2,"title":"ZooKeeper","slug":"zookeeper","link":"#zookeeper","children":[]},{"level":2,"title":"Kafka","slug":"kafka","link":"#kafka","children":[]},{"level":2,"title":"常见的消息队列","slug":"常见的消息队列","link":"#常见的消息队列","children":[]},{"level":2,"title":"应用场景","slug":"应用场景","link":"#应用场景","children":[]}],"git":{"createdTime":1732546016000,"updatedTime":1733239379000,"contributors":[{"name":"2xiao","email":"827574297wxxtb@sina.com","commits":3}]},"readingTime":{"minutes":6.56,"words":1967},"filePathRelative":"system-design/19_message_queues.md","localizedDate":"2024年11月25日","excerpt":"<h1> 20. 消息队列</h1>\\n<h2> 什么是消息队列</h2>\\n<p>消息队列（Message Queue, MQ）是一种用于在分布式系统中实现异步通信的数据结构。消息队列通过在消息的发送方和接收方之间引入缓冲区，解耦了发送和接收流程，提高了系统的可扩展性和可靠性。它是现代软件架构中非常常见的工具，尤其在微服务、事件驱动设计和分布式系统中。</p>","autoDesc":true}');export{e as data};