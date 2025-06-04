import Image from "next/image";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../../ui/dropdown-menu";
import { AlignJustify } from 'lucide-react'

export default function Dropdown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <AlignJustify className="text-white"/>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-[#12130F] text-white">
                <DropdownMenuLabel asChild>
                    <div className="flex items-center justify-center py-3 cursor-pointer md:hidden">
                        <Image
                            src="/logo.png"
                            width={150}
                            height={150}
                            alt="Logo do Projeto"
                            quality={100}
                        />
                    </div>
                </DropdownMenuLabel>

                <DropdownMenuSeparator className="md:hidden"/>

                <DropdownMenuGroup className="flex flex-col items-center">
                    <DropdownMenuItem>
                        Home
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Quem Somos
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Cursos
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Contato
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}