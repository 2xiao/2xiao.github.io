---
title: 'Promise 专项练习'
icon: 'strong'
order: 2
---

# Promise 专项练习

## 1. Promise 基础题

### 1.1 题目一

```javascript
const promise1 = new Promise((resolve, reject) => {
	console.log('promise1');
});
console.log('1', promise1);
```

- 从上至下执行：
  1. 先遇到 `new Promise`，执行构造函数中的代码，打印 `promise1`。
  2. 然后执行同步代码 `1`，此时 `promise1` 没有被 `resolve` 或 `reject`，因此它的状态仍然是 `pending`。

**输出**:

```
'promise1'
'1' Promise{<pending>}
```

---

### 1.2 题目二

```javascript
const promise = new Promise((resolve, reject) => {
	console.log(1);
	resolve('success');
	console.log(2);
});
promise.then(() => {
	console.log(3);
});
console.log(4);
```

- 执行顺序：
  1. 执行 `new Promise` 中的同步代码，打印 `1`。
  2. 调用 `resolve('success')`，将 `promise` 的状态改为 `resolved`，并保存结果。
  3. 继续执行同步代码 `2`。
  4. `promise.then` 被加入微任务队列。
  5. 执行同步代码 `4`。
  6. 本轮宏任务执行完毕后，微任务队列中的 `promise.then` 被执行，打印 `3`。

**输出**:

```
1 2 4 3
```

---

### 1.3 题目三

```javascript
const promise = new Promise((resolve, reject) => {
	console.log(1);
	console.log(2);
});
promise.then(() => {
	console.log(3);
});
console.log(4);
```

- 执行顺序：
  1. 执行 `new Promise` 中的同步代码，打印 `1` 和 `2`。
  2. 因为 `promise` 没有调用 `resolve` 或 `reject`，所以它的状态仍为 `pending`，`promise.then` 不会执行。
  3. 执行同步代码 `4`。

**输出**:

```
1 2 4
```

---

### 1.4 题目四

```javascript
const promise1 = new Promise((resolve, reject) => {
	console.log('promise1');
	resolve('resolve1');
});
const promise2 = promise1.then((res) => {
	console.log(res);
});
console.log('1', promise1);
console.log('2', promise2);
```

- 执行顺序：
  1. 执行 `new Promise`，打印 `promise1`，并将 `promise1` 的状态改为 `resolved`。
  2. 执行 `promise1.then`，将该微任务放入微任务队列。
  3. 执行同步代码 `1` 和 `2`，打印出 `promise1` 状态为 `resolved` 和 `promise2` 状态为 `pending`。
  4. 执行微任务队列中的 `promise1.then`，打印出 `resolve1`。

**输出**:

```
'promise1'
'1' Promise{<resolved>: 'resolve1'}
'2' Promise{<pending>}
'resolve1'
```

---

### 1.5 题目五

```javascript
const fn = () =>
	new Promise((resolve, reject) => {
		console.log(1);
		resolve('success');
	});
fn().then((res) => {
	console.log(res);
});
console.log('start');
```

- 执行顺序：
  1. 调用 `fn()`，该函数返回一个新的 `Promise`，并立即执行 `resolve('success')`。
  2. 打印 `1`，然后执行 `resolve`，将 `Promise` 的状态改为 `resolved`。
  3. `then` 方法加入微任务队列，执行后打印 `success`。
  4. 执行同步代码 `start`。

**输出**:

```
1
'start'
'success'
```

---

### 1.6 题目六

如果把 `fn` 的调用放到 `start` 之后呢？

```javascript
const fn = () =>
	new Promise((resolve, reject) => {
		console.log(1);
		resolve('success');
	});
console.log('start');
fn().then((res) => {
	console.log(res);
});
```

- 执行顺序：
  1. 执行同步代码 `start`，打印 `start`。
  2. 调用 `fn()`，它返回一个新的 `Promise`，并立即执行 `resolve('success')`。
  3. 打印 `1`，然后执行 `resolve`，将 `Promise` 的状态改为 `resolved`。
  4. `then` 方法加入微任务队列，执行后打印 `success`。

**输出**:

```
'start'
1
'success'
```

## 2. Promise 结合 `setTimeout`

### 2.1 题目一

```javascript
console.log('start');
setTimeout(() => {
	console.log('time');
});
Promise.resolve().then(() => {
	console.log('resolve');
});
console.log('end');
```

- 执行顺序：
  1. 执行同步代码，打印 `start` 和 `end`。
  2. `setTimeout` 被放入宏任务队列。
  3. `Promise.resolve().then()` 被放入微任务队列。
  4. 本轮宏任务执行完毕后，执行微任务，打印 `resolve`。
  5. 然后进入下一个宏任务，打印 `time`。

**输出**:

