export function ContacTag({svg, link, text}) {
    return (
        <a
            target="_blank"
            href={link}
            className="py-2 px-6 sm:px-4 border-2 border-orange-500 text-white flex justify-between items-center hover:scale-110 transition duration-300"
        >
            {svg}
            <span className="ml-2">{text}</span>
        </a>
    );
}

export default ContacTag;
