-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 13, 2021 at 09:59 AM
-- Server version: 5.7.24
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `full_name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `subject` varchar(50) NOT NULL,
  `message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`id`, `full_name`, `email`, `subject`, `message`) VALUES
(14, 'Inna Isoyan', 'isoyan.inn@gmail.com', 'Message Subject ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis, nisl eget tincidunt iaculis, tortor mi tincidunt urna, id ultricies neque metus in purus. Sed aliquam, nulla id finibus finibus, nibh dolor malesuada urna, vel maximus quam turpis nec libero. Pellentesque eros mi, iaculis blandit lacus nec, maximus aliquet leo. Fusce imperdiet feugiat nisl, vitae molestie elit dignissim nec. Aenean eleifend justo ac eros commodo, vel ultrices leo sollicitudin. In magna libero, euismod dapibus eros eu, ultrices posuere tortor. In hac habitasse platea dictumst. Maecenas dignissim maximus augue, sed egestas nulla bibendum laoreet. Quisque fringilla pretium ante, eu posuere erat dapibus ac. Proin vulputate pretium ante quis dictum. Cras sit amet tellus eu tortor gravida interdum quis eget est. Nunc felis neque, finibus eu lectus porta, scelerisque vestibulum urna. Quisque ornare vehicula orci, at pulvinar est vestibulum mollis. Duis interdum, nulla a maximus vehicula, ligula augue sollicitudin sapien, in venenatis sapien turpis at lectus. Quisque sagittis ipsum ut est porttitor, aliquet congue dolor consequat. Nunc feugiat et lectus quis luctus. Donec in mi dolor. Suspendisse feugiat lectus id mattis ullamcorper. Sed sollicitudin euismod ligula id rhoncus. Duis tempus dolor id nulla tempus, eu rhoncus sem ultricies. Sed diam massa, egestas eget malesuada vel, tempor eu turpis. Nulla vel est pulvinar, tristique neque in, congue magna. Vivamus sed odio venenatis, laoreet purus et, pretium nulla. Cras luctus pellentesque manga!'),
(15, 'Isoyan Inna', 'isoyaninna@gmail.com', 'This is my message subject ', 'Nunc risus erat, rutrum a maximus vel, volutpat a odio. Proin interdum venenatis nulla, vitae blandit dolor pharetra nec. Ut sodales mi quam, nec eleifend erat luctus vel. Curabitur aliquam porttitor felis, eget ornare velit mollis quis. In vulputate luctus ex et ultrices. Nam fringilla tempus diam, vel feugiat sem dapibus in. Nunc nec sem id massa dictum tempor sit amet quis lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'),
(16, 'John Doe', 'johndoe@gmail.com', 'Lorem ipsum dolor sit ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis, nisl eget tincidunt iaculis, tortor mi tincidunt urna, id ultricies neque metus in purus. Sed aliquam, nulla id finibus finibus, nibh dolor malesuada urna, vel maximus quam turpis nec libero. Pellentesque eros mi, iaculis blandit lacus nec, maximus aliquet leo. Fusce imperdiet feugiat nisl, vitae molestie elit dignissim nec. Aenean eleifend justo ac eros commodo, vel ultrices leo sollicitudin. In magna libero, euismod dapibus eros eu, ultrices posuere tortor. Mauris nec felis eu neque viverra scelerisque vel a est.'),
(17, 'Inna Isoyan', 'isoyan.inn@gmail.com', 'Something ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis, nisl eget tincidunt iaculis, tortor mi tincidunt urna, id ultricies neque metus in purus. Sed aliquam, nulla id finibus finibus, nibh dolor malesuada urna, vel maximus quam turpis nec libero. Pellentesque eros mi, iaculis blandit lacus nec, maximus aliquet leo. Fusce imperdiet feugiat nisl, vitae molestie elit dignissim nec. Aenean eleifend justo ac eros commodo, vel ultrices leo sollicitudin. In magna libero, euismod dapibus eros eu, ultrices posuere tortor. Mauris nec felis eu neque viverra scelerisque vel a est.'),
(18, 'Inna Isoyan', 'isoyan.inn@gmail.com', 'Something ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis, nisl eget tincidunt iaculis, tortor mi tincidunt urna, id ultricies neque metus in purus. Sed aliquam, nulla id finibus finibus, nibh dolor malesuada urna, vel maximus quam turpis nec libero. Pellentesque eros mi, iaculis blandit lacus nec, maximus aliquet leo. Fusce imperdiet feugiat nisl, vitae molestie elit dignissim nec. Aenean eleifend justo ac eros commodo, vel ultrices leo sollicitudin. In magna libero, euismod dapibus eros eu, ultrices posuere tortor. Mauris nec felis eu neque viverra scelerisque vel a est.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
