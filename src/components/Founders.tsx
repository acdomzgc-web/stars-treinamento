import ricardoImg from '@/assets/ricardo-78498.png'
import allanImg from '@/assets/allan-3a68b.png'
import { Badge } from '@/components/ui/badge'
import FounderProfile from '@/components/FounderProfile'

export default function Founders() {
  const ricardoAchievements = [
    'Atleta bolsista (Full Tuition) na East Tennessee State University',
    '3º lugar no Campeonato Nacional Sub-25 dos Estados Unidos (até 89kg)',
    '4º lugar no snatch no campeonato universitário dos EUA',
    'Classificado para o American Open Finals 2024',
    'Campeão do Stone Age Weightlifting 2024 e do Handle Barbell 2025 (até 89kg)',
    '2º lugar no LPO Sul e 2º lugar no Campeonato Gaúcho sub-16',
    'Bicampeão do Legacy Series (2024 e 2025)',
    'Vice-campeão do BOP Games 2024',
    'Campeão da CF League em equipes (2026)',
    'Atleta semifinalista mundial (102º lugar na semifinal online de 2025)',
    'Wodapalooza RX: 11º lugar (2024) e 7º lugar (2025)',
    'NorCal Classic 2025 (30º lugar)',
    'Semifinalista por equipes no TFX 2025 (CrossFit Kinesis Black)',
    'Atleta convidado para o Brasília Fitness Open 2025',
  ]

  const allanAchievements = [
    'Campeão do Monster Games',
    'Campeão da CF League',
    'Campeão do Braves',
    'Atleta Elite do TCB (2023, 2024, 2025)',
    'Atleta da Copa Sur 2025',
  ]

  return (
    <section id="founders" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-secondary/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Badge
            variant="outline"
            className="mb-6 border-primary text-primary px-5 py-2 text-sm uppercase tracking-widest font-bold bg-primary/5"
          >
            Nossos Fundadores
          </Badge>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 uppercase">
            Liderança <span className="text-primary">Comprovada</span>
          </h2>
          <p className="text-xl text-muted-foreground font-medium">
            Conheça a trajetória e o conhecimento prático dos atletas e treinadores que construíram
            a metodologia STARS.
          </p>
        </div>

        <div className="space-y-32">
          <FounderProfile
            name="Ricardo Marquez"
            role="Co-fundador | Head Coach LPO"
            image={ricardoImg}
            bio="Atleta e coach de CrossFit e levantamento de peso olímpico, com 11 anos de experiência no esporte (desde os 14 anos). Ao longo da minha trajetória, construí resultados relevantes tanto no cenário nacional quanto internacional, competindo em alto nível nas duas modalidades."
            certifications="Certificado CrossFit Level 1. Ex-coach nas afiliadas CrossFit Cygnus (Richmond, Kentucky) e CrossFit Thunder Valley (Johnson City, Tennessee). Fundador e head coach da STARS Treinamento."
            education="Atleta bolsista (Full Tuition) na East Tennessee State University. Competidor em nível universitário nos Estados Unidos, imerso em uma das melhores escolas de LPO."
            achievements={ricardoAchievements}
          />

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <FounderProfile
            name="Allan Pereira"
            role="Co-fundador | Head Coach Condicionamento"
            image={allanImg}
            bio="Aos 35 anos, sou reconhecido como um dos principais nomes do CrossFit no Paraná e na região Sul do Brasil. Destaco-me pela intensidade, disciplina e consistência dentro e fora das competições. Hoje, dedico-me a desenvolver atletas através da metodologia Stars, ajudando pessoas a alcançarem alta performance e evolução real."
            certifications="Kettlebell Trainer, HIIT e Core Training. Ampla experiência na preparação física voltada para performance, resistência e condicionamento extremo."
            education="Bacharelado em Educação Física pela Universidade Tuiuti do Paraná (2018). Sólida atuação no treinamento de alta performance."
            achievements={allanAchievements}
            imageRight={true}
            cref="CREF 032265-G/PR"
          />
        </div>
      </div>
    </section>
  )
}
