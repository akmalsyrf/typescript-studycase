"use strict";
class User {
    constructor(name, age) {
        this.age = age;
        this.name = name;
        //this age tidak ditulis karena dia public
    }
    setName(val) {
        this.name = val;
    }
    getName() {
        return this.name;
    }
}
let orang = new User("Agan", 17);
console.log(orang);
//inheritance
class Admin extends User {
    constructor() {
        super(...arguments);
        this.read = true;
        this.write = true;
        this._email = "";
    }
    getRole() {
        return {
            read: this.read,
            write: this.write,
        };
    }
    set email(value) {
        this._email = value;
    }
    get email() {
        return this._email;
    }
}
Admin.getRoleName = "manusia";
let admin = new Admin("Meliodas", 25);
admin.getName();
admin.getRole();
admin.setName("fulan");
//getter setter
admin.email = "orang@mail.com";
console.log(admin);
//static
console.log(Admin.getRoleName);
