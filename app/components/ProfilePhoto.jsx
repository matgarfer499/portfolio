import Image from "next/image";

export function ProfilePhoto() {
    return (
        <div className="hidden sm:w-2/6 h-4/5 sm:flex flex-col items-center">
            <div className="sm:w-3/4 h-full shadow-lg shadow-[#0a0d11]">
                <Image
                    src={"/images/Matías.jpeg"}
                    width={400}
                    height={400}
                    alt="foto mia"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
}

export default ProfilePhoto;
