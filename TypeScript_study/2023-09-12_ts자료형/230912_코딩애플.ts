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

const toyCar: Toy2 & Car3 = {
  name: "타요",
  start() {},
  color: "red",
  price: 1000,
};

//
//
//
//
//
//
//
// Class 클래스

/*접근 제한자(Access modifier)
  1. public:자식 class 에서 접근가능, class 인스턴스에서도 접근가능
  2. private(#):자식 class 에서 접근불가
  3. protected: 자식 class 에서는 참조 가능, class 인스턴스에서는 참조 불가능 */
class Car4 {
  // method1 : 멤버변수 선언
  readonly name: string = "car";
  color: string; // typescript 에서는 멤버변수(객체안, 메소드 밖 변수) 설정해야함
  static wheels = 4;
  constructor(color: string, name) {
    // method2. color앞에 public 또는 readonly 를 적어줘도 됨
    this.color = color;
    this.name = name;
  }
  start() {
    console.log("start");
    console.log(Car4.wheels); // static으로 선언되어있어서 this가 아니라 class명을 적어줘야함
  }
}

class Bmw3 extends Car4 {
  constructor(color: string, name) {
    super(color, name);
  }
}

const bmw2 = new Car4("red", "zzz4"); // readonly인 값 바꿀 때
console.log("Car4.wheels: " + Car4.wheels);

//
//
//
//
//
//
//
// 추상 Class
abstract class Car5 {
  color: string;
  constructor(color: string) {
    this.color = color;
  }

  start() {
    console.log("start");
  }
  abstract doSomething(): void; // 추상 클래스 내부의 추상 메소드는 반드시 상속받은쪽에서 구체적인 선언을 해줘야함
}

//const car5 = new Car5("red"); // error why?추상클래스는 new 이용하여 객체 만들 수 없음, 상속을 통해서만 사용가능

class Bmw5 extends Car5 {
  constructor(color: string) {
    super(color);
  }
  doSomething() {
    alert(5); // 상속 받는 쪽에서 기능을 구체적으로 정의해줘야함
  }
}

const z5 = new Bmw5("black");

//
//
//
//
//
//
//
// Generic
function getSize<T>(arr: T[]): number {
  return arr.length;
}

const arr1 = [1, 2, 3];
console.log(getSize<number>(arr1)); // 사용하는 쪽에서 type 정해줌
console.log(getSize<string>(arr1)); // 사용하는 쪽에서 type 정해줌

interface Mobile2<T> {
  name: string;
  price: number;
  option: T;
}

/* const m1: Mobile2<object> = {
  name: "s21",
  price: 1000,
  option: {
    color: "red",
    coupon: false,
  },
}; */

const m1: Mobile2<{ color: string; coupon: boolean }> = {
  name: "s21",
  price: 1000,
  option: {
    color: "red",
    coupon: false,
  },
};

const m2: Mobile2<string> = {
  name: "s20",
  price: 900,
  option: "good",
};

interface User6 {
  name: string;
  age: number;
}

interface Car6 {
  name: string;
  color: string;
}

interface Book6 {
  price: number;
}

const user6: User6 = { name: "a", age: 10 };
const car: Car6 = { name: "bmw", color: "red" };
const book: Book6 = { price: 3000 };

function showName6<T extends { name: string }>(data: T): string {
  return data.name;
}

showName6(user);
showName6(car);
//showName6(book); // name이 없거나 string이 아니라서 error가 나는거임

//
//
//
//
//
//
//
// keyof

interface User7 {
  id: number;
  name: string;
  age: number;
  gender: "m" | "f";
}

type UserKey = keyof User; // 'id' | 'name' | 'age' | 'gender'

const uk: UserKey = "name"; // "" 는 error 남

//
//
//
//
//
//
//
// Partial<T> // property를 option으로 바꿔주기 때문에 일부만 사용하는 것이 가능
interface User8 {
  id: number;
  name: string;
  age: number;
  gender: "m" | "f";
}

//interface User8 {
//  id?: number;
//  name?: string;
//  age?: number;
//  gender?: "m" | "f";
//}

let admin: Partial<User8> = {
  id: 1,
  name: "Bob",
};

//
//
//
//
//
//
//
// Required<T>
interface User9 {
  id: number;
  name: string;
  age?: number;
}

let admin2: Required<User9> = {
  id: 1,
  name: "Bob",
  age: 12, // Required 이므로 age도 필수로 입력해줘야함
};

//
//
//
//
//
//
//
// Readonly<T>
interface User10 {
  id: number;
  name: string;
  age?: number;
}

let admin3: Readonly<User10> = {
  id: 1,
  name: "BoB",
};

//admin3.id = 4; Readonly 라서 값 바꿀 수 없음

//
//
//
//
//
//
//
// Record<K,T> K: key, T: type

/*interface Score2 {
  "1": "A" | "B" | "C" | "D";
  "2": "A" | "B" | "C" | "D";
  "3": "A" | "B" | "C" | "D";
  "4": "A" | "B" | "C" | "D";
}*/

type Grade2 = "1" | "2" | "3" | "4";
type Score2 = "A" | "B" | "C" | "D";

const score2: Record<Grade2, Score2> = {
  1: "A",
  2: "C",
  3: "B",
  4: "D",
};

interface User11 {
  id: number;
  name: string;
  age: number;
}

function isValid(user: User11) {
  const result: Record<keyof User11, boolean> = {
    id: user.id > 0,
    name: user.name !== "",
    age: user.age > 0,
  };
  return result;
}

//
//
//
//
//
//
// Pick<T,K> T type에서 K 프로퍼티만 골라서 사용
interface User12 {
  id: number;
  name: string;
  age: number;
  gender: "M" | "w";
}

const admin4: Pick<User12, "id" | "name"> = {
  id: 4,
  name: "BOB",
};

//
//
//
//
//
//
// Omit<T,K> T type에서 K 프로퍼티만 생략해서 사용
interface User13 {
  id: number;
  name: string;
  age: number;
  gender: "M" | "w";
}

const admin5: Omit<User13, "id" | "name"> = {
  // id와 name만 제외해서 사용하겠다
  age: 14,
  gender: "M",
};

//
//
//
//
//
//
// Exclude<T1,T2> T1의 타입들 중 T2 타입과 겹치는 타입을 제외
type T1 = string | number | boolean;
type T2 = Exclude<T1, number | string>; // T1에서 number와 string을 제외, boolean만 남음

//
//
//
//
//
//
// NonNullable<Type>
type T3 = string | null | undefined | void | undefined;
type T4 = NonNullable<T1>; // null, undefined 제외한 type생성
