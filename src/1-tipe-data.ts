//string
let nama = "Meliodas";
// nama = [] //error karena "nama" sudah otomatis diinisiasi sbg string
nama = "Bang";
console.log(nama);

// number
let num = 10;
// num ={}
num = 2;
console.log(num);

// boolean
let bool = true;
// bool ="meliodas"
bool = false;
console.log(bool);

//any
let hero: any = "Iron man";
hero = true;
console.log(hero);

//union
let phone: number | string;
phone = 628123456789;
phone = "08123456789";
