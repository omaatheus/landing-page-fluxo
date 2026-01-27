"use client";

import {
  Monitor,
  Smartphone,
  Bot,
  PencilRuler,
  Zap,
  Cloud,
} from "lucide-react";
// 1. Importar motion e Variants
import { motion, Variants } from "framer-motion";

// 2. Configurar as animações
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Atraso entre o aparecimento de cada item
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 }, // Começa um pouco mais baixo
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

export default function ServicesSection() {
  return (
    <section id="services" className=" w-full bg-white py-24 md:mt-40">
      {/* 3. Transformar o container principal em motion.div 
         'viewport={{ once: true, margin: "-100px" }}' garante que a animação 
         só aconteça uma vez e inicie quando o elemento estiver um pouco dentro da tela.
      */}
      <motion.div 
        className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-3 gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} 
      >
        
        {/* Coluna da Esquerda (Texto) */}
        <div>
          <motion.h2 variants={itemVariants} className="text-4xl font-bold text-black leading-tight">
            Nossos <br />
            <span className="text-[#38b6ff]">{`Serviços`}</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="mt-6 text-lg text-neutral-600 max-w-sm">
            Transformamos ideias em produtos digitais de alto impacto. Mais do
            que desenvolver tecnologia, nos aprofundamos nos seus desafios,
            entendemos o seu negócio e desenhamos soluções sob medida que geram
            valor real e impulsionam resultados. Acreditamos que inovação vai
            além do código. Por isso, combinamos estratégia, design e engenharia
            para criar produtos eficientes, escaláveis e preparados para crescer
            junto com a sua empresa. Do conceito inicial ao lançamento do
            produto, estamos ao seu lado em cada etapa, aplicando
            agilidade, visão de mercado e tecnologia de ponta para transformar
            ideias em soluções sólidas, competitivas e prontas para o futuro.
          </motion.p>
        </div>

        {/* Coluna da Direita (Cards) */}
        {/* Não precisamos de motion.div no wrapper da grid, o stagger passa direto para os filhos motion */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          <ServiceCard
            icon={<Zap className="text-[#38b6ff] mb-4" size={28} />}
            title="MVP em 30 dias"
            description="Tiramos sua ideia do papel e entregamos um produto funcional em até 30 dias, pronto para validação e evolução."
          />

          <ServiceCard
            icon={<Cloud className="text-[#38b6ff] mb-4"  size={28} />} // Ajustei o tamanho para manter padrão visual
            title="Consultoria em TI & Cloud"
            description="Estratégia, arquitetura e suporte em infraestrutura e nuvem para ambientes seguros, escaláveis e de alta performance."
          />

          <ServiceCard
            icon={<PencilRuler className="text-[#38b6ff] mb-4" size={28} />}
            title="UI & UX Design"
            description="Design centrado no usuário, com interfaces intuitivas, funcionais e focadas em conversão e experiência."
          />

          <ServiceCard
            icon={<Bot className="text-[#38b6ff] mb-4" size={28} />}
            title="Soluções com IA"
            description="Automação inteligente, análise de dados e sistemas personalizados para potencializar seus resultados."
          />

          <ServiceCard
            icon={<Smartphone className="text-[#38b6ff] mb-4" size={28} />}
            title="Aplicativos Mobile"
            description="Aplicações móveis rápidas, modernas e intuitivas para resolver problemas reais do seu negócio."
          />

          <ServiceCard
            icon={<Monitor className="text-[#38b6ff] mb-4" size={28} />}
            title="Sistemas Web"
            description="Desenvolvimento de plataformas web seguras, responsivas e preparadas para escalar junto com sua empresa."
          />
        </div>
      </motion.div>
    </section>
  );
}

// 4. Atualizar o componente ServiceCard para ser um motion.div
function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div 
      variants={itemVariants} // Recebe a animação individual
      className="bg-neutral-50 rounded-2xl p-6 transition hover:shadow-md hover:-translate-y-1 cursor-default"
    >
      <div className="text-blue-600 mb-4">{icon}</div>

      <h3 className="text-xl font-semibold text-black">{title}</h3>

      <p className="mt-3 text-neutral-600">{description}</p>
    </motion.div>
  );
}