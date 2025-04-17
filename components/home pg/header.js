'use client';

const header = () => {
  return (
    <section className="flex items-center tracking-wider h-40">
    <div>
        <h1 className=" text-2xl font-semibold">Categories</h1>

        <div className="flex gap-2 mt-5">
          <button
            type="button"
            className=" bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 text-white py-1 px-3 rounded-2xl"
          >
            Room
          </button>
          <button
            type="button"
            className=" bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 text-white py-1 px-3 rounded-2xl"
          >
            Apartment
          </button>
          <button
            type="button"
            className=" bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 text-white py-1 px-3 rounded-2xl"
          >
            House
          </button>
          <button
            type="button"
            className=" bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 text-white py-1 px-3 rounded-2xl"
          >
            Commercial
          </button>
        </div>
      
    </div>
    </section>
  
  )
}

export default header