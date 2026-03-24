import ricardoImg from '@/assets/ricardo-78498.png'
import allanImg from '@/assets/allan-3a68b.png'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Trophy, Award, GraduationCap, Target } from 'lucide-react'

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
          {/* Ricardo Marquez Profile */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-700" />
              <div className="relative rounded-[2rem] overflow-hidden aspect-[3/4] border-2 border-border shadow-2xl bg-card">
                <img
                  src={ricardoImg}
                  alt="Ricardo Marquez"
                  className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-4xl font-black text-foreground mb-2 tracking-tight uppercase">
                    Ricardo Marquez
                  </h3>
                  <p className="text-primary font-bold text-xl tracking-wide">
                    Co-fundador & Head Coach
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-10">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-2xl leading-relaxed text-foreground/90 font-medium border-l-4 border-primary pl-6 py-2">
                  Atleta e coach de CrossFit e levantamento de peso olímpico, com 11 anos de
                  experiência no esporte (desde os 14 anos). Ao longo da minha trajetória, construí
                  resultados relevantes tanto no cenário nacional quanto internacional, competindo
                  em alto nível nas duas modalidades.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <Card className="bg-secondary/20 border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="p-3 bg-primary rounded-xl text-primary-foreground shadow-lg">
                        <Award className="w-7 h-7" />
                      </div>
                      <h4 className="font-bold text-xl uppercase tracking-wide">Certificações</h4>
                    </div>
                    <p className="text-muted-foreground leading-relaxed font-medium text-base">
                      Certificado CrossFit Level 1. Ex-coach nas afiliadas CrossFit Cygnus
                      (Richmond, Kentucky) e CrossFit Thunder Valley (Johnson City, Tennessee).
                      Fundador e head coach da STARS Treinamento.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-secondary/20 border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="p-3 bg-primary rounded-xl text-primary-foreground shadow-lg">
                        <GraduationCap className="w-7 h-7" />
                      </div>
                      <h4 className="font-bold text-xl uppercase tracking-wide">Formação</h4>
                    </div>
                    <p className="text-muted-foreground leading-relaxed font-medium text-base">
                      Atleta bolsista (Full Tuition) na East Tennessee State University. Competidor
                      em nível universitário nos Estados Unidos, imerso em uma das melhores escolas
                      de LPO.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-card rounded-3xl p-8 lg:p-10 border border-border shadow-xl">
                <h4 className="flex items-center gap-3 text-2xl font-black mb-8 border-b border-border pb-4 uppercase">
                  <Trophy className="w-8 h-8 text-primary" />
                  Principais Conquistas
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  {ricardoAchievements.map((achievement, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-4 text-base text-muted-foreground font-medium"
                    >
                      <Target className="w-5 h-5 shrink-0 mt-0.5 text-primary" />
                      <span className="leading-snug">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          {/* Allan Pereira Profile */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1 space-y-10">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h3 className="text-4xl md:text-5xl font-black text-foreground mb-3 hidden lg:block uppercase tracking-tight">
                  Allan Pereira
                </h3>
                <p className="text-primary font-bold text-xl mb-8 hidden lg:block tracking-wide">
                  Co-fundador & Coach Especialista
                </p>
                <p className="text-2xl leading-relaxed text-foreground/90 font-medium border-l-4 border-primary pl-6 py-2">
                  Graduado em Educação Física pela Tuitia do Paraná desde 2018. Coach da Essar e
                  co-fundador da STARS Treinamento, combinando embasamento acadêmico com excelência
                  prática.
                </p>
              </div>

              <div className="grid gap-6">
                <Card className="bg-secondary/20 border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="p-3 bg-primary rounded-xl text-primary-foreground shadow-lg">
                        <Target className="w-7 h-7" />
                      </div>
                      <h4 className="font-bold text-xl uppercase tracking-wide">Especializações</h4>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-lg font-medium">
                      Especialista em levantamento de peso olímpico (LPO), core training, kettlebell
                      training e High-Intensity Interval Training (HIIT).
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-secondary/20 border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="p-3 bg-primary rounded-xl text-primary-foreground shadow-lg">
                        <Trophy className="w-7 h-7" />
                      </div>
                      <h4 className="font-bold text-xl uppercase tracking-wide">
                        Experiência Atlética
                      </h4>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-lg font-medium">
                      Atleta de CrossFit competitivo desde 2018, com participação marcante em três
                      edições do PCB (Powerade CrossFit Brazil) e do renomado torneio Copa Sur.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2 relative group">
              <div className="absolute -inset-4 bg-gradient-to-bl from-primary/30 to-secondary/30 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-700" />
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] lg:aspect-[3/4] border-2 border-border shadow-2xl bg-card">
                <img
                  src={allanImg}
                  alt="Allan Pereira"
                  className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90 lg:hidden" />
                <div className="absolute bottom-0 left-0 right-0 p-8 lg:hidden">
                  <h3 className="text-4xl font-black text-foreground mb-2 tracking-tight uppercase">
                    Allan Pereira
                  </h3>
                  <p className="text-primary font-bold text-xl tracking-wide">
                    Co-fundador & Coach Especialista
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
