'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Header = () => {
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
      <div className='items-center bg-white text-center dark:bg-black'>
        <a
          href=''
          className='text-sm font-semibold text-black hover:text-red-700
  dark:text-white dark:hover:text-red-300'
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quod,
          eum atque officiis tempore animi?
        </a>
      </div>
      <header className='bg-mycolor3 p-4 '>
        <div className='container mx-auto flex flex-row items-center justify-between '>
          <div className='text-lg font-semibold text-white  md:text-xl'>
            logo
          </div>

          <div className='hidden md:block md:w-1/3 lg:w-1/2'>
            <input type='text' className='w-full pl-2 focus:outline-none' />
          </div>

          <div className='flex gap-4 text-lg font-semibold text-white'>
            <div>login</div>

            <button onClick={() => setDarkMode(!darkMode)}>dark</button>
          </div>
        </div>
      </header>
      <div className='flex items-center justify-center space-x-8  border-b-2 border-b-red-600 bg-mycolor4 p-3  shadow-2xl'>
        <Link href='/' className='text-white hover:text-black'>
          Anasayfa
        </Link>
        <Link href='/about' className='text-white hover:text-black'>
          Hakkımda
        </Link>
        <Link href='/blog' className='text-white hover:text-black'>
          Blog
        </Link>
        <Link href='/contact' className='text-white hover:text-black'>
          İletişim
        </Link>
      </div>
    </>
  );
};

export default Header;
