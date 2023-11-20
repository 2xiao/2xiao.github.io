# [剑指 Offer 22. 链表中倒数第 k 个节点](https://leetcode.cn/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/)

::: warning
**注意：** 本题与 LeetCode [第 19 题](./0019.md) 相同。
:::

:green_apple: <font color=#15bd66>Esay</font>&emsp; 🔖&ensp; [`链表`](../solution/linked-list.md) [`双指针`](../solution/two-pointers.md)

## 题目

给定一个头节点为 `head` 的链表用于记录一系列核心肌群训练项目编号，请查找并返回倒数第 `cnt` 个训练项目编号。

**示例 1：**

::: tip

输入：`head = [2,4,7,8], cnt = 1`

输出：`8`

:::

**提示：**

- `1 <= head.length <= 100`
- `0 <= head[i] <= 100`
- `1 <= cnt <= head.length`

## 解题思路

使用快慢指针，从 `head` 开始遍历链表，快指针先出发，两个指针之间相差 `cnt`，当快指针到达链尾时，满指针正好指向第 `cnt` 个节点。

## 代码

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} cnt
 * @return {ListNode}
 */
var trainingPlan = function (head, cnt) {
  let fast = head;
  let slow = head;
  for (let i = 0; i < cnt; i++) {
    fast = fast.next;
  }
  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }
  return slow;
};
```
