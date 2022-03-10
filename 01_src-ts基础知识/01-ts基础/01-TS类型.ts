// 1.基本类型
// string 类型
let myname: string = "gaoao";
myname.substring(0, 1);

// number类型
let myage: number = 18;
myage.toFixed(1);

// boolean类型
let myshow: boolean = false;
myshow = true;
console.log(myshow);

//联合类型
let my: number | string = "gaoao";

// any类型
let x: any = 1;

// 2.引用类型
// array类型
let myarray: string[] = ["a", "b"];
let myarray2: number[] = [1, 2, 3];
let myarray3: (number | string)[] = [1, 2, 3, "3"];
myarray3.push(1);

let yourArrary: Array<number | string> = [1];
yourArrary.push("1");

//obj类型
//接口
interface IObj1 {
  name: string;
  age: number;
  isStudent: boolean;
  location?: string; //可选属性
  [propName: string | number]: any;
}
let obj1: IObj1 = {
  name: "gaoao",
  age: 18,
  isStudent: true,
  height: 188,
};

obj1.age = 28;

// function类型
function foo(name: string, age: number): string {
  name.slice(0, 1);

  return age + "1";
}
let result: string = foo("gao", 18);
console.log(result);

interface IFunc {
  (a: string, b: string, c?: number): string;
}

let bar: IFunc = (name: string = "gt", sex: string, age?: number): string => {
  return name;
};
console.log(bar("gaotao", "男", 18));

interface IObj2 {
  name: string,
  age: number,
  getNumber: (name: string) => string
}

let obj2:IObj2 = {
  name: 'gaoao',
  age: 18,
  getNumber(name: string) {
    return name
  }
}
obj2.age = 12
export default {};
