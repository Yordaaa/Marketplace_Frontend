const Shimmer: React.FC = () => {
    return (
        <div className="animate-pulse">
            <div className="bg-gray-300 h-60 w-full rounded-md mb-4"></div>
            <div className="h-6 bg-gray-300 w-3/4 rounded-md mb-2"></div>
            <div className="h-6 bg-gray-300 w-1/2 rounded-md"></div>
        </div>
    );
};

export default Shimmer;
