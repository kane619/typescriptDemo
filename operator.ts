var num1:number = 10
var num2:number = 2
var res:number = 0

res = num1 + num2
console.log("加:        "+res);

res = num1 - num2;
console.log("减: "+res)

res = num1*num2
console.log("乘:    "+res)

res = num1/num2
console.log("除:   "+res)

res = num1%num2
console.log("余数:   "+res)

num1++
console.log("num1 自增运算: "+num1)

num2--
console.log("num2 自减运算: "+num2)


var avg:number = 20;
var percentage:number = 90;

console.log("avg 值为: "+avg+" ,percentage 值为: "+percentage);

var res1:boolean = ((avg>50)&&(percentage>80));
console.log("(avg>50)&&(percentage>80): ",res1);

var res2:boolean = ((avg>50)||(percentage>80));
console.log("(avg>50)||(percentage>80): ",res2);

var res3:boolean=!((avg>50)&&(percentage>80));
console.log("!((avg>50)&&(percentage>80)): ",res3);


// var a:number = 2;   // 二进制 10
// var b:number = 3;   // 二进制 11

// var result;

// result = (a & b);
// console.log("(a & b) => ",result)

// result = (a | b);
// console.log("(a | b) => ",result)

// // 异或，按位异或运算，对等长二进制模式按位或二进制数的每一位执行逻辑异按位或操作。操作的结果是如果某位不同则该位为 1，否则该位为 0。
// result = (a ^ b);
// console.log("(a ^ b) => ",result);

// result = (~b);
// // 取反，取反是一元运算符，对一个二进制数的每一位执行逻辑反操作。使数字 1 成为 0，0 成为 1。
// console.log("(~b) => ",result);

// // 左移，把 << 左边的运算数的各二进位全部左移若干位，由 << 右边的数指定移动的位数，高位丢弃，低位补 0。
// result = (a << b);
// console.log("(a << b) => ",result);

// // 右移，把 >> 左边的运算数的各二进位全部右移若干位，>> 右边的数指定移动的位数。
// result = (a >> b);
// console.log("(a >> b) => ",result);

// // 无符号右移，与有符号右移位类似，除了左边一律使用0 补位。
// result = (a >>> 1);
// console.log("(a >>> 1) => ",result);

var a: number = 12
var b:number = 10

a = b
console.log("a = b: "+a)

a += b
console.log("a+=b: "+a)

a -= b
console.log("a-=b: "+a)

a *= b
console.log("a*=b: "+a)

a /= b
console.log("a/=b: "+a)

a %= b
console.log("a%=b: "+a)


var num = -2;
var result = num > 0 ? "大于 0" : "小于 0，或等于 0";
console.log(result);

// for(;;) {
//     console.log("这段代码会不停的执行")
//  }