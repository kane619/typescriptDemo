let strLiteral: string = "Hello";
let strObject: String = new String("Hello");

console.log(typeof strLiteral); // 输出："string"
console.log(typeof strObject);  // 输出："object"

console.log(strLiteral === strObject);  // 输出：false，内容相同，类型不同
console.log(strLiteral == strObject);   // 输出：true，内容相同
console.log(strLiteral === strObject.valueOf()); // 输出：true，将对象转为原始字符串后比较