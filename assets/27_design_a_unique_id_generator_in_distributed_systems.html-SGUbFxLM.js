import{_ as n,o as s,c as a,a as e}from"./app-z-OzXc2F.js";const t="/assets/system-design-71-VUuHlpfV.png",i="/assets/system-design-72-IKwZhD8x.png",l="/assets/system-design-73-6Va8Nnt5.png",p={},o=e('<h1 id="_7-设计分布式唯一-id-生成器" tabindex="-1"><a class="header-anchor" href="#_7-设计分布式唯一-id-生成器" aria-hidden="true">#</a> 7. 设计分布式唯一 ID 生成器</h1><p>我们需要设计一个兼容分布式系统的唯一 ID 生成器。</p><p>使用具有 <code>auto_increment</code> 的主键在此场景下不可行，因为在多个数据库服务器之间生成 ID 会导致高延迟。</p><h2 id="第一步-理解问题并明确设计范围" tabindex="-1"><a class="header-anchor" href="#第一步-理解问题并明确设计范围" aria-hidden="true">#</a> 第一步：理解问题并明确设计范围</h2><ul><li><strong>候选人</strong>：唯一 ID 应该具备哪些特性？<br><strong>面试官</strong>：需要唯一且可排序。</li><li><strong>候选人</strong>：每条记录的 ID 是否递增 1？<br><strong>面试官</strong>：ID 按时间递增，但不一定按 1 递增。</li><li><strong>候选人</strong>：ID 是否仅包含数字？<br><strong>面试官</strong>：是。</li><li><strong>候选人</strong>：对 ID 的长度有什么要求？<br><strong>面试官</strong>：64 字节。</li><li><strong>候选人</strong>：系统规模如何？<br><strong>面试官</strong>：需要每秒生成 10,000 个 ID。</li></ul><h2 id="第二步-提出高层设计并获得认可" tabindex="-1"><a class="header-anchor" href="#第二步-提出高层设计并获得认可" aria-hidden="true">#</a> 第二步：提出高层设计并获得认可</h2><p>我们将考虑以下选项：</p><ul><li>多主复制</li><li>全球唯一标识符（UUID）</li><li>Ticket Server</li><li>Twitter 的 Snowflake 方法</li></ul><h3 id="多主复制" tabindex="-1"><a class="header-anchor" href="#多主复制" aria-hidden="true">#</a> 多主复制</h3><figure><img src="'+t+'" alt="multi-master-replication" tabindex="0" loading="lazy"><figcaption>multi-master-replication</figcaption></figure><p>这种方法利用数据库的 <code>auto_increment</code> 功能，但步长为 K，其中 K 是服务器的数量。</p><p>虽然这种方式解决了可扩展性问题（ID 生成限制在单个服务器内），但引入了其他挑战：</p><ul><li>难以扩展到多个数据中心。</li><li>跨服务器的 ID 无法按时间递增。</li><li>添加或移除服务器会破坏此机制。</li></ul><h3 id="uuid" tabindex="-1"><a class="header-anchor" href="#uuid" aria-hidden="true">#</a> UUID</h3><p>UUID 是一个 128 字节的唯一标识符。</p><p>全球范围内发生 UUID 冲突的概率极低。</p><p>示例 UUID：<code>09c93e62-50b4-468d-bf8a-c07e1040bfb2</code></p><p><strong>优点</strong>：</p><ul><li>可以在多个服务器上独立生成，无需同步或协调。</li><li>易于扩展。</li></ul><p><strong>缺点</strong>：</p><ul><li>ID 长度为 128 字节，不满足我们的要求。</li><li>ID 不随时间递增。</li><li>ID 可能包含非数字字符。</li></ul><h3 id="ticket-server" tabindex="-1"><a class="header-anchor" href="#ticket-server" aria-hidden="true">#</a> Ticket Server</h3><p>Ticket Server 是一个用于在多个服务之间生成唯一主键的集中式服务器：</p><figure><img src="'+i+'" alt="ticket-server" tabindex="0" loading="lazy"><figcaption>ticket-server</figcaption></figure><p><strong>优点</strong>：</p><ul><li>生成的 ID 是数值类型。</li><li>实现简单，适用于中小型应用。</li></ul><p><strong>缺点</strong>：</p><ul><li>存在单点故障风险。</li><li>需要额外的网络调用，增加延迟。</li></ul><h3 id="twitter-的-snowflake-方法" tabindex="-1"><a class="header-anchor" href="#twitter-的-snowflake-方法" aria-hidden="true">#</a> Twitter 的 Snowflake 方法</h3><p>Twitter 的 Snowflake 符合我们的设计需求，因为它按时间排序、为 64 字节，并且可以在每个服务器中独立生成。</p><figure><img src="'+l+`" alt="twitter-snowflake" tabindex="0" loading="lazy"><figcaption>twitter-snowflake</figcaption></figure><p>各部分的详细结构：</p><ul><li><strong>符号位</strong>（Sign bit）：占 1 位，始终为 0，保留以供未来使用。</li><li><strong>时间戳</strong>（Timestamp）：占 41 位，表示自纪元时间（或自定义纪元时间）以来的毫秒数，最大支持 69 年。</li><li><strong>数据中心 ID</strong>（Datacenter ID）：占 5 位，最多支持 32 个数据中心。</li><li><strong>机器 ID</strong>（Machine ID）：占 5 位，最多支持每个数据中心 32 台机器。</li><li><strong>序列号</strong>（Sequence Number）：占 12 位，每生成一个 ID，序列号递增。每毫秒重置为 0。</li></ul><h2 id="第三步-深入设计" tabindex="-1"><a class="header-anchor" href="#第三步-深入设计" aria-hidden="true">#</a> 第三步：深入设计</h2><p>我们将使用 Twitter 的 Snowflake 算法，因为它最符合我们的需求。</p><p>数据中心 ID 和机器 ID 在启动时确定，其他部分在运行时生成。</p><h3 id="系统架构" tabindex="-1"><a class="header-anchor" href="#系统架构" aria-hidden="true">#</a> 系统架构</h3><p>一个分布式唯一 ID 生成器的系统架构可以设计如下：</p><ol><li><p><strong>逻辑结构</strong></p><ul><li><strong>生成器层</strong>：分布在不同数据中心和机器上的 ID 生成器实例，基于 Twitter 的 Snowflake 算法运行。</li><li><strong>协调层</strong>：用于管理生成器实例的初始化（例如分配数据中心和机器 ID）。</li><li><strong>持久化层</strong>（可选）：记录已生成的 ID 或用作日志审计。</li></ul></li><li><p><strong>物理架构</strong></p><ul><li><strong>多数据中心部署</strong>：使用多个数据中心，每个中心运行独立的生成器节点。</li><li><strong>负载均衡</strong>：通过 DNS 或负载均衡器将请求分发到各生成器节点。</li><li><strong>容错机制</strong>：每个数据中心包含备用节点，某台机器故障后，其他机器自动接管其工作。</li></ul></li></ol><h3 id="扩展性-scalability" tabindex="-1"><a class="header-anchor" href="#扩展性-scalability" aria-hidden="true">#</a> 扩展性（Scalability）</h3><ol><li><p><strong>水平扩展</strong>：</p><ul><li>Snowflake 的设计允许通过增加数据中心或机器节点轻松扩展。每个数据中心最多支持 32 台机器，序列号支持每毫秒生成 4096 个 ID。</li><li>如果需要更高并发，可以调整字段长度。例如，将数据中心 ID 和机器 ID 位数减少，从而增加序列号的范围。</li></ul></li><li><p><strong>性能优化</strong>：</p><ul><li><strong>批量生成</strong>：对于每次请求生成多个 ID 的需求，可以采用批处理策略，在一个网络请求中生成并返回多个 ID。</li><li><strong>缓存</strong>：在机器内部缓存时间戳等常用数据，减少重复计算。</li></ul></li></ol><h3 id="高可用性-high-availability" tabindex="-1"><a class="header-anchor" href="#高可用性-high-availability" aria-hidden="true">#</a> 高可用性（High Availability）</h3><ol><li><p><strong>去中心化架构</strong>：</p><ul><li>Snowflake 的独立运行特性消除了中心化依赖，避免单点故障。</li></ul></li><li><p><strong>时钟同步机制</strong>：</p><ul><li>使用网络时间协议（NTP）定期校准机器时钟，确保不同机器的时间一致。</li><li>若时钟偏移发生，生成器可触发“回退序列”策略或暂停服务，避免重复生成 ID。</li></ul></li><li><p><strong>容灾机制</strong>：</p><ul><li>在每个数据中心设置冗余节点，启用主备切换。</li><li>数据中心之间配置跨区域同步，通过健康检查快速切换到备用数据中心。</li></ul></li><li><p><strong>监控与报警</strong>：</p><ul><li>实时监控生成器的健康状态（如时钟偏移、资源利用率、生成速度等）。</li><li>配置报警系统，一旦发现故障（例如 ID 重复或生成速度下降），及时响应。</li></ul></li></ol><h3 id="技术细节和扩展" tabindex="-1"><a class="header-anchor" href="#技术细节和扩展" aria-hidden="true">#</a> 技术细节和扩展</h3><ol><li><p><strong>ID 格式的自定义</strong>：</p><ul><li>对于某些业务场景，可以增加业务标识符（如用户类型或区域 ID），并将其编码到生成的 ID 中。</li><li>例如，可以将 Snowflake 的结构调整为：<code>业务标识符（4 位）+ 时间戳（40 位）+ 数据中心 ID（5 位）+ 机器 ID（5 位）+ 序列号（10 位）</code>。</li></ul></li><li><p><strong>存储与查询优化</strong>：</p><ul><li>尽管 ID 生成不需要直接存储，审计或日志分析场景可能需要记录生成的 ID。可使用分布式存储系统（如 Cassandra 或 Elasticsearch）高效存储和查询。</li></ul></li><li><p><strong>数据隔离与安全性</strong>：</p><ul><li>对生成的 ID 加密或签名，防止恶意用户推测或篡改生成逻辑。</li></ul></li></ol><h3 id="具体最佳实践" tabindex="-1"><a class="header-anchor" href="#具体最佳实践" aria-hidden="true">#</a> 具体最佳实践</h3><p>以下是一个简单的 Snowflake 算法实现，使用 Python 编写：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> time
<span class="token keyword">import</span> threading

<span class="token keyword">class</span> <span class="token class-name">Snowflake</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> machine_id<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        初始化 Snowflake ID 生成器。
        参数：
        - machine_id: 当前机器的唯一标识符（假定为 0-31 范围内的整数）
        &quot;&quot;&quot;</span>
        self<span class="token punctuation">.</span>epoch <span class="token operator">=</span> <span class="token number">1609459200000</span>  <span class="token comment"># 自定义纪元时间（2021-01-01 00:00:00 UTC）</span>
        self<span class="token punctuation">.</span>machine_id <span class="token operator">=</span> machine_id  <span class="token comment"># 分配给当前机器的唯一 ID，占用 5 位（最多支持 32 台机器）</span>
        self<span class="token punctuation">.</span>sequence <span class="token operator">=</span> <span class="token number">0</span>  <span class="token comment"># 毫秒内的序列号，占用 12 位（每毫秒最多生成 4096 个 ID）</span>
        self<span class="token punctuation">.</span>last_timestamp <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>  <span class="token comment"># 记录上次生成 ID 的时间戳，用于判断是否同一毫秒</span>
        self<span class="token punctuation">.</span>lock <span class="token operator">=</span> threading<span class="token punctuation">.</span>Lock<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 确保多线程环境下的线程安全</span>

    <span class="token keyword">def</span> <span class="token function">_get_timestamp</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        获取当前时间戳（以毫秒为单位）。
        返回：
        - 当前时间戳（整数）
        &quot;&quot;&quot;</span>
        <span class="token keyword">return</span> <span class="token builtin">int</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">_wait_next_millisecond</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> last_timestamp<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        等待到下一毫秒，确保时间戳递增。
        参数：
        - last_timestamp: 上次生成 ID 时的时间戳
        返回：
        - 新的时间戳
        &quot;&quot;&quot;</span>
        timestamp <span class="token operator">=</span> self<span class="token punctuation">.</span>_get_timestamp<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">while</span> timestamp <span class="token operator">&lt;=</span> last_timestamp<span class="token punctuation">:</span>  <span class="token comment"># 若当前时间未超过上次时间，则等待</span>
            timestamp <span class="token operator">=</span> self<span class="token punctuation">.</span>_get_timestamp<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> timestamp

    <span class="token keyword">def</span> <span class="token function">get_next_id</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        生成下一个唯一 ID。
        返回：
        - 64 位整数 ID
        &quot;&quot;&quot;</span>
        <span class="token keyword">with</span> self<span class="token punctuation">.</span>lock<span class="token punctuation">:</span>  <span class="token comment"># 加锁，确保线程安全</span>
            timestamp <span class="token operator">=</span> self<span class="token punctuation">.</span>_get_timestamp<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 获取当前时间戳</span>

            <span class="token keyword">if</span> timestamp <span class="token operator">&lt;</span> self<span class="token punctuation">.</span>last_timestamp<span class="token punctuation">:</span>
                <span class="token comment"># 若发现时钟回拨，使用上次的时间戳，继续生成序列号，避免生成重复 ID</span>
                timestamp <span class="token operator">=</span> self<span class="token punctuation">.</span>last_timestamp

            <span class="token keyword">if</span> timestamp <span class="token operator">==</span> self<span class="token punctuation">.</span>last_timestamp<span class="token punctuation">:</span>
                <span class="token comment"># 同一毫秒内，自增序列号</span>
                self<span class="token punctuation">.</span>sequence <span class="token operator">=</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>sequence <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token number">0xFFF</span>  <span class="token comment"># 0xFFF = 4095，用于限制序列号最大值</span>
                <span class="token keyword">if</span> self<span class="token punctuation">.</span>sequence <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
                    <span class="token comment"># 如果序列号溢出（达到 4096），等待到下一毫秒</span>
                    timestamp <span class="token operator">=</span> self<span class="token punctuation">.</span>_wait_next_millisecond<span class="token punctuation">(</span>self<span class="token punctuation">.</span>last_timestamp<span class="token punctuation">)</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                <span class="token comment"># 不同毫秒内，序列号重置为 0</span>
                self<span class="token punctuation">.</span>sequence <span class="token operator">=</span> <span class="token number">0</span>

            <span class="token comment"># 更新记录的时间戳</span>
            self<span class="token punctuation">.</span>last_timestamp <span class="token operator">=</span> timestamp

            <span class="token comment"># 按照 Snowflake 格式生成 64 位 ID</span>
            <span class="token comment"># 1. 时间戳部分 (41 bits): (timestamp - epoch)</span>
            <span class="token comment"># 2. 机器 ID 部分 (10 bits): machine_id</span>
            <span class="token comment"># 3. 序列号部分 (12 bits): sequence</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>timestamp <span class="token operator">-</span> self<span class="token punctuation">.</span>epoch<span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token number">22</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>machine_id <span class="token operator">&lt;&lt;</span> <span class="token number">12</span><span class="token punctuation">)</span> <span class="token operator">|</span> self<span class="token punctuation">.</span>sequence
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第四步-总结" tabindex="-1"><a class="header-anchor" href="#第四步-总结" aria-hidden="true">#</a> 第四步：总结</h2><p>我们探索了多种生成唯一 ID 的方法，最终选择了 Snowflake，因为它最能满足我们的需求。</p><p>Snowflake 方法是分布式唯一 ID 生成器的绝佳选择，具有可扩展性、高性能和高可用性。在实际部署中，通过合理的架构设计和补充机制（如时钟同步、容灾策略），可以进一步提高系统的可靠性和可扩展性。</p>`,51),c=[o];function r(u,d){return s(),a("div",null,c)}const k=n(p,[["render",r],["__file","27_design_a_unique_id_generator_in_distributed_systems.html.vue"]]);export{k as default};
