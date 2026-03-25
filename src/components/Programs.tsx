import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Programs() {
  const features = [
    'Acesso diário à planilha completa',
    'Periodização baseada no Modelo 2:1',
    'Estrutura com os 10 componentes essenciais',
    'Foco no gerenciamento de fadiga e LPO',
    'Ajustes estratégicos para competições',
  ]

  return (
    <section id="programs" className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight">
            Junte-se à <span className="text-primary">Elite</span>
          </h2>
          <p className="text-xl text-muted-foreground font-medium">
            Tenha acesso à nossa planilha de treinamento com a metodologia completa estruturada para
            a sua evolução contínua.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="relative bg-card rounded-[2rem] p-10 md:p-12 flex flex-col items-center text-center border-2 border-primary shadow-2xl shadow-primary/20 scale-100 md:scale-105 z-10 overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20 transition-transform duration-1000 group-hover:scale-150 pointer-events-none" />

            <div className="bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-black uppercase tracking-widest mb-8 relative z-10">
              Plano Único
            </div>

            <h3 className="text-3xl md:text-4xl font-black mb-6 uppercase tracking-tight relative z-10">
              Assinatura da Planilha
            </h3>

            <div className="mb-10 flex items-baseline justify-center gap-1.5 relative z-10">
              <span className="text-3xl font-bold text-muted-foreground">R$</span>
              <span className="text-7xl font-black text-foreground tracking-tighter">150</span>
              <span className="text-xl font-medium text-muted-foreground">/mês</span>
            </div>

            <ul className="space-y-5 mb-12 w-full text-left relative z-10">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-4">
                  <div className="bg-primary/20 p-1.5 rounded-full shrink-0">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground/90 text-lg">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              asChild
              className="w-full h-16 text-xl font-black uppercase tracking-wide rounded-full bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30 group-hover:shadow-primary/50 transition-all relative z-10"
            >
              <a href="https://wa.me/5541996614962" target="_blank" rel="noopener noreferrer">
                Assinar Agora
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
