import users from "./data.mjs";

// Tampilkan semua data
const index = () => {
  console.log("=== Data Users ===");
  users.map((user, i) => {
    console.log(`${i + 1}. Nama: ${user.nama}, Umur: ${user.umur}, Alamat: ${user.alamat}, Email: ${user.email}`);
  });
};

// Tambah data baru
const store = (user) => {
  users.push(user);
  console.log(`Data berhasil ditambahkan: ${user.nama}`);
};

// Hapus data berdasarkan index (id)
const destroy = (id) => {
  if (id >= 0 && id < users.length) {
    const deleted = users.splice(id, 1);
    console.log(`Data berhasil dihapus: ${deleted[0].nama}`);
  } else {
    console.log("ID tidak ditemukan!");
  }
};

export { index, store, destroy };
