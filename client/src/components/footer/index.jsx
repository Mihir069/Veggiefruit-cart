import Facebook from "../common/facebook";
import LinkedIn from "../common/linkedin";
import Logo from "../common/logo";
import Twitter from "../common/twitter";
import Youtube from "../common/youtube";
const Footer = () => {
    return (
        <div className="container bg-slate-600">
            <div className="p-20">
                <div className="flex flex-row ">
                    <div className="w-96 px-5 py-5">
                        <Logo />
                        <div className="text-amber-300 leading-10">Best Product</div>
                    </div>
                    <div className="w-[52%]">
                        <div className="flex flex-col text-center md:text-left">
                            <div className=" relative flex justify-center md:justify-start">
                                <input type="text" placeholder="Your Email" className=" rounded-full px-4 md:px-6 py-3 md:py-4 md:w-[76%] focus:outline-none focus:ring focus:ring-gray-300" />
                                <button className="absolute text-white rounded-full font-semibold px-6 md:px-10 py-3 md:py-4 bg-lime-600 right-8 md:right-[170px] hover:bg-amber-400 transition ease-in-out duration-300 focus:outline-none focus:ring focus:ring-gray-300">Subscribe Now</button>
                            </div>
                        </div>
                    </div>
                    <div className=" flex flex-row">
                        <div className=" px-1 py-5 flex flex-row">
                            <Twitter />
                        </div>
                        <div className=" px-1 py-5 flex flex-row">
                            <Facebook />
                        </div>
                        <div className=" px-1 py-5 flex flex-row">
                            <Youtube />
                        </div>
                        <div className=" px-1 py-5 flex flex-row">
                            <LinkedIn />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Footer;