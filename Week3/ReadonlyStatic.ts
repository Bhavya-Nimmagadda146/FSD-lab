// PROGRAM 1 : Readonly Property

console.log("Program 1 ");

class Student {
    readonly rollNumber: number;
    name: string;

    constructor(rollNumber: number, name: string) {
        this.rollNumber = rollNumber;
        this.name = name;
    }

    displayStudent(): void {
        console.log("Roll Number:", this.rollNumber);
        console.log("Name:", this.name);
    }
}

let student = new Student(101, "Bhavya");

student.displayStudent();


// PROGRAM 2 : Static Property

console.log("\nProgram 2 ");

class Product {
    static category: string = "Electronics";

    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    displayProduct(): void {
        console.log("Product:", this.name);
        console.log("Price:", this.price);
    }
}

let product1 = new Product("Laptop", 55000);
let product2 = new Product("Tablet", 25000);

product1.displayProduct();
product2.displayProduct();

console.log("Category:", Product.category);


// PROGRAM 3 : Static Method

console.log("\nProgram 3 ");

class Calculator {
    static square(number: number): number {
        return number * number;
    }
}

console.log("Square:", Calculator.square(8));