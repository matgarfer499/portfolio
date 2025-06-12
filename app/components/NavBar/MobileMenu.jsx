import Links from "../Links";

export function MobileMenu({ toggleMenu, menu }) {
    return (
        <div className={`w-full fixed sm:hidden z-40 top-0 iphone-blur flex flex-col gap-8 text-xl justify-center items-center menu ${menu ? 'isActive' : ''}`}>
            <Links onClick={toggleMenu} />
        </div>
    )
}

export default MobileMenu