import { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <form onSubmit={handleSubmit} >
            <div className='pb-4'>
                <label htmlFor="name"></label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className=" block w-full px-3 py-5 border-b border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                    placeholder='Your Name'
                />
            </div>
            <div className='py-4'>
                <label htmlFor="email"></label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className=" block w-full px-3 py-5 border-b border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                    placeholder='Enter Your Email'
                />
            </div>
            <div className='py-4'>
                <label htmlFor="message"></label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className=" block w-full px-3 py-5 border-b border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                    placeholder='Your Message'
                />
            </div>
            <div className='py-4'>
                <div className="border cursor-pointer py-4 px-3 rounded border-amber-300 bg-slate-50 hover:bg-amber-300 text-green-600 hover:text-slate-100 ease-in-out duration-500">
                    <div className="flex flex-row items-center justify-center">
                        <div className=" px-2 font-semibold">Submit</div>
                    </div>

                </div>
            </div>
        </form>
    );
};

export default Form;
