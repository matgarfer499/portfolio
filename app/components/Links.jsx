export function Links({ onClick }) {
    const linkClassName = `text-slate-200 text-md hover:text-orange-500 transition-colors duration-100 ease-in-out`;

    return (
        <div className="flex animate-fade-in-delayed gap-4 justify-center whitespace-nowrap">
            <a onClick={onClick} href="#home" className={linkClassName}>
                Inicio
            </a>
            <a onClick={onClick} href="#about-me" className={linkClassName}>
                Experiencia
            </a>
            <a onClick={onClick} href="#habilities" className={linkClassName}>
                Habilidades
            </a>
            <a onClick={onClick} href="#proyects" className={linkClassName}>
                Proyectos
            </a>
            <a onClick={onClick} href="#contact" className={linkClassName}>
                Contacto
            </a>
        </div>
    );
}

export default Links;