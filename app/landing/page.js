'use client'

import { HowItWorks, LHeader, PropertyTypes, Ready } from "@/components/export";

export default function Landing() {
  return (
    <> 
      <LHeader/>
      <div className="container px-4 mx-auto my-12 gap-20 grid">
          <PropertyTypes/>
          <HowItWorks/>
        <Ready/>
      </div>
    </>
  );
}