```
'start'
'end'
'resolve'
'time'
```

---

### 2.2 题目二

```javascript
const promise = new Promise((resolve, reject) => {
	console.log(1);
	setTimeout(() => {
		console.log('timerStart');
		resolve('success');
		console.log('timerEnd');
	}, 0);
	console.log(2);
});
promise.then((res) => {
	console.log(res);
});
console.log(4);
```

- 执行顺序：
  1. 执行同步代码，打印 `1` 和 `2`。
  2. 设置 `setTimeout`，并将其放入宏任务队列，执行代码 `4`。
  3. 宏任务执行完毕后，进入微任务队列，执行 `promise.then()`，打印 `success`。
  4. 执行 `setTimeout`，打印 `timerStart`，然后调用 `resolve`，打印 `timerEnd`。

**输出**:

```
1
2
4
'timerStart'
'timerEnd'
'success'
```

---

### 2.3 题目三

```javascript
setTimeout(() => {
	console.log('timer1');
	setTimeout(() => {
		console.log('timer3');
	}, 0);
}, 0);
setTimeout(() => {
	console.log('timer2');
}, 0);
console.log('start');
```

- 执行顺序：
  1. 执行同步代码 `start`。
  2. `setTimeout` 被加入宏任务队列，依次执行 `timer1`、`timer2` 和 `timer3`。

**输出**:

```
'start'
'timer1'
'timer2'
'timer3'
```

---

### 2.4 题目四

```javascript
Promise.resolve().then(() => {
	console.log('promise1');
	const timer2 = setTimeout(() => {
		console.log('timer2');
	}, 0);
});
const timer1 = setTimeout(() => {
	console.log('timer1');
	Promise.resolve().then(() => {
		console.log('promise2');
	});
}, 0);
console.log('start');
```

- 执行顺序：
  1. 执行同步代码 `start`。
  2. `promise1` 作为微任务被执行，打印 `promise1`。
  3. `setTimeout(timer2)` 被加入宏任务队列。
  4. 执行 `timer1`，并加入微任务队列 `promise2`。

**输出**:

```
'start'
'promise1'
'timer1'
'promise2'
'timer2'
```

---

### 2.5 题目五

```javascript
const promise1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('success');
	}, 1000);
});
const promise2 = promise1.then(() => {
	throw new Error('error!!!');
});
console.log('promise1', promise1);
console.log('promise2', promise2);
setTimeout(() => {
	console.log('promise1', promise1);
	console.log('promise2', promise2);
}, 2000);
```

- 执行顺序：
  1. 执行 `setTimeout`，将其加入宏任务队列。
  2. `promise1` 状态为 `pending`，`promise2` 状态为 `pending`。
  3.

1 秒后，`promise1` 被解决为 `'success'`，并进入微任务队列，打印 `promise1` 的结果。 4. 执行 `promise2`，并抛出错误。

**输出**:

```
'promise1' Promise{<pending>}
'promise2' Promise{<pending>}
'promise1' Promise{<resolved>: 'success'}
'promise2' Promise{<rejected>: Error: error!!!}
```

## 3. Promise 中的 `then`、`catch`、`finally`

- `Promise` 的状态一旦改变，就不能再改变。
- `.then` 和 `.catch` 都会返回一个新的 `Promise`。
- `.catch` 无论被连接到哪里，都能够捕获上层的错误。
- 在 `Promise` 中，返回任意一个非 `Promise` 的值都会被包裹成 `Promise` 对象。例如，`return 2` 会被包装为 `return Promise.resolve(2)`。
- `.then` 或 `.catch` 可以被多次调用；一旦 `Promise` 的状态改变并有了值，后续的 `.then` 或 `.catch` 会直接拿到该值。
- 在 `.then` 或 `.catch` 中返回一个 `Error` 对象并不会抛出错误，因此不会被后续的 `.catch` 捕获。
- `.then` 或 `.catch` 返回的值不能是 `Promise` 本身，否则会导致死循环。
- `.then` 或 `.catch` 的参数期望是函数，传入非函数会发生值穿透。
- `.then` 方法可以接收两个参数：第一个是处理成功的回调函数，第二个是处理失败的回调函数。在某些情况下，可以将 `.catch` 视为 `.then` 的第二个参数的简便写法。
- `.finally` 方法会返回一个 `Promise`，无论 `Promise` 的结果是 `resolved` 还是 `rejected`，它都会执行其中的回调函数。

---

### 3.1 题目一

```javascript
const promise = new Promise((resolve, reject) => {
	resolve('success1');
	reject('error');
	resolve('success2');
});
promise
	.then((res) => {
		console.log('then: ', res);
	})
	.catch((err) => {
		console.log('catch: ', err);
	});
```

**输出**：

```
then: success1
```

**分析**：

