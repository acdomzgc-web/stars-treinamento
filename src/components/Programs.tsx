import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Programs() {
  const programs = [
    {
      name: 'STARS Competitor',
      price: 'Consulte',
      description: 'Para atletas que buscam a elite do CrossFit nacional e internacional.',
      features: [
        'Planilha de treino diária',
        'Foco em LPO e Ginástica',
        'Estratégia para competições',
        'Feedback detalhado em vídeos',
      ],
    },
    {
      name: 'STARS Fitness',
      price: 'Consulte',
      description: 'Treinamento focado em saúde, estética e condicionamento geral superior.',
      features: [
        'Treino adaptável ao seu nível',
        'Condicionamento metabólico',
        'Prevenção de lesões',
        'Comunidade exclusiva STARS',
      ],
      popular: true,
    },
    {
      name: 'STARS LPO',
      price: 'Consulte',
      description: 'Especialização completa em Levantamento de Peso Olímpico.',
      features: [
        'Foco em Snatch e Clean & Jerk',
        'Trabalho de força base',
        'Exercícios acessórios específicos',
        'Correção técnica minuciosa',
      ],
    },
  ]

  return (
    <section id="programs" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight">
            Programas de <span className="text-primary">Treinamento</span>
          </h2>
          <p className="text-xl text-muted-foreground font-medium">
            Escolha o programa ideal para o seu objetivo e junte-se à nossa comunidade de atletas de
            elite.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {programs.map((program, idx) => (
            <div
              key={idx}
              className={`relative bg-card rounded-[2rem] p-10 flex flex-col transition-all duration-300 ${
                program.popular
                  ? 'border-2 border-primary shadow-2xl shadow-primary/20 scale-100 md:scale-105 z-10'
                  : 'border border-border hover:border-primary/50 hover:shadow-xl'
              }`}
            >
              {program.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest shadow-lg">
                  Mais Procurado
                </div>
              )}
              <h3 className="text-3xl font-black mb-3 uppercase tracking-tight">{program.name}</h3>
              <div className="mb-6">
                <span className="text-2xl font-bold text-muted-foreground">{program.price}</span>
              </div>
              <p className="text-lg text-foreground/80 font-medium mb-10 min-h-[60px] leading-relaxed">
                {program.description}
              </p>

              <ul className="space-y-5 mb-10 flex-1">
                {program.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-4">
                    <div className="bg-primary/20 p-1 rounded-full mt-0.5 shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-medium text-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full h-14 text-lg font-bold rounded-full ${
                  program.popular
                    ? 'bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30'
                    : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'
                }`}
              >
                Começar Agora
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
