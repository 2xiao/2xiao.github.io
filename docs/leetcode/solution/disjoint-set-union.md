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
<span class="blue">并查集</span>
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
[`设计`](../solution/design.md)
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
| 0128 | [最长连续序列](https://leetcode.com/problems/longest-consecutive-sequence/) |  | `并查集` `数组` `哈希表` | <font color=#ffb800>Medium</font> |
| 0130 | [被围绕的区域](https://leetcode.com/problems/surrounded-regions/) |  | `深度优先搜索` `广度优先搜索` `并查集` `2+` | <font color=#ffb800>Medium</font> |
| 0200 | [岛屿数量](https://leetcode.com/problems/number-of-islands/) |  | `深度优先搜索` `广度优先搜索` `并查集` `2+` | <font color=#ffb800>Medium</font> |
| 0261 | [以图判树](https://leetcode.com/problems/graph-valid-tree/) |  | `深度优先搜索` `广度优先搜索` `并查集` `1+` | <font color=#ffb800>Medium</font> |
| 0305 | [岛屿数量 II](https://leetcode.com/problems/number-of-islands-ii/) |  | `并查集` `数组` | <font color=#ff334b>Hard</font> |
| 0323 | [无向图中连通分量的数目](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/) |  | `深度优先搜索` `广度优先搜索` `并查集` `1+` | <font color=#ffb800>Medium</font> |
| 0399 | [除法求值](https://leetcode.com/problems/evaluate-division/) |  | `深度优先搜索` `广度优先搜索` `并查集` `3+` | <font color=#ffb800>Medium</font> |
| 0547 | [省份数量](https://leetcode.com/problems/number-of-provinces/) |  | `深度优先搜索` `广度优先搜索` `并查集` `1+` | <font color=#ffb800>Medium</font> |
| 0684 | [冗余连接](https://leetcode.com/problems/redundant-connection/) |  | `深度优先搜索` `广度优先搜索` `并查集` `1+` | <font color=#ffb800>Medium</font> |
| 0685 | [冗余连接 II](https://leetcode.com/problems/redundant-connection-ii/) |  | `深度优先搜索` `广度优先搜索` `并查集` `1+` | <font color=#ff334b>Hard</font> |
| 0694 | [不同岛屿的数量](https://leetcode.com/problems/number-of-distinct-islands/) |  | `深度优先搜索` `广度优先搜索` `并查集` `2+` | <font color=#ffb800>Medium</font> |
| 0695 | [岛屿的最大面积](https://leetcode.com/problems/max-area-of-island/) |  | `深度优先搜索` `广度优先搜索` `并查集` `2+` | <font color=#ffb800>Medium</font> |
| 0711 | [不同岛屿的数量 II](https://leetcode.com/problems/number-of-distinct-islands-ii/) |  | `深度优先搜索` `广度优先搜索` `并查集` `2+` | <font color=#ff334b>Hard</font> |
| 0721 | [账户合并](https://leetcode.com/problems/accounts-merge/) |  | `深度优先搜索` `广度优先搜索` `并查集` `2+` | <font color=#ffb800>Medium</font> |
| 0737 | [句子相似性 II](https://leetcode.com/problems/sentence-similarity-ii/) |  | `深度优先搜索` `广度优先搜索` `并查集` `3+` | <font color=#ffb800>Medium</font> |
| 0765 | [情侣牵手](https://leetcode.com/problems/couples-holding-hands/) |  | `贪心` `深度优先搜索` `广度优先搜索` `2+` | <font color=#ff334b>Hard</font> |
| 0778 | [水位上升的泳池中游泳](https://leetcode.com/problems/swim-in-rising-water/) |  | `深度优先搜索` `广度优先搜索` `并查集` `4+` | <font color=#ff334b>Hard</font> |
| 0785 | [判断二分图](https://leetcode.com/problems/is-graph-bipartite/) |  | `深度优先搜索` `广度优先搜索` `并查集` `1+` | <font color=#ffb800>Medium</font> |
| 0803 | [打砖块](https://leetcode.com/problems/bricks-falling-when-hit/) |  | `并查集` `数组` `矩阵` | <font color=#ff334b>Hard</font> |
| 0827 | [最大人工岛](https://leetcode.com/problems/making-a-large-island/) |  | `深度优先搜索` `广度优先搜索` `并查集` `2+` | <font color=#ff334b>Hard</font> |
| 0839 | [相似字符串组](https://leetcode.com/problems/similar-string-groups/) |  | `深度优先搜索` `广度优先搜索` `并查集` `2+` | <font color=#ff334b>Hard</font> |
| 0886 | [可能的二分法](https://leetcode.com/problems/possible-bipartition/) |  | `深度优先搜索` `广度优先搜索` `并查集` `1+` | <font color=#ffb800>Medium</font> |
| 0924 | [尽量减少恶意软件的传播](https://leetcode.com/problems/minimize-malware-spread/) |  | `深度优先搜索` `广度优先搜索` `并查集` `2+` | <font color=#ff334b>Hard</font> |
| 0928 | [尽量减少恶意软件的传播 II](https://leetcode.com/problems/minimize-malware-spread-ii/) |  | `深度优先搜索` `广度优先搜索` `并查集` `2+` | <font color=#ff334b>Hard</font> |
| 0947 | [移除最多的同行或同列石头](https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/) |  | `深度优先搜索` `并查集` `图` | <font color=#ffb800>Medium</font> |
| 0952 | [按公因数计算最大组件大小](https://leetcode.com/problems/largest-component-size-by-common-factor/) |  | `并查集` `数组` `数学` `1+` | <font color=#ff334b>Hard</font> |
| 0959 | [由斜杠划分区域](https://leetcode.com/problems/regions-cut-by-slashes/) |  | `深度优先搜索` `广度优先搜索` `并查集` `1+` | <font color=#ffb800>Medium</font> |
| 0990 | [等式方程的可满足性](https://leetcode.com/problems/satisfiability-of-equality-equations/) |  | `并查集` `图` `数组` `1+` | <font color=#ffb800>Medium</font> |
| 1020 | [飞地的数量](https://leetcode.com/problems/number-of-enclaves/) |  | `深度优先搜索` `广度优先搜索` `并查集` `2+` | <font color=#ffb800>Medium</font> |
| 1061 | [按字典序排列最小的等效字符串](https://leetcode.com/problems/lexicographically-smallest-equivalent-string/) |  | `并查集` `字符串` | <font color=#ffb800>Medium</font> |
| 1101 | [彼此熟识的最早时间](https://leetcode.com/problems/the-earliest-moment-when-everyone-become-friends/) |  | `并查集` `数组` | <font color=#ffb800>Medium</font> |
| 1102 | [得分最高的路径](https://leetcode.com/problems/path-with-maximum-minimum-value/) |  | `深度优先搜索` `广度优先搜索` `并查集` `3+` | <font color=#ffb800>Medium</font> |
| 1135 | [最低成本联通所有城市](https://leetcode.com/problems/connecting-cities-with-minimum-cost/) |  | `并查集` `图` `最小生成树` `1+` | <font color=#ffb800>Medium</font> |
| 1168 | [水资源分配优化](https://leetcode.com/problems/optimize-water-distribution-in-a-village/) |  | `并查集` `图` `最小生成树` | <font color=#ff334b>Hard</font> |
| 1202 | [交换字符串中的元素](https://leetcode.com/problems/smallest-string-with-swaps/) |  | `深度优先搜索` `广度优先搜索` `并查集` `2+` | <font color=#ffb800>Medium</font> |
| 1254 | [统计封闭岛屿的数目](https://leetcode.com/problems/number-of-closed-islands/) |  | `深度优先搜索` `广度优先搜索` `并查集` `2+` | <font color=#ffb800>Medium</font> |
| 1258 | [近义词句子](https://leetcode.com/problems/synonymous-sentences/) |  | `并查集` `数组` `哈希表` `2+` | <font color=#ffb800>Medium</font> |
| 1267 | [统计参与通信的服务器](https://leetcode.com/problems/count-servers-that-communicate/) |  | `深度优先搜索` `广度优先搜索` `并查集` `3+` | <font color=#ffb800>Medium</font> |
| 1319 | [连通网络的操作次数](https://leetcode.com/problems/number-of-operations-to-make-network-connected/) |  | `深度优先搜索` `广度优先搜索` `并查集` `1+` | <font color=#ffb800>Medium</font> |
| 1361 | [验证二叉树](https://leetcode.com/problems/validate-binary-tree-nodes/) |  | `树` `深度优先搜索` `广度优先搜索` `3+` | <font color=#ffb800>Medium</font> |
| 1391 | [检查网格中是否存在有效路径](https://leetcode.com/problems/check-if-there-is-a-valid-path-in-a-grid/) |  | `深度优先搜索` `广度优先搜索` `并查集` `2+` | <font color=#ffb800>Medium</font> |
| 1489 | [找到最小生成树里的关键边和伪关键边](https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/) |  | `并查集` `图` `最小生成树` `2+` | <font color=#ff334b>Hard</font> |
| 1559 | [二维网格图中探测环](https://leetcode.com/problems/detect-cycles-in-2d-grid/) |  | `深度优先搜索` `广度优先搜索` `并查集` `2+` | <font color=#ffb800>Medium</font> |
| 1569 | [将子数组重新排序得到同一个二叉搜索树的方案数](https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/) |  | `树` `并查集` `二叉搜索树` `7+` | <font color=#ff334b>Hard</font> |
| 1579 | [保证图可完全遍历](https://leetcode.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/) |  | `并查集` `图` | <font color=#ff334b>Hard</font> |
| 1584 | [连接所有点的最小费用](https://leetcode.com/problems/min-cost-to-connect-all-points/) |  | `并查集` `图` `数组` `1+` | <font color=#ffb800>Medium</font> |
| 1627 | [带阈值的图连通性](https://leetcode.com/problems/graph-connectivity-with-threshold/) |  | `并查集` `数组` `数学` | <font color=#ff334b>Hard</font> |
| 1631 | [最小体力消耗路径](https://leetcode.com/problems/path-with-minimum-effort/) |  | `深度优先搜索` `广度优先搜索` `并查集` `4+` | <font color=#ffb800>Medium</font> |
| 1632 | [矩阵转换后的秩](https://leetcode.com/problems/rank-transform-of-a-matrix/) |  | `贪心` `并查集` `图` `3+` | <font color=#ff334b>Hard</font> |
| 1697 | [检查边长度限制的路径是否存在](https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths/) |  | `并查集` `图` `数组` `1+` | <font color=#ff334b>Hard</font> |
| 1722 | [执行交换操作后的最小汉明距离](https://leetcode.com/problems/minimize-hamming-distance-after-swap-operations/) |  | `深度优先搜索` `并查集` `数组` | <font color=#ffb800>Medium</font> |
| 1724 | [检查边长度限制的路径是否存在 II](https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths-ii/) |  | `并查集` `图` `最小生成树` | <font color=#ff334b>Hard</font> |
| 1905 | [统计子岛屿](https://leetcode.com/problems/count-sub-islands/) |  | `深度优先搜索` `广度优先搜索` `并查集` `2+` | <font color=#ffb800>Medium</font> |
| 1970 | [你能穿过矩阵的最后一天](https://leetcode.com/problems/last-day-where-you-can-still-cross/) |  | `深度优先搜索` `广度优先搜索` `并查集` `3+` | <font color=#ff334b>Hard</font> |
| 1971 | [寻找图中是否存在路径](https://leetcode.com/problems/find-if-path-exists-in-graph/) |  | `深度优先搜索` `广度优先搜索` `并查集` `1+` | <font color=#15bd66>Esay</font> |
| 1998 | [数组的最大公因数排序](https://leetcode.com/problems/gcd-sort-of-an-array/) |  | `并查集` `数组` `数学` `2+` | <font color=#ff334b>Hard</font> |
| 2003 | [每棵子树内缺失的最小基因值](https://leetcode.com/problems/smallest-missing-genetic-value-in-each-subtree/) |  | `树` `深度优先搜索` `并查集` `1+` | <font color=#ff334b>Hard</font> |
| 2076 | [处理含限制条件的好友请求](https://leetcode.com/problems/process-restricted-friend-requests/) |  | `并查集` `图` | <font color=#ff334b>Hard</font> |
| 2092 | [找出知晓秘密的所有专家](https://leetcode.com/problems/find-all-people-with-secret/) |  | `深度优先搜索` `广度优先搜索` `并查集` `2+` | <font color=#ff334b>Hard</font> |
| 2157 | [字符串分组](https://leetcode.com/problems/groups-of-strings/) |  | `位运算` `并查集` `字符串` | <font color=#ff334b>Hard</font> |
| 2204 | [无向图中到环的距离](https://leetcode.com/problems/distance-to-a-cycle-in-undirected-graph/) |  | `深度优先搜索` `广度优先搜索` `并查集` `1+` | <font color=#ff334b>Hard</font> |
| 2307 | [检查方程中的矛盾之处](https://leetcode.com/problems/check-for-contradictions-in-equations/) |  | `深度优先搜索` `并查集` `图` `1+` | <font color=#ff334b>Hard</font> |
| 2316 | [统计无向图中无法互相到达点对数](https://leetcode.com/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph/) |  | `深度优先搜索` `广度优先搜索` `并查集` `1+` | <font color=#ffb800>Medium</font> |
| 2334 | [元素值大于变化阈值的子数组](https://leetcode.com/problems/subarray-with-elements-greater-than-varying-threshold/) |  | `栈` `并查集` `数组` `1+` | <font color=#ff334b>Hard</font> |
| 2371 | [最小化网格中的最大值](https://leetcode.com/problems/minimize-maximum-value-in-a-grid/) |  | `贪心` `并查集` `图` `4+` | <font color=#ff334b>Hard</font> |
| 2382 | [删除操作后的最大子段和](https://leetcode.com/problems/maximum-segment-sum-after-removals/) |  | `并查集` `数组` `有序集合` `1+` | <font color=#ff334b>Hard</font> |
| 2421 | [好路径的数目](https://leetcode.com/problems/number-of-good-paths/) |  | `树` `并查集` `图` `1+` | <font color=#ff334b>Hard</font> |
| 2424 | [最长上传前缀](https://leetcode.com/problems/longest-uploaded-prefix/) |  | `并查集` `设计` `树状数组` `4+` | <font color=#ffb800>Medium</font> |
| 2492 | [两个城市间路径的最小分数](https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities/) |  | `深度优先搜索` `广度优先搜索` `并查集` `1+` | <font color=#ffb800>Medium</font> |
| 2493 | [将节点分成尽可能多的组](https://leetcode.com/problems/divide-nodes-into-the-maximum-number-of-groups/) |  | `广度优先搜索` `并查集` `图` | <font color=#ff334b>Hard</font> |
| 2503 | [矩阵查询可获得的最大分数](https://leetcode.com/problems/maximum-number-of-points-from-grid-queries/) |  | `广度优先搜索` `并查集` `数组` `2+` | <font color=#ff334b>Hard</font> |
| 2573 | [找出对应 LCP 矩阵的字符串](https://leetcode.com/problems/find-the-string-with-lcp/) |  | `贪心` `并查集` `字符串` `1+` | <font color=#ff334b>Hard</font> |
| 2617 | [网格图中最少访问的格子数](https://leetcode.com/problems/minimum-number-of-visited-cells-in-a-grid/) |  | `栈` `并查集` `树状数组` `4+` | <font color=#ff334b>Hard</font> |
| 2658 | [网格图中鱼的最大数目](https://leetcode.com/problems/maximum-number-of-fish-in-a-grid/) |  | `深度优先搜索` `广度优先搜索` `并查集` `2+` | <font color=#ffb800>Medium</font> |
| 2709 | [最大公约数遍历](https://leetcode.com/problems/greatest-common-divisor-traversal/) |  | `并查集` `数组` `数学` `1+` | <font color=#ff334b>Hard</font> |
| LCP 49 | [环形闯关游戏](https://leetcode.cn/problems/K8GULz/) |  | `位运算` `并查集` `数组` `1+` | <font color=#ff334b>Hard</font> |
| LCP 71 | [集水器](https://leetcode.cn/problems/kskhHQ/) |  | `并查集` `数组` `矩阵` | <font color=#ff334b>Hard</font> |
| LCS 03 | [主题空间](https://leetcode.cn/problems/YesdPw/) |  | `深度优先搜索` `广度优先搜索` `并查集` `2+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 105 | [岛屿的最大面积](https://leetcode.cn/problems/ZL6zAn/) |  | `深度优先搜索` `广度优先搜索` `并查集` `2+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 106 | [二分图](https://leetcode.cn/problems/vEAB3K/) |  | `深度优先搜索` `广度优先搜索` `并查集` `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 111 | [计算除法](https://leetcode.cn/problems/vlzXQL/) |  | `深度优先搜索` `广度优先搜索` `并查集` `3+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 116 | [省份数量](https://leetcode.cn/problems/bLyHh0/) |  | `深度优先搜索` `广度优先搜索` `并查集` `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 117 | [相似的字符串](https://leetcode.cn/problems/H6lPxb/) |  | `深度优先搜索` `广度优先搜索` `并查集` `2+` | <font color=#ff334b>Hard</font> |
| 剑指 Offer II 118 | [多余的边](https://leetcode.cn/problems/7LpjUW/) |  | `深度优先搜索` `广度优先搜索` `并查集` `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 119 | [最长连续序列](https://leetcode.cn/problems/WhsWhI/) |  | `并查集` `数组` `哈希表` | <font color=#ffb800>Medium</font> |
| 面试题 16.19 | [水域大小](https://leetcode.cn/problems/pond-sizes-lcci/) |  | `深度优先搜索` `广度优先搜索` `并查集` `2+` | <font color=#ffb800>Medium</font> |
| 面试题 17.07 | [婴儿名字](https://leetcode.cn/problems/baby-names-lcci/) |  | `深度优先搜索` `广度优先搜索` `并查集` `4+` | <font color=#ffb800>Medium</font> |