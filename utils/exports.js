// Core / Dependencies
export { useState, useEffect, useContext } from "react";
export { Html, Head, Main, NextScript } from "next/document";
export { default as axios } from "axios";
export { default as Image } from "next/image";
export { default as Router, useRouter } from "next/router";
export { default as Link } from "next/link";
export { default as head } from "next/head";
export { default as millify } from "millify";

// Pages
export { default as Property } from "../components/Property";
export { default as SearchFilters } from "../components/SearchFilters";
export { default as Navbar } from "../components/Navbar";
export { default as Footer} from "../components/Footer";


// Utils
export { fetchApi, baseUrl } from "./fetchApi";
export { filterData } from "./filterData";

// Components
export { default as ImageScrollbar } from "../components/ImageScrollbar";
export { default as Layout } from "../components/Layout";
export { default as NProgress } from "nprogress";
export { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Text, Button, Spacer, Icon, Select, Input, Avatar as avater, Spinner, ColorModeScript, extendTheme } from "@chakra-ui/react";
export { ChakraProvider } from "@chakra-ui/provider";
// export { ColorModeScript } from "@chakra-ui/react";
// export { extendTheme } from "@chakra-ui/react";
export { BsFilter } from "react-icons/bs";
export { Avatar } from "@chakra-ui/avatar";
export { MdCancel } from "react-icons/md";
export { BsGridFill, BsSearch } from "react-icons/bs";
export { FcMenu, FcHome, FcAbout } from "react-icons/fc";
export { FaBed, FaBath,  FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
export { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
export { GoVerified } from "react-icons/go";
export { FiKey } from "react-icons/fi";

// Assets
export { default as noresult } from "../assets/images/noresult.svg";


// export { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

