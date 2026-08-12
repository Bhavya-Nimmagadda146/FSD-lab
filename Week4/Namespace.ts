// PROGRAM 1 : Create and Use Namespace

console.log("Program 1 ");

namespace StudentDetails {
    export let name: string = "Bhavya";
    export let course: string = "Computer Science";

    export function displayDetails(): void {
        console.log("Name:", name);
        console.log("Course:", course);
    }
}

StudentDetails.displayDetails();


// PROGRAM 2 : Namespace with Function

console.log("\nProgram 2 ");

namespace Calculator {
    export function add(a: number, b: number): number {
        return a + b;
    }

    export function multiply(a: number, b: number): number {
        return a * b;
    }
}

console.log("Addition:", Calculator.add(10, 20));
console.log("Multiplication:", Calculator.multiply(5, 4));