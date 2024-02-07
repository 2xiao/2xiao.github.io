# 3.4 回溯算法

## 回溯的定义

回溯算法，又称为试探法，是一种通过不断地尝试，搜索问题的解的算法。它是一种深度优先搜索的过程，通常通过递归实现。回溯算法主要用于解决组合问题、排列问题和搜索问题，其核心思想是穷尽所有可能性，找到满足条件的解。通过尝试不同的可能性，逐步构建问题的解，当达到某个条件或无法继续扩展时，就进行回退，尝试其他的可能性。

回溯算法和我们常说的 DFS 算法非常类似，本质上就是一种暴力穷举算法。回溯算法和 DFS 算法的细微差别是：回溯算法是在遍历「树枝」，DFS 算法是在遍历「节点」。

## 回溯的原理

抽象地说，解决一个回溯问题，实际上就是遍历一棵决策树的过程，树的每个叶子节点存放着一个合法答案。把整棵树遍历一遍，把叶子节点上的答案都收集起来，就能得到所有的合法答案。站在回溯树的一个节点上，只需要思考 3 个问题：

1. 路径：也就是已经做出的选择。
2. 选择列表：也就是你当前可以做的选择。
3. 结束条件：也就是到达决策树底层，无法再做选择的条件。

代码方面，回溯算法的框架：

```javascript
let result = [];
let track = []; // 路径
const backtrack = (选择列表) => {
	if (满足结束条件) {
		result.add(track);
		return;
	}

	for (选择 in 选择列表) {
		// 做选择
		track.push(选择);
		// 递归调用
		backtrack(选择列表);
		// 撤销选择
		track.pop();
	}
};
```

其核心就是 for 循环里面的递归，在递归调用之前「做选择」，在递归调用之后「撤销选择」。

