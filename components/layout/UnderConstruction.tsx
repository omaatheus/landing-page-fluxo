'use client'; // <--- Adicione isso na primeira linha

import React from 'react';
import { motion } from 'framer-motion';
import { Construction, ArrowLeft, Hammer } from 'lucide-react';

const UnderConstruction: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-slate-50 flex flex-col items-center justify-center px-4 relative overflow-hidden">
      
      {/* Elementos Decorativos de Fundo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000 transform -translate-x-1/2"></div>
      </div>

      <div className="z-10 text-center max-w-2xl mx-auto">
        
        {/* Ícone Animado */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-blue-100 rounded-full blur-xl opacity-50"></div>
            <div className="relative bg-white p-6 rounded-3xl shadow-lg border border-slate-100">
              <motion.div
                animate={{ rotate: [0, 10, 0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", repeatDelay: 1 }}
              >
                <Construction className="w-16 h-16 text-[#38b6ff]" />
              </motion.div>
            </div>
            
            <motion.div 
              className="absolute -right-4 -top-4 bg-slate-900 p-2 rounded-xl shadow-md"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <Hammer className="w-5 h-5 text-white" />
            </motion.div>
          </div>
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight"
        >
          Estamos construindo <br/>
          algo <span className="text-[#38b6ff]">{`incrível`}</span>
        </motion.h1>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-slate-500 mb-10 leading-relaxed max-w-lg mx-auto"
        >
          Esta página ainda está em desenvolvimento. Estamos trabalhando nos detalhes finais para entregar a melhor experiência para você.
        </motion.p>

        {/* Botão de Voltar */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <a 
            href="/" 
            className="inline-flex items-center gap-2 bg-[#38b6ff] hover:bg-[#008cdd] text-white font-medium py-3 px-8 rounded-full transition-all hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para o início
          </a>
        </motion.div>
      </div>

    </div>
  );
};

export default UnderConstruction;