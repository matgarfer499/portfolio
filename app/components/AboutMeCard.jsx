export function AboutMeCard({svg, title, location}) {
    return (
        <div className="w-full sm:w-[49%] h-[160px] sm:h-[160px] mt-2 flex flex-col justify-start items-center shadow-lg shadow-[#0a0d11]">
            {svg}
            <p className="w-11/12 text-center text-white text-xl sm:text-sm font-semibold mt-2">
                {title}
            </p>
            <p className="text-center text-orange-500 text-lg sm:text-sm font-semibold mt-2 flex justify-between items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fillRule="currentColor"
                    className="w-6 sm:w-4 h-6 sm:h-4 fill-orange-500"
                >
                    <path
                        fillRule="evenodd"
                        d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                    />
                </svg>
                {location}
            </p>
        </div>
    );
}

export default AboutMeCard;
