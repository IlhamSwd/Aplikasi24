let nama = "arif";
let hobi = ["Baca", "Bermain game", "Belajar Coding"];

document.getElementById("nama").innerHTML = nama;
document.getElementById("hobi").innerHTML = hobi[2]; 
//  DALAM KURUNG 2 KARENA MEMANGGIL SALAH SATU

 let data =[];

//  MEMANGGIL DATA 
for (const [i, data] of hobi.entries()) {
    document.getElementById("listhobi").innerHTML +=`<li>${data}</li>`;
}