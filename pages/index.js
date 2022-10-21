import Head from "next/head";
import { Aim } from "../components/Aim";
import { Article } from "../components/Article";
import { Consulation } from "../components/Consulation";
import { Expericene } from "../components/Expericene";
import { GetYours } from "../components/GetYours";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { OurWay } from "../components/OurWay";
import { Plan } from "../components/Plan";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <OurWay />
      <Consulation />
      <Aim />
      <GetYours />
      <Expericene />
      <Plan />
      <Article />
    </div>
  );
}
