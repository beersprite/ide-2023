import Image from 'next/image';
import React, {useState, useEffect} from 'react';

import BotoesElementos from './BotoesElementos.js';
import './starters.css';

import GatoDormindo from '../../icons/Starters/gatoDormindo.svg';
import GatoSorrindo from '../../icons/Starters/gatoSorrindo.svg';
import Aspas from '../../icons/Starters/aspas.svg';

export default function StartersDetail(props) {
 // ========== Declaração da cor do tema ==========

 const corPrincipal = props.pokemons[props.titulo].mainColor;
return (
    <div 
        id={`idContainerGeral${props.titulo}`}
        style={{color:corPrincipal, borderColor:corPrincipal}} 
        className={`containerGeralStarter max-w-[1400px] hidden py-20 px-10 text-${corPrincipal} max-lg:px-5`}
    >
        <div  className="block text-6xl mb-20 max-lg:text-center max-lg:mb-5">
            {props.titulo}
        </div>
        <div className=" 
            mb-5
            flex 
            justify-between
            max-lg:flex-col-reverse
            max-lg:items-center
        ">
            <div className="
                w-5/12
                flex 
                flex-col
                justify-between
                max-lg:w-full
            ">
                <div className="
                    flex
                    flex-wrap
                    justify-between
                    content-around
                    gap-8
                    max-lg:mb-10
                ">
                    {props.pokemons[props.titulo].pokemons.map((pokemon)=>{
                        return <div style={{"--data-color":corPrincipal}} className="
                                pokemonInicial hover:scale-[1.05]
                                transition-all
                                duration-500
                                cursor-pointer
                                pixel-corners-n1
                                ">
                                <Image alt="pokemon"height="50" width="50" key={`pokemon${props.titulo}${pokemon.id}`} src={`${pokemon.imgUrl}`}/>
                            </div>
                    })}
                </div>
                <BotoesElementos 
                    botoesLegenda={true}
                    color={props.color}
                    titulo={props.titulo}
                    pokemons={props.pokemons}
                />
            </div>
            <div className="
                w-6/12
                flex
                flex-col
                flex-wrap
                items-center
                justify-between
                max-lg:w-full
                max-lg:mb-10
            ">
                <Image style={{bottom:-40 + "px"}} className="w-1/2 relative" src={GatoSorrindo} alt="IDE logo" />
                <div className="
                    w-full
                    flex
                    justify-between
                ">
                    <div className="ml-10 flex flex-wrap gap-2">
                        <p className="w-full text-3xl pb-2">SE:</p>
                        {props.pokemons[props.titulo].fraquezas.map((pokemon)=>{
                            return <Image height="40" width="40" className="iconeElementos" src={`${pokemon.imgUrl}`} alt="Fraquezas" />

                        })}
                        
                    </div>
                    <div className="mr-10 flex flex-wrap justify-end gap-2">
                        <p className="w-full text-3xl pb-2 text-right">FRA:</p>
                        {props.pokemons[props.titulo].superEfetivo.map((pokemon)=>{
                            return <Image height="40" width="40" className="iconeElementos" src={`${pokemon.imgUrl}`} alt="Super Efetivos" />

                        })}
                    </div>
                </div>
                <div 
                    style={{"--data-color":corPrincipal}} 
                    className={`
                        mt-5
                        flex
                        justify-center
                        py-5
                        px-10
                        text-0_5xl
                        pixel-corners-n3
                    `}
                >
                    {props.pokemons[props.titulo].description}
            </div>
            </div>
        </div>
    </div>
  );
}
