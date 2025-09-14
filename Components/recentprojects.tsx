"use client";
import { projects } from "@/app/data/griditems";
import { PinContainer } from "./ui/pincontainer";
import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { useState,useEffect } from "react";

const RecentProjects=()=>{
    const [mounted, setMounted] = useState(false);

  // Ensure components are only rendered on the client side.
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
    return(
            <div  id= "projects" className="py-20"> <h1 className="heading"> A Small Selection of {' '}
            <span className="text-purple-400"> Recent Projects</span>
            </h1>
            <div className="flex flex-wrap justify-center items-center  p-4 gap-16 mt-10">
            {projects.map(({id,title,des,img,iconLists,link})=>(
                <div key={id} className="lg:min-h-[32.5rem h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] ]">   
                <PinContainer title={link} href={link} >
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh]">
  <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
    <img 
      src="/bg.png" 
      alt="/bg-img" 
      className="absolute top-0 left-0 w-full h-full object-cover" 
    />
  </div>
  <img 
    src={img} 
    alt={title} 
    className="z-10 absolute bottom-0 w-full h-auto object-contain" 
  />
</div>
                    <h1 className="font-bold lg:text-xl md:text-xl text-base line-clamp-1 ">
                        {title}
                    </h1>
                <p className="lg:text-sm lg:font-normal font-light text-sm line-clamp-2">
                    {des}
                </p>
                <div className="flex items-center justify-between mt-7 mb-3">
                    <div className="flex items-center">
                        {iconLists.map((icon,index)=>(<div key={icon}  className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center " 
                        style={{transform:`translateX(-${5*index*2}px)`}}
                        >
                        <img src={icon} alt={icon} className="p-2" />       
                        </div>
                    
                    
                    ))}
                    </div>
                    <div className="flex justify-center items-center"><p className="flex lg:text-sm md:text-xs text-purple-300"> check out Live Site
                        <FaLocationArrow className="ms-3" color="#CBACF9"/>
                        </p></div>
                </div>
                </PinContainer>
                </div>
            ))}

            </div>
            </div>
    
    )}

    export default RecentProjects