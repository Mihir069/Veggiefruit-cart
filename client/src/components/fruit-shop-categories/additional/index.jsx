const Additional = () =>{
    const additional = [
        { id: 1, name: "Organic", category: 'Categories-1' },
        { id: 2, name: "Fresh", category: 'Categories-2' },
        { id: 3, name: "Sales", category: 'Categories-3' },
        { id: 4, name: "Discount", category: 'Categories-4' },
        { id: 5, name: "Expired", category: 'Categories-5' },
    ]
    return(
        <div className="py-3">
                <div className="text-2xl font-customFont font-semibold text-slate-500 mt-5">Additional</div>
                {
                    additional.map((items) => (
                        <div className="py-2 flex items-center" key={items.id}>
                            <input type="radio" className="" id={items.category} name="category" />
                            <label htmlFor={items.category} className="px-2">{items.name}</label>
                        </div>
                    ))
                }
            </div>
    )
}
export default Additional;