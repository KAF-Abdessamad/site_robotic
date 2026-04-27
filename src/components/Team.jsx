import { motion } from 'framer-motion'
import { Users } from 'lucide-react'

const teamMembers = [
  {
    name: "KAF Abdessamad",
    role: "Responsable Systèmes & Intégration",
    description: "Intégration des sous-systèmes et validation du fonctionnement global du robot.",
    image: "/img_portfolio.jpeg"
  },
  {
    name: "Belghiti Reda",
    role: "Chef de projet",
    description: "Planification du projet et coordination des tâches de l’équipe.",
    image: "/IMG-20260426-WA0011.jpg"
  },
  {
    name: "Saghiri Mehdi",
    role: "Responsable électronique",
    description: "Conception et intégration des circuits et capteurs électroniques.",
    image: "/mehdi.jpeg"
  },
  {
    name: "Brihmat Ismail",
    role: "Responsable programmation IA",
    description: "Développement des algorithmes de perception et de décision.",
    image: "/1722190612080.jpg"
  },
  {
    name: "Mazzour Aymane",
    role: "Responsable programmation",
    description: "Programmation embarquée et gestion du contrôle du robot.",
    image: "/aymane.jpeg"
  },
  {
    name: "Amsaad Aya",
    role: "Responsable documentation",
    description: "Rédaction du rapport et préparation des supports de présentation.",
    image: "/aya.jpeg"
  }
];

export default function Team() {
  return (
    <section id="team" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-primary-900">
        <div className="absolute top-40 right-20 w-80 h-80 bg-accent-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl" />
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
            <Users size={16} className="text-accent-500" />
            <span className="text-accent-400 text-sm font-semibold">Notre Équipe</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Les <span className="gradient-text">Cerveaux</span> d'ATLAS
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Une équipe passionnée de 6 étudiants pluridisciplinaires, 
            unis par l'innovation et l'excellence technique.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-effect rounded-2xl p-6 hover:bg-white/5 transition-all group"
            >
              {/* Avatar */}
              <div className="flex flex-col items-center text-center mb-4">
                <div className="w-28 h-28 rounded-2xl overflow-hidden shadow-xl mb-4 ring-4 ring-accent-500/30">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <span className="text-accent-400 text-sm font-medium">{member.role}</span>
              </div>

              <p className="text-white/60 text-sm text-center">{member.description}</p>

             
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
