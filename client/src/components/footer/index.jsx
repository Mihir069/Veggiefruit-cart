import { Link } from "react-router-dom";
import Facebook from "../common/facebook";
import LinkedIn from "../common/linkedin";
import Logo from "../common/logo";
import Twitter from "../common/twitter";
import Youtube from "../common/youtube";

const Footer = () => {
    return (
        <div className="bg-slate-600">
            <div className="container px-4 md:px-20 pt-10 mx-auto">
                <div className="flex flex-col md:flex-row md:justify-between">
                    <div className="w-full md:w-1/4 px-5 py-5 cursor-pointer">
                        <Link to='/'>
                            <Logo />
                        </Link>
                        <div className="text-amber-300 leading-10">Fresh products</div>
                    </div>
                    <div className="w-full md:w-1/2 mt-5 md:mt-0">
                        <div className="flex flex-col text-center md:text-left">
                            <div className="relative flex justify-center md:justify-start">
                                <input 
                                    type="text" 
                                    placeholder="Your Email" 
                                    className="rounded-full px-4 md:px-6 py-3 md:py-4 w-full md:w-3/4 focus:outline-none focus:ring focus:ring-gray-300" 
                                />
                                <button 
                                    className="absolute text-white rounded-full font-semibold px-6 md:px-10 py-3 md:py-4 bg-lime-600 right-4 md:right-8 hover:bg-amber-400 transition ease-in-out duration-300 focus:outline-none focus:ring focus:ring-gray-300"
                                >
                                    Subscribe Now
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center md:justify-end mt-5 md:mt-0 space-x-3">
                        <div className="px-1 py-5">
                            <Twitter />
                        </div>
                        <div className="px-1 py-5">
                            <Facebook />
                        </div>
                        <div className="px-1 py-5">
                            <Youtube />
                        </div>
                        <div className="px-1 py-5">
                            <LinkedIn />
                        </div>
                    </div>
                </div>
                <div className="border-t border-amber-600 mt-10"></div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-5 pt-8">
                    <div>
                        <div className="text-slate-100 text-2xl font-medium leading-10">Why People Like us!</div>
                        <div className="text-slate-300 text-md font-medium leading-9 py-5">
                            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the like Aldus PageMaker including of Lorem Ipsum.
                        </div>
                        <button className="py-2 px-7 border border-amber-400 text-lime-600 font-semibold rounded-3xl hover:text-slate-100 hover:bg-amber-500 ease-in-out duration-300">Read More</button>
                    </div>
                    <div>
                        <h2 className="text-slate-100 text-2xl font-medium leading-10">Shop Info</h2>
                        <ul className="text-slate-400 text-md font-medium leading-7 py-5">
                            <li className="mb-3"><Link to='/' className="hover:text-amber-400">About Us</Link></li>
                            <li className="mb-3"><Link to='/' className="hover:text-amber-400">Contact Us</Link></li>
                            <li className="mb-3"><Link to='/' className="hover:text-amber-400">Privacy Policy</Link></li>
                            <li className="mb-3"><Link to='/' className="hover:text-amber-400">Terms & Condition</Link></li>
                            <li className="mb-3"><Link to='/' className="hover:text-amber-400">Return Policy</Link></li>
                            <li className="mb-3"><Link to='/' className="hover:text-amber-400">FAQs & Help</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-slate-100 text-2xl font-medium leading-10">Account</h2>
                        <ul className="text-slate-400 text-md font-medium leading-7 py-5">
                            <li className="mb-3"><Link to='/' className="hover:text-amber-400">My Account</Link></li>
                            <li className="mb-3"><Link to='/' className="hover:text-amber-400">Shop details</Link></li>
                            <li className="mb-3"><Link to='/' className="hover:text-amber-400">Shopping Cart</Link></li>
                            <li className="mb-3"><Link to='/' className="hover:text-amber-400">Wishlist</Link></li>
                            <li className="mb-3"><Link to='/' className="hover:text-amber-400">Order History</Link></li>
                            <li className="mb-3"><Link to='/' className="hover:text-amber-400">International Orders</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-slate-100 text-2xl font-medium leading-10">Contact</h2>
                        <ul className="text-slate-400 text-md font-medium leading-7 py-5">
                            <li className="mb-3"><Link to='/' className="hover:text-amber-400">Address: 1429 Netus Rd, NY 48247</Link></li>
                            <li className="mb-3"><Link to='/' className="hover:text-amber-400">Email: Example@gmail.com</Link></li>
                            <li className="mb-3"><Link to='/' className="hover:text-amber-400">Phone: +0123 4567 8910</Link></li>
                            <li className="mb-3"><Link to='/' className="hover:text-amber-400">Payment Accepted</Link></li>
                            <li className="mb-3"> <img src="/img/payment.png" alt="payment"/> </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center px-5 py-5 text-slate-50">
                    <div className="flex items-center mb-2 md:mb-0">
                        <img src="/svg/copyright-solid.svg" alt="copyrigth" className="w-4"/>
                        <Link to='/' className="pl-2 text-lime-500 hover:text-lime-700">Your Site Name</Link>, All rights reserved.
                    </div>
                    <div className="text-center md:text-right">
                        Designed By <Link to='/' className="text-lime-500 hover:text-lime-700 underline">HTML Codex</Link> Distributed By <Link to='/' className="text-lime-500 hover:text-lime-700 underline">ThemeWagon</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
