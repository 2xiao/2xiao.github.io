import{_ as i,o as e,c as a,a as r}from"./app-z-OzXc2F.js";const s="/assets/system-design-123-YUImGTgk.png",t="/assets/system-design-124-u3v0-jPM.png",n="/assets/system-design-125-mYbwYFTQ.png",o="/assets/system-design-126-eKyp35Tu.png",l="/assets/system-design-127-ht_OeKwX.png",g="/assets/system-design-128-RuVVZJZU.png",d="/assets/system-design-129-xdVI_NtO.png",p="/assets/system-design-130-uyhmxAtV.png",c="/assets/system-design-131-THKoA4x5.png",h="/assets/system-design-132-W4qCn8nx.png",f="/assets/system-design-133-D04MtBKe.png",u="/assets/system-design-134-zGIpy8pJ.png",m="/assets/system-design-135-xKHg0ajr.png",_="/assets/system-design-136-58xV9dwx.png",x="/assets/system-design-137-ftZdz5ej.png",b="/assets/system-design-138-ZgE7TqBf.png",y={},T=r('<h1 id="_13-设计搜索自动补全系统" tabindex="-1"><a class="header-anchor" href="#_13-设计搜索自动补全系统" aria-hidden="true">#</a> 13. 设计搜索自动补全系统</h1><p>搜索自动补全是许多平台（如 Amazon、Google 等）提供的功能。当你在搜索栏中输入内容时，它会根据输入建议可能的查询：</p><figure><img src="'+s+'" alt="Google 搜索" tabindex="0" loading="lazy"><figcaption>Google 搜索</figcaption></figure><h2 id="第一步-理解问题并确定设计范围" tabindex="-1"><a class="header-anchor" href="#第一步-理解问题并确定设计范围" aria-hidden="true">#</a> 第一步：理解问题并确定设计范围</h2><ul><li><p><strong>候选人</strong>：匹配是否仅支持搜索词开头？例如中间位置是否支持？</p></li><li><p><strong>面试官</strong>：仅支持开头匹配。</p></li><li><p><strong>候选人</strong>：系统应该返回多少个自动补全建议？</p></li><li><p><strong>面试官</strong>：5 个。</p></li><li><p><strong>候选人</strong>：系统如何选择建议？</p></li><li><p><strong>面试官</strong>：根据历史查询频率的流行度确定。</p></li><li><p><strong>候选人</strong>：系统是否支持拼写检查？</p></li><li><p><strong>面试官</strong>：不支持拼写检查或自动更正。</p></li><li><p><strong>候选人</strong>：搜索查询是英语吗？</p></li><li><p><strong>面试官</strong>：是，如果有时间，可以讨论多语言支持。</p></li><li><p><strong>候选人</strong>：是否支持大小写和特殊字符？</p></li><li><p><strong>面试官</strong>：假设所有查询使用小写字符。</p></li><li><p><strong>候选人</strong>：有多少用户使用产品？</p></li><li><p><strong>面试官</strong>：每日活跃用户为 1000 万（10mil DAU）。</p></li></ul><h3 id="非功能性需求" tabindex="-1"><a class="header-anchor" href="#非功能性需求" aria-hidden="true">#</a> 非功能性需求</h3><ul><li><strong>快速响应时间</strong>：一篇关于 Facebook 自动补全的文章中提到，建议应在最多 100 毫秒延迟内返回，以避免卡顿。</li><li><strong>相关性</strong>：自动补全建议应与搜索词相关。</li><li><strong>排序</strong>：建议按流行度排序。</li><li><strong>可扩展性</strong>：系统可以处理高流量。</li><li><strong>高可用性</strong>：即使系统部分失效，也应保持运行。</li></ul><h3 id="粗略估算" tabindex="-1"><a class="header-anchor" href="#粗略估算" aria-hidden="true">#</a> 粗略估算</h3><ul><li>假设我们有 1000 万每日活跃用户。</li><li>平均每人每天执行 10 次搜索。<br> 1000 万 × 10 = 1 亿次搜索/天 = <code>1 亿 ÷ 86400 ≈ 1200</code> 次搜索/秒。</li><li>平均每次搜索由 4 个单词组成，每个单词平均 5 个字符：<code>1200 × 20 = 24000</code> QPS（每秒查询次数）。峰值 QPS = 48000。</li><li>每天 20% 的查询是新的：1 亿 × 20% = 2000 万新搜索 × 每条 20 字节 = 400 MB 新数据/天。</li></ul><h2 id="第二步-提出高层设计并获得认可" tabindex="-1"><a class="header-anchor" href="#第二步-提出高层设计并获得认可" aria-hidden="true">#</a> 第二步：提出高层设计并获得认可</h2><p>从高层来看，系统有两个主要组件：</p><ol><li><strong>数据收集服务</strong>：收集用户输入查询并实时聚合。</li><li><strong>查询服务</strong>：根据搜索查询返回排名前 5 的建议。</li></ol><h3 id="数据收集服务" tabindex="-1"><a class="header-anchor" href="#数据收集服务" aria-hidden="true">#</a> 数据收集服务</h3><p>数据收集服务负责维护一个频率表：</p><figure><img src="'+t+'" alt="频率表" tabindex="0" loading="lazy"><figcaption>频率表</figcaption></figure><h3 id="查询服务" tabindex="-1"><a class="header-anchor" href="#查询服务" aria-hidden="true">#</a> 查询服务</h3><p>给定如上的频率表，查询服务负责根据频率列返回排名前 5 的建议：</p><figure><img src="'+n+'" alt="查询服务示例" tabindex="0" loading="lazy"><figcaption>查询服务示例</figcaption></figure><p>查询数据集可以通过以下 SQL 查询实现：</p><figure><img src="'+o+'" alt="查询服务 SQL 查询" tabindex="0" loading="lazy"><figcaption>查询服务 SQL 查询</figcaption></figure><p>这种方法对于小型数据集是可接受的，但对于大型数据集则不切实际。</p><h2 id="第三步-深入设计" tabindex="-1"><a class="header-anchor" href="#第三步-深入设计" aria-hidden="true">#</a> 第三步：深入设计</h2><p>在这一部分，我们将深入探讨一些组件，以改进初始的高层设计。</p><h3 id="trie-数据结构" tabindex="-1"><a class="header-anchor" href="#trie-数据结构" aria-hidden="true">#</a> Trie 数据结构</h3><p>我们在高层设计中使用了关系型数据库，但为了实现更优的解决方案，需要使用适合的数据结构。</p><p>我们可以使用 Trie（前缀树）来快速检索字符串前缀。</p><ul><li>Trie 是一种类树数据结构。</li><li>根节点表示空字符串。</li><li>每个节点有 26 个子节点，分别代表可能的下一个字符。为了节省空间，不存储空链接。</li><li>每个节点表示一个单词或前缀。</li><li>对于本问题，除了存储字符串外，还需要在每个叶子节点中存储频率。</li></ul><figure><img src="'+l+'" alt="带频率的 Trie 示例" tabindex="0" loading="lazy"><figcaption>带频率的 Trie 示例</figcaption></figure><p>实现该算法需要：</p><ol><li>首先找到表示前缀的节点（时间复杂度为 <code>O(p)</code>，其中 <code>p</code> 为前缀长度）。</li><li>遍历子树以找到所有叶子节点（时间复杂度为 <code>O(c)</code>，其中 <code>c</code> 为总子节点数）。</li><li>按频率对检索到的子节点进行排序（时间复杂度为 <code>O(c log c)</code>）。</li></ol><figure><img src="'+g+'" alt="Trie 算法" tabindex="0" loading="lazy"><figcaption>Trie 算法</figcaption></figure><p>这个算法可行，但在最坏情况下需要遍历整个 Trie，我们可以进一步优化。</p><h4 id="限制前缀最大长度" tabindex="-1"><a class="header-anchor" href="#限制前缀最大长度" aria-hidden="true">#</a> 限制前缀最大长度</h4><p>我们可以利用用户很少使用非常长的搜索词这一事实，将前缀长度限制为 50 个字符。</p><p>这可以将时间复杂度从 <code>O(p) + O(c) + O(c log c)</code> 降至 <code>O(1) + O(c) + O(c log c)</code>。</p><h4 id="在每个节点缓存热门搜索查询" tabindex="-1"><a class="header-anchor" href="#在每个节点缓存热门搜索查询" aria-hidden="true">#</a> 在每个节点缓存热门搜索查询</h4><p>为了避免遍历整个 Trie，可以在每个节点缓存访问频率最高的前 k 个词：</p><figure><img src="'+d+'" alt="缓存热门搜索结果" tabindex="0" loading="lazy"><figcaption>缓存热门搜索结果</figcaption></figure><p>这将时间复杂度降为 <code>O(1)</code>，因为热门搜索词已被缓存。代价是相比传统 Trie，需要占用更多空间。</p><hr><h3 id="数据收集服务-1" tabindex="-1"><a class="header-anchor" href="#数据收集服务-1" aria-hidden="true">#</a> 数据收集服务</h3><p>在前面的设计中，当用户输入搜索词时，数据会实时更新。然而，在大规模系统中这并不现实，原因包括：</p><ul><li>每天有数十亿次查询。</li><li>一旦构建了 Trie，热门建议通常不会频繁变化。</li></ul><p>因此，我们改为根据分析数据异步更新 Trie：</p><figure><img src="'+p+'" alt="数据收集服务" tabindex="0" loading="lazy"><figcaption>数据收集服务</figcaption></figure><p>分析日志包含与搜索词相关的原始数据及时间戳：</p><figure><img src="'+c+'" alt="分析日志" tabindex="0" loading="lazy"><figcaption>分析日志</figcaption></figure><p>聚合器的职责是将分析数据映射为合适的格式，并对记录进行聚合。</p><p>聚合频率取决于自动补全功能的使用场景：</p><ul><li>如果需要实时更新数据（如 Twitter 搜索），可每 30 分钟聚合一次。</li><li>如果不需要实时更新数据（如 Google 搜索），可以每周聚合一次。</li></ul><p>每周聚合数据示例：</p><figure><img src="'+h+'" alt="每周聚合数据" tabindex="0" loading="lazy"><figcaption>每周聚合数据</figcaption></figure><p>Workers 的职责是基于聚合数据构建 Trie 数据结构，并将其存储到数据库中。</p><p>Trie 缓存将 Trie 加载到内存中以实现快速读取，缓存每周从数据库中获取快照。</p><p>Trie 数据库是持久化存储，可以有两种实现方案：</p><ul><li>文档存储（如 MongoDB）：可以定期构建 Trie，序列化后存储到数据库。</li><li>键值存储（如 DynamoDB）：可以将 Trie 存储为哈希表格式。</li></ul><figure><img src="'+f+'" alt="Trie 作为哈希表存储" tabindex="0" loading="lazy"><figcaption>Trie 作为哈希表存储</figcaption></figure><hr><h3 id="查询服务-1" tabindex="-1"><a class="header-anchor" href="#查询服务-1" aria-hidden="true">#</a> 查询服务</h3><p>查询服务从 Trie 缓存中获取热门建议，或者在缓存未命中时从 Trie 数据库中获取：</p><figure><img src="'+u+'" alt="改进后的查询服务" tabindex="0" loading="lazy"><figcaption>改进后的查询服务</figcaption></figure><p>查询服务的一些附加优化：</p><ul><li><strong>客户端使用 AJAX 请求</strong>：防止浏览器刷新页面。</li><li><strong>数据采样</strong>：避免记录所有请求，可采样部分请求以减少日志量。</li><li><strong>浏览器缓存</strong>：由于自动补全建议不常变化，可利用浏览器缓存避免额外的后端调用。</li></ul><p>例如，Google 搜索在浏览器中缓存搜索结果 1 小时：</p><figure><img src="'+m+'" alt="Google 浏览器缓存" tabindex="0" loading="lazy"><figcaption>Google 浏览器缓存</figcaption></figure><hr><h3 id="trie-操作" tabindex="-1"><a class="header-anchor" href="#trie-操作" aria-hidden="true">#</a> Trie 操作</h3><p>下面我们简要回顾一下常见的 Trie 操作。</p><h4 id="创建" tabindex="-1"><a class="header-anchor" href="#创建" aria-hidden="true">#</a> 创建</h4><p>Workers 使用分析日志收集的聚合数据创建 Trie。</p><h4 id="更新" tabindex="-1"><a class="header-anchor" href="#更新" aria-hidden="true">#</a> 更新</h4><p>对于更新，可以选择以下两种方式：</p><ol><li><strong>不更新 Trie，而是重建它</strong>：如果不需要实时建议，这是可接受的。</li><li><strong>直接更新单个节点</strong>：通常避免此方法，因为速度较慢。更新单个节点需要同时更新所有父节点，以更新缓存的建议：</li></ol><figure><img src="'+_+'" alt="更新 Trie" tabindex="0" loading="lazy"><figcaption>更新 Trie</figcaption></figure><h4 id="删除" tabindex="-1"><a class="header-anchor" href="#删除" aria-hidden="true">#</a> 删除</h4><p>为了避免展示仇恨内容或其他不希望展示的内容，可以在 Trie 缓存和 API 服务器之间添加过滤层：</p><figure><img src="'+x+'" alt="过滤层" tabindex="0" loading="lazy"><figcaption>过滤层</figcaption></figure><p>数据库会异步更新以移除仇恨内容。</p><hr><h3 id="扩展存储" tabindex="-1"><a class="header-anchor" href="#扩展存储" aria-hidden="true">#</a> 扩展存储</h3><p>当 Trie 无法完全存储在单台服务器上时，需要设计分片机制。</p><p>一种方法是根据字母表分片，例如：<code>a-m</code> 放在一个分片，<code>n-z</code> 放在另一个分片。</p><p>这种方法分布不均，因为字母 <code>a</code> 的使用频率远高于 <code>x</code>。</p><p>为解决此问题，可以引入专门的分片映射器，该映射器根据搜索词的分布制定智能分片算法：</p><figure><img src="'+b+'" alt="分片" tabindex="0" loading="lazy"><figcaption>分片</figcaption></figure><h2 id="第四步-总结" tabindex="-1"><a class="header-anchor" href="#第四步-总结" aria-hidden="true">#</a> 第四步：总结</h2><p>其他需要讨论的点：</p><ul><li><strong>如何支持多语言</strong>：在 Trie 节点中存储 Unicode 字符，而不是 ASCII。</li><li><strong>如果不同国家的热门搜索词不同怎么办</strong>：可以为每个国家构建不同的 Trie，并利用 CDN 提升响应速度。</li><li><strong>如何支持热门（实时）搜索查询</strong>：当前设计不支持此功能，改进设计以支持该功能超出了本文范围。一些可能的解决方案包括： <ul><li>通过分片减少工作数据集。</li><li>修改排序模型，为最近的搜索查询赋予更高权重。</li><li>数据可能以流的形式到达，可以使用过滤器和 MapReduce 技术（如 Hadoop、Apache Spark、Apache Storm、Apache Kafka）进行处理。</li></ul></li></ul>',88),z=[T];function O(A,k){return e(),a("div",null,z)}const S=i(y,[["render",O],["__file","33_design_a_search_autocomplete_system.html.vue"]]);export{S as default};
