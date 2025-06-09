import { Carousel } from "@/components/carousel/page";
import { Footer } from "@/components/footer/page";
import { Header } from "@/components/header/page";
import SectionMain from "@/components/section-main/page";
import { SectionSecondary } from "@/components/section-secondary/page";

export default function Home() {
  return (
    <div className="bg-[url('/Bg3.png')] bg-no-repeat bg-cover bg-center min-h-screen flex flex-col">
      <div className="py-12 px-2 md:px-8 2xl:py-24 2xl:px-56 flex-1" id="home">
        <Header />

        <main className="flex-1">
          <SectionMain />
          <SectionSecondary />
          <Carousel />
        </main>
      </div>
      <Footer />
    </div>
  );
}
