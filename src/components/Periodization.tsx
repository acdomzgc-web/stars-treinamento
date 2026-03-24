import { BookOpen, TrendingUp, ShieldAlert, Zap } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export default function Periodization() {
  return (
    <section className="py-24 bg-background border-b border-border">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-2xl mb-6">
            <TrendingUp className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight">
            Atualização na periodização da <span className="text-primary">planilha STARS</span>
          </h2>
          <p className="text-xl text-muted-foreground font-medium leading-relaxed">
            Adotamos o <strong className="text-foreground">Modelo 2:1</strong> (2 semanas fortes + 1
            semana leve), rigorosamente focado no gerenciamento de fadiga e na máxima qualidade da
            velocidade de barra.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          <Card className="border-2 border-primary bg-card shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-bl-full pointer-events-none" />
            <CardContent className="p-8 md:p-10 relative z-10">
              <h3 className="text-2xl font-black uppercase text-primary mb-8 flex items-center gap-3">
                <Zap className="w-7 h-7" /> Novo Modelo 2:1
              </h3>
              <ul className="space-y-5 text-lg font-medium text-foreground/90 mb-10">
                <li className="flex items-center justify-between border-b border-border/50 pb-3">
                  <span>Semanas Fortes:</span>{' '}
                  <span className="font-bold text-foreground">~35 semanas</span>
                </li>
                <li className="flex items-center justify-between border-b border-border/50 pb-3">
                  <span>Semanas Leves:</span>{' '}
                  <span className="font-bold text-foreground">~17 semanas</span>
                </li>
              </ul>
              <div className="bg-primary/10 rounded-2xl p-6 border border-primary/20">
                <h4 className="font-black text-sm uppercase text-primary mb-4 tracking-widest">
                  Estrutura do Ciclo
                </h4>
                <div className="space-y-3 text-base font-medium">
                  <p className="flex gap-2">
                    <span className="text-foreground font-bold w-24 shrink-0">Semana 1:</span> Carga
                    alta
                  </p>
                  <p className="flex gap-2">
                    <span className="text-foreground font-bold w-24 shrink-0">Semana 2:</span>{' '}
                    Progressão
                  </p>
                  <p className="flex gap-2">
                    <span className="text-foreground font-bold w-24 shrink-0">Semana 3:</span>{' '}
                    Redução de volume (Recuperação)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-border bg-secondary/10 opacity-90">
            <CardContent className="p-8 md:p-10">
              <h3 className="text-2xl font-black uppercase text-muted-foreground mb-8 flex items-center gap-3">
                <ShieldAlert className="w-7 h-7" /> Antigo Modelo 3:1
              </h3>
              <ul className="space-y-5 text-lg font-medium text-muted-foreground mb-10">
                <li className="flex items-center justify-between border-b border-border/50 pb-3">
                  <span>Semanas Fortes:</span> <span>~26 semanas</span>
                </li>
                <li className="flex items-center justify-between border-b border-border/50 pb-3">
                  <span>Semanas Moderadas:</span> <span>~13 semanas</span>
                </li>
                <li className="flex items-center justify-between border-b border-border/50 pb-3">
                  <span>Semanas Leves:</span> <span>~13 semanas</span>
                </li>
              </ul>
              <p className="text-base text-muted-foreground/80 leading-relaxed">
                Menos tempo em pico de performance e maior risco de acúmulo de fadiga prejudicial a
                longo prazo.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center sm:items-start gap-6 p-8 bg-card rounded-3xl border border-border text-base text-muted-foreground font-medium shadow-sm">
          <div className="bg-primary/10 p-4 rounded-full shrink-0">
            <BookOpen className="w-8 h-8 text-primary" />
          </div>
          <div className="text-center sm:text-left">
            <strong className="text-foreground font-bold uppercase text-sm tracking-widest block mb-2">
              Embasamento Científico
            </strong>
            <p className="leading-relaxed">
              Metodologia apoiada por estudos de referência em performance esportiva: Pritchard et
              al., 2015; Grgic et al., 2021; Suchomel et al., 2018; Feito et al., 2018.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
