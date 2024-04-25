let nama = "arif";
let hobi = ["Baca", "Bermain game", "Belajar Coding"];

document.getElementById("nama").innerHTML = nama;
document.getElementById("hobi").innerHTML = hobi[2];

 let data =[];

for (const [i, data] of hobi.entries()) {
    document.getElementById("listhobi").innerHTML +=`<li>${data}</li>`;
}