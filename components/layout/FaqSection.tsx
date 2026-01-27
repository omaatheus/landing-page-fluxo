"use client"
import React, { useState } from 'react';
// 1. Importar Variants
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "Como funciona o suporte após a entrega do sistema?",
    answer: "Nosso relacionamento não termina com a entrega. Disponibilizamos um período de garantia para ajustes e correções, além de planos de suporte contínuo (SLA) para manutenção, melhorias evolutivas e acompanhamento do crescimento do seu negócio."
  },
  {
    question: "É possível integrar a nova solução com sistemas que já utilizamos hoje?",
    answer: "Sim. Desenvolvemos soluções totalmente integráveis. Avaliamos seu ambiente atual — seja ele um sistema legado ou moderno — e criamos APIs e integrações seguras para garantir comunicação eficiente com ERPs, CRMs, bancos de dados ou outros serviços."
  },
  {
    question: "Quanto tempo leva para desenvolver uma solução sob medida?",
    answer: "O prazo depende diretamente do escopo e da complexidade do projeto. Trabalhamos com metodologias ágeis para acelerar entregas sem abrir mão da qualidade. Após entender suas necessidades, conseguimos estimar prazos de forma precisa."
  },
  {
    question: "Como vocês garantem a segurança das informações e dos dados dos usuários?",
    answer: "A segurança é tratada como pilar do projeto. Aplicamos boas práticas desde o início, com criptografia, autenticação segura (OAuth2, JWT), testes de vulnerabilidade frequentes e total conformidade com a LGPD."
  },
  {
    question: "Qual é o valor para desenvolver um software personalizado?",
    answer: "O custo varia conforme as funcionalidades, integrações e nível de complexidade. Atuamos com modelos flexíveis, como escopo fechado ou times dedicados (squads). Entre em contato para receber uma proposta personalizada, sem compromisso."
  }
];

// 2. Definir as variantes de animação
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Atraso entre o título e cada item da lista
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

const FaqSection: React.FC = () => {

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full py-20 px-4 md:px-8 bg-white">
      <motion.div 
        className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        
        <div className="lg:w-1/3">
          <motion.h2 
            variants={itemVariants} 
            className="text-4xl font-bold text-slate-900 leading-tight sticky top-8"
          >
            Perguntas <br />
            <span className="text-[#38b6ff]">{`Frequentes`}</span>
          </motion.h2>
        </div>

        <div className="lg:w-2/3 flex flex-col gap-4">
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                onClick={() => toggleFaq(index)}
                className={`cursor-pointer transition-all duration-300 ease-in-out
                  ${isOpen 
                    ? 'bg-white border border-slate-200 rounded-2xl shadow-sm p-6' 
                    : 'bg-transparent border-b border-slate-100 py-6 px-2 hover:bg-slate-50 rounded-lg' 
                  }
                `}
              >
                <div className="flex justify-between items-center gap-4">
                  <h3 className={`text-lg font-medium transition-colors ${isOpen ? 'text-slate-900' : 'text-slate-700'}`}>
                    {item.question}
                  </h3>
                  
                  <span className="flex-shrink-0 text-[#38b6ff]">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 text-slate-500 leading-relaxed text-base">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </motion.div>
    </section>
  );
};

export default FaqSection;