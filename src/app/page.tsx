"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 mb-20 sm:px-8 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 mr-10 mt-20 lg:h-96 lg:w-1/3 relative">
          <Image src="/ana.jpg" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 mt-5 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl mt-5 font-bold">
            Fullstack Web Developer
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
          Crafting cutting-edge web experiences with a blend of creativity and technical expertise. Proficient in front-end and back-end technologies, dedicated to delivering polished solutions.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <Link
            href="/portfolio">
                 <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              View My Work
            </button>
            </Link>
            <Link 
            href="/contact">
              <button className="p-4 rounded-lg ring-1 ring-black">
              Contact Me
            </button>
            </Link>
           
            
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;