const LeaveReview = () => {
    return (
        <>
            <div className="text-2xl font-bold">
                Leave a Reply
            </div>

            <form className="mt-4">
                <div className="flex gap-4 mb-4">
                    <div className="flex-1">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700"></label>
                        <input
                            id="name"
                            type="text"
                            className=" block w-full px-3 py-5 border-b border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Your Name*"
                        />
                    </div>
                    <div className="flex-1">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700"></label>
                        <input
                            id="email"
                            type="email"
                            className="block w-full px-3 py-5 border-b border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                            placeholder="Your Email*"
                        />
                    </div>
                </div>

                <div className="mb-10">
                    <label htmlFor="review" className="block text-sm font-medium text-gray-700"></label>
                    <textarea
                        id="review"
                        rows="10"
                        className="block w-full px-3 py-10 border-b border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Your Review"
                    ></textarea>
                </div>

                <div className="flex justify-end py-10">
                    <div className="border cursor-pointer py-5 px-5 rounded-full border-amber-300 hover:bg-amber-300 text-green-600 hover:text-slate-100 ease-in-out duration-500">
                        <div className="flex flex-row items-center justify-center">
                            <div className=" px-5 font-semibold">Post Comment</div>
                        </div>

                    </div>
                </div>
            </form>
        </>
    )
}
export default LeaveReview;