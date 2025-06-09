import Image from "next/image";

export function SectionSecondary() {
    return (
        <section className="w-full flex justify-center items-center mt-24" id="quem-somos">
            <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-evenly w-full mx-auto py-4 px-8">
                <div className="w-full lg:w-xl" data-aos="fade-down">   
                    <h2 className="text-white font-bold text-3xl text-center sm:text-4xl md:text-5xl mb-4">
                        Quem somos?
                    </h2>
                    <p className="text-[#00DD15] text-lg text-center lg:text-left xl:text-right mb-6 lg:w-lg">
                        Somos uma plataforma que tem por objetivo ensinar jovens e adultos sobre como administrar e cuidar de suas vidas financeiras. Nosso objetivo para com a população é diminuir a discrepante base de desinformação existente na área das finanças, disponibilizando um conteúdo de ótima qualidade à todos que estiverem interessados em aprender.
                    </p>
                </div>

                <div className="w-full lg:w-1/2 flex justify-center items-center xl:ml-5" data-aos="fade-left">
                    <Image
                        src="/tablet.png"
                        width={500}
                        height={500}
                        alt="Tablet"
                        quality={100}
                    />
                </div>
            </div>
        </section>
    );
}