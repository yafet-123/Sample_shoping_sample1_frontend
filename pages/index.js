import Head from "next/head";
import { Consulation } from "../components/Consulation";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Consulation />
    </div>
  );
}
