[TOC]

# <font color=red size=4 face="sans-serif">第六天</font>

## <font color=dodgerblue size=3 face="sans-serif">label有哪些作用</font>

1.标记表单，可以将`<input>`直接放在`<label>`里，这种情况不需要`for`和`id`属性。

``` HTML
<!-- for: 标记表单，点击这个标签的时候，所绑定的元素将获取焦点 ，点击label所包裹内容，自动指向for指定的id或name -->

<!-- accesskey: 定义了访问这个控件的热键(所设置的快捷键不能与浏览器的快捷键冲突，否则将优先激活浏览器的快捷键) -->
<div class="preference">
    <label for="password">enter you password here</label>
    <input type="checkbox" name="password" id="password">
</div>

<label>enter you password here
    <input type="checkbox" name="password">
</label>
```

## <font color=dodgerblue size=3 face="sans-serif">用css创建一个三角形，并简述原理</font>

``` CSS
/* 创建一个无宽高的div，使用border属性将div扩展为可见 */
.triangle {
    width: 0;
    height: 0;
    margin: 15rem auto;
    background-color: #fff;
    border-right: 100px solid transparent;
    border-left: 100px solid transparent;
    border-top: 100px solid transparent;
    border-bottom: 100px solid crimson;
}
```

## <font color=dodgerblue size=3 face="sans-serif">设计一个去除制表符和换行符的方法</font>

``` JavaScript
const RemoveTabBreak = (string) => {
    return string.replace(/|\r|\t/g,"");  
}
```
