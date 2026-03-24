import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Methodology from '@/components/Methodology'
import Periodization from '@/components/Periodization'
import WeeklyStructure from '@/components/WeeklyStructure'
import Programs from '@/components/Programs'
import Founders from '@/components/Founders'
import Footer from '@/components/Footer'

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <main>
        <Hero />
        <Methodology />
        <Periodization />
        <WeeklyStructure />
        <Programs />
        <Founders />
      </main>
      <Footer />
    </div>
  )
}
