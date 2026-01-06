import React from 'react';
import Productcard from '../Productcard';
import product from '../../data';

export default function Productsection() {
  return (
    <div className='min-h-screen' id="productsection">
      <div className=' flex justify-center'>
          <button className='border rounded-sm px-2 py-1 font-medium'>Our Catalogue </button>
      </div>
      <p className=" text-4xl text-center ">Top Selling Products</p>
      <p className='text-center'> Browse our wide range of high-quality computer cables and accessories. </p>
        <div className="flex flex-wrap gap-6 p-6 px-10 py-12">
        {
          product.map( (product) =>
            {
              return(
              <Productcard  key={product.id} src={product.src} pname ={product.pname} pprice={product.pprice} />
              );
            })
        }

        </div>
    </div>
    
  )
}
