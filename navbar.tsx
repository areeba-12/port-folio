import React from 'react'
import Link from 'next/link';
import Image from 'next/image';



const Navbar = () => {
  return (
    <div><header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <Image src={require("../../../../public/assets/pictures/logo.png.webp")} alt="Syeda Areeba" width={100} height={100} className="w-[100px]" />
        <span className="ml-3 text-xl">Syeda Areeba</span>
      </a>
      <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
        <Link href={"/"} className="mr-5 hover:text-blue-500">Home</Link>
        <Link href={"#"} className="mr-5 hover:text-blue-500">About</Link>
        <Link href={"#"} className="mr-5 hover:text-blue-500">Skills</Link>
        <Link href={"#"} className="mr-5 hover:text-blue-500">Projects</Link>
        <Link href={"#"} className="mr-5 hover:text-blue-500">Contacts</Link>
      </nav>
      
      
      
    </div>
  </header></div>
  )
}

export default Navbar