import { useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner';
import PropTypes from 'prop-types';

const Loader = ({ isVisible }) => {
    const [showLoader, setShowLoader] = useState(isVisible);

    useEffect(() => {
        if (isVisible) {
            setShowLoader(true);
        } else {
            const timer = setTimeout(() => setShowLoader(false), 100);
            return () => clearTimeout(timer);
        }
    }, [isVisible]);

    return (
        showLoader && (
            <div
                className={`flex justify-center items-center h-screen transition-opacity duration-500 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            >
                <Circles
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="circles-loading"
                    visible={true}
                />
            </div>
        )
    );
};

Loader.propTypes = {
    isVisible: PropTypes.bool.isRequired,
};

export default Loader;
