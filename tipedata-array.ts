// array
let names:string[] = ["virgiawan", "teguh", "kusuma"];
let numbers: Array<number> = [1, 2, 3];

// tuple
let student: [string, string, number] = ["virgiawan", "kusuma", 20];
// error case tuple
// let product: [string, number] = ["handphone", 100, "virgiawan"];

console.log(names[0]);
console.log(numbers);
console.log(student[2]);
student[2] = 21;
console.log(student[2]);

// push array
let namesAgain: Array<string> = [];
namesAgain.push("virgiawan");
namesAgain.push("teguh");
namesAgain.push("kusuma");
console.log(namesAgain);

// delete array element
delete namesAgain[1];
console.log(namesAgain);