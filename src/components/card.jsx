const Card = ({ icon, title, description }) => {
  return (
    <div className="w-80 bg-white rounded-2xl shadow-md p-6 text-center">
      
      {/* Icon */}
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-50">
          {icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600">
        {description}
      </p>

    </div>
  );
};

export default Card;

