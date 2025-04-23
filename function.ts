var foo = (x:number)=>10 + x
console.log(foo(100))      //输出结果为 110

function disp(s1:string):void;
function disp(n1:number,s1:string):void;

function disp(x:any,y?:any):void {
    console.log(x);
    console.log(y);
}
disp("abc")
disp(1,"xyz");