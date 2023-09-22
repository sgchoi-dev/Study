var myName = "kim";
myName = "abc";
var myArray = ["kim", "park"];
var myObject = { name: "kim" }; // ? : name 속성은 옵션이라는 의미
var bothType = "문자 혹은 숫자 둘 다 들어올 수 있음 union type";
var bothType2 = ["문자 배열 or 숫자"];
var newType = "사용자 지정 type";
function myFn(x) {
    // 괄호 밖의 type은 return될 값의 type
    return x * 2;
}
var john = [123, true];
var john2 = { name: "kim" };
var a2 = [1, 2, 3];
var a3 = [1, 2, 3];
var a4 = ["mon", "tue", "wed"];
var a5 = ["mon", "tue", "wed"];
// 튜플 ( Tuple)
var b; // 배열의 첫 요소 : string, 두번째 요소 : number
b = ["string", 1];
// void, never
// void: 함수에서 아무것도 반환하지 않을 때 주로 사용
// never: error를 반환하거나 영원히 끝나지 않는 함수에서 사용
function sayHello() {
    console.log("hello");
}
function showError() {
    throw new Error();
}
function infLoop() {
    while (true) {
        // do something
    }
}
//enum : 비슷한 것들끼리 묶어놓은 것 (수동으로 숫자 부여안하면 자동으로 0,1,2,...)
var Os;
(function (Os) {
    Os[Os["Window"] = 3] = "Window";
    Os[Os["Ios"] = 10] = "Ios";
    Os[Os["Android"] = 11] = "Android";
})(Os || (Os = {}));
console.log(Os[10]); // Ios
console.log(Os["Ios"]); // 10
var myOs;
myOs = Os.Window;
var user = {
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
var add = function (x, y) {
    return x + y;
};
var isAdult = function (age) {
    if (age > 20) {
        return true;
    }
    else {
        return false;
    }
};
console.log(isAdult(25));
var Bmw = /** @class */ (function () {
    function Bmw(c) {
        this.wheels = 4;
        this.color = c;
    }
    Bmw.prototype.start = function () {
        console.log("go..");
    };
    return Bmw;
}());
var vehicle = new Bmw("green");
console.log(vehicle);
vehicle.start();
//
//
//
//
//
// 함수
function add1(num1, num2) {
    // ()괄호 뒤의 :number는 return 값의 type, return값 없으면 void라고 해줘야함
    return num1 + num2;
}
function addArrayNumber() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums.reduce(function (result, num) { return result + num; }, 0);
}
console.log(addArrayNumber(1, 2, 3)); // 6
console.log(addArrayNumber(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // 55
var Sam = { name: "sam" };
function showName(age, gender) {
    console.log(this.name, age, gender);
}
var a = showName.bind(Sam);
a(32, "female"); // sam 32 femail // 전달된 매개변수는 this 다음부터 적용
function join2(name, age) {
    if (typeof age === "number") {
        return {
            name: name,
            age: age,
        };
    }
    else {
        return "나이는 숫자로 입력해주세요";
    }
}
var sam = join2("Sam", 30);
var jane = join2("Sam", "30");
//
//
//
//
//
// Literal Types
var userName1 = "Bob"; // 정해진 문자 값을 가진걸 '문자열 리터럴 타입'이라고 함
var userName2 = "Tom";
function getGift(gift) {
    console.log(gift.color);
    if (gift.name === "car") {
        gift.start();
    }
    else {
        gift.call();
    }
}
var toyCar = {
    name: "타요",
    start: function () { },
    color: "red",
    price: 1000,
};
