
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ContactForm from "@/components/layout/ContactForm";
import Testimonials from "@/components/layout/Testimonials";

// import { MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 font-sans dark:bg-[#efefef]">
      <Header />
      <ContactForm/>
      <Testimonials />
      <Footer />
      {/* <div className="fixed bottom-8 right-8 z-50">
        <button className="bg-[#007cc4] hover:bg-[#006199] text-white p-4 rounded-full shadow-lg transition-all hover:scale-110">
          <MessageCircle size={28} />
        </button>
      </div> */}
    </main>
  );
}
