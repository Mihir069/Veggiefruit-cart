import { Link } from "react-router-dom";

const Categories = () => {
    const fruitCategories = [
        { id: 1, name: "Apples", number: 3 },
        { id: 2, name: "Oranges", number: 5 },
        { id: 3, name: "Strawberry", number: 2 },
        { id: 4, name: "Banana", number: 8 },
        { id: 5, name: "Pumpkin", number: 5 },
    ];
    return (
        <div className="py-3">
            <div className="text-2xl font-customFont font-semibold text-slate-500">Categories</div>
            <ul>
                {fruitCategories.map((item) => (
                    <li key={item.id} className="flex flex-row items-center justify-between">
                        <Link to="/" className="flex items-center py-2 font-medium text-lime-500 hover:text-amber-400 ease-in-out duration-300">
                            <img src="/svg/apple-whole-solid.svg" alt="apple" className="w-4 mr-2" />
                            {item.name}
                        </Link>
                        <span>{`(${item.number})`}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Categories;