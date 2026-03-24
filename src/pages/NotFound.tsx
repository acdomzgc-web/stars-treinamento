import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4 text-center">
      <h1 className="text-8xl font-black text-primary mb-6 drop-shadow-sm">404</h1>
      <h2 className="text-3xl font-bold mb-6 uppercase tracking-widest">Página não encontrada</h2>
      <p className="text-xl text-muted-foreground mb-10 max-w-md font-medium">
        A página que você está procurando não existe ou foi movida.
      </p>
      <Link to="/">
        <Button size="lg" className="rounded-full px-8 py-6 text-lg font-bold">
          Voltar ao Início
        </Button>
      </Link>
    </div>
  )
}
