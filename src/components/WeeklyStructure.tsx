import {
  CheckCircle2,
  Target,
  Activity,
  Dumbbell,
  Timer,
  Flame,
  Waves,
  Heart,
  Shield,
  RefreshCw,
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export default function WeeklyStructure() {
  const components = [
    {
      title: 'Resistência Muscular',
      freq: '2x/sem',
      desc: '3–6 mov. antagonistas, ritmo rápido, cargas múltiplas, descanso min 1:1.',
      obj: 'Melhorar resistência muscular local',
      icon: <Activity className="w-6 h-6" />,
    },
    {
      title: 'VO₂ Max',
      freq: '2x/sem',
      desc: 'Movimento contínuo, ritmo sub-máximo (ex: Wall balls, bike, burpees).',
      obj: 'Capacidade cardiovascular',
      icon: <Heart className="w-6 h-6" />,
    },
    {
      title: 'Finishers de Skill',
      freq: '2x/sem',
      desc: 'Peças curtas < 5 min. (ex: Devil’s press, peg board, pullover).',
      obj: 'Manutenção de skill sem fadiga',
      icon: <Target className="w-6 h-6" />,
    },
    {
      title: 'Estilo Competição',
      freq: '2x/sem',
      desc: 'Esforços de 8–20 min. Simulação de qualifiers e campeonatos presenciais.',
      obj: 'Pacing e execução sob fadiga',
      icon: <Flame className="w-6 h-6" />,
    },
    {
      title: 'Sessão Aeróbica Longa',
      freq: '1x/sem',
      desc: '25+ min de movimentos monoestruturais (bike, row, run).',
      obj: 'Base aeróbica',
      icon: <Waves className="w-6 h-6" />,
    },
    {
      title: 'Pacing / Repetibilidade',
      freq: '1x/sem',
      desc: '2 rounds de 8–20 min com 5–10 min de descanso ativo.',
      obj: 'Repetibilidade de score',
      icon: <RefreshCw className="w-6 h-6" />,
    },
    {
      title: 'Força / Weightlifting',
      freq: '2x/sem',
      desc: 'Squat, deadlift, press e variações de LPO.',
      obj: 'Força absoluta',
      icon: <Dumbbell className="w-6 h-6" />,
    },
    {
      title: 'Acessórios',
      freq: '2x/sem',
      desc: 'Baixa intensidade + pliometria.',
      obj: 'Estabilidade, potência e suporte',
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: 'Core',
      freq: '2x/sem',
      desc: 'Trabalho focado em estabilidade e força de tronco.',
      obj: 'Midline stability',
      icon: <CheckCircle2 className="w-6 h-6" />,
    },
    {
      title: 'Zone 2',
      freq: '13x/sem',
      desc: 'Trabalho aeróbico diário de baixa intensidade.',
      obj: 'Recuperação e base aeróbica',
      icon: <Timer className="w-6 h-6" />,
    },
  ]

  return (
    <section className="py-24 bg-secondary/5">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight">
            Estrutura Semanal <span className="text-primary">STARS</span>
          </h2>
          <p className="text-xl text-muted-foreground font-medium">
            Os 10 componentes essenciais cuidadosamente distribuídos para forjar atletas de elite.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-20">
          {components.map((comp, idx) => (
            <Card
              key={idx}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-5">
                  <div className="p-2.5 bg-primary/10 text-primary rounded-xl group-hover:scale-110 transition-transform duration-300">
                    {comp.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full">
                    {comp.freq}
                  </span>
                </div>
                <h3 className="text-lg font-black mb-3 uppercase tracking-tight leading-tight min-h-[44px]">
                  {comp.title}
                </h3>
                <p className="text-muted-foreground text-sm font-medium mb-5 min-h-[60px] leading-relaxed">
                  {comp.desc}
                </p>
                <div className="pt-4 border-t border-border/50">
                  <p className="text-xs font-bold text-primary flex items-start gap-2 uppercase tracking-wide">
                    <Target className="w-4 h-4 shrink-0 mt-0.5" />
                    <span className="leading-snug">{comp.obj}</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-primary text-primary-foreground rounded-[2rem] p-10 md:p-12 text-center max-w-5xl mx-auto shadow-2xl shadow-primary/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10 mix-blend-overlay pointer-events-none" />
          <h3 className="text-3xl font-black uppercase mb-4 tracking-wide relative z-10">
            Equilíbrio da Semana de Treino
          </h3>
          <p className="text-lg md:text-xl font-medium opacity-90 leading-relaxed max-w-3xl mx-auto relative z-10">
            A distribuição inteligente desses 10 elementos garante que você desenvolva todas as vias
            metabólicas e habilidades necessárias para o CrossFit de alto rendimento, otimizando a
            evolução e minimizando o risco de overtraining.
          </p>
        </div>
      </div>
    </section>
  )
}
