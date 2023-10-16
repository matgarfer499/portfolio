import Section from './components/Section'
import NavBar from './components/NavBar'
import IntroSection from './components/IntroSection'
import ProfilePhoto from './components/ProfilePhoto'
import SectionTitle from './components/SectionTitle'
import Habilities from './components/Habilities'
import AboutMe from './components/AboutMe'
import ProyectCard from './components/ProyectCard'
import ContactTags from './components/ContactTags'
import './scrollbar.css'
import './animations.css'
import './sizes.css'

const LiftUp = [
  'Laravel',
  'PHP',
  'MySQL',
  'JavaScript',
  'Jquery',
  'TailwindCSS',
]

const calculator = ['React', 'JavaScript', 'TailwindCSS']
const pokedex = ['React', 'JavaScript', 'TailwindCSS']
const calculatorClass = ['JavaScript', 'HTML', 'CSS']
const test = ['Laravel', 'PHP', 'MySQL', 'Jquery', 'Bootstrap']
const watch = ['Javascript', 'HTML', 'CSS']

export default function Page() {
  return (
    <main className='sm:h-screen overflow-auto sm:snap-y sm:snap-mandatory overflow-x-hidden custom-scrollbar'>
      <Section id={'home'}>
        <NavBar />
        <IntroSection />
      </Section>
      <Section id={'about-me'}>
        <div className='w-screen h-[900px] sm:h-screen flex flex-wrap sm:flex-nowrap justify-center sm:justify-between items-center'>
          <ProfilePhoto />
          <div className='w-11/12 sm:w-4/6 h-full sm:h-4/5 flex flex-col items-center'>
            <SectionTitle width={'responsive-width'}>Sobre mí</SectionTitle>
            <AboutMe />
            <a
              href='Currículum_vitae_MG.pdf'
              className='cursor-pointer mt-4 border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-lg hover:bg-orange-500 hover:text-white transition duration-300'
              download
            >
              Currículum
            </a>
          </div>
        </div>
      </Section>
      <Section id={'habilities'}>
        <div className='w-screen sm:h-screen flex justify-center items-center'>
          <div className='w-full h-5/6 flex flex-wrap justify-center items-start'>
            <SectionTitle width={'responsive-width'}>Habilidades</SectionTitle>
            <Habilities />
          </div>
        </div>
      </Section>
      <Section id={'proyects'}>
        <div className='w-full h-full flex justify-center items-center'>
          <div className='w-full h-5/6 flex flex-wrap justify-center items-start'>
            <SectionTitle width={'responsive-width'}>Proyectos</SectionTitle>
            <div className='w-11/12 h-4/5 flex gap-6 overflow-x-auto snap-x snap-mandatory relative scrollbar-x p-2'>
              <ProyectCard
                image={'liftup'}
                title={'LiftUp'}
                codeHref={'https://github.com/matgarfer499/LiftUp'}
                tryHref={''}
                tags={LiftUp}
              >
                Trabajo de fin de grado para el grado superior de desarrollos de
                aplicaciones web.
                <br />
                Esta página simularía una tienda para comprar ropa deportiva.
              </ProyectCard>
              <ProyectCard
                haveTry
                image={'pokedex'}
                title={'Pokedex'}
                codeHref={'https://github.com/matgarfer499/pokedex'}
                tryHref={'https://matgarfer499.github.io/pokedex/'}
                tags={pokedex}
              >
                Pokedex que usa la API de <strong>PokeAPI</strong>. Imita la
                apariencia de una pokedex y a traves de una barra de busqueda
                que va filtrando los resultado. Una vez seleccionas uno muestra
                ese pokemon con algunos de sus datos.
              </ProyectCard>
              <ProyectCard
                haveTry
                image={'calculator'}
                title={'Calculadora Iphone'}
                codeHref={'https://github.com/matgarfer499/react-calculator'}
                tryHref={'https://matgarfer499.github.io/react-calculator/'}
                tags={calculator}
              >
                Primer proyecto hecho con React imitando la apariencia y
                funcionalidades básicas de una calculadora de un dispositivo
                Iphone.
              </ProyectCard>
              <ProyectCard
                image={'enerclic'}
                title={'Prueba técnica de PHP'}
                codeHref={
                  'https://github.com/matgarfer499/prueba-tecnica-enerclic'
                }
                tryHref={'https://matgarfer499.github.io/react-calculator/'}
                tags={test}
              >
                Prueba técnica de PHP que se basa en crear una API, almacenar
                esos datos en la base de datos cuando se hace una busqueda y
                mostrar la media comparando dos contadores a traves de una
                gráfica, en este caso use HighCharts.
              </ProyectCard>
              <ProyectCard
                haveTry
                image={'watch'}
                title={'Reloj digital'}
                codeHref={'https://github.com/matgarfer499/Reloj-con-JS'}
                tryHref={'https://matgarfer499.github.io/Reloj-con-JS/'}
                tags={watch}
              >
                Reloj en el que se puede cambiar entre modo oscuro y claro
                usando clases de CSS. Tambien se puede cambiar la forma en que
                se expone la hora, ya sea como un reloj digital o uno clásico
                con manecillas.
              </ProyectCard>
              <ProyectCard
                haveTry
                image={'calculatorClass'}
                title={'Calculadora científica'}
                codeHref={'https://github.com/matgarfer499/Calculadora-con-JS'}
                tryHref={'https://matgarfer499.github.io/Calculadora-con-JS/'}
                tags={calculatorClass}
              >
                Trabajo de clase de la asignatura de desarrollo de aplicaciones
                en entorno cliente. <br />
                Se trata de otra calculadora con métodos básicos y científicos.
              </ProyectCard>
            </div>
          </div>
        </div>
      </Section>
      <Section id={'contact'}>
        <div className='w-full h-[500px] sm:h-full flex flex-col justify-center items-center'>
          <div className='w-4/5 h-3/4 flex flex-col justify-center items-center'>
            <h2 className='text-white text-2xl md:text-3xl lg:text-4xl mt-1 font-semibold'>
              Formas de contactar conmigo
              <span className='text-orange-500'>:</span>
            </h2>
            <div className='w-full sm:w-3/4 h-3/5 flex flex-wrap justify-center items-center sm:gap-6'>
              <ContactTags
                svg={
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
                    />
                  </svg>
                }
                link={
                  'mailto:matigarfer14@gmail.com?subject=Consulta%20desde%20tu%20portfolio&body=Hola,%20me%20gustaría%20hablar%20contigo%20sobre...'
                }
                text={'matigarfer14@gmail.com'}
              />
              <ContactTags
                svg={
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    className='fill-blue-500'
                  >
                    <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
                  </svg>
                }
                link={'https://www.linkedin.com/in/mgarfer/'}
                text={'Matías José García Fernández'}
              />
            </div>
          </div>
          <footer className='mt-auto border-t-2 border-white/50 text-white/50 w-full flex justify-between items-center py-4 px-0 sm:px-4 text-xs'>
            <span>
              &copy; 2023 Matías José García Fernández. Todos los derechos
              reservados.
            </span>{' '}
            Portfolio realizado con NextJS, React y Javascript
          </footer>
        </div>
      </Section>
    </main>
  )
}
