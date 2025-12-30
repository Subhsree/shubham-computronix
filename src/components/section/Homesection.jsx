import React from "react";
import Iconbutton from "../Iconbutton";
import {MoveRight , User} from 'lucide-react';

function Homesection( ) {
  return (
    <section className="w-full px-4 py-16 bg-amber-200">
      <div className="max-w-6xl mx-auto text-center">
        
        <p className="text-sm md:text-base text-gray-600 mb-4">
          ⭐ Trusted by thousands of customers for <span className="font-semibold">33+ years</span>
        </p>

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
          Premium Computer
        </h1>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2">
          Accessories & Cables
        </h1>

        {/* Description */}
        <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-base md:text-lg">
          Your one-stop destination for high-quality computer peripherals, cables,
          and repair services in Nehru Place, Delhi.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Iconbutton text ="Browse catalogue" icon ={<MoveRight/>}/>
          <Iconbutton text="Contact us" icon = {<User/>} />
        </div>

      </div>
    </section>
  );
}

export default Homesection;
