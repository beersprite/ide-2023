import Image from 'next/image';
import React from 'react';
import BotoesElementos from './BotoesElementos';

import './starters.css';
import GatoDormindo from '../../icons/Starters/gatoDormindo.svg';
import Aspas from '../../icons/Starters/aspas.svg';
import logoIDE from '../../icons/logoIDE.svg';

export default function StartersInicio(props) {
  return (
    <div id="idContainerGeral" className="containerGeralStarter max-w-[1400px] py-20 px-10 text-primary max-sm:px-5">
        <div className="block text-center text-6xl mb-20 max-sm:text-4xl">
            CONHECENDO OS STARTERS
        </div>
        <div className="
            mb-5
            flex 
            flex-wrap
            pixel-corners-n1
            max-sm:flex-col
            max-sm:items-center
        ">
            <div className="
                border-primary 
                border-block 
                border-r-4 
                w-5/12
                flex 
                justify-center 
                flex-col 
                items-center
                p-10
                max-sm:border-0
                max-sm:w-full
                max-sm:px-5
            ">
                <div className="text-2xl pb-5">ESCOLHA UM!</div>
                <Image className="w-48" src={GatoDormindo} alt="Gatinho Dormindo"/>
            </div>
            <div className="
                flex 
                flex-col 
                items-center
                p-10
                w-7/12
                max-sm:w-full
                max-sm:px-5
            ">
                <div className="w-full flex justify-start pb-2">
                    <Image className="w-10" src={Aspas} alt="Aspas" width="87" />
                </div>
                <div className="px-10 text-0_5xl text-center  max-sm:px-0">
                    Treinadores Pokémon enfrentam uma decisão crucial ao escolher seu Pokémon inicial,
                    pois isso moldará suas aventuras. Os tipos - Água, Fogo e Planta - influenciam as 
                    batalhas e estratégias. Água domina Fogo, Fogo vence Planta, e Planta supera Água.
                    Escolher com sabedoria é a chave para o sucesso nas jornadas Pokémon. Conheça um 
                    pouco mais sobre esses tipos!
                </div>
                <div className="w-full flex justify-end pb-2">
                    <Image className="imagemEspelhada w-10" src={Aspas} alt="Aspas" width="87" />
                </div>
            </div>
        </div>
        <div className="flex justify-between items-end mb-5 max-md:flex-col max-md:items-center">
            <div className="w-2/5 max-md:w-full max-md:mb-5">
                <BotoesElementos 
                    titulo={""} 
                    botoesLegenda={true} 
                    pokemons={props.pokemons}
                    />
            </div>
            <a className="w-7/12 max-md:w-full" target="_blank" href="https://www.idejr.com.br">
            <div className="
                flex
                justify-center
                cursor-pointer
                h-24
                pixel-corners-n1
            ">
                <Image className="w-16" src={logoIDE} alt="IDE logo" />
            </div>
            </a>
        </div>
    </div>
  );
}
