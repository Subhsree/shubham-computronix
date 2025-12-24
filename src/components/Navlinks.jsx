
const Navlinks = () => 
{
    return (
       <nav className=" md:flex gap-8 text-gray-700 font-medium flex justify-center items-center">
            <a href="#home" className="hover:text-blue-600">Home</a>
            <a href="#about" className="hover:text-blue-600">About Us</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>
    );
};

export default Navlinks;