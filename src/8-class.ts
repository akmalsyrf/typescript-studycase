class User {
  public name: string;
  constructor(name: string, public age: number) {
    this.name = name;
    //this age tidak ditulis karena dia public
  }
  setName(val: string): void {
    this.name = val;
  }
  getName(): string {
    return this.name;
  }
}
let orang = new User("Agan", 17);
console.log(orang);

//inheritance
class Admin extends User {
  read: boolean = true;
  write: boolean = true;
  private _email: string = "";
  static getRoleName: string = "manusia";

  getRole(): { read: boolean; write: boolean } {
    return {
      read: this.read,
      write: this.write,
    };
  }

  set email(value: string) {
    this._email = value;
  }
  get email(): string {
    return this._email;
  }
}
let admin = new Admin("Meliodas", 25);
admin.getName();
admin.getRole();
admin.setName("fulan");

//getter setter
admin.email = "orang@mail.com";
console.log(admin);

//static
console.log(Admin.getRoleName);
