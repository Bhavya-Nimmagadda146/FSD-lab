// PROGRAM 1 : Variable Type Annotation

console.log("Program 1 ");

let productName: string = "Laptop";
let price: number = 55000;
let available: boolean = true;

console.log(productName);
console.log(price);
console.log(available);


// PROGRAM 2 : Function Annotation

console.log("\nProgram 2 ");

function calculateArea(length: number, width: number): number {
    return length * width;
}

console.log("Area:", calculateArea(10, 5));


// PROGRAM 3 : Array & Object Annotation

console.log("\nProgram 3 ");

let temperatures: number[] = [28, 30, 32];

let product: {
    name: string,
    price: number
} = {
    name: "Headphones",
    price: 2500
};

console.log("Temperatures:", temperatures);
console.log("Product:", product);


// PROGRAM 4 : Function with String Annotation

console.log("\nProgram 4 ");

function welcomeUser(username: string): string {
    return "Welcome " + username;
}

console.log(welcomeUser("Bhavya"));

export {};