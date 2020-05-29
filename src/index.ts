
// let userName:string;

// userName = "333"

//  function sum(a:number, b:number){
//    return a + b
//  }

//  let num = sum(2, 4)

// function isOdd (n:number):boolean {
//   return n % 2 === 0
// }

// let nums:number[]

// let nums:Array<number> = [3, 4, 5]

// let u:object;

// u = {
//   name: 'sdf',
//   age: 18
// }

// function printValues(obj:object) {
//   const vals = Object.values(obj)
//   vals.forEach(v => {
//     console.log(v)
//   });
// }


// printValues({
//   name: 'afd',
//   age: 20
// })

// let str:string | undefined;

// if(typeof str === 'string') {
//   // 类型保护
//   str
// }

function printMenu():void {
  console.log("1. 登录")
  console.log("1. 注册")
}

function throwError(msg:string):never {
  throw new Error(msg)
}

function alwaysDoSomething():never {
  while(true) {
    // ....
  }
}

// 字面量约束
// let a:"A";

// let gender: "男" | "女"

// let arr:[]; // arr永远只能取值为一个空数组

// let user:{
//   name: string
//   age:number
// }

// user = {
//   name: "ss",
//   age: 22
// }
// let tu:[string, number]

// type User = {
//   name: String,
//   age: number,
//   gender: "男" | "女"
// }


// let u: User

// u = {
//   name: "sddd",
//   gender: "男",
//   age: 34
// }

// function getUsers():User[]{
//   return []
// }

/**
 * 得到a*b的结果
 * @param a 
 * @param b 
 */
function combine(a:number, b:number):number;
/**
 * 得到a和b拼接的结果
 * @param a 
 * @param b 
 */
function combine(a:string, b:string):string;
function combine(a: number | string, b:number|string): number | string {
  if(typeof a === 'number' && typeof b === 'number') {
    return a * b
  } else if(typeof a === 'string' && typeof b === 'string') {
    return a + b
  } else {
    throw Error("a和b必须是相同的类型")
  }
}

function sum(a: number, b: number, c?: number) {
  if(c) {
    return a + b + c
  } else {
    return a + b
  }
}

sum(3, 4);

sum (3, 4, 5)