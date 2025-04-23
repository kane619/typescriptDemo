var sites = {
    site1: "Runoob",
    site2: "Google",
    sayHello: function () { } // 类型模板
};
sites.sayHello = function () {
    console.log("hello " + sites.site1);
};
sites.sayHello();

// 鸭子类型（英语：duck typing）是动态类型的一种风格，是多态(polymorphism)的一种形式。
interface IPoint {
    x:number
    y:number
}
function addPoints(p1:IPoint,p2:IPoint):IPoint {
    var x = p1.x + p2.x
    var y = p1.y + p2.y
    return {x:x,y:y}
}

// 正确
var newPoint = addPoints({x:3,y:4},{x:5,y:1})

// 错误
// var newPoint2 = addPoints({x:1},{x:4,y:3})
