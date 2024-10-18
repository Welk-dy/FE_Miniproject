import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="flex grow flex-col h-full gap-2 bg-black md:flex-row">
        <div className="flex flex-col justify-center px-6 py-5 md:w-1/2 md:px-20">
        <strong className='text-[#414141] text-4xl md:text-8xl md:leading-tight pb-3 md:pb-6'>
            <p>We Code</p>
            <p>We Deliver</p>
        </strong>
        <div className="flex flex-row">
            <Link
              href="/login"
              className="shadow-xl self-center flex items-center gap-5 self-start rounded-full bg-[#9FD685] px-2 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
            >
            <Image
            src="/arrow_icon.png"
            width={48}
            height={48}
            className=""
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
        <div className="self-center md:w-1/2 w justify-center place-items-end">
          <Image
            src="/hero.png"
            width={640}
              height={640}
            className="hidden md:block"
            alt="Desktop Hero Picture"
          />
          <Image
            src="/hero.png"
            width={640}
            height={640}
            className="block md:hidden"
            alt="Mobile Hero Picture"
          />
        </div>
    </div>
  );
}