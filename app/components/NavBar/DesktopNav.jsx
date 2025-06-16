import { useState, useEffect } from 'react';
import { IconClick } from '@tabler/icons-react';
import Links from "../Links";
import { Flat } from '@alptugidin/react-circular-progress-bar';

export function DesktopNav() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const updateScrollProgress = () => {
        const scrollTop = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
        setScrollProgress(Math.min(progress, 100));
    };

    useEffect(() => {
        window.addEventListener('scroll', updateScrollProgress);
        return () => window.removeEventListener('scroll', updateScrollProgress);
    }, []);

    const isCollapsed = scrollProgress > 0 && !isHovered;

    return (
        <div
            className={`fixed top-4 left-1/2 transform -translate-x-1/2 rounded-full px-4 py-2 transition-all duration-300 flex items-center gap-4 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] overflow-hidden
             border border-slate-700 bg-[#1a202c]`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <IconClick className="stroke-slate-200 w-8 h-8 flex-shrink-0" stroke={1.5} />
            <div
                className={`transition-[transform,opacity,visibility] duration-500 ease-in-out transform origin-center`}
            >
                <Links />
            </div>

            <div className="w-8 h-8 flex-shrink-0 overflow-hidden">
                <Flat
                    progress={scrollProgress}
                    range={{ from: 0, to: 100 }}
                    showValue={false}
                    showMiniCircle={false}
                    sx={{
                        strokeColor: '#1a202c',
                        barWidth: 12,
                        bgColor: { value: '#10131b', transparency: '10' },
                        strokeLinecap: 'square',
                        loadingTime: 0,
                    }}
                />
            </div>
        </div>
    );
}

export default DesktopNav;
