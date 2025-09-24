'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

const PropertyCard = ({ property }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      {/* Property Card */}
      <div className="w-80 flex flex-col justify-between rounded-2xl shadow-md hover:shadow-lg transition p-4 bg-white">
        <div className="relative w-full h-48 rounded-xl overflow-hidden">
          <Image src={property.img} alt={property.location} fill className="object-cover" />
        </div>

        <div className="flex flex-col flex-1 justify-between mt-4">
          <div>
            <h3 className="text-lg font-bold">{property.location}</h3>
            <p className="text-yellow-400 text-xl font-bold mt-1">
              {"★".repeat(property.rating)}{"☆".repeat(5 - property.rating)}
            </p>
            <p className="text-sm text-gray-600 mt-2">{property.about}</p>
          </div>

          <button
            className="mt-4 w-full rounded-md bg-gradient-to-r from-purple-500 to-purple-700 hover:opacity-90 px-3 py-2 text-sm text-white font-medium"
            onClick={() => setOpen(true)}
          >
            Visit
          </button>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-white rounded-2xl w-[95vw] max-w-[1200px] h-[90vh] overflow-y-auto shadow-2xl p-6"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              {/* Close Button (on top of everything) */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-3xl font-bold z-50 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md"
              >
                ×
              </button>

              {/* Image Section */}
              <div className="relative w-full h-[50%] rounded-xl overflow-hidden mt-4">
                <Image src={property.img} alt={property.location} fill className="object-cover" />
              </div>

              {/* Details Section */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Side */}
                <div>
                  <h2 className="text-3xl font-bold">{property.location}</h2>
                  <p className="mt-2 text-yellow-500 text-xl font-semibold">
                    {"★".repeat(property.rating)}{"☆".repeat(5 - property.rating)}
                  </p>
                  <p className="mt-4 text-gray-700 text-lg">{property.about}</p>
                  <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
                    <li>3 Bedrooms</li>
                    <li>2 Bathrooms</li>
                    <li>1 Kitchen</li>
                    <li>Living area 1500 sq.ft</li>
                    <li>Parking available</li>
                  </ul>
                </div>

                {/* Right Side */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Amenities</h3>
                    <ul className="space-y-1 text-gray-600 list-disc list-inside">
                      <li>Wi-Fi</li>
                      <li>Air Conditioning</li>
                      <li>Swimming Pool</li>
                      <li>Garden / Balcony</li>
                      <li>Pet Friendly</li>
                    </ul>
                  </div>

                  <button
                    onClick={() => router.push('/book')}
                    className="mt-6 w-full rounded-md bg-purple-600 hover:bg-purple-700 px-6 py-3 text-white text-lg font-medium"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PropertyCard;
