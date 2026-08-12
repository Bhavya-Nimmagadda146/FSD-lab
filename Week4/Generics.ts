// PROGRAM 1 : Generic Variable

console.log("Program 1 ");

let numberValue: Array<number> = [10, 20, 30];
let stringValue: Array<string> = ["Java", "TypeScript", "Python"];

console.log("Numbers:", numberValue);
console.log("Languages:", stringValue);


// PROGRAM 2 : Generic Function

console.log("\nProgram 2 ");

function displayValue<T>(value: T): T {
    return value;
}

console.log("Number:", displayValue<number>(100));
console.log("String:", displayValue<string>("TypeScript"));
console.log("Boolean:", displayValue<boolean>(true));


// PROGRAM 3 : Generic Function with Array

console.log("\nProgram 3 ");

function getFirstElement<T>(items: T[]): T {
    return items[0];
}

console.log("First Number:", getFirstElement<number>([10, 20, 30]));
console.log(
    "First Language:",
    getFirstElement<string>(["Java", "Python", "TypeScript"])
);


// PROGRAM 4 : Generic Constraint

console.log("\nProgram 4 ");

function displayLength<T extends { length: number }>(value: T): void {
    console.log("Length:", value.length);
}

displayLength("TypeScript");
displayLength([10, 20, 30, 40]);


// PROGRAM 5 : Generic Constraint with Interface

console.log("\nProgram 5 ");

interface Product {
    name: string;
    price: number;
}

function displayProduct<T extends Product>(product: T): void {
    console.log("Product:", product.name);
    console.log("Price:", product.price);
}

displayProduct({
    name: "Laptop",
    price: 55000
});