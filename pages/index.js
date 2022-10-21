import Head from "next/head";
import { Aim } from "../components/Aim";
import { Consulation } from "../components/Consulation";
import { GetYours } from "../components/GetYours";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { OurWay } from "../components/OurWay";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <OurWay />
      <Consulation />
      <Aim />
      <GetYours />
    </div>
  );
}
