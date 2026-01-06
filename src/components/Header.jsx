import React from "react";
import NavLinks from "./Navlinks";
import Iconbutton from "./Iconbutton";
import { Search , Phone } from "lucide-react";

const Header = () => {
    return (
    
        <div className="flex items-center justify-between px-6 py-4 top-0 w-full fixed  bg-[#f9fafb]/60 backdrop-blur-sm border-b border-gray-200">
          <div>
            <h1 className="text-2xl font-bold">Shubham computronix</h1>
          </div>
          <div>
            <NavLinks />
          </div>
          <div className="flex">
            <div className="px-10"><Iconbutton icon={<Search/>} /></div>
            <div><Iconbutton text = "Call now" icon={<Phone/>} /></div>
          </div>
        </div>

    );
};

export default Header;