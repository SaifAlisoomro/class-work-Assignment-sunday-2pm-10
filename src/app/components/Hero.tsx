import Image from "next/image";
const Hero = () => {
  return (
    <div className="grid gap-10 px-5 py-10 m-9 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div className="w-full h-full shadow-lg shadow-slate-700 font-sans font-bold">
        <div className="flex flex-col items-center sm:flex-row sm:items-center gap-4">
          <Image
            src={"/product1.png"}
            alt="product"
            width={200}
            height={200}
            className="object-contain"
          />
          <h1 className="bg-zinc-600 text-white px-4 py-2 rounded-sm text-center">
            GUCCI T-SHIRT
          </h1>
        </div>
        <div className="mt-4">
          <h3 className="text-[#044e83] underline text-center text-lg">
            Rs: 1699 25% FLAT
          </h3>
          <p className="text-center text-gray-600 py-5 text-sm">
            A Gucci T-shirt is a high-end, stylish garment that showcases the
            brands iconic logo and luxury craftsmanship.
          </p>
          <div className="flex justify-center">
            <button className="bg-blue-900 text-white px-5 my-5 py-3 rounded-sm text-sm hover:bg-zinc-800 transition-all duration-300">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-full shadow-lg shadow-slate-700 font-sans font-bold">
        <div className="flex flex-col items-center sm:flex-row sm:items-center gap-4">
          <Image
            src={"/product2.png"}
            alt="product"
            width={200}
            height={200}
            className="object-contain"
          />
          <h1 className="bg-zinc-600 text-white px-4 py-2 rounded-sm text-center">
            GUCCI T-SHIRT
          </h1>
        </div>
        <div className="mt-4">
          <h3 className="text-[#044e83] underline text-center text-lg">
            Rs: 3599 25% FLAT
          </h3>
          <p className="text-center text-gray-600 py-5 text-sm">
            A Gucci T-shirt is a high-end, stylish garment that showcases the
            brands iconic logo and luxury craftsmanship.
          </p>
          <div className="flex justify-center">
            <button className="bg-blue-900 text-white px-5 my-5 py-3 rounded-sm text-sm hover:bg-zinc-800 transition-all duration-300">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-full shadow-lg shadow-slate-700 font-sans font-bold">
        <div className="flex flex-col items-center sm:flex-row sm:items-center gap-4">
          <Image
            src={"/product3.png"}
            alt="product"
            width={200}
            height={200}
            className="object-contain"
          />
          <h1 className="bg-zinc-600 text-white px-4 py-2 rounded-sm text-center">
            GUCCI T-SHIRT
          </h1>
        </div>
        <div className="mt-4">
          <h3 className="text-[#044e83] underline text-center text-lg">
            Rs: 2399.0 25% FLAT
          </h3>
          <p className="text-center text-gray-600 py-5 text-sm">
            A Gucci T-shirt is a high-end, stylish garment that showcases the
            brands iconic logo and luxury craftsmanship.
          </p>
          <div className="flex justify-center">
            <button className="bg-blue-900 text-white px-5 my-5 py-3 rounded-sm text-sm hover:bg-zinc-800 transition-all duration-300">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
