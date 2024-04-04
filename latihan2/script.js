let data = ["danang" , "faldi" , "rismanto"];
let listMhs = document.getElementById("listMhs");

data.forEach(showMahasiswa);

function showMahasiswa(value, index) {
    console.log(value);
    // listMhs.innerHTML = "<li>" + value + "</li>";
    // atau
    listMhs.innerHTML += `<li>${value}</li>`;
}

let npm = document.getElementById("npm");
// tampilkan data localStorage ke dalam elemen <p id="npm">
npm.innerHTML = localStorage.getItem("npm");

let nama = document.getElementById("nama");
nama.innerHTML = localStorage.getItem("nama");

// simpan data ke localStorage
localStorage.setItem("email", "ilhamswandanang@test.com");

// data array
let hobi = ["membaca", "game", "code"];
localStorage.setItem("hobi", hobi);
localStorage.setItem("myhobi", JSON.stringify(hobi));

// data object
let mhs = {"npm": 2226240152, nama: "ilhamdan"};
//  cara akses
console.log(mhs.npm);
console.log(mhs.nama);

// kombinasi array dan object
let nilai = [
    {"kode_MK" : "SI001", "nama_MK" : "Pemrograman Web"},
    {"kode_MK" : "SI002", "nama_MK" : "PAB"},
];

// tampilkan nama_MK Pemrograman Web, jika tampil satu satu
console.log(nilai[0].nama_MK);
console.log(nilai[1].nama_MK);

// Simpan nilai kedalam localStorage
localStorage.setItem("nilai", JSON.stringify(nilai));

// tampilkan menggunakan for atau forEach
let lsNilai = JSON.parse(localStorage.getItem("nilai"));
for (const [index, data] of lsNilai.entries()) {
    console.log(data.kode_MK);
    console.log(data.nama_MK);

    // tampilkan data mk ke dalam <ul id="ListMK">
    document.getElementById("listMk").innerHTML +=`<li>${data.nama_MK}</li>`
}

