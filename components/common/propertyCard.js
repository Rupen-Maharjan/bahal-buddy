'use client';
import Image from 'next/image';

const PropertyCard = ({ img }) => {
  return (
    <div className="w-80 flex flex-col gap-y-5">
      {/* Image Wrapper */}
      <div className="relative w-full h-48 rounded-2xl overflow-hidden">
        <Image
          src={img}
          alt="No image"
          width={100}
          height={100}
          className="rounded-2xl w-full"
        />
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 gap-y-2">
        <h3 className="text-lg font-bold">Location</h3>
        <p className="text-yellow-400 text-4xl font-bold">* * * *</p>
        <p className="text-sm">About the property</p>
        <button
          className="mt-2 w-full rounded-md bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br 
            focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 
            px-3 py-2 text-sm text-white"
        >
          Visit
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
