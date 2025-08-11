import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Pen, BookHeart, Sparkles } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-romance-light rounded-full opacity-10 -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-romance-gradient opacity-5 rounded-full translate-x-48 translate-y-48"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-romance-light bg-opacity-20 px-6 py-3 rounded-full mb-6"
          >
            <Pen className="w-5 h-5 text-romance-pink" />
            <span className="text-romance-pink font-medium">Sobre o Autor</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-gray-800 mb-6"
          >
            A Arte de <span className="text-gradient">Escrever</span>
            <br />
            <span className="text-romance-pink">sobre o Amor</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Bruno Nunes é um autor dedicado a explorar as nuances do amor e dos relacionamentos através de histórias envolventes e emocionantes que transformam a perspectiva sobre a vida.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-gray-800">
                Capturando Emoções Humanas
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Com uma habilidade única para capturar emoções humanas de forma autêntica, Bruno cria narrativas que prendem a atenção e fazem refletir sobre os relacionamentos mais profundos da vida.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Cada história é cuidadosamente tecida para tocar o coração dos leitores, oferecendo uma jornada de autodescoberta através do poder transformador do amor.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-gradient-to-br from-romance-light to-white p-6 rounded-2xl">
                <Heart className="w-10 h-10 text-romance-pink mb-4" />
                <h4 className="font-bold text-gray-800 mb-2">Emoções Autênticas</h4>
                <p className="text-sm text-gray-600">Histórias que refletem a verdade dos sentimentos humanos</p>
              </div>
              
              <div className="bg-gradient-to-br from-white to-romance-light p-6 rounded-2xl">
                <BookHeart className="w-10 h-10 text-romance-pink mb-4" />
                <h4 className="font-bold text-gray-800 mb-2">Narrativas Envolventes</h4>
                <p className="text-sm text-gray-600">Tramas que capturam e mantêm a atenção do leitor</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-romance-gradient text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center space-x-2"
              >
                <BookHeart className="w-5 h-5" />
                <span>Explore os Livros</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 1, 0]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-romance-gradient rounded-full opacity-10 -translate-y-20 translate-x-20"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-romance-light rounded-full opacity-20 translate-y-16 -translate-x-16"></div>
                
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-romance-gradient rounded-full mx-auto">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  
                  <blockquote className="text-center">
                    <p className="text-lg text-gray-700 italic mb-4">
                      "O amor verdadeiro não é apenas um sentimento, é uma descoberta constante de quem somos quando estamos com a pessoa certa."
                    </p>
                    <footer className="text-romance-pink font-semibold">
                      — Bruno Nunes
                    </footer>
                  </blockquote>
                  
                  <div className="flex justify-center space-x-4">
                    <div className="w-3 h-3 bg-romance-pink rounded-full"></div>
                    <div className="w-3 h-3 bg-romance-light rounded-full"></div>
                    <div className="w-3 h-3 bg-romance-pink rounded-full"></div>
                  </div>
                </div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  x: [0, 10, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -top-6 -left-6 w-12 h-12 bg-romance-light rounded-full flex items-center justify-center"
              >
                <Heart className="w-6 h-6 text-romance-pink" />
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, 15, 0],
                  x: [0, -8, 0]
                }}
                transition={{ 
                  duration: 7, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute -bottom-4 -right-4 w-8 h-8 bg-romance-pink rounded-full opacity-80"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}