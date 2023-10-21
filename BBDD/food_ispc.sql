CREATE DATABASE  IF NOT EXISTS `food_ispc` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `food_ispc`;
-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 21-10-2023 a las 14:38:13
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `food_ispc`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoriaproductos`
--

DROP TABLE IF EXISTS `categoriaproductos`;
CREATE TABLE IF NOT EXISTS `categoriaproductos` (
  `idCategoria` int NOT NULL,
  `nombreCategoria` varchar(45) NOT NULL,
  `descripcion` varchar(45) NOT NULL,
  PRIMARY KEY (`idCategoria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `categoriaproductos`
--

INSERT INTO `categoriaproductos` (`idCategoria`, `nombreCategoria`, `descripcion`) VALUES
(1, 'Empanadas', ''),
(2, 'Hamburguesas', ''),
(3, 'Lomitos', ''),
(4, 'Pizzas', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_pedido`
--

DROP TABLE IF EXISTS `detalle_pedido`;
CREATE TABLE IF NOT EXISTS `detalle_pedido` (
  `idDetalle` int NOT NULL,
  `idPedido` int NOT NULL,
  `cantidadProductos` int NOT NULL,
  `precioProducto` float NOT NULL,
  `subTotal` float NOT NULL,
  `idProducto` int NOT NULL,
  PRIMARY KEY (`idDetalle`),
  KEY `idPedido_idx` (`idPedido`),
  KEY `idProducto_idx` (`idProducto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

DROP TABLE IF EXISTS `pedidos`;
CREATE TABLE IF NOT EXISTS `pedidos` (
  `idPedidos` int NOT NULL,
  `idUsuario` int NOT NULL,
  `fechaPedido` date NOT NULL,
  `horaPedido` int NOT NULL,
  `total` int NOT NULL,
  `DireccionEntrega` int NOT NULL,
  PRIMARY KEY (`idPedidos`),
  KEY `idUsuario_idx` (`idUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

DROP TABLE IF EXISTS `producto`;
CREATE TABLE IF NOT EXISTS `producto` (
  `idProducto` int NOT NULL,
  `nombreProducto` varchar(45) NOT NULL,
  `descripcion` varchar(45) NOT NULL,
  `precio` float NOT NULL,
  `idCategoria` int NOT NULL,
  PRIMARY KEY (`idProducto`),
  KEY `idCategoria_idx` (`idCategoria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`idProducto`, `nombreProducto`, `descripcion`, `precio`, `idCategoria`) VALUES
(1, 'Empanadas Arabes', 'Masa rellena de una mezcla de carne picada, c', 600, 1),
(2, 'Empanadas Criollas', 'Empanada jugosa picante y rellena de carne, h', 600, 1),
(3, 'Empanadas de J&Q', 'Masa rellena con jamón y queso muzarella', 500, 1),
(4, 'Hamburguesa', 'Burger, tomate, lechuga, cebolla morada, morr', 2500, 2),
(5, 'Lomito', 'Bife de lomo, tomate, lechuga, jamón, queso, ', 3500, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

DROP TABLE IF EXISTS `usuario`;
CREATE TABLE IF NOT EXISTS `usuario` (
  `idUsuario` int NOT NULL,
  `telefono` int NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `isAdmin` tinyint NOT NULL,
  `contraseña` int NOT NULL,
  PRIMARY KEY (`idUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `detalle_pedido`
--
ALTER TABLE `detalle_pedido`
  ADD CONSTRAINT `idPedido` FOREIGN KEY (`idPedido`) REFERENCES `pedidos` (`idPedidos`),
  ADD CONSTRAINT `idProducto` FOREIGN KEY (`idProducto`) REFERENCES `producto` (`idProducto`);

--
-- Filtros para la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD CONSTRAINT `idUsuario` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`idUsuario`);

--
-- Filtros para la tabla `producto`
--
ALTER TABLE `producto`
  ADD CONSTRAINT `idCategoria` FOREIGN KEY (`idCategoria`) REFERENCES `categoriaproductos` (`idCategoria`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
