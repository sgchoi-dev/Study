var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Car4 = /** @class */ (function () {
    function Car4(color, name) {
        // method1 : 멤버변수 선언
        this.name = "car";
        // method2. color앞에 public 또는 readonly 를 적어줘도 됨
        this.color = color;
        this.name = name;
    }
    Car4.prototype.start = function () {
        console.log("start");
        console.log(Car4.wheels); // static으로 선언되어있어서 this가 아니라 class명을 적어줘야함
    };
    Car4.wheels = 4;
    return Car4;
}());
var Bmw3 = /** @class */ (function (_super) {
    __extends(Bmw3, _super);
    function Bmw3(color, name) {
        return _super.call(this, color, name) || this;
    }
    return Bmw3;
}(Car4));
var bmw2 = new Car4("red", "zzz4"); // readonly인 값 바꿀 때
console.log("Car4.wheels: " + Car4.wheels);
//
//
//
//
//
//
//
// 추상 Class
var Car5 = /** @class */ (function () {
    function Car5(color) {
        this.color = color;
    }
    Car5.prototype.start = function () {
        console.log("start");
    };
    return Car5;
}());
//const car5 = new Car5("red"); // error why?추상클래스는 new 이용하여 객체 만들 수 없음, 상속을 통해서만 사용가능
var Bmw5 = /** @class */ (function (_super) {
    __extends(Bmw5, _super);
    function Bmw5(color) {
        return _super.call(this, color) || this;
    }
    Bmw5.prototype.doSomething = function () {
        alert(5); // 상속 받는 쪽에서 기능을 구체적으로 정의해줘야함
    };
    return Bmw5;
}(Car5));
var z5 = new Bmw5("black");
//
//
//
//
//
//
//
// Generic
function getSize(arr) {
    return arr.length;
}
var arr1 = [1, 2, 3];
console.log(getSize(arr1)); // 사용하는 쪽에서 type 정해줌
console.log(getSize(arr1)); // 사용하는 쪽에서 type 정해줌
/* const m1: Mobile2<object> = {
  name: "s21",
  price: 1000,
  option: {
    color: "red",
    coupon: false,
  },
}; */
var m1 = {
    name: "s21",
    price: 1000,
    option: {
        color: "red",
        coupon: false,
    },
};
var m2 = {
    name: "s20",
    price: 900,
    option: "good",
};
var user6 = { name: "a", age: 10 };
var car = { name: "bmw", color: "red" };
var book = { price: 3000 };
function showName6(data) {
    return data.name;
}
showName6(user);
showName6(car);
var uk = "name"; // "" 는 error 남
//interface User8 {
//  id?: number;
//  name?: string;
//  age?: number;
//  gender?: "m" | "f";
//}
var admin = {
    id: 1,
    name: "Bob",
};
var admin2 = {
    id: 1,
    name: "Bob",
    age: 12, // Required 이므로 age도 필수로 입력해줘야함
};
var admin3 = {
    id: 1,
    name: "BoB",
};
var score2 = {
    1: "A",
    2: "C",
    3: "B",
    4: "D",
};
function isValid(user) {
    var result = {
        id: user.id > 0,
        name: user.name !== "",
        age: user.age > 0,
    };
    return result;
}
var admin4 = {
    id: 4,
    name: "BOB",
};
var admin5 = {
    // id와 name만 제외해서 사용하겠다
    age: 14,
    gender: "M",
};
