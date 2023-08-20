import React from "react";

export function IntroSection() {
    return (
        <div className="w-screen h-[500px] sm:h-screen flex flex-col justify-center items-center">
            <div className="sm:mt-8 text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white tracking-wide no-underline">
                    <span className="text-orange-500">&lt;&gt;</span>¡Hola,
                    Mundo!
                    <span className="text-orange-500">&lt;/&gt;</span>
                </h1>
                <h2 className="text-name-animation text-3xl sm:text:4xl lg:text-5xl mt-4 font-bold">
                    Soy Matías José García Fernández
                </h2>
                <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl mt-1 font-semibold">
                    Desarrollador web Full Stack
                    <span className="text-orange-500">.</span>
                </h2>
                <div className="w-12 h-1 bg-orange-500 mx-auto mt-6"></div>
            </div>

            <a href="#contact" className="mt-8 border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-lg hover:bg-orange-500 hover:text-white transition duration-300">
                Contáctame
            </a>
        </div>
    );
}

export default IntroSection;
