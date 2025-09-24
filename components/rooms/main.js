'use client';
import React from 'react';
import PropertyCard from '../common/propertyCard';
import data from '../../public/data'; // correct path

const Section = () => {
  return (
    <div className="grid grid-cols-4 gap-x-5 gap-y-24">
      {data.map((item) => (
        <PropertyCard key={item.id} property={item} />
      ))}
    </div>
  );
};

export default Section;
