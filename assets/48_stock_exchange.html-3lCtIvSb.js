const e=JSON.parse(`{"key":"v-39a28884","path":"/system-design/48_stock_exchange.html","title":"Stock Exchange","lang":"zh-CN","frontmatter":{"description":"Stock Exchange We'll design an electronic stock exchange in this chapter. Its basic function is to efficiently match buyers and sellers.","head":[["meta",{"property":"og:url","content":"https://2xiao.github.io/system-design/48_stock_exchange.html"}],["meta",{"property":"og:site_name","content":"LeetCode-JS"}],["meta",{"property":"og:title","content":"Stock Exchange"}],["meta",{"property":"og:description","content":"Stock Exchange We'll design an electronic stock exchange in this chapter. Its basic function is to efficiently match buyers and sellers."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-03T15:22:59.000Z"}],["meta",{"property":"article:author","content":"2xiao"}],["meta",{"property":"article:modified_time","content":"2024-12-03T15:22:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Stock Exchange\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-03T15:22:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"2xiao\\",\\"url\\":\\"https://github.com/2xiao\\"}]}"]]},"headers":[{"level":2,"title":"Step 1 - Understand the Problem and Establish Design scope","slug":"step-1-understand-the-problem-and-establish-design-scope","link":"#step-1-understand-the-problem-and-establish-design-scope","children":[{"level":3,"title":"Non-functional requirements","slug":"non-functional-requirements","link":"#non-functional-requirements","children":[]},{"level":3,"title":"Back-of-the-envelope estimation","slug":"back-of-the-envelope-estimation","link":"#back-of-the-envelope-estimation","children":[]}]},{"level":2,"title":"Step 2 - Propose High-Level Design and Get Buy-In","slug":"step-2-propose-high-level-design-and-get-buy-in","link":"#step-2-propose-high-level-design-and-get-buy-in","children":[{"level":3,"title":"Business Knowledge 101","slug":"business-knowledge-101","link":"#business-knowledge-101","children":[]},{"level":3,"title":"High-level design","slug":"high-level-design","link":"#high-level-design","children":[]},{"level":3,"title":"Trading flow","slug":"trading-flow","link":"#trading-flow","children":[]},{"level":3,"title":"Market data flow","slug":"market-data-flow","link":"#market-data-flow","children":[]},{"level":3,"title":"Reporting flow","slug":"reporting-flow","link":"#reporting-flow","children":[]},{"level":3,"title":"API Design","slug":"api-design","link":"#api-design","children":[]},{"level":3,"title":"Data models","slug":"data-models","link":"#data-models","children":[]},{"level":3,"title":"Product, order, execution","slug":"product-order-execution","link":"#product-order-execution","children":[]},{"level":3,"title":"Order book","slug":"order-book","link":"#order-book","children":[]},{"level":3,"title":"Candlestick chart","slug":"candlestick-chart","link":"#candlestick-chart","children":[]}]},{"level":2,"title":"Step 3 - Design Deep Dive","slug":"step-3-design-deep-dive","link":"#step-3-design-deep-dive","children":[{"level":3,"title":"Performance","slug":"performance","link":"#performance","children":[]},{"level":3,"title":"Event sourcing","slug":"event-sourcing","link":"#event-sourcing","children":[]},{"level":3,"title":"High availability","slug":"high-availability","link":"#high-availability","children":[]},{"level":3,"title":"Fault tolerance","slug":"fault-tolerance","link":"#fault-tolerance","children":[]},{"level":3,"title":"Matching algorithms","slug":"matching-algorithms","link":"#matching-algorithms","children":[]},{"level":3,"title":"Determinism","slug":"determinism","link":"#determinism","children":[]},{"level":3,"title":"Market data publisher optimizations","slug":"market-data-publisher-optimizations","link":"#market-data-publisher-optimizations","children":[]},{"level":3,"title":"Distribution fairness of market data and multicast","slug":"distribution-fairness-of-market-data-and-multicast","link":"#distribution-fairness-of-market-data-and-multicast","children":[]},{"level":3,"title":"Colocation","slug":"colocation","link":"#colocation","children":[]},{"level":3,"title":"Network Security","slug":"network-security","link":"#network-security","children":[]}]},{"level":2,"title":"Step 4 - Wrap Up","slug":"step-4-wrap-up","link":"#step-4-wrap-up","children":[]}],"git":{"createdTime":1733239379000,"updatedTime":1733239379000,"contributors":[{"name":"2xiao","email":"827574297wxxtb@sina.com","commits":1}]},"readingTime":{"minutes":12.18,"words":3655},"filePathRelative":"system-design/48_stock_exchange.md","localizedDate":"2024年12月3日","excerpt":"<h1> Stock Exchange</h1>\\n<p>We'll design an electronic stock exchange in this chapter.</p>\\n<p>Its basic function is to efficiently match buyers and sellers.</p>","autoDesc":true}`);export{e as data};