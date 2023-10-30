
import Image from 'next/image';
import React from 'react';
import GatoMaoPraCima from '../../icons/Sobre/gatoMaoPraCima.svg'
import logoIDE from '../../icons/logoIDE.svg';

export default function Sobre() {
  return (
    <div className="
        bg-primary 
        py-28 
        px-10
    "
    >
        <h1 
        style={{textShadow: 2 +"px " + 2 + "px " + "black"}}
        className="
            text-white
            text-6xl
            pb-10
        ">SOBRE NOS</h1>
        <div
        className="
            flex
            justify-center
            flex-wrap
        ">
            <div 
            style={{borderLeftWidth:0.7 + "vw"}}
            className="
                w-1/2
                bg-darkgray
                border-block
                border-secondary
                flex
                flex-col
                justify-between
                items-center
                px-5
                py-10
            ">
                <div className="text-white text-xl">A IDE é a empresa júnior dos cursos Ciência e Engenharia de Computação da Universidade Federal do Rio Grande do Sul. Formada por alunos interessados em se tornarem empreendedores e profissionais excepcionais, a IDE fornece soluções em software, como sites e sistemas, com preços abaixo do mercado, aliados à excelência da UFRGS, o Instituto de Informática e seus professores, que fornecem apoio técnico e aconselhamento aos estudantes.</div>
                <Image className="w-16 mt-10 filter grayscale grayscale-100 filter contrast-200 filter invert" src={logoIDE} alt="Logo IDE"/>
            </div>
            <div className="
                w-1/2
                flex
                justify-center
            ">
                <Image className="w-10/12" src={GatoMaoPraCima} alt="Elemento Água"/>
            </div>
        </div>
    </div>
  );
}