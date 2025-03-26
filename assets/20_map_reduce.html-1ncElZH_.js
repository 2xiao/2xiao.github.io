import{_ as e,o as r,c as a,a as o}from"./app-z-OzXc2F.js";const i="/assets/system-28-g4WNxL3j.png",t="/assets/system-29-JD_1el9j.png",d={},s=o('<h1 id="_21-map-reduce" tabindex="-1"><a class="header-anchor" href="#_21-map-reduce" aria-hidden="true">#</a> 21. Map Reduce</h1><h2 id="什么是-mapreduce" tabindex="-1"><a class="header-anchor" href="#什么是-mapreduce" aria-hidden="true">#</a> 什么是 MapReduce？</h2><p><strong>MapReduce</strong> 是一种编程模型和处理框架，专门设计用于处理大规模数据集。由 Google 在 2004 年提出并在论文中详细阐述，MapReduce 通过简单的 Map 和 Reduce 两个阶段，允许开发者用简单的代码处理分布式计算任务，同时由框架处理数据的分割、分发和容错。</p><p>其核心思想是将数据分割为小块，分布式地进行计算，最终合并结果。MapReduce 的设计目标是使开发者无需担心并行化、分布式计算细节和硬件故障，从而专注于计算逻辑。</p><h2 id="mapreduce-的步骤" tabindex="-1"><a class="header-anchor" href="#mapreduce-的步骤" aria-hidden="true">#</a> MapReduce 的步骤</h2><figure><img src="'+i+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol><li><p><strong>Input（输入）</strong><br> 数据集被分割成多个小数据块，存储在分布式文件系统（如 HDFS）中。</p></li><li><p><strong>Split（分割）</strong><br> 数据分为独立的输入片段，每个片段分配给一个 Map Task 进行处理。</p></li><li><p><strong>Map（映射）</strong><br> 每个 Map Task 读取一个数据片段并执行用户定义的 Map 函数，将原始数据转换为**键值对（key-value pairs）**形式。例如，在单词计数任务中，Map 阶段会将文本分割成类似 <code>(word, 1)</code> 的键值对。</p></li><li><p><strong>Shuffle（分组）</strong><br> 中间结果按键分类和分组，将相同键的所有键值对发送到同一个 Reduce Task。</p></li><li><p><strong>Reduce（归约）</strong><br> 每个 Reduce Task 执行用户定义的 Reduce 函数，将同一键的所有值归约为最终结果。例如，将 <code>(word, [1, 1, 1])</code> 转换为 <code>(word, count)</code>。</p></li><li><p><strong>Finalize（最终输出）</strong><br> Reduce Task 的输出写入分布式文件系统或数据库中，供后续使用。</p></li></ol><h3 id="示例-单词计数" tabindex="-1"><a class="header-anchor" href="#示例-单词计数" aria-hidden="true">#</a> 示例：单词计数</h3><p>假设我们需要统计一批文本文件中每个单词的出现次数（Word Count），MapReduce 的工作流程如下：</p><figure><img src="'+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li><strong>Input 阶段</strong>：输入数据 <code>&quot;Dear Bear River&quot;, &quot;Car Car River&quot;, &quot;Dear Car Bear&quot;</code></li><li><strong>Split 阶段</strong>：将数据分为独立的输入片段，每个片段分配给一个 Map Task</li><li><strong>Map 阶段</strong>：将文本分割成键值对，如 Map Task 0 输出键值对：<code>(Dear, 1), (Bear, 1), (River, 1)</code>。</li><li><strong>Shuffle 阶段</strong>：将键值对按键分组，将相同键的所有键值对发送到同一个 Reduce Task：<code>(Bear, [1, 1])</code>, <code>(Car, [1, 1, 1])</code>, <code>(Dear, [1, 1])</code>, <code>(River, [1, 1])</code>。</li><li><strong>Reduce 阶段</strong>：每个 Reduce Task 执行 Reduce 函数,将同一键的所有值累加：<code>(Bear, 2)</code>, <code>(Car, 3)</code>, <code>(Dear, 2)</code>, <code>(River, 2)</code>。</li><li><strong>Finalize 阶段</strong>：将 Reduce Task 的输出结果写入数据库。</li></ul><h2 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h2><p>MapReduce 擅长解决需要处理<strong>大规模、分布式数据</strong>的任务，特别是在以下场景中表现出色：</p><ol><li><strong>日志分析</strong>：分析和处理分布式系统生成的大量日志文件。</li><li><strong>文本处理</strong>：如倒排索引生成、文本搜索、自然语言处理等。</li><li><strong>数据转换</strong>：从原始格式转换为结构化格式。</li><li><strong>机器学习</strong>：如聚类、统计计算、训练模型等。</li><li><strong>图计算</strong>：如 PageRank 算法。</li></ol><h2 id="优势" tabindex="-1"><a class="header-anchor" href="#优势" aria-hidden="true">#</a> 优势</h2><ol><li><p><strong>简化分布式计算</strong><br> 开发者只需关注 Map 和 Reduce 函数的逻辑，复杂的并行化和容错由框架负责。</p></li><li><p><strong>高扩展性</strong><br> 可扩展到数千台机器处理 PB 级数据。</p></li><li><p><strong>容错能力</strong><br> 自动处理任务失败，通过重新调度未完成的任务保证计算的可靠性。</p></li><li><p><strong>成本效益</strong><br> 使用普通硬件的分布式集群即可处理海量数据。</p></li><li><p><strong>通用性</strong><br> 适用于各种数据处理任务，包括结构化和非结构化数据。</p></li></ol><h2 id="局限性" tabindex="-1"><a class="header-anchor" href="#局限性" aria-hidden="true">#</a> 局限性</h2><ol><li><p><strong>延迟较高</strong>：<br> 对于实时处理任务（如流式处理），MapReduce 的批处理模式不够高效。</p></li><li><p><strong>开发复杂性</strong>：<br> 尽管简化了并行化，但复杂任务仍需处理许多中间数据格式和步骤。</p></li><li><p><strong>迭代效率低</strong>：<br> 在需要多次迭代（如机器学习）的场景中，每次迭代都需重新读写文件，效率较低。</p></li></ol><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>MapReduce 是一种简洁但强大的编程模型，通过分而治之的方法，使得处理海量数据变得简单可扩展。尽管随着 Spark 等新框架的兴起，其使用率有所下降，但在一些批处理场景中仍然有着广泛的应用价值。</p>',20),n=[s];function c(l,p){return r(),a("div",null,n)}const u=e(d,[["render",c],["__file","20_map_reduce.html.vue"]]);export{u as default};
