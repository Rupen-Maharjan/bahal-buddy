'use client';
import React from 'react'
import PropertyCard from '../common/propertyCard'

const section = () => {
  const data = [1,2,3,4,5,6,7,8,9,10];
  return (
    <>
    <h1 className=" text-4xl text-center font-bold my-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text h-11 text-transparent">Bahaal Buddy</h1>
        <div className="grid grid-cols-4 gap-y-24">
          {data.map((item) => (
              <PropertyCard key={item} img={'/house.jpg'}/>
            
          ))}
        </div>
    </>
  )
}

export default section