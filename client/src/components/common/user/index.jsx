const User = () =>{
    const user = {
        id:1,
        alt:'user',
        url:'./public/svg/user-solid.svg'
    }
    return(
        <div className="w-7">
            <img src={user.url} alt={user.alt}/>
        </div>
        
    )
}
export default User;