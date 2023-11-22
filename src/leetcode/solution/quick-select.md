# 1.5 题解标签

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
<span class="blue">快速选择</span>
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
| 0215 | [数组中的第K个最大元素](https://leetcode.com/problems/kth-largest-element-in-an-array/) |  |  [`数组`](../solution/array.md) [`分治`](../solution/divide-and-conquer.md) [`快速选择`](../solution/quick-select.md) `2+` | <font color=#ffb800>Medium</font> |
| 0324 | [摆动排序 II](https://leetcode.com/problems/wiggle-sort-ii/) |  |  [`数组`](../solution/array.md) [`分治`](../solution/divide-and-conquer.md) [`快速选择`](../solution/quick-select.md) `1+` | <font color=#ffb800>Medium</font> |
| 0347 | [前 K 个高频元素](https://leetcode.com/problems/top-k-frequent-elements/) |  |  [`数组`](../solution/array.md) [`哈希表`](../solution/hash-table.md) [`分治`](../solution/divide-and-conquer.md) `5+` | <font color=#ffb800>Medium</font> |
| 0973 | [最接近原点的 K 个点](https://leetcode.com/problems/k-closest-points-to-origin/) |  |  [`几何`](../solution/geometry.md) [`数组`](../solution/array.md) [`数学`](../solution/mathematics.md) `4+` | <font color=#ffb800>Medium</font> |
| 1738 | [找出第 K 大的异或坐标值](https://leetcode.com/problems/find-kth-largest-xor-coordinate-value/) |  |  [`位运算`](../solution/bit-manipulation.md) [`数组`](../solution/array.md) [`分治`](../solution/divide-and-conquer.md) `4+` | <font color=#ffb800>Medium</font> |
| 1985 | [找出数组中的第 K 大整数](https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array/) |  |  [`数组`](../solution/array.md) [`字符串`](../solution/string.md) [`分治`](../solution/divide-and-conquer.md) `3+` | <font color=#ffb800>Medium</font> |
| 2343 | [裁剪数字后查询第 K 小的数字](https://leetcode.com/problems/query-kth-smallest-trimmed-number/) |  |  [`数组`](../solution/array.md) [`字符串`](../solution/string.md) [`分治`](../solution/divide-and-conquer.md) `4+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer 40 | [最小的k个数](https://leetcode.cn/problems/zui-xiao-de-kge-shu-lcof/) |  |  [`数组`](../solution/array.md) [`分治`](../solution/divide-and-conquer.md) [`快速选择`](../solution/quick-select.md) `2+` | <font color=#15bd66>Esay</font> |
| 剑指 Offer II 060 | [出现频率最高的 k 个数字](https://leetcode.cn/problems/g5c51o/) |  |  [`数组`](../solution/array.md) [`哈希表`](../solution/hash-table.md) [`分治`](../solution/divide-and-conquer.md) `5+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 076 | [数组中的第 k 大的数字](https://leetcode.cn/problems/xx4gT2/) |  |  [`数组`](../solution/array.md) [`分治`](../solution/divide-and-conquer.md) [`快速选择`](../solution/quick-select.md) `2+` | <font color=#ffb800>Medium</font> |
| 面试题 17.14 | [最小K个数](https://leetcode.cn/problems/smallest-k-lcci/) |  |  [`数组`](../solution/array.md) [`分治`](../solution/divide-and-conquer.md) [`快速选择`](../solution/quick-select.md) `2+` | <font color=#ffb800>Medium</font> |