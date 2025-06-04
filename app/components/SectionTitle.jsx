export function SectionTitle({ title }) {
    return (
        <div className="w-full flex flex-wrap justify-start">
            <h1
                className="text-5xl text-white font-bold leading-normal text-start"
            >
                {title}
                <span className="text-4xl ml-1 text-orange-500 font-bold">.</span>
            </h1>
            <div
                className="w-full min-h-[4px] bg-orange-500 rounded-full relative"
            ></div>
        </div>
    );
}

export default SectionTitle;
