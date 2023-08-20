import AboutMeCard from "./AboutMeCard";

export function AboutMe() {
    return (
        <div className="w-full sm:w-3/4 flex items-center justify-between flex-wrap relative">
            <AboutMeCard
                svg={
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fillRule="white"
                        className="w-12 sm:w-10 h-12 sm:h-10 mt-2 fill-white"
                    >
                        <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                        <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                        <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
                    </svg>
                }
                title={"GRADO SUPERIOR DE DESARROLLO DE APLICACIONES WEB"}
                location={"CPIFP Nuevo"}
            />
            <AboutMeCard
                svg={
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fillRule="white"
                        className="w-12 sm:w-10 h-12 sm:h-10 mt-2 fill-white"
                    >
                        <path
                            fillRule="evenodd"
                            d="M4.5 2.25a.75.75 0 000 1.5v16.5h-.75a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5h-.75V3.75a.75.75 0 000-1.5h-15zM9 6a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm-.75 3.75A.75.75 0 019 9h1.5a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM9 12a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm3.75-5.25A.75.75 0 0113.5 6H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM13.5 9a.75.75 0 000 1.5H15A.75.75 0 0015 9h-1.5zm-.75 3.75a.75.75 0 01.75-.75H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM9 19.5v-2.25a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-4.5A.75.75 0 019 19.5z"
                            clipRule="evenodd"
                        />
                    </svg>
                }
                title={"PRÁCTICAS DESARROLLADOR FULL STACK"}
                location={"UNIKLINIK, Colonia"}
            />
            <div className="w-full sm:w-[800px] p-1 lg:p-0 lg:h-[210px] mt-2 flex flex-col justify-start items-center shadow-lg shadow-[#0a0d11]">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fillRule="white"
                    className="w-12 h-12 mt-2 fill-white"
                >
                    <path
                        fillRule="evenodd"
                        d="M2.25 5.25a3 3 0 013-3h13.5a3 3 0 013 3V15a3 3 0 01-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 01-.53 1.28h-9a.75.75 0 01-.53-1.28l.621-.622a2.25 2.25 0 00.659-1.59V18h-3a3 3 0 01-3-3V5.25zm1.5 0v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5z"
                        clipRule="evenodd"
                    />
                </svg>
                <p className="w-11/12 text-justify text-sm md:text-normal text-white text-md font-semibold mt-2">
                    ¡Hola, soy Matías! Desde siempre me ha encantado las
                    tecnologías y el mundo de la informática, siempre me he
                    considerado un "friki" de este mundillo. Me encanta la
                    programación y seguir aprendiendo cosas nuevas. Intento
                    estar siempre actualizado con las últimas novedades y en
                    estos momentos me encuentro aprendiendo{" "}
                    <span className="text-blue-400">React</span>. Si deseas
                    saber más de mi abajo tienes mi currículum.
                </p>
            </div>
        </div>
    );
}

export default AboutMe;
