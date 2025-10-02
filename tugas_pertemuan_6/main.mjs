import { index, store, destroy } from "./controller.mjs";

const main = () => {
  // Tambah minimal 2 data baru
  store({ nama: "Data 11", umur: 30, alamat: "Jl. Data 11", email: "data11@mail.com" });
  store({ nama: "Data 12", umur: 31, alamat: "Jl. Data 12", email: "data12@mail.com" });

  // Tampilkan semua data
  index();

  // Hapus data ke-2 (index ke-1)
  destroy(4);

  // Tampilkan lagi setelah dihapus
  index();
};

main();
