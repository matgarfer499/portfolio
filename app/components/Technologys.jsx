import Image from "next/image";

export function Technologys({tech}) {
    return (
        <div className="w-[80px] md:w-[90px] h-[80px] md:h-[90px] flex justify-center items-center shadow-lg shadow-[#0a0d11] my-2">
            <Image
                src={`/images/${tech}.png`}
                width={400}
                height={400}
                alt= "technology Photo"
                className="object-contain w-[50px] md:w-[75px] h-[50px] md:h-[75px]"
            />
        </div>
    );
}

export default Technologys;
