import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="font-serif shadow">
      <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center justify-between">
        <Link href="/" className="flex title-font font-medium items-center mb-4 md:mb-0">
            <span className="text-2xl text-blue-400 font-extrabold animate-wavy">Resort.</span>
         
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base">
          <Link href="#" className="mx-3">Home</Link>
          <Link href="#" className="mx-3">About</Link>
          <Link href="#" className="mx-3">Room</Link>
          <Link href="#" className="mx-3">Gallery</Link>
          <Link href="#" className="mx-3">Blogs</Link>
          <Link href="#" className="mx-3">Contact</Link>
        </nav>
        <div className="flex items-center">
          <div className="relative text-gray-600">
            <input
              type="search"
              name="search"
              placeholder="Search"
              className="bg-white h-8 px-4 pr-8 rounded-full text-sm border border-gray-300 focus:outline-none"
            />
          </div>
          <div className="ml-3">
            <Link href={"/Login"}>
              <FiLogIn />
            </Link>
          </div>
          <div>
            <Link href={"/Login"} className='ml-3 mr-6'>Login</Link>
          </div>
          <div className="ml-3">
            <Link href={"/profile"}>
           
                <CgProfile />
         
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
