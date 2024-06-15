export const getAllProducts = async (query)=>{
    const path = `http://localhost:3000/${query}`;
    const response = await fetch(path,{
        method:'GET'
    })
    const data = await response.json();
    return data;
}