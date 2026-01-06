
const Navlinks = () => 
{
    return (
       <nav className=" md:flex gap-8 text-gray-700 font-medium flex justify-center items-center">
            <a href="#homesection" className="hover:text-blue-600">Home</a>
            <a href="#productsection" className="hover:text-blue-600">Products</a>
            <a href="#aboutsection" className="hover:text-blue-600">About Us</a>
            <a href="#contactsection" className="hover:text-blue-600">Contact</a>
        </nav>
    );
};

export default Navlinks;