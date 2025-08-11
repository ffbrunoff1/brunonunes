import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Heart, Star, ArrowRight, Sparkles, Quote } from 'lucide-react'

export default function Services() {
  const bookFeatures = [
    {
      icon: Heart,
      title: "Histórias de Amor Profundo",
      description: "Narrativas que exploram as complexidades dos relacionamentos humanos com autenticidade e emoção."
    },
    {
      icon: Sparkles,
      title: "Personagens Envolventes",
      description: "Protagonistas que se conectam com os leitores através de jornadas emocionais transformadoras."
    },
    {
      icon: Quote,
      title: "Reflexões sobre a Vida",
      description: "Histórias que provocam reflexões profundas sobre o amor, a vida e os relacionamentos."
    }
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-romance-light via-white to-romance-light relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-romance-gradient opacity-5 rounded-full translate-x-40 -translate-y-40"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-romance-pink opacity-10 rounded-full -translate-x-32 translate-y-32"></div>

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
            className="inline-flex items-center space-x-2 bg-romance-pink bg-opacity-20 px-6 py-3 rounded-full mb-6"
          >
            <BookOpen className="w-5 h-5 text-romance-pink" />
            <span className="text-romance-pink font-medium">Livros de Romance</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-gray-800 mb-6"
          >
            Histórias que <span className="text-gradient">Tocam</span>
            <br />
            <span className="text-romance-pink">o Coração</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Descobra uma coleção única de romances que exploram as nuances do amor e dos relacionamentos através de narrativas envolventes e emocionantes.
          </motion.p>
        </motion.div>

        {/* Main Featured Book Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-romance-gradient opacity-10 rounded-full -translate-y-24 translate-x-24"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-romance-light opacity-30 rounded-full translate-y-16 -translate-x-16"></div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-romance-gradient rounded-full flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-lg font-semibold text-romance-pink">Coleção Especial</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
                  Livros de Romance por Bruno Nunes
                </h3>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Uma seleção cuidadosamente elaborada de histórias que capturam a essência do amor verdadeiro. Cada livro é uma jornada única através das emoções humanas mais profundas e autênticas.
                </p>
                
                <div className="flex items-center space-x-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-romance-pink text-romance-pink" />
                    ))}
                  </div>
                  <span className="text-gray-600 font-medium">Avaliação dos Leitores</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-romance-gradient text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center space-x-3"
              >
                <span>Adquira já os livros de Bruno Nunes</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="bg-gradient-to-br from-romance-light to-white p-8 rounded-2xl shadow-lg relative"
              >
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-romance-gradient rounded-full flex items-center justify-center mx-auto">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  
                  <blockquote className="text-lg text-gray-700 italic">
                    "Histórias que transformam a nossa compreensão sobre o amor e os relacionamentos"
                  </blockquote>
                  
                  <div className="flex justify-center space-x-2">
                    <div className="w-2 h-2 bg-romance-pink rounded-full"></div>
                    <div className="w-2 h-2 bg-romance-light rounded-full"></div>
                    <div className="w-2 h-2 bg-romance-pink rounded-full"></div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {bookFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col"
            >
              <div className="flex-grow space-y-6">
                <div className="w-14 h-14 bg-romance-gradient rounded-xl flex items-center justify-center">
                  {React.createElement(feature.icon, { className: 'w-7 h-7 text-white' })}
                </div>
                
                <h4 className="text-xl font-bold text-gray-800">
                  {feature.title}
                </h4>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <motion.button
                  whileHover={{ x: 5 }}
                  className="text-romance-pink font-semibold inline-flex items-center space-x-2 hover:text-gray-800 transition-colors duration-300"
                >
                  <span>Saiba mais</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block"
          >
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-romance-gradient text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center space-x-3"
            >
              <BookOpen className="w-6 h-6" />
              <span>Transforme sua visão sobre os relacionamentos</span>
              <ArrowRight className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}