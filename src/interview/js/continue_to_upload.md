# 大文件上传如何做断点续传？

上传大文件时，以下几个变量会影响我们的用户体验：

- 服务器处理数据的能力
- 请求超时
- 网络波动

上传时间会变长，高频次文件上传失败，失败后又需要重新上传等等。

为了解决上述问题，我们需要对大文件上传单独处理，这就涉及到分片上传及断点续传两个概念。

## 一、基本概念

### 分片上传

分片上传是指：将大文件拆分成多个小片段（如每片 10MB），逐个上传，这样能避免大文件一次性上传时可能遇到的超时问题，并可并行上传多个部分，上传完之后再由服务端对所有上传的文件进行汇总整合成原始的文件。

大致流程如下：

1. 将需要上传的文件按照一定的分割规则，分割成相同大小的数据块；
2. 初始化一个分片上传任务，返回本次分片上传唯一标识；
3. 按照一定的策略（串行或并行）发送各个分片数据块；
4. 发送完成后，服务端根据判断数据上传是否完整，如果完整，则进行数据块合成得到原始文件

### 断点续传

断点续传是指：在下载或上传时，将下载或上传任务人为的划分为几个部分，每一个部分采用一个线程进行上传或下载，如果碰到网络故障，可以从已经上传或下载的部分开始继续上传下载未完成的部分，而没有必要从头开始上传下载。可以节省用户时间，提高速度。

一般实现方式有两种：

- 服务器端返回，告知从哪开始
- 浏览器端自行处理

上传过程中将文件在服务器写为临时文件，等全部写完了（文件上传完），将此临时文件重命名为正式文件即可。

如果中途上传中断过，下次上传的时候根据当前临时文件大小，作为在客户端读取文件的偏移量，从此位置继续读取文件数据块，上传到服务器从此偏移量继续写入文件即可。

## 二、实现思路

整体思路比较简单，拿到文件，保存文件唯一性标识，切割文件，分段上传，每次上传一段，根据唯一性标识判断文件上传进度，直到文件的全部片段上传完毕（下面的内容都是伪代码）。

![](../../image/interview-js-31.png)

读取文件内容：

```js
const input = document.querySelector('input');
input.addEventListener('change', function () {
	var file = this.files[0];
});
```

可以使用`md5`实现文件的唯一性：

```js
const md5code = md5(file);
```

然后开始对文件进行分割：

```js
var reader = new FileReader();
reader.readAsArrayBuffer(file);
reader.addEventListener('load', function (e) {
	//每10M切割一段,这里只做一个切割演示，实际切割需要循环切割，
	var slice = e.target.result.slice(0, 10 * 1024 * 1024);
});
```

分片上传：

```js
const formdata = new FormData();
formdata.append('0', slice);
//这里是有一个坑的，部分设备无法获取文件名称，和文件类型，这个在最后给出解决方案
formdata.append('filename', file.filename);
var xhr = new XMLHttpRequest();
xhr.addEventListener('load', function () {
	//xhr.responseText
});
xhr.open('POST', '');
xhr.send(formdata);
xhr.addEventListener('progress', updateProgress);
xhr.upload.addEventListener('progress', updateProgress);

function updateProgress(event) {
	if (event.lengthComputable) {
		//进度条
	}
}
```

后端根据上传的文件 `md5` 值判断是否已经存在部分上传的文件，如果有，则返回已上传的片段信息，告知客户端从哪开始上传。

每上传一个片段，后端将该片段写入临时文件，直到所有片段上传完毕，才合并为完整文件。

```js
// 假设后端检查并返回未上传部分的文件片段
if (uploadedParts < totalParts) {
	res.json({ continueFrom: uploadedParts });
} else {
	// 合并文件片段
	mergeFiles(md5);
}
```

如果想要暂停切片的上传，可以使用`XMLHttpRequest `的 `abort `方法。

### 三、关键技术点

- **分片切割策略**：切片的大小一般取决于服务器的处理能力和网络带宽。常见的大小为 5MB、10MB 等，但也可以动态决定。
- **进度追踪**：可以通过监听 `XMLHttpRequest` 或 `fetch` 的 `progress` 事件来更新上传进度。
- **网络恢复**：通过记录上传进度或已上传的片段信息，断点续传技术可以在网络恢复后继续上传。
- **并行上传**：可以通过同时上传多个片段（并行上传）来加速上传过程，减少整体上传时间。

### 四、常见问题与优化

- **上传失败重试机制**：对于上传失败的片段可以设置重试机制，确保所有片段成功上传。
- **页面刷新恢复**：通过使用 `localStorage` 或 `sessionStorage` 保存上传进度，刷新页面后可以继续上传。
- **多线程处理**：通过 `Web Workers` 可以实现多线程处理大文件上传，避免阻塞主线程，提升上传效率。

### 五、使用场景

- **大文件上传**：如视频、音频、高清图像等。
- **不稳定的网络环境**：断点续传可以避免因网络问题导致的文件上传中断，尤其是在移动端应用中。
- **视频监控上传**：实时视频上传中，通常使用流式上传和断点续传技术，以便持续传输监控数据。
