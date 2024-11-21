import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="shadow-lg shadow-black m-10 px-5 rounded-md sm:flex sm:items-center sm:justify-center">
      <div className="flex gap-x-10 sm:flex-col sm:gap-5 sm:text-center sm:items-center">
        <div className="w-full sm:w-full sm:max-w-full sm:h-auto">
          <Image
            src="/banner.jpg"
            alt="Banner"
            layout="responsive"
            width={200}
            height={200}
            className="rounded-md"
          />
        </div>

        <div className="sm:text-center">
          <h1 className="text-2xl font-sans font-bold mt-5 sm:text-xl">
            Embrace the Chill: Winter Arrivals Are Here!
          </h1>
          <p className="text-sm font-sans py-5 sm:text-xs">
            It uses cool, wintery colors, such as blues and whites, with bold
            text like New Winter Arrivals or Shop the Latest Winter Collection,
            accompanied by imagery of cozy, cold-weather apparel, to attract
            attention and encourage shopping.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