构造函数中的 `resolve` 或 `reject` 只有第一次执行有效，多次调用没有任何作用。这验证了第一个结论：`Promise` 的状态一经改变就不能再改变。

---

### 3.2 题目二

```javascript
const promise = new Promise((resolve, reject) => {
	reject('error');
	resolve('success2');
});
promise
	.then((res) => {
		console.log('then: ', res);
	})
	.then((res) => {
		console.log('then: ', res);
	})
	.catch((err) => {
		console.log('catch: ', err);
	})
	.then((res) => {
		console.log('then: ', res);
	});
```

**输出**：

```
catch: error
then: undefined
```

**分析**：

`catch` 不管被连接到哪里，都能捕获上层的错误。

---

### 3.3 题目三

```javascript
Promise.resolve(1)
	.then((res) => {
		console.log(res);
		return 2;
	})
	.catch((err) => {
		return 3;
	})
	.then((res) => {
		console.log(res);
	});
```

**输出**：

```
1
2
```

**分析**：

`Promise` 支持链式调用，每次调用 `.then` 或 `.catch` 都会返回一个新的 `Promise`，从而实现链式调用。在本例中，`resolve(1)` 后直接进入第一个 `.then`，而第二个 `.then` 中接收到的是第一个 `.then` 的返回值 `2`。

---

### 3.4 题目四

```javascript
Promise.reject(1)
	.then((res) => {
		console.log(res);
		return 2;
	})
	.catch((err) => {
		console.log(err);
		return 3;
	})
	.then((res) => {
		console.log(res);
	});
```

**输出**：

```
1
3
```

**分析**：

`reject(1)` 进入 `catch`，然后第二个 `.then` 中的 `res` 获取到的是 `catch` 的返回值 `3`。

---

### 3.5 题目五

```javascript
const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log('timer');
		resolve('success');
	}, 1000);
});
const start = Date.now();
promise.then((res) => {
	console.log(res, Date.now() - start);
});
promise.then((res) => {
	console.log(res, Date.now() - start);
});
```

**输出**：

```
timer
success 1001
success 1002
```

**分析**：

`Promise` 的 `.then` 可以被调用多次，但 `Promise` 构造函数只执行一次。当状态改变并有了值后，后续的 `.then` 或 `.catch` 都会直接获取该值。

---

### 3.6 题目六

```javascript
Promise.resolve()
	.then(() => {
		return new Error('error!!!');
	})
	.then((res) => {
		console.log('then: ', res);
	})
	.catch((err) => {
		console.log('catch: ', err);
	});
```

**输出**：

```
then: Error: error!!!
```

**分析**：

返回任意一个非 `Promise` 的值都会被自动包裹为 `Promise` 对象，因此 `return new Error('error!!!')` 会被包装成 `Promise.resolve(new Error('error!!!'))`。如果你希望抛出错误，可以使用 `throw` 或 `Promise.reject()`。

---

### 3.7 题目七

```javascript
const promise = Promise.resolve().then(() => {
	return promise;
});
promise.catch(console.error);
```

**输出**：

```
Uncaught (in promise) TypeError: Chaining cycle detected for promise #<Promise>
```

**分析**：

`.then` 或 `.catch` 返回的值不能是 `Promise` 本身，否则会导致死循环。

---

### 3.8 题目八

```javascript
Promise.resolve(1).then(2).then(Promise.resolve(3)).then(console.log);
```

**输出**：

```
1
```

**分析**：

`.then` 或 `.catch` 的参数期望是函数，传入非函数会导致值穿透。此例中，`2` 和 `Promise.resolve(3)` 不是函数，因此会导致值穿透，`resolve(1)` 直接传递给最后一个 `.then`。

---

### 3.9 题目九

```javascript
Promise.reject('err!!!')
	.then(
		(res) => {
			console.log('success', res);
		},
		(err) => {
			console.log('error', err);
		}
	)
	.catch((err) => {
		console.log('catch', err);
	});
```

**输出**：

```
error error!!!
```

**分析**：

`Promise.reject` 进入了 `.then` 的第二个参数，如果没有第二个参数，则会进入 `.catch`。

---

### 3.10 题目十

```javascript
function promise1() {
	let p = new Promise((resolve) => {
		console.log('promise1');
		resolve('1');
	});
	return p;
}

function promise2() {
	return new Promise((resolve, reject) => {
		reject('error');
	});
}

promise1()
	.then((res) => console.log(res))
	.catch((err) => console.log(err))
	.finally(() => console.log('finally1'));

promise2()
	.then((res) => console.log(res))
	.catch((err) => console.log(err))
	.finally(() => console.log('finally2'));
```

**输出**：

```
promise1
1
error
finally1
finally2
```

**分析**：

`.finally` 无论 `Promise` 的结果是 `resolved` 还是 `rejected`，都会执行回调函数。

