import IconBar from './IconBar';
import IDEPixelLogo from '../../../../public/img/logo-pixelado-branco.png';
import Image from 'next/image';
import React from 'react';

export default function Footer() {
  return (
    <footer className="p-14 bg-grey">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center">
        <IconBar />
        <div className="text-center text-white">
          <p className="mt-5">株式会社ポケモン (The Pokémon Company) © x IDE © Todos os direitos reservados.</p>
          <p className="mt-3">Termos de Uso | Política de Privacidade | Política de Cookies</p>
        </div>
      </div>
      <div className="mt-10 justify-end sm:flex">
        <Image src={IDEPixelLogo} alt="IDE logo" width="87" />
      </div>
    </footer>
  );
}
