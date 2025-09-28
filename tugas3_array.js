// Sistem Manajemen Produk Toko Online

// Array produk awal
let produkToko = [
  { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
  { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
  { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
];

// Fungsi untuk menambahkan produk baru
function tambahProduk(nama, harga, stok) {
  let idBaru = produkToko.length > 0 ? produkToko[produkToko.length - 1].id + 1 : 1;
  let produkBaru = { id: idBaru, nama: nama, harga: harga, stok: stok };

  produkToko.push(produkBaru);
  console.log(`Produk "${nama}" berhasil ditambahkan.`);
}

// Fungsi untuk menghapus produk berdasarkan ID
function hapusProduk(id) {
  let index = produkToko.findIndex(produk => produk.id === id);

  if (index !== -1) {
    console.log(`Produk "${produkToko[index].nama}" berhasil dihapus.`);
    produkToko.splice(index, 1);
  } else {
    console.log(`Produk dengan ID ${id} tidak ditemukan.`);
  }
}

// Fungsi untuk menampilkan daftar produk
function tampilkanProduk() {
  console.log("===== Daftar Produk Toko =====");
  produkToko.forEach(produk => {
    console.log(
      `ID: ${produk.id}, Nama: ${produk.nama}, Harga: Rp${produk.harga}, Stok: ${produk.stok}`
    );
  });
  console.log("==============================");
}

// ----------------------------
// Contoh penggunaan
// ----------------------------
tampilkanProduk();                  // Tampilkan produk awal
tambahProduk("Headset", 500000, 8); // Tambah produk baru
tampilkanProduk();                  // Tampilkan produk setelah ditambah
hapusProduk(2);                     // Hapus produk dengan id=2 (Mouse)
tampilkanProduk();                  // Tampilkan produk setelah dihapus

