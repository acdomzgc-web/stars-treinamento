import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const LOGO_URL =
  'https://storage.googleapis.com/skip-app-production-bucket/user-attachments/af27e25d-6a45-491b-a52b-d3f49195a037/10b27af8-2c2d-4581-9b16-92c483a90623'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Metodologia', href: '#metodologia' },
    { name: 'Fundadores', href: '#fundadores' },
    { name: 'Programas', href: '#programas' },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent',
        isScrolled
          ? 'bg-background/95 backdrop-blur-md border-border py-3 shadow-lg'
          : 'bg-transparent py-5',
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 z-50"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img src={LOGO_URL} alt="STARS Elite" className="h-10 md:h-12 w-auto object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-semibold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button
            className="uppercase font-bold tracking-wider rounded-none"
            onClick={() =>
              document.querySelector('#programas')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Acessar Planilha
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 text-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'fixed inset-0 bg-background flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out md:hidden z-40',
            mobileMenuOpen ? 'translate-y-0' : '-translate-y-full',
          )}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-2xl font-bold uppercase tracking-widest text-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button
            size="lg"
            className="uppercase font-bold tracking-wider mt-4 rounded-none w-[80%] max-w-sm"
            onClick={() => {
              setMobileMenuOpen(false)
              document.querySelector('#programas')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Acessar Planilha
          </Button>
        </div>
      </div>
    </header>
  )
}
