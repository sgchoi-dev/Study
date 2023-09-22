let myName: string = "kim";
myName = "abc";

let myArray: string[] = ["kim", "park"];

let myObject: { name?: string } = { name: "kim" }; // ? : name 속성은 옵션이라는 의미

let bothType: string | number =
  "문자 혹은 숫자 둘 다 들어올 수 있음 union type";
let bothType2: string[] | number = ["문자 배열 or 숫자"];

type MyType = string | number; // 첫글자는 대문자
let newType: MyType = "사용자 지정 type";

function myFn(x: number): number {
  // 괄호 밖의 type은 return될 값의 type
  return x * 2;
}

//myFn('123'); // 문자이므로 error남

type Member = [number, boolean];
let john: Member = [123, true];

type MemberObj = {
  [key: string]: string;
};
let john2: MemberObj = { name: "kim" };

let a2: Array<number> = [1, 2, 3];
let a3: number[] = [1, 2, 3];

let a4: Array<string> = ["mon", "tue", "wed"];
let a5: string[] = ["mon", "tue", "wed"];

// 튜플 ( Tuple)
let b: [string, number]; // 배열의 첫 요소 : string, 두번째 요소 : number
b = ["string", 1];

// void, never
// void: 함수에서 아무것도 반환하지 않을 때 주로 사용
// never: error를 반환하거나 영원히 끝나지 않는 함수에서 사용
function sayHello(): void {
  console.log("hello");
}

function showError(): never {
  throw new Error();
}

function infLoop(): never {
  while (true) {
    // do something
  }
}

//enum : 비슷한 것들끼리 묶어놓은 것 (수동으로 숫자 부여안하면 자동으로 0,1,2,...)
enum Os {
  Window = 3,
  Ios = 10,
  Android,
}

console.log(Os[10]); // Ios
console.log(Os["Ios"]); // 10

let myOs: Os;
myOs = Os.Window;

// ineterface
/*let user:object;

user = {
  name: 'x',
  age: 30
}

console.log(user.name); // error*/

type Score = "A" | "B" | "C" | "F";

interface User {
  name: string;
  age: number;
  gender?: string; // ? 붙이면 있어도되고 없어도되고라는 뜻
  readonly birthYear: number;
  [grade: number]: Score;
}

let user: User = {
  name: "xx",
  age: 30,
  birthYear: 2000,
  1: "A",
  2: "B",
  //3: "E", // Score에 없는 값을 넣으면 error
  //4: "a", // 소문자 a를 적어도 error
};

user.gender = "female";
//user.birthYear = 1999; // readonly는 못바꿈
console.log(user.name);

interface Add {
  (num1: number, num2: number): number;
}

const add: Add = function (x, y) {
  return x + y;
};

interface isAdult {
  (age: number): boolean;
}

const isAdult: isAdult = (age) => {
  if (age > 20) {
    return true;
  } else {
    return false;
  }
};

console.log(isAdult(25));

// implements
interface Car {
  color: string;
  wheels: number;
  start(): void;
}

/* class Bmw implements Car {
  color: "red";
  wheels: 4;
  start() {
    console.log("go..");
  }
} */

interface Benz extends Car {
  // car가 가지고 있는 속성 이미 가지면서, door, stop 도 추가로 가짐
  door: number;
  stop(): void;
}

class Bmw implements Car {
  color;
  wheels = 4;
  constructor(c: string) {
    this.color = c;
  }
  start() {
    console.log("go..");
  }
}

const vehicle = new Bmw("green");
console.log(vehicle);
vehicle.start();

// extends 여러개 할 수 있음
interface Toy {
  name: string;
}

interface ToyCar extends Car, Toy {
  price: number;
}

//
//
//
//
//

// 함수
function add1(num1: number, num2: number): number {
  // ()괄호 뒤의 :number는 return 값의 type, return값 없으면 void라고 해줘야함
  return num1 + num2;
}

function addArrayNumber(...nums: number[]) {
  return nums.reduce((result, num) => result + num, 0);
}

console.log(addArrayNumber(1, 2, 3)); // 6
console.log(addArrayNumber(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // 55

interface User2 {
  name: string;
}

const Sam: User2 = { name: "sam" };

function showName(this: User, age: number, gender: string) {
  console.log(this.name, age, gender);
}

const a = showName.bind(Sam);
a(32, "female"); // sam 32 femail // 전달된 매개변수는 this 다음부터 적용

// 오버로딩(overloading)
interface User3 {
  name: string;
  age: number;
}

function join2(name: string, age: number): User3; // age를 number로 받았을 때 User3을 반환
function join2(name: string, age: string): string; // age를 string로 받았을 때 string을 반환
function join2(name: string, age: number | string): User3 | string {
  if (typeof age === "number") {
    return {
      name,
      age,
    };
  } else {
    return "나이는 숫자로 입력해주세요";
  }
}

const sam: User3 = join2("Sam", 30);
const jane: string = join2("Sam", "30");

//
//
//
//
//

// Literal Types
const userName1 = "Bob"; // 정해진 문자 값을 가진걸 '문자열 리터럴 타입'이라고 함
let userName2 = "Tom";

//
//
//
//
//
// Union Type
interface Car2 {
  name: "car";
  color: string;
  start(): void;
}

interface Mobile {
  name: "mobile";
  color: string;
  call(): void;
}

function getGift(gift: Car2 | Mobile) {
  console.log(gift.color);

  if (gift.name === "car") {
    gift.start();
  } else {
    gift.call();
  }
}

//
//
//
//
//
//
//
// Intersection Type 교차타입 && 의미
interface Car3 {
  name: string;
  start(): void;
}

interface Toy2 {
  name: string;
  color: string;
  price: number;
}

const toyCar: Toy & Car = {
  name: "타요",
  start() {},
  color: "red",
  price: 1000,
};
