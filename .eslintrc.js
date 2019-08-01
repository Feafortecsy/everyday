module.exports = {
    "parser": "babel-eslint",
    "extends": ["eslint:recommended"],
    "env": {
        "browser": true,
        "node": true,
        "es6": true,
    },
    "rules": {
        "camelcase": 0,
        "indent": ["error", 4], // 空格
        "linebreak-style": "off", // 换行
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ], // 分号
        "no-cond-assign": [
            "error",
            "always"
        ], // 禁止条件表达式中出现赋值操作符
        "no-dupe-args": "error", // 禁止重复声明函数
        "no-dupe-keys": "error", // 禁止object中重复的键
        "no-empty": "error", // 禁止空代码块
        "no-extra-semi": "warn", // 不必要的分号
        "no-irregular-whitespace": "error", // 禁止不规则空白
        "curly": "error", // 强制所有控制语句使用一致的括号风格
        "eqeqeq": "error", // 要求使用 === 和 !==
        "no-empty-function": "error", // 禁止出现空函数
        "no-extra-label": "error", // 禁止不必要的标签
        "no-magic-numbers": "warn", // 禁用魔术数字
        "no-redeclare": "error", // 禁止多次声明同一变量
        "radix": "error", // 强制在 parseInt() 使用基数参数, 即第二个参数
        "no-unused-vars": "error", // 禁止出现未使用过的变量
        "no-use-before-define": "error", // 变量先声明再使用
        "array-bracket-spacing": "error", // 强制数组方括号中使用一致的空格
        "brace-style": "warn", // 强制在代码块中使用一致的大括号风格
        "camelcase": "error", // 强制使用骆驼拼写法命名约定
        "comma-style": "error", // 强制使用一致的逗号风格
        "eol-last": "warn", // 文件末尾空行
        "func-call-spacing": "error", // 函数标识符和其调用之间有空格
        "function-paren-newline": "error", // 函数括号内换行
        "keyword-spacing": "error", // 关键字空格
        "no-mixed-spaces-and-tabs": "error", // 禁止tab和空格混用
        "no-multiple-empty-lines": "error", // 禁止多个空行
        "no-trailing-spaces": "error", // 禁用行尾空格
        "spaced-comment": "warn", // 一致的注释
        "arrow-body-style": "error", // 箭头函数体使用大括号
        "arrow-spacing": "error", // 箭头函数的箭头前后使用一致的空格
        "arrow-parens": "error", // 箭头函数的参数使用圆括号
        "no-const-assign": "error", // 禁止修改const定义的变量
        "no-var": "error", // 禁止使用var
        "prefer-const": "warn", // 使用 const 声明那些声明后不再被修改的变量
        "prefer-destructuring": "warn", // 优先使用数组和对象解构
        "prefer-template": "warn", // 优先使用模板字面量
        "jsx-quotes": "warn", // 强制在 JSX 属性中一致地使用双引号或单引号，默认双引号
        "key-spacing": "warn", // 强制在对象字面量的键和值之间使用一致的空格
        "no-lonely-if": "warn", // 禁止if 单独出现
        "space-infix-ops": "error", // 要求操作符周围有空格
    }
}
