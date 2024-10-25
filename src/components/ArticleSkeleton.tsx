const ArticleSkeleton = () => {
    return (
        <div className="bg-white relative shadow-md rounded-xl  ring-1 ring-neutral-950/5 max-w-sm h-[300px] sm:h-[465px] animate-pulse">
            <div className="h-[132px] sm:h-[212px] md:h-[220px] bg-gray-300 rounded-t-xl"></div>

            <div className="flex mt-2 sm:space-x-4 items-center px-4 space-x-1 m-auto">
                <div className="rounded-full bg-gray-300 sm:w-16 w-16 h-16"></div>
                <div className="sm:space-y-1">
                    <div className="bg-gray-300 h-4 w-24 mb-1 rounded"></div>
                    <div className="flex flex-col sm:flex-row sm:space-x-2 text-neutral-950 items-center">
                        <div className="bg-gray-300 h-3 w-12 rounded"></div>
                        <div className="bg-gray-300 h-3 w-16 rounded"></div>
                    </div>
                </div>
            </div>

            <div className="sm:h-[118px] sm:mt-3 mt-2 space-y-2 px-4">
                <div className="bg-gray-300 h-6 w-full rounded"></div>
                <div className="bg-gray-300 h-4 w-3/4 rounded"></div>
                <div className="bg-gray-300 h-4 w-3/4 rounded"></div>
                <div className="bg-gray-300 h-4 w-3/4 rounded"></div>
                <div className="bg-gray-300 h-4 w-1/2 rounded"></div>
            </div>
        </div>
    );
};

export default ArticleSkeleton;
