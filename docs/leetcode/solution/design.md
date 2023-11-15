# 1.5 LeetCode 题解（标签）

**数据结构**

[`数组`](../solution/array.md)
[`矩阵`](../solution/matrix.md)
[`链表`](../solution/linked-list.md)
[`双向链表`](../solution/doubly-linked-list.md)
[`栈`](../solution/stack.md)
[`单调栈`](../solution/monotonic-stack.md)
[`队列`](../solution/queue.md)
[`单调队列`](../solution/monotonic-queue.md)
[`堆（优先队列）`](../solution/heap-priority-queue.md)
[`哈希表`](../solution/hash-table.md)
[`字符串`](../solution/string.md)
[`字符串匹配`](../solution/string-matching.md)
[`树`](../solution/tree.md)
[`二叉树`](../solution/binary-tree.md)
[`二叉搜索树`](../solution/binary-search-tree.md)
[`最小生成树`](../solution/minimum-spanning-tree.md)
[`图`](../solution/graph.md)
[`有序集合`](../solution/ordered-set.md)
[`拓扑排序`](../solution/topological-sort.md)
[`最短路`](../solution/shortest-path.md)
[`强连通分量`](../solution/strongly-connected-components.md)
[`欧拉回路`](../solution/eulerian-circuit.md)
[`双连通分量`](../solution/biconnected-components.md)
[`并查集`](../solution/disjoint-set-union.md)
[`字典树`](../solution/trie.md)
[`线段树`](../solution/segment-tree.md)
[`树状数组`](../solution/fenwick-tree.md)
[`后缀数组`](../solution/suffix-array.md)

**算法**

[`枚举`](../solution/enumeration.md)
[`递归`](../solution/recursion.md)
[`分治`](../solution/divide-and-conquer.md)
[`回溯`](../solution/backtracking.md)
[`贪心`](../solution/greedy.md)
[`动态规划`](../solution/dynamic-programming.md)
[`排序`](../solution/sorting.md)
[`桶排序`](../solution/bucket-sort.md)
[`计数排序`](../solution/counting-sort.md)
[`基数排序`](../solution/radix-sort.md)
[`归并排序`](../solution/merge-sort.md)
[`快速选择`](../solution/quick-select.md)
[`二分查找`](../solution/binary-search.md)
[`记忆化搜索`](../solution/memoization.md)
[`深度优先搜索`](../solution/depth-first-search.md)
[`广度优先搜索`](../solution/breadth-first-search.md)
[`双指针`](../solution/two-pointers.md)
[`位运算`](../solution/bit-manipulation.md)
[`前缀和`](../solution/prefix-sum.md)
[`计数`](../solution/counting.md)
[`滑动窗口`](../solution/sliding-window.md)
[`状态压缩`](../solution/state-compression.md)
[`哈希函数`](../solution/hash-function.md)
[`滚动哈希`](../solution/rolling-hash.md)
[`扫描线`](../solution/sweep-line.md)

**其他**

[`数学`](../solution/mathematics.md)
[`数论`](../solution/number-theory.md)
[`几何`](../solution/geometry.md)
[`博弈`](../solution/game-theory.md)
[`模拟`](../solution/simulation.md)
[`组合数学`](../solution/combinatorics.md)
[`随机化`](../solution/randomized-algorithms.md)
[`概率与统计`](../solution/probability-and-statistics.md)
[`水塘抽样`](../solution/reservoir-sampling.md)
[`拒绝采样`](../solution/rejection-sampling.md)
[`数据库`](../solution/database.md)
<span class="blue">设计</span>
[`数据流`](../solution/data-streams.md)
[`脑筋急转弯`](../solution/brain-teasers.md)
[`交互`](../solution/interaction.md)
[`迭代器`](../solution/iterators.md)
[`多线程`](../solution/multithreading.md)

<style>
.blue {
    background-color: #3eaf7c;
    padding: 0.25rem 0.5rem;
    margin: 0;
    font-size: 0.85em;
    border-radius: 3px;
    color: white;
    font-weight: 500;
}
table th:first-of-type { width: 10%; }
table th:nth-of-type(2) { width: 35%; }
table th:nth-of-type(3) { width: 10%; }
table th:nth-of-type(4) { width: 35%; }
table th:nth-of-type(5) { width: 10%; }
</style>


