// PROGRAM 1 : any Type
console.log("\nProgram 1 : ");

let userData: any;

userData = 25;
console.log("Number:", userData);

userData = "Bhavya";
console.log("String:", userData);

userData = true;
console.log("Boolean:", userData);


// PROGRAM 2 : unknown Type
console.log("\nProgram 2 : ");

let input: unknown;

input = "TypeScript";

if (typeof input === "string") {
    console.log("String Length:", input.length);
}

input = 100;

if (typeof input === "number") {
    console.log("Number after multiplication:", input * 2);
}


// PROGRAM 3 : void Type
console.log("\nProgram 3 : ");

function displayMessage(message: string): void {
    console.log("Message:", message);
}

displayMessage("Learning Special Types in TypeScript");


// PROGRAM 4 : void Function
console.log("\nProgram 4 : ");

function showDetails(name: string, age: number): void {
    console.log("Name:", name);
    console.log("Age:", age);
}

showDetails("Bhavya", 20);