'use client'

import { useState } from "react";
import { cn } from "../../lib/util";
import { BackgroundGradientAnimation } from "./gradient-background";
import { GlobeDemo } from "./gridglobe";
import animationdata from "../../app/data/confetti.json"
import Magicbutton from "./bordermagic";
import Lottie from "react-lottie";
import { IoCopyOutline } from "react-icons/io5";


export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 lg:mx-20 ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?:number
  img?:string
  imgClassName?:string
  titleClassName?:string
  spareImg?:string
}) => {
  const [copied,setcopied]=useState(false);
  const handlecopy=()=>{
    navigator.clipboard.writeText("zainforgeeks@gmail.com")
    setcopied(true)
  }
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none  dark:bg-black dark:border-white/[0.2] bg-white justify-between flex flex-col space-y-4 border border-white/[0.1]",
        className
      )}
      style={{ background: "rgb(4,7,29)",
        backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id===6}? 'flex justify-center': 'h-full'`}>
        <div className="h-full w-full absolute">
        {img && (<img
        src={img}
        alt={img}
        className={cn(imgClassName ,'object-cover object-center')}     
        />)}
        </div>
          <div className={`absolute right-0 -bottom-5 ${id===5 && 'w-full opacity-80'}`}>
          {spareImg && (<img
        src={spareImg}
        alt={spareImg}
        className={'object-cover object-center w-full h-full z-10'}     
        />)}
          </div>
          {id===6 && (
            <BackgroundGradientAnimation>
              {/* <div className="absoulte z-50 flex items-center justify-center text-white font-bold">
              </div> */}
            </BackgroundGradientAnimation>
          )}
          <div className={cn(titleClassName , 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10')}>
          <div className="font-sans font-extralight text-[#c1c2d3] text-SM md:text-xs lg:text-base z-10"> {description}</div>
          <div className="font-sans font-bold text-lg text-neutral-600 dark:text-neutral-200 lg:text-2xl max-w-96 z-10">
          {title}
          </div>

          {id===2 && <GlobeDemo/> }
          {id === 3 && (
  <div className="flex gap-1 w-fit absolute right-3 lg:right-2 lg:min-h-48">
    <div className="flex flex-col gap-3 lg:gap-8">
      {['React.js', 'Next.js', 'Python'].map((item) => (
        <span
          key={item}
          className="py-2 lg:py-2 lg:px-2 px-3 lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
        >
          {item}
        </span>
      ))}
      <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
    </div>
    <div className="flex flex-col gap-3 lg:gap-8">
      <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
      {['React.js', 'Next.js', 'Python'].map((item) => (
        <span
          key={item}
          className="py-2 lg:py-2 lg:px-2 px-3 lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
)}
  {id===6 && (
    <div className=" mt-5 relative">
      <div className={`absolute -bottom-5 right-0`}>
        <Lottie options={{
          loop:copied,
          autoplay:copied,
          animationData:animationdata,
          rendererSettings:{
            preserveAspectRatio:'xMidYMid slice'
          }
          
        }}/>
      </div>
      <Magicbutton title={copied? `Email copied`:`Copy Email`}
        icon={<IoCopyOutline/>} 
        position="right"  
         otherclasses="!bg-[#161a31]"
        handleclick={handlecopy}
        />
       
    </div>
  )}

      </div>
    </div>
    </div>
  );
};
