import { Instagram, Mail, MapPin } from 'lucide-react'
import logoImg from '@/assets/logo-374d7.jpg'

export default function Footer() {
  return (
    <footer className="bg-secondary/20 border-t border-border pt-20 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <a href="#" className="flex items-center gap-4 mb-6 group">
              <img
                src={logoImg}
                alt="STARS Logo"
                className="h-20 w-20 rounded-full object-cover border-2 border-primary/40 group-hover:border-primary transition-colors shadow-lg"
              />
              <div className="flex flex-col">
                <span className="font-black text-3xl tracking-tight text-foreground uppercase">
                  STARS
                </span>
                <span className="text-primary font-bold tracking-widest text-sm uppercase">
                  Treinamento Elite
                </span>
              </div>
            </a>
            <p className="text-muted-foreground mb-8 max-w-sm text-lg leading-relaxed">
              Sistema de treinamento moderno focado em ajudar atletas a evoluírem para a elite
              esportiva através do modelo de periodização 2:1.
            </p>
            <div className="flex space-x-5">
              <a
                href="https://www.instagram.com/stars.treinamento/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-background border border-border hover:border-primary hover:text-primary transition-all group"
              >
                <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="mailto:sistemadetreinamentostars@gmail.com"
                className="p-3 rounded-full bg-background border border-border hover:border-primary hover:text-primary transition-all group"
              >
                <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-bold text-lg mb-6 text-foreground uppercase tracking-wider">
              Assinatura
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#programs"
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  Planilha Mensal
                </a>
              </li>
              <li>
                <a
                  href="#methodology"
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  Metodologia 2:1
                </a>
              </li>
              <li>
                <a
                  href="#methodology"
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  Estrutura Semanal
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-bold text-lg mb-6 text-foreground uppercase tracking-wider">
              A Empresa
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#founders"
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  Fundadores
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  Resultados
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5541996614962"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-bold text-lg mb-6 text-foreground uppercase tracking-wider">
              Contato
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 text-muted-foreground bg-background/50 p-4 rounded-xl border border-border/50">
                <MapPin className="h-6 w-6 shrink-0 mt-0.5 text-primary" />
                <span className="font-medium">
                  Atendimento Global
                  <br />
                  <span className="text-sm opacity-80">Online & Presencial</span>
                </span>
              </li>
              <li className="flex items-center gap-4 text-muted-foreground bg-background/50 p-4 rounded-xl border border-border/50">
                <Mail className="h-6 w-6 shrink-0 text-primary" />
                <a
                  href="mailto:sistemadetreinamentostars@gmail.com"
                  className="font-medium truncate hover:text-primary transition-colors"
                >
                  sistemadetreinamentostars@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-muted-foreground text-sm font-medium mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} STARS Treinamento Elite. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 text-sm font-medium">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacidade
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
