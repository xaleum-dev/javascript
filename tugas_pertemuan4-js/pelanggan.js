class Pelanggan {
  constructor(nama, nomorTelepon) {
    this.nama = nama;
    this.nomorTelepon = nomorTelepon;
    this.kendaraanDisewa = null;
  }

  sewaKendaraan(kendaraan) {
    this.kendaraanDisewa = kendaraan;
    console.log(`${this.nama} telah menyewa ${kendaraan}.`);
  }

  infoPelanggan() {
    return `Nama: ${this.nama}, No. Telp: ${this.nomorTelepon}, Kendaraan: ${this.kendaraanDisewa ? this.kendaraanDisewa : "Belum sewa"}`;
  }
}

module.exports = Pelanggan;
