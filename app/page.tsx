import Header from "@/components/Header";
import MenuClient from "@/components/MenuClient";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      <MenuClient />
      <Footer />
    </div>
  );
}
