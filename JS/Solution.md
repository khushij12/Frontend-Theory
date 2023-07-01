**accumulating function**

```js
const sum = function(a){
    return function(b){
        if(b)
        return sum(a+b);
        else return a;
    }
}

console.log(sum(1)(2)(3)());
```

```js
function add(a){
 function sum(b){
    a =   a+b;
    return sum;
 }
 sum.toString = function(){return a;}
 return sum;
}
console.log(add(1)(2)(3)(4).toString());
```

After defining the sum.toString method, if you directly console.log(sum), this function will be printed out. If you directly alert(sum), we can see that "a" will pop up.


1. Use closures and have a deep understanding of JavaScript's scope chain (prototype chain);
2. Rewrite the toSting() method of the function;

```js
( window.foo || ( window.foo = "bar" ) );
console.log(window.go);  //Result is 'bar' if we use && then second command not work so window.foo=undefined
```

```js
var foo = {n: 1};
var bar = foo; 
foo.x = foo = {n: 2}; //foo.x = (foo = {n:2}); =>  {n:1}.x = ( {n:1} = {n:2} );  R.H.S. foo={n:2}  
console.log(foo.x); //Result undefined 
console.log(foo); //Result {n:2} 
console.log(bar); //Result {n:1, x: {n:2}}
Result = undefined
```

```js
console.log(‘one’);
setTimeout(function() {
 console.log(‘two’);
}, 0);
Promise.resolve().then(function() {
 console.log(‘three’);
})
console.log(‘four’);
//Result one, four , three, two its easy for one and four but theb why first three and then two prints. 
//All of timeout and promise is async func.. 
//Answers is timeout in EventLoop Queue , promise process in JobQueue and JobQueue is high priority…
```

```js
a defined? false
b defined? true
```

```js
Object {bar: "hello"}
undefined
``` 
Explanation:- Not only is this surprising, but what makes this particularly gnarly is that foo2() returns undefined without any error being thrown.
The reason for this has to do with the fact that semicolons are technically optional in JavaScript (although omitting them is generally really bad form). As a result, when the line containing the return statement (with nothing else on the line) is encountered in foo2(), a semicolon is automatically inserted immediately after the return statement.
No error is thrown since the remainder of the code is perfectly valid, even though it doesn’t ever get invoked or do anything (it is simply an unused code block that defines a property bar which is equal to the string "hello").
This behavior also argues for following the convention of placing an opening curly brace at the end of a line in JavaScript, rather than on the beginning of a new line. As shown here, this becomes more than just a stylistic preference in JavaScript.

![image](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*k31FAUML_fQKhj8m8-gIlQ.png)

