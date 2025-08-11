import React from 'react'
import { motion } from 'framer-motion'
import { Heart, BookOpen, Mail, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-romance-pink opacity-10 rounded-full -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-romance-light opacity-5 rounded-full translate-x-40 translate-y-40"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="flex items-center space-x-3">
                <img 
                  src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/brunonunes/brunonunes-logo-full-2025-08-11T22-30-07-213Z.svg"
                  alt="Bruno Nunes"
                  className="h-12 w-auto brightness-0 invert"
                />
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                Autor dedicado a explorar as nuances do amor e dos relacionamentos através de histórias envolventes que tocam o coração e provocam reflexões sobre a vida.
              </p>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-romance-pink" />
                  <span className="text-gray-300">Histórias Autênticas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-5 h-5 text-romance-pink" />
                  <span className="text-gray-300">Romance Literário</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h4 className="text-xl font-bold text-white">Navegação</h4>
              <nav className="space-y-3">
                {[
                  { name: 'Início', id: 'hero' },
                  { name: 'Sobre o Autor', id: 'about' },
                  { name: 'Livros', id: 'services' },
                  { name: 'Contato', id: 'contact' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block text-gray-300 hover:text-romance-pink transition-colors duration-300 text-left"
                  >
                    {item.name}
                  </button>
                ))}
              </nav>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h4 className="text-xl font-bold text-white">Conecte-se</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-romance-pink" />
                  <span className="text-gray-300">Entre em contato</span>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('contact')}
                  className="w-full px-6 py-3 bg-romance-gradient text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  Enviar Mensagem
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 py-12"
        >
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                Transforme sua visão sobre os <span className="text-gradient">relacionamentos</span>
              </h3>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Descubra histórias que capturam a essência do amor verdadeiro e explore as emoções humanas mais profundas.
              </p>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-romance-gradient text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center space-x-3"
            >
              <BookOpen className="w-6 h-6" />
              <span>Adquira já os livros de Bruno Nunes</span>
              <Heart className="w-6 h-6" />
            </motion.button>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm"
            >
              © 2024 Bruno Nunes. Todos os direitos reservados.
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              <span className="text-gray-400 text-sm">
                Criado com{' '}
                <a 
                  href="https://papum.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-romance-pink hover:text-romance-light transition-colors duration-300 font-medium"
                >
                  Papum
                </a>
              </span>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToTop}
                className="w-10 h-10 bg-romance-gradient rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300"
              >
                <ArrowUp className="w-5 h-5 text-white" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}