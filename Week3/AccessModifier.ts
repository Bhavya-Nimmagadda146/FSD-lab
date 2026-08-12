// PROGRAM 1 : Public Access Modifier

console.log("Program 1 ");

class Employee {
    public name: string;
    public department: string;

    constructor(name: string, department: string) {
        this.name = name;
        this.department = department;
    }

    public displayDetails(): void {
        console.log("Name:", this.name);
        console.log("Department:", this.department);
    }
}

let employee = new Employee("Bhavya", "Development");

employee.displayDetails();
console.log("Employee Name:", employee.name);


// PROGRAM 2 : Private Access Modifier

console.log("\nProgram 2 ");

class BankAccount {
    private balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    public showBalance(): void {
        console.log("Balance:", this.balance);
    }

    public deposit(amount: number): void {
        this.balance += amount;
    }
}

let account = new BankAccount(5000);

account.showBalance();
account.deposit(1500);
account.showBalance();


// PROGRAM 3 : Protected Access Modifier

console.log("\nProgram 3 ");

class Vehicle {
    protected brand: string;

    constructor(brand: string) {
        this.brand = brand;
    }
}

class Car extends Vehicle {
    public displayBrand(): void {
        console.log("Car Brand:", this.brand);
    }
}

let car = new Car("Toyota");

car.displayBrand();