## 4. Promise 中的 `all` 和 `race`

在做以下题目之前，先了解一下 `Promise.all()` 和 `Promise.race()` 的用法。

- `Promise.all()`：接收一组异步任务并并行执行，只有在所有异步操作完成后才会执行回调。回调函数接收到的结果数组的顺序与传入 `Promise.all()` 时的顺序一致。
- `Promise.race()`：接收一组异步任务并并行执行，但只会返回第一个完成的任务的结果，其他任务继续执行，但结果会被忽略。

---

### 4.1 题目一

我们知道，如果直接在脚本中定义一个 `Promise`，它构造函数的第一个参数会立即执行：

```javascript
const p1 = new Promise((r) => console.log('立即打印'));
```

控制台会立即打印出 “立即打印”。

为了控制它何时执行，我们可以将其包装在一个函数中，并在需要时调用它：

```javascript
function runP1() {
	const p1 = new Promise((r) => console.log('立即打印'));
	return p1;
}

runP1(); // 调用此函数时才执行
```

接下来，我们构建一个函数：

```javascript
function runAsync(x) {
	const p = new Promise((r) => setTimeout(() => r(x, console.log(x)), 1000));
	return p;
}
```

- 该函数接收一个值 `x`，并在一秒后打印该值。
- 如果使用 `Promise.all()` 来执行它，会发生什么呢？

```javascript
function runAsync(x) {
	const p = new Promise((r) => setTimeout(() => r(x, console.log(x)), 1000));
	return p;
}
Promise.all([runAsync(1), runAsync(2), runAsync(3)]).then((res) =>
	console.log(res)
);
```

**执行结果**：

```
1
2
3
[1, 2, 3]
```

**分析**：

`Promise.all()` 允许并行执行多个异步操作，并在所有操作完成后执行回调。回调函数接收到的结果数组，顺序与传入 `Promise.all()` 时的顺序一致。

> 一个典型的使用场景是：一些需要预加载资源的应用，比如游戏或图片应用，加载所有资源后再初始化页面。

---

### 4.2 题目二

现在，假设我们新增了一个 `runReject` 函数，它会在 `1000 * x` 秒后抛出一个错误。

同时，`.catch()` 会捕获 `.all()` 中第一个发生的异常，并只执行一次。

考虑以下代码：

```javascript
function runAsync(x) {
	const p = new Promise((r) => setTimeout(() => r(x, console.log(x)), 1000));
	return p;
}
function runReject(x) {
	const p = new Promise((res, rej) =>
		setTimeout(() => rej(`Error: ${x}`, console.log(x)), 1000 * x)
	);
	return p;
}
Promise.all([runAsync(1), runReject(4), runAsync(3), runReject(2)])
	.then((res) => console.log(res))
	.catch((err) => console.log(err));
```

**执行结果**：

```
1
3
// 2s 后输出
2
Error: 2
// 4s 后输出
4
```

**分析**：

`Promise.all()` 会立即开始并行执行异步操作。当其中一个任务发生错误时，`.catch()` 捕获到第一个异常，执行回调并输出错误。

如果你希望处理其他错误，可以传递第二个参数给 `.then()`，这个参数也能捕获错误：

```javascript
Promise.all([runAsync(1), runReject(4), runAsync(3), runReject(2)]).then(
	(res) => console.log(res),
	(err) => console.log(err)
);
```

---

### 4.3 题目三

使用 `.race()` 方法时，它只会返回第一个完成的任务的结果，其它任务会继续执行，但结果会被丢弃。

```javascript
function runAsync(x) {
	const p = new Promise((r) => setTimeout(() => r(x, console.log(x)), 1000));
	return p;
}
Promise.race([runAsync(1), runAsync(2), runAsync(3)])
	.then((res) => console.log('result: ', res))
	.catch((err) => console.log(err));
```

**执行结果**：

```
1
result: 1
2
3
```

**分析**：

`Promise.race()` 会返回最先完成的任务结果。其他的任务虽然会继续执行，但它们的结果会被忽略。一个常见的应用场景是给异步请求设置超时，超时后执行相应的操作。

---

### 4.4 题目四

```javascript
function runAsync(x) {
	const p = new Promise((r) => setTimeout(() => r(x, console.log(x)), 1000));
	return p;
}
function runReject(x) {
	const p = new Promise((res, rej) =>
		setTimeout(() => rej(`Error: ${x}`, console.log(x)), 1000 * x)
	);
	return p;
}
Promise.race([runReject(0), runAsync(1), runAsync(2), runAsync(3)])
	.then((res) => console.log('result: ', res))
	.catch((err) => console.log(err));
```

**执行结果**：

```
0
Error: 0
1
2
3
```

**分析**：

