import { Link } from "react-router-dom";

const ErrorHeader = () => {
    const headerList = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "Pages", path: "/" },
        { id: 3, name: "404", path: "/" },
    ];

    return (
        <div style={{ position: 'relative', background: 'url("/img/cart-page-header-img.jpg")', backgroundSize: 'cover' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: '#0000004d' }}></div>
            <div className="p-10 flex flex-col text-center justify-center relative">
                <div className="text-4xl font-bold font-customFont text-slate-100">
                    404 Error
                </div>
                <div className="flex items-center justify-center">
                    {
                        headerList.map((item, index) => (
                            <div key={item.id} className="inline-flex py-3 text-[16px] text-lime-500">
                                <Link to={item.path} className={`${item.name=== "404"?"text-slate-100":""}`}>
                                    {item.name}
                                    {index < headerList.length - 1 && <span className="px-2" >/</span>}
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default ErrorHeader;