下面我们就通过[LeetCode 第 46 题 全排列](https://leetcode.com/problems/permutations/) 来了解什么叫做选择和撤销选择，以及这个框架的底层原理。

::: info 题目大意

给定一个不含重复数字的数组 `nums` ，返回其 **所有可能的全排列** 。你可以 **按任意顺序** 返回答案。`nums` 中的所有整数 **互不相同**。

:::

高中的时候做过排列组合的数学题， n 个不重复的数，全排列共有 n! 个。那么是怎么穷举全排列的呢？比方说给三个数 [1,2,3]，一般是这样：

先固定第一位为 1，然后第二位可以是 2，那么第三位只能是 3；然后可以把第二位变成 3，第三位就只能是 2 了；然后就只能变化第一位，变成 2，然后再穷举后两位……

其实这就是回溯算法，可以直接画出如下这棵回溯树：

![](../../../assets/image/3-4-1.png)

只要从根遍历这棵树，记录路径上的数字，其实就是所有的全排列。**不妨把这棵树称为回溯算法的「决策树」，因为你在每个节点上其实都在做决策。**比如说站在下图的红色节点上，就在做决策，可以选择 1 那条树枝，也可以选择 3 那条树枝。为啥只能在 1 和 3 之中选择呢？因为 2 这个树枝在身后，这个选择之前做过了，而全排列是不允许重复使用数字的。

![](../../../assets/image/3-4-2.png)

现在可以解答上面的几个名词：**`[2]` 就是「路径」，记录已经做过的选择；`[1,3]` 就是「选择列表」，表示当前可以做出的选择；「结束条件」就是遍历到树的底层叶子节点，这里也就是选择列表为空的时候。定义的 `backtrack` 函数其实就像一个指针，在这棵树上游走，同时要正确维护每个节点的属性，每当走到树的底层叶子节点，其「路径」就是一个全排列。**

全排列的代码如下：

```javascript
var permute = function (nums) {
	const n = nums.length;
	let res = [];
	let used = new Array(n).fill(false);

	const backtrack = (permu) => {
		if (permu.length == n) {
			res.push([...permu]);
			return;
		}

		for (let i = 0; i < n; i++) {
			if (used[i]) {
				continue;
			}

			// 做选择
			permu.push(nums[i]);
			used[i] = true;

			// 递归
			backtrack(permu);

			// 撤销选择，回溯
			permu.pop();
			used[i] = false;
		}
	};

	backtrack([]);
	return res;
};
```

这里稍微做了些变通，没有显式记录「选择列表」，而是通过 `used` 数组排除已经存在 `track` 中的元素，从而推导出当前的选择列表。

至此，我们就通过全排列问题详解了回溯算法的底层原理。

## 回溯的框架套路

虽然排列、组合、子集系列问题是高中就学过的，但如果想编写算法解决它们，还是非常考验计算机思维的，下面就讲讲编程解决这几个问题的核心思路，以后再有什么变体，也能手到擒来，以不变应万变。

无论是排列、组合还是子集问题，简单说无非就是让你从序列 nums 中以给定规则取若干元素，主要有以下几种变体：

- 变体一：元素无重不可复选
  - 即 nums 中的元素都是唯一的，每个元素最多只能被使用一次，这也是最基本的情况。
  - 以组合为例，如果输入 nums = [2,3,6,7]，和为 7 的组合应该只有 [7]。
- 变体二：元素可重不可复选
  - 即 nums 中的元素可以存在重复，每个元素最多只能被使用一次。
  - 以组合为例，如果输入 nums = [2,5,2,1,2]，和为 7 的组合应该有两种 [2,2,2,1] 和 [5,2]。
- 变体三：元素无重可复选
  - 即 nums 中的元素都是唯一的，每个元素可以被使用若干次。
  - 以组合为例，如果输入 nums = [2,3,6,7]，和为 7 的组合应该有两种 [2,2,3] 和 [7]。

当然，也可以说有第四种变体，即元素可重可复选。但既然元素可复选，那又何必存在重复元素呢？元素去重之后就等同于形式三，所以这种情况不用考虑。

上面用组合问题举的例子，但**排列**、**组合**、**子集**问题都可以有这三种基本形式，所以共有 9 种变化。

### 元素无重不可复选

#### 子集

:::: md-demo 相关题目

#### 📌 [78. 子集 - LeetCode](https://leetcode.com/problems/subsets/)

#### 💻 **题目大意**

给你一个整数数组 `nums` ，数组中的元素 **互不相同** 。返回该数组所有可能的子集（幂集）。

解集 **不能** 包含重复的子集。你可以按 **任意顺序** 返回解集。

#### 💡 **解题思路**

比如输入 `nums = [1,2,3]`，算法应该返回如下子集：`[ [],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3] ]`，过程如下：

- 首先，生成元素个数为 `0` 的子集，即空集 `[]`，为了方便表示，称之为 `S_0`;
- 然后，在 `S_0` 的基础上生成元素个数为 `1` 的所有子集: `[1], [2], [3]`，称为 `S_1`;
- 接着，可以在 `S_1` 的基础上推导出 `S_2`，即元素个数为 `2` 的所有子集：`[1, 2], [1, 3], [2, 3]`。
  - 因为集合中的元素不用考虑顺序，`[1,2,3]` 中 `2` 后面只有 `3`，如果添加了前面的 `1`，那么 `[2,1]` 会和之前已经生成的子集 `[1,2]` 重复。
  - 换句话说，通过保证元素之间的相对顺序不变来防止出现重复的子集。
- 接着，我们可以通过 `S_2` 推出 `S_3`，实际上 `S_3` 中只有一个集合 `[1,2,3]`，它是通过 `[1,2]` 推出的;

![](../../../assets/image/3-4-3.png)

所以如果想计算所有子集，只要遍历这棵多叉树，把所有节点的值收集起来就行了。代码如下：

#### 💎 **代码**

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
	// 用于存储结果
	const res = [];
	// 用于记录回溯路径
	const track = [];

	const backtrack = (start) => {
		// 前序遍历位置，每个节点的值都是一个子集
		res.push([...track]);

		// 回溯算法标准框架
		for (let i = start; i < nums.length; i++) {
			// 做选择
			track.push(nums[i]);
			// 回溯遍历下一层节点
			backtrack(i + 1);
			// 撤销选择
			track.pop();
		}
	};

	backtrack(0);
	return res;
};
```

使用 `start` 参数控制树枝的生长避免产生重复的子集，用 `track` 记录根节点到每个节点的路径的值，同时在前序位置把每个节点的路径值收集起来，完成回溯树的遍历就收集了所有子集。

`backtrack` 函数开头看似没有 base case，会不会进入无限递归？其实不会的，当 `start == nums.length` 时，叶子节点的值会被装入 `res`，但 `for` 循环不会执行，也就结束了递归。

::::

#### 组合

:::: md-demo 相关题目

#### 📌 [77. 组合 - LeetCode](https://leetcode.com/problems/combinations/)

#### 💻 **题目大意**

给定两个整数 `n` 和 `k`，返回范围 `[1, n]` 中所有可能的 `k` 个数的组合。

你可以按 **任何顺序** 返回答案。

#### 💡 **解题思路**

还是以 `nums = [1,2,3]` 为例（ `n = 3, k = 2` ），刚才让你求所有子集，就是把所有节点的值都收集起来；现在你只需要把第 `2` 层（根节点视为第 `0` 层）的节点收集起来，就是大小为 `2` 的所有组合：`[ [1,2],[1,3],[2,3] ]`。

![](../../../assets/image/3-4-4.png)

反映到代码上，只需要稍改 base case，控制算法仅收集第 `k` 层节点的值即可。

#### 💎 **代码**

```javascript
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
	let res = [];
	let track = [];
	const backtrack = (start) => {
		// 仅收集第 k 层节点
		if (track.length == k) {
			res.push([...track]);
			return;
		}
		for (let i = start; i <= n; i++) {
			track.push(i);
			backtrack(i + 1);
			track.pop();
		}
	};
	backtrack(1);
	return res;
};
```

::::

#### 排列

:::: md-demo 相关题目

#### 📌 [46. 全排列 - LeetCode](https://leetcode.com/problems/permutations/)

#### 💻 **题目大意**

给定一个不含重复数字的数组 `nums` ，返回其 **所有可能的全排列** 。你可以 **按任意顺序** 返回答案。`nums` 中的所有整数 **互不相同**。

#### 💡 **解题思路**

比如输入 `nums = [1,2,3]`，函数的返回值应该是：

```
[
    [1,2,3],[1,3,2],
    [2,1,3],[2,3,1],
    [3,1,2],[3,2,1]
]
```

刚才讲的组合/子集问题使用 `start` 变量保证元素 `nums[start]` 之后只会出现 `nums[start+1..]` 中的元素，通过固定元素的相对位置保证不出现重复的子集。

但排列问题本身就是让你穷举元素的位置，`nums[i]` 之后也可以出现 `nums[i]` 左边的元素，所以之前的那一套不行了，需要额外使用 `used` 数组来标记哪些元素还可以被选择。标准全排列可以抽象成如下这棵多叉树：

![](../../../assets/image/3-4-5.png)

我们用 used 数组标记已经在路径上的元素避免重复选择，然后收集所有叶子节点上的值，就是所有全排列的结果。

#### 💎 **代码**

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
	const n = nums.length;
	let res = [];
	let track = [];
	let used = new Array(n).fill(false);

	const backtrack = () => {
		if (track.length == n) {
			res.push([...track]);
			return;
		}

		for (let i = 0; i < n; i++) {
			if (used[i]) {
				continue;
			}
			// 做选择
			track.push(nums[i]);
			used[i] = true;

			// 递归
			backtrack();

			// 撤销选择，回溯
			track.pop();
			used[i] = false;
		}
	};

	backtrack();
	return res;
};
```

