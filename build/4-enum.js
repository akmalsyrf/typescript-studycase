"use strict";
//numeric enum
var Months;
(function (Months) {
    Months[Months["jan"] = 1] = "jan";
    Months[Months["feb"] = 2] = "feb";
    Months[Months["mar"] = 3] = "mar";
    Months[Months["apr"] = 4] = "apr";
    Months[Months["may"] = 5] = "may";
})(Months || (Months = {}));
console.log(Months);
console.log(Months.jan);
//string enum
var Bulan;
(function (Bulan) {
    Bulan["jan"] = "januari";
    Bulan["feb"] = "februari";
    Bulan["mar"] = "maret";
    Bulan["apr"] = "april";
    Bulan["may"] = "mei";
})(Bulan || (Bulan = {}));
console.log(Bulan);
console.log(Bulan.jan);
