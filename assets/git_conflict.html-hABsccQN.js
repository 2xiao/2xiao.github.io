import{_ as e,o as t,c as i,a as c}from"./app-z-OzXc2F.js";const o="/assets/interview-git-1-C6Dbf4M-.png",a="/assets/interview-git-2-YxRXJjNv.png",d="/assets/interview-git-3-eokRiyuH.png",l="/assets/interview-git-4-g0I_ThZa.png",r="/assets/interview-git-5-GUvC3Nqx.png",g="/assets/interview-git-6-hDALbmLb.png",s="/assets/interview-git-7-MaqrScJB.png",n={},p=c('<h1 id="说说-git-发生冲突的场景-如何解决" tabindex="-1"><a class="header-anchor" href="#说说-git-发生冲突的场景-如何解决" aria-hidden="true">#</a> 说说 git 发生冲突的场景？如何解决？</h1><h2 id="一、是什么" tabindex="-1"><a class="header-anchor" href="#一、是什么" aria-hidden="true">#</a> 一、是什么</h2><p>一般情况下，出现分支的场景有如下：</p><ul><li>多个分支代码合并到一个分支时</li><li>多个分支向同一个远端分支推送</li></ul><p>具体情况就是，多个分支修改了同一个文件（任何地方）或者多个分支修改了同一个文件的名称</p><p>如果两个分支中分别修改了不同文件中的部分，是不会产生冲突，直接合并即可</p><p>应用在命令中，就是<code>push</code>、<code>pull</code>、<code>stash</code>、<code>rebase</code>等命令下都有可能产生冲突情况，从本质上来讲，都是<code>merge</code>和<code>patch</code>（应用补丁）时产生冲突</p><h2 id="二、分析" tabindex="-1"><a class="header-anchor" href="#二、分析" aria-hidden="true">#</a> 二、分析</h2><p>在本地主分值<code>master</code>创建一个<code>a.txt</code>文件，文件起始位置写上<code>master commit</code>，如下：</p><figure><img src="'+o+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>然后提交到仓库：</p><ul><li>git add a.txt</li><li>git commit -m &#39;master first commit&#39;</li></ul><p>创建一个新的分支<code>featurel1</code>分支，并进行切换，如下：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>git checkout -b featurel1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后修改<code>a.txt</code>文件首行文字为 <code>featurel commit</code>，然后添加到暂存区，并开始进行提交到仓库：</p><ul><li>git add a.txt</li><li>git commit -m &#39;featurel first change&#39;</li></ul><p>然后通过<code>git checkout master</code>切换到主分支，通过<code>git merge</code>进行合并，发现不会冲突</p><p>此时<code>a.txt</code>文件的内容变成<code>featurel commit</code>，没有出现冲突情况，这是因为<code>git</code>在内部发生了快速合并</p><blockquote><p>如果当前分支的每一个提交(commit)都已经存在另一个分支里了，git 就会执行一个“快速向前”(fast forward)操作</p><p>git 不创建任何新的提交(commit)，只是将当前分支指向合并进来的分支</p></blockquote><p>如果此时切换到<code>featurel</code>分支，将文件的内容修改成<code>featrue second commit</code>，然后提交到本地仓库</p><p>然后切换到主分支，如果此时在<code>a.txt</code>文件再次修改，修改成<code>mastet second commit</code>，然后再次提交到本地仓库</p><p>此时，<code>master</code>分支和<code>feature1</code>分支各自都分别有新的提交，变成了下图所示：</p><figure><img src="`+a+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这种情况下，无法执行快速合并，只能试图把各自的修改合并起来，但这种合并就可能会有冲突</p><p>现在通过<code>git merge featurel</code>进行分支合并，如下所示：</p><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>从冲突信息可以看到，<code>a.txt</code>发生冲突，必须手动解决冲突之后再提交</p><p>而<code>git status</code>同样可以告知我们冲突的文件：</p><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>打开<code>a.txt</code>文件，可以看到如下内容：</p><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><code>git</code>用<code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code>，<code>=======</code>，<code>&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code>标记出不同分支的内容：</p><ul><li>&lt;&lt;&lt;&lt;&lt;&lt;&lt; 和 ======= 之间的区域就是当前更改的内容</li><li>======= 和 &gt;&gt;&gt;&gt;&gt;&gt;&gt; 之间的区域就是传入进来更改的内容</li></ul><p>现在要做的事情就是将冲突的内容进行更改，对每个文件使用 <code>git add</code> 命令来将其标记为冲突已解决。 一旦暂存这些原本有冲突的文件，<code>Git </code>就会将它们标记为冲突已解决然后再提交：</p><ul><li>git add a.txt</li><li>git commit -m &quot;conflict fixed&quot;</li></ul><p>此时<code>master</code>分支和<code>feature1</code>分支变成了下图所示：</p><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>使用<code>git log</code>命令可以看到合并的信息：</p><figure><img src="'+s+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="三、总结" tabindex="-1"><a class="header-anchor" href="#三、总结" aria-hidden="true">#</a> 三、总结</h2><p>当<code>Git</code>无法自动合并分支时，就必须首先解决冲突，解决冲突后，再提交，合并完成</p><p>解决冲突就是把<code>Git</code>合并失败的文件手动编辑为我们希望的内容，再提交</p><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2><ul><li>https://www.liaoxuefeng.com/wiki/896043488029600/900004111093344</li></ul>',44),m=[p];function u(f,h){return t(),i("div",null,m)}const x=e(n,[["render",u],["__file","git_conflict.html.vue"]]);export{x as default};
