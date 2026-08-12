// PROGRAM 1 : Basic Arrow Function

console.log("Program 1 ");

const addNumbers = (a: number, b: number): number => {
    return a + b;
};

console.log("Sum:", addNumbers(10, 20));


// PROGRAM 2 : Arrow Function with Short-hand Return

console.log("\nProgram 2 ");

const multiplyNumbers = (a: number, b: number): number => a * b;

console.log("Product:", multiplyNumbers(5, 6));


// PROGRAM 3 : Arrow Function with One Parameter

console.log("\nProgram 3 ");

const square = (number: number): number => number * number;

console.log("Square:", square(8));


// PROGRAM 4 : Convert Normal Function into Arrow Function

console.log("\nProgram 4 ");

function subtract(a: number, b: number): number {
    return a - b;
}

const subtractArrow = (a: number, b: number): number => a - b;

console.log("Normal Function:", subtract(30, 10));
console.log("Arrow Function:", subtractArrow(30, 10));


// PROGRAM 5 : Arrow Function with Optional Parameter

console.log("\nProgram 5 ");

const greetUser = (name: string, message?: string): void => {
    if (message !== undefined) {
        console.log(message + ", " + name);
    } else {
        console.log("Hello " + name);
    }
};

greetUser("Bhavya");
greetUser("Bhavya", "Good Morning");


// PROGRAM 6 : Arrow Function with Default Parameter

console.log("\nProgram 6 ");

const calculatePrice = (price: number, discount: number = 10): number =>
    price - (price * discount / 100);

console.log("Final Price:", calculatePrice(2000));
console.log("Final Price:", calculatePrice(2000, 20));


// PROGRAM 7 : Arrow Function with REST Parameter

console.log("\nProgram 7 ");

const findTotal = (...numbers: number[]): number => {
    let total: number = 0;

    for (let number of numbers) {
        total += number;
    }

    return total;
};

console.log("Total:", findTotal(10, 20, 30));
console.log("Total:", findTotal(5, 15, 25, 35));