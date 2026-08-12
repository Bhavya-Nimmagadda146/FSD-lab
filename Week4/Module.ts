// MODULE 1 : Export Variables and Functions

export let collegeName: string = "ABC College";

export function displayCollege(): void {
    console.log("College:", collegeName);
}

export function calculatePercentage(marks: number, total: number): number {
    return (marks / total) * 100;
}