import { X, Heart } from "lucide-react";

export default function Thankyoupopup({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-[500px] rounded-2xl bg-white px-6 py-10 text-center shadow-xl">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X size={18} />
        </button>

        {/* Icon */}
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-500">
          <Heart className="text-white" size={26} />
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold">Thank you for your feedback.</h2>

        {/* Message */}
        <p className="mt-3 text-sm text-gray-600 leading-relaxed">
          
        We’ve received your message and will get back to you shortly.
        </p>

        {/* Button */}
        <button
          onClick={onClose}
          className="mt-6 w-[100px] rounded-full bg-blue-500 py-2 text-white hover:bg-blue-600 transition"
        >
          Done
        </button>
      </div>
    </div>
  );
}
