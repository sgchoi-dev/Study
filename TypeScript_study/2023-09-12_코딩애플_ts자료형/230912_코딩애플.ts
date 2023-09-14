let myName :string = "kim";
myName = "abc";

let myArray :string[] = ["kim", 'park'];

let myObject :{name?: string} = {name: 'kim'}; // ? : name 속성은 옵션이라는 의미

let bothType :string | number = '문자 혹은 숫자 둘 다 들어올 수 있음 union type';
let bothType2 :string[] | number = ['문자 배열 or 숫자'];

type MyType = string | number; // 첫글자는 대문자
let newType :MyType = '사용자 지정 type';

function myFn(x :number) :number { // 괄호 밖의 type은 return될 값의 type
  return x * 2;  
}

//myFn('123'); // 문자이므로 error남

type Member = [number, boolean];
let john :Member = [123, true];

type MemberObj = {
  [key: string] : string
}
let john2 :MemberObj = {name: 'kim'}