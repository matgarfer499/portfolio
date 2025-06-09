export function Links({onClick}) {
    const linkClassName = 'text-white hover:scale-110 hover:text-orange-500 transition duration-50'
    return (
        <>
            <a
                onClick={onClick}
                href="#home"
                className={linkClassName}
            >
                Inicio
            </a>
            <a
                onClick={onClick}
                href="#about-me"
                className={linkClassName}
            >
                Sobre mí
            </a>
            <a
                onClick={onClick}
                href="#habilities"
                className={linkClassName}
            >
                Habilidades
            </a>
            <a
                onClick={onClick}
                href="#proyects"
                className={linkClassName}
            >
                Proyectos
            </a>
            <a
                onClick={onClick}
                href="#contact"
                className={linkClassName}
            >
                Contacto
            </a>
        </>
    );
}

export default Links;
