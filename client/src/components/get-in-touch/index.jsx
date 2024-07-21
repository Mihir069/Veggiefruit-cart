import { Link } from "react-router-dom";
import Form from "../common/form";
import Address from "../common/address";

const GetInTouch = () => {
    return (
        <div className="py-10 md:py-20 bg-slate-100">
            <div className="mx-4 md:mx-10">
                <div className="text-center pt-10">
                    <h1 className="text-4xl text-lime-600 font-semibold pb-4">Get in Touch</h1>
                    <p className="text-lg text-slate-700">
                        The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and youre done.
                        <br />
                        <span className="text-lime-600 hover:text-lime-700">
                            <Link to='/'>Download Now.</Link>
                        </span>
                    </p>
                </div>

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.864784344821!2d-73.9549049244965!3d40.80896503167463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f613438663b5%3A0xce20073c8862af08!2sW%20123rd%20St%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1721544227893!5m2!1sen!2sin"
                    className="w-full h-64 md:h-96 rounded my-10"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>

            <div className="mx-4 md:mx-14 py-6 flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 mb-6 md:mb-0">
                    <Form />
                </div>
                <div className="w-full md:w-1/2">
                    <Address />
                </div>
            </div>
        </div>
    )
}

export default GetInTouch;
