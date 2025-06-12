import { IconClick } from '@tabler/icons-react';
import "../../animations.css";
import "../../blurIphone.css";
import Links from "../Links";

export function DesktopNav() {
    return (
        <div className="hidden sm:flex justify-center gap-10 text-center items-center m-auto px-10 py-1 rounded-full bg-neutral-300/20 hover:bg-neutral-300/30 dark:bg-neutral-400/20 dark:hover:bg-neutral-400/30 text-neutral-600 dark:text-neutral-300 backdrop-blur-[1px] border border-neutral-400/20">
            <IconClick className="stroke-white w-8 h-8" stroke={1.5} />
            <Links />
        </div>
    )
}

export default DesktopNav