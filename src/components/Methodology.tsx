import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Dumbbell, Activity, Flame } from 'lucide-react'

const methods = [
  {
    icon: Dumbbell,
    title: 'Academia (Musculação)',
    desc: 'Construa uma base sólida. Protocolos rigorosos de força e hipertrofia focados em estruturar o corpo para suportar cargas elevadas e prevenir lesões.',
  },
  {
    icon: Flame,
    title: 'CrossFit & LPO',
    desc: 'Domine as técnicas complexas. Levantamento de peso olímpico, ginástica e WODs programados estrategicamente para evoluir seu condicionamento ao nível competitivo.',
  },
  {
    icon: Activity,
    title: 'Treinamento Funcional',
    desc: 'Capacidade de trabalho extrema. Movimentos dinâmicos, resistência cardiovascular e agilidade para transformar você em uma máquina imparável.',
  },
]

export function Methodology() {
  return (
    <section
      id="metodologia"
      className="py-24 bg-background border-b border-border relative overflow-hidden"
    >
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container px-4 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-primary font-bold uppercase tracking-widest mb-3">O Sistema</p>
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight mb-6">
            Metodologia Implacável
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            O STARS não é apenas um treino, é um sistema de evolução. Focamos nos três pilares
            fundamentais do condicionamento físico moderno para forjar atletas completos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {methods.map((method, index) => {
            const Icon = method.icon
            return (
              <Card
                key={index}
                className="bg-secondary/40 border-border/50 hover:bg-secondary/80 hover:border-primary/50 transition-all duration-300 rounded-none group"
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-background flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-border">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold uppercase tracking-wide">
                    {method.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {method.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
