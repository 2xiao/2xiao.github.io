const e=JSON.parse('{"key":"v-46f545d6","path":"/system-design/26_design_a_key_value_store.html","title":"6. 设计键值存储","lang":"zh-CN","frontmatter":{"description":"6. 设计键值存储 键值存储（Key-Value Store）是一种非关系型数据库，具有以下特点： 每个唯一标识符作为一个键（Key）存储，并与一个值（Value）关联。 键必须唯一，可以是明文字符串或哈希值。 从性能角度看，较短的键通常表现更优。","head":[["meta",{"property":"og:url","content":"https://wangfuyou.com/system-design/26_design_a_key_value_store.html"}],["meta",{"property":"og:site_name","content":"LeetCode-JS"}],["meta",{"property":"og:title","content":"6. 设计键值存储"}],["meta",{"property":"og:description","content":"6. 设计键值存储 键值存储（Key-Value Store）是一种非关系型数据库，具有以下特点： 每个唯一标识符作为一个键（Key）存储，并与一个值（Value）关联。 键必须唯一，可以是明文字符串或哈希值。 从性能角度看，较短的键通常表现更优。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-05T08:38:58.000Z"}],["meta",{"property":"article:author","content":"2xiao"}],["meta",{"property":"article:modified_time","content":"2024-12-05T08:38:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"6. 设计键值存储\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-05T08:38:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"2xiao\\",\\"url\\":\\"https://github.com/2xiao\\"}]}"]]},"headers":[{"level":2,"title":"第一步：理解问题并确定设计范围","slug":"第一步-理解问题并确定设计范围","link":"#第一步-理解问题并确定设计范围","children":[]},{"level":2,"title":"第二步：提出高层设计并获得认可---","slug":"第二步-提出高层设计并获得认可","link":"#第二步-提出高层设计并获得认可","children":[{"level":3,"title":"单机键值存储","slug":"单机键值存储","link":"#单机键值存储","children":[]},{"level":3,"title":"分布式键值存储","slug":"分布式键值存储","link":"#分布式键值存储","children":[]}]},{"level":2,"title":"第三步：深入设计","slug":"第三步-深入设计","link":"#第三步-深入设计","children":[{"level":3,"title":"数据分区","slug":"数据分区","link":"#数据分区","children":[]},{"level":3,"title":"数据复制","slug":"数据复制","link":"#数据复制","children":[]},{"level":3,"title":"一致性","slug":"一致性","link":"#一致性","children":[]},{"level":3,"title":"数据冲突解决：版本控制","slug":"数据冲突解决-版本控制","link":"#数据冲突解决-版本控制","children":[]},{"level":3,"title":"故障处理","slug":"故障处理","link":"#故障处理","children":[]},{"level":3,"title":"系统架构图","slug":"系统架构图","link":"#系统架构图","children":[]},{"level":3,"title":"写入路径","slug":"写入路径","link":"#写入路径","children":[]},{"level":3,"title":"读取路径","slug":"读取路径","link":"#读取路径","children":[]}]},{"level":2,"title":"第四步：总结","slug":"第四步-总结","link":"#第四步-总结","children":[]}],"git":{"createdTime":1733239379000,"updatedTime":1733387938000,"contributors":[{"name":"2xiao","email":"827574297wxxtb@sina.com","commits":2}]},"readingTime":{"minutes":7.6,"words":2280},"filePathRelative":"system-design/26_design_a_key_value_store.md","localizedDate":"2024年12月3日","excerpt":"<h1> 6. 设计键值存储</h1>\\n<p>键值存储（Key-Value Store）是一种非关系型数据库，具有以下特点：</p>\\n<ul>\\n<li>每个唯一标识符作为一个键（Key）存储，并与一个值（Value）关联。</li>\\n<li>键必须唯一，可以是明文字符串或哈希值。</li>\\n<li>从性能角度看，较短的键通常表现更优。</li>\\n</ul>","autoDesc":true}');export{e as data};
