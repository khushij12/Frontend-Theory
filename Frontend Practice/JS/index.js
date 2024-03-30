//Write a function that takes an array of numbers and returns the maximum value.

// let arr = new Array(1,4,2);

// console.log(Math.max(...arr));

//Write a function that takes a string and returns true if it is a palindrome, false if it is not.

// function isPal(s){
//     let i=0, j=s.length-1;
//     let f = true;
//     while(i<j){
//         if(s[i]===s[j]){
//             i++;
//             j--;
//         }else{
//             f=false;
//             break;
//         }
//     }

//     return f===true;

// }


// console.log(isPal("abad"));
// console.log(isPal("aba"));

// Write a function that sums all numbers in an array recursively.

// function sum(arr,i){
//     if(i<arr.length)
//     return arr[i]+sum(arr, i+1);
//     else return 0;
// }

// let arr = new Array(1,4,2);
// console.log(sum(arr,0));

//Write a function that finds the longest word in a string.

//Write a function that removes all duplicates from an array.

// let arr = new Array(1,4,2,2,2,3,5,2,1,1,78,8);

// let obj={};

// for(x in arr){
//     if(obj[arr[x]]){
//         continue;
//     }else{
//         obj[arr[x]]=1;
//     }
// }

// console.log(Object.keys(obj));

//Write a function that checks if a string is a valid email address.

// let regex = /^[\w]+@[\w]{0,5}.[\w]{0,5}$/;

// console.log(regex.test("abc@abc.abc"));

//Write a function that takes a number as input and returns the Fibonacci number at that position.

// function fib(n){
//     if(n==0 || n==1) return n;
//     return fib(n-2)+fib(n-1);
// }

// console.log(fib(2));
// console.log(fib(4));

//Write a function that takes an array of objects and sorts them by a given key.
// let arr = [{
//     id:0,
//     title:"Hello"
// },
// {
//     id:21,
//     title:"World"
// },
// {
//     id:1,
//     title:"Krits"
// }
// ];

// arr.sort((a,b)=>{
//     if(a.id<b.id) return -1;
//     else if(a.id>b.id) return 1;

//     return 0;
// });
// console.log(arr);

// Write a function that takes a string and capitalizes the first letter of each word.

// let s = "gello sorld";

// let arr = s.split(' ');

// arr = arr.map((ele,index,array)=>ele[0].toLocaleUpperCase()+ele.slice(1));

// console.log(arr);

//fetch request

let logs = "";

fetch("https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json")
.then((result)=>{return result.json();})
.then(result => console.log(result))
.catch((err)=>{console.log(err)});
