[TOC]

# <font color=red size=4 face="sans-serif">Set、Map、WeakSet、WeakMap</font>

## <font color=dodgerblue size=3 face="sans-serif">区别</font>

**Set与Map**:

    1. Set和Map主要的应用场景在于**数据重组**和**数据存储**。
    2. Set是一种叫做**集合**的数据结构，Map 是一种叫做**字典**的数据结构。

**Set与WeakSet**:

    1. WeakSet对象中只能存放对象引用，不能存放值，而 Set 对象都可以。
    2. WeakSet对象中存储的对象值都是被弱引用的，如果没有其他的变量或属性引用这个对象值，则这个对象值会被当成垃圾回收掉，所以WeakSet对象无法枚举, 没有办法拿到它包含的所有元素。

**Map与WeakMap**:

    1. WeakMap对象的key只能是Object类型，而Weak对象的key可以是任意值。
    2. WeakMap对象没用遍历API，Weak对象有keys, values, entries等遍历API。

## <font color=dodgerblue size=3 face="sans-serif">Set</font>

> Set对象允许存储任何类型的唯一值，无论是原始值或者是对象引用。

1.语法

``` JavaScript
/** 如果传递一个可迭代对象，它的所有元素将不重复地被添加到新的 Set中。如果不指定此参数或其值为null，则新的 Set为空。
 * @param {iterable}
 * @return {Set对象}
*/
new Set([iterable]);
// Set 中的值是唯一的
```

2.属性(实例)

``` JavaScript
Set.prototype.size;
// Set对象的值的个数。
```

3.方法(实例)

``` JavaScript
Set.prototype.add(value);
// 添加元素到最后，返回该Set对象
Set.prototype.clear();
// 移除所有元素
Set.prototype.delete(value);
// 移除Set的中与value相等的元素，返回Set.prototype.has(value)在这个操作前会返回的值（即如果该元素存在，返回true，否则返回false）。Set.prototype.has(value)在此后会返回false。
Set.prototype.entries();
// 返回一个新的迭代器对象，该对象包含Set对象中的按插入顺序排列的所有元素的值的[value, value]数组。为了使这个方法和Map对象保持相似， 每个值的键和值相等。
Set.prototype.keys();
// 返回一个新的迭代器对象，该对象包含Set对象中的按插入顺序排列的所有元素的值。
Set.prototype.forEach(callback, thisArg);
// 按照插入顺序，为Set对象中的每一个值调用一次callBackFn。如果提供了thisArg参数，回调中的this会是这个参数。
Set.prototype.has(value);
// 返回一个布尔值，表示该值在Set中存在与否。
```

4.例子

``` JavaScript
const newSet = new Set();
newSet.add(1); // Set(1) {1}
newSet.add(2); // Set(2) {1, 2}
newSet.add(2); // Set(2) {1, 2}
const objectSet = {
    a: 1,
    b: 2,
};
newSet.add(objectSet);
newSet.add({a: 1, b: 2}); // objectSet与此参数指向不同
```

## <font color=dodgerblue size=3 face="sans-serif">Map</font>

1.语法

``` JavaScript
/** Iterable 可以是一个数组或者其他可迭代对象，其元素为键值对(两个元素的数组，例如: [[ 1, 'one' ],[ 2, 'two' ]])。 每个键值对都会添加到新的 Map。null 会被当做 undefined。
 * @param {iterable}
 * @return {Map对象}
*/
new Map([iterable]);
// Set 中的值是唯一的
```

2.属性(实例)

``` JavaScript
Map.prototype.size;
// Set对象的值的个数。
```

3.方法(实例)

``` JavaScript
Map.prototype.set(key, value);
// 设置Map对象中键的值，返回该Map对象
Map.prototype.clear();
// 移除所有键值对
Map.prototype.delete(value);
// 移除Set的中与value相等的元素，返回Set.prototype.has(value)在这个操作前会返回的值（即如果该元素存在，返回true，否则返回false）。Set.prototype.has(value)在此后会返回false。
Map.prototype.entries();
// 返回一个新的迭代器对象，插入顺序包含了Map对象中每个元素的 [key, value] 数组。
Map.prototype.keys();
// 返回一个新的迭代器对象，该对象包含Set对象中的按插入顺序排列的所有元素的值。
Map.prototype.forEach(callback, thisArg);
// 按照插入顺序，为Set对象中的每一个值调用一次callBackFn。如果提供了thisArg参数，回调中的this会是这个参数。
Map.prototype.has(key);
// 返回一个布尔值，表示该值在Set中存在与否。
Map.prototype.get(key);
// 若键不存在，返回undefined
Map.prototype.values()
// 返回一个新的Iterator对象，它按插入顺序包含了Map对象中每个元素的值 。
```

