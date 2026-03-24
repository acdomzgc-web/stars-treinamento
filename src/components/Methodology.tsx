import { Dumbbell, Target, Timer, TrendingUp } from 'lucide-react'
import logoImg from '@/assets/logo-374d7.jpg'

export default function Methodology() {
  const features = [
    {
      title: 'Periodização Avançada',
      description:
        'Planejamento estruturado para picos de performance nas principais competições do ano, utilizando base científica.',
      icon: <Timer className="w-10 h-10 text-primary-foreground" />,
    },
    {
      title: 'Foco em LPO',
      description:
        'Técnica refinada e aumento de carga constante no Levantamento de Peso Olímpico com nossa expertise internacional.',
      icon: <Dumbbell className="w-10 h-10 text-primary-foreground" />,
    },
    {
      title: 'Condicionamento Extremo',
      description:
        'Capacidade aeróbia e anaeróbia desenvolvida para suportar o volume e a intensidade do esporte de elite.',
      icon: <TrendingUp className="w-10 h-10 text-primary-foreground" />,
    },
    {
      title: 'Métricas e Ajustes',
      description:
        'Análise constante de resultados para ajustes finos no programa de treinamento individualizado.',
      icon: <Target className="w-10 h-10 text-primary-foreground" />,
    },
  ]

  return (
    <section
      id="methodology"
      className="py-24 bg-secondary/10 border-y border-border relative overflow-hidden"
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none w-[600px] h-[600px] md:w-[800px] md:h-[800px]">
        <img
          src={logoImg}
          alt="STARS Watermark"
          className="w-full h-full object-cover rounded-full grayscale mix-blend-multiply"
        />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <img
            src={logoImg}
            alt="STARS Logo"
            className="w-20 h-20 md:w-24 md:h-24 rounded-full mx-auto mb-8 border-4 border-primary/20 shadow-xl"
          />
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight">
            A Nossa <span className="text-primary">Metodologia</span>
          </h2>
          <p className="text-xl text-muted-foreground font-medium">
            Desenvolvida ao longo de mais de uma década de experiência no esporte de alto
            rendimento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-card p-10 rounded-[2rem] border border-border hover:border-primary/50 transition-all duration-300 shadow-xl group hover:-translate-y-2"
            >
              <div className="bg-primary w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
