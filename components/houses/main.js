'use client';
import React, { useEffect, useState } from 'react';
import PropertyCard from '../common/propertyCard';

const Section = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch('/data.json') // fetch from public/data.json
      .then((res) => res.json())
      .then((data) => setProperties(data))
      .catch((err) => console.error("Failed to load data.json", err));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pt-20">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};
export default Section