import{_ as n,o as s,c as a,a as e}from"./app-z-OzXc2F.js";const p="/assets/interview-react-18-ffhkpbX3.png",t={},o=e('<h1 id="说说对-fiber-架构的理解-解决了什么问题" tabindex="-1"><a class="header-anchor" href="#说说对-fiber-架构的理解-解决了什么问题" aria-hidden="true">#</a> 说说对 Fiber 架构的理解？解决了什么问题？</h1><h2 id="一、问题" tabindex="-1"><a class="header-anchor" href="#一、问题" aria-hidden="true">#</a> 一、问题</h2><p><code>JavaScript </code>引擎和页面渲染引擎两个线程是互斥的，当其中一个线程执行时，另一个线程只能挂起等待</p><p>如果 <code>JavaScript</code> 线程长时间地占用了主线程，那么渲染层面的更新就不得不长时间地等待，界面长时间不更新，会导致页面响应度变差，用户可能会感觉到卡顿</p><p>而这也正是 <code>React 15</code> 的 <code>Stack Reconciler </code>所面临的问题，当 <code>React </code>在渲染组件时，从开始到渲染完成整个过程是一气呵成的，无法中断</p><p>如果组件较大，那么<code>js</code>线程会一直执行，然后等到整棵<code>VDOM</code>树计算完成后，才会交给渲染的线程</p><p>这就会导致一些用户交互、动画等任务无法立即得到处理，导致卡顿的情况</p><figure><img src="'+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="二、是什么" tabindex="-1"><a class="header-anchor" href="#二、是什么" aria-hidden="true">#</a> 二、是什么</h2><p>React Fiber 是 Facebook 花费两年余时间对 React 做出的一个重大改变与优化，是对 React 核心算法的一次重新实现。从 Facebook 在 React Conf 2017 会议上确认，React Fiber 在 React 16 版本发布</p><p>在<code>react</code>中，主要做了以下的操作：</p><ul><li>为每个增加了优先级，优先级高的任务可以中断低优先级的任务。然后再重新，注意是重新执行优先级低的任务</li><li>增加了异步任务，调用 requestIdleCallback api，浏览器空闲的时候执行</li><li>dom diff 树变成了链表，一个 dom 对应两个 fiber（一个链表），对应两个队列，这都是为找到被中断的任务，重新执行</li></ul><p>从架构角度来看，<code>Fiber</code> 是对 <code>React </code>核心算法（即调和过程）的重写</p><p>从编码角度来看，<code>Fiber </code>是 <code>React </code>内部所定义的一种数据结构，它是 <code>Fiber </code>树结构的节点单位，也就是 <code>React 16</code> 新架构下的虚拟<code>DOM</code></p><p>一个 <code>fiber </code>就是一个 <code>JavaScript </code>对象，包含了元素的信息、该元素的更新操作队列、类型，其数据结构如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>type Fiber <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token comment">// 用于标记fiber的WorkTag类型，主要表示当前fiber代表的组件类型如FunctionComponent、ClassComponent等</span>
	<span class="token literal-property property">tag</span><span class="token operator">:</span> WorkTag<span class="token punctuation">,</span>
	<span class="token comment">// ReactElement里面的key</span>
	<span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">|</span> string<span class="token punctuation">,</span>
	<span class="token comment">// ReactElement.type，调用\`createElement\`的第一个参数</span>
	<span class="token literal-property property">elementType</span><span class="token operator">:</span> any<span class="token punctuation">,</span>
	<span class="token comment">// The resolved function/class/ associated with this fiber.</span>
	<span class="token comment">// 表示当前代表的节点类型</span>
	<span class="token literal-property property">type</span><span class="token operator">:</span> any<span class="token punctuation">,</span>
	<span class="token comment">// 表示当前FiberNode对应的element组件实例</span>
	<span class="token literal-property property">stateNode</span><span class="token operator">:</span> any<span class="token punctuation">,</span>

	<span class="token comment">// 指向他在Fiber节点树中的\`parent\`，用来在处理完这个节点之后向上返回</span>
	<span class="token keyword">return</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
	<span class="token comment">// 指向自己的第一个子节点</span>
	<span class="token literal-property property">child</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
	<span class="token comment">// 指向自己的兄弟结构，兄弟节点的return指向同一个父节点</span>
	<span class="token literal-property property">sibling</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
	<span class="token literal-property property">index</span><span class="token operator">:</span> number<span class="token punctuation">,</span>

	<span class="token literal-property property">ref</span><span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">handle</span><span class="token operator">:</span> mixed</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token punctuation">{</span> <span class="token literal-property property">_stringRef</span><span class="token operator">:</span> <span class="token operator">?</span>string <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">|</span> RefObject<span class="token punctuation">,</span>

	<span class="token comment">// 当前处理过程中的组件props对象</span>
	<span class="token literal-property property">pendingProps</span><span class="token operator">:</span> any<span class="token punctuation">,</span>
	<span class="token comment">// 上一次渲染完成之后的props</span>
	<span class="token literal-property property">memoizedProps</span><span class="token operator">:</span> any<span class="token punctuation">,</span>

	<span class="token comment">// 该Fiber对应的组件产生的Update会存放在这个队列里面</span>
	<span class="token literal-property property">updateQueue</span><span class="token operator">:</span> UpdateQueue<span class="token operator">&lt;</span>any<span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>

	<span class="token comment">// 上一次渲染的时候的state</span>
	<span class="token literal-property property">memoizedState</span><span class="token operator">:</span> any<span class="token punctuation">,</span>

	<span class="token comment">// 一个列表，存放这个Fiber依赖的context</span>
	<span class="token literal-property property">firstContextDependency</span><span class="token operator">:</span> ContextDependency<span class="token operator">&lt;</span>mixed<span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>

	<span class="token literal-property property">mode</span><span class="token operator">:</span> TypeOfMode<span class="token punctuation">,</span>

	<span class="token comment">// Effect</span>
	<span class="token comment">// 用来记录Side Effect</span>
	<span class="token literal-property property">effectTag</span><span class="token operator">:</span> SideEffectTag<span class="token punctuation">,</span>

	<span class="token comment">// 单链表用来快速查找下一个side effect</span>
	<span class="token literal-property property">nextEffect</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>

	<span class="token comment">// 子树中第一个side effect</span>
	<span class="token literal-property property">firstEffect</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
	<span class="token comment">// 子树中最后一个side effect</span>
	<span class="token literal-property property">lastEffect</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>

	<span class="token comment">// 代表任务在未来的哪个时间点应该被完成，之后版本改名为 lanes</span>
	<span class="token literal-property property">expirationTime</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span>

	<span class="token comment">// 快速确定子树中是否有不在等待的变化</span>
	<span class="token literal-property property">childExpirationTime</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span>

	<span class="token comment">// fiber的版本池，即记录fiber更新过程，便于恢复</span>
	<span class="token literal-property property">alternate</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、如何解决" tabindex="-1"><a class="header-anchor" href="#三、如何解决" aria-hidden="true">#</a> 三、如何解决</h2><p><code>Fiber</code>把渲染更新过程拆分成多个子任务，每次只做一小部分，做完看是否还有剩余时间，如果有继续下一个任务；如果没有，挂起当前任务，将时间控制权交给主线程，等主线程不忙的时候在继续执行</p><p>即可以中断与恢复，恢复后也可以复用之前的中间状态，并给不同的任务赋予不同的优先级，其中每个任务更新单元为 <code>React Element</code> 对应的 <code>Fiber </code>节点</p><p>实现的上述方式的是<code>requestIdleCallback</code>方法</p><p><code>window.requestIdleCallback()</code>方法将在浏览器的空闲时段内调用的函数排队。这使开发者能够在主事件循环上执行后台和低优先级工作，而不会影响延迟关键事件，如动画和输入响应</p><p>首先 React 中任务切割为多个步骤，分批完成。在完成一部分任务之后，将控制权交回给浏览器，让浏览器有时间再进行页面的渲染。等浏览器忙完之后有剩余时间，再继续之前 React 未完成的任务，是一种合作式调度。</p><p>该实现过程是基于 <code>Fiber </code>节点实现，作为静态的数据结构来说，每个 <code>Fiber</code> 节点对应一个 <code>React element</code>，保存了该组件的类型（函数组件/类组件/原生组件等等）、对应的 DOM 节点等信息。</p><p>作为动态的工作单元来说，每个 <code>Fiber</code> 节点保存了本次更新中该组件改变的状态、要执行的工作。</p><p>每个 Fiber 节点有个对应的 <code>React element</code>，多个 <code>Fiber </code>节点根据如下三个属性构建一颗树：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 指向父级Fiber节点</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>return <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token comment">// 指向子Fiber节点</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>child <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token comment">// 指向右边第一个兄弟Fiber节点</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>sibling <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过这些属性就能找到下一个执行目标</p><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2><ul><li>https://juejin.cn/post/6926432527980691470</li><li>https://zhuanlan.zhihu.com/p/137234573</li><li>https://vue3js.cn/interview</li></ul>`,29),l=[o];function c(r,i){return s(),a("div",null,l)}const u=n(t,[["render",c],["__file","fiber.html.vue"]]);export{u as default};
