"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, CheckCircle, Loader2 } from 'lucide-react';

// Tipagem dos dados do formulário
interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

// Tipagem dos erros
interface FormErrors {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Máscara de Telefone (Brasil)
  const maskPhone = (value: string) => {
    return value
      .replace(/\D/g, '') // Remove tudo que não é dígito
      .replace(/^(\d{2})(\d)/, '($1) $2') // Coloca parênteses no DDD
      .replace(/(\d{5})(\d)/, '$1-$2') // Coloca hífen no número
      .replace(/(-\d{4})\d+?$/, '$1'); // Limita o tamanho
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Se for o campo telefone, aplica a máscara
    const formattedValue = name === 'phone' ? maskPhone(value) : value;

    setFormData(prev => ({ ...prev, [name]: formattedValue }));
    
    // Limpa o erro do campo específico assim que o usuário começa a digitar
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  // Função de Validação
  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) newErrors.name = "O nome é obrigatório.";
    if (!formData.company.trim()) newErrors.company = "O nome da empresa é obrigatório.";
    
    if (!formData.email.trim()) {
      newErrors.email = "O e-mail é obrigatório.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Digite um e-mail válido.";
    }

    // Valida se tem pelo menos 14 caracteres: (XX) XXXXX-XXXX
    if (!formData.phone.trim()) {
      newErrors.phone = "O celular é obrigatório.";
    } else if (formData.phone.length < 14) {
      newErrors.phone = "Digite um número de celular válido.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Conte-nos um pouco sobre o projeto.";
    } else if (formData.message.length < 10) {
      newErrors.message = "A descrição deve ter pelo menos 10 caracteres.";
    }

    setErrors(newErrors);
    // Retorna true se não houver chaves de erro no objeto
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulação de envio para API (ex: 2 segundos)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Resetar formulário após sucesso (opcional)
      setFormData({ name: '', company: '', email: '', phone: '', message: '' });
      
      // Remove a mensagem de sucesso após alguns segundos
      setTimeout(() => setIsSuccess(false), 5000);
    }, 2000);
  };

  return (
    <section className="mt-10 w-full py-20 px-4 flex justify-center bg-[#efefef]">
      <div className="w-full max-w-2xl bg-white border border-slate-100 rounded-2xl shadow-lg p-8 md:p-12">
        
        {/* Cabeçalho do Card */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Tem um <span className="text-[#38b6ff]">{`projeto`}</span> em mente?
          </h2>
        </div>

        {isSuccess ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-10 text-center space-y-4"
          >
            <CheckCircle className="w-16 h-16 text-[#007cc4]" />
            <h3 className="text-2xl font-bold text-slate-800">Mensagem Enviada!</h3>
            <p className="text-slate-500">Nossa equipe entrará em contato em breve.</p>
            <button 
              onClick={() => setIsSuccess(false)}
              className="mt-4 text-[#007cc4] font-medium hover:underline"
            >
              Enviar outra mensagem
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Campo Nome */}
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-slate-700 block">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Digite seu nome"
                className={`w-full bg-slate-100 border rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all
                  ${errors.name ? 'border-red-500 focus:ring-red-200' : 'border-transparent focus:ring-blue-200 focus:bg-white'}
                `}
              />
              <ErrorMessage message={errors.name} />
            </div>

            {/* Campo Empresa */}
            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-medium text-slate-700 block">
                Nome da Empresa
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Digite o nome da sua empresa"
                className={`w-full bg-slate-100 border rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all
                  ${errors.company ? 'border-red-500 focus:ring-red-200' : 'border-transparent focus:ring-blue-200 focus:bg-white'}
                `}
              />
              <ErrorMessage message={errors.company} />
            </div>

            {/* Campo Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-700 block">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Digite seu melhor email"
                className={`w-full bg-slate-100 border rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all
                  ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-transparent focus:ring-blue-200 focus:bg-white'}
                `}
              />
              <ErrorMessage message={errors.email} />
            </div>

            {/* Campo Celular */}
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium text-slate-700 block">
                Celular
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                maxLength={15} // Limita caracteres para máscara (11) 99999-9999
                placeholder="(00) 00000-0000"
                className={`w-full bg-slate-100 border rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all
                  ${errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-transparent focus:ring-blue-200 focus:bg-white'}
                `}
              />
              <ErrorMessage message={errors.phone} />
            </div>

            {/* Campo Mensagem */}
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-700 block">
                Conte-nos sobre seu projeto
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Conte-nos sobre seu projeto"
                className={`w-full bg-slate-100 border rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all resize-none
                  ${errors.message ? 'border-red-500 focus:ring-red-200' : 'border-transparent focus:ring-blue-200 focus:bg-white'}
                `}
              />
              <ErrorMessage message={errors.message} />
            </div>

            {/* Botão de Enviar */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="cursor-pointer w-full bg-[#38b6ff] hover:bg-[#007cc4] text-white font-semibold py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-4 shadow-lg hover:shadow-xl"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin w-5 h-5" />
                  Enviando...
                </>
              ) : (
                "Enviar"
              )}
            </button>

          </form>
        )}
      </div>
    </section>
  );
};

// Componente para exibir erros com animação
const ErrorMessage: React.FC<{ message?: string }> = ({ message }) => {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          className="flex items-center gap-1 text-red-500 text-xs mt-1"
        >
          <AlertCircle size={12} />
          <span>{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactForm;