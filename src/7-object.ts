let user = {
  name: "meliodas",
  age: 17,
};
// user = {
//   alamat: "poponcol",
// }; // error (butuh age bertipe number)

user = {
  name: "orang",
  age: 50,
};

//obj types
type Orang = {
  name: string;
  age: number;
};

let user2: Orang = {
  name: "a",
  age: 20,
};
