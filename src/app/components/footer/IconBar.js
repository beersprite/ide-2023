import React from 'react';
import PokemonLogo from '../../../../public/img/logos/pokemon-logo.png';
import InstaLogo from '../../../../public/img/logos/instagram-logo.png';
import IDELogo from '../../../../public/img/logos/ide-logo.png';
import LinkedinLogo from '../../../../public/img/logos/linkedin-logo.png';
import Image from 'next/image';

export default function IconBar() {
  return (
    <div className="flex gap-x-5">
      <a href="https://google.com/" className="w-8">
        <Image src={PokemonLogo} alt="Pokémon logo" />
      </a>
      <a href="https://google.com/" className="w-8">
        <Image src={InstaLogo} alt="Instagram logo" />
      </a>
      <a href="https://google.com/" className="w-8">
        <Image src={LinkedinLogo} alt="Linkedin logo" />
      </a>
      <a href="https://google.com/" className="w-14">
        <Image src={IDELogo} alt="IDE logo" />
      </a>
    </div>
  );
}
