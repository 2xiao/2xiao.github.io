# apply、call、bind 的区别是什么？

`call`、`apply`、`bind` 的作用是改变函数执行时的上下文，简而言之就是改变函数运行时的 `this` 指向。

那什么情况下需要改变`this`的指向呢？下面举个例子

```javascript
var name = 'lucy';
var obj = {
	name: 'martin',
	say: function () {
		console.log(this.name);
	}
};
obj.say(); // martin，this 指向 obj 对象
setTimeout(obj.say, 0); // lucy，this 指向 window 对象
```

从上面可以看到，正常情况`say`方法输出`martin`。

但是我们把`say`放在`setTimeout`方法中，在定时器中是作为回调函数来执行的，因此回到主栈执行时是在全局执行上下文的环境中执行的，这时候`this`指向`window`，所以输出`lucy`。

我们实际需要的是`this`指向`obj`对象，这时候就需要该改变`this`指向了。

```javascript
setTimeout(obj.say.bind(obj), 0); // martin，this指向obj对象
```

## apply

`apply`接受两个参数，第一个参数是`this`的指向，第二个参数是函数接受的参数，以数组的形式传入。

改变`this`指向后原函数会立即执行，且此方法只是临时改变`this`指向一次。

```javascript
function fn(...args) {
	console.log(this, args);
}
let obj = {
	myname: '张三'
};

fn.apply(obj, [1, 2]); // this会变成传入的obj，传入的参数必须是一个数组；
fn(1, 2); // this指向window
```

当第一个参数为`null`、`undefined`的时候，默认指向`window`(在浏览器中)。

```javascript
fn.apply(null, [1, 2]); // this指向window
fn.apply(undefined, [1, 2]); // this指向window
```

## call

`call`方法的第一个参数也是`this`的指向，后面传入的是一个参数列表。

跟`apply`一样，改变`this`指向后原函数会立即执行，且此方法只是临时改变`this`指向一次。

```javascript
function fn(...args) {
	console.log(this, args);
}
let obj = {
	myname: '张三'
};

fn.call(obj, 1, 2); // this会变成传入的obj，传入的参数必须是一个数组；
fn(1, 2); // this指向window
```

同样的，当第一个参数为`null`、`undefined`的时候，默认指向`window`(在浏览器中)。

```javascript
fn.call(null, [1, 2]); // this指向window
fn.call(undefined, [1, 2]); // this指向window
```

## bind

`bind` 方法和 `call` 很相似，第一参数也是 `this` 的指向，后面传入的也是一个参数列表(但是这个参数列表可以分多次传入)。

改变 `this` 指向后不会立即执行，而是返回一个永久改变 `this` 指向的函数。

```javascript
function fn(...args) {
	console.log(this, args);
}
let obj = {
	myname: '张三'
};

const bindFn = fn.bind(obj); // this 也会变成传入的 obj ，bind 不是立即执行需要执行一次
bindFn(1, 2); // this 指向 obj
fn(1, 2); // this 指向 window
```

## 区别

从上面可以看到，`apply`、`call`、`bind`三者的区别在于：

1. 三者都可以改变函数的 `this` 对象指向
2. 三者第一个参数都是 `this` 要指向的对象，如果如果没有这个参数或参数为 `undefined` 或 `null`，则默认指向全局 `window`
3. 三者都可以传参，但是 `apply` 是数组，而 `call` 是参数列表，且 `apply` 和 `call` 是一次性传入参数，而 `bind` 可以分为多次传入
4. `bind` 返回绑定 `this` 之后的函数，`apply`、`call` 则是立即执行
