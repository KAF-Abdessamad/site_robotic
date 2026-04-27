import { Mail, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 bg-primary-950 border-t border-primary-800">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent-500/20 flex items-center justify-center">
                <span className="text-accent-500 font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold gradient-text">ATLAS</span>
            </div>
            <p className="text-white/60 mb-6 max-w-md">
              Projet de robotique académique développé par l'équipe du Club Robotique 
              de l'Université. ATLAS représente l'excellence en ingénierie et innovation.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-white/60">
                <MapPin size={18} className="text-accent-500 mt-0.5 flex-shrink-0" />
                <span>Club Robotique UPF<br />Université</span>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Mail size={18} className="text-accent-500 flex-shrink-0" />
                <span>atlas@upf.edu</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {currentYear} Projet ATLAS. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-white/50 text-sm">Partenaires:</span>
            <div className="flex items-center gap-4">
              <span className="text-white/70 text-sm font-medium">Club Robotique</span>
              <span className="text-white/30">|</span>
              <span className="text-accent-400 text-sm font-medium">UPF</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
