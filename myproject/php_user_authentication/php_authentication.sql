-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 01, 2023 at 10:16 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `php_authentication`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE DATABASE  IF NOT EXISTS `php_authentication`;

CREATE TABLE `users` (
  `id` int(11) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `token` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `surname`, `username`, `password`, `email`, `token`) VALUES
(1, 'John', 'Doe', 'johndoe', 'password1', 'johndoe@example.com', 'token1'),
(2, 'Jane', 'Doe', 'janedoe', 'password2', 'janedoe@example.com', 'token2'),
(3, 'Bob', 'Smith', 'bobsmith', 'password3', 'bobsmith@example.com', 'token3'),
(4, 'Alice', 'Jones', 'alicejones', 'password4', 'alicejones@example.com', 'token4'),
(5, 'Peter', 'Brown', 'peterbrown', 'password5', 'peterbrown@example.com', 'token5'),
(6, 'Milan', 'Panic', 'panicmil', '12101988', 'milanpanic88@gmail.com', '94fc2b8fd12e0fd7ce16952a69c5a47c6725bf8e7ebdedd691e2d70e54aa2eb2'),
(7, 'Katarina', 'Belovukovic', 'Kacabela', '12345', 'kaca@gmail.com', '5ce1ddb1fcd2e09897f915b14dcefbdf2856fd12c751c1c0c1d8a07e62a0a279'),
(9, 'Jelena', 'Panic', 'jelena', '123', 'jelena@gmail.com', '29e0a202025fddc96dc038dd8d6a91d495ff49cae0ec24b1a2079de46dcfb562');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
