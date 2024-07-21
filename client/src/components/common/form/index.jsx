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
        <form onSubmit={handleSubmit} className="px-4">
            <div className='pb-4'>
                <label htmlFor="name" className="sr-only">Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="block w-full px-3 py-3 border-b border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                    placeholder='Your Name'
                />
            </div>
            <div className='py-4'>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="block w-full px-3 py-3 border-b border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                    placeholder='Enter Your Email'
                />
            </div>
            <div className='py-4'>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="block w-full px-3 py-3 border-b border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                    placeholder='Your Message'
                />
            </div>
            <div className='py-4'>
                <button type="submit" className="block w-full py-4 border border-amber-400 rounded-lg bg-slate-50 text-green-600 hover:bg-amber-400 hover:text-slate-100 transition duration-300 ease-in-out">
                    Submit
                </button>
            </div>
        </form>
    );
};

export default Form;
