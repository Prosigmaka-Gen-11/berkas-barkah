// bagian 1 function yg mereturn perkalian
function perkalian(bil1, bil2) {
  return "hasil perkalian: " + bil1 * bil2;
}

// bagian 2 buat variable
const buatVar = {
  nama: "barkah",
  umur: 23,
  kuliah: {
    jurusan: "informatika",
    fakultas: "informatika",
  },
  sayaKuliahDimana: function kuliahDisini() {
    return this.nama + this.kuliah.jurusan;
  },
  manggilPerkalian: perkalian,
};

// bagian 3 menampilkan consolelog function perkalian
const count = buatVar.manggilPerkalian(2, 2);
console.log(count);
