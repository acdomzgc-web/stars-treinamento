import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import logoImg from '@/assets/logo-374d7.jpg'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Metodologia', href: '#methodology' },
    { name: 'Assinatura', href: '#programs' },
    { name: 'Fundadores', href: '#founders' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-sm border-b border-border/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center gap-3 group">
              <img
                src={logoImg}
                alt="STARS Logo"
                className="h-12 w-12 rounded-full object-cover border-2 border-primary/40 group-hover:border-primary transition-colors duration-300"
              />
              <span className="font-extrabold text-xl tracking-tight text-foreground uppercase group-hover:text-primary transition-colors">
                STARS Elite
              </span>
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground/80 hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-semibold uppercase tracking-wider"
                >
                  {link.name}
                </a>
              ))}
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-full px-6"
              >
                <a href="#programs">Comece Agora</a>
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border absolute w-full left-0 top-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground/80 hover:text-primary block px-3 py-3 rounded-md text-base font-bold uppercase tracking-wider border-b border-border/50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <Button
                asChild
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-bold h-12"
              >
                <a href="#programs" onClick={() => setIsMobileMenuOpen(false)}>
                  Comece Agora
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
