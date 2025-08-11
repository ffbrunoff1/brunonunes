import React from 'react'
import { motion } from 'framer-motion'
import { Heart, BookOpen, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-gradient-to-br from-romance-light via-white to-romance-light pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center space-x-3"
            >
              <Heart className="w-8 h-8 text-romance-pink" />
              <span className="text-lg font-medium text-gray-600">Autor de Romance</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl lg:text-7xl font-bold leading-tight"
            >
              <span className="text-gradient">Bruno Nunes</span>
              <br />
              <span className="text-gray-800">Descubra o</span>
              <br />
              <span className="text-romance-pink">Amor Verdadeiro</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl text-gray-600 leading-relaxed max-w-lg"
            >
              Embarque em uma jornada de romance e autodescoberta através de histórias que tocam o coração e provocam reflexões sobre a vida e os relacionamentos.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-romance-gradient text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Adquira já os livros de Bruno Nunes
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border-2 border-romance-pink text-romance-pink font-semibold rounded-full hover:bg-romance-pink hover:text-white transition-all duration-300"
              >
                Conheça o Autor
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex items-center space-x-6 pt-4"
            >
              <div className="flex items-center space-x-2">
                <BookOpen className="w-6 h-6 text-romance-pink" />
                <span className="text-gray-600">Histórias Envolventes</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-6 h-6 text-romance-pink" />
                <span className="text-gray-600">Emoções Autênticas</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-romance-gradient rounded-full opacity-20 -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-romance-gradient-reverse rounded-full opacity-20 translate-y-12 -translate-x-12"></div>
                
                <div className="relative z-10 text-center space-y-6">
                  <div className="w-20 h-20 bg-romance-gradient rounded-full flex items-center justify-center mx-auto">
                    <Heart className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800">
                    Transforme sua visão sobre os relacionamentos
                  </h3>
                  
                  <p className="text-gray-600">
                    "As palavras de Bruno Nunes capturam emoções humanas de forma autêntica, criando narrativas que prendem a atenção e fazem refletir."
                  </p>
                  
                  <div className="flex justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-romance-pink text-romance-pink" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Background decorative elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-10 -right-10 w-32 h-32 border-4 border-romance-light rounded-full opacity-30"
            ></motion.div>
            
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-10 -left-10 w-24 h-24 border-4 border-romance-pink rounded-full opacity-20"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}