如果题目不让你算全排列，而是让你算元素个数为 k 的排列，怎么算？也很简单，改下 `backtrack` 函数的 base case，仅收集第 `k` 层的节点值即可。

```javascript
const backtrack = () => {
	if (track.length == k) {
		res.push([...track]);
		return;
	}
	// ...
};
```

::::

### 元素可重不可复选

#### 子集

:::: md-demo 相关题目

#### 📌 [90. 子集 II - LeetCode](https://leetcode.com/problems/subsets-ii/)

#### 💻 **题目大意**

给你一个整数数组 `nums` ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。

解集 **不能** 包含重复的子集。返回的解集中，子集可以按 **任意顺序** 排列。

#### 💡 **解题思路**

比如输入 `nums = [1,2,2]`，函数的返回值应该是：`[ [],[1],[2],[1,2],[2,2],[1,2,2] ]`

就以 nums = [1,2,2] 为例，为了区别两个 2 是不同元素，后面我们写作 nums = [1,2,2']。

按照之前的思路画出子集的树形结构，显然，两条值相同的相邻树枝会产生重复：

```
[
    [],
    [1],[2],[2'],
    [1,2],[1,2'],[2,2'],
    [1,2,2']
]
```

可以看到，`[2] 与 [2']`、`[1,2] 与 [1,2']` 这两个结果出现了重复，所以需要进行剪枝，如果一个节点有多条值相同的树枝相邻，则只遍历第一条，剩下的都剪掉，不要去遍历：

![](../../../assets/image/3-4-6.png)

体现在代码上，需要先进行排序，让相同的元素靠在一起，如果发现 `nums[i] == nums[i-1]`，则跳过。

代码和之前标准的子集问题的代码几乎相同，就是添加了排序和剪枝的逻辑。

#### 💎 **代码**

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
	let res = [];
	let track = [];

	// 排序，以便在后续的步骤中去重
	nums.sort((a, b) => a - b);

	const backtrack = (start) => {
		res.push([...track]);

		for (let i = start; i < nums.length; i++) {
			// 出现了重复元素，跳过
			if (i > start && nums[i] == nums[i - 1]) {
				continue;
			}
			track.push(nums[i]);
			backtrack(i + 1);
			track.pop();
		}
	};

	backtrack(0);
	return res;
};
```

::::

#### 组合

:::: md-demo 相关题目

#### 📌 [40. 组合总和 II - LeetCode](https://leetcode.com/problems/combination-sum-ii/)

#### 💻 **题目大意**

给定一个候选人编号的集合 `candidates` 和一个目标数 `target` ，找出 `candidates` 中所有可以使数字和为 `target` 的组合。`candidates` 中的每个数字在每个组合中只能使用 **一次** 。解集不能包含重复的组合。

#### 💡 **解题思路**

组合问题和子集问题是等价的，说这是一个组合问题，其实换个问法就变成子集问题：请你计算 `candidates` 中所有和为 `target` 的子集。

对比子集问题的解法，只要额外用一个 `sum` 变量记录回溯路径上的元素和，然后将 base case 改一改即可解决这道题：

#### 💎 **代码**

```javascript
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
	let res = [];
	let track = [];
	let sum = 0;
	candidates.sort((a, b) => a - b);

	const backtrack = (start) => {
		if (sum == target) {
			res.push([...track]);
		}
		for (let i = start; i < candidates.length; i++) {
			// 若子集和超过 target ，则直接结束循环
			// 这是因为数组已排序，后边元素更大，子集和一定超过 target
			if (target - sum - candidates[i] < 0) {
				break;
			}
			if (i > start && candidates[i] == candidates[i - 1]) {
				continue;
			}
			track.push(candidates[i]);
			sum += candidates[i];
			backtrack(i + 1);
			track.pop();
			sum -= candidates[i];
		}
	};

	backtrack(0);
	return res;
};
```

::::

#### 排列

:::: md-demo 相关题目

#### 📌 [47. 全排列 II - LeetCode](https://leetcode.com/problems/permutations-ii/)

#### 💻 **题目大意**

给定一个可包含重复数字的序列 `nums` ，**按任意顺序** 返回所有不重复的全排列。

#### 💡 **解题思路**

比如输入 `nums = [1,2,2]`，函数返回：`[ [1,2,2],[2,1,2],[2,2,1] ]`。

#### 💎 **代码**

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
	let res = [];
	let track = [];
	let used = new Array(nums.length).fill(false);

	// 先排序，让相同的元素靠在一起
	nums.sort((a, b) => a - b);

	const backtrack = () => {
		if (track.length == nums.length) {
			res.push([...track]);
			return;
		}
		for (let i = 0; i < nums.length; i++) {
			// 新添加的剪枝逻辑，固定相同的元素在排列中的相对位置
			if (used[i] || (i > 0 && nums[i] == nums[i - 1] && !used[i - 1])) {
				continue;
			}
			track.push(nums[i]);
			used[i] = true;
			backtrack(i + 1);
			track.pop();
			used[i] = false;
		}
	};

	backtrack();
	return res;
};
```

