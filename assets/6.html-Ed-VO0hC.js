const e=JSON.parse('{"key":"v-1f772b74","path":"/my-vue/6.html","title":"6. Computed 实现原理","lang":"zh-CN","frontmatter":{"description":"6. Computed 实现原理 接受一个 getter 函数，并根据 getter 的返回值返回一个不可变的响应式 ref 对象。 计算属性的 getter 只有当取值时才会执行。 计算属性是具备缓存的，如果依赖的值不发生变化，不会重新执行 getter。 计算属性也是一个 effect，内部也具备依赖收集的功能。","head":[["meta",{"property":"og:url","content":"https://wangfuyou.com/my-vue/6.html"}],["meta",{"property":"og:site_name","content":"LeetCode-JS"}],["meta",{"property":"og:title","content":"6. Computed 实现原理"}],["meta",{"property":"og:description","content":"6. Computed 实现原理 接受一个 getter 函数，并根据 getter 的返回值返回一个不可变的响应式 ref 对象。 计算属性的 getter 只有当取值时才会执行。 计算属性是具备缓存的，如果依赖的值不发生变化，不会重新执行 getter。 计算属性也是一个 effect，内部也具备依赖收集的功能。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-18T09:50:23.000Z"}],["meta",{"property":"article:author","content":"2xiao"}],["meta",{"property":"article:modified_time","content":"2024-10-18T09:50:23.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"6. Computed 实现原理\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-18T09:50:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"2xiao\\",\\"url\\":\\"https://github.com/2xiao\\"}]}"]]},"headers":[{"level":2,"title":"1.增加 dirty 标识","slug":"_1-增加-dirty-标识","link":"#_1-增加-dirty-标识","children":[]},{"level":2,"title":"2.计算属性实现","slug":"_2-计算属性实现","link":"#_2-计算属性实现","children":[]}],"git":{"createdTime":1729245023000,"updatedTime":1729245023000,"contributors":[{"name":"2xiao","email":"827574297wxxtb@sina.com","commits":1}]},"readingTime":{"minutes":1.82,"words":545},"filePathRelative":"my-vue/6.md","localizedDate":"2024年10月18日","excerpt":"<h1> 6. Computed 实现原理</h1>\\n<p>接受一个 getter 函数，并根据 getter 的返回值返回一个不可变的响应式 ref 对象。</p>\\n<ul>\\n<li>计算属性的 getter 只有当取值时才会执行。</li>\\n<li>计算属性是具备缓存的，如果依赖的值不发生变化，不会重新执行 getter。</li>\\n<li>计算属性也是一个 effect，内部也具备依赖收集的功能。</li>\\n</ul>","autoDesc":true}');export{e as data};
