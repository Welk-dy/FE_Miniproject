import Image from 'next/image';
import Link from 'next/link';

export default function Join() {
  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-16 px-8 py-12">
      {/* Left Section: Image + Title */}
      <div className="flex flex-col items-center md:items-end md:w-1/2">
        <div className="text-3xl font-semibold mb-4">Join Our Team</div>
        <Image
          src="/join.png"
          alt="Join Image"
          width={400}
          height={130}
          className="rounded-lg"
        />
      </div>

      {/* Right Section: Text + Button */}
      <div className="flex flex-col md:w-1/3 space-y-6 text-left md:pr-16">
        <p className="text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et at fringilla 
          id maecenas in scelerisque in. Pharetra, erat amet, vestibulum ullamcorper. 
          Nunc feugiat lacus et eget urna ornare risus malesuada. Cursus morbi vel 
          sed ipsum eget tincidunt ultrices.
        </p>
        <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=example@gmail.com&su=Inquiry&body=Hi%20there,%20I%20have%20a%20question">
          <button className="bg-gray-500 text-white px-6 py-3 rounded-md transition-colors hover:bg-[#4A4A4A]">
            Lets Have a Coffee
          </button>
        </Link>
      </div>
    </div>
  );
}