`Promise.race()` 会首先返回最先完成的结果。如果第一个完成的任务抛出错误，`catch()` 会捕获并处理该错误。

## 5. async/await 解析

`async/await` 是 `Promise` 的语法糖，`await` 会暂停异步函数的执行，等待 Promise 完成后继续执行后续代码。

### 5.1 题目一

```javascript
async function async1() {
	console.log('async1 start');
	await async2();
	console.log('async1 end');
}

async function async2() {
	console.log('async2');
}

async1();
console.log('start');
```

**输出结果**：

```
'async1 start'
'async2'
'start'
'async1 end'
```

**分析**：

- `async1()`开始执行，先打印 `'async1 start'`。
- 执行到 `await async2()`，这会暂停 `async1` 的执行，等待 `async2` 执行完成。
- `async2()` 直接打印 `'async2'`，然后返回。
- 由于 `await` 是异步的，`async1` 后续的 `'async1 end'` 会在 `async2` 执行完之后执行。
- `console.log('start')` 是同步代码，先于 `async1 end` 执行。

---

### 5.2 题目二

```javascript
async function async1() {
	console.log('async1 start');
	await async2();
	console.log('async1 end');
}

async function async2() {
	setTimeout(() => {
		console.log('timer');
	}, 0);
	console.log('async2');
}

async1();
console.log('start');
```

**输出结果**：

```
'async1 start'
'async2'
'start'
'async1 end'
'timer'
```

**分析**：

- `async1()` 开始执行并打印 `'async1 start'`，然后遇到 `await async2()`，暂停。
- `async2()` 会执行 `console.log('async2')`，并且设置一个 0ms 后执行的 `setTimeout()`，打印 `'timer'`。
- 由于 `setTimeout` 是宏任务，它的执行被推到下一轮事件循环。
- `'start'` 是同步的，因此它在 `'async1 end'` 和 `'timer'` 之前打印。

---

### 5.3 题目三

```javascript
async function async1() {
	console.log('async1 start');
	await async2();
	console.log('async1 end');
	setTimeout(() => {
		console.log('timer1');
	}, 0);
}

async function async2() {
	setTimeout(() => {
		console.log('timer2');
	}, 0);
	console.log('async2');
}

async1();
setTimeout(() => {
	console.log('timer3');
}, 0);
console.log('start');
```

**输出结果**：

```
'async1 start'
'async2'
'start'
'async1 end'
'timer2'
'timer3'
'timer1'
```

**分析**：

- `async1` 和 `async2` 各自调用了 `setTimeout()`，分别设置了 `timer2` 和 `timer1`，这些定时器都会在 `async1 end` 后执行。
- `timer3` 是在 `start` 后被执行的。
- 注意：`setTimeout` 调用顺序决定了哪个定时器先执行。

---

### 5.4 题目四

```javascript
async function fn() {
	return 123;
}
fn().then((res) => console.log(res));
```

**输出结果**：

```
123
```

**分析**：

- 在 `async` 函数中，`return` 的值会被包裹在一个 `Promise.resolve()` 中，因此即使 `fn()` 直接返回 `123`，它也会变成一个 `resolved` 状态的 Promise，`.then()` 中的值为 `123`。

---

### 5.5 题目五

```javascript
async function async1() {
	console.log('async1 start');
	await new Promise((resolve) => {
		console.log('promise1');
	});
	console.log('async1 success');
	return 'async1 end';
}

console.log('script start');
async1().then((res) => console.log(res));
console.log('script end');
```

**输出结果**：

```
'script start'
'async1 start'
'promise1'
'script end'
```

**分析**：

- `async1` 开始执行，打印 `'async1 start'`，然后遇到 `await`，将其余代码推入微任务队列。
- 由于 `new Promise` 没有调用 `resolve()`，它的状态始终是 pending，因此 `'async1 success'` 和 `'async1 end'` 不会立即执行。
- 同时，`'script start'` 和 `'script end'` 是同步代码，因此它们会先执行。

---

### 5.6 题目六

```javascript
async function async1() {
	console.log('async1 start');
	await new Promise((resolve) => {
		console.log('promise1');
		resolve('promise1 resolve');
	}).then((res) => console.log(res));
	console.log('async1 success');
	return 'async1 end';
}

console.log('script start');
async1().then((res) => console.log(res));
console.log('script end');
```

**输出结果**：

```
'script start'
'async1 start'
'promise1'
'script end'
'promise1 resolve'
'async1 success'
'async1 end'
```

**分析**：

- `await` 等待 `Promise` resolve 后执行后面的代码。
- `promise1` 输出后，`Promise.resolve('promise1 resolve')` 被调用，`then()` 中的回调执行。
- `'async1 success'` 和 `'async1 end'` 在 `Promise` 解析后按顺序执行。

---

### 5.7 题目七

