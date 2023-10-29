import React from "react";
import PokemonLogo from '../../../../public/img/logos/pokemon-logo.png';
import InstaLogo from '../../../../public/img/logos/instagram-logo.png';
import IDELogo from '../../../../public/img/logos/ide-logo.png';
import LinkedinLogo from '../../../../public/img/logos/linkedin-logo.png';
import Image from "next/image";
import '../../styles/animation.css';

export default function IconBar() {
    return (
        <div className="flex gap-x-5">
            <a href="https://www.pokemon.com/br/" className="w-8 hover-scale">
                <Image src={PokemonLogo} alt="Pokémon logo"/>
            </a>
            <a href="https://www.instagram.com/ide_jr/" className="w-8 hover-scale">
                <Image src={InstaLogo} alt="Instagram logo"/>
            </a>
            <a href="https://www.linkedin.com/company/empresa-j%C3%BAnior-ide/mycompany/" className="w-8 hover-scale">
                <Image src={LinkedinLogo} alt="Linkedin logo"/>
            </a>
            <a href="https://www.idejr.com.br/" className="w-14 hover-scale">
                <Image src={IDELogo} alt="IDE logo"/>
            </a>
        </div>
    )
}