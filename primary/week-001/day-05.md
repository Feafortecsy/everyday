[TOC]

# <font color=red size=4 face="sans-serif">第五天</font>

## <font color=dodgerblue size=3 face="sans-serif">超链接target属性的取值和作用</font>

| 取值 | 作用 |
| :------ | :------ |
| _self | 在当前窗口中打开文档 |
| _blank | 新窗口或新标签页中打开文档 |
| _parent | 在父窗框组(frameset)中打开文档 |
| _top | 在顶层窗口打开文档 |
| < frame > | 在指定窗框中打开文档 |

## <font color=dodgerblue size=3 face="sans-serif">CSS3新增伪类有哪些</font>

| CSS3伪类 | 作用 |
| :------ | :------ |
| :root | 文档根元素，总是返回html |
| :last-child, :only-child, :only-of-type | 文本的最后一个 / 唯一一个 / 指定类型的唯一一个 子元素 |
| :nth-child(n), :nth-last-child(n), :nth-of-type(n), :nth-last-of-type(n),  | 第n个 / 倒数第n个 / 指定类型的第n个 / 指定类型的倒数第n个 子元素 |
| :enabled, :disabled | 启用 / 禁用 |
| :checked | 已勾选 |
| :default | 默认，例如radio group中默认选中的radio |
| :valid, :invalid, :required, :optional, :in-range, :out-of-range | 校验有效 / 校验无效 / 必填 / 非必填 / 限定范围内 / 限定范围外的 input |
| :not() | 括号内条件取反 |
| :empty | 没有子元素的元素 |
| :target | URL片段标识符指向的元素 |

## <font color=dodgerblue size=3 face="sans-serif">字符串大小写转换的方法</font>

``` JavaScript
/** 字符串大小写转换
 * @param {String} string
 * @return {String}
*/
const CaseConversion = (string) => {
    if(typeof string !== "string") {
        throw new Error(`${string} is not a type of string`);
    } else {
        const result = string.split("").map((s) => {
            const charCode = s.charCodeAt();
            return charCode >= 65 && charCode <= 90 ? s.toLowerCase() : s.toUpperCase();
        }).join("");
        return result
    }
}
```
