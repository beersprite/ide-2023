import botaoStart from '../../../public/img/botao-start.svg';
import Image from 'next/image';
import nekoAnotando from '../../../public/img/neko-anotando.png';
import tituloIDEx from '../../../public/img/titulo-idex.svg';
import tituloPoke from '../../../public/img/titulo-poke.svg';

export default function Inicio() {
  return (
    <div className="bg-primary flex items-center justify-center w-fit md:w-full">
      <div className="container flex flex-col sm:grid sm:grid-cols-5 gap-16 h-min min-w-[16rem] max-w-6xl m-14 2xl:-translate-x-24 pixelated">
        <Image src={nekoAnotando} alt="Neko Anotando" className="col-span-3" />
        <div className="col-span-2 flex flex-col justify-center gap-10 font-title text-white">
          <div className="flex flex-col gap-3 text-9xl leading-none text-shadow-lg select-none">
            <Image src={tituloPoke} alt="Póke" />
            <Image src={tituloIDEx} alt="IDEx" />
          </div>
          <button className="hover:scale-[1.02] transition-transform duration-300">
            <Image src={botaoStart} alt="Start" />
          </button>
        </div>
      </div>
    </div>
  );
}
