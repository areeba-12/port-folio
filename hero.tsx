"use client";
import Image from "next/image";
import React from "react";
import Typewriter from 'typewriter-effect';



const Hero = () => {
  return (
    <div>
        <section className="text-gray-600 body-font bg-gray-100">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        I am
        <br className="hidden lg:inline-block" />
        <Typewriter
  options={{
    strings: ['Next Js Developer', 'Front-end Developer', 'Full Stack Developer'],
    autoStart: true,
    loop: true,
  }}
/>
      </h1>
      <p className="mb-8 leading-relaxed">
      Hi, I'm [Syeda Areeba], a front-end web developer with expertise in HTML, CSS, JavaScript, TypeScript, and Next.js. I specialize in building responsive, dynamic, and user-friendly web applications. With a deep understanding of modern web technologies, I am passionate about creating efficient, scalable, and aesthetically pleasing digital solutions. Whether it's crafting seamless user interfaces or optimizing performance, I bring a detail-oriented approach to every project I work on. Explore my portfolio to see how I turn ideas into interactive, high-quality web experiences.


      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Contact
        </button>
        
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded mx-auto "
        alt="hero"
        width={400}
        height={300}
        src={require('../../../../public/assets/pictures/profile-pic.png')}
      />
    </div>
  </div>
</section>

    </div>
  )
}

export default Hero