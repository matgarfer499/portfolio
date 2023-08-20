export function HabTitle({text}) {
    return (
        <div className="flex items-center justify-center h-[60px]">
            <div className="h-full w-1 bg-orange-500"></div>
            <h3 className="ml-2 text-2xl text-white font-semibold uppercase">
                {text}
            </h3>
        </div>
    );
}

export default HabTitle;
