import React from "react";
import NavLinks from "./Navlinks";
import ActionButtons from "./ActionButtons";

const Header = () => {
    return (
    
        <div className="flex items-center justify-between px-6 py-4   absolute top-0 w-full bg-transparent">
          <div>
            <h1>shubham computronix</h1>
          </div>
           <div>
             <NavLinks />
            </div>

            <div>
            <ActionButtons />
            </div>
        </div>

    );
};

export default Header;