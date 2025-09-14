import Testcomponent from "../Components/testcomponent"
import Hero from "@/Components/hero";
import Grid from "@/Components/grid";
import { FloatingNav } from "@/Components/ui/floating-navbar";
import RecentProjects from "@/Components/recentprojects";
import Experience from "@/Components/experience"; 
import { main } from "framer-motion/client";
import { Main } from "next/document";
import { navItems } from "./data/griditems";

export default function Home() {
  return (
    <main className="relative bg-Black-100 px-0 flex justify-center items-center flex-col overflow-hidden mx-auto ">
      <div className="w-full" >
      <FloatingNav
      navItems={navItems}
      />
      <Hero/>
      <Grid/>
      <RecentProjects/>
      <Experience/>
      
      </div>
    </main>
    
  );
}
