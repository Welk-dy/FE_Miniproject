import LocationMap from '@/component/locationMap';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <div className='flex flex-col bg-gray-100'>
      <div className='flex flex-col md:flex-row px-8 md:px-20 gap-6 md:gap-12 justify-center py-8'>
        <div className='flex flex-col justify-center gap-2'>
          <div className='flex flex-row text-xl gap-2 items-center font-semibold'>
            <Image
              src="/company_logo.png"
              alt="Company Logo"
              width={80}
              height={40}
            />
            Twiscode Pte. Ltd.
          </div>
          <div className='flex text-xl text-gray-500'>
          Twiscode is a passionate team of developers dedicated to transforming ideas into seamless digital experiences. 
          We prioritize collaboration, innovation, and open communication, working closely with clients from planning and 
          design to coding and delivery, ensuring high-quality, user-focused solutions.
          </div>
        </div>
        <div className='flex flex-col w-full md:w-fit justify-center gap-2'>
          <div className='text-2xl font-semibold'>
            Location
          </div>
          <div className='flex'>
            <LocationMap />
          </div>
        </div>
        <div className='flex flex-col w-fit gap-2'>
          <div className='text-2xl font-semibold'>
            Company
          </div>
          <div className='flex flex-col text-xl'>
            <Link href="about-us" className="text-gray-500 hover:text-gray-700">
              - About Us
            </Link>
            <Link href="service" className="text-gray-500 hover:text-gray-700">
              - Service
            </Link>
            <Link href="team" className="text-gray-500 hover:text-gray-700">
              - Team
            </Link>
          </div>
        </div>
        <div className='flex flex-col w-fit gap-2'>
          <div className='text-2xl font-semibold'>
            Contact Us
          </div>
          <div className='flex flex-col text-xl'>
            <Link href="about-us" className="text-gray-500 hover:text-gray-700">
              Facebook
            </Link>
            <Link href="service" className="text-gray-500 hover:text-gray-700">
              Instagram
            </Link>
            <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=example@gmail.com&su=Inquiry&body=Hi%20there,%20I%20have%20a%20question." className="text-gray-500 hover:text-gray-700">
              example@gmail.com
            </Link>
            <div></div>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-between px-8 py-4 md:px-20 border-t-2'>
          <strong className='text-xs'>
            Twiscode Pte. Ltd. | PT. Dapur Rumah Sejahtera
          </strong>
      </div>
    </div>
  );
}