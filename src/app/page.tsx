import Image from "next/image";
import Hero from "./components/Hero";
import Arrival from "./components/Arrival";
import Banner from "./components/Banner";


export default function Home() {
  return (
  <div>
    <Banner />
  <Hero />
  <Arrival />
  </div>
  );
}
