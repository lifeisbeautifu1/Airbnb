import Image from 'next/image';

const Hero = () => {
  return (
    <div
      className='relative h-[300px] sm:h-[400px]
  lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'
    >
      <Image
        layout='fill'
        objectFit='cover'
        src='https://links.papareact.com/0fm'
      />
      <div className='absolute top-1/2 transform w-full text-center'>
        <p className='text-sm sm:text-lg'>Not sure where to go? Perfect.</p>
        <button className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration'>
          I'm flexible
        </button>
      </div>
    </div>
  );
};

export default Hero;