---

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 0146 | [LRU 缓存](https://leetcode.com/problems/lru-cache/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0146) | `设计` `哈希表` `链表` `1+` | <font color=#ffb800>Medium</font> |
| 0155 | [最小栈](https://leetcode.com/problems/min-stack/) |  | `栈` `设计` | <font color=#ffb800>Medium</font> |
| 0170 | [两数之和 III - 数据结构设计](https://leetcode.com/problems/two-sum-iii-data-structure-design/) |  | `设计` `数组` `哈希表` `2+` | <font color=#15bd66>Esay</font> |
| 0173 | [二叉搜索树迭代器](https://leetcode.com/problems/binary-search-tree-iterator/) |  | `栈` `树` `设计` `3+` | <font color=#ffb800>Medium</font> |
| 0208 | [实现 Trie (前缀树)](https://leetcode.com/problems/implement-trie-prefix-tree/) |  | `设计` `字典树` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 0211 | [添加与搜索单词 - 数据结构设计](https://leetcode.com/problems/design-add-and-search-words-data-structure/) |  | `深度优先搜索` `设计` `字典树` `1+` | <font color=#ffb800>Medium</font> |
| 0225 | [用队列实现栈](https://leetcode.com/problems/implement-stack-using-queues/) |  | `栈` `设计` `队列` | <font color=#15bd66>Esay</font> |
| 0232 | [用栈实现队列](https://leetcode.com/problems/implement-queue-using-stacks/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0232) | `栈` `设计` `队列` | <font color=#15bd66>Esay</font> |
| 0244 | [最短单词距离 II](https://leetcode.com/problems/shortest-word-distance-ii/) |  | `设计` `数组` `哈希表` `2+` | <font color=#ffb800>Medium</font> |
| 0251 | [展开二维向量](https://leetcode.com/problems/flatten-2d-vector/) |  | `设计` `数组` `双指针` `1+` | <font color=#ffb800>Medium</font> |
| 0271 | [字符串的编码与解码](https://leetcode.com/problems/encode-and-decode-strings/) |  | `设计` `数组` `字符串` | <font color=#ffb800>Medium</font> |
| 0281 | [锯齿迭代器](https://leetcode.com/problems/zigzag-iterator/) |  | `设计` `队列` `数组` `1+` | <font color=#ffb800>Medium</font> |
| 0284 | [顶端迭代器](https://leetcode.com/problems/peeking-iterator/) |  | `设计` `数组` `迭代器` | <font color=#ffb800>Medium</font> |
| 0288 | [单词的唯一缩写](https://leetcode.com/problems/unique-word-abbreviation/) |  | `设计` `数组` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 0295 | [数据流的中位数](https://leetcode.com/problems/find-median-from-data-stream/) |  | `设计` `双指针` `数据流` `2+` | <font color=#ff334b>Hard</font> |
| 0297 | [二叉树的序列化与反序列化](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/) |  | `树` `深度优先搜索` `广度优先搜索` `3+` | <font color=#ff334b>Hard</font> |
| 0303 | [区域和检索 - 数组不可变](https://leetcode.com/problems/range-sum-query-immutable/) |  | `设计` `数组` `前缀和` | <font color=#15bd66>Esay</font> |
| 0304 | [二维区域和检索 - 矩阵不可变](https://leetcode.com/problems/range-sum-query-2d-immutable/) |  | `设计` `数组` `矩阵` `1+` | <font color=#ffb800>Medium</font> |
| 0307 | [区域和检索 - 数组可修改](https://leetcode.com/problems/range-sum-query-mutable/) |  | `设计` `树状数组` `线段树` `1+` | <font color=#ffb800>Medium</font> |
| 0308 | [二维区域和检索 - 可变](https://leetcode.com/problems/range-sum-query-2d-mutable/) |  | `设计` `树状数组` `线段树` `2+` | <font color=#ff334b>Hard</font> |
| 0341 | [扁平化嵌套列表迭代器](https://leetcode.com/problems/flatten-nested-list-iterator/) |  | `栈` `树` `深度优先搜索` `3+` | <font color=#ffb800>Medium</font> |
| 0346 | [数据流中的移动平均值](https://leetcode.com/problems/moving-average-from-data-stream/) |  | `设计` `队列` `数组` `1+` | <font color=#15bd66>Esay</font> |
| 0348 | [设计井字棋](https://leetcode.com/problems/design-tic-tac-toe/) |  | `设计` `数组` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 0352 | [将数据流变为多个不相交区间](https://leetcode.com/problems/data-stream-as-disjoint-intervals/) |  | `设计` `二分查找` `有序集合` | <font color=#ff334b>Hard</font> |
| 0353 | [贪吃蛇](https://leetcode.com/problems/design-snake-game/) |  | `设计` `队列` `数组` `1+` | <font color=#ffb800>Medium</font> |
| 0355 | [设计推特](https://leetcode.com/problems/design-twitter/) |  | `设计` `哈希表` `链表` `1+` | <font color=#ffb800>Medium</font> |
| 0359 | [日志速率限制器](https://leetcode.com/problems/logger-rate-limiter/) |  | `设计` `哈希表` | <font color=#15bd66>Esay</font> |
| 0362 | [敲击计数器](https://leetcode.com/problems/design-hit-counter/) |  | `设计` `队列` `数组` `2+` | <font color=#ffb800>Medium</font> |
| 0379 | [电话目录管理系统](https://leetcode.com/problems/design-phone-directory/) |  | `设计` `队列` `数组` `2+` | <font color=#ffb800>Medium</font> |
| 0380 | [O(1) 时间插入、删除和获取随机元素](https://leetcode.com/problems/insert-delete-getrandom-o1/) |  | `设计` `数组` `哈希表` `2+` | <font color=#ffb800>Medium</font> |
| 0381 | [O(1) 时间插入、删除和获取随机元素 - 允许重复](https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/) |  | `设计` `数组` `哈希表` `2+` | <font color=#ff334b>Hard</font> |
| 0431 | [将 N 叉树编码为二叉树](https://leetcode.com/problems/encode-n-ary-tree-to-binary-tree/) |  | `树` `深度优先搜索` `广度优先搜索` `2+` | <font color=#ff334b>Hard</font> |
| 0432 | [全 O(1) 的数据结构](https://leetcode.com/problems/all-oone-data-structure/) |  | `设计` `哈希表` `链表` `1+` | <font color=#ff334b>Hard</font> |
| 0449 | [序列化和反序列化二叉搜索树](https://leetcode.com/problems/serialize-and-deserialize-bst/) |  | `树` `深度优先搜索` `广度优先搜索` `4+` | <font color=#ffb800>Medium</font> |
| 0460 | [LFU 缓存](https://leetcode.com/problems/lfu-cache/) |  | `设计` `哈希表` `链表` `1+` | <font color=#ff334b>Hard</font> |
| 0535 | [TinyURL 的加密与解密](https://leetcode.com/problems/encode-and-decode-tinyurl/) |  | `设计` `哈希表` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 0588 | [设计内存文件系统](https://leetcode.com/problems/design-in-memory-file-system/) |  | `设计` `字典树` `哈希表` `1+` | <font color=#ff334b>Hard</font> |
| 0604 | [迭代压缩字符串](https://leetcode.com/problems/design-compressed-string-iterator/) |  | `设计` `数组` `哈希表` `2+` | <font color=#15bd66>Esay</font> |
| 0622 | [设计循环队列](https://leetcode.com/problems/design-circular-queue/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0622) | `设计` `队列` `数组` `1+` | <font color=#ffb800>Medium</font> |
| 0631 | [设计 Excel 求和公式](https://leetcode.com/problems/design-excel-sum-formula/) |  | `图` `设计` `拓扑排序` | <font color=#ff334b>Hard</font> |
| 0635 | [设计日志存储系统](https://leetcode.com/problems/design-log-storage-system/) |  | `设计` `哈希表` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 0641 | [设计循环双端队列](https://leetcode.com/problems/design-circular-deque/) |  | `设计` `队列` `数组` `1+` | <font color=#ffb800>Medium</font> |
| 0642 | [设计搜索自动补全系统](https://leetcode.com/problems/design-search-autocomplete-system/) |  | `设计` `字典树` `字符串` `1+` | <font color=#ff334b>Hard</font> |
| 0676 | [实现一个魔法字典](https://leetcode.com/problems/implement-magic-dictionary/) |  | `设计` `字典树` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 0677 | [键值映射](https://leetcode.com/problems/map-sum-pairs/) |  | `设计` `字典树` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 0703 | [数据流中的第 K 大元素](https://leetcode.com/problems/kth-largest-element-in-a-stream/) |  | `树` `设计` `二叉搜索树` `3+` | <font color=#15bd66>Esay</font> |
| 0705 | [设计哈希集合](https://leetcode.com/problems/design-hashset/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0705) | `设计` `数组` `哈希表` `2+` | <font color=#15bd66>Esay</font> |
| 0706 | [设计哈希映射](https://leetcode.com/problems/design-hashmap/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0706) | `设计` `数组` `哈希表` `2+` | <font color=#15bd66>Esay</font> |
| 0707 | [设计链表](https://leetcode.com/problems/design-linked-list/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0707) | `设计` `链表` | <font color=#ffb800>Medium</font> |
| 0715 | [Range 模块](https://leetcode.com/problems/range-module/) |  | `设计` `线段树` `有序集合` | <font color=#ff334b>Hard</font> |
| 0716 | [最大栈](https://leetcode.com/problems/max-stack/) |  | `栈` `设计` `链表` `2+` | <font color=#ff334b>Hard</font> |
| 0729 | [我的日程安排表 I](https://leetcode.com/problems/my-calendar-i/) |  | `设计` `线段树` `二分查找` `1+` | <font color=#ffb800>Medium</font> |
| 0731 | [我的日程安排表 II](https://leetcode.com/problems/my-calendar-ii/) |  | `设计` `线段树` `二分查找` `1+` | <font color=#ffb800>Medium</font> |
| 0732 | [我的日程安排表 III](https://leetcode.com/problems/my-calendar-iii/) |  | `设计` `线段树` `二分查找` `1+` | <font color=#ff334b>Hard</font> |
| 0745 | [前缀和后缀搜索](https://leetcode.com/problems/prefix-and-suffix-search/) |  | `设计` `字典树` `哈希表` `1+` | <font color=#ff334b>Hard</font> |
| 0855 | [考场就座](https://leetcode.com/problems/exam-room/) |  | `设计` `有序集合` `堆（优先队列）` | <font color=#ffb800>Medium</font> |
| 0895 | [最大频率栈](https://leetcode.com/problems/maximum-frequency-stack/) |  | `栈` `设计` `哈希表` `1+` | <font color=#ff334b>Hard</font> |
| 0900 | [RLE 迭代器](https://leetcode.com/problems/rle-iterator/) |  | `设计` `数组` `计数` `1+` | <font color=#ffb800>Medium</font> |
| 0901 | [股票价格跨度](https://leetcode.com/problems/online-stock-span/) |  | `栈` `设计` `数据流` `1+` | <font color=#ffb800>Medium</font> |
| 0911 | [在线选举](https://leetcode.com/problems/online-election/) |  | `设计` `数组` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 0919 | [完全二叉树插入器](https://leetcode.com/problems/complete-binary-tree-inserter/) |  | `树` `广度优先搜索` `设计` `1+` | <font color=#ffb800>Medium</font> |
| 0933 | [最近的请求次数](https://leetcode.com/problems/number-of-recent-calls/) |  | `设计` `队列` `数据流` | <font color=#15bd66>Esay</font> |
| 0981 | [基于时间的键值存储](https://leetcode.com/problems/time-based-key-value-store/) |  | `设计` `哈希表` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 1032 | [字符流](https://leetcode.com/problems/stream-of-characters/) |  | `设计` `字典树` `数组` `2+` | <font color=#ff334b>Hard</font> |
| 1146 | [快照数组](https://leetcode.com/problems/snapshot-array/) |  | `设计` `数组` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 1157 | [子数组中占绝大多数的元素](https://leetcode.com/problems/online-majority-element-in-subarray/) |  | `设计` `树状数组` `线段树` `2+` | <font color=#ff334b>Hard</font> |
| 1166 | [设计文件系统](https://leetcode.com/problems/design-file-system/) |  | `设计` `字典树` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 1172 | [餐盘栈](https://leetcode.com/problems/dinner-plate-stacks/) |  | `栈` `设计` `哈希表` `1+` | <font color=#ff334b>Hard</font> |
| 1206 | [设计跳表](https://leetcode.com/problems/design-skiplist/) |  | `设计` `链表` | <font color=#ff334b>Hard</font> |
| 1244 | [力扣排行榜](https://leetcode.com/problems/design-a-leaderboard/) |  | `设计` `哈希表` `排序` | <font color=#ffb800>Medium</font> |
| 1261 | [在受污染的二叉树中查找元素](https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree/) |  | `树` `深度优先搜索` `广度优先搜索` `3+` | <font color=#ffb800>Medium</font> |
| 1286 | [字母组合迭代器](https://leetcode.com/problems/iterator-for-combination/) |  | `设计` `字符串` `回溯` `1+` | <font color=#ffb800>Medium</font> |
| 1348 | [推文计数](https://leetcode.com/problems/tweet-counts-per-frequency/) |  | `设计` `哈希表` `二分查找` `2+` | <font color=#ffb800>Medium</font> |
| 1352 | [最后 K 个数的乘积](https://leetcode.com/problems/product-of-the-last-k-numbers/) |  | `设计` `队列` `数组` `2+` | <font color=#ffb800>Medium</font> |
| 1357 | [每隔 n 个顾客打折](https://leetcode.com/problems/apply-discount-every-n-orders/) |  | `设计` `数组` `哈希表` | <font color=#ffb800>Medium</font> |
| 1381 | [设计一个支持增量操作的栈](https://leetcode.com/problems/design-a-stack-with-increment-operation/) |  | `栈` `设计` `数组` | <font color=#ffb800>Medium</font> |
| 1396 | [设计地铁系统](https://leetcode.com/problems/design-underground-system/) |  | `设计` `哈希表` `字符串` | <font color=#ffb800>Medium</font> |
| 1429 | [第一个唯一数字](https://leetcode.com/problems/first-unique-number/) |  | `设计` `队列` `数组` `2+` | <font color=#ffb800>Medium</font> |
| 1472 | [设计浏览器历史记录](https://leetcode.com/problems/design-browser-history/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/1472) | `栈` `设计` `数组` `3+` | <font color=#ffb800>Medium</font> |
| 1476 | [子矩形查询](https://leetcode.com/problems/subrectangle-queries/) |  | `设计` `数组` `矩阵` | <font color=#ffb800>Medium</font> |
| 1483 | [树节点的第 K 个祖先](https://leetcode.com/problems/kth-ancestor-of-a-tree-node/) |  | `树` `深度优先搜索` `广度优先搜索` `2+` | <font color=#ff334b>Hard</font> |
| 1500 | [设计文件分享系统](https://leetcode.com/problems/design-a-file-sharing-system/) |  | `设计` `哈希表` `数据流` `1+` | <font color=#ffb800>Medium</font> |
| 1570 | [两个稀疏向量的点积](https://leetcode.com/problems/dot-product-of-two-sparse-vectors/) |  | `设计` `数组` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 1586 | [二叉搜索树迭代器 II](https://leetcode.com/problems/binary-search-tree-iterator-ii/) |  | `栈` `树` `设计` `3+` | <font color=#ffb800>Medium</font> |
| 1600 | [王位继承顺序](https://leetcode.com/problems/throne-inheritance/) |  | `树` `深度优先搜索` `设计` `1+` | <font color=#ffb800>Medium</font> |
| 1603 | [设计停车系统](https://leetcode.com/problems/design-parking-system/) |  | `设计` `计数` `模拟` | <font color=#15bd66>Esay</font> |
| 1622 | [奇妙序列](https://leetcode.com/problems/fancy-sequence/) |  | `设计` `线段树` `数学` | <font color=#ff334b>Hard</font> |
| 1628 | [设计带解析函数的表达式树](https://leetcode.com/problems/design-an-expression-tree-with-evaluate-function/) |  | `栈` `树` `设计` `2+` | <font color=#ffb800>Medium</font> |
| 1656 | [设计有序流](https://leetcode.com/problems/design-an-ordered-stream/) |  | `设计` `数组` `哈希表` `1+` | <font color=#15bd66>Esay</font> |
| 1670 | [设计前中后队列](https://leetcode.com/problems/design-front-middle-back-queue/) |  | `设计` `队列` `数组` `2+` | <font color=#ffb800>Medium</font> |
| 1756 | [设计最近使用（MRU）队列](https://leetcode.com/problems/design-most-recently-used-queue/) |  | `栈` `设计` `树状数组` `3+` | <font color=#ffb800>Medium</font> |
| 1797 | [设计一个验证系统](https://leetcode.com/problems/design-authentication-manager/) |  | `设计` `哈希表` | <font color=#ffb800>Medium</font> |
| 1804 | [实现 Trie （前缀树） II](https://leetcode.com/problems/implement-trie-ii-prefix-tree/) |  | `设计` `字典树` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 1825 | [求出 MK 平均值](https://leetcode.com/problems/finding-mk-average/) |  | `设计` `队列` `数据流` `2+` | <font color=#ff334b>Hard</font> |
| 1845 | [座位预约管理系统](https://leetcode.com/problems/seat-reservation-manager/) |  | `设计` `堆（优先队列）` | <font color=#ffb800>Medium</font> |
| 1865 | [找出和为指定值的下标对](https://leetcode.com/problems/finding-pairs-with-a-certain-sum/) |  | `设计` `数组` `哈希表` | <font color=#ffb800>Medium</font> |
| 1912 | [设计电影租借系统](https://leetcode.com/problems/design-movie-rental-system/) |  | `设计` `数组` `哈希表` `2+` | <font color=#ff334b>Hard</font> |
| 1993 | [树上的操作](https://leetcode.com/problems/operations-on-tree/) |  | `树` `深度优先搜索` `广度优先搜索` `2+` | <font color=#ffb800>Medium</font> |
| 2013 | [检测正方形](https://leetcode.com/problems/detect-squares/) |  | `设计` `数组` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 2034 | [股票价格波动](https://leetcode.com/problems/stock-price-fluctuation/) |  | `设计` `哈希表` `数据流` `2+` | <font color=#ffb800>Medium</font> |
| 2043 | [简易银行系统](https://leetcode.com/problems/simple-bank-system/) |  | `设计` `数组` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 2069 | [模拟行走机器人 II](https://leetcode.com/problems/walking-robot-simulation-ii/) |  | `设计` `模拟` | <font color=#ffb800>Medium</font> |
| 2080 | [区间内查询数字的频率](https://leetcode.com/problems/range-frequency-queries/) |  | `设计` `线段树` `数组` `2+` | <font color=#ffb800>Medium</font> |
| 2102 | [序列顺序查询](https://leetcode.com/problems/sequentially-ordinal-rank-tracker/) |  | `设计` `数据流` `有序集合` `1+` | <font color=#ff334b>Hard</font> |
| 2166 | [设计位集](https://leetcode.com/problems/design-bitset/) |  | `设计` `数组` `哈希表` | <font color=#ffb800>Medium</font> |
| 2227 | [加密解密字符串](https://leetcode.com/problems/encrypt-and-decrypt-strings/) |  | `设计` `字典树` `数组` `2+` | <font color=#ff334b>Hard</font> |
| 2241 | [设计一个 ATM 机器](https://leetcode.com/problems/design-an-atm-machine/) |  | `贪心` `设计` `数组` | <font color=#ffb800>Medium</font> |
| 2254 | [设计视频共享平台](https://leetcode.com/problems/design-video-sharing-platform/) |  | `栈` `设计` `哈希表` `1+` | <font color=#ff334b>Hard</font> |
| 2276 | [统计区间中的整数数目](https://leetcode.com/problems/count-integers-in-intervals/) |  | `设计` `线段树` `有序集合` | <font color=#ff334b>Hard</font> |
| 2286 | [以组为单位订音乐会的门票](https://leetcode.com/problems/booking-concert-tickets-in-groups/) |  | `设计` `树状数组` `线段树` `1+` | <font color=#ff334b>Hard</font> |
| 2296 | [设计一个文本编辑器](https://leetcode.com/problems/design-a-text-editor/) |  | `栈` `设计` `链表` `3+` | <font color=#ff334b>Hard</font> |
| 2336 | [无限集中的最小数字](https://leetcode.com/problems/smallest-number-in-infinite-set/) |  | `设计` `哈希表` `堆（优先队列）` | <font color=#ffb800>Medium</font> |
| 2349 | [设计数字容器系统](https://leetcode.com/problems/design-a-number-container-system/) |  | `设计` `哈希表` `有序集合` `1+` | <font color=#ffb800>Medium</font> |
| 2353 | [设计食物评分系统](https://leetcode.com/problems/design-a-food-rating-system/) |  | `设计` `哈希表` `有序集合` `1+` | <font color=#ffb800>Medium</font> |
| 2408 | [设计 SQL](https://leetcode.com/problems/design-sql/) |  | `设计` `数组` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 2424 | [最长上传前缀](https://leetcode.com/problems/longest-uploaded-prefix/) |  | `并查集` `设计` `树状数组` `4+` | <font color=#ffb800>Medium</font> |
| 2502 | [设计内存分配器](https://leetcode.com/problems/design-memory-allocator/) |  | `设计` `数组` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 2526 | [找到数据流中的连续整数](https://leetcode.com/problems/find-consecutive-integers-from-a-data-stream/) |  | `设计` `队列` `哈希表` `2+` | <font color=#ffb800>Medium</font> |
| 2590 | [设计一个待办事项清单](https://leetcode.com/problems/design-a-todo-list/) |  | `设计` `数组` `哈希表` `2+` | <font color=#ffb800>Medium</font> |
| 2642 | [设计可以求最短路径的图类](https://leetcode.com/problems/design-graph-with-shortest-path-calculator/) |  | `图` `设计` `最短路` `1+` | <font color=#ff334b>Hard</font> |
| 2671 | [频率跟踪器](https://leetcode.com/problems/frequency-tracker/) |  | `设计` `哈希表` | <font color=#ffb800>Medium</font> |
| LCP 27 | [黑盒光线反射](https://leetcode.cn/problems/IQvJ9i/) |  | `设计` `线段树` `数学` `1+` | <font color=#ff334b>Hard</font> |
| 剑指 Offer 09 | [用两个栈实现队列](https://leetcode.cn/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/) |  | `栈` `设计` `队列` | <font color=#15bd66>Esay</font> |
| 剑指 Offer 30 | [包含min函数的栈](https://leetcode.cn/problems/bao-han-minhan-shu-de-zhan-lcof/) |  | `栈` `设计` | <font color=#15bd66>Esay</font> |
| 剑指 Offer 37 | [序列化二叉树](https://leetcode.cn/problems/xu-lie-hua-er-cha-shu-lcof/) |  | `树` `深度优先搜索` `广度优先搜索` `3+` | <font color=#ff334b>Hard</font> |
| 剑指 Offer 41 | [数据流中的中位数](https://leetcode.cn/problems/shu-ju-liu-zhong-de-zhong-wei-shu-lcof/) |  | `设计` `双指针` `数据流` `2+` | <font color=#ff334b>Hard</font> |
| 剑指 Offer 59 - II | [队列的最大值](https://leetcode.cn/problems/dui-lie-de-zui-da-zhi-lcof/) |  | `设计` `队列` `单调队列` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 013 | [二维子矩阵的和](https://leetcode.cn/problems/O4NDxx/) |  | `设计` `数组` `矩阵` `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 030 | [插入、删除和随机访问都是 O(1) 的容器](https://leetcode.cn/problems/FortPu/) |  | `设计` `数组` `哈希表` `2+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 031 | [最近最少使用缓存](https://leetcode.cn/problems/OrIXps/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/jz_offer_II_031) | `设计` `哈希表` `链表` `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 041 | [滑动窗口的平均值](https://leetcode.cn/problems/qIsx9U/) |  | `设计` `队列` `数组` `1+` | <font color=#15bd66>Esay</font> |
| 剑指 Offer II 042 | [最近请求次数](https://leetcode.cn/problems/H8086Q/) |  | `设计` `队列` `数据流` | <font color=#15bd66>Esay</font> |
| 剑指 Offer II 043 | [往完全二叉树添加节点](https://leetcode.cn/problems/NaqhDT/) |  | `树` `广度优先搜索` `设计` `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 048 | [序列化与反序列化二叉树](https://leetcode.cn/problems/h54YBf/) |  | `树` `深度优先搜索` `广度优先搜索` `3+` | <font color=#ff334b>Hard</font> |
| 剑指 Offer II 055 | [二叉搜索树迭代器](https://leetcode.cn/problems/kTOapQ/) |  | `栈` `树` `设计` `3+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 058 | [日程表](https://leetcode.cn/problems/fi9suh/) |  | `设计` `线段树` `二分查找` `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 059 | [数据流的第 K 大数值](https://leetcode.cn/problems/jBjn9C/) |  | `树` `设计` `二叉搜索树` `3+` | <font color=#15bd66>Esay</font> |
| 剑指 Offer II 062 | [实现前缀树](https://leetcode.cn/problems/QC3q1f/) |  | `设计` `字典树` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 064 | [神奇的字典](https://leetcode.cn/problems/US1pGT/) |  | `设计` `字典树` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 066 | [单词之和](https://leetcode.cn/problems/z1R5dt/) |  | `设计` `字典树` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 面试题 03.01 | [三合一](https://leetcode.cn/problems/three-in-one-lcci/) |  | `栈` `设计` `数组` | <font color=#15bd66>Esay</font> |
| 面试题 03.02 | [栈的最小值](https://leetcode.cn/problems/min-stack-lcci/) |  | `栈` `设计` | <font color=#15bd66>Esay</font> |
| 面试题 03.03 | [堆盘子](https://leetcode.cn/problems/stack-of-plates-lcci/) |  | `栈` `设计` `链表` | <font color=#ffb800>Medium</font> |
| 面试题 03.04 | [化栈为队](https://leetcode.cn/problems/implement-queue-using-stacks-lcci/) |  | `栈` `设计` `队列` | <font color=#15bd66>Esay</font> |
| 面试题 03.05 | [栈排序](https://leetcode.cn/problems/sort-of-stacks-lcci/) |  | `栈` `设计` `单调栈` | <font color=#ffb800>Medium</font> |
| 面试题 03.06 | [动物收容所](https://leetcode.cn/problems/animal-shelter-lcci/) |  | `设计` `队列` | <font color=#15bd66>Esay</font> |
| 面试题 10.10 | [数字流的秩](https://leetcode.cn/problems/rank-from-stream-lcci/) |  | `设计` `树状数组` `二分查找` `1+` | <font color=#ffb800>Medium</font> |
| 面试题 16.02 | [单词频率](https://leetcode.cn/problems/words-frequency-lcci/) |  | `设计` `字典树` `数组` `2+` | <font color=#ffb800>Medium</font> |
| 面试题 16.09 | [运算](https://leetcode.cn/problems/operations-lcci/) |  | `设计` `数学` | <font color=#ffb800>Medium</font> |
| 面试题 16.25 | [LRU 缓存](https://leetcode.cn/problems/lru-cache-lcci/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/i_16.25) | `设计` `哈希表` `链表` `1+` | <font color=#ffb800>Medium</font> |
| 面试题 17.20 | [连续中值](https://leetcode.cn/problems/continuous-median-lcci/) |  | `设计` `双指针` `数据流` `2+` | <font color=#ff334b>Hard</font> |