```javascript
async function async1() {
	console.log('async1 start');
	await new Promise((resolve) => {
		console.log('promise1');
		resolve('promise resolve');
	});
	console.log('async1 success');
	return 'async1 end';
}

console.log('srcipt start');
async1().then((res) => {
	console.log(res);
});

new Promise((resolve) => {
	console.log('promise2');
	setTimeout(() => {
		console.log('timer');
	});
});
```

**输出结果**：

```
'script start'
'async1 start'
'promise1'
'promise2'
'async1 success'
'async1 end'
'timer'
```

**分析**：

- `async1()` 执行时，`promise1` 打印后，`await` 暂停执行。
- `promise2` 被同步调用，`timer` 在宏任务队列中执行。

---

### 5.8 题目八

```javascript
async function async1() {
	console.log('async1 start');
	await async2();
	console.log('async1 end');
}

async function async2() {
	console.log('async2');
}

console.log('script start');

setTimeout(function () {
	console.log('setTimeout');
}, 0);

async1();

new Promise(function (resolve) {
	console.log('promise1');
	resolve();
}).then(function () {
	console.log('promise2');
});

console.log('script end');
```

**输出结果**：

```
'script start'
'async1 start'
'async2'
'promise1'
'script end'
'async1 end'
'promise2'
'setTimeout'
```

**分析**：

- 执行顺序：`script start` → `async1 start` → `async2` → `promise1` → `script end`。
- `setTimeout` 作为宏任务，最后执行。

---

### 5.9 题目九

```javascript
async function testSometing() {
	console.log('执行testSometing');
	return 'testSometing';
}

async function testAsync() {
	console.log('执行testAsync');
	return Promise.resolve('hello async');
}

async function test() {
	console.log('test start...');
	const v1 = await testSometing();
	console.log(v1);
	const v2 = await testAsync();
	console.log(v2);
	console.log(v1, v2);
}

test();

var promise = new Promise((resolve) => {
	console.log('promise start...');
	resolve('promise');
});
promise.then((val) => console.log(val));

console.log('test end...');
```

**输出结果**：

```
'test start...'
'执行testSometing'
'promise start...'
'test end...'
'testSometing'
'执行testAsync'
'promise'
'hello async'
'testSometing' 'hello async'
```

**分析**：

- `testSometing()` 执行时会先打印 `'执行testSometing'`，并返回 `'testSometing'`，然后等待 `testAsync()`。
- `testAsync()` 返回一个 resolved 的 Promise。
- 由于 `Promise` 是异步的，`'promise start...'` 会先于 `'test end...'` 打印。

## 6. async 处理错误

### 6.1 题目一

> 在 async 中，如果 await 后面的内容是一个异常或者错误的话，会怎样呢？

```javascript
async function async1() {
	await async2();
	console.log('async1');
	return 'async1 success';
}
async function async2() {
	return new Promise((resolve, reject) => {
		console.log('async2');
		reject('error');
	});
}
async1().then((res) => console.log(res));
```

例如这道题中，await 后面跟着的是一个状态为 rejected 的 promise。

如果在 async 函数中抛出了错误，则终止错误结果，不会继续向下执行。

- `async1()` 执行时遇到 `await async2()`，`async2` 返回一个 `Promise`，并在其中 `reject`，导致 `async1` 函数抛出错误。
- 因为没有 `try/catch` 来捕获这个错误，最终会打印出 `'async2'`，并且在 `async1` 执行结束后抛出一个未捕获的错误。

所以答案为：

```
'async2'
Uncaught (in promise) error
```

> 如果改为 throw new Error 也是一样的：

```javascript
async function async1() {
	console.log('async1');
	throw new Error('error!!!');
	return 'async1 success';
}
async1().then((res) => console.log(res));
```

结果为：

```
'async1'
Uncaught (in promise) Error: error!!!
```

---

### 6.2 题目二

> 如果想要使得错误的地方不影响 async 函数后续的执行的话，可以使用 try catch

```javascript
async function async1() {
	try {
		await Promise.reject('error!!!');
	} catch (e) {
		console.log(e);
	}
	console.log('async1');
	return Promise.resolve('async1 success');
}
async1().then((res) => console.log(res));
console.log('script start');
```

- 在 `async1` 函数中，`await` 后的 `Promise.reject('error!!!')` 被 `try/catch` 捕获，因此错误被处理并打印 `'error!!!'`。
- 随后执行了 `console.log('async1')` 和返回了 `'async1 success'`。
- `script start` 在所有同步代码执行之前打印。

输出为：

```
'script start'
'error!!!'
'async1'
'async1 success'
```

> 或者也可以直接在 Promise.reject 后面跟着一个 catch()方法：

