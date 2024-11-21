import React from "react";
import Image from "next/image";

const Arrival = () => {
  return (
    <div className="grid sm:grid-cols-1 gap-4">
      <div className="bg-zinc-800 text-white font-sans font-semibold py-2">
        <h1 className="text-center text-2xl">New Arrival</h1>
      </div>

      <div className="flex flex-wrap justify-center sm:justify-around items-center gap-6 px-4 py-6">
        <div className="text-center space-y-5 max-w-sm">
          <h1 className="text-xl font-bold">CREATE</h1>
          <p className="text-sm text-gray-700">
            Products With a Personal Touch For Any Occasion
          </p>
          <button className="bg-blue-900 text-white px-5 py-2 rounded-sm hover:bg-zinc-800 transition-all duration-300">
            Create Now
          </button>
          <Image
            src={"/Arrival.png"}
            alt="Arrival"
            width={300}
            height={300}
            className="object-contain mx-auto"
          />
        </div>

        <div className="text-center space-y-5 max-w-sm">
          <h1 className="text-xl font-bold">CREATE</h1>
          <p className="text-sm text-gray-700">
            Products With a Personal Touch For Any Occasion
          </p>
          <button className="bg-blue-900 text-white px-5 py-2 rounded-sm hover:bg-zinc-800 transition-all duration-300">
            Create Now
          </button>
          <Image
            src={"/arrival2.jpg"}
            alt="Arrival"
            width={200}
            height={200}
            className="object-contain mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Arrival;
