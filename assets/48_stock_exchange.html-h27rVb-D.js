import{_ as o,r as a,o as l,c as d,b as i,d as e,e as n,w as c,a as t}from"./app-53EDpe6z.js";const h="/assets/system-design-425-yQlHZPuw.png",u="/assets/system-design-426-uTL_zlZ9.png",p="/assets/system-design-427-__Vpj1WO.png",m="/assets/system-design-428-eZX9mTVJ.png",g="/assets/system-design-429-p5xGYaG8.png",f="/assets/system-design-430-ucT9RGmJ.png",b="/assets/system-design-431-1SY0pu0Y.png",v="/assets/system-design-432-iy1PhFri.png",y="/assets/system-design-433-nfY4R0bo.png",k="/assets/system-design-434-0CQB2wdn.png",w="/assets/system-design-435-ijj7tkTA.png",x="/assets/system-design-436-Jd-Vmj4b.png",_="/assets/system-design-437-zTZwpf2R.png",T="/assets/system-design-438-b6eKC21e.png",S="/assets/system-design-439-wycHyFv_.png",I="/assets/system-design-440-9fYVYGWS.png",C="/assets/system-design-441-aB5tKAPb.png",E="/assets/system-design-442-bFhTaYnl.png",q="/assets/system-design-443-xdbTlPc1.png",O="/assets/system-design-444-kZdwb1V1.png",L="/assets/system-design-445-TVm9Q_aD.png",D="/assets/system-design-446-haRftsnV.png",P="/assets/system-design-447-rEg2XmWu.png",z="/assets/system-design-448-WP95MH4U.png",B={},R=t('<h1 id="stock-exchange" tabindex="-1"><a class="header-anchor" href="#stock-exchange" aria-hidden="true">#</a> Stock Exchange</h1><p>We&#39;ll design an electronic stock exchange in this chapter.</p><p>Its basic function is to efficiently match buyers and sellers.</p><p>Major stock exchanges are NYSE, NASDAQ, among others.</p><figure><img src="'+h+'" alt="world-stock-exchanges" tabindex="0" loading="lazy"><figcaption>world-stock-exchanges</figcaption></figure><h2 id="step-1-understand-the-problem-and-establish-design-scope" tabindex="-1"><a class="header-anchor" href="#step-1-understand-the-problem-and-establish-design-scope" aria-hidden="true">#</a> Step 1 - Understand the Problem and Establish Design scope</h2><ul><li>C: Which securities are we going to trade? Stocks, options or futures?</li><li>I: Only stocks for simplicity</li><li>C: Which order types are supported - place, cancel, replace? What about limit, market, conditional orders?</li><li>I: We need to support placing and canceling an order. We need to only consider limit orders for the order type.</li><li>C: Does the system need to support after hours trading?</li><li>I: No, just normal trading hours</li><li>C: Could you describe the exchange&#39;s basic functions?</li><li>I: Clients can place or cancel limit orders and receive matched trades in real-time. They should be able to see the order book in real time.</li><li>C: What&#39;s the scale of the exchange?</li><li>I: Tens of thousands of users trading at the same time and ~100 symbols. Billions of orders per day. We need to also support risk checks for compliance.</li><li>C: What kind of risk checks?</li><li>I: Let&#39;s do simple risk checks - eg limiting a user to trade only 1mil apple stocks in a day</li><li>C: How about user wallet engagement?</li><li>I: We need to ensure clients have sufficient funds before placing orders. Funds meant for pending orders need to be withheld until order is finalized.</li></ul><h3 id="non-functional-requirements" tabindex="-1"><a class="header-anchor" href="#non-functional-requirements" aria-hidden="true">#</a> Non-functional requirements</h3><p>The scale mentioned by the interviewer hints that we are to design a small to medium scale exchange. We need to also ensure flexibility to support more symbols and users in the future.</p><p>Other non-functional requirements:</p><ul><li>Availability - At least 99.99%. Downtime can harm reputation</li><li>Fault tolerance - fault tolerance and a fast recovery mechanism are needed to limit the impact of a production incident</li><li>Latency - Round-trip latency should be in the ms level with focus on 99th percentile. Persistently high 99p latency causes bad experience for a handful or users.</li><li>Security - We should have an account management system. For legal compliance, we need to support KYC to verify user identity. We should also protect against DDoS for public resources.</li></ul><h3 id="back-of-the-envelope-estimation" tabindex="-1"><a class="header-anchor" href="#back-of-the-envelope-estimation" aria-hidden="true">#</a> Back-of-the-envelope estimation</h3><ul><li>100 symbols, 1bil orders per day</li><li>Normal trading hours are from 09:30 to 16:00 (6.5h)</li><li>QPS = 1bil / 6.5 / 3600 = 43000</li><li>Peak QPS = 5*QPS = 215000</li><li>Trading volume is significantly higher when the market opens</li></ul><h2 id="step-2-propose-high-level-design-and-get-buy-in" tabindex="-1"><a class="header-anchor" href="#step-2-propose-high-level-design-and-get-buy-in" aria-hidden="true">#</a> Step 2 - Propose High-Level Design and Get Buy-In</h2><h3 id="business-knowledge-101" tabindex="-1"><a class="header-anchor" href="#business-knowledge-101" aria-hidden="true">#</a> Business Knowledge 101</h3><p>Let&#39;s discuss some basic concepts, related to an exchange.</p><p>A broker mediates interactions between an exchange and end users - Robinhood, Fidelity, etc.</p><p>Institutional clients trade in large quantities using specialized trading software. They need specialized treatment. Eg order splitting when trading in large volumes to avoid impacting the market.</p><p>Types of orders:</p><ul><li>Limit - buy or sell at a fixed price. It might not find a match immediately or it might be partially matched.</li><li>Market - doesn&#39;t specify a price. Executed at the current market price immediately.</li></ul><p>Prices:</p><ul><li>Bid - highest price a buyer is willing to buy a stock</li><li>Ask - lowest price a seller is willing to sell a stock</li></ul><p>The US market has three tiers of price quotes - L1, L2, L3.</p><p>L1 market data contains best bid/ask prices and quantities:</p><figure><img src="'+u+'" alt="l1-price" tabindex="0" loading="lazy"><figcaption>l1-price</figcaption></figure><p>L2 includes more price levels:</p><figure><img src="'+p+'" alt="l2-price" tabindex="0" loading="lazy"><figcaption>l2-price</figcaption></figure><p>L3 shows levels and queued quantity at each level:</p><figure><img src="'+m+'" alt="l3-price" tabindex="0" loading="lazy"><figcaption>l3-price</figcaption></figure><p>A candlestick shows the market open and close price, as well as the highest and lowest prices in the given interval:</p><figure><img src="'+g+`" alt="candlestick" tabindex="0" loading="lazy"><figcaption>candlestick</figcaption></figure><p>FIX is a protocol for exchanging securities transaction information, used by most vendors. Example securities transaction:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>8=FIX.4.2 | 9=176 | 35=8 | 49=PHLX | 56=PERS | 52=20071123-05:30:00.000 | 11=ATOMNOCCC9990900 | 20=3 | 150=E | 39=E | 55=MSFT | 167=CS | 54=1 | 38=15 | 40=2 | 44=15 | 58=PHLX EQUITY TESTING | 59=0 | 47=C | 32=0 | 31=0 | 151=15 | 14=0 | 6=0 | 10=128 |
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="high-level-design" tabindex="-1"><a class="header-anchor" href="#high-level-design" aria-hidden="true">#</a> High-level design</h3><figure><img src="`+f+'" alt="high-level-design" tabindex="0" loading="lazy"><figcaption>high-level-design</figcaption></figure><p>Trade flow:</p><ul><li>Client places order via trading interface</li><li>Broker sends the order to the exchange</li><li>Order enters exchange through client gateway, which validates, rate limits, authenticates, etc. Order is forwarded to order manager.</li><li>Order manager performs risk checks based on rules set by the risk manager</li><li>After passing risk checks, order manager verifies there are sufficient funds in the wallet for the order</li><li>Order is sent to matching engine. When match is found, matching engine emits two executions (called fills) for buy and sell. Both orders are sequenced so that they&#39;re deterministic.</li><li>Executions are returned to the client.</li></ul><p>Market data flow (M1-M3):</p><ul><li>matching engine generates a stream of executions, sent to the market data publisher</li><li>Market data publisher constructs the candlestick charts and sends them to the data service</li><li>Market data is stored in specialized storage for real-time analytics. Brokers connect to the data service for timely market data.</li></ul><p>Reporter flow (R1-R2):</p><ul><li>reporter collects all necessary reporting fields from orders and executions and writes them to DB</li><li>reporting fields - client_id, price, quantity, order_type, filled_quantity, remaining_quantity</li></ul><p>Trading flow is on the critical path, whereas the rest of the flows are not, hence, latency requirements differ between them.</p><h3 id="trading-flow" tabindex="-1"><a class="header-anchor" href="#trading-flow" aria-hidden="true">#</a> Trading flow</h3><p>The trading flow is on the critical path, hence, it should be highly optimized for low latency.</p><p>The matching engine is at its heart, also called the cross engine. Primary responsibilities:</p><ul><li>Maintain the order book for each symbol - a list of buy/sell orders for a symbol.</li><li>Match buy and sell orders - a match results in two executions (fills), with one each for the buy and sell sides. This function must be fast and accurate</li><li>Distribute the execution stream as market data</li><li>Matches must be produced in a deterministic order. Foundational for high availability</li></ul><p>Next is the sequencer - it is the key component making the matching engine deterministic by stamping each inbound order and outbound fill with a sequence ID.</p><figure><img src="'+b+'" alt="sequencer" tabindex="0" loading="lazy"><figcaption>sequencer</figcaption></figure><p>We stamp inbound orders and outbound fills for several reasons:</p><ul><li>timeliness and fairness</li><li>fast recovery/replay</li><li>exactly-once guarantee</li></ul><p>Conceptually, we could use Kafka as our sequencer since it&#39;s effectively an inbound and outbound message queue. However, we&#39;re going to implement it ourselves in order to achieve lower latency.</p><p>The order manager manages the orders state. It also interacts with the matching engine - sending orders and receiving fills.</p><p>The order manager&#39;s responsibilities:</p><ul><li>Sends orders for risk checks - eg verifying user&#39;s trade volume is less than 1mil</li><li>Checks the order against the user wallet and verifies there are sufficient funds to execute it</li><li>It sends the order to the sequencer and on to the matching engine. To reduce bandwidth, only necessary order information is passed to the matching engine</li><li>Executions (fills) are received back from the sequencer, where they are then send to the brokers via the client gateway</li></ul><p>The main challenge with implementing the order manager is the state transition management. Event sourcing is one viable solution (discussed in deep dive).</p><p>Finally, the client gateway receives orders from users and sends them to the order manager. Its responsibilities:</p><figure><img src="'+v+'" alt="client-gateway" tabindex="0" loading="lazy"><figcaption>client-gateway</figcaption></figure><p>Since the client gateway is on the critical path, it should stay lightweight.</p><p>There can be multiple client gateways for different clients. Eg a colo engine is a trading engine server, rented by the broker in the exchange&#39;s data center:</p><figure><img src="'+y+'" alt="client-gateways" tabindex="0" loading="lazy"><figcaption>client-gateways</figcaption></figure><h3 id="market-data-flow" tabindex="-1"><a class="header-anchor" href="#market-data-flow" aria-hidden="true">#</a> Market data flow</h3><p>The market data publisher receives executions from the matching engine and builds the order book/candlestick charts from the execution stream.</p><p>That data is sent to the data service, which is responsible for showing the aggregated data to subscribers:</p><figure><img src="'+k+'" alt="market-data" tabindex="0" loading="lazy"><figcaption>market-data</figcaption></figure><h3 id="reporting-flow" tabindex="-1"><a class="header-anchor" href="#reporting-flow" aria-hidden="true">#</a> Reporting flow</h3><p>The reporter is not on the critical path, but it is an important component nevertheless.</p><figure><img src="'+w+`" alt="reporting-flow" tabindex="0" loading="lazy"><figcaption>reporting-flow</figcaption></figure><p>It is responsible for trading history, tax reporting, compliance reporting, settlements, etc. Latency is not a critical requirement for the reporting flow. Accuracy and compliance are more important.</p><h3 id="api-design" tabindex="-1"><a class="header-anchor" href="#api-design" aria-hidden="true">#</a> API Design</h3><p>Clients interact with the stock exchange via the brokers to place orders, view executions, market data, download historical data for analysis, etc.</p><p>We use a RESTful API for communication between the client gateway and the brokers.</p><p>For institutional clients, a proprietary protocol is used to satisfy their low-latency requirements.</p><p>Create order:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST /v1/order
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Parameters:</p><ul><li>symbol - the stock symbol. String</li><li>side - buy or sell. String</li><li>price - the price of the limit order. Long</li><li>orderType - limit or market (we only support limit orders in our design). String</li><li>quantity - the quantity of the order. Long</li></ul><p>Response:</p><ul><li>id - the ID of the order. Long</li><li>creationTime - the system creation time of the order. Long</li><li>filledQuantity - the quantity that has been successfully executed. Long</li><li>remainingQuantity - the quantity still to be executed. Long</li><li>status - new/canceled/filled. String</li><li>rest of the attributes are the same as the input parameters</li></ul><p>Get execution:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /execution?symbol={:symbol}&amp;orderId={:orderId}&amp;startTime={:startTime}&amp;endTime={:endTime}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Parameters:</p><ul><li>symbol - the stock symbol. String</li><li>orderId - the ID of the order. Optional. String</li><li>startTime - query start time in epoch [11]. Long</li><li>endTime - query end time in epoch. Long</li></ul><p>Response:</p><ul><li>executions - array with each execution in scope (see attributes below). Array</li><li>id - the ID of the execution. Long</li><li>orderId - the ID of the order. Long</li><li>symbol - the stock symbol. String</li><li>side - buy or sell. String</li><li>price - the price of the execution. Long</li><li>orderType - limit or market. String</li><li>quantity - the filled quantity. Long</li></ul><p>Get order book:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /marketdata/orderBook/L2?symbol={:symbol}&amp;depth={:depth}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Parameters:</p><ul><li>symbol - the stock symbol. String</li><li>depth - order book depth per side. Int</li></ul><p>Response:</p><ul><li>bids - array with price and size. Array</li><li>asks - array with price and size. Array</li></ul><p>get candlesticks:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /marketdata/candles?symbol={:symbol}&amp;resolution={:resolution}&amp;startTime={:startTime}&amp;endTime={:endTime}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Parameters:</p><ul><li>symbol - the stock symbol. String</li><li>resolution - window length of the candlestick chart in seconds. Long</li><li>startTime - start time of the window in epoch. Long</li><li>endTime - end time of the window in epoch. Long</li></ul><p>Response:</p><ul><li>candles - array with each candlestick data (attributes listed below). Array</li><li>open - open price of each candlestick. Double</li><li>close - close price of each candlestick. Double</li><li>high - high price of each candlestick. Double</li><li>low - low price of each candlestick. Double</li></ul><h3 id="data-models" tabindex="-1"><a class="header-anchor" href="#data-models" aria-hidden="true">#</a> Data models</h3><p>There are three main types of data in our exchange:</p><ul><li>Product, order, execution</li><li>order book</li><li>candlestick chart</li></ul><h3 id="product-order-execution" tabindex="-1"><a class="header-anchor" href="#product-order-execution" aria-hidden="true">#</a> Product, order, execution</h3><p>Products describe the attributes of a traded symbol - product type, trading symbol, UI display symbol, etc.</p><p>This data doesn&#39;t change frequently, it is primarily used for rendering in a UI.</p><p>An order represents an instruction for a buy/sell order. Executions are outbound matched result.</p><p>Here&#39;s the data model:</p><figure><img src="`+x+'" alt="product-order-execution-data-model" tabindex="0" loading="lazy"><figcaption>product-order-execution-data-model</figcaption></figure><p>We encounter orders and executions in all of our three flows:</p><ul><li>in the critical path, they are processed in-memory for high performance. They are stored and recovered from the sequencer.</li><li>The reporter writes orders and executions to the database for reporting use-cases</li><li>Executions are forwarded to market data to reconstruct the order book and candlestick chart</li></ul><h3 id="order-book" tabindex="-1"><a class="header-anchor" href="#order-book" aria-hidden="true">#</a> Order book</h3><p>The order book is a list of buy/sell orders for an instrument, organized by price level.</p><p>An efficient data structure for this model, needs to satisfy:</p><ul><li>constant lookup time - getting volume at price level or between price levels</li><li>fast add/execute/cancel operations</li><li>query best bid/ask price</li><li>iterate through price levels</li></ul><p>Example order book execution:</p><figure><img src="'+_+`" alt="order-book-execution" tabindex="0" loading="lazy"><figcaption>order-book-execution</figcaption></figure><p>After fulfilling this large order, the price increases as the bid/ask spread widens.</p><p>Example order book implementation in pseudo code:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class PriceLevel{
    private Price limitPrice;
    private long totalVolume;
    private List&lt;Order&gt; orders;
}

class Book&lt;Side&gt; {
    private Side side;
    private Map&lt;Price, PriceLevel&gt; limitMap;
}

class OrderBook {
    private Book&lt;Buy&gt; buyBook;
    private Book&lt;Sell&gt; sellBook;
    private PriceLevel bestBid;
    private PriceLevel bestOffer;
    private Map&lt;OrderID, Order&gt; orderMap;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>For a more efficient implementation, we can use a doubly-linked list instead of a standard list:</p><ul><li>Placing a new order is O(1), because we&#39;re adding an order to the tail of the list.</li><li>Matching an order is O(1), because we are deleting an order from the head</li><li>Canceling an order means deleting an order from the order book. We utilize<code>orderMap</code>for O(1) lookup and O(1) delete (due to the<code>Order</code>having a reference to the previous element in the list).</li></ul><figure><img src="`+T+`" alt="order-book-impl" tabindex="0" loading="lazy"><figcaption>order-book-impl</figcaption></figure><p>This data structure is also used in the market data services to reconstruct the order book.</p><h3 id="candlestick-chart" tabindex="-1"><a class="header-anchor" href="#candlestick-chart" aria-hidden="true">#</a> Candlestick chart</h3><p>The candlestick data is calcualated within the market data services based on processing orders in a time interval:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Candlestick {
    private long openPrice;
    private long closePrice;
    private long highPrice;
    private long lowPrice;
    private long volume;
    private long timestamp;
    private int interval;
}

class CandlestickChart {
    private LinkedList&lt;Candlestick&gt; sticks;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Some optimizations to avoid consuming too much memory:</p><ul><li>Use pre-allocated ring buffers to hold sticks to reduce the allocation number</li><li>Limit the number of sticks in memory and persist the rest to disk</li></ul><p>We&#39;ll use an in-memory columnar database (eg KDB) for real-time analytics. After market close, data is persisted in historical database.</p><h2 id="step-3-design-deep-dive" tabindex="-1"><a class="header-anchor" href="#step-3-design-deep-dive" aria-hidden="true">#</a> Step 3 - Design Deep Dive</h2><p>One interesting thing to be aware of about modern exchanges is that unlike most other software, they typically run everything on one gigantic server.</p><p>Let&#39;s explore the details.</p><h3 id="performance" tabindex="-1"><a class="header-anchor" href="#performance" aria-hidden="true">#</a> Performance</h3><p>For an exchange, it is very important to have good overall latency for all percentiles.</p><p>How can we reduce latency?</p><ul><li>Reduce the number of tasks on the critical path</li><li>Shorten the time spent on each task by reducing network/disk usage and/or reducing task execution time</li></ul><p>To achieve the first goal, we&#39;re stripped the critical path from all extraneous responsibility, even logging is removed to achieve optimal latency.</p><p>If we follow the original design, there are several bottlenecks - network latency between services and disk usage of the sequencer.</p><p>With such a design we can achieve tens of milliseconds end to end latency. We want to achieve tens of microseconds instead.</p><p>Hence, we&#39;ll put everything on one server and processes are going to communicate via mmap as an event store:</p><figure><img src="`+S+'" alt="mmap-bus" tabindex="0" loading="lazy"><figcaption>mmap-bus</figcaption></figure><p>Another optimization is using an application loop (while loop executing mission-critical tasks), pinned to the same CPU to avoid context switching:</p><figure><img src="'+I+'" alt="application-loop" tabindex="0" loading="lazy"><figcaption>application-loop</figcaption></figure><p>Another side effect of using an application loop is that there is no lock contention - multiple threads fighting for the same resource.</p><p>Let&#39;s now explore how mmap works - it is a UNIX syscall, which maps a file on disk to an application&#39;s memory.</p><p>One trick we can use is creating the file in<code>/dev/shm</code>, which stands for &quot;shared memory&quot;. Hence, we have no disk access at all.</p><h3 id="event-sourcing" tabindex="-1"><a class="header-anchor" href="#event-sourcing" aria-hidden="true">#</a> Event sourcing</h3>',144),A=t('<p>In a nutshell, instead of storing current states, we store immutable state transitions:</p><figure><img src="'+C+'" alt="event-sourcing" tabindex="0" loading="lazy"><figcaption>event-sourcing</figcaption></figure><ul><li>On the left - traditional schema</li><li>On the right - event source schema</li></ul><p>Here&#39;s how our design looks like thus far:</p><figure><img src="'+E+'" alt="design-so-far" tabindex="0" loading="lazy"><figcaption>design-so-far</figcaption></figure><ul><li>external domain interacts with our client gateway using the FIX protocol</li><li>Order manager receives the new order event, validates it and adds it to its internal state. Order is then sent to matching core</li><li>If order is matched, the<code>OrderFilledEvent</code>is generated and sent over mmap</li><li>Other components subscribe to the event store and do their part of the processing</li></ul><p>One additional optimizations - all components hold a copy of the order manager, which is packaged as a library to avoid extra calls for managing orders</p><p>The sequencer in this design, changes to not be an event store, but be a single writer, sequencing events before forwarding them to the event store:</p><figure><img src="'+q+'" alt="sequencer-deep-dive" tabindex="0" loading="lazy"><figcaption>sequencer-deep-dive</figcaption></figure><h3 id="high-availability" tabindex="-1"><a class="header-anchor" href="#high-availability" aria-hidden="true">#</a> High availability</h3><p>We aim for 99.99% availability - only 8.64s of downtime per day.</p><p>To achieve that, we have to identify single-point-of-failures in the exchange architecture:</p><ul><li>setup backup instances of critical services (eg matching engine) which are on stand-by</li><li>aggressively automate failure detection and failover to the backup instance</li></ul><p>Stateless services such as the client gateway can easily be horizontally scaled by adding more servers.</p><p>For stateful components, we can process inbound events, but not publish outbound events if we&#39;re not the leader:</p><figure><img src="'+O+'" alt="leader-election" tabindex="0" loading="lazy"><figcaption>leader-election</figcaption></figure><p>To detect the primary replica being down, we can send heartbeats to detect that its non-functional.</p><p>This mechanism only works within the boundary of a single server. If we want to extend it, we can setup an entire server as hot/warm replica and failover in case of failure.</p><p>To replicate the event store across the replicas, we can use reliable UDP for faster communication.</p><h3 id="fault-tolerance" tabindex="-1"><a class="header-anchor" href="#fault-tolerance" aria-hidden="true">#</a> Fault tolerance</h3><p>What if even the warm instances go down? It is a low probability event but we should be ready for it.</p><p>Large tech companies tackle this problem by replicating core data to data centers in multiple cities to mitigate eg natural disasters.</p><p>Questions to consider:</p><ul><li>If the primary instance is down, how and when do we failover to the backup instance?</li><li>How do we choose the leader among the backup instances?</li><li>What is the recovery time needed (RTO - recovery time objective)?</li><li>What functionalities need to be recovered? Can our system operate under degraded conditions?</li></ul><p>How to address these:</p><ul><li>System can be down due to a bug (affecting primary and replicas), we can use chaos engineering to surface edge-cases and disastrous outcomes like these</li><li>Initially though, we could perform failovers manually until we gather sufficient knowledge about the system&#39;s failure modes</li><li>leader-election can be used (eg Raft) to determine which replica becomes the leader in the event of the primary going down</li></ul><p>Example of how replication works across different servers:</p><figure><img src="'+L+'" alt="replication-across-servers" tabindex="0" loading="lazy"><figcaption>replication-across-servers</figcaption></figure><p>Example leader-election terms:</p><figure><img src="'+D+'" alt="leader-election-terms" tabindex="0" loading="lazy"><figcaption>leader-election-terms</figcaption></figure>',30),W={href:"https://thesecretlivesofdata.com/raft/",target:"_blank",rel:"noopener noreferrer"},M=t(`<p>Finally, we need to also consider loss tolerance - how much data can we lose before things get critical? This will determine how often we backup our data.</p><p>For a stock exchange, data loss is unacceptable, so we have to backup data often and rely on raft&#39;s replication to reduce probability of data loss.</p><h3 id="matching-algorithms" tabindex="-1"><a class="header-anchor" href="#matching-algorithms" aria-hidden="true">#</a> Matching algorithms</h3><p>Slight detour on how matching works via pseudo code:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Context handleOrder(OrderBook orderBook, OrderEvent orderEvent) {
    if (orderEvent.getSequenceId() != nextSequence) {
        return Error(OUT_OF_ORDER, nextSequence);
    }

    if (!validateOrder(symbol, price, quantity)) {
        return ERROR(INVALID_ORDER, orderEvent);
    }

    Order order = createOrderFromEvent(orderEvent);
    switch (msgType):
        case NEW:
            return handleNew(orderBook, order);
        case CANCEL:
            return handleCancel(orderBook, order);
        default:
            return ERROR(INVALID_MSG_TYPE, msgType);

}

Context handleNew(OrderBook orderBook, Order order) {
    if (BUY.equals(order.side)) {
        return match(orderBook.sellBook, order);
    } else {
        return match(orderBook.buyBook, order);
    }
}

Context handleCancel(OrderBook orderBook, Order order) {
    if (!orderBook.orderMap.contains(order.orderId)) {
        return ERROR(CANNOT_CANCEL_ALREADY_MATCHED, order);
    }

    removeOrder(order);
    setOrderStatus(order, CANCELED);
    return SUCCESS(CANCEL_SUCCESS, order);
}

Context match(OrderBook book, Order order) {
    Quantity leavesQuantity = order.quantity - order.matchedQuantity;
    Iterator&lt;Order&gt; limitIter = book.limitMap.get(order.price).orders;
    while (limitIter.hasNext() &amp;&amp; leavesQuantity &gt; 0) {
        Quantity matched = min(limitIter.next.quantity, order.quantity);
        order.matchedQuantity += matched;
        leavesQuantity = order.quantity - order.matchedQuantity;
        remove(limitIter.next);
        generateMatchedFill();
    }
    return SUCCESS(MATCH_SUCCESS, order);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This matching algorithm uses the FIFO algorithm for determining which orders at a price level to match.</p><h3 id="determinism" tabindex="-1"><a class="header-anchor" href="#determinism" aria-hidden="true">#</a> Determinism</h3><p>Functional determinism is guaranteed via the sequencer technique we used.</p><p>The actual time when the event happens doesn&#39;t matter:</p><figure><img src="`+P+'" alt="determinism" tabindex="0" loading="lazy"><figcaption>determinism</figcaption></figure><p>Latency determinism is something we have to track. We can calculate it based on monitoring 99 or 99.99 percentile latency.</p><p>Things which can cause latency spikes are garbage collector events in eg Java.</p><h3 id="market-data-publisher-optimizations" tabindex="-1"><a class="header-anchor" href="#market-data-publisher-optimizations" aria-hidden="true">#</a> Market data publisher optimizations</h3><p>The market data publisher receives matched results from the matching engine and rebuilds the order book and candlestick charts based on them.</p><p>We only keep part of the candlesticks as we don&#39;t have infinite memory. Clients can choose how much granular info they want. More granular info might require a higher price:</p><figure><img src="'+z+'" alt="market-data-publisher" tabindex="0" loading="lazy"><figcaption>market-data-publisher</figcaption></figure><p>A ring buffer (aka circular buffer) is a fixed-size queue with the head connected to the tail. The space is preallocated to avoid allocations. The data structure is also lock-free.</p><p>Another technique to optimize the ring buffer is padding, which ensures the sequence number is never in a cache line with anything else.</p><h3 id="distribution-fairness-of-market-data-and-multicast" tabindex="-1"><a class="header-anchor" href="#distribution-fairness-of-market-data-and-multicast" aria-hidden="true">#</a> Distribution fairness of market data and multicast</h3><p>We need to ensure subscribers receive the data at the same time since if one receives data before another, that gives them crucial market insight, which they can use to manipulate the market.</p><p>To achieve this, we can use multicast using reliable UDP when publishing data to subscribers.</p><p>Data can be transported via the internet in three ways:</p><ul><li>Unicast - one source, one destination</li><li>Broadcast - one source to entire subnetwork</li><li>Multicast - one source to a set of hosts on different subnetworks</li></ul><p>In theory, by using multicast, all subscribers should receive the data at the same time.</p><p>UDP, however, is unreliable and the data might not reach everyone. It can be enhanced with retransmissions, however.</p><h3 id="colocation" tabindex="-1"><a class="header-anchor" href="#colocation" aria-hidden="true">#</a> Colocation</h3><p>Exchanges offer brokers the ability to colocate their servers in the same data center as the exchange.</p><p>This reduces the latency drastically and can be considered a VIP service.</p><h3 id="network-security" tabindex="-1"><a class="header-anchor" href="#network-security" aria-hidden="true">#</a> Network Security</h3><p>DDoS is a challenge for exchanges as there are some internet-facing services. Here&#39;s our options:</p><ul><li>Isolate public services and data from private services, so DDoS attacks don&#39;t impact the most important clients</li><li>Use a caching layer to store data which is infrequently updated</li><li>Harden URLs against DDoS, eg prefer<code>https://my.website.com/data/recent</code>vs.<code>https://my.website.com/data?from=123&amp;to=456</code>, because the former is more cacheable</li><li>Effective allowlist/blocklist mechanism is needed.</li><li>Rate limiting can be used to mitigate DDoS</li></ul><h2 id="step-4-wrap-up" tabindex="-1"><a class="header-anchor" href="#step-4-wrap-up" aria-hidden="true">#</a> Step 4 - Wrap Up</h2><p>Other interesting notes:</p><ul><li>not all exchanges rely on putting everything on one big server, but some still do</li><li>modern exchanges rely more on cloud infrastructure and also on automatic market makers (AMM) to avoid maintaining an order book</li></ul>',34);function F(N,U){const r=a("RouterLink"),s=a("ExternalLinkIcon");return l(),d("div",null,[R,i("p",null,[e("Event sourcing is discussed in-depth in the"),n(r,{to:"/system-design/47_digital_wallet.html"},{default:c(()=>[e("digital wallet chapter")]),_:1}),e(". Reference it for all the details.")]),A,i("p",null,[e("For details on how Raft works,"),i("a",W,[e("check this out"),n(s)])]),M])}const Q=o(B,[["render",F],["__file","48_stock_exchange.html.vue"]]);export{Q as default};