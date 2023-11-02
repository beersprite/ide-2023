import Image from 'next/image';
import React, {useEffect} from 'react';
import {ColorChange} from 'color-change';

import BotaoAgua from '../../icons/Starters/iconeAgua.svg';
import BotaoGrama from '../../icons/Starters/iconeGrama.svg';
import BotaoFogo from '../../icons/Starters/iconeFogo.svg';

import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../../../tailwind.config.js'

const {theme} = resolveConfig(tailwindConfig)

export default function BotoesElementos(props) {
    // ========== Declaração da cor do tema ==========
    const corPrincipal = props.titulo != '' ? props.pokemons[props.titulo].mainColor : "";

    // ========== Aplica filtro do tema em ícones ==========
    if (typeof document !== 'undefined') {
        let imagemCorDefault = new ColorChange(`.starters${props.titulo}:not(#starters${props.titulo}${props.titulo})`);
        imagemCorDefault.setColor(corPrincipal);
    }

    // ========== Mostra a página selecionada pelo clique ==========
    function ocultaStarters(nomeElementoVisivel){
        var arrayElementos = Array.from(document.getElementsByClassName('containerGeralStarter'))
        arrayElementos.map((elemento)=>{
            elemento.style.display = 'none';
        })
        document.getElementById(`idContainerGeral${nomeElementoVisivel}`).style.display= "block";
    }

  return (
    <div
    style={{gap:"10px"}}
    className="
        flex
        justify-center
        max-sm:flex-wrap
    ">
        <div className="
             w-1/3
             flex
             flex-col
             max-sm:w-full
        ">
            <p className='text-xl text-center mb-2'>{props.botoesLegenda ? "AGUA" : ""}</p>
            <div 
                style={
                    {
                        backgroundColor:
                            (props.titulo == "AGUA" ? corPrincipal : ""),
                        "--data-color":corPrincipal
                    }
                } 
                onClick={()=>{ocultaStarters("AGUA")}} 
                className="
                    w-ful
                    flex
                    justify-center
                    hover:scale-[1.02]
                    transition-all
                    duration-500
                    cursor-pointer
                    pixel-corners-n2
                    h-20
                ">
                <Image  
                    style={
                        {
                            filter:
                                (props.titulo == 'AGUA' ? "brightness(5000%)" : "")
                        }
                    } 
                    id={`starters${props.titulo}AGUA`} className={`w-32 starters${props.titulo}`} src={BotaoAgua} alt="Elemento Água"
                />
            </div>
        </div>
        <div className="
             w-1/3
             flex
             flex-col
             max-sm:w-full
        ">
            <p className='text-xl text-center mb-2'>{props.botoesLegenda ? "PLANTA" : ""}</p>
            <div 
                style={
                    {
                        backgroundColor:
                            (props.titulo == "PLANTA" ? corPrincipal : ""),
                        "--data-color":corPrincipal
                    }
                } 
                onClick={()=>{ocultaStarters("PLANTA")}} 
                className="
                    w-full
                    flex
                    justify-center
                    hover:scale-[1.02]
                    transition-all
                    duration-500
                    cursor-pointer
                    pixel-corners-n2
                    h-20
                ">
                <Image 
                    style={
                        {
                            filter:
                                (props.titulo == 'PLANTA' ? "brightness(5000%)" : "")
                        }
                    } 
                    id={`starters${props.titulo}PLANTA`} className={`w-32 starters${props.titulo}`} src={BotaoGrama} alt="Elemento Grama"/>
            </div>
        </div>
        <div className="
             w-1/3
             flex
             flex-col
             max-sm:w-full
        ">
            <p className='text-xl text-center mb-2'>{props.botoesLegenda ? "FOGO" : ""}</p>
            <div 
                style={
                    {
                        backgroundColor:
                            (props.titulo == "FOGO" ? corPrincipal : ""),
                        "--data-color":corPrincipal
                    }
                } 
                onClick={()=>{ocultaStarters("FOGO")}} 
                className="
                    w-full
                    flex
                    justify-center
                    hover:scale-[1.02]
                    transition-all
                    duration-500
                    cursor-pointer
                    pixel-corners-n2
                    h-20
                ">
                <Image 
                    style={
                        {
                            filter:
                                (props.titulo == 'FOGO' ? "brightness(5000%)" : "")
                        }
                    } 
                    id={`starters${props.titulo}FOGO`} className={`w-32 starters${props.titulo}`} src={BotaoFogo} alt="Elemento Fogo"/>
            </div>
        </div>
    </div>
  );
}
