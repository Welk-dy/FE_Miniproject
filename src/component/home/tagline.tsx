import React from "react";

const Tagline = () => {
  return (
    <div className="container mx-auto md:py-24">
      <div className="flex items-center justify-center">
        <div className="bg-[url('/bg-tagline.png')] py-16 px-5 md:px-12 lg:px-36 md:rounded-[10px] bg-cover bg-center">
          <div className="flex flex-col items-center justify-center gap-y-8">
            <p className="text-offWhite text-2xl leading-[45px] font-semibold text-center max-w-lg">
              “Some of the History of Our Company is that we are Catching up
              through Video”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tagline;