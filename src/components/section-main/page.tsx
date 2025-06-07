import Image from "next/image";

export default function SectionMain() {
    return (
        <section className="w-full flex justify-center items-center">
            <div className="flex flex-col justify-center items-center lg:flex-row lg:items-start lg:justify-evenly w-full mx-auto py-4 px-8">
                <div className="w-full lg:w-1/2 mr-8 md:mr-16 lg:ml-[-110px] flex justify-center">
                    <Image
                        src="/smartphone.png"
                        width={700}
                        height={700}
                        alt="Smartphone"
                        quality={100}
                    />
                </div>

                <div className="w-full lg:w-1/2 text-center lg:text-right lg:mt-36">
                    <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
                        Construa seu futuro <br /> financeiro com <br /> conhecimento e <br /> planejamento
                    </h1>
                    <p className="text-[#00DD15] text-lg mb-6">
                        Criamos um método para você se divertir e aprender um <br /> pouco mais sobre.
                    </p>
                    <button className="bg-[#00DD15] text-black py-3 px-6 rounded-full text-lg">
                        Começar
                    </button>
                </div>
            </div>
        </section>
    );
}
