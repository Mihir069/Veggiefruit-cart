import { useEffect, useState } from "react";
import ErrorHeader from "../../components/common/error-header";
import ErrorDisplay from "../../components/error-display";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Loader from "../../components/common/loader";


const ErrorPage = () =>{
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            await new Promise(resolve => setTimeout(resolve, 100))
            setLoading(false)
        }
        loadData()
    }, [])

    if (loading) {
        return (
            <Loader/>
        )
    }
    return(
        <>
        <Header/>
        <ErrorHeader/>
        <ErrorDisplay/>
        <Footer/>
        </>
    )
}
export default ErrorPage;