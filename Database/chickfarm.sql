-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 15, 2023 at 11:42 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `chickfarm`
--

-- --------------------------------------------------------

--
-- Table structure for table `akunuser`
--

CREATE TABLE `akunuser` (
  `idUser` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `akunuser`
--

INSERT INTO `akunuser` (`idUser`, `email`, `username`, `password`) VALUES
(1, 'fajar@gmail.com', 'fajar', 'user123'),
(2, 'syahrin@gmail.com', 'syahrin', 'user123'),
(3, 'luna@gmail.com', 'luna', 'user123'),
(4, 'afika@gmail.com', 'afika', 'user123'),
(5, 'ayu@gmail.com', 'ayu', 'user123'),
(6, 'iqram@gmail.com', 'iqram', 'user123');

-- --------------------------------------------------------

--
-- Table structure for table `pesanann`
--

CREATE TABLE `pesanann` (
  `idPesanan` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `namaPenerima` varchar(255) NOT NULL,
  `idProduk` int(11) NOT NULL,
  `namaProduk` varchar(255) NOT NULL,
  `alamatPengiriman` varchar(255) NOT NULL,
  `metodePembayaran` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pesanann`
--

INSERT INTO `pesanann` (`idPesanan`, `idUser`, `namaPenerima`, `idProduk`, `namaProduk`, `alamatPengiriman`, `metodePembayaran`) VALUES
(1, 2, 'syahrin', 1, 'Vitamin Ayam', 'Makassar', 'COD'),
(5, 1, 'fajar', 1, 'Vitamin ayam', 'Antang', 'COD');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `idProduk` int(11) NOT NULL,
  `namaProduk` varchar(255) NOT NULL,
  `gambarProduk` varchar(255) NOT NULL,
  `deskripsiProduk` varchar(255) NOT NULL,
  `stokProduk` int(11) NOT NULL,
  `hargaProduk` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`idProduk`, `namaProduk`, `gambarProduk`, `deskripsiProduk`, `stokProduk`, `hargaProduk`) VALUES
(1, 'Pakan Ayam Hi Pro Vite', 'https://storage.googleapis.com/chickfarm/pakan%20popan%20ayam%20511%20Repack%201kg.jpg', 'Pur Ayam 511 Voer Pakan Ayam Hi Pro Vite 511 Charoen Pokphand Kandungan nutrisi lebih bagus daripada bravo 511 Voer / pur pakan komplit butiran ayam / unggas yang mempunyai kandungan nutrisi yang komplit.Tanpa antibiotik pemacu pertumbuhan, sehingga aman ', 3, 12000),
(2, 'Cipromas 250 gram Obat Ayam', 'https://storage.cloud.google.com/chickfarm/Cipromas%20Obat%20Ayam%20Snot%20Salmonelosis.jpg', 'ARTUPIC adalah Distributor tangan pertama resmi PT. Mensana Aneka Satwa Obat KANDUNGAN per Kg = Ciprofloxacine 100 g', 5, 68000),
(3, 'Tetelo plus obat anti tetelo', 'https://storage.googleapis.com/chickfarm/TETELO%20PLUS%2010%20CAPS%20OBAT%20ANTI%20TETELO%20NDV%20UNTUK%20AYAM.png', 'Ciri-ciri tetelo : Gangguan syaraf sayap terkulai, pilek, ngorok, Sayap terkulai, jalan di seret, kepala berputar-putar dan ndeprok100', 5, 10000),
(4, 'DURACOX HC 100 gram - Obat Koksi', 'https://storage.googleapis.com/chickfarm/Obat%20Koksidiosis%20Unggas%20Duracox%20HC%20-%20100%20gr%20-%20Ayam.jpg', 'DURACOX HC 100gram adalah kombinasi dua bahan aktif yang bekerja secara sinergis dan memberikan efek potensiasi untuk penanganan Coccidiosis dan malaria pada unggas yang disebabkan oleh Protozoa', 5, 24000),
(5, 'Pakan Ayam Petelur De Heus 10 kg Pur Telor', 'https://storage.googleapis.com/chickfarm/Pakan%20Ayam%20Petelur%20LAYER%20CP%2051.png', 'De Heus Petelur D4 Pakan Komplit Ayam Petelur (10 kg) Pakan dengan formulasi khusus sesuai dengan kebutuhan asam amino ayam petelur Pakan komplit fase produksi Pemakaian umur 17 - 50 minggu', 5, 90000);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `akunuser`
--
ALTER TABLE `akunuser`
  ADD PRIMARY KEY (`idUser`),
  ADD UNIQUE KEY `idUser` (`idUser`,`username`);

--
-- Indexes for table `pesanann`
--
ALTER TABLE `pesanann`
  ADD PRIMARY KEY (`idPesanan`),
  ADD KEY `idUser` (`idUser`),
  ADD KEY `idProduk` (`idProduk`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`idProduk`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `akunuser`
--
ALTER TABLE `akunuser`
  MODIFY `idUser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `pesanann`
--
ALTER TABLE `pesanann`
  MODIFY `idPesanan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `idProduk` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `pesanann`
--
ALTER TABLE `pesanann`
  ADD CONSTRAINT `pesanann_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `akunuser` (`idUser`),
  ADD CONSTRAINT `pesanann_ibfk_2` FOREIGN KEY (`idProduk`) REFERENCES `product` (`idProduk`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
