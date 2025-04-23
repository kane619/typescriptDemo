var global_num = 12          // 全局变量
class Numbers {
   num_val = 13;             // 实例变量
   static val = 10;         // 静态变量

   storeNum():void {
      var local_num = 14;    // 局部变量
   }
}
console.log("全局变量为: "+global_num)
console.log(Numbers.val)   // 静态变量
var object = new Numbers();
console.log("实例变量: "+object.num_val)
console.log("test: "+object.storeNum())