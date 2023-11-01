import botaoStart from '../../../public/img/botao-start.svg';
import Image from 'next/image';
import nekoAnotando from '../../../public/img/neko-anotando.png';
import tituloIDEx from '../../../public/img/titulo-idex.svg';
import tituloPoke from '../../../public/img/titulo-poke.svg';
import ScrollLink from './utils/ScrollLink';

export default function Inicio({ ...props }) {
  return (
    <div className="bg-primary flex items-center justify-center w-fit md:w-full" {...props}>
      <div className="container flex flex-col md:grid md:grid-cols-5 gap-16 h-min min-w-[16rem] max-w-6xl lg:max-w-[70%] xl:max-w-[65%] md:-translate-x-[5%] m-14 pixelated">
        <Image src={nekoAnotando} alt="Neko Anotando" className="col-span-3" />
        <div className="col-span-2 flex flex-col justify-center gap-7 mx-[15%] mb-[15%] md:m-0">
          <div className="flex flex-col gap-3">
            <Image src={tituloPoke} alt="Póke" />
            <Image src={tituloIDEx} alt="IDEx" />
          </div>
          <ScrollLink sectionId="starters">
            <button className="hover:scale-[1.02] transition-transform duration-300">
              <Image src={botaoStart} alt="Start" />
            </button>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
}
