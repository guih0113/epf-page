import { Header } from "@/components/header/page";
import SectionMain from "@/components/section-main/page";

export default function Home() {
  return (
    <div className="bg-[url('/Bg3.png')] bg-no-repeat bg-cover bg-center min-h-screen w-full">
      <div className="py-24 px-56">
        <Header />
        <SectionMain />
      </div>
    </div>
  );
}
