# ES6 编程风格
## 块级作用域
### （1）let 取代 var
ES6提出了两个新的声明变量的命令：`let`和`const`。其中，`let`完全可以取代`var`，因为两者语义相同，而且`let`没有副作用。
```
'use strict';

if (true) {
  let x = 'hello';
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}
```
上面代码如果用`var`替代`let`，实际上就声明了两个全局变量，这显然不是本意。变量应该只在其声明的代码块内有效，`var`命令做不到这一点。

`var`命令存在变量提升效用，`let`命令没有这个问题。

```
'use strict';

if(true) {
  console.log(x); // ReferenceError
  let x = 'hello';
}
```
上面代码如果使用`var`替代`let`，`console.log`那一行就不会报错，而是会输出`undefined`，因为变量声明提升到代码块的头部。这违反了变量先声明后使用的原则。

所以，建议不再使用`var`命令，而是使用`let`命令取代。

### （2）全局常量和线程安全
## 字符串
## 解构赋值
## 对象
## 数组
## 函数
## Map结构
## Class
## 模块
## ESLint的使用


