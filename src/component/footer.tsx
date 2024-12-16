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
      <div className="text-xs md:text-sm text-white">
      © 2024 Ngivént. All Rights Reserved.
      </div>
    </div>
  </div>
</div>
  );
}