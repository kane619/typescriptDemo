const hello:string = 'hello world';
console.log(hello);

class Site {
    name():void {
        console.log('typescript');
    }
}
var obj = new Site();
obj.name();

// tuple 元组 表示已知数量和类型的数组。每个元素可以是不同的类型，适合表示固定结构的数据。
let person: [string, number] = ["Alice", 30];
console.log(person[0]); // 输出: Alice
console.log(person[1]); // 输出: 30

enum Color {
    Red,
    Green,
    Blue
}
let favoriteColor: Color = Color.Blue;
console.log(favoriteColor); // 输出: 2

// any类型
let randomValue: any = 42;
randomValue = "hello";

// 联合类型 (Union)
let id: string | number;
id = "123"
id = 456

// unknown 不确定的类型
let value: unknown = "Hello";
if (typeof value === "string") {
  let message: string = value;
}

// 类型断言可以让开发者明确告诉编译器变量的类型，常用于无法推断的情况。可以使用 as 或尖括号语法。
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;

// 字面量类型
let direction: "up" | "down" | "left" | "right";
direction = "up";





// 定义枚举类型，用于表示用户的角色
enum Role {
    Admin,
    User,
    Guest,
  }

  // 使用 interface 定义用户的结构
  interface User {
    id: number;               // number 类型，用于唯一标识用户
    username: string;         // string 类型，表示用户名
    isActive: boolean;        // boolean 类型，表示用户是否激活
    role: Role;               // enum 类型，用于表示用户角色
    hobbies: string[];        // array 类型，存储用户的兴趣爱好
    contactInfo: [string, number]; // tuple 类型，包含电话号码的元组，格式为：[区域码, 电话号码]
  }

  // 创建用户对象，符合 User 接口的结构
  const user: User = {
    id: 1,
    username: "Alice",
    isActive: true,
    role: Role.User,
    hobbies: ["Reading", "Gaming"],
    contactInfo: ["+1", 123456789],
  };

  // 定义一个返回字符串的函数来获取用户信息
  function getUserInfo1(user: User): string {
    return `User ${user.username} is ${user.isActive ? "active" : "inactive"} with role ${Role[user.role]}`;
  }

  // 使用 void 类型定义一个函数，专门打印用户信息
  function printUserInfo1(user: User): void {
    console.log(getUserInfo());
  }

  // 定义一个 union 类型的函数参数，接受用户 ID（number）或用户名（string）
  function findUser(query: number | string): User | undefined {
    // 使用 typeof 来判断 query 的类型
    if (typeof query === "number") {
      // 如果是数字，则根据 ID 查找用户
      return query === user.id ? user : undefined;
    } else if (typeof query === "string") {
      // 如果是字符串，则根据用户名查找用户
      return query === user.username ? user : undefined;
    }
    return undefined;
  }

  // 定义一个 never 类型的函数，用于处理程序的异常情况
  function throwError(message: string): never {
    throw new Error(message);
  }

  // 使用 any 类型处理未知类型的数据
  let unknownData: any = "This is a string";
  unknownData = 42; // 重新赋值为数字，类型为 any

  // 使用 unknown 类型处理不确定的数据，更加安全
  let someData: unknown = "Possible data";
  if (typeof someData === "string") {
    console.log(`Length of data: ${(someData as string).length}`);
  }

  // 调用各个函数并测试
  printUserInfo1(user);                    // 打印用户信息
  console.log(findUser(1));               // 根据 ID 查找用户
  console.log(findUser("Alice"));         // 根据用户名查找用户

  // 使用 null 和 undefined 类型的变量
  let emptyValue: null = null;
  let uninitializedValue: undefined = undefined;