import Image from 'next/image';
import Link from 'next/link';

export default function HowService() {

  return (
    <div className="min-h-full flex flex-col pb-12 items-center">
      {/* Service Title */}
      <div className="text-4xl font-bold p-4">Service</div>
      {/* Main Content Section */}
      <div className="pt-5 flex flex-col md:flex-row gap-6 md:gap-20 w-full">
        {/* Image Element on Top for Mobile Layout */}
        <div className="flex md:w-1/2 md:justify-end px-8 md:pr-0 md:pl-24">
          <Image
            src="/how_Service.png"
            width={720}
            height={400}
            className="rounded-lg"
            alt="How We Work Image"
          />
        </div>
    
        {/* Text Element Below the Image on Mobile and Overlapping on Desktop */}
        <div className="flex flex-col w-full md:w-1/2 bg-white px-8 justify-center items-start">
          <div className="text-2xl md:text-4xl font-semibold mb-2">How We Work</div>
          <div className="text-xl mb-4">
            <p>Let's discuss what project</p>
            <p>you have in mind</p>
          </div>
          <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=example@gmail.com&su=Inquiry&body=Hi%20there,%20I%20have%20a%20question.">
            <button 
              className="flex self-center items-center bg-gray-500 text-white px-6 py-4 transition-colors hover:bg-[#4A4A4A]">
                Let’s Have a Coffee
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};