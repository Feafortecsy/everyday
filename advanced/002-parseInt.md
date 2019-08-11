[TOC]

# <font color=red size=4 face="sans-serif">['1', '2', '3'].map(parseInt) what & why ?</font>

## <font color=dodgerblue size=3 face="sans-serif">结果</font>

``` JavaScript
['1', '2', '3'].map(parseInt);
// [1, NaN, NaN]
```

## <font color=dodgerblue size=3 face="sans-serif">Array.prototype.map</font>

### <font color=peru size=3 face="sans-serif">参数</font>

1. `callback(currentVlaue, index, array)`

`currentValue`: 当前处理的数组元素，
`index`: 当前处理元素的索引，
`array`: 调用`map`方法的数组，

2. `thisArg`

`thisArg`: `callback`使用的`this`的值，默认为`null`或`undefined`。

### <font color=peru size=3 face="sans-serif">返回值</font>

一个新数组，每个元素都是回调函数的结果，包括`undefined`。

## <font color=dodgerblue size=3 face="sans-serif">window.parseInt</font>

### <font color=peru size=3 face="sans-serif">参数</font>

1. `string`

`string`: 字符串或可被`toSing`解析的值，会忽略开头的空白。

2. `radix`

`radix`: 2-36之间的正整数，表示字符串的基数。

### <font color=peru size=3 face="sans-serif">返回值</font>

解析后的整数值。 如果被解析参数的第一个字符无法被转化成数值类型，则返回`NaN`。

## <font color=dodgerblue size=3 face="sans-serif">执行过程</font>

``` JavaScript
// 将数组元素与索引作为2个参数传递给parseInt
// 执行并返回结果
['1', '2', '3'].map((item, index) => {
    return parseInt(item, index);
});

// 即
parseInt('1', 0); // 1
parseInt('2', 2); // NaN
parseInt('3', 3); // NaN
```

## <font color=dodgerblue size=3 face="sans-serif">题目扩展</font>

``` JavaScript
let unary = fn => val => fn(val);
let parse = unary(parseInt);
['1.1', '2', '0.3'].map(parse);
// 以上代码与以下代码A、代码B等同
// 代码A
const unary = (fn) => {
    return (val) => {
        return fn(val);
    }
}
// 传递parseInt时,只有item作为参数传入unary, 基数为undefined, 因为unary只接受一个参数val
const parse = unary(parseInt);
['1.1', '2', '0.3'].map(parse);
// 代码B
const unary = (val) => {
    return parseInt(val, 10)
}
['1.1', '2', '0.3'].map((item) => {
    return unary(item);
});

```
