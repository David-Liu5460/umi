declare function create(o: object | null): void;

function testTs () {
    let isDone: boolean = false;

    let decLiteral: number = 6;
    let hexLiteral: number = 0xf00d;
    let binaryLiteral: number = 0b1010;
    let octalLiteral: number = 0o744;

    let name1: string = "bob";
    name1 = "smith";

    let name2: string = `Gene`;
    let age: number = 37;
    let sentence: string = `Hello, my name is ${ name2 }.

    I'll be ${ age + 1 } years old next month.`;


    let list: number[] = [1, 2, 3];

    let listCopy: Array<number> = [1, 2, 3];

    // tuple
    // Declare a tuple type
    let x: [string, number];
    // Initialize it
    x = ['hello', 10]; // OK
    // Initialize it incorrectly
    // x = [10, 'hello']; // Error

    // x[3] = 'world'; // OK, 字符串可以赋值给(string | number)类型

    // console.log(x[5].toString()); // OK, 'string' 和 'number' 都有 toString

    // x[6] = true; // Error, 布尔不是(string | number)类型

    // enum Color { Red, Green, Blue };

    // let c: Color = Color.Green;

    // enum Color {Red = 1, Green, Blue}
    // let c: Color = Color.Green;

    // enum Color {Red = 1, Green = 2, Blue = 4}
    // let c: Color = Color.Green;

    enum Color {Red = 1, Green, Blue}
    let colorName: string = Color[2];

    // console.log(colorName);  // 显示'Green'因为上面代码里它的值是2

    let notSure: any = 4;
    notSure.ifItExists(); // okay, ifItExists might exist at runtime
    notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

    // let prettySure: Object = 4;
    // prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.

    let list2: any[] = [1, true, "free"];

    list2[1] = 100;

    // void
    function warnUser(): void {
        console.log("This is my warning message");
    }

    let unusable: void = undefined;
    // never类型表示的是那些永不存在的值的类型。 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。

    // never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never。

    // 下面是一些返回never类型的函数：


    create({ prop: 0 }); // OK
    create(null); // OK

    // create(42); // Error
    // create("string"); // Error
    // create(false); // Error
    // create(undefined); // Error

    // 类型断言
    // let someValue: any = "this is a string";

    // let strLength: number = (<string>someValue).length;

    let someValue: any = "this is a string";

    let strLength: number = (someValue as string).length;
}

function f({ a, b = 0 } = { a: "" }): void {
    // ...
}

f({ a: "yes" }); // ok, default b = 0
f(); // ok, default to {a: ""}, which then defaults b = 0
f({a : "aaa"}); // error, 'a' is required if you supply an argument





