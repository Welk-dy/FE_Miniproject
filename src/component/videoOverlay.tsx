"use client";

import React from "react";
import Image from "next/image"; // Ensure this import is at the top
import useOverlay from "@/hooks/useOverlay";

interface VideoOverlayProps {
  videoUrl: string;
}

const VideoOverlay: React.FC<VideoOverlayProps> = ({ videoUrl }) => {
  const { isOpen, openOverlay, closeOverlay } = useOverlay();

  return (
    <>
      {/* Play Button */}
      <button
        className="flex self-center items-center shadow-xl rounded-full bg-[#9FD685] px-2 py-2 transition-colors hover:bg-blue-400"
        onClick={openOverlay}
        aria-label="Play Video"
      >
        {/* Play Image */}
        <Image
          src="/arrow_icon.png" // Your play button image path
          width={48}
          height={48}
          alt="Play Video"
          className="object-contain" // Ensures the image is contained within the button
        />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={closeOverlay}
        >
          <div
            className="relative w-full max-w-3xl h-80 md:h-[500px]"
          >
            <iframe
              className="h-full w-full rounded-lg"
              src={`${videoUrl}?autoplay=1`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <button
              className="absolute top-2 right-4 md:top-2 md:right-6 text-white text-4xl hover:text-gray-400"
              onClick={closeOverlay}
            >
              x
            </button>
        </div>
      )}
    </>
  );
};

export default VideoOverlay;