const Hero = () => {
  return (
    <div className='flex items-center'>
      <img
        src='/5.jpg'
        alt='resim'
        className='h-44 w-full object-cover  opacity-70 transition
          duration-1000 hover:opacity-90 md:h-96 lg:h-[500px]'
      />
    </div>
  );
};

export default Hero;
