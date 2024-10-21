'use client'; // Ensure this is a Client Component

import Image from 'next/image';
import { usePagination } from '@/hooks/usePagination';
import { WhatContent } from '@/data/whatContent'; // Import data

export default function WhatService() {
  const { currentSlide, nextSlide, prevSlide, isFirstSlide, isLastSlide } =
    usePagination(WhatContent.length);

  return (
    <div className="flex flex-col md:flex-row w-screen md:gap-20 md:pb-10">
      <div className="flex md:justify-end md:items-center px-8 md:px-0  md:w-1/2">
        {/* Image Section */}
        <Image
          src={WhatContent[currentSlide].image}
          alt={WhatContent[currentSlide].title}
          width={400}
          height={300}
          className="rounded-lg"
        />
      </div>
        {/* Text Section */}
      <div className="flex flex-col md:w-1/2 gap-4 md:gap-4 justify-center px-8 md:pr-32">
        <div className="text-2xl md:text-4xl font-semibold">
          What We Do?
        </div>
        <div className="gap-4 md:gap-4">
          <div className="text-lg md:text-xl font-semibold">
            {WhatContent[currentSlide].title}
          </div>
          <p className="md:whitespace-break-spaces leading-normal text-lg md:text-xl h-2/4 md:h-3/4">
            {WhatContent[currentSlide].description}
          </p>
        </div>
        {/* Pagination Controls */}
        <div className="flex text-2xl text-[#414141] gap-3">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            disabled={isFirstSlide}
            className={`py-2 px-3 rounded w-12 bg-gray-300 ${isFirstSlide ? 'bg-gray-300 text-gray-500 cursor-not-allowed hover:bg-gray-300' : 'hover:bg-gray-400'}`}
          >previous
            {isFirstSlide ? '' : '<'} {/* Empty string if disabled */}
          </button>
          {/* Next Button */}
          <button
            onClick={nextSlide}
            disabled={isLastSlide}
            className={`py-2 px-3 rounded w-12 bg-gray-300 ${isLastSlide ? 'bg-gray-300 text-gray-500 cursor-not-allowed hover:bg-gray-300' : 'hover:bg-gray-400'}`}
          >next
            {isLastSlide ? '' : '>'} {/* Empty string if disabled */}
          </button>
        </div>
      </div>
    </div>
  );
}