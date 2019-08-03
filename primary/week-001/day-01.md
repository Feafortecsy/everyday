[TOC]

# <font color=red size=4 face="sans-serif">第一天</font>

## <font color=dodgerblue size=3 face="sans-serif">页面导入样式时，使用link和@import有什么区别</font>

| link | @import |
| :------: | :------: |
| HTML标签 | CSS语法 |
| 与页面同时加载 | 页面加载完后加载 |
| 无兼容问题 | IE5+ |
| 可以通过js操作DOM | 不支持JavaScript操作 |

## <font color=dodgerblue size=3 face="sans-serif">圣杯布局与双飞翼布局</font>

### <font color=peru size=3 face="sans-serif">圣杯布局</font>

    1. 左中右向左浮动

    2. 中宽度为100%

    3. 左: 左外边距为100%, 右: 左外边距为自身宽度

    4. 左中右容器的左右内边距为左右宽度, 以此给左右空间

    5. 左右相对定位, 左: left为负左宽度, 右: right为负右宽度

### <font color=peru size=3 face="sans-serif">双飞翼布局</font>

    1. 左中右向左浮动

    2. 中宽度为100%

    3. 左: 左外边距为100%, 右: 左外边距为自身宽度

    4. 中的内容容器左右外边距为左右宽度

### <font color=peru size=3 face="sans-serif">区别</font>

    1. 双飞翼使用中的父标签, 通过外边距给左右预留空间, 圣杯使用左中右的父标签, 通过内边距给左右预留空间

    2. 双飞翼布局不需要相对定位, 以及定位的左值和右值

### [圣杯布局实现](./HolyGrail.html)、[双飞翼布局实现](./DoubleFlyingWing.html)

## <font color=peru size=3 face="sans-serif">用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值</font>

```JavaScript
const array = [];
let result = [];
const RandomNumber = () => {
    let number = (Math.floor(Math.random() * 31) + 2);
    array.push(number);
    // 此方法去重返回一个新数组
    result = Array.from(new Set(array));
    if (array.length >= 5) {
        return result
    } else if (array.length < 5) {
        RandomNumber();
    }
}
RandomNumber();

// 闭包形式
const RandomNumber = (minimum, maximum, count) => {
    let result = [];
    const array = [];
    const Maximum = maxinum - 1;
    const Minimum = Minimum;
    const Count = count;
    const recursive = () => {
        let number = (Math.floor(Math.random() * Maximum) + Minimum);
        array.push(number);
        result = Array.from(new Set(array));
        if (array.length >= Count) {
            return result
        } else if (array.length < Count) {
            recursive();
        }
    }
    recursive();
}
```
