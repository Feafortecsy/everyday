[TOC]

# <font color=red size=4 face="sans-serif">第三天</font>

## <font color=dodgerblue size=3 face="sans-serif">HTML全局属性有哪些</font>

| 属性 | 作用 |
| :------: | :------: |
| accesskey | 设置快捷键 |
| class | 为元素设置类标识 |
| contenteditable | 指定元素内容是否可编辑 |
| contextmenu | 自定义鼠标右键弹出上下文菜单内容（仅firefox支持） |
| data-* | 为元素增加自定义属性 |
| dir | 设置元素文本方向 |
| draggable | 设置元素是否可拖拽 |
| dropzone | 设置元素拖放类型（copy|move|link,H5新属性，主流均不支持） |
| hidden | 规定元素仍未或不在相关 |
| id | 元素id，文档内唯一 |
| lang | 元素内容的语言 |
| spellcheck | 是否启动拼写和语法检查 |
| style | 行内css样式
| tabindex | 设置元素可以获得焦点，通过tab导航 |
| title | 规定元素有关的额外信息 |
| translate | 元素和子孙节点内容是否需要本地化（均不支持） |

## <font color=dodgerblue size=3 face="sans-serif">在页面上隐藏元素的方法有哪些</font>

```CSS
/* 不占位 */
display: none;
width: 0; height: 0;
/* 占位 */
opacity: 0;
visibility: hidden;
z-index: -99999999;
transform: scale(0);
margin-left: -100%;
position: relative; left: -100%;
/* 仅对块内文本元素: */
text-indent: -9999px;
font-size: 0;
```

## <font color=dodgerblue size=3 face="sans-serif">去除字符串中最后一个指定的字符</font>

```JavaScript
/**
 * 去除字符串中最后一个指定的字符
 * @param {String} string
 * @param {String} character
 * @return {String}
 */
const RemoveCharacter = (string, character) => {
    if(typeof string === "string") {
        const position = string.indexOf(character);
        return string.substring(0, index) + string.substring(index + 1, string.length);
    } else {
        throw new Error(`${string} is not a string type`);
    }
}
```
