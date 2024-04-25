export default function Response({isLoading, setIsResponse, isResponse, isError, isData}) {
    return(
        <div onClick={() => setIsResponse(false)}>
            {isLoading && (<div className="absolute bg-loading rounded-lg top-2/4 left-2/4 px-6 py-5 shadow-xl -translate-x-1/2 -translate-y-1/2 flex justify-center items-center font-semibold">
                loading...
            </div>)}
            {isResponse && (<div className={`${isError ? 'bg-erreur' : 'bg-succefull'} absolute rounded-lg top-2/4 left-2/4 px-6 py-5 shadow-xl -translate-x-1/2 -translate-y-1/2 flex font-semibold w-max`}>
                <p className="mt-4">{isData}</p>
                <div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                    className="w-12"
                >
                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
                </div>
            </div>)}
        </div>
)
}