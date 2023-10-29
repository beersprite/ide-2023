import React from "react"
import IconBar from "./IconBar";
import Image from "next/image";
import IDEPixelLogo from "../../../../public/img/logo-pixelado-branco.png";
import '../../styles/font.css';

export default function Footer() {
    return (
        <footer className="p-14 bg-zinc-800">
            <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-between">
                    <IconBar/>
                    <div className="pixel-font text-center">
                        <p className="mt-5">
                            株式会社ポケモン (The Pokémon Company) © x IDE © Todos os direitos reservados.
                        </p>
                        <p className="mt-3">
                            Termos de Uso | Política de Privacidade | Política de Cookies
                        </p>
                </div>
            </div>
            <div className="mt-10 justify-end sm:flex">
                <a href="https://google.com/">
                    <Image src={IDEPixelLogo} alt="IDE logo" className="w-3/4"/>
                </a>
            </div>

        </footer>
    )
}
