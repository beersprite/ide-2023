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
    if (typeof document !== 'undefined') {
        let colorDefault = new ColorChange(`.starters${props.titulo}:not(#starters${props.titulo}${props.titulo})`);
        colorDefault.setColor(props.titulo != '' ? props.pokemons[props.titulo].mainColor : "")
    }

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

    ">
        <div className="
             w-1/3
             flex
             flex-col
        ">
            <p className='text-xl text-center mb-2'>{props.botoesLegenda ? "AGUA" : ""}</p>
            <div 
                style={
                    {
                        borderColor:
                            (props.titulo != '' ? props.pokemons[props.titulo].mainColor : theme.colors['primary']),
                        backgroundColor:
                            (props.titulo == "AGUA" ? props.pokemons[props.titulo].mainColor : "")
                    }
                } 
                onClick={()=>{ocultaStarters("AGUA")}} 
                className="
                    w-full
                    border-solid 
                    border-3
                    rounded-full
                    flex
                    justify-center
                    hover:scale-[1.02]
                    transition-all
                    duration-500
                    cursor-pointer
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
        ">
            <p className='text-xl text-center mb-2'>{props.botoesLegenda ? "PLANTA" : ""}</p>
            <div 
                style={
                    {
                        borderColor:
                            (props.titulo != '' ? props.pokemons[props.titulo].mainColor : theme.colors['primary']),
                        backgroundColor:
                            (props.titulo == "PLANTA" ? props.pokemons[props.titulo].mainColor : "")
                    
                    }
                } 
                onClick={()=>{ocultaStarters("PLANTA")}} 
                className="
                    w-full
                    border-solid 
                    border-3
                    rounded-full 
                    flex
                    justify-center
                    hover:scale-[1.02]
                    transition-all
                    duration-500
                    cursor-pointer
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
        ">
            <p className='text-xl text-center mb-2'>{props.botoesLegenda ? "FOGO" : ""}</p>
            <div 
                style={
                    {
                        borderColor:
                            (props.titulo != '' ? props.pokemons[props.titulo].mainColor : theme.colors['primary']),
                        backgroundColor:
                            (props.titulo == "FOGO" ? props.pokemons[props.titulo].mainColor : "")
                    
                    }
                } 
                onClick={()=>{ocultaStarters("FOGO")}} 
                className="
                    w-full
                    border-solid 
                    border-3
                    rounded-full 
                    flex
                    justify-center
                    hover:scale-[1.02]
                    transition-all
                    duration-500
                    cursor-pointer
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
