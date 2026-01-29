"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "../ui/Button";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 50, damping: 20 } 
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, x: 50, scale: 0.95 },
  visible: { 
    opacity: 1, 
    x: 0, 
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.4 } 
  },
};

export default function HeroSection() {
  const [mode, setMode] = useState<"empresa" | "ideia">("empresa");

  return (
    <section className="w-full bg-[#fff] mt-5 md:mt-23">
      <div className="mx-auto max-w-7xl px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="flex gap-3 mb-8">
            <button
              onClick={() => setMode("empresa")}
              className={`cursor-pointer flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition
                ${
                  mode === "empresa"
                    ? "bg-blue-100 text-[#007cc4]"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }
              `}
            >
              Para Empresas
            </button>

            <button
              onClick={() => setMode("ideia")}
              className={`cursor-pointer flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition
                ${
                  mode === "ideia"
                    ? "bg-blue-100 text-[#007cc4]"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }
              `}
            >
              Tem uma ideia?
            </button>
          </motion.div>


          <motion.div variants={itemVariants}> 
            {mode === "empresa" ? (
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-black">
                Soluções extraordinárias altamente{" "}
                <span className="text-[#38b6ff]">{`eficientes`}</span>
              </h1>
            ) : (
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-black">
                Teve uma ideia?{" "}
                <span className="text-[#38b6ff]">{`nós executamos`}</span>
              </h1>
            )}
          </motion.div>

          <motion.p variants={itemVariants} className="mt-6 text-lg text-neutral-600 max-w-xl mb-4">
            {mode === "empresa"
              ? "Vestimos a camisa da sua empresa para desenvolver soluções excepcionais, sob medida e com agilidade."
              : "Você traz a ideia. Nós cuidamos de todo o trabalho pesado de planejar, desenvolver e escalar a solução."}
          </motion.p>

          <motion.div variants={itemVariants}>
            <Button href="/quote" variant="arrow">
              Entre em contato
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative z-10 rounded-2xl overflow-hidden shadow-lg"
        >
          <motion.div
            key={mode} 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={
                mode === "empresa"
                  ? "/empresa.png"
                  : "/ideia.png"
              }
              alt="Equipe trabalhando"
              width={590}
              height={380}
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}