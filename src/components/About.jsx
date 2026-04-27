import { motion } from 'framer-motion'
import { Target, Lightbulb, Shield, Brain, Globe, Rocket } from 'lucide-react'

const features = [
  {
    icon: Target,
    title: "Précision",
    description: "Navigation autonome avec une précision millimétrique grâce à nos algorithmes avancés."
  },
  {
    icon: Shield,
    title: "Robustesse",
    description: "Conçu pour résister aux conditions les plus exigeantes des compétitions."
  },
  {
    icon: Brain,
    title: "Intelligence",
    description: "IA embarquée pour la prise de décision en temps réel et l'adaptabilité."
  }
]

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-primary-900" />
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
            <Rocket size={16} className="text-accent-500" />
            <span className="text-accent-400 text-sm font-semibold">À propos du projet</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Le Défi <span className="gradient-text">ATLAS</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Une solution robotique innovante développée pour repousser les frontières 
            de l'autonomie et de l'intelligence artificielle.
          </p>
        </motion.div>

        {/* Problem & Solution Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-effect rounded-2xl p-8 hover:border-red-500/30 transition-colors"
          >
            <div className="w-14 h-14 rounded-xl bg-red-500/20 flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-red-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Le Problème</h3>
            <p className="text-slate-400 leading-relaxed">
              Les compétitions de robotique académiques exigent des systèmes capables 
              de naviguer de manière autonome dans des environnements complexes, 
              tout en résolvant des tâches précises sans intervention humaine. 
              Les solutions existantes manquent souvent d'adaptabilité et de robustesse.
            </p>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-effect rounded-2xl p-8 hover:border-green-500/30 transition-colors"
          >
            <div className="w-14 h-14 rounded-xl bg-green-500/20 flex items-center justify-center mb-6">
              <Lightbulb className="w-7 h-7 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Notre Solution</h3>
            <p className="text-slate-400 leading-relaxed">
              ATLAS intègre des algorithmes de vision par ordinateur avancés, 
              une architecture matérielle optimisée et une IA embarquée pour 
              la prise de décision en temps réel. Notre robot s'adapte 
              dynamiquement à son environnement et exécute ses missions avec 
              une précision exceptionnelle.
            </p>
          </motion.div>
        </div>

        {/* Objectives */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Objectifs du Projet</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-effect rounded-xl p-6 hover:bg-white/5 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary-500/20 flex items-center justify-center mb-4 group-hover:bg-primary-500/30 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary-500" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                <p className="text-slate-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Specs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-effect rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Brain className="w-6 h-6 text-accent-500" />
            <h3 className="text-xl font-bold text-white">Spécifications Techniques</h3>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-1">Raspberry Pi 4</div>
              <div className="text-slate-400 text-sm">Unité de contrôle principale</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-1">ROS 2</div>
              <div className="text-slate-400 text-sm">Système d'exploitation robotique</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-1">Python/C++</div>
              <div className="text-slate-400 text-sm">Stack technologique</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-1">Vision AI</div>
              <div className="text-slate-400 text-sm">Caméra + OpenCV + TensorFlow</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
