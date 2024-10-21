import Image from 'next/image';
import VideoOverlay from "@/component/videoOverlay";

export default function Hero() {
  return (
    <div className="flex grow flex-col min-h-full gap-2 bg-[#FAF3F3] md:flex-row">
        <Image
            src="/hero.png"
            width={640}
            height={531}
            className="block md:hidden w-full"
            alt="Mobile Hero Picture"
        />
        <div className="flex flex-col justify-center px-6 py-5 md:w-1/2 md:px-20">
          <strong className='text-[#414141] text-4xl md:text-6xl md:leading-tight pb-3 md:pb-6'>
              <p>We Code</p>
              <p>We Deliver</p>
          </strong>
          <div className="flex flex-row">
            <VideoOverlay
              videoUrl="https://www.youtube.com/embed/iYZkBxByo14?si=VLRdWYzDczs3Fz4M"
            />
            <div
              className={`text-[#414141] font-light text-lg md:text-2xl whitespace-break-spaces pl-5 md:leading-snug`}
            >
              Twiscode specializes in developing
              high-performing mobile and
              web applications. 
            </div>
          </div>
        </div>
        <div className="self-center md:w-1/2">
          <Image
            src="/hero.png"
            width={690}
            height={572}
            className="hidden md:block md:w-full"
            alt="Desktop Hero Picture"
          />
        </div>
    </div>
  );
}