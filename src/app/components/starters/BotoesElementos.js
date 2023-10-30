
import Image from 'next/image';
import React from 'react';
import BotaoAgua from '../../icons/Starters/iconeAgua.svg'
import BotaoGrama from '../../icons/Starters/iconeGrama.svg'
import BotaoFogo from '../../icons/Starters/iconeFogo.svg'

export default function BotoesElementos() {
  return (
    <div
    style={{gap:10 + "px", width:40+"%"}}
    className="
        flex

        justify-center
        w-5/12
    ">
        <div className="
            w-1/3
            border-primary
            border-solid 
            border-3
            rounded-3xl 
            flex
            justify-center
            hover:scale-105
            transition-all
            duration-500
            cursor-pointer
            ">
            <Image className="w-32" src={BotaoAgua} alt="Elemento Água"/>
        </div>
        <div className="
            w-1/3
            border-primary
            border-solid 
            border-3
            rounded-3xl 
            flex
            justify-center
            hover:scale-105
            transition-all
            duration-500
            cursor-pointer
            ">
            <Image className="w-32" src={BotaoGrama} alt="Elemento Grama"/>
        </div>
        <div className="
            w-1/3
            border-primary
            border-solid 
            border-3
            rounded-3xl 
            flex
            justify-center
            hover:scale-105
            transition-all
            duration-500
            cursor-pointer
            ">
            <Image className="w-32" src={BotaoFogo} alt="Elemento Fogo"/>
        </div>
    </div>
  );
}