::::

### 元素无重可复选

#### 子集

#### 组合

#### 排列

<!-- START TABLE -->
<!-- Please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN `npm run lc` TO UPDATE -->


## 相关题目

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 0046 | [全排列](https://leetcode.com/problems/permutations/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0046) |  [`数组`](/leetcode/outline/tag/array.md) [`回溯`](/leetcode/outline/tag/backtracking.md) | <font color=#ffb800>Medium</font> |
| 0047 | [全排列 II](https://leetcode.com/problems/permutations-ii/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0047) |  [`数组`](/leetcode/outline/tag/array.md) [`回溯`](/leetcode/outline/tag/backtracking.md) | <font color=#ffb800>Medium</font> |
| 0037 | [解数独](https://leetcode.com/problems/sudoku-solver/) |  |  [`数组`](/leetcode/outline/tag/array.md) [`哈希表`](/leetcode/outline/tag/hash-table.md) [`回溯`](/leetcode/outline/tag/backtracking.md) `1+` | <font color=#ff334b>Hard</font> |
| 0022 | [括号生成](https://leetcode.com/problems/generate-parentheses/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0022) |  [`字符串`](/leetcode/outline/tag/string.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) [`回溯`](/leetcode/outline/tag/backtracking.md) | <font color=#ffb800>Medium</font> |
| 0017 | [电话号码的字母组合](https://leetcode.com/problems/letter-combinations-of-a-phone-number/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0017) |  [`哈希表`](/leetcode/outline/tag/hash-table.md) [`字符串`](/leetcode/outline/tag/string.md) [`回溯`](/leetcode/outline/tag/backtracking.md) | <font color=#ffb800>Medium</font> |
| 0784 | [字母大小写全排列](https://leetcode.com/problems/letter-case-permutation/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`字符串`](/leetcode/outline/tag/string.md) [`回溯`](/leetcode/outline/tag/backtracking.md) | <font color=#ffb800>Medium</font> |
| 0039 | [组合总和](https://leetcode.com/problems/combination-sum/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0039) |  [`数组`](/leetcode/outline/tag/array.md) [`回溯`](/leetcode/outline/tag/backtracking.md) | <font color=#ffb800>Medium</font> |
| 0040 | [组合总和 II](https://leetcode.com/problems/combination-sum-ii/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0040) |  [`数组`](/leetcode/outline/tag/array.md) [`回溯`](/leetcode/outline/tag/backtracking.md) | <font color=#ffb800>Medium</font> |
| 0078 | [子集](https://leetcode.com/problems/subsets/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0078) |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`数组`](/leetcode/outline/tag/array.md) [`回溯`](/leetcode/outline/tag/backtracking.md) | <font color=#ffb800>Medium</font> |
| 0090 | [子集 II](https://leetcode.com/problems/subsets-ii/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0090) |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`数组`](/leetcode/outline/tag/array.md) [`回溯`](/leetcode/outline/tag/backtracking.md) | <font color=#ffb800>Medium</font> |
| 0473 | [火柴拼正方形](https://leetcode.com/problems/matchsticks-to-square/) |  |  [`位运算`](/leetcode/outline/tag/bit-manipulation.md) [`数组`](/leetcode/outline/tag/array.md) [`动态规划`](/leetcode/outline/tag/dynamic-programming.md) `2+` | <font color=#ffb800>Medium</font> |
| 1593 | [拆分字符串使唯一子字符串的数目最大](https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings/) |  |  [`哈希表`](/leetcode/outline/tag/hash-table.md) [`字符串`](/leetcode/outline/tag/string.md) [`回溯`](/leetcode/outline/tag/backtracking.md) | <font color=#ffb800>Medium</font> |
| 1079 | [活字印刷](https://leetcode.com/problems/letter-tile-possibilities/) |  |  [`哈希表`](/leetcode/outline/tag/hash-table.md) [`字符串`](/leetcode/outline/tag/string.md) [`回溯`](/leetcode/outline/tag/backtracking.md) `1+` | <font color=#ffb800>Medium</font> |
| 0093 | [复原 IP 地址](https://leetcode.com/problems/restore-ip-addresses/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0093) |  [`字符串`](/leetcode/outline/tag/string.md) [`回溯`](/leetcode/outline/tag/backtracking.md) | <font color=#ffb800>Medium</font> |
| 0079 | [单词搜索](https://leetcode.com/problems/word-search/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0079) |  [`数组`](/leetcode/outline/tag/array.md) [`回溯`](/leetcode/outline/tag/backtracking.md) [`矩阵`](/leetcode/outline/tag/matrix.md) | <font color=#ffb800>Medium</font> |
| 0679 | [24 点游戏](https://leetcode.com/problems/24-game/) |  |  [`数组`](/leetcode/outline/tag/array.md) [`数学`](/leetcode/outline/tag/mathematics.md) [`回溯`](/leetcode/outline/tag/backtracking.md) | <font color=#ff334b>Hard</font> |