```javascript
async function async1() {
	// try {
	//   await Promise.reject('error!!!')
	// } catch(e) {
	//   console.log(e)
	// }
	await Promise.reject('error!!!').catch((e) => console.log(e));
	console.log('async1');
	return Promise.resolve('async1 success');
}
async1().then((res) => console.log(res));
console.log('script start');
```

## 7. 综合题

### 7.1 题目一

```javascript
const first = () =>
	new Promise((resolve, reject) => {
		console.log(3);
		let p = new Promise((resolve, reject) => {
			console.log(7);
			setTimeout(() => {
				console.log(5);
				resolve(6);
				console.log(p);
			}, 0);
			resolve(1);
		});
		resolve(2);
		p.then((arg) => {
			console.log(arg);
		});
	});

first().then((arg) => {
	console.log(arg);
});
console.log(4);
```

**解释：**

- 函数 `first` 返回的是一个 `new Promise()`，因此首先执行其中的同步代码，打印 `3`。
- 随后，遇到另一个 `new Promise()`，继续执行其中的同步代码，打印 `7`。
- 执行完 `7` 后，在 `p` 的内部遇到一个定时器，将其放入下一次宏任务队列，继续向下执行。
- 接着，遇到 `resolve(1)`，此时将 `p` 的状态修改为 `resolved`，且返回值为 `1`。然而，此时不会立即处理它的后续逻辑。
- 跳出 `p`，遇到 `resolve(2)`，这会将 `first` 函数返回的 `Promise` 状态修改为 `resolved`，但同样不会立即处理。
- 随后，执行 `p.then`，将其加入当前事件循环的微任务队列，等待执行。
- 跳出 `first` 函数后，遇到 `first().then()`，将其加入当前事件循环的微任务队列，排在 `p.then` 后面。
- 接着执行同步代码 `4`，打印 `4`。
- 此时，本轮的同步代码已全部执行完毕，开始检查微任务队列，依次执行 `p.then` 和 `first().then()`，分别打印 `1` 和 `2`。
- 当前任务队列中的所有任务处理完成后，进入下一个宏任务队列，执行定时器的回调函数，打印 `5`。
- 定时器回调中包含 `resolve(6)`，但由于 `p` 的状态已在此前变更为 `resolved`，因此 `resolve(6)` 无法再次改变其状态，相当于无效操作。打印 `p` 的状态，结果为 `Promise{<resolved>: 1}`。

**输出结果：**

```
3
7
4
1
2
5
Promise{<resolved>: 1}
```

---

### 7.2 题目二

```javascript
const async1 = async () => {
	console.log('async1');
	setTimeout(() => {
		console.log('timer1');
	}, 2000);
	await new Promise((resolve) => {
		console.log('promise1');
	});
	console.log('async1 end');
	return 'async1 success';
};
console.log('script start');
async1().then((res) => console.log(res));
console.log('script end');
Promise.resolve(1)
	.then(2)
	.then(Promise.resolve(3))
	.catch(4)
	.then((res) => console.log(res));
setTimeout(() => {
	console.log('timer2');
}, 1000);
```

**输出结果**：

```
'script start'
'async1'
'promise1'
'script end'
1
'timer2'
'timer1'
```

**分析**：

- `async1()` 会首先打印 `'async1'` 和 `'promise1'`，然后执行 `await`，进入等待状态。
- 由于 `await` 后面没有返回值，`async1 end` 会等 `Promise` 完成后执行。
- 同步代码 `script start` 和 `script end` 先执行，紧接着执行了 `.then()` 中的 `1`，并且定时器 `timer2` 在 1000ms 后执行。

---

### 7.3 题目三

```javascript
const p1 = new Promise((resolve) => {
	setTimeout(() => {
		resolve('resolve3');
		console.log('timer1');
	}, 0);
	resolve('resovle1');
	resolve('resolve2');
})
	.then((res) => {
		console.log(res);
		setTimeout(() => {
			console.log(p1);
		}, 1000);
	})
	.finally((res) => {
		console.log('finally', res);
	});
```

**输出结果**：

```
'resolve1'
'finally' undefined
'timer1'
Promise{<resolved>: undefined}
```

**分析**：

- `resolve('resolve1')` 被第一个调用，改变了 `p1` 的状态并不会再被后续的 `resolve('resolve2')` 或 `resolve('resolve3')` 改变。
- `finally` 中的 `res` 参数为 `undefined`，因为 `finally` 的回调不接收 `Promise` 的状态参数。
- 定时器 `timer1` 打印后，`setTimeout` 中的 `console.log(p1)` 会在 1000ms 后执行，打印出 `Promise{<resolved>: undefined}`，表示 `p1` 的状态已被解决。

## 8. 大厂的面试题

### 8.1 使用 Promise 实现每隔 1 秒输出 1,2,3

