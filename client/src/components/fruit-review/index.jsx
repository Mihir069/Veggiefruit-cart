const FruitReview = () => {
    const reviews = [
        {
            date: "April 12, 2024",
            name: "Jason Smith",
            text: "The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc. Suspendisse ultricies nisi vel quam suscipit."
        },
        {
            date: "April 12, 2024",
            name: "Sam Peters",
            text: "The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc. Suspendisse ultricies nisi vel quam suscipit."
        }
    ];
    return (
        <>
            {reviews.map((review, index) => (
                <div key={index} className="py-3 flex flex-row">
                    <div className="w-auto py-5">
                        <img src="/img/avatar.jpg" alt="avatar" className="w-28" />
                    </div>
                    <div className="flex flex-col px-8">
                        <div className="text-sm text-slate-500">
                            {review.date}
                        </div>
                        <div className="text-xl font-semibold text-slate-600">
                            {review.name}
                        </div>
                        <div className="text-md py-2">
                            {review.text}
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default FruitReview;
