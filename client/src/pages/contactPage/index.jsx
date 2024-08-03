import { useEffect, useState } from "react";
import ContactHeader from "../../components/common/contact-header"
import Footer from "../../components/footer";
import GetInTouch from "../../components/get-in-touch";
import Header from "../../components/header";
import Loader from "../../components/common/loader";

const ContactPage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            await new Promise(resolve => setTimeout(resolve, 100))
            setLoading(false)
        }
        loadData()
    }, [])

    // if (loading) {
    //     return (
    //         <Loader/>
    //     )
    // }
    return (
        <>
            <Loader isVisible={loading} />
            {
                !loading && (
                    <>
                        <Header />
                        <ContactHeader />
                        <GetInTouch />
                        <Footer />
                    </>

                )
            }

        </>
    )
}
export default ContactPage;