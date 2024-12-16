import Link from 'next/link';
import Image from 'next/image';

export default function Overview() {
  return (
    <div className="flex flex-col md:flex-row h-fit w-screen py-10 md:gap-20">
      {/* mobile picture */}
      
      <div className="flex flex-col md:w-1/2 h-fit gap-4 md:gap-8 py-4 px-8 md:pr-32">
        <strong className='text-2xl md:text-4xl'>Overview</strong>
        <div className='md:whitespace-break-spaces leading-normal text-lg md:text-xl'>
          Twiscode is a company founded 
          by passionate developers committed to transforming ideas into 
          seamless digital experiences.
          Our team thrives in a collaborative, agile environment, 
          fostering a culture of innovation, learning, and open communication. 
          We work closely with clients through every step from planning and 
          design to coding and delivery to ensure high-quality, 
          user-focused solutions.
        </div>
        <div className='flex pt-2'>
        <div className='bg-gray-100 px-3 py-1 transition-colors hover:bg-gray-200'>
          <Link
            href="/about-us"
          >
            <p className='text-lg font-medium'>About Us {'>'}</p>
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
}