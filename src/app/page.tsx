import Navbar from "../components/navbar";
import Hero from "../components/hero";
import { Marquee } from "../components/marquee";
import Catalogo from "../components/catalogo";
import Favorites from "../components/favorites";
import Banner from "../components/banner";
import Feature from "../components/feature";
import Footer from "../components/footer";
import Providers from "../components/providers";

export default function Home() {
  return (
    <Providers>
      <Navbar />
      <Hero />
      <Marquee />
      <Catalogo />
      <Favorites />
      <Banner />
      <Feature />
      <Footer />
    </Providers>
  );
}
