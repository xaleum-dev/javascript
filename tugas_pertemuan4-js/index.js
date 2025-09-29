const Pelanggan = require("./Pelanggan");
const SistemTransportasi = require("./SistemTransportasi");

let sistem = new SistemTransportasi();

let pelanggan1 = new Pelanggan("Andi", "08123456789");
let pelanggan2 = new Pelanggan("Budi", "08234567890");

pelanggan1.sewaKendaraan("Mobil");
pelanggan2.sewaKendaraan("Motor");

sistem.tambahPelanggan(pelanggan1);
sistem.tambahPelanggan(pelanggan2);

sistem.tampilkanPelanggan();
