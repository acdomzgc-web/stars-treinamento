import { ArrowRight, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import logoImg from '@/assets/logo-374d7.jpg'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-secondary/80 z-10" />
        <img
          src="https://img.usecurling.com/p/1920/1080?q=crossfit%20gym"
          alt="CrossFit Gym"
          className="w-full h-full object-cover opacity-20 mix-blend-overlay grayscale"
        />
      </div>

      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 flex justify-center animate-fade-in-up">
            <div className="relative inline-block group">
              <div className="absolute inset-0 bg-primary/30 blur-2xl rounded-full group-hover:bg-primary/50 transition-all duration-500" />
              <img
                src={logoImg}
                alt="STARS Treinamento Elite"
                className="relative w-36 h-36 md:w-48 md:h-48 object-cover rounded-full border-4 border-primary shadow-2xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 animate-fade-in-up uppercase"
            style={{ animationDelay: '100ms' }}
          >
            <span className="block text-foreground drop-shadow-sm">Alcance a</span>
            <span className="block text-primary drop-shadow-sm mt-2">Elite do Esporte</span>
          </h1>

          <p
            className="mt-6 text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-up font-medium"
            style={{ animationDelay: '200ms' }}
          >
            Sistema de treinamento moderno com periodização 2:1, projetado para gerenciar fadiga e
            maximizar sua performance.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: '300ms' }}
          >
            <Button asChild size="lg" className="text-lg px-8 py-6 rounded-full group font-bold">
              <a href="#programs">
                Assinar Planilha
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 rounded-full border-primary/30 hover:bg-primary/10 font-bold bg-background/50 backdrop-blur-sm"
            >
              <a href="#methodology">Conheça a Metodologia</a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <a
          href="#methodology"
          className="text-muted-foreground hover:text-primary transition-colors p-2 bg-background/50 rounded-full backdrop-blur-sm border border-border/50"
        >
          <ChevronDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  )
}
