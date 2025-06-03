import Image from "next/image";
import { Button } from "./ui/button";

export function Header() {
    return (
        <header className="w-full bg-[#12130F] py-8 px-12 rounded-xl flex justify-between items-center">
            <div className="cursor-pointer">
                <Image
                    src="/logo.png"
                    width={150}
                    height={150}
                    alt="Logo do Projeto"
                />
            </div>

            <nav>
                <ul className="text-white space-x-6 text-lg font-semibold">
                    <a href="">Home</a>
                    <a href="">Quem Somos</a>
                    <a href="">Cursos</a>
                    <a href="">Contato</a>
                </ul>
            </nav>

            <div className="space-x-6">
                <Button text="Log in"/>
                <Button text="Cadastre-se"/>
            </div>
        </header>
    );
}