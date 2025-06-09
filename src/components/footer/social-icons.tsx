import { Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

export default function SocialIcons() {
    return (
        <div className="flex justify-center items-center gap-4 text-white">
            <div className="flex justify-center items-center border border-white p-2 rounded-full hover:text-black/70 hover:bg-[#00DD15] hover:border-none transition-all duration-200 ease-in-out">
                <Twitter />
            </div>
            <div className="flex justify-center items-center border border-white p-2 rounded-full hover:text-black/70 hover:bg-[#00DD15] hover:border-none transition-all duration-200 ease-in-out">
                <Instagram />
            </div>
            <div className="flex justify-center items-center border border-white p-2 rounded-full hover:text-black/70 hover:bg-[#00DD15] hover:border-none transition-all duration-200 ease-in-out">
                <Youtube />
            </div>
            <div className="flex justify-center items-center border border-white p-2 rounded-full hover:text-black/70 hover:bg-[#00DD15] hover:border-none transition-all duration-200 ease-in-out">
                <Linkedin />
            </div>
        </div>
    );
}