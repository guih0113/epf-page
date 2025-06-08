import Image from "next/image";
import { Button } from "./ui/button";
import ListItem from "@/components/header/ui/listItem";
import Dropdown from "./ui/dropdown";


export function Header() {
    return (
        <header className="md:sticky md:top-12 z-10 w-[15vw] h-[15vw] md:w-full md:h-auto bg-[#12130F] md:px-12 md:py-8 rounded-full md:rounded-xl flex justify-center md:justify-between items-center container mx-auto">
            <div className="cursor-pointer hidden md:flex">
                <a href="#home">
                    <Image
                        src="/logo.png"
                        width={150}
                        height={150}
                        alt="Logo do Projeto"
                        quality={100}
                    />
                </a>
            </div>

            <nav className="hidden xl:flex">
                <ul className="text-white space-x-6 text-md xl:text-lg font-semibold flex">
                    <ListItem href="#home" text="Home" />
                    <ListItem href="#quem-somos" text="Quem Somos" />
                    <ListItem href="#" text="Cursos" />
                    <ListItem href="#" text="Contato" />
                </ul>
            </nav>

            <div className="hidden xl:flex space-x-6">
                <Button text="Log in"/>
                <Button text="Cadastre-se"/>
            </div>

            <div className="xl:hidden flex items-center justify-center">
                <Dropdown/>
            </div>
        </header>
    );
}