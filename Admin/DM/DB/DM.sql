-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 29-05-2019 a las 23:07:51
-- Versión del servidor: 10.3.14-MariaDB
-- Versión de PHP: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `id9596644_dm2019`
--
CREATE DATABASE IF NOT EXISTS `id9596644_dm2019` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `id9596644_dm2019`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_app_users`
--

CREATE TABLE `tbl_app_users` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `usuario` varchar(50) NOT NULL,
  `contra` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tbl_app_users`
--

INSERT INTO `tbl_app_users` (`id`, `nombre`, `usuario`, `contra`) VALUES
(1, 'Administrador ', 'admin', 'c7ad44cbad762a5da0a452f9e854fdc1e0e7a52a38015f23f3eab1d80b931dd472634dfac71cd34ebc35d16ab7fb8a90c81f975113d6c7538dc69dd8de9077ec'),
(2, '', '', 'cf83e1357eefb8bdf1542850d66d8007d620e4050b5715dc83f4a921d36ce9ce47d0d13c5d85f2b0ff8318d2877eec2f63b931bd47417a81a538327af927da3e'),
(3, 'taller', 'taller', '55e49423ebcf416e83dd4617cedb86fdae17b1d71229dfeb4198f27d49b1d8d75f615f34a351f15d5ed218b917fc14343316ad740f13767d2ca08a8d2b42529e');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_notificaciones`
--

CREATE TABLE `tbl_notificaciones` (
  `id` int(11) NOT NULL,
  `id_usuario` varchar(50) DEFAULT NULL,
  `direccion` varchar(100) DEFAULT NULL,
  `longitud` varchar(20) NOT NULL,
  `latitud` varchar(20) NOT NULL,
  `descripcion` varchar(200) NOT NULL,
  `estado` int(11) NOT NULL,
  `fecha_notificacion` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tbl_notificaciones`
--

INSERT INTO `tbl_notificaciones` (`id`, `id_usuario`, `direccion`, `longitud`, `latitud`, `descripcion`, `estado`, `fecha_notificacion`) VALUES
(1, 'admin', 'Prueba1', '-88.1373502', '13.2199924', 'Prueba1', 1, '2019-05-24'),
(2, 'admin ', 'Ayudaaaa', '-88.1373502', '13.2199924', 'Ayudaaaa', 0, '2019-05-24'),
(3, 'taller', 'Prueva', '-88.1585943', '13.4402482', 'Prueba', 0, '2019-05-25'),
(4, 'admin', '', '-88.1347816', '13.2190107', 'Prueba', 0, '2019-05-26'),
(5, 'admin', NULL, '-88.1373502', '13.2199924', 'Ayuda', 0, '2019-05-26'),
(6, 'admin', NULL, '-88.1373502', '13.2199924', 'Ayuda', 0, '2019-05-26'),
(7, 'admin', NULL, '-88.1373502', '13.2199924', 'Ayudaaaaa', 0, '2019-05-26'),
(8, 'admin', NULL, '-88.1373502', '13.2199924', 'Ayudaaaaa', 0, '2019-05-26'),
(9, 'admin', NULL, '-88.1373502', '13.2199924', 'Ayuda', 0, '2019-05-26'),
(10, 'admin', 'Kk', '-88.1373502', '13.2199924', 'Nn', 0, '2019-05-26'),
(11, 'admin', 'Kk', '-88.1373502', '13.2199924', 'Nn', 0, '2019-05-26'),
(12, 'admin', 'Kk', '-88.1373502', '13.2199924', 'Nn', 0, '2019-05-26'),
(13, 'admin', 'Kk', '-88.1373502', '13.2199924', 'Nn', 0, '2019-05-26'),
(14, 'admin', 'Kk', '-88.1373502', '13.2199924', 'Nn', 0, '2019-05-26'),
(15, 'admin', 'Kk', '-88.1373502', '13.2199924', 'Nn', 0, '2019-05-26'),
(16, 'admin', 'Nsk', '-88.1373502', '13.2199924', 'Jjkkkk', 0, '2019-05-26');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_users`
--

CREATE TABLE `tbl_users` (
  `id` int(11) NOT NULL,
  `usuario_id` varchar(15) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `apellido` varchar(30) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `clave` varchar(300) NOT NULL,
  `registro_fecha` date DEFAULT NULL,
  `estado` tinyint(4) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tbl_users`
--

INSERT INTO `tbl_users` (`id`, `usuario_id`, `nombre`, `apellido`, `correo`, `clave`, `registro_fecha`, `estado`) VALUES
(12, 'liluisjose1', 'Luis ', 'Iraheta', 'liluisjose1@gmail.com', '1651339a2e92a0616265515bdf4b88a9dc2398c990f5110dae9d2fbdbe975e6a1ef7372ebe3812c91e70f421feccc2f39fec0ceba320d878df7e44091eb8e552', '2018-10-22', 1),
(13, 'admin', 'admin', 'admin', 'admin@admin.com', 'c7ad44cbad762a5da0a452f9e854fdc1e0e7a52a38015f23f3eab1d80b931dd472634dfac71cd34ebc35d16ab7fb8a90c81f975113d6c7538dc69dd8de9077ec', '2018-11-06', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tbl_app_users`
--
ALTER TABLE `tbl_app_users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `usuario` (`usuario`);

--
-- Indices de la tabla `tbl_notificaciones`
--
ALTER TABLE `tbl_notificaciones`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tbl_users`
--
ALTER TABLE `tbl_users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `usuario_id` (`usuario_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tbl_app_users`
--
ALTER TABLE `tbl_app_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `tbl_notificaciones`
--
ALTER TABLE `tbl_notificaciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `tbl_users`
--
ALTER TABLE `tbl_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
