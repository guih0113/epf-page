import Image from "next/image";
import { Button } from "../../ui/header/button";
import ListItem from "@/ui/header/listItem";

export function Header() {
    return (
        <header className="sticky w-full bg-[#12130F] py-8 px-12 rounded-xl flex justify-between items-center">
            <div className="cursor-pointer">
                <Image
                    src="/logo.png"
                    width={150}
                    height={150}
                    alt="Logo do Projeto"
                    quality={100}
                />
            </div>

            <nav className="hidden xl:flex">
                <ul className="text-white space-x-6 text-md xl:text-lg font-semibold flex">
                    <ListItem href="#" text="Home" />
                    <ListItem href="#" text="Quem Somos" />
                    <ListItem href="#" text="Cursos" />
                    <ListItem href="#" text="Contato" />
                </ul>
            </nav>

            <div className="hidden xl:flex space-x-6">
                <Button text="Log in"/>
                <Button text="Cadastre-se"/>
            </div>
        </header>
    );
}