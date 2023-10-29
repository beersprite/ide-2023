import React from "react";
import PokemonLogo from '../../../../public/img/logos/pokemon-logo.png';
import InstaLogo from '../../../../public/img/logos/instagram-logo.png';
import IDELogo from '../../../../public/img/logos/ide-logo.png';
import LinkedinLogo from '../../../../public/img/logos/linkedin-logo.png';
import Image from "next/image";

export default function IconBar() {
    return (
        <div className="flex items-center gap-x-6 text-gray-400 mt-6">
            <a href="https://google.com/">
                <Image src={PokemonLogo} alt="Pokémon logo"/>
            </a>
            <a href="https://google.com/">
                <Image src={InstaLogo} alt="Instagram logo"/>
            </a>
            <a href="https://google.com/">
                <Image src={LinkedinLogo} alt="Linkedin logo"/>
            </a>
            <a href="https://google.com/">
                <Image src={IDELogo} alt="IDE logo"/>
            </a>

        </div>
    )
}