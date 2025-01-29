"use client"

import { HomePage } from "@/components/main/page";
import { About } from "@/components/about/page";
import { Projetos } from "@/components/projetos/page"

export default function Home() {

  return (
  <>
  <HomePage />
  <Projetos />
  < About/> 
  </>
  );
}
