const Envlope = () =>{
    const envlope = {
        id:1,
        alt:'envlop',
        url:'/svg/envelope-solid.svg'
    }
    return(
        <div className="w-3 ">
            <img src={envlope.url} alt={envlope.alt}/>
        </div>
    )
}
export default Envlope;