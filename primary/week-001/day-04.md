[TOC]

# <font color=red size=4 face="sans-serif">第四天</font>

## <font color=dodgerblue size=3 face="sans-serif">HTML5的文件离线储存怎么使用，工作原理是什么？</font>

<!-- 存疑 -->

``` HTML
<!-- index.html -->
<!-- manifest属性关联文档与清单文件 -->
<html manifest="/static/manifest/manifest.appcache">
<!-- 其他内容 -->
</html>
```

``` JavaScript
// manifest.appcache 指定清单区域

// CACHE区域
CACHE MANIFEST

CACHE:
manifest.png
manifest.jpg
// FALLBACK区域/备用区域
FALLBACK:
// 此处为：如果需要加载未被缓存的png文件，则使用manifest.png代替。即懒加载中的默认图片。
*.png manifest.png

// NETWORK区域：不进行缓存，始终从服务器请求，包括离线环境下。
NETWORK:
active.png
```

``` JavaScript
// 判断浏览器状态，返回布尔值
window.navigator.onLine
```

<!-- 使用离线缓存 -->
``` JavaScript
window.applicationCache
/**
 * @param {update()} 更新缓存
 * @param {swapCache()} 当前缓存与新缓存交换
 * @param {status} 缓存状态
*/
// status 返回数值
status = {
    0: UNCACHED, // 没用缓存或未下载
    1: IDLE, // 没用任何操作
    2: CHECKING, // 正在检查更新
    3: DOWNLOADING, // 正在下载更新
    4: UPDATEREADY, // 有更新的数据
    5: OBSOLETE, // 缓存数据已废弃
}
```

ApplicationCache对象的事件

| 事件 | 说明 |
| :------ | :------ |
| checking | 获取初始清单或检查更新 |
| noupdating | 无更新,缓存为最新 |
| downloading | 正在下载 |
| progress | 下载时触发 |
| cached | 已下载缓存 |
| updateready | 性自由已下载 |
| obsolete | 缓存已废弃 |

## <font color=dodgerblue size=3 face="sans-serif">CSS选择器有哪些？哪些属性可以继承?</font>

1.基本选择器

| 选择器 | 说明 |
| :------ | :------ |
| * | 通用选择器, 匹配所有元素,包括HTML和body |
| div, p, a, input...... | 匹配相应标签 |
| .className | 类选择器 |
| .IdName | id选择器 |

2.复合选择器

| 选择器 | 说明 |
| :------ | :------ |
| ， | 并集选择器, ，隔开 |
| > | 直接后代选择器 |
| .parent child | (空格)后代选择器 |
| a + p| (+)兄弟选择器，匹配第一个拥有共同父节点的p标签 |
| a ` p| (+)兄弟选择器，匹配所有拥有共同父节点的p标签 |

3.伪元素选择器
| 选择器 | 说明 |
| :------ | :------ |
| ::first-line | 文本的第一行 |
| ::first-letter | 文本的第一个字母 |
| :before, :after | 生成DOM节点并插入到节点前 / 后 |

4.结构性伪类选择器
| 选择器 | 说明 |
| :------ | :------ |
| :root | 文档根元素，总是返回html |
| :first-child, :last-child, :only-child, :only-of-type | 文本的第一个 / 最后一个 / 唯一一个 / 指定类型的唯一一个 子元素 |
| :before, :after | 生成DOM节点并插入到节点前 / 后 |
| :nth-child(n), :nth-last-child(n), :nth-of-type(n), :nth-last-of-type(n),  | 第n个 / 倒数第n个 / 指定类型的第n个 / 指定类型的倒数第n个 子元素 |
| :valid, :invalid, :in-range, :out-of-range | 文档根元素，总是返回html |

4.UI伪类选择器
| 选择器 | 说明 |
| :------ | :------ |
| :enabled, :disabled | 启用 / 禁用 |
| :checked | 已勾选 |
| :default | 默认，例如radio group中默认选中的radio |
| :valid, :invalid, :required, :optional, :in-range, :out-of-range | 校验有效 / 校验无效 / 必填 / 非必填 / 限定范围内 / 限定范围外的 input |

5.动态伪类选择器
| 选择器 | 说明 |
| :------ | :------ |
| :link, :visited | 超链接 / 已访问的超链接 |
| :hover | 鼠标悬停的元素 |
| :active | 激活状态的元素，通常为鼠标点击或者触摸(移动端)，浏览器可自由解释 |
| :focus | 获得焦点的元素 |

6.其他伪类选择器
| 选择器 | 说明 |
| :------ | :------ |
| :not() | 括号内条件取反 |
| :lang() | 括号内语言 |
| :target | URL片段标识符指向的元素 |

7.可继承的属性

``` CSS
visibility
cursor
letter-spacing
word-spacing
white-space
line-height
color
font
font-family
font-size
font-style
font-variant
font-weight
text-decoration
text-transform
direction
text-indent
text-align
list-style
list-style-type
list-style-position
list-style-image
```

## <font color=dodgerblue size=3 face="sans-serif">写一个方法把下划线命名转成大驼峰命名</font>

``` JavaScript
/** 写一个方法把下划线命名转成大驼峰命名
 * @param {String} string
 * @return {String} result
*/
const UnderlineTurnsToHump = (string) => {
    const stringArray = string.split("_");
    const stringMap = stringArray.map((item) => {
        return `${item.charAt(0).toUpperCase()}${item.slice(1)}`
    });
    const result = stringMap.join("").trim();
    return result
}
```
