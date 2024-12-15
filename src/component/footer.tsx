import LocationMap from '@/component/locationMap';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <div className="flex flex-col bg-[#171717]">
  <div className="flex flex-col px-8 md:px-20 gap-6 md:gap-12 justify-start py-8">
    <div className="flex flex-col items-start gap-2">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/company_logo.png"
          alt="Company Logo"
          width={200}
          height={200}
        />
      </div>
      {/* Teks Ngivent */}
      <div className="text-lg md:text-xl text-white font-semibold">
        Ngivent Pte. Ltd.
      </div>
    </div>
  </div>
</div>
  );
}