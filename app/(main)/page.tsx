import Hero from '@/Components/PageComponents/Hero';
import {
  AiFillAlert,
  AiFillAlipayCircle,
  AiFillAmazonCircle,
  AiFillBehanceCircle,
} from 'react-icons/ai';

export default function Home() {
  return (
    <>
      <Hero />

      <div className='container mx-auto mt-4'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
          <div className=' flex flex-col items-center justify-center border-2 p-4 lg:col-span-3'>
            <div className='relative'>
              <AiFillAlipayCircle className='z-10 text-6xl' />
              <div className='absolute -top-2 right-1 z-50  rounded-full bg-red-700 px-2 text-white'>
                {' '}
                2
              </div>
              <h2>Home1</h2>
            </div>
          </div>

          <div className='flex flex-col items-center justify-center border-2 p-4'>
            <AiFillAlert className='text-6xl' />
            <h2>Home2</h2>
          </div>

          <div className='flex flex-col items-center justify-center border-2 p-4'>
            <AiFillAmazonCircle className='text-6xl' />
            <h2>Home3</h2>
          </div>

          <div className='flex flex-col items-center justify-center border-2 p-4'>
            <AiFillBehanceCircle className='text-6xl' />
            <h2>Home4</h2>
          </div>
        </div>
      </div>
    </>
  );
}
