'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Ghost, Home, ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-slate-50 flex flex-col items-center justify-center px-4 relative overflow-hidden">
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="z-10 text-center max-w-2xl mx-auto">
        <div className="relative mb-2">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-[150px] md:text-[200px] font-black text-slate-200 leading-none select-none"
          >
            404
          </motion.h1>
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            initial={{ y: 0 }}
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <div className="bg-white p-6 rounded-full shadow-xl border border-slate-100 relative">
              <Ghost className="w-16 h-16 text-[#38b6ff]" />
              
              {/* Balão de fala pequeno "Booh!" */}
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.3 }}
                className="absolute -right-8 -top-4 bg-[#38b6ff] text-slate-900 text-xs font-bold py-1 px-3 rounded-lg rounded-bl-none shadow-md"
              >
                Ops?
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Página não encontrada
          </h2>
          <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-md mx-auto">
            Parece que a página que você está procurando foi movida, deletada ou nunca existiu.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button 
            onClick={() => window.history.back()}
            className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300 transition-all font-medium bg-white"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </button>
          <a 
            href="/" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#38b6ff] hover:bg-[#008cdd] text-white font-medium py-3 px-8 rounded-full transition-all hover:scale-105 shadow-lg hover:shadow-blue-200"
          >
            <Home className="w-4 h-4" />
            Ir para o início
          </a>
        </motion.div>
      </div>

      {/* Rodapé Simples */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 text-slate-400 text-sm"
      >
        Fluxo Software House
      </motion.div>

    </div>
  );
};

export default NotFound;