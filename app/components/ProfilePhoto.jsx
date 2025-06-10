import Image from "next/image";

export function ProfilePhoto() {
    return (
        <div className="hidden sm:flex justify-center items-center w-1/3">
            <div className="shadow-lg rounded-full w-[470px] h-[470px] overflow-hidden shrink-0">
                <Image
                    src={"/images/Yo.webp"}
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
