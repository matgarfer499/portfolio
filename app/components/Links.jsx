export function Links({onClick}) {
    return (
        <>
            <a
                onClick={onClick}
                href="#home"
                className="text-white font-[350] hover:scale-110 hover:text-orange-500 transition duration-300"
            >
                Inicio
            </a>
            <a
                onClick={onClick}
                href="#about-me"
                className="text-white font-[350] hover:scale-110 hover:text-orange-500 transition duration-300"
            >
                Sobre mí
            </a>
            <a
                onClick={onClick}
                href="#habilities"
                className="text-white font-[350] hover:scale-110 hover:text-orange-500 transition duration-300"
            >
                Habilidades
            </a>
            <a
                onClick={onClick}
                href="#proyects"
                className="text-white font-[350] hover:scale-110 hover:text-orange-500 transition duration-300"
            >
                Proyectos
            </a>
            <a
                onClick={onClick}
                href="#contact"
                className="text-white font-[350] hover:scale-110 hover:text-orange-500 transition duration-300"
            >
                Contacto
            </a>
        </>
    );
}

export default Links;
