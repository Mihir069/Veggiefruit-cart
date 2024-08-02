import { Audio } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className="flex justify-center items-center h-screen transition-opacity duration-500 ease-in-out">
            <Audio
                height="80"
                width="80"
                radius="9"
                color="green"
                ariaLabel="loading"
            />
        </div>
    );
};

export default Loader;
