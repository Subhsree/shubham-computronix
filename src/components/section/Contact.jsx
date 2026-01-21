import Thankyoupopup from '../Thankyoupopup';
import React, { useRef ,useState } from 'react';
import emailjs from '@emailjs/browser';
import { Clock4, Phone, MapPin } from 'lucide-react';

export default function Contact() {

  const formRef = useRef();
  const [showPopup, setShowPopup] = useState(false);


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_bb0o8ym',     
      'template_mnr21sa',   
      formRef.current,
      'HnuVgm6BmDQC-IuB8'     
    )
    .then(() => {
      setShowPopup(true);          
      formRef.current.reset();
    })
    .catch((error) => {
      console.error(error);
      alert('Failed to send message');
    });
  };

  return (
    <div id="contactsection">
      <div className="text-center">
        <p className="text-xl font-bold">Get In Touch</p>
        <p>
          Have a question about our products or need a quote for bulk orders?
          Fill out the form below or visit our store in Nehru Place.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-5 p-10 mx-10">

        {/* LEFT INFO */}
        <div className="col-span-1 bg-white rounded-xl shadow-md p-10 space-y-6">
          <div>
            <MapPin />
            <h1 className="font-semibold">Visit Us</h1>
            <p>
              203, 2nd Floor, Osian Building,<br />
              12, Nehru Place,<br />
              Delhi - 110019
            </p>
          </div>

          <div>
            <Phone />
            <h1 className="font-semibold">Call Us</h1>
            <p>+91 011PXX11-XX11<br />Mon-Sat, 10am - 8pm</p>
          </div>

          <div>
            <Clock4 />
            <h1 className="font-semibold">Opening Hours</h1>
            <p>Mon - Sat: 10:00 AM - 8:00 PM<br />Closed on Sundays</p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form 
          ref={formRef}
          onSubmit={sendEmail}
          className="col-span-2 bg-white rounded-xl shadow-md p-10"
        >
          {/* Name & Phone */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="border rounded-md px-4 py-2 w-full"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              className="border rounded-md px-4 py-2 w-full"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="border rounded-md px-4 py-2 w-full"
            />
          </div>

          {/* Subject */}
          <div className="mb-4">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="border rounded-md px-4 py-2 w-full"
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <textarea
              name="message"
              rows="4"
              placeholder="Message"
              required
              className="border rounded-md px-4 py-2 w-full resize-none"
            />
          </div>

          {/* Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition cursor-pointer">
              Send
            </button>
          </div>
        </form>
      <Thankyoupopup
          isOpen={showPopup}
          onClose={() => setShowPopup(false)}/>
      </div>
    </div>
  );
}