import { IconBrandLinkedin, IconBrandGithub, IconFileCv } from '@tabler/icons-react';
import ProfilePhoto from '../ProfilePhoto'

export function IntroSection() {
    const socialMediaClassName = "w-8 h-8 border-2 rounded-full flex justify-center items-center hover:border-orange-500 hover:bg-orange-500 transition-all duration-100 hover:cursor-pointer"
    return (
        <div className="w-full h-[500px] sm:h-screen flex gap-20 items-center text-white">
            <div className='w-2/3 flex flex-col gap-4'>
                <h1 className="text-4xl sm:text:4xl font-medium">
                    ¡Hola a todos! Soy Matías ✌🏻,
                    <br />
                    un <span className="text-orange-500">&lt;/Desarrollador Web Full-Stack&gt;</span> de Málaga con mucha arte
                    <span className="text-orange-500">.</span>
                </h1>
                <p>Con mas 2 años de experiencia, me encuentro mejorando mis habilidades tanto tecnicas y blandas, buscando ser una
                    mejor versión de mi mismo que la de ayer<span className="text-orange-500">.</span></p>
                <div className="flex items-center gap-4">
                    <a target="_blank" href='https://www.linkedin.com/in/mgarfer/' className={socialMediaClassName}><IconBrandLinkedin stroke={2} /></a>
                    <a target="_blank" href='https://github.com/matgarfer499' className={socialMediaClassName}><IconBrandGithub stroke={2} /></a>
                    <a download href='Matías José García Fernández Resume.pdf' className={socialMediaClassName}><IconFileCv stroke={2} /></a>
                </div>
            </div>
            <ProfilePhoto />
        </div>
    );
}

export default IntroSection;
