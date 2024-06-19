import { Link } from "react-router-dom";

const Linkedin = () => {
    return (
        <div className="w-[44px] h-[44px] flex items-center justify-center border rounded-full border-amber-400 hover:bg-amber-200 ease-in-out duration-300">
            <Link to="/">
                <img src="/svg/linkedin-in.svg" alt="linkedin" className="w-3" />
            </Link>
        </div>
    );
}

export default Linkedin;
