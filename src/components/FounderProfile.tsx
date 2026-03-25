import { Card, CardContent } from '@/components/ui/card'
import { Trophy, Award, GraduationCap, Target } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FounderProfileProps {
  name: string
  role: string
  image: string
  bio: string
  certifications: string
  education: string
  achievements: string[]
  imageRight?: boolean
  cref?: string
}

export default function FounderProfile({
  name,
  role,
  image,
  bio,
  certifications,
  education,
  achievements,
  imageRight = false,
  cref,
}: FounderProfileProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
      {/* Image Block */}
      <div
        className={cn(
          'relative group lg:col-span-5 order-1',
          imageRight ? 'lg:order-2' : 'lg:order-1',
        )}
      >
        <div
          className={cn(
            'absolute -inset-4 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-700',
            imageRight
              ? 'bg-gradient-to-bl from-primary/30 to-secondary/30'
              : 'bg-gradient-to-tr from-primary/30 to-secondary/30',
          )}
        />
        <div className="relative rounded-[2rem] overflow-hidden aspect-[3/4] border-2 border-border shadow-2xl bg-card">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <h3 className="text-4xl font-black text-foreground mb-2 tracking-tight uppercase">
              {name}
            </h3>
            <p className="text-primary font-bold text-xl tracking-wide">{role}</p>
          </div>
        </div>
      </div>

      {/* Text Block */}
      <div
        className={cn('space-y-10 lg:col-span-7 order-2', imageRight ? 'lg:order-1' : 'lg:order-2')}
      >
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-2xl leading-relaxed text-foreground/90 font-medium border-l-4 border-primary pl-6 py-2">
            {bio}
          </p>
          {cref && (
            <div className="mt-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Target className="w-5 h-5 text-primary" />
                <span className="font-bold tracking-widest uppercase text-primary">{cref}</span>
              </div>
            </div>
          )}
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
                {certifications}
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
                {education}
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
            {achievements.map((achievement, index) => (
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
  )
}
