import Image from "next/image";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import {Filtro} from "../components/filtro";
import {Marque} from "../components/marque";
import Catalogo from "../components/catalogo";
import Banner from "../components/banner";


export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Marque/>
      <Filtro/>
      <Catalogo/>
      <Banner/>
    </>
  );
}


