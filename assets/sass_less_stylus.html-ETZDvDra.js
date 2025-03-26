import{_ as e,o as s,c as d,a as i}from"./app-z-OzXc2F.js";const n={},l=i(`<h1 id="说说对-css-预编语言的理解-有哪些区别" tabindex="-1"><a class="header-anchor" href="#说说对-css-预编语言的理解-有哪些区别" aria-hidden="true">#</a> 说说对 Css 预编语言的理解？有哪些区别?</h1><h2 id="一、是什么" tabindex="-1"><a class="header-anchor" href="#一、是什么" aria-hidden="true">#</a> 一、是什么</h2><p><code>Css</code> 作为一门标记性语言，语法相对简单，对使用者的要求较低，但同时也带来一些问题</p><p>需要书写大量看似没有逻辑的代码，不方便维护及扩展，不利于复用，尤其对于非前端开发工程师来讲，往往会因为缺少 <code>Css</code> 编写经验而很难写出组织良好且易于维护的 <code>Css</code> 代码</p><p><code>Css</code>预处理器便是针对上述问题的解决方案</p><h4 id="预处理语言" tabindex="-1"><a class="header-anchor" href="#预处理语言" aria-hidden="true">#</a> 预处理语言</h4><p>扩充了 <code>Css</code> 语言，增加了诸如变量、混合（mixin）、函数等功能，让 <code>Css</code> 更易维护、方便</p><p>本质上，预处理是<code>Css</code>的超集</p><p>包含一套自定义的语法及一个解析器，根据这些语法定义自己的样式规则，这些规则最终会通过解析器，编译生成对应的 <code>Css</code> 文件</p><h2 id="二、有哪些" tabindex="-1"><a class="header-anchor" href="#二、有哪些" aria-hidden="true">#</a> 二、有哪些</h2><p><code>Css</code>预编译语言在前端里面有三大优秀的预编处理器，分别是：</p><ul><li>sass</li><li>less</li><li>stylus</li></ul><h3 id="sass" tabindex="-1"><a class="header-anchor" href="#sass" aria-hidden="true">#</a> sass</h3><p>2007 年诞生，最早也是最成熟的 <code>Css </code>预处理器，拥有 Ruby 社区的支持和 <code>Compass</code> 这一最强大的 <code>Css </code>框架，目前受 <code>LESS</code> 影响，已经进化到了全面兼容 <code>Css</code> 的 <code>Scss</code></p><p>文件后缀名为<code>.sass</code>与<code>scss</code>，可以严格按照 sass 的缩进方式省去大括号和分号</p><h3 id="less" tabindex="-1"><a class="header-anchor" href="#less" aria-hidden="true">#</a> less</h3><p>2009 年出现，受<code>SASS</code>的影响较大，但又使用 <code>Css</code> 的语法，让大部分开发者和设计师更容易上手，在 <code>Ruby </code>社区之外支持者远超过 <code>SASS</code></p><p>其缺点是比起 <code>SASS </code>来，可编程功能不够，不过优点是简单和兼容 <code>Css</code>，反过来也影响了 <code>SASS </code>演变到了<code> Scss</code> 的时代</p><h3 id="stylus" tabindex="-1"><a class="header-anchor" href="#stylus" aria-hidden="true">#</a> stylus</h3><p><code>Stylus </code>是一个<code>Css</code>的预处理框架，2010 年产生，来自 <code>Node.js </code>社区，主要用来给 <code>Node</code> 项目进行 <code>Css</code> 预处理支持</p><p>所以<code> Stylus</code> 是一种新型语言，可以创建健壮的、动态的、富有表现力的<code> Css</code>。比较年轻，其本质上做的事情与<code>SASS/LESS</code>等类似</p><h2 id="三、区别" tabindex="-1"><a class="header-anchor" href="#三、区别" aria-hidden="true">#</a> 三、区别</h2><p>虽然各种预处理器功能强大，但使用最多的，还是以下特性：</p><ul><li>变量（variables）</li><li>作用域（scope）</li><li>代码混合（ mixins）</li><li>嵌套（nested rules）</li><li>代码模块化（Modules）</li></ul><p>因此，下面就展开这些方面的区别</p><h3 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h3><p>less 和 scss</p><div class="language-Css line-numbers-mode" data-ext="Css"><pre class="language-Css"><code>.box {
  display: block;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>sass</p><div class="language-Css line-numbers-mode" data-ext="Css"><pre class="language-Css"><code>.box
  display: block
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>stylus</p><div class="language-Css line-numbers-mode" data-ext="Css"><pre class="language-Css"><code>.box
  display: block
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="嵌套" tabindex="-1"><a class="header-anchor" href="#嵌套" aria-hidden="true">#</a> 嵌套</h3><p>三者的嵌套语法都是一致的，甚至连引用父级选择器的标记 &amp; 也相同</p><p>区别只是 Sass 和 Stylus 可以用没有大括号的方式书写</p><p>less</p><div class="language-Css line-numbers-mode" data-ext="Css"><pre class="language-Css"><code>.a {
  &amp;.b {
    color: red;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h3><p>变量无疑为 Css 增加了一种有效的复用方式，减少了原来在 Css 中无法避免的重复「硬编码」</p><p><code>less</code>声明的变量必须以<code>@</code>开头，后面紧跟变量名和变量值，而且变量名和变量值需要使用冒号<code>:</code>分隔开</p><div class="language-Css line-numbers-mode" data-ext="Css"><pre class="language-Css"><code>@red: #c00;

strong {
  color: @red;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>sass</code>声明的变量跟<code>less</code>十分的相似，只是变量名前面使用<code>@</code>开头</p><div class="language-Css line-numbers-mode" data-ext="Css"><pre class="language-Css"><code>$red: #c00;

strong {
  color: $red;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>stylus</code>声明的变量没有任何的限定，可以使用<code>$</code>开头，结尾的分号<code>;</code>可有可无，但变量与变量值之间需要使用<code>=</code></p><p>在<code>stylus</code>中我们不建议使用<code>@</code>符号开头声明变量</p><div class="language-Css line-numbers-mode" data-ext="Css"><pre class="language-Css"><code>red = #c00

strong
  color: red
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="作用域" tabindex="-1"><a class="header-anchor" href="#作用域" aria-hidden="true">#</a> 作用域</h3><p><code>Css</code> 预编译器把变量赋予作用域，也就是存在生命周期。就像 <code>js </code>一样，它会先从局部作用域查找变量，依次向上级作用域查找</p><p><code>sass</code>中不存在全局变量</p><div class="language-Css line-numbers-mode" data-ext="Css"><pre class="language-Css"><code>$color: black;
.scoped {
  $bg: blue;
  $color: white;
  color: $color;
  background-color:$bg;
}
.unscoped {
  color:$color;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译后</p><div class="language-Css line-numbers-mode" data-ext="Css"><pre class="language-Css"><code>.scoped {
  color:white;/*是白色*/
  background-color:blue;
}
.unscoped {
  color:white;/*白色（无全局变量概念）*/
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以，在<code>sass</code>中最好不要定义相同的变量名</p><p><code>less</code>与<code>stylus</code>的作用域跟<code>javascript</code>十分的相似，首先会查找局部定义的变量，如果没有找到，会像冒泡一样，一级一级往下查找，直到根为止</p><div class="language-Css line-numbers-mode" data-ext="Css"><pre class="language-Css"><code>@color: black;
.scoped {
  @bg: blue;
  @color: white;
  color: @color;
  background-color:@bg;
}
.unscoped {
  color:@color;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译后：</p><div class="language-Css line-numbers-mode" data-ext="Css"><pre class="language-Css"><code>.scoped {
  color:white;/*白色（调用了局部变量）*/
  background-color:blue;
}
.unscoped {
  color:black;/*黑色（调用了全局变量）*/
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="混入" tabindex="-1"><a class="header-anchor" href="#混入" aria-hidden="true">#</a> 混入</h3><p>混入（mixin）应该说是预处理器最精髓的功能之一了，简单点来说，<code>Mixins</code>可以将一部分样式抽出，作为单独定义的模块，被很多选择器重复使用</p><p>可以在<code>Mixins</code>中定义变量或者默认参数</p><p>在<code>less</code>中，混合的用法是指将定义好的<code>ClassA</code>中引入另一个已经定义的<code>Class</code>，也能使用够传递参数，参数变量为<code>@</code>声明</p><div class="language-Css line-numbers-mode" data-ext="Css"><pre class="language-Css"><code>.alert {
  font-weight: 700;
}

.highlight(@color: red) {
  font-size: 1.2em;
  color: @color;
}

.heads-up {
  .alert;
  .highlight(red);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译后</p><div class="language-Css line-numbers-mode" data-ext="Css"><pre class="language-Css"><code>.alert {
  font-weight: 700;
}
.heads-up {
  font-weight: 700;
  font-size: 1.2em;
  color: red;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Sass</code>声明<code>mixins</code>时需要使用<code>@mixinn</code>，后面紧跟<code>mixin</code>的名，也可以设置参数，参数名为变量<code>$</code>声明的形式</p><div class="language-Css line-numbers-mode" data-ext="Css"><pre class="language-Css"><code>@mixin large-text {
  font: {
    family: Arial;
    size: 20px;
    weight: bold;
  }
  color: #ff0000;
}

.page-title {
  @include large-text;
  padding: 4px;
  margin-top: 10px;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>stylus</code>中的混合和前两款<code>Css</code>预处理器语言的混合略有不同，他可以不使用任何符号，就是直接声明<code>Mixins</code>名，然后在定义参数和默认值之间用等号（=）来连接</p><div class="language-Css line-numbers-mode" data-ext="Css"><pre class="language-Css"><code>error(borderWidth= 2px) {
  border: borderWidth solid #F00;
  color: #F00;
}
.generic-error {
  padding: 20px;
  margin: 4px;
  error(); /* 调用error mixins */
}
.login-error {
  left: 12px;
  position: absolute;
  top: 20px;
  error(5px); /* 调用error mixins，并将参数$borderWidth的值指定为5px */
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="代码模块化" tabindex="-1"><a class="header-anchor" href="#代码模块化" aria-hidden="true">#</a> 代码模块化</h3><p>模块化就是将<code>Css</code>代码分成一个个模块</p><p><code>scss</code>、<code>less</code>、<code>stylus</code>三者的使用方法都如下所示</p><div class="language-Css line-numbers-mode" data-ext="Css"><pre class="language-Css"><code>@import &#39;./common&#39;;
@import &#39;./github-markdown&#39;;
@import &#39;./mixin&#39;;
@import &#39;./variables&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2><ul><li>https://jelly.jd.com/article/5dcb9c73641a030153732a89</li><li>https://zhuanlan.zhihu.com/p/23382462</li><li>https://baike.baidu.com/item/Less/17570158</li></ul>`,74),a=[l];function c(r,o){return s(),d("div",null,a)}const u=e(n,[["render",c],["__file","sass_less_stylus.html.vue"]]);export{u as default};
