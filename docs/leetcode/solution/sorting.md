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
<span class="blue">排序</span>
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
| 0015 | [三数之和](https://leetcode.com/problems/3sum/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0015) | `数组` `双指针` `排序` | <font color=#ffb800>Medium</font> |
| 0016 | [最接近的三数之和](https://leetcode.com/problems/3sum-closest/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0016) | `数组` `双指针` `排序` | <font color=#ffb800>Medium</font> |
| 0018 | [四数之和](https://leetcode.com/problems/4sum/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0018) | `数组` `双指针` `排序` | <font color=#ffb800>Medium</font> |
| 0049 | [字母异位词分组](https://leetcode.com/problems/group-anagrams/) |  | `数组` `哈希表` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 0056 | [合并区间](https://leetcode.com/problems/merge-intervals/) |  | `数组` `排序` | <font color=#ffb800>Medium</font> |
| 0075 | [颜色分类](https://leetcode.com/problems/sort-colors/) |  | `数组` `双指针` `排序` | <font color=#ffb800>Medium</font> |
| 0088 | [合并两个有序数组](https://leetcode.com/problems/merge-sorted-array/) |  | `数组` `双指针` `排序` | <font color=#15bd66>Esay</font> |
| 0147 | [对链表进行插入排序](https://leetcode.com/problems/insertion-sort-list/) |  | `链表` `排序` | <font color=#ffb800>Medium</font> |
| 0148 | [排序链表](https://leetcode.com/problems/sort-list/) |  | `链表` `双指针` `分治` `2+` | <font color=#ffb800>Medium</font> |
| 0164 | [最大间距](https://leetcode.com/problems/maximum-gap/) |  | `数组` `桶排序` `基数排序` `1+` | <font color=#ff334b>Hard</font> |
| 0169 | [多数元素](https://leetcode.com/problems/majority-element/) |  | `数组` `哈希表` `分治` `2+` | <font color=#15bd66>Esay</font> |
| 0179 | [最大数](https://leetcode.com/problems/largest-number/) |  | `贪心` `数组` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 0215 | [数组中的第K个最大元素](https://leetcode.com/problems/kth-largest-element-in-an-array/) |  | `数组` `分治` `快速选择` `2+` | <font color=#ffb800>Medium</font> |
| 0217 | [存在重复元素](https://leetcode.com/problems/contains-duplicate/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0217) | `数组` `哈希表` `排序` | <font color=#15bd66>Esay</font> |
| 0220 | [存在重复元素 III](https://leetcode.com/problems/contains-duplicate-iii/) |  | `数组` `桶排序` `有序集合` `2+` | <font color=#ff334b>Hard</font> |
| 0229 | [多数元素 II](https://leetcode.com/problems/majority-element-ii/) |  | `数组` `哈希表` `计数` `1+` | <font color=#ffb800>Medium</font> |
| 0242 | [有效的字母异位词](https://leetcode.com/problems/valid-anagram/) |  | `哈希表` `字符串` `排序` | <font color=#15bd66>Esay</font> |
| 0252 | [会议室](https://leetcode.com/problems/meeting-rooms/) |  | `数组` `排序` | <font color=#15bd66>Esay</font> |
| 0253 | [会议室 II](https://leetcode.com/problems/meeting-rooms-ii/) |  | `贪心` `数组` `双指针` `3+` | <font color=#ffb800>Medium</font> |
| 0259 | [较小的三数之和](https://leetcode.com/problems/3sum-smaller/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0259) | `数组` `双指针` `二分查找` `1+` | <font color=#ffb800>Medium</font> |
| 0268 | [丢失的数字](https://leetcode.com/problems/missing-number/) |  | `位运算` `数组` `哈希表` `3+` | <font color=#15bd66>Esay</font> |
| 0274 | [H 指数](https://leetcode.com/problems/h-index/) |  | `数组` `计数排序` `排序` | <font color=#ffb800>Medium</font> |
| 0280 | [摆动排序](https://leetcode.com/problems/wiggle-sort/) |  | `贪心` `数组` `排序` | <font color=#ffb800>Medium</font> |
| 0295 | [数据流的中位数](https://leetcode.com/problems/find-median-from-data-stream/) |  | `设计` `双指针` `数据流` `2+` | <font color=#ff334b>Hard</font> |
| 0296 | [最佳的碰头地点](https://leetcode.com/problems/best-meeting-point/) |  | `数组` `数学` `矩阵` `1+` | <font color=#ff334b>Hard</font> |
| 0324 | [摆动排序 II](https://leetcode.com/problems/wiggle-sort-ii/) |  | `数组` `分治` `快速选择` `1+` | <font color=#ffb800>Medium</font> |
| 0347 | [前 K 个高频元素](https://leetcode.com/problems/top-k-frequent-elements/) |  | `数组` `哈希表` `分治` `5+` | <font color=#ffb800>Medium</font> |
| 0349 | [两个数组的交集](https://leetcode.com/problems/intersection-of-two-arrays/) |  | `数组` `哈希表` `双指针` `2+` | <font color=#15bd66>Esay</font> |
| 0350 | [两个数组的交集 II](https://leetcode.com/problems/intersection-of-two-arrays-ii/) |  | `数组` `哈希表` `双指针` `2+` | <font color=#15bd66>Esay</font> |
| 0354 | [俄罗斯套娃信封问题](https://leetcode.com/problems/russian-doll-envelopes/) |  | `数组` `二分查找` `动态规划` `1+` | <font color=#ff334b>Hard</font> |
| 0358 | [K 距离间隔重排字符串](https://leetcode.com/problems/rearrange-string-k-distance-apart/) |  | `贪心` `哈希表` `字符串` `3+` | <font color=#ff334b>Hard</font> |
| 0360 | [有序转化数组](https://leetcode.com/problems/sort-transformed-array/) |  | `数组` `数学` `双指针` `1+` | <font color=#ffb800>Medium</font> |
| 0368 | [最大整除子集](https://leetcode.com/problems/largest-divisible-subset/) |  | `数组` `数学` `动态规划` `1+` | <font color=#ffb800>Medium</font> |
| 0378 | [有序矩阵中第 K 小的元素](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/) |  | `数组` `二分查找` `矩阵` `2+` | <font color=#ffb800>Medium</font> |
| 0389 | [找不同](https://leetcode.com/problems/find-the-difference/) |  | `位运算` `哈希表` `字符串` `1+` | <font color=#15bd66>Esay</font> |
| 0406 | [根据身高重建队列](https://leetcode.com/problems/queue-reconstruction-by-height/) |  | `贪心` `树状数组` `线段树` `2+` | <font color=#ffb800>Medium</font> |
| 0414 | [第三大的数](https://leetcode.com/problems/third-maximum-number/) |  | `数组` `排序` | <font color=#15bd66>Esay</font> |
| 0435 | [无重叠区间](https://leetcode.com/problems/non-overlapping-intervals/) |  | `贪心` `数组` `动态规划` `1+` | <font color=#ffb800>Medium</font> |
| 0436 | [寻找右区间](https://leetcode.com/problems/find-right-interval/) |  | `数组` `二分查找` `排序` | <font color=#ffb800>Medium</font> |
| 0451 | [根据字符出现频率排序](https://leetcode.com/problems/sort-characters-by-frequency/) |  | `哈希表` `字符串` `桶排序` `3+` | <font color=#ffb800>Medium</font> |
| 0452 | [用最少数量的箭引爆气球](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/) |  | `贪心` `数组` `排序` | <font color=#ffb800>Medium</font> |
| 0455 | [分发饼干](https://leetcode.com/problems/assign-cookies/) |  | `贪心` `数组` `双指针` `1+` | <font color=#15bd66>Esay</font> |
| 0462 | [最小操作次数使数组元素相等 II](https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/) |  | `数组` `数学` `排序` | <font color=#ffb800>Medium</font> |
| 0475 | [供暖器](https://leetcode.com/problems/heaters/) |  | `数组` `双指针` `二分查找` `1+` | <font color=#ffb800>Medium</font> |
| 0502 | [IPO](https://leetcode.com/problems/ipo/) |  | `贪心` `数组` `排序` `1+` | <font color=#ff334b>Hard</font> |
| 0506 | [相对名次](https://leetcode.com/problems/relative-ranks/) |  | `数组` `排序` `堆（优先队列）` | <font color=#15bd66>Esay</font> |
| 0522 | [最长特殊序列 II](https://leetcode.com/problems/longest-uncommon-subsequence-ii/) |  | `数组` `哈希表` `双指针` `2+` | <font color=#ffb800>Medium</font> |
| 0524 | [通过删除字母匹配到字典里最长单词](https://leetcode.com/problems/longest-word-in-dictionary-through-deleting/) |  | `数组` `双指针` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 0527 | [单词缩写](https://leetcode.com/problems/word-abbreviation/) |  | `贪心` `字典树` `数组` `2+` | <font color=#ff334b>Hard</font> |
| 0532 | [数组中的 k-diff 数对](https://leetcode.com/problems/k-diff-pairs-in-an-array/) |  | `数组` `哈希表` `双指针` `2+` | <font color=#ffb800>Medium</font> |
| 0539 | [最小时间差](https://leetcode.com/problems/minimum-time-difference/) |  | `数组` `数学` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 0561 | [数组拆分](https://leetcode.com/problems/array-partition/) |  | `贪心` `数组` `计数排序` `1+` | <font color=#15bd66>Esay</font> |
| 0581 | [最短无序连续子数组](https://leetcode.com/problems/shortest-unsorted-continuous-subarray/) |  | `栈` `贪心` `数组` `3+` | <font color=#ffb800>Medium</font> |
| 0594 | [最长和谐子序列](https://leetcode.com/problems/longest-harmonious-subsequence/) |  | `数组` `哈希表` `排序` | <font color=#15bd66>Esay</font> |
| 0611 | [有效三角形的个数](https://leetcode.com/problems/valid-triangle-number/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0611) | `贪心` `数组` `双指针` `2+` | <font color=#ffb800>Medium</font> |
| 0621 | [任务调度器](https://leetcode.com/problems/task-scheduler/) |  | `贪心` `数组` `哈希表` `3+` | <font color=#ffb800>Medium</font> |
| 0628 | [三个数的最大乘积](https://leetcode.com/problems/maximum-product-of-three-numbers/) |  | `数组` `数学` `排序` | <font color=#15bd66>Esay</font> |
| 0632 | [最小区间](https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/) |  | `贪心` `数组` `哈希表` `3+` | <font color=#ff334b>Hard</font> |
| 0645 | [错误的集合](https://leetcode.com/problems/set-mismatch/) |  | `位运算` `数组` `哈希表` `1+` | <font color=#15bd66>Esay</font> |
| 0646 | [最长数对链](https://leetcode.com/problems/maximum-length-of-pair-chain/) |  | `贪心` `数组` `动态规划` `1+` | <font color=#ffb800>Medium</font> |
| 0658 | [找到 K 个最接近的元素](https://leetcode.com/problems/find-k-closest-elements/) |  | `数组` `双指针` `二分查找` `3+` | <font color=#ffb800>Medium</font> |
| 0692 | [前K个高频单词](https://leetcode.com/problems/top-k-frequent-words/) |  | `字典树` `哈希表` `字符串` `4+` | <font color=#ffb800>Medium</font> |
| 0710 | [黑名单中的随机数](https://leetcode.com/problems/random-pick-with-blacklist/) |  | `数组` `哈希表` `数学` `3+` | <font color=#ff334b>Hard</font> |
| 0719 | [找出第 K 小的数对距离](https://leetcode.com/problems/find-k-th-smallest-pair-distance/) |  | `数组` `双指针` `二分查找` `1+` | <font color=#ff334b>Hard</font> |
| 0720 | [词典中最长的单词](https://leetcode.com/problems/longest-word-in-dictionary/) |  | `字典树` `数组` `哈希表` `2+` | <font color=#ffb800>Medium</font> |
| 0726 | [原子的数量](https://leetcode.com/problems/number-of-atoms/) |  | `栈` `哈希表` `字符串` `1+` | <font color=#ff334b>Hard</font> |
| 0747 | [至少是其他数字两倍的最大数](https://leetcode.com/problems/largest-number-at-least-twice-of-others/) |  | `数组` `排序` | <font color=#15bd66>Esay</font> |
| 0757 | [设置交集大小至少为2](https://leetcode.com/problems/set-intersection-size-at-least-two/) |  | `贪心` `数组` `排序` | <font color=#ff334b>Hard</font> |
| 0759 | [员工空闲时间](https://leetcode.com/problems/employee-free-time/) |  | `数组` `排序` `堆（优先队列）` | <font color=#ff334b>Hard</font> |
| 0767 | [重构字符串](https://leetcode.com/problems/reorganize-string/) |  | `贪心` `哈希表` `字符串` `3+` | <font color=#ffb800>Medium</font> |
| 0768 | [最多能完成排序的块 II](https://leetcode.com/problems/max-chunks-to-make-sorted-ii/) |  | `栈` `贪心` `数组` `2+` | <font color=#ff334b>Hard</font> |
| 0769 | [最多能完成排序的块](https://leetcode.com/problems/max-chunks-to-make-sorted/) |  | `栈` `贪心` `数组` `2+` | <font color=#ffb800>Medium</font> |
| 0786 | [第 K 个最小的素数分数](https://leetcode.com/problems/k-th-smallest-prime-fraction/) |  | `数组` `二分查找` `排序` `1+` | <font color=#ffb800>Medium</font> |
| 0791 | [自定义字符串排序](https://leetcode.com/problems/custom-sort-string/) |  | `哈希表` `字符串` `排序` | <font color=#ffb800>Medium</font> |
| 0792 | [匹配子序列的单词数](https://leetcode.com/problems/number-of-matching-subsequences/) |  | `字典树` `哈希表` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 0825 | [适龄的朋友](https://leetcode.com/problems/friends-of-appropriate-ages/) |  | `数组` `双指针` `二分查找` `1+` | <font color=#ffb800>Medium</font> |
| 0826 | [安排工作以达到最大收益](https://leetcode.com/problems/most-profit-assigning-work/) |  | `贪心` `数组` `双指针` `2+` | <font color=#ffb800>Medium</font> |
| 0833 | [字符串中的查找与替换](https://leetcode.com/problems/find-and-replace-in-string/) |  | `数组` `字符串` `排序` | <font color=#ffb800>Medium</font> |
| 0846 | [一手顺子](https://leetcode.com/problems/hand-of-straights/) |  | `贪心` `数组` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 0853 | [车队](https://leetcode.com/problems/car-fleet/) |  | `栈` `数组` `排序` `1+` | <font color=#ffb800>Medium</font> |
| 0857 | [雇佣 K 名工人的最低成本](https://leetcode.com/problems/minimum-cost-to-hire-k-workers/) |  | `贪心` `数组` `排序` `1+` | <font color=#ff334b>Hard</font> |
| 0869 | [重新排序得到 2 的幂](https://leetcode.com/problems/reordered-power-of-2/) |  | `数学` `计数` `枚举` `1+` | <font color=#ffb800>Medium</font> |
| 0870 | [优势洗牌](https://leetcode.com/problems/advantage-shuffle/) |  | `贪心` `数组` `双指针` `1+` | <font color=#ffb800>Medium</font> |
| 0881 | [救生艇](https://leetcode.com/problems/boats-to-save-people/) |  | `贪心` `数组` `双指针` `1+` | <font color=#ffb800>Medium</font> |
| 0888 | [公平的糖果交换](https://leetcode.com/problems/fair-candy-swap/) |  | `数组` `哈希表` `二分查找` `1+` | <font color=#15bd66>Esay</font> |
| 0891 | [子序列宽度之和](https://leetcode.com/problems/sum-of-subsequence-widths/) |  | `数组` `数学` `排序` | <font color=#ff334b>Hard</font> |
| 0899 | [有序队列](https://leetcode.com/problems/orderly-queue/) |  | `数学` `字符串` `排序` | <font color=#ff334b>Hard</font> |
| 0905 | [按奇偶排序数组](https://leetcode.com/problems/sort-array-by-parity/) |  | `数组` `双指针` `排序` | <font color=#15bd66>Esay</font> |
| 0910 | [最小差值 II](https://leetcode.com/problems/smallest-range-ii/) |  | `贪心` `数组` `数学` `1+` | <font color=#ffb800>Medium</font> |
| 0912 | [排序数组](https://leetcode.com/problems/sort-an-array/) |  | `数组` `分治` `桶排序` `5+` | <font color=#ffb800>Medium</font> |
| 0922 | [按奇偶排序数组 II](https://leetcode.com/problems/sort-array-by-parity-ii/) |  | `数组` `双指针` `排序` | <font color=#15bd66>Esay</font> |
| 0923 | [三数之和的多种可能](https://leetcode.com/problems/3sum-with-multiplicity/) |  | `数组` `哈希表` `双指针` `2+` | <font color=#ffb800>Medium</font> |
| 0937 | [重新排列日志文件](https://leetcode.com/problems/reorder-data-in-log-files/) |  | `数组` `字符串` `排序` | <font color=#ffb800>Medium</font> |
| 0939 | [最小面积矩形](https://leetcode.com/problems/minimum-area-rectangle/) |  | `几何` `数组` `哈希表` `2+` | <font color=#ffb800>Medium</font> |
| 0945 | [使数组唯一的最小增量](https://leetcode.com/problems/minimum-increment-to-make-array-unique/) |  | `贪心` `数组` `计数` `1+` | <font color=#ffb800>Medium</font> |
| 0948 | [令牌放置](https://leetcode.com/problems/bag-of-tokens/) |  | `贪心` `数组` `双指针` `1+` | <font color=#ffb800>Medium</font> |
| 0950 | [按递增顺序显示卡牌](https://leetcode.com/problems/reveal-cards-in-increasing-order/) |  | `队列` `数组` `排序` `1+` | <font color=#ffb800>Medium</font> |
| 0954 | [二倍数对数组](https://leetcode.com/problems/array-of-doubled-pairs/) |  | `贪心` `数组` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 0969 | [煎饼排序](https://leetcode.com/problems/pancake-sorting/) |  | `贪心` `数组` `双指针` `1+` | <font color=#ffb800>Medium</font> |
| 0973 | [最接近原点的 K 个点](https://leetcode.com/problems/k-closest-points-to-origin/) |  | `几何` `数组` `数学` `4+` | <font color=#ffb800>Medium</font> |
| 0976 | [三角形的最大周长](https://leetcode.com/problems/largest-perimeter-triangle/) |  | `贪心` `数组` `数学` `1+` | <font color=#15bd66>Esay</font> |
| 0977 | [有序数组的平方](https://leetcode.com/problems/squares-of-a-sorted-array/) |  | `数组` `双指针` `排序` | <font color=#15bd66>Esay</font> |
| 1005 | [K 次取反后最大化的数组和](https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/) |  | `贪心` `数组` `排序` | <font color=#15bd66>Esay</font> |
| 1029 | [两地调度](https://leetcode.com/problems/two-city-scheduling/) |  | `贪心` `数组` `排序` | <font color=#ffb800>Medium</font> |
| 1030 | [距离顺序排列矩阵单元格](https://leetcode.com/problems/matrix-cells-in-distance-order/) |  | `几何` `数组` `数学` `2+` | <font color=#15bd66>Esay</font> |
| 1040 | [移动石子直到连续 II](https://leetcode.com/problems/moving-stones-until-consecutive-ii/) |  | `数组` `数学` `双指针` `1+` | <font color=#ffb800>Medium</font> |
| 1051 | [高度检查器](https://leetcode.com/problems/height-checker/) |  | `数组` `计数排序` `排序` | <font color=#15bd66>Esay</font> |
| 1054 | [距离相等的条形码](https://leetcode.com/problems/distant-barcodes/) |  | `贪心` `数组` `哈希表` `3+` | <font color=#ffb800>Medium</font> |
| 1057 | [校园自行车分配](https://leetcode.com/problems/campus-bikes/) |  | `贪心` `数组` `排序` | <font color=#ffb800>Medium</font> |
| 1065 | [字符串的索引对](https://leetcode.com/problems/index-pairs-of-a-string/) |  | `字典树` `数组` `字符串` `1+` | <font color=#15bd66>Esay</font> |
| 1086 | [前五科的均分](https://leetcode.com/problems/high-five/) |  | `数组` `哈希表` `排序` | <font color=#15bd66>Esay</font> |
| 1090 | [受标签影响的最大值](https://leetcode.com/problems/largest-values-from-labels/) |  | `贪心` `数组` `哈希表` `2+` | <font color=#ffb800>Medium</font> |
| 1094 | [拼车](https://leetcode.com/problems/car-pooling/) |  | `数组` `前缀和` `排序` `2+` | <font color=#ffb800>Medium</font> |
| 1099 | [小于 K 的两数之和](https://leetcode.com/problems/two-sum-less-than-k/) |  | `数组` `双指针` `二分查找` `1+` | <font color=#15bd66>Esay</font> |
| 1122 | [数组的相对排序](https://leetcode.com/problems/relative-sort-array/) |  | `数组` `哈希表` `计数排序` `1+` | <font color=#15bd66>Esay</font> |
| 1133 | [最大唯一数](https://leetcode.com/problems/largest-unique-number/) |  | `数组` `哈希表` `排序` | <font color=#15bd66>Esay</font> |
| 1152 | [用户网站访问行为分析](https://leetcode.com/problems/analyze-user-website-visit-pattern/) |  | `数组` `哈希表` `排序` | <font color=#ffb800>Medium</font> |
| 1169 | [查询无效交易](https://leetcode.com/problems/invalid-transactions/) |  | `数组` `哈希表` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 1170 | [比较字符串最小字母出现频次](https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character/) |  | `数组` `哈希表` `字符串` `2+` | <font color=#ffb800>Medium</font> |
| 1181 | [前后拼接](https://leetcode.com/problems/before-and-after-puzzle/) |  | `数组` `哈希表` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 1187 | [使数组严格递增](https://leetcode.com/problems/make-array-strictly-increasing/) |  | `数组` `二分查找` `动态规划` `1+` | <font color=#ff334b>Hard</font> |
| 1196 | [最多可以买到的苹果数量](https://leetcode.com/problems/how-many-apples-can-you-put-into-the-basket/) |  | `贪心` `数组` `排序` | <font color=#15bd66>Esay</font> |
| 1200 | [最小绝对差](https://leetcode.com/problems/minimum-absolute-difference/) |  | `数组` `排序` | <font color=#15bd66>Esay</font> |
| 1229 | [安排会议日程](https://leetcode.com/problems/meeting-scheduler/) |  | `数组` `双指针` `排序` | <font color=#ffb800>Medium</font> |
| 1235 | [规划兼职工作](https://leetcode.com/problems/maximum-profit-in-job-scheduling/) |  | `数组` `二分查找` `动态规划` `1+` | <font color=#ff334b>Hard</font> |
| 1244 | [力扣排行榜](https://leetcode.com/problems/design-a-leaderboard/) |  | `设计` `哈希表` `排序` | <font color=#ffb800>Medium</font> |
| 1262 | [可被三整除的最大和](https://leetcode.com/problems/greatest-sum-divisible-by-three/) |  | `贪心` `数组` `动态规划` `1+` | <font color=#ffb800>Medium</font> |
| 1288 | [删除被覆盖区间](https://leetcode.com/problems/remove-covered-intervals/) |  | `数组` `排序` | <font color=#ffb800>Medium</font> |
| 1296 | [划分数组为连续数字的集合](https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/) |  | `贪心` `数组` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 1300 | [转变数组后最接近目标值的数组和](https://leetcode.com/problems/sum-of-mutated-array-closest-to-target/) |  | `数组` `二分查找` `排序` | <font color=#ffb800>Medium</font> |
| 1305 | [两棵二叉搜索树中的所有元素](https://leetcode.com/problems/all-elements-in-two-binary-search-trees/) |  | `树` `深度优先搜索` `二叉搜索树` `2+` | <font color=#ffb800>Medium</font> |
| 1311 | [获取你好友已观看的视频](https://leetcode.com/problems/get-watched-videos-by-your-friends/) |  | `广度优先搜索` `图` `数组` `2+` | <font color=#ffb800>Medium</font> |
| 1329 | [将矩阵按对角线排序](https://leetcode.com/problems/sort-the-matrix-diagonally/) |  | `数组` `矩阵` `排序` | <font color=#ffb800>Medium</font> |
| 1331 | [数组序号转换](https://leetcode.com/problems/rank-transform-of-an-array/) |  | `数组` `哈希表` `排序` | <font color=#15bd66>Esay</font> |
| 1333 | [餐厅过滤器](https://leetcode.com/problems/filter-restaurants-by-vegan-friendly-price-and-distance/) |  | `数组` `排序` | <font color=#ffb800>Medium</font> |
| 1337 | [矩阵中战斗力最弱的 K 行](https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/) |  | `数组` `二分查找` `矩阵` `2+` | <font color=#15bd66>Esay</font> |
| 1338 | [数组大小减半](https://leetcode.com/problems/reduce-array-size-to-the-half/) |  | `贪心` `数组` `哈希表` `2+` | <font color=#ffb800>Medium</font> |
| 1340 | [跳跃游戏 V](https://leetcode.com/problems/jump-game-v/) |  | `数组` `动态规划` `排序` | <font color=#ff334b>Hard</font> |
| 1346 | [检查整数及其两倍数是否存在](https://leetcode.com/problems/check-if-n-and-its-double-exist/) |  | `数组` `哈希表` `双指针` `2+` | <font color=#15bd66>Esay</font> |
| 1348 | [推文计数](https://leetcode.com/problems/tweet-counts-per-frequency/) |  | `设计` `哈希表` `二分查找` `2+` | <font color=#ffb800>Medium</font> |
| 1353 | [最多可以参加的会议数目](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/) |  | `贪心` `数组` `排序` `1+` | <font color=#ffb800>Medium</font> |
| 1356 | [根据数字二进制下 1 的数目排序](https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/) |  | `位运算` `数组` `计数` `1+` | <font color=#15bd66>Esay</font> |
| 1365 | [有多少小于当前数字的数字](https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/) |  | `数组` `哈希表` `计数` `1+` | <font color=#15bd66>Esay</font> |
| 1366 | [通过投票对团队排名](https://leetcode.com/problems/rank-teams-by-votes/) |  | `数组` `哈希表` `字符串` `2+` | <font color=#ffb800>Medium</font> |
| 1383 | [最大的团队表现值](https://leetcode.com/problems/maximum-performance-of-a-team/) |  | `贪心` `数组` `排序` `1+` | <font color=#ff334b>Hard</font> |
| 1385 | [两个数组间的距离值](https://leetcode.com/problems/find-the-distance-value-between-two-arrays/) |  | `数组` `双指针` `二分查找` `1+` | <font color=#15bd66>Esay</font> |
| 1387 | [将整数按权重排序](https://leetcode.com/problems/sort-integers-by-the-power-value/) |  | `记忆化搜索` `动态规划` `排序` | <font color=#ffb800>Medium</font> |
| 1402 | [做菜顺序](https://leetcode.com/problems/reducing-dishes/) |  | `贪心` `数组` `动态规划` `1+` | <font color=#ff334b>Hard</font> |
| 1403 | [非递增顺序的最小子序列](https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/) |  | `贪心` `数组` `排序` | <font color=#15bd66>Esay</font> |
| 1418 | [点菜展示表](https://leetcode.com/problems/display-table-of-food-orders-in-a-restaurant/) |  | `数组` `哈希表` `字符串` `2+` | <font color=#ffb800>Medium</font> |
| 1424 | [对角线遍历 II](https://leetcode.com/problems/diagonal-traverse-ii/) |  | `数组` `排序` `堆（优先队列）` | <font color=#ffb800>Medium</font> |
| 1433 | [检查一个字符串是否可以打破另一个字符串](https://leetcode.com/problems/check-if-a-string-can-break-another-string/) |  | `贪心` `字符串` `排序` | <font color=#ffb800>Medium</font> |
| 1451 | [重新排列句子中的单词](https://leetcode.com/problems/rearrange-words-in-a-sentence/) |  | `字符串` `排序` | <font color=#ffb800>Medium</font> |
| 1460 | [通过翻转子数组使两个数组相等](https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays/) |  | `数组` `哈希表` `排序` | <font color=#15bd66>Esay</font> |
| 1464 | [数组中两元素的最大乘积](https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/) |  | `数组` `排序` `堆（优先队列）` | <font color=#15bd66>Esay</font> |
| 1465 | [切割后面积最大的蛋糕](https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/) |  | `贪心` `数组` `排序` | <font color=#ffb800>Medium</font> |
| 1471 | [数组中的 k 个最强值](https://leetcode.com/problems/the-k-strongest-values-in-an-array/) |  | `数组` `双指针` `排序` | <font color=#ffb800>Medium</font> |
| 1478 | [安排邮筒](https://leetcode.com/problems/allocate-mailboxes/) |  | `数组` `数学` `动态规划` `1+` | <font color=#ff334b>Hard</font> |
| 1481 | [不同整数的最少数目](https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/) |  | `贪心` `数组` `哈希表` `2+` | <font color=#ffb800>Medium</font> |
| 1489 | [找到最小生成树里的关键边和伪关键边](https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/) |  | `并查集` `图` `最小生成树` `2+` | <font color=#ff334b>Hard</font> |
| 1491 | [去掉最低工资和最高工资后的工资平均值](https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/) |  | `数组` `排序` | <font color=#15bd66>Esay</font> |
| 1498 | [满足条件的子序列数目](https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/) |  | `数组` `双指针` `二分查找` `1+` | <font color=#ffb800>Medium</font> |
| 1502 | [判断能否形成等差数列](https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/) |  | `数组` `排序` | <font color=#15bd66>Esay</font> |
| 1508 | [子数组和排序后的区间和](https://leetcode.com/problems/range-sum-of-sorted-subarray-sums/) |  | `数组` `双指针` `二分查找` `1+` | <font color=#ffb800>Medium</font> |
| 1509 | [三次操作后最大值与最小值的最小差](https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/) |  | `贪心` `数组` `排序` | <font color=#ffb800>Medium</font> |
| 1547 | [切棍子的最小成本](https://leetcode.com/problems/minimum-cost-to-cut-a-stick/) |  | `数组` `动态规划` `排序` | <font color=#ff334b>Hard</font> |
| 1552 | [两球之间的磁力](https://leetcode.com/problems/magnetic-force-between-two-balls/) |  | `数组` `二分查找` `排序` | <font color=#ffb800>Medium</font> |
| 1561 | [你可以获得的最大硬币数目](https://leetcode.com/problems/maximum-number-of-coins-you-can-get/) |  | `贪心` `数组` `数学` `2+` | <font color=#ffb800>Medium</font> |
| 1564 | [把箱子放进仓库里 I](https://leetcode.com/problems/put-boxes-into-the-warehouse-i/) |  | `贪心` `数组` `排序` | <font color=#ffb800>Medium</font> |
| 1580 | [把箱子放进仓库里 II](https://leetcode.com/problems/put-boxes-into-the-warehouse-ii/) |  | `贪心` `数组` `排序` | <font color=#ffb800>Medium</font> |
| 1585 | [检查字符串是否可以通过排序子字符串得到另一个字符串](https://leetcode.com/problems/check-if-string-is-transformable-with-substring-sort-operations/) |  | `贪心` `字符串` `排序` | <font color=#ff334b>Hard</font> |
| 1589 | [所有排列中的最大和](https://leetcode.com/problems/maximum-sum-obtained-of-any-permutation/) |  | `贪心` `数组` `前缀和` `1+` | <font color=#ffb800>Medium</font> |
| 1604 | [警告一小时内使用相同员工卡大于等于三次的人](https://leetcode.com/problems/alert-using-same-key-card-three-or-more-times-in-a-one-hour-period/) |  | `数组` `哈希表` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 1608 | [特殊数组的特征值](https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/) |  | `数组` `二分查找` `排序` | <font color=#15bd66>Esay</font> |
| 1610 | [可见点的最大数目](https://leetcode.com/problems/maximum-number-of-visible-points/) |  | `几何` `数组` `数学` `2+` | <font color=#ff334b>Hard</font> |
| 1619 | [删除某些元素后的数组均值](https://leetcode.com/problems/mean-of-array-after-removing-some-elements/) |  | `数组` `排序` | <font color=#15bd66>Esay</font> |
| 1626 | [无矛盾的最佳球队](https://leetcode.com/problems/best-team-with-no-conflicts/) |  | `数组` `动态规划` `排序` | <font color=#ffb800>Medium</font> |
| 1630 | [等差子数组](https://leetcode.com/problems/arithmetic-subarrays/) |  | `数组` `排序` | <font color=#ffb800>Medium</font> |
| 1636 | [按照频率将数组升序排序](https://leetcode.com/problems/sort-array-by-increasing-frequency/) |  | `数组` `哈希表` `排序` | <font color=#15bd66>Esay</font> |
| 1637 | [两点之间不包含任何点的最宽垂直区域](https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points/) |  | `数组` `排序` | <font color=#ffb800>Medium</font> |
| 1647 | [字符频次唯一的最小删除次数](https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/) |  | `贪心` `哈希表` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 1648 | [销售价值减少的颜色球](https://leetcode.com/problems/sell-diminishing-valued-colored-balls/) |  | `贪心` `数组` `数学` `3+` | <font color=#ffb800>Medium</font> |
| 1657 | [确定两个字符串是否接近](https://leetcode.com/problems/determine-if-two-strings-are-close/) |  | `哈希表` `字符串` `排序` | <font color=#ffb800>Medium</font> |
| 1665 | [完成所有任务的最少初始能量](https://leetcode.com/problems/minimum-initial-energy-to-finish-tasks/) |  | `贪心` `数组` `排序` | <font color=#ff334b>Hard</font> |
| 1679 | [K 和数对的最大数目](https://leetcode.com/problems/max-number-of-k-sum-pairs/) |  | `数组` `哈希表` `双指针` `1+` | <font color=#ffb800>Medium</font> |
| 1686 | [石子游戏 VI](https://leetcode.com/problems/stone-game-vi/) |  | `贪心` `数组` `数学` `3+` | <font color=#ffb800>Medium</font> |
| 1691 | [堆叠长方体的最大高度](https://leetcode.com/problems/maximum-height-by-stacking-cuboids/) |  | `数组` `动态规划` `排序` | <font color=#ff334b>Hard</font> |
| 1697 | [检查边长度限制的路径是否存在](https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths/) |  | `并查集` `图` `数组` `1+` | <font color=#ff334b>Hard</font> |
| 1710 | [卡车上的最大单元数](https://leetcode.com/problems/maximum-units-on-a-truck/) |  | `贪心` `数组` `排序` | <font color=#15bd66>Esay</font> |
| 1727 | [重新排列后的最大子矩阵](https://leetcode.com/problems/largest-submatrix-with-rearrangements/) |  | `贪心` `数组` `矩阵` `1+` | <font color=#ffb800>Medium</font> |
| 1751 | [最多可以参加的会议数目 II](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/) |  | `数组` `二分查找` `动态规划` `1+` | <font color=#ff334b>Hard</font> |
| 1772 | [按受欢迎程度排列功能](https://leetcode.com/problems/sort-features-by-popularity/) |  | `数组` `哈希表` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 1818 | [绝对差值和](https://leetcode.com/problems/minimum-absolute-sum-difference/) |  | `数组` `二分查找` `有序集合` `1+` | <font color=#ffb800>Medium</font> |
| 1833 | [雪糕的最大数量](https://leetcode.com/problems/maximum-ice-cream-bars/) |  | `贪心` `数组` `排序` | <font color=#ffb800>Medium</font> |
| 1834 | [单线程 CPU](https://leetcode.com/problems/single-threaded-cpu/) |  | `数组` `排序` `堆（优先队列）` | <font color=#ffb800>Medium</font> |
| 1838 | [最高频元素的频数](https://leetcode.com/problems/frequency-of-the-most-frequent-element/) |  | `贪心` `数组` `二分查找` `3+` | <font color=#ffb800>Medium</font> |
| 1846 | [减小和重新排列数组后的最大元素](https://leetcode.com/problems/maximum-element-after-decreasing-and-rearranging/) |  | `贪心` `数组` `排序` | <font color=#ffb800>Medium</font> |
| 1847 | [最近的房间](https://leetcode.com/problems/closest-room/) |  | `数组` `二分查找` `排序` | <font color=#ff334b>Hard</font> |
| 1851 | [包含每个查询的最小区间](https://leetcode.com/problems/minimum-interval-to-include-each-query/) |  | `数组` `二分查找` `排序` `2+` | <font color=#ff334b>Hard</font> |
| 1859 | [将句子排序](https://leetcode.com/problems/sorting-the-sentence/) |  | `字符串` `排序` | <font color=#15bd66>Esay</font> |
| 1874 | [两个数组的最小乘积和](https://leetcode.com/problems/minimize-product-sum-of-two-arrays/) |  | `贪心` `数组` `排序` | <font color=#ffb800>Medium</font> |
| 1877 | [数组中最大数对和的最小值](https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/) |  | `贪心` `数组` `双指针` `1+` | <font color=#ffb800>Medium</font> |
| 1878 | [矩阵中最大的三个菱形和](https://leetcode.com/problems/get-biggest-three-rhombus-sums-in-a-grid/) |  | `数组` `数学` `矩阵` `3+` | <font color=#ffb800>Medium</font> |
| 1885 | [统计数对](https://leetcode.com/problems/count-pairs-in-two-arrays/) |  | `数组` `二分查找` `排序` | <font color=#ffb800>Medium</font> |
| 1887 | [使数组元素相等的减少操作次数](https://leetcode.com/problems/reduction-operations-to-make-the-array-elements-equal/) |  | `数组` `排序` | <font color=#ffb800>Medium</font> |
| 1889 | [装包裹的最小浪费空间](https://leetcode.com/problems/minimum-space-wasted-from-packaging/) |  | `数组` `二分查找` `前缀和` `1+` | <font color=#ff334b>Hard</font> |
| 1913 | [两个数对之间的最大乘积差](https://leetcode.com/problems/maximum-product-difference-between-two-pairs/) |  | `数组` `排序` | <font color=#15bd66>Esay</font> |
| 1921 | [消灭怪物的最大数量](https://leetcode.com/problems/eliminate-maximum-number-of-monsters/) |  | `贪心` `数组` `排序` | <font color=#ffb800>Medium</font> |
| 1968 | [构造元素不等于两相邻元素平均值的数组](https://leetcode.com/problems/array-with-elements-not-equal-to-average-of-neighbors/) |  | `贪心` `数组` `排序` | <font color=#ffb800>Medium</font> |
| 1984 | [学生分数的最小差值](https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/) |  | `数组` `排序` `滑动窗口` | <font color=#15bd66>Esay</font> |
| 1985 | [找出数组中的第 K 大整数](https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array/) |  | `数组` `字符串` `分治` `3+` | <font color=#ffb800>Medium</font> |
| 1996 | [游戏中弱角色的数量](https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/) |  | `栈` `贪心` `数组` `2+` | <font color=#ffb800>Medium</font> |
| 1998 | [数组的最大公因数排序](https://leetcode.com/problems/gcd-sort-of-an-array/) |  | `并查集` `数组` `数学` `2+` | <font color=#ff334b>Hard</font> |
| 2007 | [从双倍数组中还原原数组](https://leetcode.com/problems/find-original-array-from-doubled-array/) |  | `贪心` `数组` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 2008 | [出租车的最大盈利](https://leetcode.com/problems/maximum-earnings-from-taxi/) |  | `数组` `二分查找` `动态规划` `1+` | <font color=#ffb800>Medium</font> |
| 2015 | [每段建筑物的平均高度](https://leetcode.com/problems/average-height-of-buildings-in-each-segment/) |  | `贪心` `数组` `排序` `1+` | <font color=#ffb800>Medium</font> |
| 2033 | [获取单值网格的最小操作数](https://leetcode.com/problems/minimum-operations-to-make-a-uni-value-grid/) |  | `数组` `数学` `矩阵` `1+` | <font color=#ffb800>Medium</font> |
| 2037 | [使每位学生都有座位的最少移动次数](https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/) |  | `数组` `排序` | <font color=#15bd66>Esay</font> |
| 2046 | [给按照绝对值排序的链表排序](https://leetcode.com/problems/sort-linked-list-already-sorted-using-absolute-values/) |  | `链表` `双指针` `排序` | <font color=#ffb800>Medium</font> |
| 2054 | [两个最好的不重叠活动](https://leetcode.com/problems/two-best-non-overlapping-events/) |  | `数组` `二分查找` `动态规划` `2+` | <font color=#ffb800>Medium</font> |
| 2070 | [每一个查询的最大美丽值](https://leetcode.com/problems/most-beautiful-item-for-each-query/) |  | `数组` `二分查找` `排序` | <font color=#ffb800>Medium</font> |
| 2071 | [你可以安排的最多任务数目](https://leetcode.com/problems/maximum-number-of-tasks-you-can-assign/) |  | `贪心` `队列` `数组` `3+` | <font color=#ff334b>Hard</font> |
| 2089 | [找出数组排序后的目标下标](https://leetcode.com/problems/find-target-indices-after-sorting-array/) |  | `数组` `二分查找` `排序` | <font color=#15bd66>Esay</font> |
| 2092 | [找出知晓秘密的所有专家](https://leetcode.com/problems/find-all-people-with-secret/) |  | `深度优先搜索` `广度优先搜索` `并查集` `2+` | <font color=#ff334b>Hard</font> |
| 2094 | [找出 3 位偶数](https://leetcode.com/problems/finding-3-digit-even-numbers/) |  | `数组` `哈希表` `枚举` `1+` | <font color=#15bd66>Esay</font> |
| 2098 | [长度为 K 的最大偶数和子序列](https://leetcode.com/problems/subsequence-of-size-k-with-the-largest-even-sum/) |  | `贪心` `数组` `排序` | <font color=#ffb800>Medium</font> |
| 2099 | [找到和最大的长度为 K 的子序列](https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/) |  | `数组` `哈希表` `排序` `1+` | <font color=#15bd66>Esay</font> |
| 2122 | [还原原数组](https://leetcode.com/problems/recover-the-original-array/) |  | `数组` `哈希表` `枚举` `1+` | <font color=#ff334b>Hard</font> |
| 2126 | [摧毁小行星](https://leetcode.com/problems/destroying-asteroids/) |  | `贪心` `数组` `排序` | <font color=#ffb800>Medium</font> |
| 2135 | [统计追加字母可以获得的单词数](https://leetcode.com/problems/count-words-obtained-after-adding-a-letter/) |  | `位运算` `数组` `哈希表` `2+` | <font color=#ffb800>Medium</font> |
| 2136 | [全部开花的最早一天](https://leetcode.com/problems/earliest-possible-day-of-full-bloom/) |  | `贪心` `数组` `排序` | <font color=#ff334b>Hard</font> |
| 2141 | [同时运行 N 台电脑的最长时间](https://leetcode.com/problems/maximum-running-time-of-n-computers/) |  | `贪心` `数组` `二分查找` `1+` | <font color=#ff334b>Hard</font> |
| 2144 | [打折购买糖果的最小开销](https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/) |  | `贪心` `数组` `排序` | <font color=#15bd66>Esay</font> |
| 2146 | [价格范围内最高排名的 K 样物品](https://leetcode.com/problems/k-highest-ranked-items-within-a-price-range/) |  | `广度优先搜索` `数组` `矩阵` `2+` | <font color=#ffb800>Medium</font> |
| 2148 | [元素计数](https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/) |  | `数组` `排序` | <font color=#15bd66>Esay</font> |
| 2154 | [将找到的值乘以 2](https://leetcode.com/problems/keep-multiplying-found-values-by-two/) |  | `数组` `哈希表` `排序` `1+` | <font color=#15bd66>Esay</font> |
| 2160 | [拆分数位后四位数字的最小和](https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/) |  | `贪心` `数学` `排序` | <font color=#15bd66>Esay</font> |
| 2164 | [对奇偶下标分别排序](https://leetcode.com/problems/sort-even-and-odd-indices-independently/) |  | `数组` `排序` | <font color=#15bd66>Esay</font> |
| 2165 | [重排数字的最小值](https://leetcode.com/problems/smallest-value-of-the-rearranged-number/) |  | `数学` `排序` | <font color=#ffb800>Medium</font> |
| 2171 | [拿出最少数目的魔法豆](https://leetcode.com/problems/removing-minimum-number-of-magic-beans/) |  | `数组` `前缀和` `排序` | <font color=#ffb800>Medium</font> |
| 2191 | [将杂乱无章的数字排序](https://leetcode.com/problems/sort-the-jumbled-numbers/) |  | `数组` `排序` | <font color=#ffb800>Medium</font> |
| 2195 | [向数组中追加 K 个整数](https://leetcode.com/problems/append-k-integers-with-minimal-sum/) |  | `贪心` `数组` `数学` `1+` | <font color=#ffb800>Medium</font> |
| 2225 | [找出输掉零场或一场比赛的玩家](https://leetcode.com/problems/find-players-with-zero-or-one-losses/) |  | `数组` `哈希表` `计数` `1+` | <font color=#ffb800>Medium</font> |
| 2231 | [按奇偶性交换后的最大数字](https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/) |  | `排序` `堆（优先队列）` | <font color=#15bd66>Esay</font> |
| 2234 | [花园的最大总美丽值](https://leetcode.com/problems/maximum-total-beauty-of-the-gardens/) |  | `贪心` `数组` `双指针` `2+` | <font color=#ff334b>Hard</font> |
| 2242 | [节点序列的最大得分](https://leetcode.com/problems/maximum-score-of-a-node-sequence/) |  | `图` `数组` `枚举` `1+` | <font color=#ff334b>Hard</font> |
| 2250 | [统计包含每个点的矩形数目](https://leetcode.com/problems/count-number-of-rectangles-containing-each-point/) |  | `树状数组` `数组` `二分查找` `1+` | <font color=#ffb800>Medium</font> |
| 2251 | [花期内花的数目](https://leetcode.com/problems/number-of-flowers-in-full-bloom/) |  | `数组` `哈希表` `二分查找` `3+` | <font color=#ff334b>Hard</font> |
| 2268 | [最少按键次数](https://leetcode.com/problems/minimum-number-of-keypresses/) |  | `贪心` `数组` `字符串` `2+` | <font color=#ffb800>Medium</font> |
| 2271 | [毯子覆盖的最多白色砖块数](https://leetcode.com/problems/maximum-white-tiles-covered-by-a-carpet/) |  | `贪心` `数组` `二分查找` `2+` | <font color=#ffb800>Medium</font> |
| 2273 | [移除字母异位词后的结果数组](https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/) |  | `数组` `哈希表` `字符串` `1+` | <font color=#15bd66>Esay</font> |
| 2274 | [不含特殊楼层的最大连续楼层数](https://leetcode.com/problems/maximum-consecutive-floors-without-special-floors/) |  | `数组` `排序` | <font color=#ffb800>Medium</font> |
| 2279 | [装满石头的背包的最大数量](https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks/) |  | `贪心` `数组` `排序` | <font color=#ffb800>Medium</font> |
| 2280 | [表示一个折线图的最少线段数](https://leetcode.com/problems/minimum-lines-to-represent-a-line-chart/) |  | `几何` `数组` `数学` `2+` | <font color=#ffb800>Medium</font> |
| 2285 | [道路的最大总重要性](https://leetcode.com/problems/maximum-total-importance-of-roads/) |  | `贪心` `图` `排序` `1+` | <font color=#ffb800>Medium</font> |
| 2294 | [划分数组使最大差为 K](https://leetcode.com/problems/partition-array-such-that-maximum-difference-is-k/) |  | `贪心` `数组` `排序` | <font color=#ffb800>Medium</font> |
| 2300 | [咒语和药水的成功对数](https://leetcode.com/problems/successful-pairs-of-spells-and-potions/) |  | `数组` `双指针` `二分查找` `1+` | <font color=#ffb800>Medium</font> |
| 2323 | [完成所有工作的最短时间 II](https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs-ii/) |  | `贪心` `数组` `排序` | <font color=#ffb800>Medium</font> |
| 2332 | [坐上公交的最晚时间](https://leetcode.com/problems/the-latest-time-to-catch-a-bus/) |  | `数组` `双指针` `二分查找` `1+` | <font color=#ffb800>Medium</font> |
| 2333 | [最小差值平方和](https://leetcode.com/problems/minimum-sum-of-squared-difference/) |  | `数组` `数学` `排序` `1+` | <font color=#ffb800>Medium</font> |
| 2335 | [装满杯子需要的最短总时长](https://leetcode.com/problems/minimum-amount-of-time-to-fill-cups/) |  | `贪心` `数组` `排序` `1+` | <font color=#15bd66>Esay</font> |
| 2342 | [数位和相等数对的最大和](https://leetcode.com/problems/max-sum-of-a-pair-with-equal-sum-of-digits/) |  | `数组` `哈希表` `排序` `1+` | <font color=#ffb800>Medium</font> |
| 2343 | [裁剪数字后查询第 K 小的数字](https://leetcode.com/problems/query-kth-smallest-trimmed-number/) |  | `数组` `字符串` `分治` `4+` | <font color=#ffb800>Medium</font> |
| 2344 | [使数组可以被整除的最少删除次数](https://leetcode.com/problems/minimum-deletions-to-make-array-divisible/) |  | `数组` `数学` `数论` `2+` | <font color=#ff334b>Hard</font> |
| 2345 | [寻找可见山的数量](https://leetcode.com/problems/finding-the-number-of-visible-mountains/) |  | `栈` `数组` `排序` `1+` | <font color=#ffb800>Medium</font> |
| 2357 | [使数组中所有元素都等于零](https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/) |  | `贪心` `数组` `哈希表` `3+` | <font color=#15bd66>Esay</font> |
| 2363 | [合并相似的物品](https://leetcode.com/problems/merge-similar-items/) |  | `数组` `哈希表` `有序集合` `1+` | <font color=#15bd66>Esay</font> |
| 2371 | [最小化网格中的最大值](https://leetcode.com/problems/minimize-maximum-value-in-a-grid/) |  | `贪心` `并查集` `图` `4+` | <font color=#ff334b>Hard</font> |
| 2386 | [找出数组的第 K 大和](https://leetcode.com/problems/find-the-k-sum-of-an-array/) |  | `数组` `排序` `堆（优先队列）` | <font color=#ff334b>Hard</font> |
| 2389 | [和有限的最长子序列](https://leetcode.com/problems/longest-subsequence-with-limited-sum/) |  | `贪心` `数组` `二分查找` `2+` | <font color=#15bd66>Esay</font> |
| 2402 | [会议室 III](https://leetcode.com/problems/meeting-rooms-iii/) |  | `数组` `排序` `堆（优先队列）` | <font color=#ff334b>Hard</font> |
| 2406 | [将区间分为最少组数](https://leetcode.com/problems/divide-intervals-into-minimum-number-of-groups/) |  | `贪心` `数组` `双指针` `3+` | <font color=#ffb800>Medium</font> |
| 2410 | [运动员和训练师的最大匹配数](https://leetcode.com/problems/maximum-matching-of-players-with-trainers/) |  | `贪心` `数组` `双指针` `1+` | <font color=#ffb800>Medium</font> |
| 2412 | [完成所有交易的初始最少钱数](https://leetcode.com/problems/minimum-money-required-before-transactions/) |  | `贪心` `数组` `排序` | <font color=#ff334b>Hard</font> |
| 2418 | [按身高排序](https://leetcode.com/problems/sort-the-people/) |  | `数组` `哈希表` `字符串` `1+` | <font color=#15bd66>Esay</font> |
| 2441 | [与对应负数同时存在的最大正整数](https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/) |  | `数组` `哈希表` `双指针` `1+` | <font color=#15bd66>Esay</font> |
| 2448 | [使数组相等的最小开销](https://leetcode.com/problems/minimum-cost-to-make-array-equal/) |  | `贪心` `数组` `二分查找` `2+` | <font color=#ff334b>Hard</font> |
| 2449 | [使数组相似的最少操作次数](https://leetcode.com/problems/minimum-number-of-operations-to-make-arrays-similar/) |  | `贪心` `数组` `排序` | <font color=#ff334b>Hard</font> |
| 2454 | [下一个更大元素 IV](https://leetcode.com/problems/next-greater-element-iv/) |  | `栈` `数组` `二分查找` `3+` | <font color=#ff334b>Hard</font> |
| 2456 | [最流行的视频创作者](https://leetcode.com/problems/most-popular-video-creator/) |  | `数组` `哈希表` `字符串` `2+` | <font color=#ffb800>Medium</font> |
| 2459 | [通过移动项目到空白区域来排序数组](https://leetcode.com/problems/sort-array-by-moving-items-to-empty-space/) |  | `贪心` `数组` `排序` | <font color=#ff334b>Hard</font> |
| 2463 | [最小移动总距离](https://leetcode.com/problems/minimum-total-distance-traveled/) |  | `数组` `动态规划` `排序` | <font color=#ff334b>Hard</font> |
| 2465 | [不同的平均值数目](https://leetcode.com/problems/number-of-distinct-averages/) |  | `数组` `哈希表` `双指针` `1+` | <font color=#15bd66>Esay</font> |
| 2491 | [划分技能点相等的团队](https://leetcode.com/problems/divide-players-into-teams-of-equal-skill/) |  | `数组` `哈希表` `双指针` `1+` | <font color=#ffb800>Medium</font> |
| 2497 | [图中最大星和](https://leetcode.com/problems/maximum-star-sum-of-a-graph/) |  | `贪心` `图` `数组` `2+` | <font color=#ffb800>Medium</font> |
| 2500 | [删除每行中的最大值](https://leetcode.com/problems/delete-greatest-value-in-each-row/) |  | `数组` `矩阵` `排序` | <font color=#15bd66>Esay</font> |
| 2501 | [数组中最长的方波](https://leetcode.com/problems/longest-square-streak-in-an-array/) |  | `数组` `哈希表` `二分查找` `2+` | <font color=#ffb800>Medium</font> |
| 2503 | [矩阵查询可获得的最大分数](https://leetcode.com/problems/maximum-number-of-points-from-grid-queries/) |  | `广度优先搜索` `并查集` `数组` `2+` | <font color=#ff334b>Hard</font> |
| 2512 | [奖励最顶尖的 K 名学生](https://leetcode.com/problems/reward-top-k-students/) |  | `数组` `哈希表` `字符串` `2+` | <font color=#ffb800>Medium</font> |
| 2517 | [礼盒的最大甜蜜度](https://leetcode.com/problems/maximum-tastiness-of-candy-basket/) |  | `数组` `二分查找` `排序` | <font color=#ffb800>Medium</font> |
| 2542 | [最大子序列的分数](https://leetcode.com/problems/maximum-subsequence-score/) |  | `贪心` `数组` `排序` `1+` | <font color=#ffb800>Medium</font> |
| 2545 | [根据第 K 场考试的分数排序](https://leetcode.com/problems/sort-the-students-by-their-kth-score/) |  | `数组` `矩阵` `排序` | <font color=#ffb800>Medium</font> |
| 2548 | [填满背包的最大价格](https://leetcode.com/problems/maximum-price-to-fill-a-bag/) |  | `贪心` `数组` `排序` | <font color=#ffb800>Medium</font> |
| 2551 | [将珠子放入背包中](https://leetcode.com/problems/put-marbles-in-bags/) |  | `贪心` `数组` `排序` `1+` | <font color=#ff334b>Hard</font> |
| 2554 | [从一个范围内选择最多整数 I](https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-i/) |  | `贪心` `数组` `哈希表` `2+` | <font color=#ffb800>Medium</font> |
| 2557 | [从一个范围内选择最多整数 II](https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-ii/) |  | `贪心` `数组` `二分查找` `1+` | <font color=#ffb800>Medium</font> |
| 2563 | [统计公平数对的数目](https://leetcode.com/problems/count-the-number-of-fair-pairs/) |  | `数组` `双指针` `二分查找` `1+` | <font color=#ffb800>Medium</font> |
| 2567 | [修改两个元素的最小分数](https://leetcode.com/problems/minimum-score-by-changing-two-elements/) |  | `贪心` `数组` `排序` | <font color=#ffb800>Medium</font> |
| 2576 | [求出最多标记下标](https://leetcode.com/problems/find-the-maximum-number-of-marked-indices/) |  | `贪心` `数组` `双指针` `2+` | <font color=#ffb800>Medium</font> |
| 2578 | [最小和分割](https://leetcode.com/problems/split-with-minimum-sum/) |  | `贪心` `数学` `排序` | <font color=#15bd66>Esay</font> |
| 2580 | [统计将重叠区间合并成组的方案数](https://leetcode.com/problems/count-ways-to-group-overlapping-ranges/) |  | `数组` `排序` | <font color=#ffb800>Medium</font> |
| 2587 | [重排数组以得到最大前缀分数](https://leetcode.com/problems/rearrange-array-to-maximize-prefix-score/) |  | `贪心` `数组` `前缀和` `1+` | <font color=#ffb800>Medium</font> |
| 2589 | [完成所有任务的最少时间](https://leetcode.com/problems/minimum-time-to-complete-all-tasks/) |  | `栈` `贪心` `数组` `2+` | <font color=#ff334b>Hard</font> |
| 2590 | [设计一个待办事项清单](https://leetcode.com/problems/design-a-todo-list/) |  | `设计` `数组` `哈希表` `2+` | <font color=#ffb800>Medium</font> |
| 2592 | [最大化数组的伟大值](https://leetcode.com/problems/maximize-greatness-of-an-array/) |  | `贪心` `数组` `双指针` `1+` | <font color=#ffb800>Medium</font> |
| 2593 | [标记所有元素后数组的分数](https://leetcode.com/problems/find-score-of-an-array-after-marking-all-elements/) |  | `数组` `排序` `模拟` `1+` | <font color=#ffb800>Medium</font> |
| 2602 | [使数组元素全部相等的最少操作次数](https://leetcode.com/problems/minimum-operations-to-make-all-array-elements-equal/) |  | `数组` `二分查找` `前缀和` `1+` | <font color=#ffb800>Medium</font> |
| 2604 | [吃掉所有谷子的最短时间](https://leetcode.com/problems/minimum-time-to-eat-all-grains/) |  | `数组` `二分查找` `排序` | <font color=#ff334b>Hard</font> |
| 2607 | [使子数组元素和相等](https://leetcode.com/problems/make-k-subarray-sums-equal/) |  | `数组` `数学` `数论` `1+` | <font color=#ffb800>Medium</font> |
| 2611 | [老鼠和奶酪](https://leetcode.com/problems/mice-and-cheese/) |  | `贪心` `数组` `排序` `1+` | <font color=#ffb800>Medium</font> |
| 2613 | [美数对](https://leetcode.com/problems/beautiful-pairs/) |  | `几何` `数组` `数学` `3+` | <font color=#ff334b>Hard</font> |
| 2638 | [统计 K-Free 子集的总数](https://leetcode.com/problems/count-the-number-of-k-free-subsets/) |  | `数组` `动态规划` `排序` | <font color=#ffb800>Medium</font> |
| 2655 | [寻找最大长度的未覆盖区间](https://leetcode.com/problems/find-maximal-uncovered-ranges/) |  | `数组` `排序` | <font color=#ffb800>Medium</font> |
| 2659 | [将数组清空](https://leetcode.com/problems/make-array-empty/) |  | `贪心` `树状数组` `线段树` `4+` | <font color=#ff334b>Hard</font> |
| 2679 | [矩阵中的和](https://leetcode.com/problems/sum-in-a-matrix/) |  | `数组` `矩阵` `排序` `2+` | <font color=#ffb800>Medium</font> |
| 2681 | [英雄的力量](https://leetcode.com/problems/power-of-heroes/) |  | `数组` `数学` `前缀和` `1+` | <font color=#ff334b>Hard</font> |
| 2706 | [购买两块巧克力](https://leetcode.com/problems/buy-two-chocolates/) |  | `数组` `排序` | <font color=#15bd66>Esay</font> |
| 2708 | [一个小组的最大实力值](https://leetcode.com/problems/maximum-strength-of-a-group/) |  | `贪心` `递归` `数组` `1+` | <font color=#ffb800>Medium</font> |
| 2713 | [矩阵中严格递增的单元格数](https://leetcode.com/problems/maximum-strictly-increasing-cells-in-a-matrix/) |  | `记忆化搜索` `数组` `二分查找` `3+` | <font color=#ff334b>Hard</font> |
| 2731 | [移动机器人](https://leetcode.com/problems/movement-of-robots/) |  | `脑筋急转弯` `数组` `前缀和` `1+` | <font color=#ffb800>Medium</font> |
| 2733 | [既不是最小值也不是最大值](https://leetcode.com/problems/neither-minimum-nor-maximum/) |  | `数组` `排序` | <font color=#15bd66>Esay</font> |
| 2736 | [最大和查询](https://leetcode.com/problems/maximum-sum-queries/) |  | `栈` `树状数组` `线段树` `4+` | <font color=#ff334b>Hard</font> |
| 2740 | [找出分区值](https://leetcode.com/problems/find-the-value-of-the-partition/) |  | `数组` `排序` | <font color=#ffb800>Medium</font> |
| 2747 | [统计没有收到请求的服务器数目](https://leetcode.com/problems/count-zero-request-servers/) |  | `数组` `哈希表` `排序` `1+` | <font color=#ffb800>Medium</font> |
| 2751 | [机器人碰撞](https://leetcode.com/problems/robot-collisions/) |  | `栈` `数组` `排序` `1+` | <font color=#ff334b>Hard</font> |
| LCP 08 | [剧情触发时间](https://leetcode.cn/problems/ju-qing-hong-fa-shi-jian/) |  | `数组` `二分查找` `排序` | <font color=#ffb800>Medium</font> |
| LCP 18 | [早餐组合](https://leetcode.cn/problems/2vYnGI/) |  | `数组` `双指针` `二分查找` `1+` | <font color=#15bd66>Esay</font> |
| LCP 28 | [采购方案](https://leetcode.cn/problems/4xy4Wx/) |  | `数组` `双指针` `二分查找` `1+` | <font color=#15bd66>Esay</font> |
| LCP 36 | [最多牌组数](https://leetcode.cn/problems/Up5XYM/) |  | `数组` `动态规划` `排序` | <font color=#ff334b>Hard</font> |
| LCP 37 | [最小矩形面积](https://leetcode.cn/problems/zui-xiao-ju-xing-mian-ji/) |  | `贪心` `几何` `数组` `3+` | <font color=#ff334b>Hard</font> |
| LCP 40 | [心算挑战](https://leetcode.cn/problems/uOAnQW/) |  | `贪心` `数组` `排序` | <font color=#15bd66>Esay</font> |
| LCP 42 | [玩具套圈](https://leetcode.cn/problems/vFjcfV/) |  | `几何` `数组` `哈希表` `3+` | <font color=#ff334b>Hard</font> |
| LCP 57 | [打地鼠](https://leetcode.cn/problems/ZbAuEH/) |  | `数组` `动态规划` `矩阵` `1+` | <font color=#ff334b>Hard</font> |
| LCS 02 | [完成一半题目](https://leetcode.cn/problems/WqXACV/) |  | `贪心` `数组` `哈希表` `1+` | <font color=#15bd66>Esay</font> |
| 剑指 Offer 03 | [数组中重复的数字](https://leetcode.cn/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/) |  | `数组` `哈希表` `排序` | <font color=#15bd66>Esay</font> |
| 剑指 Offer 21 | [调整数组顺序使奇数位于偶数前面](https://leetcode.cn/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/) |  | `数组` `双指针` `排序` | <font color=#15bd66>Esay</font> |
| 剑指 Offer 39 | [数组中出现次数超过一半的数字](https://leetcode.cn/problems/shu-zu-zhong-chu-xian-ci-shu-chao-guo-yi-ban-de-shu-zi-lcof/) |  | `数组` `哈希表` `分治` `2+` | <font color=#15bd66>Esay</font> |
| 剑指 Offer 40 | [最小的k个数](https://leetcode.cn/problems/zui-xiao-de-kge-shu-lcof/) |  | `数组` `分治` `快速选择` `2+` | <font color=#15bd66>Esay</font> |
| 剑指 Offer 41 | [数据流中的中位数](https://leetcode.cn/problems/shu-ju-liu-zhong-de-zhong-wei-shu-lcof/) |  | `设计` `双指针` `数据流` `2+` | <font color=#ff334b>Hard</font> |
| 剑指 Offer 45 | [把数组排成最小的数](https://leetcode.cn/problems/ba-shu-zu-pai-cheng-zui-xiao-de-shu-lcof/) |  | `贪心` `字符串` `排序` | <font color=#ffb800>Medium</font> |
| 剑指 Offer 61 | [扑克牌中的顺子](https://leetcode.cn/problems/bu-ke-pai-zhong-de-shun-zi-lcof/) |  | `数组` `排序` | <font color=#15bd66>Esay</font> |
| 剑指 Offer II 007 | [数组中和为 0 的三个数](https://leetcode.cn/problems/1fGaJU/) |  | `数组` `双指针` `排序` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 032 | [有效的变位词](https://leetcode.cn/problems/dKk3P7/) |  | `哈希表` `字符串` `排序` | <font color=#15bd66>Esay</font> |
| 剑指 Offer II 033 | [变位词组](https://leetcode.cn/problems/sfvd7V/) |  | `数组` `哈希表` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 035 | [最小时间差](https://leetcode.cn/problems/569nqc/) |  | `数组` `数学` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 057 | [值和下标之差都在给定的范围内](https://leetcode.cn/problems/7WqeDu/) |  | `数组` `桶排序` `有序集合` `2+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 060 | [出现频率最高的 k 个数字](https://leetcode.cn/problems/g5c51o/) |  | `数组` `哈希表` `分治` `5+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 074 | [合并区间](https://leetcode.cn/problems/SsGoHC/) |  | `数组` `排序` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 075 | [数组相对排序](https://leetcode.cn/problems/0H97ZC/) |  | `数组` `哈希表` `计数排序` `1+` | <font color=#15bd66>Esay</font> |
| 剑指 Offer II 076 | [数组中的第 k 大的数字](https://leetcode.cn/problems/xx4gT2/) |  | `数组` `分治` `快速选择` `2+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 077 | [链表排序](https://leetcode.cn/problems/7WHec2/) |  | `链表` `双指针` `分治` `2+` | <font color=#ffb800>Medium</font> |
| 面试题 01.01 | [判定字符是否唯一](https://leetcode.cn/problems/is-unique-lcci/) |  | `位运算` `哈希表` `字符串` `1+` | <font color=#15bd66>Esay</font> |
| 面试题 01.02 | [判定是否互为字符重排](https://leetcode.cn/problems/check-permutation-lcci/) |  | `哈希表` `字符串` `排序` | <font color=#15bd66>Esay</font> |
| 面试题 08.13 | [堆箱子](https://leetcode.cn/problems/pile-box-lcci/) |  | `数组` `动态规划` `排序` | <font color=#ff334b>Hard</font> |
| 面试题 10.01 | [合并排序的数组](https://leetcode.cn/problems/sorted-merge-lcci/) |  | `数组` `双指针` `排序` | <font color=#15bd66>Esay</font> |
| 面试题 10.02 | [变位词组](https://leetcode.cn/problems/group-anagrams-lcci/) |  | `数组` `哈希表` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 面试题 10.11 | [峰与谷](https://leetcode.cn/problems/peaks-and-valleys-lcci/) |  | `贪心` `数组` `排序` | <font color=#ffb800>Medium</font> |
| 面试题 16.06 | [最小差](https://leetcode.cn/problems/smallest-difference-lcci/) |  | `数组` `双指针` `二分查找` `1+` | <font color=#ffb800>Medium</font> |
| 面试题 16.16 | [部分排序](https://leetcode.cn/problems/sub-sort-lcci/) |  | `栈` `贪心` `数组` `3+` | <font color=#ffb800>Medium</font> |
| 面试题 16.21 | [交换和](https://leetcode.cn/problems/sum-swap-lcci/) |  | `数组` `哈希表` `二分查找` `1+` | <font color=#ffb800>Medium</font> |
| 面试题 16.24 | [数对和](https://leetcode.cn/problems/pairs-with-sum-lcci/) |  | `数组` `哈希表` `双指针` `2+` | <font color=#ffb800>Medium</font> |
| 面试题 17.04 | [消失的数字](https://leetcode.cn/problems/missing-number-lcci/) |  | `位运算` `数组` `哈希表` `2+` | <font color=#15bd66>Esay</font> |
| 面试题 17.08 | [马戏团人塔](https://leetcode.cn/problems/circus-tower-lcci/) |  | `数组` `二分查找` `动态规划` `1+` | <font color=#ffb800>Medium</font> |
| 面试题 17.14 | [最小K个数](https://leetcode.cn/problems/smallest-k-lcci/) |  | `数组` `分治` `快速选择` `2+` | <font color=#ffb800>Medium</font> |
| 面试题 17.20 | [连续中值](https://leetcode.cn/problems/continuous-median-lcci/) |  | `设计` `双指针` `数据流` `2+` | <font color=#ff334b>Hard</font> |
| 面试题 17.26 | [稀疏相似度](https://leetcode.cn/problems/sparse-similarity-lcci/) |  | `数组` `哈希表` `排序` | <font color=#ff334b>Hard</font> |