const FruitDescription = () => {
    const descriptions = [
        "The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. Suspendisse ultricies nisi vel quam suscipit.",
        "Sabertooth peacock flounder; chain pickerel hatchetfish, pencilfish snailfish filefish Antarctic icefish goldeye aholehole trumpetfish pilot fish airbreathing catfish, electric ray sweeper."
    ];

    const details = [
        { label: "Weight", value: "1kg" },
        { label: "Country of Origin", value: "Agro farm" },
        { label: "Quality", value: "Organic" },
        { label: "Check", value: "Healthy" },
        { label: "Min Weight", value: "250 Kg" }
    ];

    return (
        <>
            {descriptions.map((text, index) => (
                <div key={index} className="py-3 text-lg text-slate-500">
                    {text}
                </div>
            ))}
            <table className="w-1/2 bg-white shadow-md rounded-lg overflow-hidden">
                <tbody className="text-gray-600 text-md">
                    {details.map((detail, index) => (
                        <tr key={index} className="border-b border-gray-200">
                            <td className="py-3 px-6 text-left whitespace-nowrap">{detail.label}</td>
                            <td className="py-3 px-6 text-left">{detail.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default FruitDescription;
