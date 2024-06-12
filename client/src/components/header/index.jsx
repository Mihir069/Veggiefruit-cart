import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../common/logo";
import Search from "../common/search";
import ShoppingBag from "../common/shopping-bag";
import User from "../common/user";
import Menu from "../common/menu";
import Location from "../common/location";
import Envlope from "../common/envlope";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const headerList = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "Shop", path: "/shop" },
        { id: 3, name: "Shop Details", path: "/shop-details" },
        { id: 4, name: "Pages", path: "/pages" },
        { id: 5, name: "Contact", path: "/contact" },
    ];

    return (
        <div className="container px-4 mx-auto">
            <div className=" hidden bg-lime-600 mx-20 px-10 md:flex items-start p-4 rounded-tl-[100px] rounded-bl-[50px] rounded-br-[100px] rounded-tr-[50px] justify-between ">
                <div className="flex items-center">
                    <Location/>
                    <div className="px-3 text-white text-sm">
                        123 Street, New York
                    </div>
                    <Envlope/>
                    <div className="px-3 text-white text-sm">
                        Email@Example.com
                    </div>
                </div>
                <div className="flex">
                    <div className="px-3 text-white text-sm">
                        Privacy Policy / Terms of Use / Sales and Refunds
                    </div>
                </div>
               
            </div>
            <nav className="flex justify-between items-center md:px-20 md:py-5">
                <div className="flex items-start">
                    <Link to="/"><Logo /></Link>  
                </div>
                <div className="hidden md:flex items-center">
                    {headerList.map((item) => (
                        <div key={item.id} className="inline-flex p-5 text-[16px] font-medium text-gray-400 hover:text-green-700">
                            <Link to={item.path}>
                                {item.name}
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="hidden md:flex items-center">
                    <div className="p-3">
                        <Link to="/search">
                            <Search />
                        </Link>
                    </div>
                    <div className="p-3">
                        <Link to="/cart">
                            <ShoppingBag />
                        </Link>
                    </div>
                    <div className="p-3">
                        <Link to="/user">
                            <User />
                        </Link>
                    </div>
                </div>
                <div className="md:hidden flex items-center p-5">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
                        <Menu/>
                    </button>
                </div>
            </nav>
            {isMenuOpen && (
                <div className="md:hidden flex flex-col items-start bg-gray-100 w-full py-4">
                    {headerList.map((item) => (
                        <div key={item.id} className="p-3 w-full text-start">
                            <Link to={item.path} className="text-gray-400 hover:text-green-400">
                                {item.name}
                            </Link>
                        </div>
                    ))}
                    <div className="flex items-center">
                        <div className="p-3 w-full">
                            <Link to="/search">
                                <Search />
                            </Link>
                        </div>
                        <div className="p-3 w-full">
                            <Link to="/cart">
                                <ShoppingBag />
                            </Link>
                        </div>
                        <div className="p-3 w-full">
                            <Link to="/user">
                                <User />
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
