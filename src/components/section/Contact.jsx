import React from 'react';
import { Clock4 , Phone , MapPin  } from 'lucide-react';

export default function Contact() {
  return (
    <div id="contactsection ">
        <div>
            <p> Get In Touch </p>
            <p> Have a question about our products or need a quote for bulk orders? Fill out the form below or visit our store in Nehru Place.</p>
        </div>
        <div className="w-72 bg-white rounded-xl shadow-md p-4">
            <div>
                <span>{<MapPin/>}</span>
                <div>
                    <h1>Visit Us</h1>
                    <p>203, 2nd Floor, Osian Building,
                        12, Nehru Place,
                        Delhi - 110019</p>
                </div>
            </div>
            <div>
                <span>{<Phone />}</span>
                <div>
                    <h1>Call Us</h1>
                    <p>+91 011PXX11-XX11
                        Mon-Sat, 10am - 8pm</p>
                </div>
            </div>
            <div>
                <span>{<Clock4 />}</span>
                <div>
                    <h1>Opening Hours</h1>
                    <p>Mon - Sat: 10:00 AM - 8:00 PM    Closed on Sundays</p>
                </div>
            </div>
        </div>
        <div className="w-72 bg-white rounded-xl shadow-md p-4">
                {/* Name & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <label className="block text-sm font-medium mb-1">
                Full Name
                </label>
                <input
                type="text"
                placeholder="Full Name"
                className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <label className="block text-sm font-medium mb-1">
                Phone Number
                </label>
                <input
                type="tel"
                placeholder="Phone Number"
                className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div> 
                {/* Email */}
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                Email Address
                </label>               
                <input
                type="email"
                placeholder="Email Address"
                className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Subject */}
            <div className="mb-4">
               
                <input
                type="text"
                placeholder="Subject"
                className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

             {/* Message */}
            <div className="mb-6">
                <textarea
                rows="4"
                placeholder="Message"
                className="border rounded-md px-4 py-2 w-full resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

             {/* Send Button */}
            <div className="flex justify-center">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
                Send
                </button>
            </div>

        </div>
    </div>
  )
}
