// PROGRAM 1 : Function with Parameter and Return Type

console.log("Program 1 ");

function calculateSum(a: number, b: number): number {
    return a + b;
}

console.log("Sum:", calculateSum(20, 30));


// PROGRAM 2 : Function without Return Value

console.log("\nProgram 2 ");

function displayUser(name: string): void {
    console.log("User Name:", name);
}

displayUser("Bhavya");


// PROGRAM 3 : Optional Parameter

console.log("\nProgram 3 ");

function showDetails(name: string, age?: number): void {
    console.log("Name:", name);

    if (age !== undefined) {
        console.log("Age:", age);
    }
}

showDetails("Bhavya");
showDetails("Rahul", 22);


// PROGRAM 4 : Default Parameter

console.log("\nProgram 4 ");

function calculateBill(amount: number, tax: number = 5): number {
    return amount + (amount * tax / 100);
}

console.log("Bill:", calculateBill(1000));
console.log("Bill:", calculateBill(1000, 10));


// PROGRAM 5 : REST Parameter

console.log("\nProgram 5 ");

function calculateTotal(...values: number[]): number {
    let total: number = 0;

    for (let value of values) {
        total += value;
    }

    return total;
}

console.log("Total:", calculateTotal(10, 20, 30));
console.log("Total:", calculateTotal(5, 10, 15, 20));