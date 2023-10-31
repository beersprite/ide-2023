import Image from 'next/image';
import React from 'react';
import BotoesElementos from './BotoesElementos.js';

import './starters.css';
import GatoDormindo from '../../icons/Starters/gatoDormindo.svg';
import Aspas from '../../icons/Starters/aspas.svg';
import logoIDE from '../../icons/logoIDE.svg';

export default function Starters() {
  return (
    <div className="pt-40 pb-40 text-primary">
      <div className="block text-center text-6xl mb-20">CONHECENDO OS STARTERS</div>
      <div
        className="
            mx-10 
            mb-5
            border-primary
            border-solid 
            border-3 
            rounded-2xl 
            flex 
            flex-wrap
            containerConteudo
        "
      >
        <div
          className="
                border-primary 
                border-block 
                w-5/12
                border-r-3 
                flex 
                justify-center 
                flex-col 
                items-center
                p-10
            "
        >
          <div className="text-2xl pb-5">ESCOLHA UM!</div>
          <Image className="w-48" src={GatoDormindo} alt="Gatinho Dormindo" />
        </div>
        <div
          className="
                flex 
                flex-col 
                items-center
                p-10
                w-7/12
            "
        >
          <div className="w-full flex justify-start pb-2">
            <Image className="w-10" src={Aspas} alt="Aspas" width="87" />
          </div>
          <div className="px-5 text-0_5xl text-center">
            Treinadores Pokémon enfrentam uma decisão crucial ao escolher seu Pokémon inicial, pois isso moldará suas
            aventuras. Os tipos - Água, Fogo e Planta - influenciam as batalhas e estratégias. Água domina Fogo, Fogo
            vence Planta, e Planta supera Água. Escolher com sabedoria é a chave para o sucesso nas jornadas Pokémon.
            Conheça um pouco mais sobre esses tipos!
          </div>
          <div className="w-full flex justify-end pb-2">
            <Image className="imagemEspelhada w-10" src={Aspas} alt="Aspas" width="87" />
          </div>
        </div>
      </div>
      <div className="flex justify-between mx-10 mb-5">
        <BotoesElementos />
        <div
          className="
                w-7/12
                border-primary
                border-solid 
                border-3
                rounded-3xl 
                flex
                justify-center
                cursor-pointer
                cursor-pointer
            "
        >
          <Image className="w-16" src={logoIDE} alt="IDE logo" />
        </div>
      </div>
    </div>
  );
}
