import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const RICARDO_IMG =
  'https://storage.googleapis.com/skip-app-production-bucket/user-attachments/af27e25d-6a45-491b-a52b-d3f49195a037/88a291d9-e31b-4cd3-a006-8dce2fc5cce3'
const ALLAN_IMG =
  'https://storage.googleapis.com/skip-app-production-bucket/user-attachments/af27e25d-6a45-491b-a52b-d3f49195a037/f3da2f63-1250-484d-ba90-50bba20d6f45'

export function Founders() {
  return (
    <section id="fundadores" className="py-24 bg-secondary/20 border-b border-border">
      <div className="container px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-primary font-bold uppercase tracking-widest mb-3">Liderança</p>
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight mb-6 text-foreground">
            A Elite por trás do STARS
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            Metodologia forjada na prática por atletas e treinadores que respiram alta performance
            todos os dias. Não ensinamos o que lemos, ensinamos o que vivemos na arena.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Ricardo Card */}
          <Card className="overflow-hidden border-border bg-background rounded-none hover:border-primary/40 transition-colors duration-500 group">
            <div className="aspect-[4/5] sm:aspect-square relative overflow-hidden">
              <img
                src={RICARDO_IMG}
                alt="Ricardo Marquez"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out filter contrast-110 saturate-50 group-hover:saturate-100"
                crossOrigin="anonymous"
                onError={(e) => {
                  if (!e.currentTarget.src.includes('img.usecurling.com')) {
                    e.currentTarget.src =
                      'https://img.usecurling.com/p/800/800?q=coach&color=black&dpr=2'
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90" />
              <div className="absolute bottom-6 left-6 right-6">
                <Badge className="mb-3 bg-primary text-primary-foreground hover:bg-primary font-bold rounded-sm uppercase tracking-wider text-xs">
                  Co-Founder & Head Coach
                </Badge>
                <h3 className="text-3xl font-extrabold uppercase text-foreground mb-2 drop-shadow-md">
                  Ricardo Marquez
                </h3>
                <p className="text-muted-foreground text-sm uppercase tracking-widest font-semibold">
                  O Estrategista
                </p>
              </div>
            </div>
            <CardContent className="pt-8 pb-8 px-6 sm:px-8">
              <p className="text-muted-foreground leading-relaxed">
                Especialista em extrair o máximo do potencial humano. Com vasta experiência no
                cenário competitivo de CrossFit, Ricardo desenvolveu os pilares do sistema STARS
                focando em força bruta, técnica refinada e, acima de tudo, uma mentalidade
                inabalável.
              </p>
            </CardContent>
          </Card>

          {/* Allan Card */}
          <Card className="overflow-hidden border-border bg-background rounded-none hover:border-primary/40 transition-colors duration-500 group">
            <div className="aspect-[4/5] sm:aspect-square relative overflow-hidden">
              <img
                src={ALLAN_IMG}
                alt="Allan Pereira"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out filter contrast-110 saturate-50 group-hover:saturate-100"
                crossOrigin="anonymous"
                onError={(e) => {
                  if (!e.currentTarget.src.includes('img.usecurling.com')) {
                    e.currentTarget.src =
                      'https://img.usecurling.com/p/800/800?q=crossfit%20athlete&color=black&dpr=2'
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90" />
              <div className="absolute bottom-6 left-6 right-6">
                <Badge className="mb-3 bg-primary text-primary-foreground hover:bg-primary font-bold rounded-sm uppercase tracking-wider text-xs">
                  Co-Founder & Elite Athlete
                </Badge>
                <h3 className="text-3xl font-extrabold uppercase text-foreground mb-2 drop-shadow-md">
                  Allan Pereira
                </h3>
                <p className="text-muted-foreground text-sm uppercase tracking-widest font-semibold">
                  O Competidor
                </p>
              </div>
            </div>
            <CardContent className="pt-8 pb-8 px-6 sm:px-8">
              <p className="text-muted-foreground leading-relaxed">
                Atleta de elite provando o método na prática, dia após dia. Allan traz a vivência
                real da arena para as planilhas, garantindo que cada treino prepare você não apenas
                fisicamente, mas mentalmente para os rigores do condicionamento extremo.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
