import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'

const LOGO_URL =
  'https://storage.googleapis.com/skip-app-production-bucket/user-attachments/af27e25d-6a45-491b-a52b-d3f49195a037/10b27af8-2c2d-4581-9b16-92c483a90623'

export function Hero() {
  const scrollToPrograms = () => {
    document.querySelector('#programas')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToMethodology = () => {
    document.querySelector('#metodologia')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-20 border-b border-border">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://img.usecurling.com/p/1920/1080?q=crossfit%20gym%20dark&color=black&dpr=2"
          alt="Gym Environment"
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          crossOrigin="anonymous"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(242,231,213,0.05)_0%,transparent_50%)]" />
      </div>

      <div className="container relative z-10 text-center px-4 md:px-6 mt-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="opacity-0 animate-fade-in-up">
            <img
              src={LOGO_URL}
              alt="STARS Elite Logo"
              className="w-40 md:w-56 lg:w-64 mx-auto mb-8 drop-shadow-[0_0_30px_rgba(242,231,213,0.15)] filter contrast-125"
              crossOrigin="anonymous"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
          </div>

          <h1 className="opacity-0 animate-fade-in-up delay-100 text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-tighter mb-6 text-foreground drop-shadow-2xl leading-[0.9]">
            Torne-se sua <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-primary/60">
              Melhor Versão
            </span>
          </h1>

          <p className="opacity-0 animate-fade-in-up delay-200 mx-auto max-w-2xl text-lg md:text-xl lg:text-2xl text-muted-foreground mb-12 font-medium">
            O sistema definitivo de treinamento para quem busca evoluir para a elite no CrossFit,
            Treinamento Funcional e Academia.
          </p>

          <div className="opacity-0 animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-5 justify-center w-full sm:w-auto">
            <Button
              size="lg"
              className="text-lg px-8 py-7 uppercase font-bold tracking-widest group rounded-none"
              onClick={scrollToPrograms}
            >
              Começar Treinamento
              <ChevronRight className="ml-2 h-6 w-6 group-hover:translate-x-1.5 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-7 uppercase font-bold tracking-widest rounded-none border-2 hover:bg-secondary"
              onClick={scrollToMethodology}
            >
              A Metodologia
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
