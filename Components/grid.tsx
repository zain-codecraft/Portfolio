import { div, section } from "framer-motion/client";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import React from "react";
import { gridItems } from "@/app/data/griditems";

const Grid=()=>{
    return(
        <section id="about">
            <BentoGrid>
                {gridItems.map(
                    ({id,description,className,title,img,imgClassName,titleClassName})=>(
                        <BentoGridItem
                        id={id}
                        key={id}
                        title={title}
                        description={description}
                        className={className}
                        img={img}
                        imgClassName={imgClassName}
                        titleClassName={titleClassName}
                        />
                    )
                )}
            </BentoGrid>
        </section>
    )
}

export default Grid