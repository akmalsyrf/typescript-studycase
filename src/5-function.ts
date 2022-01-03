//return string
function getStr(): string {
  return "Hello typescript";
}
console.log(getStr());

//return number
function getNum(): number {
  // return true;
  return 24;
}
console.log(getNum());

//return string
function getBool(): boolean {
  // return 24;
  return true;
}
console.log(getBool());

//tidak error jika any
function getAny() {
  return "string";
  return 24;
  return true;
}
console.log(getAny());

//return kosong
function getVoid(): void {
  // return "a" //error
  console.log("a");
}
getVoid();