一种简单的做法是利用 `Promise` 和 `Array.prototype.reduce`，通过在 `Promise` 链中不断叠加 `.then` 方法来实现延时输出：

```javascript
const arr = [1, 2, 3];
arr.reduce((p, x) => {
	return p.then(() => {
		return new Promise((resolve) => {
			setTimeout(() => resolve(console.log(x)), 1000);
		});
	});
}, Promise.resolve());
```

上述代码可以进一步精简为：

```javascript
const arr = [1, 2, 3];
arr.reduce(
	(p, x) =>
		p.then(
			() =>
				new Promise((resolve) =>
					setTimeout(() => resolve(console.log(x)), 1000)
				)
		),
	Promise.resolve()
);
```

---

### 8.2 使用 Promise 实现红绿灯交替重复亮

实现一个红绿灯交替亮的功能，三个灯亮的时间分别为：红灯 3 秒，绿灯 2 秒，黄灯 1 秒。可以用一个 `Promise` 链条实现不断循环亮灯：

```javascript
function red() {
	console.log('red');
}
function green() {
	console.log('green');
}
function yellow() {
	console.log('yellow');
}

const light = (timer, callback) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			callback();
			resolve();
		}, timer);
	});
};

const step = () => {
	Promise.resolve()
		.then(() => light(3000, red))
		.then(() => light(2000, green))
		.then(() => light(1000, yellow))
		.then(() => step()); // 循环调用
};

step();
```

---

### 8.3 实现 `mergePromise` 函数

**需求**：实现一个 `mergePromise` 函数，按顺序执行传入的 `ajax` 函数，并将每个 `ajax` 的返回结果存储在数组中，最后返回整个结果数组。

**解题思路**：

1. 初始化一个空数组 `data` 用于存储每个 `ajax` 返回的结果。
2. 使用一个 `Promise` 链 (`promise`) 依次调用 `ajax` 函数。
3. 在 `then` 中将每次的结果存入 `data`，并返回给下一个链条。
4. 最后返回存储结果的 `Promise`。

**代码实现**：

```javascript
function mergePromise(ajaxArray) {
	const data = []; // 用于存储结果
	let promise = Promise.resolve(); // 初始化 Promise 链
	ajaxArray.forEach((ajax) => {
		promise = promise
			.then(ajax) // 调用 ajax 函数
			.then((res) => {
				data.push(res); // 存储结果
				return data; // 返回结果数组
			});
	});
	return promise; // 返回最终的 Promise
}

// 示例：
mergePromise([ajax1, ajax2, ajax3]).then((data) => {
	console.log('done');
	console.log(data); // 输出 [1, 2, 3]
});
```

---

### 8.4 封装一个异步加载图片的方法

实现一个 `loadImg` 函数，能够异步加载图片，并在加载完成后返回图片元素。

```javascript
function loadImg(url) {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.onload = () => {
			console.log('一张图片加载完成');
			resolve(img); // 加载成功时返回图片
		};
		img.onerror = () => {
			reject(new Error(`Could not load image at ${url}`)); // 加载失败时抛出错误
		};
		img.src = url; // 设置图片的 src 属性
	});
}
```

---

### 8.5 限制异步操作的并发个数并尽可能快地完成全部

**需求**：实现一个函数，能够限制并发异步任务的个数。给定一组图片资源 URL，限制同时下载的链接数为 `limit`，并尽快完成所有图片的加载。

**实现思路**：

1. 使用一个队列管理任务，按批次并发执行。
2. 动态更新队列，确保始终保持不超过 `limit` 的任务并发。
3. 利用递归处理队列中的任务，及时添加新任务。

**代码实现**：

```javascript
function limitLoad(urls, handler, limit) {
	const result = []; // 用于存储所有加载结果
	const queue = []; // 当前的并发任务队列

	// 定义递归函数，用于处理剩余任务
	const runTask = (url) => {
		if (!url) return Promise.resolve(); // 如果队列已空，直接返回
		const task = handler(url) // 调用加载函数
			.then((res) => {
				result.push(res); // 将结果存储到结果数组
				queue.splice(queue.indexOf(task), 1); // 从队列中移除已完成的任务
			});
		queue.push(task); // 将当前任务添加到队列
		const next =
			queue.length >= limit ? Promise.race(queue) : Promise.resolve(); // 控制并发数
		return next.then(() => runTask(urls.shift())); // 执行下一个任务
	};

	return Promise.all(urls.slice(0, limit).map((url) => runTask(url))).then(
		() => result
	); // 初始化并发任务
}

// 示例：
limitLoad(urls, loadImg, 3).then((images) => {
	console.log(images); // 所有图片加载完成后的结果
	images.forEach((img) => document.body.appendChild(img)); // 显示图片
});
```

以上代码通过动态控制并发队列的大小，确保了高效下载，同时保证了并发任务不超过限制。
