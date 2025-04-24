import { uppercase } from './legacy-utils.ts';
const result = uppercase('hello');  // TS 校验参数类型为 string，返回值为 string
console.log(result);  // 输出："HELLO"