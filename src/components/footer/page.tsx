import SocialIcons from './social-icons';
import { ListItem } from '@/components/ui/listItem';

export function Footer() {
    return (
        <footer className="bg-gradient-to-b from-transparent to-[#121212] w-full py-5 flex flex-col space-y-6 relative" id='contato'>
            <SocialIcons />

            <nav>
                <ul className='hidden md:flex justify-center items-center gap-5 mb-3 text-white'>
                    <ListItem href="#home" text="Home" />
                    <ListItem href="#quem-somos" text="Quem Somos" />
                    <ListItem href="#cursos" text="Cursos" />
                    <ListItem href="#contato" text="Contato" />
                    <ListItem href="#" text="Sou um administrador" />
                </ul>
            </nav>

            <div className='bg-[#0dff2598] w-full mt-4 absolute bottom-0 left-0 '>
                <p className='text-white text-center py-2'>© Estude para o Futuro | 2025</p>
            </div>
        </footer>
    );
}