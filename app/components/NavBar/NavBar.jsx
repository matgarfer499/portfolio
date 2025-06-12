"use client";

import { IconMenu2, IconX } from '@tabler/icons-react';
import { useState } from "react";
import DesktopNav from './DesktopNav';
import MobileMenu from './MobileMenu';
import NameLogo from './NameLogo';

export function NavBar() {
    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu);
    };

    return (
        <>
            <nav className="sticky left-0 top-2 flex z-50 w-full bg-transparent sm:top-4">
                <NameLogo />
                <button
                    onClick={toggleMenu}
                    className="w-1/2 flex sm:hidden justify-end items-center pr-2"
                >
                    {menu ? (
                        <IconX className={'stroke-white inset-10'} stroke={2} />
                    ) : (
                        <IconMenu2 className={'stroke-white inset-10'} stroke={2} />
                    )}
                </button>
                <DesktopNav />
            </nav>
            {(
                <MobileMenu toggleMenu={toggleMenu} menu={menu} />
            )}
        </>
    );
}

export default NavBar;
