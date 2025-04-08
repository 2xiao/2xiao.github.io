import{_ as i,o as l,c as e,e as a}from"./app-TdisOlUP.js";const p={},h=a('<h1 id="说说-http-常见的状态码有哪些-适用场景" tabindex="-1"><a class="header-anchor" href="#说说-http-常见的状态码有哪些-适用场景" aria-hidden="true">#</a> 说说 HTTP 常见的状态码有哪些，适用场景？</h1><h2 id="一、是什么" tabindex="-1"><a class="header-anchor" href="#一、是什么" aria-hidden="true">#</a> 一、是什么</h2><p>HTTP 状态码（英语：HTTP Status Code），用以表示网页服务器超文本传输协议响应状态的 3 位数字代码</p><p>它由 RFC 2616 规范定义的，并得到 <code>RFC 2518</code>、<code>RFC 2817</code>、<code>RFC 2295</code>、<code>RFC 2774</code>与 <code>RFC 4918</code>等规范扩展</p><p>简单来讲，<code>http</code>状态码的作用是服务器告诉客户端当前请求响应的状态，通过状态码就能判断和分析服务器的运行状态</p><h2 id="二、分类" tabindex="-1"><a class="header-anchor" href="#二、分类" aria-hidden="true">#</a> 二、分类</h2><p>状态码第一位数字决定了不同的响应状态，有如下：</p><ul><li>1 表示消息</li><li>2 表示成功</li><li>3 表示重定向</li><li>4 表示请求错误</li><li>5 表示服务器错误</li></ul><h3 id="_1xx" tabindex="-1"><a class="header-anchor" href="#_1xx" aria-hidden="true">#</a> 1xx</h3><p>代表请求已被接受，需要继续处理。这类响应是临时响应，只包含状态行和某些可选的响应头信息，并以空行结束</p><p>常见的有：</p><ul><li>100（客户端继续发送请求，这是临时响应）：这个临时响应是用来通知客户端它的部分请求已经被服务器接收，且仍未被拒绝。客户端应当继续发送请求的剩余部分，或者如果请求已经完成，忽略这个响应。服务器必须在请求完成后向客户端发送一个最终响应</li><li>101：服务器根据客户端的请求切换协议，主要用于 websocket 或 http2 升级</li></ul><h3 id="_2xx" tabindex="-1"><a class="header-anchor" href="#_2xx" aria-hidden="true">#</a> 2xx</h3><p>代表请求已成功被服务器接收、理解、并接受</p><p>常见的有：</p><ul><li><p>200（成功）：请求已成功，请求所希望的响应头或数据体将随此响应返回</p></li><li><p>201（已创建）：请求成功并且服务器创建了新的资源</p></li><li><p>202（已创建）：服务器已经接收请求，但尚未处理</p></li><li><p>203（非授权信息）：服务器已成功处理请求，但返回的信息可能来自另一来源</p></li><li><p>204（无内容）：服务器成功处理请求，但没有返回任何内容</p></li><li><p>205（重置内容）：服务器成功处理请求，但没有返回任何内容</p></li><li><p>206（部分内容）：服务器成功处理了部分请求</p></li></ul><h3 id="_3xx" tabindex="-1"><a class="header-anchor" href="#_3xx" aria-hidden="true">#</a> 3xx</h3><p>表示要完成请求，需要进一步操作。 通常，这些状态代码用来重定向</p><p>常见的有：</p><ul><li><p>300（多种选择）：针对请求，服务器可执行多种操作。 服务器可根据请求者 (user agent) 选择一项操作，或提供操作列表供请求者选择</p></li><li><p>301（永久移动）：请求的网页已永久移动到新位置。 服务器返回此响应（对 GET 或 HEAD 请求的响应）时，会自动将请求者转到新位置</p></li><li><p>302（临时移动）： 服务器目前从不同位置的网页响应请求，但请求者应继续使用原有位置来进行以后的请求</p></li><li><p>303（查看其他位置）：请求者应当对不同的位置使用单独的 GET 请求来检索响应时，服务器返回此代码</p></li><li><p>305 （使用代理）： 请求者只能使用代理访问请求的网页。 如果服务器返回此响应，还表示请求者应使用代理</p></li><li><p>307 （临时重定向）： 服务器目前从不同位置的网页响应请求，但请求者应继续使用原有位置来进行以后的请求</p></li></ul><h3 id="_4xx" tabindex="-1"><a class="header-anchor" href="#_4xx" aria-hidden="true">#</a> 4xx</h3><p>代表了客户端看起来可能发生了错误，妨碍了服务器的处理</p><p>常见的有：</p><ul><li>400（错误请求）： 服务器不理解请求的语法</li><li>401（未授权）： 请求要求身份验证。 对于需要登录的网页，服务器可能返回此响应。</li><li>403（禁止）： 服务器拒绝请求</li><li>404（未找到）： 服务器找不到请求的网页</li><li>405（方法禁用）： 禁用请求中指定的方法</li><li>406（不接受）： 无法使用请求的内容特性响应请求的网页</li><li>407（需要代理授权）： 此状态代码与 401（未授权）类似，但指定请求者应当授权使用代理</li><li>408（请求超时）： 服务器等候请求时发生超时</li></ul><h3 id="_5xx" tabindex="-1"><a class="header-anchor" href="#_5xx" aria-hidden="true">#</a> 5xx</h3><p>表示服务器无法完成明显有效的请求。这类状态码代表了服务器在处理请求的过程中有错误或者异常状态发生</p><p>常见的有：</p><ul><li>500（服务器内部错误）：服务器遇到错误，无法完成请求</li><li>501（尚未实施）：服务器不具备完成请求的功能。 例如，服务器无法识别请求方法时可能会返回此代码</li><li>502（错误网关）： 服务器作为网关或代理，从上游服务器收到无效响应</li><li>503（服务不可用）： 服务器目前无法使用（由于超载或停机维护）</li><li>504（网关超时）： 服务器作为网关或代理，但是没有及时从上游服务器收到请求</li><li>505（HTTP 版本不受支持）： 服务器不支持请求中所用的 HTTP 协议版本</li></ul><h2 id="三、适用场景" tabindex="-1"><a class="header-anchor" href="#三、适用场景" aria-hidden="true">#</a> 三、适用场景</h2><p>下面给出一些状态码的适用场景：</p><ul><li><p>100：客户端在发送 POST 数据给服务器前，征询服务器情况，看服务器是否处理 POST 的数据，如果不处理，客户端则不上传 POST 数据，如果处理，则 POST 上传数据。常用于 POST 大数据传输</p></li><li><p>206：一般用来做断点续传，或者是视频文件等大文件的加载</p></li><li><p>301：永久重定向会缓存。新域名替换旧域名，旧的域名不再使用时，用户访问旧域名时用 301 就重定向到新的域名</p></li><li><p>302：临时重定向不会缓存，常用 于未登陆的用户访问用户中心重定向到登录页面</p></li><li><p>304：协商缓存，告诉客户端有缓存，直接使用缓存中的数据，返回页面的只有头部信息，是没有内容部分</p></li><li><p>400：参数有误，请求无法被服务器识别</p></li><li><p>403：告诉客户端进制访问该站点或者资源，如在外网环境下，然后访问只有内网 IP 才能访问的时候则返回</p></li><li><p>404：服务器找不到资源时，或者服务器拒绝请求又不想说明理由时</p></li><li><p>503：服务器停机维护时，主动用 503 响应请求或 nginx 设置限速，超过限速，会返回 503</p></li><li><p>504：网关超时</p></li></ul><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2><ul><li>https://zh.wikipedia.org/wiki/HTTP状态码</li><li>https://kebingzao.com/2018/10/05/http-status-code/</li><li>https://vue3js.cn/interview</li></ul>',33),d=[h];function t(r,c){return l(),e("div",null,d)}const s=i(p,[["render",t],["__file","status.html.vue"]]);export{s as default};
