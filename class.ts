class Car {
    // 字段
    engine:string;

    // 构造函数
    constructor(engine:string) {
       this.engine = engine
    }

    // 方法
    display():void {
       console.log("函数中显示发动机型号  :   "+this.engine)
    }
 }

 // 创建一个对象
 var object1 = new Car("XXSY1")

 // 访问字段
 console.log("读取发动机型号 :  "+object1.engine)

 // 访问方法
 object1.display()

 class PrinterClass {
    doPrint():void {
       console.log("父类的 doPrint() 方法。")
    }
 }

 class StringPrinter extends PrinterClass {
    doPrint():void {
       super.doPrint() // 调用父类的函数
       console.log("子类的 doPrint()方法。")
    }
 }

 var object2 = new StringPrinter()
object2.doPrint()

// static 关键字用于定义类的数据成员（属性和方法）为静态的，静态成员可以直接通过类名调用。
class StaticMem {
    static num:number;

    static display1():void {
       console.log("num 值为 "+ StaticMem.num)
    }
 }

 StaticMem.num = 12     // 初始化静态变量
 StaticMem.display1()       // 调用静态方法


 class Person{ }
var obj2 = new Person()
var isPerson = obj2 instanceof Person;
console.log("obj 对象是 Person 类实例化来的吗？ " + isPerson);

// 类可以实现接口，使用关键字 implements，并将 interest 字段作为类的属性使用。
interface ILoan {
    interest:number
 }

 class AgriLoan implements ILoan {
    interest:number
    rebate:number

    constructor(interest:number,rebate:number) {
       this.interest = interest
       this.rebate = rebate
    }
 }

 var obj11 = new AgriLoan(10,1)
 console.log("利润为 : "+obj11.interest+"，抽成为 : "+obj11.rebate )

