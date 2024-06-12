const Search = () =>{
    const search = {
        id:1,
        alt:'search',
        url:'/svg/magnifying-glass-solid.svg'
    }

    return(
        <div className="w-11 p-3 border rounded-full border-amber-400">
            <img src={search.url} alt={search.alt}/>
        </div>
    )
}
export default Search;