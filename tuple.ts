let myTuple: [number, string, boolean] = [42, "Runoob", true];

// 访问元组中的元素
let num11 = myTuple[0]; // 访问第一个元素，值为 42，类型为 number
let str = myTuple[1]; // 访问第二个元素，值为 "Runoob"，类型为 string
let bool = myTuple[2]; // 访问第三个元素，值为 true，类型为 boolean

console.log(num11);  // 输出: 42
console.log(str);  // 输出: Runoob
console.log(bool); // 输出: true

let lastElement = myTuple.pop();
console.log(myTuple);       // 输出: [42, "Hello"]

let a11: [number, string, boolean] = [42, "Hello", true];// 创建一个元组

var [b,c] = a11
console.log( b )
console.log( c )

function getUserInfo(): [number, string] {
    return [1, "John Doe"];
}

const [userId, userName] = getUserInfo();
console.log(userId);   // 输出: 1
console.log(userName); // 输出: John Doe

let sliced = myTuple.slice(1); // 从索引 1 开始切片
console.log(sliced); // 输出: ["Hello", true]