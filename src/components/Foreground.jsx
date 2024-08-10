
import { useRef } from "react";
import Card from "./Card";


function Foreground() {

      const ref= useRef(null);
 
    const data =[
      {
        desc :"this is foreground paragraph. welcome to the 1st cards ",
         filesize:".6mb", 
         close:true,
          tag: {isOpen:true, tagtitle: "Downlode Now", tagColor:"green"},
      },
      {
        desc :"this is foreground paragraph. welcome to the 2nd cards ",
         filesize:".6mb", 
         close:true,
          tag: {isOpen:true, tagtitle: "Downlode Now", tagColor:"green"},
      },
      {
        desc :"this is foreground paragraph. welcome to the 3rd cards ",
         filesize:".6mb", 
         close:true,
          tag: {isOpen:true, tagtitle: "Downlode Now", tagColor:"green"},
      },
    ];


    return (
      <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex flex-wrap gap-10 p-5">
        {data.map((item, index) => (
          <Card key={index} data={item} reference={ref}/>
        ))}
      </div>
    );
    
}

export default Foreground;
