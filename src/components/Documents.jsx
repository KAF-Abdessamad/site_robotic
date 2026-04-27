import { motion } from 'framer-motion'
import { FileText, Download, FileImage, BookOpen } from 'lucide-react'

const documents = [
  {
    icon: BookOpen,
    title: "Rapport Technique",
    description: "Documentation complète du projet, architecture et résultats",
    color: "bg-blue-500"
  },
  {
    icon: FileImage,
    title: "Poster Scientifique",
    description: "Présentation visuelle synthétique du projet ATLAS",
    
    color: "bg-accent-500"
  }
]

export default function Documents() {
  return (
    <section id="documents" className="py-24 relative overflow-hidden">
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
            <FileText size={16} className="text-accent-500" />
            <span className="text-accent-400 text-sm font-semibold">Ressources</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Documents <span className="gradient-text">Officiels</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Téléchargez les documents complets du projet ATLAS pour découvrir 
            tous les détails techniques et scientifiques.
          </p>
        </motion.div>

        {/* Documents Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
          {documents.map((doc, index) => (
            <motion.div
              key={doc.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-effect rounded-2xl p-6 hover:bg-white/5 transition-all group"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl ${doc.color}/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <doc.icon className={`w-7 h-7 ${doc.color.replace('bg-', 'text-')}`} />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{doc.title}</h3>
              <p className="text-slate-400 text-sm mb-6">{doc.description}</p>

              {/* File Name above button (only for poster) */}
              {doc.fileName && (
                <div className="mb-3 p-2 rounded-lg bg-white/5 text-center">
                  <span className="text-slate-400 text-xs font-mono">{doc.fileName}</span>
                </div>
              )}

              {/* Download Button */}
              <a 
                href={`/${doc.fileName}`}
                download={doc.fileName}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary-700 hover:bg-accent-500 text-white font-semibold rounded-xl transition-all group-hover:bg-accent-500 cursor-pointer"
              >
                <Download size={18} />
                <span>Télécharger</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
