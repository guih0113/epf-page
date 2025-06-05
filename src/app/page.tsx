import { Header } from "@/components/header/page";
import SectionMain from "@/components/section-main/page";

export default function Home() {
  return (
    <div className="bg-[url('/Bg3.png')] bg-no-repeat bg-cover bg-center min-h-screen">
      <div className="py-24 px-48">
        <Header />
        <SectionMain />
      </div>
    </div>
  );
}
