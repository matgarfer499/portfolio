import Image from "next/image";
import TagGroup from "./TagGroup";

export function ProyectCard({
    image,
    title,
    children,
    codeHref,
    tryHref,
    haveTry,
    tags,
}) {
    return (
        <div className="w-3/4 sm:w-3/5 lg:w-2/5 h-[470px] sm:h-full shadow-lg shadow-[#0a0d11] border-2 border-transparent rounded-lg snap-center shrink-0 flex flex-col">
            <div className="w-full h-2/6">
                <Image
                    src={`/images/${image}.png`}
                    width={400}
                    height={400}
                    alt="proyect photo"
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="w-full h-4/6 flex flex-col justify-start items-center">
                <h2 className="text-orange-500 text-xl sm:text-2xl font-semibold flex items-center h-1/5">
                    {title}
                </h2>
                <p className="text-white h-4/5 text-justify w-11/12 text-xs sm:text-lg my-2">
                    {children}
                </p>
                <div className="h-2/6 w-11/12 flex justify-center items-start gap-2 my-2">
                    <a
                        href={codeHref}
                        className="border-2 border-orange-500 text-orange-500 text-sm sm:text-normal cursor-pointer px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-orange-500 hover:text-white transition duration-300"
                        target="_blank"
                    >
                        Ver código
                    </a>
                    {haveTry && (
                        <a
                            href={tryHref}
                            className="border-2 border-orange-500 text-orange-500 text-sm sm:text-normal cursor-pointer px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-orange-500 hover:text-white transition duration-300"
                            target="_blank"
                        >
                            Probar
                        </a>
                    )}
                </div>
                <TagGroup technologies={tags}></TagGroup>
            </div>
        </div>
    );
}

export default ProyectCard;
