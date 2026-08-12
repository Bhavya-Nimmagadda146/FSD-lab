class Laptop {
    brand: string;
    price: number;

    constructor(brand: string, price: number) {
        this.brand = brand;
        this.price = price;
    }

    displayDetails(): void {
        console.log("Brand:", this.brand);
        console.log("Price:", this.price);
    }
}

let laptop = new Laptop("Dell", 60000);

laptop.displayDetails();