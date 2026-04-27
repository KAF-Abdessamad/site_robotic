import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei'
import Robot3D from './Robot3D'
import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-primary-900">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
      </div>

      <div className="section-padding max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="px-4 py-2 rounded-full bg-accent-500/20 border border-accent-500/30">
                <span className="text-accent-400 text-sm font-semibold">Compétition Académique 2026</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">Projet</span>{' '}
              <span className="gradient-text">ATLAS</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-400 mb-4 font-light italic">
              "L'intelligence artificielle au service de l'exploration"
            </p>

            <p className="text-slate-300 text-lg mb-8 leading-relaxed max-w-xl">
              Un robot autonome innovant développé par l'équipe Robotique UPF pour relever 
              les défis de la robotique moderne et repousser les limites de la technologie.
            </p>

            {/* Partner Logos */}
            <div className="flex items-center gap-10 mb-10">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-2xl bg-white flex items-center justify-center p-3 shadow-xl hover:scale-105 transition-transform">
                  <img 
                    src="/logo_club.jpg" 
                    alt="Club Robotique" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-sm text-white/80 mt-3 font-medium">Club Robotique</span>
              </div>
              <div className="h-24 w-px bg-white/30" />
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-2xl bg-white flex items-center justify-center p-3 shadow-xl hover:scale-105 transition-transform">
                  <img 
                    src="/logo_university.jpg" 
                    alt="UPF Université" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-sm text-white/80 mt-3 font-medium">Université</span>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="#about"
                className="px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-xl transition-all transform hover:scale-105"
              >
                Découvrir le projet
              </a>
              <a
                href="#documents"
                className="px-8 py-4 border border-white/30 hover:border-accent-500 text-white hover:text-accent-400 font-semibold rounded-xl transition-all"
              >
                Télécharger
              </a>
            </div>
          </motion.div>

          {/* Right - 3D Robot */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[400px] md:h-[500px] relative"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 to-transparent rounded-3xl" />
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }} className="rounded-3xl">
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <pointLight position={[-10, -10, -10]} intensity={0.5} />
              <Robot3D />
              <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={5} blur={2.5} far={4} />
              <Environment preset="city" />
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
            </Canvas>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <a href="#about" className="text-white/60 hover:text-accent-400 transition-colors">
            <ChevronDown size={32} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
