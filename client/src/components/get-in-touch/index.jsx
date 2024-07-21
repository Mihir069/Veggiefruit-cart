import { Link } from "react-router-dom";
import Form from "../common/form";
import Address from "../common/address";

const GetInTouch = () => {
    return (
        <div className="mb-20 py-20 ">
            <div className=" mx-10 bg-slate-100">
                <div className="text-center pt-20 mx-[23%]">
                    <h1 className="text-lime-600 text-4xl py-2 font-semibold ">Get in touch</h1>
                    <p className="text-lg">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and youre done.<br />
                        <span className="text-lime-600 hover:text-lime-700"><Link to='/'>Download Now.</Link> </span>
                    </p>

                </div>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.864784344821!2d-73.9549049244965!3d40.80896503167463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f613438663b5%3A0xce20073c8862af08!2sW%20123rd%20St%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1721544227893!5m2!1sen!2sin" className="w-[90%] rounded my-10 mx-[60px]" height="400" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="mx-14 py-2 flex flex-row">
                    <div className="w-1/2 mb-10">
                        <Form />
                    </div>
                    <div className="w-1/2">
                        <Address/>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default GetInTouch;