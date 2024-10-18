import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="flex grow flex-col min-h-full gap-2 bg-[#FAF3F3] md:flex-row">
        <Image
            src="/hero.png"
            width={640}
            height={640}
            className="block md:hidden w-full"
            alt="Mobile Hero Picture"
        />
        <div className="flex flex-col justify-center px-6 py-5 md:w-1/2 md:px-20">
        <strong className='text-[#414141] text-4xl md:text-8xl md:leading-tight pb-3 md:pb-6'>
            <p>We Code</p>
            <p>We Deliver</p>
        </strong>
        <div className="flex flex-row">
            <Link
              href="/about-us"
              className="flex self-center items-center shadow-xl rounded-full bg-[#9FD685] px-2 py-2 transition-colors hover:bg-blue-400"
            >
            <Image
            src="/arrow_icon.png"
            width={48}
            height={48}
            alt="Screenshots of the dashboard project showing desktop version"
            />
            </Link>
            <div
              className={`text-[#414141] font-light text-lg md:text-2xl whitespace-break-spaces pl-5 md:leading-snug`}
            >
              <p>Twiscode specializes in developing
                  high-performing mobile and
                  web applications.</p>  
            </div>
        </div>
        </div>
        <div className="self-center md:w-1/2">
          <Image
            src="/hero.png"
            width={640}
              height={640}
            className="hidden md:block md:w-full"
            alt="Desktop Hero Picture"
          />
        </div>
    </div>
  );
}