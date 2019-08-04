[TOC]

# <font color=red size=4 face="sans-serif">第二天</font>

## <font color=dodgerblue size=3 face="sans-serif">HTML元素有哪些</font>

| 标签 | 功能 |
| :------: | :------: |
| video | 视频 |
| audio | 音频 |
| cnavas | 画布 |
| calendar、date、time、email、url、search | 表单控件 |
| article、footer、header、nav、section | 特殊内容, 语义化标签 |

## <font color=dodgerblue size=3 face="sans-serif">CSS3有哪些新增的特性</font>

| 类型 | 属性 | 功能 |
| :------: | :------: | :------: |
| 边框 | border-radius | 边框圆角 |
| 边框 | box-shadow | 盒子阴影 |
| 边框 | box-image | 盒子图片 |
| 背景 | background-size  | 背景图片的尺寸 |
| 背景 | background-origin  | 背景图片的定位区域 |
| 背景 | background-clip  | 背景图片的绘制区域 |
| 文本 | word-wrap | 允许切割换行 |
| 文本 | text-overflow | 文本溢出 |
| 文本 | text-shadow | 文本阴影 |
| 文本 | word-break | 规定非中日韩文本的换行规则 |
| 文本 | @keyframes | 动画规则 |
| 转换 | transform | 过渡 |
| 动画 | animation | 动画 |
| 动画 | @keyframes | 动画规则 |
| 过渡 | transition | 过渡 |
| 界面 | box-sizing | 盒模型 |
| 界面 | resize | 否可由用户对元素的尺寸进行调整 |

## <font color=dodgerblue size=3 face="sans-serif">去掉字符串空格</font>

```JavaScript
const NewTrim = (string, TYPE) => {
    if(typeof string === "string") {
        const result = {
            ALL: string.replace(/\s/g, ''),
            BOTHSIDES: string.replace(/^\s+/, '').replace(/\s+$/, ''),
            LEFT: string.replace(/^\s+/, ''),
            RIGHT: string.replace(/\s+$/, ''),
            CENTER: string.replace(/(\w)(\s+)(\w)/, `$1$3`),
        };
        return result[TYPE];
    } else {
        throw new Error(`${string} is not a string type`);
    }
}
```
