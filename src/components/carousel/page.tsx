'use client'

import { useState, useEffect, useCallback } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

interface Course {
    name: string;
    description: string;
    stars: number;
}

export function Carousel() {
    const courses: Course[] = [
        {
            name: "Iniciante",
            description: "Curso de educação financeira para iniciantes",
            stars: 1,
        },
        {
            name: "Intermediário",
            description: "Curso de educação financeira para intermediários",
            stars: 2,
        },
        {
            name: "Experiente",
            description: "Curso de educação financeira para experientes",
            stars: 3,
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // useCallback vai memorizar a função para evitar recriações desnecessárias
    const updateCarousel = useCallback(() => {
        const nextIndex = (currentIndex + 1) % courses.length;
        setCurrentIndex(nextIndex);
    }, [currentIndex, courses.length]); // Incluindo currentIndex e courses.length como dependências

    // Efeito para rotação automática do carrossel
    useEffect(() => {
        const interval = setInterval(() => {
            updateCarousel();
        }, 5000); // 5000ms = 5 segundos

        return () => clearInterval(interval); // Limpar o intervalo ao desmontar o componente
    }, [updateCarousel]); // Agora updateCarousel está na lista de dependências

    return (
        <section className="w-full mt-28" id="cursos" data-aos="zoom-in">
            <div className='max-w-screen flex flex-col justify-center items-center'>
                <h2 className="text-white font-bold text-3xl text-center sm:text-4xl md:text-5xl mb-12">Principais cursos:</h2>
                <div className="flex items-center gap-2 xl:gap-6">
                    {/* Botão "Anterior" */}
                    <button
                        onClick={() => setCurrentIndex((currentIndex - 1 + courses.length) % courses.length)}
                        className="bg-[#00ff00] px-2 py-2 xl:px-4 z-10 rounded-full text-black md:mr-4 lg:mr-[-16] xl:mr-0"
                    >
                        <ArrowLeft />
                    </button>
                    {/* Carousel de Cursos */}
                    <div className="flex gap-3 xl:gap-6 text-white">
                        {courses.map((course, index) => (
                            <div
                                key={course.name}
                                className={`bg-[#1c1c1c] space-y-16 md:space-y-36 lg:flex lg:flex-col lg:gap-28 py-6 lg:px-2 rounded-lg transition-all duration-500 ease-in-out ${
                                    index === currentIndex
                                        ? 'active'
                                        : index === (currentIndex - 1 + courses.length) % courses.length
                                        ? 'left opacity-50 hidden' // Opacidade para o card à esquerda
                                        : index === (currentIndex + 1) % courses.length
                                        ? 'right opacity-50 hidden' // Opacidade para o card à direita
                                        : 'inactive'
                                }`}
                                style={{
                                    order:
                                        index === currentIndex
                                            ? 1
                                            : index === (currentIndex - 1 + courses.length) % courses.length
                                            ? 0
                                            : index === (currentIndex + 1) % courses.length
                                            ? 2
                                            : 3,
                                }}
                            >
                                <div className="flex flex-col justify-center items-center gap-2">
                                    {/* Exibe as estrelas de acordo com o valor de 'stars' */}
                                    <div className="flex gap-1">
                                        {Array.from({ length: course.stars }, (_, i) => (
                                            <Star key={i} className="text-yellow-300" fill='yellow' />
                                        ))}
                                    </div>
                                    <h3 className="font-extrabold text-2xl">{course.name}</h3>
                                    <p className="w-2xs text-center font-light">{course.description}</p>
                                </div>
                                <div className="flex justify-center">
                                    <button className="bg-[#00ff00] w-fit px-6 py-2 text-black font-semibold rounded-4xl">Iniciar</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Botão "Próximo" */}
                    <button
                        onClick={() => setCurrentIndex((currentIndex + 1) % courses.length)}
                        className="bg-[#00ff00] z-10 px-2 py-2 xl:px-4 rounded-full text-black md:ml-4 lg:ml-[-16] xl:ml-0"
                    >
                        <ArrowRight />
                    </button>
                </div>
            </div>
        </section>
    );
}