interface LabelledValue {
  label: string;
}

function printLabel(labelledObj: LabelledValue) {
console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

// interface SquareConfig {
//     color?: string;
//     width?: number;
//     }

// type SquareConfig = {
//     color?: string;
//     width?: number;
// }

// function createSquare(config: SquareConfig): {color: string; area: number} {
//     let newSquare = {color: "white", area: 100};
//     if (config.color) {
//         newSquare.color = config.color;
//     }
//     if (config.width) {
//         newSquare.area = config.width * config.width;
//     }
//     return newSquare;
// }

// let mySquare = createSquare({color: "black"});

// interface SquareConfig {
//     color?: string;
//     width?: number;
// }

// 额外的属性检查
interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    // ...
    let obj = { color: 'red', area: 24 };
    return obj;
}

// error: 'colour' not expected in type 'SquareConfig'
let mySquare = createSquare({ colour: "red", width: 100 });

// 函数类型
interface SearchFunc {
    (source: string, substring: string): boolean;
}

// let mySearch: SearchFunc;
// mySearch = function(source: string, subString: string) {
//   let result = source.search(subString);
//   return result > -1;
// }

let mySearch: SearchFunc;
mySearch = function(src, sub) {
    let result = src.search(sub);
    return result > -1;
}

// 可索引的类型

class Animal {
    name: string;
    constructor(name: string) {
        this.name = name
     }
}

class Dog extends Animal {
    breed: string;
}

// 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
interface NotOkay {
    [x: number]: Animal;
    // [x: string]: Dog;
}

// interface Point {
//     readonly x: number;
//     readonly y: number;
// }

// 类类型
// interface ClockInterface {
//     currentTime: Date;
// }

// class Clock implements ClockInterface {
//     currentTime: Date;
//     constructor(h: number, m: number) { }
// }

// interface ClockInterface {
//     currentTime: Date;
//     setTime(d: Date): any;
// }

// class Clock implements ClockInterface {
//     currentTime: Date;
//     setTime(d: Date) {
//         this.currentTime = d;
//     }
//     constructor(h: number, m: number) { }
// }

// 类静态部分和实例部分
// interface ClockConstructor {
//     new (hour: number, minute: number);
// }

// class Clock implements ClockConstructor {
//     currentTime: Date;
//     constructor(h: number, m: number) { }
// }

interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
    tick(): any;
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
}
class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("tick tock");
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);


// 接口继承类
class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() { }
}

class TextBox extends Control {
    select() { }
}

// 错误：“Image”类型缺少“state”属性。
class Image12 implements SelectableControl {
    select() { }
}

class Location1 {

}




