import React from "react"
import IconBar from "./IconBar";
import Image from "next/image";
import IDEPixelLogo from "../../../../public/img/logo-pixelado-branco.png";
import '../../styles/font.css';

export default function Footer() {
    return (
        <footer className="pt-10 bg-zinc-800">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="justify-between items-center gap-12 md:flex">
                    <div className="flex-1 max-w-lg pixel-font">
                        <p>
                            株式会社ポケモン (The Pokémon Company) © x IDE © Todos os direitos reservados.
                        </p>
                        <p>
                            Termos de Uso | Política de Privacidade | Política de Cookies
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-10 py-10 items-center justify-between sm:flex">
                <IconBar/>
                <a href="https://google.com/">
                    <Image src={IDEPixelLogo} alt="IDE logo"/>
                </a>
            </div>

        </footer>
    )
}
