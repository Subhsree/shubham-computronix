import Iconbutton from "./Iconbutton";
import { ShoppingCart } from 'lucide-react';

const Productcard = ({src , pname , pprice}) => {
    return (
        <>
         <div className="w-72 bg-white rounded-xl shadow-md p-4">
            {/* Product Image */}
            <div className="flex justify-center my-4">
            <img
                src={src}
                alt="Copper HDMI Cable Green"
                className="h-40 object-contain"
            />
            </div>
            
            {/* Product Info */}
            <h3 className="text-lg font-semibold">
                {pname}
            </h3>
            {/* <p className="text-gray-500 text-sm mt-1">
                Length: 5–20 Mtr
            </p> */}

            {/* Price */}
            <p className="text-blue-600 font-semibold text-lg mt-2">
                {pprice} <span className="text-sm text-gray-500">/ Pc</span>
            </p>

            <Iconbutton text ="Enquire now" iocn ={<ShoppingCart/>}/>

         </div>
        </>
    );
};

export default Productcard;