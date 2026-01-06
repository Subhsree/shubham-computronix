import React from "react";
import Iconbutton from "../Iconbutton";
import {MoveRight , User} from 'lucide-react';



function Homesection( ) {
  return (
    <section className="min-h-screen px-4 py-16 flex justify-center items-center " id="homesection">
      {/* <div className="max-w-6xl mx-auto text-center"> */}
      <div className="text-center">
        <p className="text-sm md:text-base text-gray-600 mb-5">
          ⭐ Trusted by thousands of customers for <span className="font-semibold">33+ years</span>
        </p>

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
          Premium Computer
        </h1>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mt-5">
          Accessories & Cables
        </h1>

        {/* Description */}
        <p className="text-gray-600 mt-8 max-w-2xl mx-auto text-base md:text-lg">
          Your one-stop destination for high-quality computer peripherals, cables,
          and repair services in Nehru Place, Delhi.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Iconbutton text ="Browse catalogue" icon ={<MoveRight/>}/>
          <Iconbutton text="Contact us" icon = {<User/>} />
        </div>

      </div>
    </section>
  );
}

export default Homesection;
