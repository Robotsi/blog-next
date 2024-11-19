'use client';

import { useEffect, useState } from 'react';
import {
  AiFillAlert,
  AiFillAlipayCircle,
  AiFillAmazonCircle,
  AiFillBehanceCircle,
} from 'react-icons/ai';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <>
      <div
        className='items-center text-center bg-white dark:bg-black

'
      >
        <a
          href=''
          className='font-semibold text-sm text-black hover:text-red-700
  dark:text-white dark:hover:text-red-300
  '
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quod,
          eum atque officiis tempore animi?
        </a>
      </div>

      <header className='bg-mycolor3 p-4 '>
        <div className='container mx-auto flex flex-row justify-between items-center '>
          <div className='text-white text-lg md:text-xl  font-semibold'>
            logo
          </div>

          <div className='hidden md:block md:w-1/3 lg:w-1/2'>
            <input type='text' className='w-full focus:outline-none pl-2' />
          </div>

          <div className='text-white flex text-lg font-semibold gap-4'>
            <div>login</div>

            <button onClick={() => setDarkMode(!darkMode)}>dark</button>
          </div>
        </div>
      </header>

      <div className='flex items-center p-3 space-x-8  justify-center bg-mycolor4 border-b-2 border-b-red-600  shadow-2xl'>
        <a href='' className='text-white hover:text-black'>
          Anasayfa
        </a>
        <a href='' className='text-white hover:text-black'>
          Blog
        </a>
        <a href='' className='text-white hover:text-black'>
          Contact
        </a>
      </div>

      <div className='flex items-center'>
        <img
          src='/5.jpg'
          className='h-44 md:h-96 lg:h-[500px]  w-full object-cover
          opacity-70 hover:opacity-90 transition duration-1000
         '
        />
      </div>

      <div className='container mt-4 mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          <div className=' lg:col-span-3 border-2 items-center justify-center flex flex-col p-4'>
            <div className='relative'>
              <AiFillAlipayCircle className='text-6xl z-10' />
              <div className='z-50 absolute right-1 -top-2  bg-red-700 rounded-full px-2 text-white'>
                {' '}
                2
              </div>
              <h2>Home1</h2>
            </div>
          </div>

          <div className='border-2 items-center justify-center flex flex-col p-4'>
            <AiFillAlert className='text-6xl' />
            <h2>Home2</h2>
          </div>

          <div className='border-2 items-center justify-center flex flex-col p-4'>
            <AiFillAmazonCircle className='text-6xl' />
            <h2>Home3</h2>
          </div>

          <div className='border-2 items-center justify-center flex flex-col p-4'>
            <AiFillBehanceCircle className='text-6xl' />
            <h2>Home4</h2>
          </div>
        </div>
      </div>
    </>
  );
}
