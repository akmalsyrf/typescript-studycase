interface Laptop {
  name: string;
  on(): void;
  off(): void;
}

class Asus implements Laptop {
  name: string;
  isGaming: boolean;
  constructor(name: string, isGaming: boolean) {
    this.name = name;
    this.isGaming = isGaming;
  }
  on(): void {
    console.log("nyala");
  }
  off(): void {
    console.log("mati");
  }
}

class Macbook implements Laptop {
  name: string;
  keyboardLight: boolean;
  constructor(name: string, keyboardLight: boolean) {
    this.name = name;
    this.keyboardLight = keyboardLight;
  }
  on(): void {
    console.log("nyala");
  }
  off(): void {
    console.log("mati");
  }
}

let asus = new Asus("Republic of Gaming", true);
console.log(asus.on());
console.log(asus.off());

let mac = new Macbook("PRO", true);
console.log(mac.on());
console.log(mac.off());
