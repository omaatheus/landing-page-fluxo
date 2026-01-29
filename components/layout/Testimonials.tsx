"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
// 1. Importar Variants
import { motion, AnimatePresence, Variants } from "framer-motion";

interface Review {
  id: number;
  text: string;
  authorName: string;
  authorRole: string;
  authorImage: string;
}

const reviews: Review[] = [
  {
    id: 1,
    text: "A Fluxo me surpreendeu muito positivamente! Eles são os nossos principais parceiros de tecnologia e tenho segurança em indicar esse time.",
    authorName: "Cláudio",
    authorRole: "Diretor na Indústria Frigorífica",
    authorImage:
      "/claudio.jpg",
  },
  {
    id: 2,
    text: "A equipe transformou nossa ideia em um MVP funcional. A comunicação foi transparente do início ao fim e o resultado final superou nossas expectativas de design e performance.",
    authorName: "Anônimo",
    authorRole: "Fundador de Startup no Ramo Imobiliário",
    authorImage:
      "/letra-a.png",
  },
];

// 2. Definir animações de entrada (Scroll)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < reviews.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const isFirst = currentIndex === 0;
  const isLast = currentIndex === reviews.length - 1;

  return (
    <section id="about" className=" w-full py-20 px-4 md:px-8 bg-[#efefef] overflow-hidden">
      {/* 3. Container principal com whileInView */}
      <motion.div 
        className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // amount: 0.3 garante que anima só quando 30% estiver visível
      >
        

        <motion.div variants={itemVariants} className="lg:w-1/2 space-y-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
              O que nossos clientes <br />
              <span className="text-[#38b6ff]">{`dizem sobre nós`}</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed max-w-md">
              A confiança dos nossos clientes é construída a partir de
              resultados reais. Aqui você encontra relatos de pessoas e empresas
              que vivenciaram nosso processo, acompanharam de perto cada etapa e
              perceberam o impacto das nossas soluções na evolução dos seus
              produtos e negócios.
            </p>
          </div>
        </motion.div>

        <motion.div 
          variants={itemVariants} 
          className="lg:w-1/2 w-full flex justify-center lg:justify-end relative"
        >
          <div className="relative w-full max-w-md bg-[#007cc4] rounded-3xl p-8 md:p-10 shadow-xl z-10 min-h-[450px] flex flex-col justify-between">
            <div className="mb-6">
              <Quote className="text-white w-12 h-12 fill-white opacity-90" />
            </div>

           
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex-grow"
              >
                <p className="text-white text-xl md:text-2xl leading-relaxed font-light">
                  {reviews[currentIndex].text}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8">
              <div className="w-full h-px bg-white/20 mb-6"></div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={reviews[currentIndex].authorImage}
                    alt={reviews[currentIndex].authorName}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white/30"
                  />
                  <div>
                    <h4 className="text-white font-bold text-sm md:text-base">
                      {reviews[currentIndex].authorName}
                    </h4>
                    <p className="text-blue-200 text-xs md:text-sm">
                      {reviews[currentIndex].authorRole}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={handlePrev}
                    disabled={isFirst}
                    className={`p-2 rounded-full border border-white/30 transition-all 
                      ${
                        isFirst
                          ? "opacity-30 cursor-not-allowed text-white/50"
                          : "hover:bg-white hover:text-[#38b6ff] text-white cursor-pointer"
                      }`}
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>

                  <button
                    onClick={handleNext}
                    disabled={isLast}
                    className={`p-2 rounded-full border border-white/30 transition-all 
                      ${
                        isLast
                          ? "opacity-30 cursor-not-allowed text-white/50"
                          : "hover:bg-white hover:text-[#38b6ff] text-white cursor-pointer"
                      }`}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Testimonials;