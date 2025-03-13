'use client';

const header = () => {
  return (
    <header className="flex items-center justify-center h-44 tracking-wider">
    <div className=" w-[90%]">
        <h1 className=" text-2xl font-semibold">Categories</h1>

        <div className="flex gap-2 mt-5">
          <button
            type="button"
            className="hover:cursor-pointer bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 text-white py-1 px-3 rounded-2xl"
          >
            Room
          </button>
          <button
            type="button"
            className="hover:cursor-pointer bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 text-white py-1 px-3 rounded-2xl"
          >
            Apartment
          </button>
          <button
            type="button"
            className="hover:cursor-pointer bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 text-white py-1 px-3 rounded-2xl"
          >
            House
          </button>
          <button
            type="button"
            className="hover:cursor-pointer bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 text-white py-1 px-3 rounded-2xl"
          >
            Commercial
          </button>
        </div>
      
    </div>
  </header>
  )
}

export default header