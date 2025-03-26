import{_ as a,o as r,c as i,a as e}from"./app-z-OzXc2F.js";const n="/assets/system-13-rKnnWezr.png",l="/assets/system-14-uHFGNsvP.png",s={},t=e('<h1 id="_17-复制与分片" tabindex="-1"><a class="header-anchor" href="#_17-复制与分片" aria-hidden="true">#</a> 17. 复制与分片</h1><p>在分布式数据库系统中，<strong>复制</strong> 和 <strong>分片</strong> 是两种核心机制，它们通常结合使用，用于解决数据扩展性和可靠性的问题。</p><ul><li><strong>复制</strong>: 提高每个分片的可靠性、可用性和读取性能。</li><li><strong>分片</strong>: 水平扩展数据存储能力，处理海量数据。</li></ul><h2 id="复制-replication" tabindex="-1"><a class="header-anchor" href="#复制-replication" aria-hidden="true">#</a> 复制 (Replication)</h2><p>复制是将一份数据存储在多个节点上，确保数据高可用性，同时分担读写负载。根据不同场景，复制可以有以下策略：</p><h3 id="_1-主从模式-leader-followers-replication" tabindex="-1"><a class="header-anchor" href="#_1-主从模式-leader-followers-replication" aria-hidden="true">#</a> 1. 主从模式 (Leader-Followers Replication)</h3><figure><img src="'+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="工作方式" tabindex="-1"><a class="header-anchor" href="#工作方式" aria-hidden="true">#</a> 工作方式</h4><p>数据写入主节点 (Leader)，然后同步到从节点 (Followers)。主节点支持读写操作，从节点仅支持读取。</p><h4 id="更新方式" tabindex="-1"><a class="header-anchor" href="#更新方式" aria-hidden="true">#</a> 更新方式</h4><ol><li><strong>异步更新</strong>: <ul><li><strong>特点</strong>: 主节点在写入后异步将更新推送到从节点。</li><li><strong>优点</strong>: 高性能，低延迟。</li><li><strong>缺点</strong>: 可能造成数据不一致。用户读取从节点时，可能获取到旧数据。</li><li><strong>适用场景</strong>: 高并发读取的系统，如缓存服务。</li></ul></li><li><strong>同步更新</strong>: <ul><li><strong>特点</strong>: 每次写操作需要同步到所有从节点后才完成。</li><li><strong>优点</strong>: 数据一致性强。</li><li><strong>缺点</strong>: 显著增加延迟，影响写入性能。</li><li><strong>适用场景</strong>: 数据一致性要求高的系统。</li></ul></li></ol><h4 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h4><ol><li>提高读性能：从节点分担读请求，实现<strong>读扩展</strong>。</li><li>提高可靠性：主节点故障时，从节点可以接管。</li></ol><h4 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h4><p>单一主节点的写性能是瓶颈。</p><hr><h3 id="_2-主主模式-leader-leader-replication" tabindex="-1"><a class="header-anchor" href="#_2-主主模式-leader-leader-replication" aria-hidden="true">#</a> 2. 主主模式 (Leader-Leader Replication)</h3><figure><img src="'+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="工作方式-1" tabindex="-1"><a class="header-anchor" href="#工作方式-1" aria-hidden="true">#</a> 工作方式</h4><p>多个主节点同时负责读写操作，节点间同步更新。适用于跨地域分布的系统。</p><h4 id="优点-1" tabindex="-1"><a class="header-anchor" href="#优点-1" aria-hidden="true">#</a> 优点</h4><ol><li>提高写性能：分布式写入，支持更多并发操作。</li><li>跨地域服务：每个地区的用户访问就近的主节点，提高性能。</li></ol><h4 id="缺点-1" tabindex="-1"><a class="header-anchor" href="#缺点-1" aria-hidden="true">#</a> 缺点</h4><ol><li>数据冲突风险：两个主节点同时更新同一条记录可能导致数据不同步。</li><li>高复杂性：需要额外的机制解决冲突（如时间戳或优先级规则）。</li></ol><h4 id="适用场景" tabindex="-1"><a class="header-anchor" href="#适用场景" aria-hidden="true">#</a> 适用场景</h4><p>跨区域服务的全球应用，例如全球范围的电商或社交媒体。</p><h2 id="分片-sharding" tabindex="-1"><a class="header-anchor" href="#分片-sharding" aria-hidden="true">#</a> 分片 (Sharding)</h2><h3 id="_1-分片的含义" tabindex="-1"><a class="header-anchor" href="#_1-分片的含义" aria-hidden="true">#</a> 1. 分片的含义</h3><p>分片是将大规模的数据按某种规则划分成多个部分，每部分称为一个<strong>分片 (Shard)</strong>，分布存储在不同节点上。分片的目的是实现数据的水平扩展，使系统能够存储更多数据并承载更高的并发量。</p><hr><h3 id="_2-分片的策略" tabindex="-1"><a class="header-anchor" href="#_2-分片的策略" aria-hidden="true">#</a> 2. 分片的策略</h3><ol><li><p><strong>基于范围的分片 (Range-Based Sharding)</strong>:</p><ul><li><strong>原理</strong>: 根据某个字段的值范围划分数据。<br> 例如，通过用户 ID，将 1-1000 分配到分片 A，1001-2000 分配到分片 B。</li><li><strong>优点</strong>: 简单易实现，查询相邻范围数据时效率高。</li><li><strong>缺点</strong>: 数据分布不均衡，某些范围可能产生热点问题。</li><li><strong>示例</strong>:<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Shard A: 用户 ID 1 - 1000
Shard B: 用户 ID 1001 - 2000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><strong>适用场景</strong>: 按地域、时间等有规律分布的数据。</li></ul></li><li><p><strong>基于哈希的分片 (Hash-Based Sharding)</strong>:</p><ul><li><strong>原理</strong>: 通过哈希函数将数据分布到各个分片，确保分布均匀。<br> 例如：<code>shard = hash(user_id) % number_of_shards</code>。</li><li><strong>优点</strong>: 数据分布均匀，避免热点问题。</li><li><strong>缺点</strong>: 跨分片查询复杂，分片扩展时需要重新分布哈希值。</li><li><strong>应用</strong>: 一致性哈希是这种分片策略的重要应用，用于动态扩展或收缩分片数量。</li></ul><p><strong>示例</strong>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>用户 ID 23456 -&gt; Hash % 3 = 0 -&gt; Shard A
用户 ID 78901 -&gt; Hash % 3 = 2 -&gt; Shard C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><hr><h3 id="关系型数据库的分片挑战" tabindex="-1"><a class="header-anchor" href="#关系型数据库的分片挑战" aria-hidden="true">#</a> 关系型数据库的分片挑战</h3><p>传统关系型数据库 (如 MySQL、Postgres) 不具备原生分片功能。需要根据应用逻辑实现分片时，需要特别关注以下问题：</p><ol><li><strong>跨分片查询</strong>: 涉及多个分片的数据需要合并结果，查询复杂度提高。</li><li><strong>关系约束</strong>: 分片后，表间关系约束 (如外键) 无法直接支持，需要应用层逻辑维护。</li></ol><hr><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>分片和复制是分布式数据库设计中的基础技术：</p><ul><li>复制提高了数据的可靠性和高可用性，同时分担读请求压力。</li><li>分片实现了系统水平扩展，支持海量数据存储和高并发处理。</li><li>在实际应用中，需要根据业务需求权衡一致性、性能和复杂性，选择合适的策略。</li></ul>`,40),d=[t];function o(h,g){return r(),i("div",null,d)}const u=a(s,[["render",o],["__file","16_replication_and_sharding.html.vue"]]);export{u as default};
