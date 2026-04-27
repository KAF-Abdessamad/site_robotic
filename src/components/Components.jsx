import { motion } from 'framer-motion'
import { Cpu, CircuitBoard, Eye, Radio, Cog, Zap } from 'lucide-react'

const components = [
  {
    name: "Raspberry Pi 4",
    category: "Unité de Contrôle",
    description: "Ordinateur monocarte performant servant de cerveau central pour le traitement des données et la prise de décision.",
    specs: "4GB RAM | Quad Core | WiFi/Bluetooth",
    image: "/composant_robot/Raspberry-Pi.webp",
    icon: Cpu
  },
  {
    name: "ESP32 DevKit",
    category: "Microcontrôleur",
    description: "Gestion des capteurs et communication sans fil pour le contrôle en temps réel des actionneurs.",
    specs: "Dual Core | WiFi/Bluetooth | 240MHz",
    image: "/composant_robot/ESP_32_DEUKITUI.jpg",
    icon: CircuitBoard
  },
  {
    name: "Lidar",
    category: "Navigation",
    description: "Capteur de distance laser pour la cartographie 3D et l'évitement d'obstacles en temps réel.",
    specs: "360° | 12m Range | 10Hz",
    image: "/composant_robot/lidar.jpg",
    icon: Eye
  },
  {
    name: "Capteurs Infrarouge",
    category: "Détection",
    description: "Détection de proximité et suivi de ligne pour une navigation précise et autonome.",
    specs: "2-30cm Range | Digital/Analog",
    image: "/composant_robot/infrarouge.jpg",
    icon: Radio
  },
  {
    name: "Driver L298N",
    category: "Motorisation",
    description: "Contrôle de deux moteurs DC avec variation de vitesse PWM et protection thermique intégrée.",
    specs: "2A/Channel | 7.5-12V | H-Bridge",
    image: "/composant_robot/driver_motor_l298n.jpg",
    icon: Zap
  },
  {
    name: "Micro Servo",
    category: "Actionneurs",
    description: "Contrôle précis de l'orientation des capteurs et mécanismes de manipulation.",
    specs: "180° Range | 9g | 1.8kg/cm",
    image: "/composant_robot/micro_servo.jpg",
    icon: Cog
  }
]

export default function Components() {
  return (
    <section id="components" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-primary-900">
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-10 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl" />
      </div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-500/50 to-transparent" />

      <div className="section-padding max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/20 mb-6">
            <Cpu size={16} className="text-accent-500" />
            <span className="text-accent-400 text-sm font-semibold">Architecture Technique</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Composants <span className="gradient-text">du Robot</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Découvrez l'électronique et les capteurs qui donnent vie à ATLAS 
            et lui permettent d'interagir avec son environnement.
          </p>
        </motion.div>

        {/* Components Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {components.map((component, index) => (
            <motion.div
              key={component.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-effect rounded-2xl overflow-hidden hover:bg-white/5 transition-all group"
            >
              {/* Image Container */}
              <div className="relative h-48 bg-white flex items-center justify-center p-4 overflow-hidden">
                <img 
                  src={component.image} 
                  alt={component.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
                {/* Category Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-accent-500/90 text-white text-xs font-semibold">
                  {component.category}
                </div>
                {/* Icon Overlay */}
                <div className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-primary-900/80 flex items-center justify-center">
                  <component.icon size={20} className="text-accent-400" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-2">{component.name}</h3>
                <p className="text-white/60 text-sm mb-3 leading-relaxed">
                  {component.description}
                </p>
                {/* Specs */}
                <div className="pt-3 border-t border-white/10">
                  <span className="text-xs text-accent-400 font-mono">{component.specs}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Architecture Diagram Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 glass-effect rounded-2xl p-8"
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">Architecture Système</h3>
            <p className="text-white/60">Flux de données et interconnexions des composants</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="p-4 rounded-xl bg-primary-800/50">
              <Cpu className="w-8 h-8 text-accent-500 mx-auto mb-2" />
              <h4 className="text-white font-semibold">Couche Contrôle</h4>
              <p className="text-white/50 text-sm mt-1">Raspberry Pi + ESP32</p>
            </div>
            <div className="p-4 rounded-xl bg-primary-800/50">
              <Eye className="w-8 h-8 text-accent-500 mx-auto mb-2" />
              <h4 className="text-white font-semibold">Couche Perception</h4>
              <p className="text-white/50 text-sm mt-1">Lidar + Capteurs IR</p>
            </div>
            <div className="p-4 rounded-xl bg-primary-800/50">
              <Zap className="w-8 h-8 text-accent-500 mx-auto mb-2" />
              <h4 className="text-white font-semibold">Couche Action</h4>
              <p className="text-white/50 text-sm mt-1">Moteurs + Servos</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
