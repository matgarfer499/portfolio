import { IconBrandLinkedin, IconBrandGithub, IconFileCv } from '@tabler/icons-react';
import ProfilePhoto from './ProfilePhoto'

export function IntroSection() {
    const socialMediaClassName = "w-8 h-8 border rounded-full flex justify-center items-center"
    return (
        <div className="w-full h-[500px] sm:h-screen flex gap-20 items-center text-white">
            <div className='w-2/3 flex flex-col gap-4'>
                <h1 className="text-3xl sm:text:4xl font-medium">
                    ¡Hola a todos! Soy Matías ✌🏻,
                    <br />
                    un <span className="text-orange-500">&lt;/Desarrollador Web Full-Stack&gt;</span> de Málaga con mucha arte
                    <span className="text-orange-500">.</span>
                </h1>
                <p>Con mas 2 años de experiencia, me encuentro mejorando mis habilidades tanto tecnicas y blandas, buscando ser una
                    mejor versión de mi mismo que la de ayer<span className="text-orange-500">.</span></p>
                {/* TODO CHANGE DIVS FOR a TAGS */}
                <div className="flex items-center gap-4">
                    <div className={socialMediaClassName}><IconBrandLinkedin stroke={2} /></div>
                    <div className={socialMediaClassName}><IconBrandGithub stroke={2} /></div>
                    <div className={socialMediaClassName}><IconFileCv stroke={2} /></div>
                </div>
            </div>
            <ProfilePhoto />
        </div>
    );
}

export default IntroSection;
