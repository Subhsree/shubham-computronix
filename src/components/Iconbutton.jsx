const Iconbutton = ({icon,text,onClick} ) => (
    <button onClick={onClick} className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700">
        {icon}
        {text}
    </button>
);

export default Iconbutton;