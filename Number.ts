let numLiteral: number = 42;
let numObject: Number = new Number(42);

console.log(typeof numLiteral); // 输出："number"
console.log(typeof numObject);  // 输出："object"


console.log("TypeScript Number 属性: ");
console.log("最大值为: " + Number.MAX_VALUE);
console.log("最小值为: " + Number.MIN_VALUE);
console.log("负无穷大: " + Number.NEGATIVE_INFINITY);
console.log("正无穷大:" + Number.POSITIVE_INFINITY);

var month = 0
if( month<=0 || month >12) {
    month = Number.NaN
    console.log("月份是："+ month)
} else {
    console.log("输入月份数值正确。")
}

function employee(id:number,name:string) {
    this.id = id
    this.name = name
}

var emp = new employee(123,"admin")
employee.prototype.email = "admin@runoob.com"

console.log("员工号: "+emp.id)
console.log("员工姓名: "+emp.name)
console.log("员工邮箱: "+emp.email)