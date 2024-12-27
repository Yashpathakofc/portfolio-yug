"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-300">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Yug Pathak",
                1000,
                "Web Developer",
                1000,
                "Programmer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            My professional background includes extensive experience in Python,
            SQL, and advanced technologies like machine learning, deep learning,
            and generative AI.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 to-blue-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 to-blue-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rainbow-border w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] rounded-full flex items-center justify-center">
            <div className="rounded-full bg-[#181818] w-[230px] h-[230px] lg:w-[380px] lg:h-[380px] relative image-container">
              <Image
                src="/images/yug.jpg"
                alt="hero image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full shadow-[0px_0px_20px_5px_rgba(0,112,255,0.8)] hover:shadow-[0_0_25px_15px_rgba(0,112,255,0.8)] transition-shadow duration-300"
                width={300}
                height={300}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

