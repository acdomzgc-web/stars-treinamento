import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

const features = [
  'Periodização completa focada em evolução constante',
  'Treinos adaptáveis: Academia, Box de CrossFit ou Casa',
  'Foco técnico em LPO e movimentos ginásticos',
  'Protocolos de força, resistência e capacidade aeróbica',
  'Acesso direto aos Coaches para dúvidas e ajustes',
  'Comunidade exclusiva de atletas de elite STARS',
]

export function Programs() {
  return (
    <section id="programas" className="py-24 bg-background relative overflow-hidden">
      {/* Dynamic background element */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 w-full lg:max-w-xl">
            <p className="text-primary font-bold uppercase tracking-widest mb-3">Seu Novo Padrão</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight mb-6 text-foreground leading-[1.1]">
              A Planilha
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                STARS Elite
              </span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Sua rota definitiva para alcançar a excelência. Pare de treinar sem propósito e siga
              um método cientificamente embasado e testado por campeões. Nossa planilha entrega a
              estrutura exata que você precisa para quebrar seus limites.
            </p>

            <ul className="space-y-4 mb-10">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 h-5 w-5 rounded-sm bg-primary/20 flex items-center justify-center shrink-0 border border-primary/50">
                    <Check className="h-3.5 w-3.5 text-primary font-bold" />
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="text-lg px-8 py-7 uppercase font-extrabold tracking-widest rounded-none shadow-[0_0_20px_rgba(242,231,213,0.3)] hover:shadow-[0_0_30px_rgba(242,231,213,0.5)] transition-shadow"
              >
                Assinar Planilha
              </Button>
            </div>
          </div>

          <div className="flex-1 w-full relative">
            <div className="aspect-square md:aspect-[4/3] relative rounded-none border border-border overflow-hidden shadow-2xl">
              <img
                src="https://img.usecurling.com/p/800/800?q=training%20gym%20intensity&color=black&dpr=2"
                alt="Treinamento Intenso"
                className="w-full h-full object-cover filter contrast-125 saturate-50"
                crossOrigin="anonymous"
                onError={(e) => {
                  if (!e.currentTarget.src.includes('color=black')) {
                    e.currentTarget.src =
                      'https://img.usecurling.com/p/800/800?q=workout&color=black&dpr=2'
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-transparent to-primary/20 mix-blend-multiply" />

              {/* Overlay UI elements to simulate "Planilha" vibe */}
              <div className="absolute bottom-6 left-6 right-6 bg-background/90 backdrop-blur-md border border-border p-5 hidden md:block">
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <p className="text-xs text-primary uppercase font-bold tracking-wider mb-1">
                      WOD do Dia
                    </p>
                    <h4 className="text-xl font-bold uppercase">Complex de LPO Elite</h4>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-extrabold text-foreground">
                      5 <span className="text-sm font-normal text-muted-foreground">Rounds</span>
                    </p>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground font-mono">
                  <p>1x Squat Snatch (85% RM)</p>
                  <p>2x Overhead Squat</p>
                  <p>15x Chest-to-Bar Pull-ups</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
