-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-11-2018 a las 01:27:39
-- Versión del servidor: 10.1.34-MariaDB
-- Versión de PHP: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `dm`
--

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
(2, 'admin', 'admin', 'c7ad44cbad762a5da0a452f9e854fdc1e0e7a52a38015f23f3eab1d80b931dd472634dfac71cd34ebc35d16ab7fb8a90c81f975113d6c7538dc69dd8de9077ec'),
(3, 'ORBELICIA MEDRANO ', 'jmedrano18', 'f107ba2da059fa640eccb9533e859a6435f6b83aa2e0636a47444dfdcde33a6e1f3cc1c9437bcfd42675af265a0d0b9d66c86c9e66347aa41534204745e41fb8'),
(4, 'juan', 'Juan', '2f0fb5f650beebc026802c8f7baf80b6b6275243a73861b073f46751491afb88ed1ce04c3d98283a0e968c08ca7b80fb710d6ec0259311090a6f1c2d500ea0b8'),
(5, 'Mon', 'Mom', 'd16520a7e5b52acfb8f07e91b13c5ca249bafba5f82f46ea6913dd1335411eebc2551f9efbe8ffe509e361ff893ae192a09499d1e3b15898a6f38ca7ae46e65e');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_notificaciones`
--

CREATE TABLE `tbl_notificaciones` (
  `id` int(11) NOT NULL,
  `id_usuario` varchar(50) DEFAULT NULL,
  `direccion` varchar(100) NOT NULL,
  `descripcion` varchar(200) NOT NULL,
  `estado` int(11) NOT NULL,
  `fecha_notificacion` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tbl_notificaciones`
--

INSERT INTO `tbl_notificaciones` (`id`, `id_usuario`, `direccion`, `descripcion`, `estado`, `fecha_notificacion`) VALUES
(1, 'liluisjose1', 'Ba El Centro Chirilagua', 'Maltrato', 1, '2018-10-20'),
(2, 'admin', '', '', 0, '2018-11-05'),
(3, '1', 'Yeni', 'Yeni', 0, '2018-11-05'),
(4, 'admin', 'Burger metro', 'Me pego', 1, '2018-11-05'),
(5, 'admin', 'Ssm', 'Sd', 0, '2018-11-06'),
(6, 'admin', 'Juan', 'Juan', 0, '2018-11-06'),
(7, 'Juan', 'B° el centro chirilagua', 'Prueba', 2, '2018-11-06'),
(8, 'Juan', 'Ndnd', 'Bjjd', 0, '2018-11-06'),
(9, 'Mom', 'Niña', 'Búnker ', 1, '2018-11-06');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `tbl_notificaciones`
--
ALTER TABLE `tbl_notificaciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `tbl_users`
--
ALTER TABLE `tbl_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
