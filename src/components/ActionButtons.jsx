import { Search } from "lucide-react";
import React from "react";

const ActionButtons = () => {
    return (
        <div className="flex items-center ">
            <div>
            <button className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100">
                <Search/>
            </button>
            </div>
            <div>
            <a href="tel:+911234567890" className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700">
                Call Now
            </a>
            </div>
        </div>
    );
};

export default ActionButtons;