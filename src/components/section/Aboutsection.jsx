import React from 'react';
import Card from '../card';
import { Clock4 , ShieldCheck , Wrench , MapPin } from 'lucide-react';

export default function Aboutsection() {
  return ( 
    <div className='min-h-screen flex px-10 py-20' id="aboutsection">
        <div className='flex-1 px-6'>
          <h1 className='text-3xl'>About Shubham Computronix</h1>
          <p className=''>
            Established as a premier destination for computer hardware and accessories, Shubham Computronix has been a cornerstone of Nehru Place's tech ecosystem for over three decades.We specialize in a comprehensive range of networking cables, connectors, and computer peripherals. Whether you need HDMI cables, VGA connectors, or specialized power cords, we ensure quality and durability in every product.
          </p>
        </div>
        <div className='flex-1  grid grid-cols-2 gap-10 px-6'>
              <Card icon ={<Clock4/>} title="33+ Years Experience" description="Serving Nehru Place since 1990 with trusted electronics solutions."/>
              <Card icon ={<ShieldCheck/>} title="Genuine Products" description="100% authentic computer accessories and high-quality cables"/>
              <Card icon ={<Wrench/>} title="Expert Repairs" description="Professional computer repair services by skilled technicians."/>
              <Card icon ={<MapPin/>} title="Prime Location" description="Located centrally in Nehru Place, Delhi's IT hub."/>
        </div>
    </div>
  )
}
