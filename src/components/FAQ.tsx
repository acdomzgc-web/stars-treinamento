import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqItems = [
  {
    question: 'O que é a metodologia STARS?',
    answer:
      'A metodologia STARS é um sistema de treinamento moderno focado em Levantamento de Peso Olímpico (LPO) e Condicionamento, desenvolvido para elevar a performance dos atletas ao nível elite. Utilizamos o modelo de periodização 2:1, que equilibra carga e recuperação para maximizar ganhos de força, técnica e capacidade cardiovascular, preparando o atleta para competições de alto rendimento.',
  },
  {
    question: 'Preciso de experiência prévia para treinar?',
    answer:
      'Não. A planilha é adaptável para diferentes níveis de experiência. Seja você um iniciante buscando evoluir ou um atleta avançado em busca de performance competitiva, o programa é ajustado conforme sua capacidade atual. A progressão de carga e complexidade dos movimentos é individualizada para garantir segurança e evolução constante.',
  },
  {
    question: 'Como recebo o acesso após o pagamento?',
    answer:
      'Após a confirmação do pagamento através da plataforma Kiwify, você receberá automaticamente um e-mail no endereço cadastrado contendo todos os detalhes de acesso à planilha de treinamento. O processo é rápido e você poderá começar a treinar imediatamente. Certifique-se de verificar sua caixa de entrada e a pasta de spam.',
  },
  {
    question: 'Quais equipamentos são necessários para os treinos?',
    answer:
      'Os treinos exigem equipamentos básicos de CrossFit e LPO: barra olímpica, anilhas (discos), racks para agachamento, anilhas kettlebell, corda de pular e um espaço adequado para condicionamento (corrida, remos, etc.). A maioria das academias e boxes de CrossFit já possuem toda a estrutura necessária para a execução completa da planilha.',
  },
  {
    question: 'A planilha é atualizada com que frequência?',
    answer:
      'A planilha segue um ciclo de periodização baseado no modelo 2:1, com atualizações regulares a cada ciclo de treinamento. Os ajustes são feitos considerando a progressão do atleta, o gerenciamento de fadiga e a proximidade de competições. Cada novo ciclo traz novas progressões de carga, variações de exercícios e ajustes estratégicos para garantir evolução contínua.',
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-black uppercase tracking-widest mb-6">
            Dúvidas Frequentes
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight">
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>
          <p className="text-xl text-muted-foreground font-medium">
            Tire suas dúvidas sobre a metodologia, acesso e estrutura dos treinos antes de assinar.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqItems.map((item, idx) => (
            <AccordionItem
              key={idx}
              value={`item-${idx}`}
              className="bg-card rounded-2xl border border-border hover:border-primary/50 transition-colors px-6 [&[data-state=open]]:border-primary/60"
            >
              <AccordionTrigger className="text-left text-lg font-bold uppercase tracking-wide py-6 hover:no-underline hover:text-primary transition-colors">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed font-medium text-base pb-6">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
