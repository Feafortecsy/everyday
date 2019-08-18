[TOC]

# <font color=red size=4 face="sans-serif">第七天</font>

## <font color=dodgerblue size=3 face="sans-serif">iframe框架有哪些优缺点</font>

| 优点 | 缺点 |
| :------ | :------ |
| 跨域 | 对浏览器搜索引擎不友好 |
| 异步刷新 | 每一个 iframe 都对应着一个页面，也就意味着多余的 css, js 文件的载入，会增加请求的开销 |
| 局部刷新 | 如果 iframe 内还有滚动条，会严重影响用户体验 |
| 多页面应用时，对于共同的 header, footer 可以使用 iframe 加载 | window.onload 事件会在所有 iframe 加载完成后才触发，因此会造成页面阻塞 |

## <font color=dodgerblue size=3 face="sans-serif">简述你对BFC规范的理解</font>

1.触发条件

- body根元素
- 浮动元素
- 绝对定位元素
- overflow除了visible以外的值
- display的值为inline-block，table-cells，flex

2.特性

- 边距重叠
- 清除浮动
- 阻止元素被覆盖

## <font color=dodgerblue size=3 face="sans-serif">统计某一字符或字符串在另一个字符串中出现的次数</font>

``` JavaScript
/**
 * @param {substring} string
 * @param {substring} string
 * @param {} number
*/
const tuple = (substring, parstring ) => {
    if(typeof substring !== "string" || typeof parstring !== "string") {
        throw new Error(`${substring} or ${parstring} is not a type of string`);
    } else {
        return parstring.split(substring).length - 1;
    }
}
```
