// Untuk ngeprint
console.log("Hello world");

let nama = "Nando";
console.log(nama);

nama = "Ananta";
console.log(nama);

const nama2 = "Nando";
// nama2 = "irfan";
// console.log(nama2);

const angka = "123";
console.log(typeof angka);

const angkaAsli = Number(angka);
console.log(typeof angkaAsli);

console.log(angkaAsli + 10);
console.log(angka + 10);

const a = 10;
const b = 2;

console.log(a * b);

let jumlahPesananTerkirim = 10;
const statusPesanan = "terkirim";

if (statusPesanan == "terkirim") {
    jumlahPesananTerkirim++;
}

console.log(jumlahPesananTerkirim);

let i = 0;

for (i = 0; i < 3; i++) {
    console.log(i);
}

const namaku = "Benaya";
const umur = 19;

const kalimatPerkenalan = "Hai, aku " + namaku + ". Aku berumur " + umur + " tahun.";
console.log(kalimatPerkenalan);

const kalimatPerkenalan2 = `Hai, aku ${namaku}. Aku berumur ${umur} tahun.`;
console.log(kalimatPerkenalan2);

// Function biasa
function menyapa(nama) {
    console.log(`Halo ${nama}`);
}

menyapa("Nando");
menyapa("Benaya");
menyapa("Naufal");

// Arrow function
const menyapa2 = (nama) => {
    console.log(`Halo ${nama}`);
};

menyapa2("Nando");
menyapa2("Benaya");
menyapa2("Naufal");

const r1 = 10;

const luasLingkaran1 = 3.14 * r1 * r1;

console.log(luasLingkaran1);

const r2 = 20;
const luasLingkaran2 = 3.14 * r2 * r2;
console.log(luasLingkaran2);

// Function biasa
function luasLingkaran(r1) {
    return 3.14 * r1 * r1;
}

console.log(luasLingkaran(10));
console.log(luasLingkaran(20));
console.log(luasLingkaran(15));

// Arrow function
const luasLingkaran3 = (r1, r2) => {
    return 3.14 * r1 * r2;
};

console.log(luasLingkaran3(10, 23));
console.log(luasLingkaran3(20, 43));
console.log(luasLingkaran3(15, 45));

const kumpulanNama = ["Nando", "Benaya", "Naufal"];
// console.log(kumpulanNama);

// kumpulanNama.push("Irfan");
// console.log(kumpulanNama);

kumpulanNama.pop("Naufal");
console.log(kumpulanNama);

const kumpulanAngka = [1, 2, 3, 4, 6, 8, 123, 5];

const hasilMapAngka = kumpulanAngka.map((angka) => {
    return angka * 2;
});

console.log(hasilMapAngka);

const kumpulanAngkaGenap = kumpulanAngka.filter((angka) => {
    return angka % 2 == 0;
});

console.log(kumpulanAngkaGenap);

const angkaGenap = kumpulanAngka.find((angka) => {
    return angka % 2 == 0;
});

console.log(angkaGenap);

const indexAngkaGenap = kumpulanAngka.findIndex((angka) => {
    return angka % 2 == 0;
});

console.log(indexAngkaGenap);

const apakahAdaAngkaGenap = kumpulanAngka.some((angka) => {
    return angka % 2 == 0;
});

console.log(apakahAdaAngkaGenap);

apakahSemuaAngkaGenap = kumpulanAngka.every((angka) => {
    return angka % 2 == 0;
});

console.log(apakahSemuaAngkaGenap);

const orang1 = {
    nama: "Nando",
    umur: 19,
    fruits: ["jeruk", "pear"],
    asal: {
        provinsi: "DIY",
        kabupaten: "Bantul",
    },
};

console.log(orang1.fruits[1]);
console.log(orang1.asal.provinsi);

const orang = (nama, umur, fruits, asalProvinsi, asalKabupaten) => {
    return {
        nama: nama,
        umur: umur,
        fruits: fruits,
        asal: {
            provinsi: asalProvinsi,
            kabupaten: asalKabupaten,
        },
    };
};

const orangPertama = orang("Nando", 19, ["jeruk", "mangga"], "DIY", "Bantul");
console.log(orangPertama);
const orangKedua = orang("Naufal", 20, "pear", "DKI", "Jakarta");
console.log(orangKedua);
