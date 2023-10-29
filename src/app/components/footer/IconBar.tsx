import React from "react";
import PokemonLogo from '../../../../public/img/logos/pokemon-logo.png';
import InstaLogo from '../../../../public/img/logos/instagram-logo.png';
import IDELogo from '../../../../public/img/logos/ide-logo.png';
import LinkedinLogo from '../../../../public/img/logos/linkedin-logo.png';
import Image from "next/image";

export default function IconBar() {
    return (
        <div className="flex items-center gap-x-2">
            <a href="https://google.com/">
                <Image src={PokemonLogo} alt="Pokémon logo" className="w-11/12"/>
            </a>
            <a href="https://google.com/">
                <Image src={InstaLogo} alt="Instagram logo" className="w-6/12"/>
            </a>
            <a href="https://google.com/">
                <Image src={LinkedinLogo} alt="Linkedin logo" className="w-6/12"/>
            </a>
            <a href="https://google.com/">
                <Image src={IDELogo} alt="IDE logo" className="w-6/12"/>
            </a>
        </div>
    )
}