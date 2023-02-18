const calc = require('./rumus.js');
//persegi
let sisi = 6
console.log("PERSEGI 6x6");
console.log("luas = ", calc.luasPersegi(sisi));
console.log("keliling = ", calc.kelilingPersegi(sisi));

//persegi panjang 
let panjang = 4
let lebar = 2
console.log("PERSEGI PANJANG 4x2");
console.log("luas = ", calc.luasPersegiPanjang(panjang, lebar));
console.log("keliling = ", calc.kelilingPersegiPanjang(panjang, lebar));