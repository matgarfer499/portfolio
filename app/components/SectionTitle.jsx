export function SectionTitle({ children, width }) {
    return (
        <div className="w-11/12 flex flex-col items-center justify-start">
            <h1
                className={`w-3/4 text-5xl text-white font-bold p-2 leading-normal text-start ${width}`}
            >
                {children}
                <span className="text-4xl text-orange-500 font-bold">.</span>
            </h1>
            <div
                className={`w-3/4 min-h-[4px] bg-orange-500 rounded-full relative ${width}`}
            ></div>
        </div>
    );
}

export default SectionTitle;
