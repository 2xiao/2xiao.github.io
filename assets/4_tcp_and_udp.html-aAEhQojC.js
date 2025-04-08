import{_ as e,o as d,c as i,e as n}from"./app-8BcPXs48.js";const a={},t=n(`<h1 id="_5-tcp-和-udp" tabindex="-1"><a class="header-anchor" href="#_5-tcp-和-udp" aria-hidden="true">#</a> 5. TCP 和 UDP</h1><p>在互联网数据传输中，两个基本协议占主导地位：<strong>TCP（传输控制协议）<strong>和</strong>UDP（用户数据报协议）</strong>。理解这两个传输层协议对于软件开发人员至关重要，因为它们构成了互联网数据通信的基础。本文将深入探讨这两种协议，重点介绍它们的特性、区别，以及何时使用它们。</p><h2 id="tcp-传输控制协议" tabindex="-1"><a class="header-anchor" href="#tcp-传输控制协议" aria-hidden="true">#</a> TCP：传输控制协议</h2><p><strong>TCP</strong> 是一种面向连接的协议，旨在确保设备之间的可靠通信。它运行在互联网协议（IP）之上，属于更广泛的 TCP/IP 套件，通常被称为互联网协议套件。以下是 TCP 的主要特点和功能：</p><h3 id="_1-可靠性和数据完整性" tabindex="-1"><a class="header-anchor" href="#_1-可靠性和数据完整性" aria-hidden="true">#</a> 1. 可靠性和数据完整性</h3><p>TCP 以其可靠性而闻名。它确保数据包按正确顺序传输且无误差。假设你发送了多个数据包：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+---+  +---+  +---+  +---+
| 1 |  | 2 |  | 3 |  | 4 |
+---+  +---+  +---+  +---+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>TCP 负责确保即使数据包顺序错误，它也能将它们正确重组：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+---+  +---+  +---+  +---+
| 1 |  | 3 |  | 2 |  | 4 |
+---+  +---+  +---+  +---+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>TCP 会重组这些包，恢复正确的顺序：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+---+  +---+  +---+  +---+
| 1 |  | 2 |  | 3 |  | 4 |
+---+  +---+  +---+  +---+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-错误检测与重传" tabindex="-1"><a class="header-anchor" href="#_2-错误检测与重传" aria-hidden="true">#</a> 2. 错误检测与重传</h3><p>由于网络本身的不可靠性，数据包在传输过程中可能会丢失。TCP 通过实施错误检测和丢失数据包的重传来减少这种情况：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>原始传输:
+---+  +---+  +---+  +---+
| 1 |  | 2 |  | 3 |  | 4 |
+---+  +---+  +---+  +---+

接收到的包:
+---+        +---+  +---+
| 1 |        | 3 |  | 4 |
+---+        +---+  +---+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的例子中，包 2 丢失了，TCP 会检测到这一点并请求重传丢失的包：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>重传包:
+---+
| 2 |
+---+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-连接建立-三次握手" tabindex="-1"><a class="header-anchor" href="#_3-连接建立-三次握手" aria-hidden="true">#</a> 3. 连接建立：三次握手</h3><p>在传输数据之前，TCP 需要在客户端和服务器之间建立连接，这个过程称为<strong>三次握手</strong>：</p><ol><li><p><strong>SYN</strong>：客户端发送同步（SYN）包到服务器。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>客户端 -&gt; 服务器: [SYN]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>SYN-ACK</strong>：服务器通过发送 SYN-ACK 包进行确认。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>服务器 -&gt; 客户端: [SYN, ACK]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>ACK</strong>：客户端响应确认（ACK），完成连接建立。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>客户端 -&gt; 服务器: [ACK]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h3 id="_4-开销与延迟" tabindex="-1"><a class="header-anchor" href="#_4-开销与延迟" aria-hidden="true">#</a> 4. 开销与延迟</h3><p>使得 TCP 可靠的特性也带来了开销。连接的建立、数据排序和错误检查增加了延迟并消耗了额外带宽。对于需要可靠性的应用，如网页浏览（HTTP）、电子邮件（SMTP）和文件传输，这种权衡是可以接受的。</p><h2 id="udp-用户数据报协议" tabindex="-1"><a class="header-anchor" href="#udp-用户数据报协议" aria-hidden="true">#</a> UDP：用户数据报协议</h2><p><strong>UDP</strong> 是一种简单的、无连接的协议，提供了一种快速但不可靠的数据传输方式。它不保证数据包的交付、顺序或错误检测，适用于速度比可靠性更重要的场景。</p><h3 id="_1-无需建立连接" tabindex="-1"><a class="header-anchor" href="#_1-无需建立连接" aria-hidden="true">#</a> 1. 无需建立连接</h3><p>与 TCP 不同，UDP 不需要在客户端和服务器之间建立连接。数据包（称为<strong>数据报</strong>）是独立发送的，无法保证顺序和交付：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+---+  +---+  +---+  +---+
| 1 |  | 2 |  | 3 |  | 4 |
+---+  +---+  +---+  +---+

发送:
+---+  +---+  +---+  +---+
| 1 |  | 2 |  | 3 |  | 4 |
+---+  +---+  +---+  +---+

接收:
+---+        +---+  +---+
| 1 |        | 3 |  | 4 |
+---+        +---+  +---+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，包 2 丢失了，且不会被重传。</p><h3 id="_2-应用场景" tabindex="-1"><a class="header-anchor" href="#_2-应用场景" aria-hidden="true">#</a> 2. 应用场景</h3><p>UDP 通常用于实时应用，其中速度至关重要，且可以接受一些数据丢失：</p><ul><li><strong>直播流媒体</strong>：对于实时视频或音频流，丢失一两帧是可以接受的，因为重点是保持实时传输。</li><li><strong>在线游戏</strong>：在快速节奏的多人游戏中，数据到达的速度比顺序更重要。</li></ul><h3 id="_3-低开销" tabindex="-1"><a class="header-anchor" href="#_3-低开销" aria-hidden="true">#</a> 3. 低开销</h3><p>由于没有连接建立和重传机制，UDP 的开销远低于 TCP。因此，它的速度更快，但代价是可能会丢失数据。</p><h2 id="tcp-和-udp-的主要区别" tabindex="-1"><a class="header-anchor" href="#tcp-和-udp-的主要区别" aria-hidden="true">#</a> TCP 和 UDP 的主要区别</h2><p>以下是 TCP 和 UDP 的简明对比：</p><table><thead><tr><th>特性</th><th>TCP</th><th>UDP</th></tr></thead><tbody><tr><td>连接类型</td><td>面向连接</td><td>无连接</td></tr><tr><td>可靠性</td><td>保证（错误检查、重传）</td><td>不保证</td></tr><tr><td>顺序</td><td>保证</td><td>不保证</td></tr><tr><td>速度</td><td>由于开销较大，速度较慢</td><td>较快，开销较小</td></tr><tr><td>适用场景</td><td>网页浏览、电子邮件、文件传输</td><td>直播流媒体、在线游戏、DNS</td></tr></tbody></table>`,35),s=[t];function r(l,c){return d(),i("div",null,s)}const u=e(a,[["render",r],["__file","4_tcp_and_udp.html.vue"]]);export{u as default};
