class SistemTransportasi {
  constructor() {
    this.daftarPelanggan = [];
  }

  tambahPelanggan(pelanggan) {
    this.daftarPelanggan.push(pelanggan);
  }

  tampilkanPelanggan() {
    console.log("===== Daftar Pelanggan Penyewa Kendaraan =====");
    if (this.daftarPelanggan.length === 0) {
      console.log("Belum ada pelanggan yang menyewa kendaraan.");
    } else {
      this.daftarPelanggan.forEach((pelanggan, index) => {
        console.log(`${index + 1}. ${pelanggan.infoPelanggan()}`);
      });
    }
    console.log("=============================================");
  }
}

module.exports = SistemTransportasi;
