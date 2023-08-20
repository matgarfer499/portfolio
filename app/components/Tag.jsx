export function Tag({ tech }) {
    return (
        <span className="flex justify-center items-center py-1 px-2 border-2 border-white rounded-full text-white text-xs sm:text-normal font-medium">
            {tech}
        </span>
    );
}

export default Tag;
