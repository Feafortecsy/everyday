[TOC]

# <font color=red size=4 face="sans-serif">防抖与节流</font>

## <font color=dodgerblue size=3 face="sans-serif">防抖</font>

### <font color=peru size=3 face="sans-serif">防抖的原理</font>

n秒内只执行一次事件，如果再次触发则重新计时，并n秒后执行.

### <font color=peru size=3 face="sans-serif">防抖的实现</font>

``` JavaScript
/**
 * 防抖
 * @param {fn} function
 * @param {delay} number
 * @return {null}
 */
const debounce = (fn, delay) => {
    let timeout = null;
    return function () {
        const that = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn.apply(that, args);
        }, delay);
    };
}
// 立即执行

```

## <font color=dodgerblue size=3 face="sans-serif">节流</font>

### <font color=peru size=3 face="sans-serif">节流的原理</font>

n秒内只会执行一次，再次触发不执行，直到计时完成。

### <font color=peru size=3 face="sans-serif">节流的实现</font>

``` JavaScript
/**
 * 节流
 * @param {fn} function
 * @param {delay} number
 * @return {null}
 */
// Date对象
const throttle = (fn, delay) => {
    let pre = 0;
    return function () {
        const now = +new Date();  
        const that = this;
        const args = arguments;
        if (now - pre > delay) {
            fn.apply(context, args);
            pre = now;
        }
    }
}
// 定时器setTimeout
const throttle = (fn, delay) => {
    return function () {
        const that = this;
        const args = arguments;
        if(!timeout) {
            timeout = setTimeout(() => {
                timeout = null;
                fn.apply(that, args);
            }, delay);
        }
    }
}
```