4.例子

``` JavaScript
const newMap = new Map();
const x = 1, y = 2, z = 3;
newMap.set(x, 1);
newMap.set(y, 2);
newMap.set(z, 3);
newMap.size === 3; // true
// 使用for of 迭代Map对象
for(let [key, value] of newMap) {
    console.info(key, value);
}
// 使用forEach迭代Map对象
newMap.forEach((key, value) => {
    console.info(key, value);
});
const first = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
]);
const second = new Map([
    [1, 'uno'],
    [2, 'dos']
]);
// 合并两个Map对象时，如果有重复的键值，则后面的会覆盖前面的。
// 展开运算符可以将Map对象转换成数组。
const merged = new Map([...first, ...second]);
```

5.Map与Object的区别
| Map | Object |
| :------: | :------: |
| 键只能是字符串或Symbol | 键可以是任意值 |
| 键值是无序的 | 键值是有序的 |
| 需要计算键值对数量 | 可以通过size获取到键值对的数量 |
| 先获取键数组再迭代 | 可直接迭代 |

Map涉及频繁增删键值对的场景下会有些性能优势

## <font color=dodgerblue size=3 face="sans-serif">WeakSet</font>

> WeakSet 对象是一些对象值的集合, 并且其中的每个对象值都只能出现一次.

1.语法

```　JavaScript
/** Iterable 是一个数组（二元数组）或者其他可迭代的且其元素是键值对的对象。每个键值对会被加到新的 WeakMap 里。null会被当做undefined。
 * @param {iterable}
 * @return {WeakMap对象}
*/
new WeakMap([iterable]);
```

2.方法(实例)

``` JavaScript
WeakSet.prototype.add(value)
//  在该 WeakSet 对象中添加一个新元素 value.
WeakSet.prototype.clear()
// 清空该 WeakSet 对象中的所有元素.
WeakSet.prototype.delete(value)
// 从该 WeakSet 对象中删除 value 这个元素, 之后 WeakSet.prototype.has(value) 方法便会返回 false.
WeakSet.prototype.has(value)
// 返回一个布尔值,  表示给定的值 value 是否存在于这个 WeakSet 中.
```

3.例子

``` JavaScript
const newWeakSet = new WeakSet();
const obj = {};
const foo = {};
newWeakSet.add(window);
newWeakSet.add(obj);
newWeakSet.has(window); // true
newWeakSet.has(foo);    // false, 对象foo并没有被添加进newWeakSet中
newWeakSet.delete(window); // 从集合中删除 window 对象
newWeakSet.has(window);    // false, window 对象已经被删除了
newWeakSet.clear(); // 清空整个 WeakSet 对象
```

## <font color=dodgerblue size=3 face="sans-serif">WeakMap</font>

1.语法

``` JavaScript
/** Iterable 是一个数组（二元数组）或者其他可迭代的且其元素是键值对的对象。每个键值对会被加到新的 WeakMap 里。null会被当做undefined。
 * @param {iterable}
 * @return {WeakMap对象}
*/
new WeakMap([iterable]);
```

2.属性(实例)

``` JavaScript
Map.prototype.size;
// Set对象的值的个数。
```

3.方法(实例)

``` JavaScript
WeakMap.prototype.delete(key)
// 移除key的关联对象。执行后 WeakMap.prototype.has(key)返回false。
WeakMap.prototype.get(key)
// 返回key关联对象, 或者 undefined(没有key关联对象时)。
WeakMap.prototype.has(key)
// 根据是否有key关联对象返回一个Boolean值。
WeakMap.prototype.set(key, value)
// 在WeakMap中设置一组key关联对象，返回这个 WeakMap对象。
```
