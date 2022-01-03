//tanpa generic
function getData(value: any) {
  return value;
}
console.log(getData("Meliodas").length);
console.log(getData(123).length); //undefined

`---------------------------------------------`;

//generic : tipe data didefinisikan sesuai dengan tipe value yg pertama kali dimasukkan
function myData<T>(value: T) {
  // bebas, tidak selalu T
  return value;
}
console.log(myData("Meliodas").length);
// console.log(myData(123).length); //error
console.log(myData(123));

`--------------------------------------------`;

//generic di arrow function
const arrowFunc = <T>(value: T) => {};

`--------------------------------------------`;

//generic di JSX
//1
// const funcInJSX = <T extends unknown>(value: T) => {};
//2
// const funcInJSX = <T,>(value: T) => {};
//3
const funcInJSX = <T extends {}>(value: T) => {};
