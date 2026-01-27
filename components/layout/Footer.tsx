/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Mail, Instagram, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#2c2c2c] text-slate-300 py-16 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col justify-between h-full">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-b border-white/5 pb-12">
          
          <div className="text-sm font-medium text-slate-400">
            Tecnologia que move seu negócio.
          </div>

          <div className="flex justify-center">

            <img 
              src="/Fluxo-5.png" 
              alt="Logo Sua Empresa" 
              className="w-20 h-12 rounded-lg object-cover"
            />
          </div>


          <nav>
            <ul className="flex items-center gap-6 text-sm font-medium">
              <li><a href="#" className="hover:text-[#38b6ff] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#38b6ff] transition-colors">Sobre</a></li>
              <li><a href="#services" className="hover:text-[#38b6ff] transition-colors">Serviços</a></li>
             {/* <li><a href="#" className="hover:text-[#38b6ff] transition-colors">Cases</a></li>*/}
            </ul>
          </nav>
        </div>


        <div className="flex flex-col items-center justify-center py-20 text-center space-y-10">
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white max-w-4xl leading-tight">
            Seu software,
            <span className="text-[#38b6ff]">{` Fluindo`}</span>
          </h2>


          <div className="flex items-center gap-4">
            <SocialButton icon={<Mail size={20} />} href="/quote" />
            <SocialButton icon={<Instagram size={20} />} href="https://www.instagram.com/sejafluxo"  />
          </div>

        </div>

   
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-white/5 text-sm text-slate-500">
          

          <div className="text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} Fluxo.</p>
            <p className="mt-1">Todos os direitos reservados.</p>
          </div>


          <div className="flex flex-col items-center md:items-end gap-1">
            <a href="tel:+5519982349298" className="hover:text-[#38b6ff] transition-colors">
              +55 (19) 98234-9298
            </a>
            <a href="mailto:contatoagenciafluxo@sejafluxo.com" className="hover:text-[#38b6ff] transition-colors">
              contatoagenciafluxo@sejafluxo.com
            </a>
          </div>

        </div>
      </div>

 

    </footer>
  );
};

const SocialButton: React.FC<{ icon: React.ReactNode; href: string }> = ({ icon, href }) => {
  return (
    <a 
      href={href} 
      target='_blank'
      className="p-3 bg-white/5 rounded-full text-slate-300 hover:bg-white/10 hover:text-white hover:scale-110 transition-all duration-300 border border-white/5"
    >
      {icon}
    </a>
  );
};

export default Footer;