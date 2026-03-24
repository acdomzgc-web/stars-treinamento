import { Link } from 'react-router-dom'
import { Instagram, Youtube, Mail } from 'lucide-react'

const LOGO_URL =
  'https://storage.googleapis.com/skip-app-production-bucket/user-attachments/af27e25d-6a45-491b-a52b-d3f49195a037/10b27af8-2c2d-4581-9b16-92c483a90623'

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <img src={LOGO_URL} alt="STARS Elite" className="h-16 w-auto mb-6" />
            <p className="text-muted-foreground max-w-md">
              O sistema de treinamento definitivo para evoluir atletas de Academia, CrossFit e
              Funcional para o status de elite. Desenvolvido por Ricardo Marquez e Allan Pereira.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold uppercase tracking-wider mb-4 text-foreground">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#metodologia"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Metodologia
                </a>
              </li>
              <li>
                <a
                  href="#fundadores"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Fundadores
                </a>
              </li>
              <li>
                <a
                  href="#programas"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Programas & Planilhas
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold uppercase tracking-wider mb-4 text-foreground">
              Contato
            </h4>
            <div className="flex space-x-4 mb-6">
              <a
                href="#"
                className="h-10 w-10 bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors group"
              >
                <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="h-10 w-10 bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors group"
              >
                <Youtube className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="h-10 w-10 bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors group"
              >
                <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
            <p className="text-muted-foreground text-sm">contato@starselite.com.br</p>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} STARS Treinamento Elite. Todos os direitos reservados.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
