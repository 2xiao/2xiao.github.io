const e=JSON.parse('{"key":"v-c79e1f36","path":"/system-design/34_design_youtube.html","title":"Design YouTube","lang":"zh-CN","frontmatter":{"description":"Design YouTube This chapter is about designing a video sharing platform such as youtube. Its solution can be applied to also eg designing Netflix, Hulu.","head":[["meta",{"property":"og:url","content":"https://2xiao.github.io/system-design/34_design_youtube.html"}],["meta",{"property":"og:site_name","content":"LeetCode-JS"}],["meta",{"property":"og:title","content":"Design YouTube"}],["meta",{"property":"og:description","content":"Design YouTube This chapter is about designing a video sharing platform such as youtube. Its solution can be applied to also eg designing Netflix, Hulu."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-03T15:22:59.000Z"}],["meta",{"property":"article:author","content":"2xiao"}],["meta",{"property":"article:modified_time","content":"2024-12-03T15:22:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Design YouTube\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-03T15:22:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"2xiao\\",\\"url\\":\\"https://github.com/2xiao\\"}]}"]]},"headers":[{"level":2,"title":"Step 1 - Understand the problem and establish design scope","slug":"step-1-understand-the-problem-and-establish-design-scope","link":"#step-1-understand-the-problem-and-establish-design-scope","children":[{"level":3,"title":"Back of the envelope estimation","slug":"back-of-the-envelope-estimation","link":"#back-of-the-envelope-estimation","children":[]}]},{"level":2,"title":"Step 2 - Propose high-level design and get buy-in","slug":"step-2-propose-high-level-design-and-get-buy-in","link":"#step-2-propose-high-level-design-and-get-buy-in","children":[{"level":3,"title":"Video uploading flow","slug":"video-uploading-flow","link":"#video-uploading-flow","children":[]},{"level":3,"title":"Video streaming flow","slug":"video-streaming-flow","link":"#video-streaming-flow","children":[]}]},{"level":2,"title":"Step 3 - Design deep dive","slug":"step-3-design-deep-dive","link":"#step-3-design-deep-dive","children":[{"level":3,"title":"Video transcoding","slug":"video-transcoding","link":"#video-transcoding","children":[]},{"level":3,"title":"Directed Acyclic Graph (DAG) model","slug":"directed-acyclic-graph-dag-model","link":"#directed-acyclic-graph-dag-model","children":[]},{"level":3,"title":"Video transcoding architecture","slug":"video-transcoding-architecture","link":"#video-transcoding-architecture","children":[]},{"level":3,"title":"Preprocessor","slug":"preprocessor","link":"#preprocessor","children":[]},{"level":3,"title":"DAG Scheduler","slug":"dag-scheduler","link":"#dag-scheduler","children":[]},{"level":3,"title":"Resource manager","slug":"resource-manager","link":"#resource-manager","children":[]},{"level":3,"title":"Task workers","slug":"task-workers","link":"#task-workers","children":[]},{"level":3,"title":"Temporary storage","slug":"temporary-storage","link":"#temporary-storage","children":[]},{"level":3,"title":"Encoded video","slug":"encoded-video","link":"#encoded-video","children":[]},{"level":3,"title":"System Optimizations","slug":"system-optimizations","link":"#system-optimizations","children":[]},{"level":3,"title":"Speed optimization - parallelize video uploading","slug":"speed-optimization-parallelize-video-uploading","link":"#speed-optimization-parallelize-video-uploading","children":[]},{"level":3,"title":"Speed optimization - place upload centers close to users","slug":"speed-optimization-place-upload-centers-close-to-users","link":"#speed-optimization-place-upload-centers-close-to-users","children":[]},{"level":3,"title":"Speed optimization - parallelism everywhere","slug":"speed-optimization-parallelism-everywhere","link":"#speed-optimization-parallelism-everywhere","children":[]},{"level":3,"title":"Safety optimization - pre-signed upload URL","slug":"safety-optimization-pre-signed-upload-url","link":"#safety-optimization-pre-signed-upload-url","children":[]},{"level":3,"title":"Safety optimization - protect your videos","slug":"safety-optimization-protect-your-videos","link":"#safety-optimization-protect-your-videos","children":[]},{"level":3,"title":"Cost-saving optimization","slug":"cost-saving-optimization","link":"#cost-saving-optimization","children":[]},{"level":3,"title":"Error Handling","slug":"error-handling","link":"#error-handling","children":[]}]},{"level":2,"title":"Step 4 - Wrap up","slug":"step-4-wrap-up","link":"#step-4-wrap-up","children":[]}],"git":{"createdTime":1733239379000,"updatedTime":1733239379000,"contributors":[{"name":"2xiao","email":"827574297wxxtb@sina.com","commits":1}]},"readingTime":{"minutes":6.74,"words":2021},"filePathRelative":"system-design/34_design_youtube.md","localizedDate":"2024年12月3日","excerpt":"<h1> Design YouTube</h1>\\n<p>This chapter is about designing a video sharing platform such as youtube. Its solution can be applied to also eg designing Netflix, Hulu.</p>","autoDesc":true}');export{e as data};