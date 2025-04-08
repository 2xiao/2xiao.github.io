import{_ as e,o as i,c as n,e as a}from"./app-8BcPXs48.js";const d={},s=a(`<h1 id="_4-网络基础" tabindex="-1"><a class="header-anchor" href="#_4-网络基础" aria-hidden="true">#</a> 4. 网络基础</h1><p>网络是系统设计中的一个关键概念，理解计算机如何通过网络进行通信是开发健壮软件解决方案的重要基础。本文将通过简单的类比和插图，深入探讨网络基础，包括 IP 地址、数据包、通信协议和端口等内容。</p><h2 id="理解-ip-地址" tabindex="-1"><a class="header-anchor" href="#理解-ip-地址" aria-hidden="true">#</a> 理解 IP 地址</h2><h3 id="什么是-ip-地址" tabindex="-1"><a class="header-anchor" href="#什么是-ip-地址" aria-hidden="true">#</a> 什么是 IP 地址？</h3><p>IP 地址（Internet Protocol 地址）用来唯一标识网络中的设备，就像邮政地址用来唯一标识一栋房子一样。计算机通过了解彼此的 IP 地址，在互联网中进行通信。</p><h3 id="ipv4-和-ipv6" tabindex="-1"><a class="header-anchor" href="#ipv4-和-ipv6" aria-hidden="true">#</a> IPv4 和 IPv6</h3><p>IP 地址有两个版本：IPv4 和 IPv6。</p><ul><li><strong>IPv4</strong>: 使用 32 位地址，可生成约 40 亿个唯一地址。IPv4 地址通常以点分十进制形式表示，例如：<code>192.168.1.1</code>，其中每部分的取值范围为 0 到 255。</li><li><strong>IPv6</strong>: 为了解决 IPv4 地址耗尽的问题，IPv6 使用 128 位地址，提供了一个更大的地址池。IPv6 地址以十六进制形式表示，用冒号分隔，例如：<code>2001:0db8:85a3:0000:0000:8a2e:0370:7334</code>。</li></ul><h4 id="ipv4-地址示意图" tabindex="-1"><a class="header-anchor" href="#ipv4-地址示意图" aria-hidden="true">#</a> IPv4 地址示意图：</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+---------------------+
| 192 | 168 |  1 |  1 |
+---------------------+
  |     |     |     |
0-255 0-255 0-255 0-255
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="网络中的数据传输-ip-数据包" tabindex="-1"><a class="header-anchor" href="#网络中的数据传输-ip-数据包" aria-hidden="true">#</a> 网络中的数据传输：IP 数据包</h2><p>在网络上传输数据时，数据会被分解为较小的单元，称为<strong>数据包</strong>。每个数据包不仅包含要传输的数据，还包含描述数据的元数据，例如源 IP 地址和目标 IP 地址。</p><h3 id="internet-协议-ip" tabindex="-1"><a class="header-anchor" href="#internet-协议-ip" aria-hidden="true">#</a> Internet 协议（IP）</h3><p>Internet 协议负责管理数据如何在网络中从一台设备发送到另一台设备。每个 IP 数据包的头部包含如下元数据：</p><ul><li>源 IP 地址</li><li>目标 IP 地址</li><li>其他控制信息</li></ul><h4 id="类比-邮寄信件" tabindex="-1"><a class="header-anchor" href="#类比-邮寄信件" aria-hidden="true">#</a> 类比：邮寄信件</h4><p>通过网络传输数据类似于邮寄信件：</p><ul><li><strong>信封</strong> = 数据包</li><li><strong>信封上的地址</strong> = IP 地址</li><li><strong>信封内的内容</strong> = 要传输的数据</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------------------------+
|          IP 数据包             |
| +---------+-----------------+ |
| |   头部   |      数据       | |
| +---------+-----------------+ |
+-------------------------------+
  | 源IP地址     | 目标IP地址     |
  | 192.168.1.1 | 93.184.216.34 |
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据拆分-tcp-和-udp" tabindex="-1"><a class="header-anchor" href="#数据拆分-tcp-和-udp" aria-hidden="true">#</a> 数据拆分：TCP 和 UDP</h2><p>在传输较大的数据时，它们可能无法放入一个单独的数据包中。例如，邮寄一本书需要将其分拆为多个信封。类似地，我们使用如 TCP（传输控制协议）和 UDP（用户数据报协议）的协议来管理数据传输。</p><h3 id="tcp-传输控制协议" tabindex="-1"><a class="header-anchor" href="#tcp-传输控制协议" aria-hidden="true">#</a> TCP（传输控制协议）</h3><p>TCP 确保数据可靠传输且顺序正确。它将数据拆分成数据包，分配序列号，并在目标端重新组装。</p><h4 id="tcp-数据包示意图" tabindex="-1"><a class="header-anchor" href="#tcp-数据包示意图" aria-hidden="true">#</a> TCP 数据包示意图：</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+------------------------------+
|          TCP 数据包           |
| +---------+----------------+ |
| | TCP头部  |      数据      | |
| +---------+----------------+ |
+------------------------------+
   | 序列号 |     数据       |
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="udp-用户数据报协议" tabindex="-1"><a class="header-anchor" href="#udp-用户数据报协议" aria-hidden="true">#</a> UDP（用户数据报协议）</h3><p>相比之下，UDP 在发送数据包时不需要建立连接，也不确保数据包按顺序到达。它的速度更快，但可靠性较低，适用于视频流等对速度要求更高的应用。</p><h2 id="通信端口" tabindex="-1"><a class="header-anchor" href="#通信端口" aria-hidden="true">#</a> 通信端口</h2><p>端口是网络设备上的通信端点，就像房子的门用来打开特定的通信通道一样。常见的端口包括：</p><ul><li><strong>端口 80</strong>: HTTP 流量的默认端口</li><li><strong>端口 443</strong>: HTTPS 流量的默认端口</li><li><strong>端口 22</strong>: 用于 SSH（安全外壳协议）</li></ul><p>每台设备最多可以有 65,535 个端口（基于 16 位值），特定应用使用预定义的端口进行通信。</p><h4 id="端口示例" tabindex="-1"><a class="header-anchor" href="#端口示例" aria-hidden="true">#</a> 端口示例：</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------------+
|      设备          |
| +---------------+ |
| |     端口       | |
| +---+---+---+---+ |
| |80 |443|22 |...| |
| +---+---+---+---+ |
+-------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="公网-ip-和私网-ip" tabindex="-1"><a class="header-anchor" href="#公网-ip-和私网-ip" aria-hidden="true">#</a> 公网 IP 和私网 IP</h2><ul><li><strong>公网 IP 地址</strong>: 可通过互联网访问，通常用于需要公开访问的服务器。</li><li><strong>私网 IP 地址</strong>: 用于局域网（LAN），不能直接通过互联网访问。这些地址通常由路由器分配给家庭或办公室网络中的设备。</li></ul><h4 id="公网和私网-ip-地址示例" tabindex="-1"><a class="header-anchor" href="#公网和私网-ip-地址示例" aria-hidden="true">#</a> 公网和私网 IP 地址示例：</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+
|         互联网               |
| +-----------------------+   |
| |        公网 IP         |   |
| |      203.0.113.5      |   |
| +------------+----------+   |
|              |              |
+--------------+--------------+
               |
        +------+------+
        |    路由器    |
        +------+------+
               |
    +----------+---------+
    |     私网 IP 地址    |
    | +-------+--------+ |
    | | 192.168.0.2    | |
    | +-------+--------+ |
    | | 192.168.0.3    | |
    | +-------+--------+ |
    +--------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="本地主机和保留-ip" tabindex="-1"><a class="header-anchor" href="#本地主机和保留-ip" aria-hidden="true">#</a> 本地主机和保留 IP</h2><ul><li><strong>本地主机 (<code>127.0.0.1</code>)</strong>: 是保留用于机器自我引用的特殊 IP 地址，常用于测试和开发环境。</li></ul><h4 id="本地访问应用示例" tabindex="-1"><a class="header-anchor" href="#本地访问应用示例" aria-hidden="true">#</a> 本地访问应用示例：</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 访问本地运行的应用程序</span>
http://localhost:4200
<span class="token comment"># 或</span>
http://127.0.0.1:4200
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,41),r=[s];function l(c,t){return i(),n("div",null,r)}const h=e(d,[["render",l],["__file","3_networking_basics.html.vue"]]);export{h as default};
