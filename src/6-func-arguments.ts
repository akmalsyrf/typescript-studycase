function multiply(num1: number, num2: number): number {
  return num1 * num2;
}
console.log(multiply(2, 3));

//default parameter
function fullname(first: string, last: string = "bin fulan"): string {
  return first + " " + last;
}
console.log(fullname("Agan"));

//optional parameter
//
function namaLengkap(first: string, last?: string): string {
  return first + " " + last;
}
console.log(namaLengkap("Agan"));
//
// function sumAge(val1: number, val2?: number): number {
//   return val1 + val2; //error karena optional bisa mengembalikan undefined yg tidak bisa dilakukan pd return number
// }

//function as type
//
type Age = number;
let age: Age = 24;
//
type MathOPS = (val1: number, val2: number) => number;
const tambah: MathOPS = (val1: number, val2: number): number => {
  return val1 + val2;
};
