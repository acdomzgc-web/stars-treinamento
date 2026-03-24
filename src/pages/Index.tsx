/* Home Page - Assembles all the specific sections for the STARS Elite landing page */
import { Hero } from '@/components/Hero'
import { Methodology } from '@/components/Methodology'
import { Founders } from '@/components/Founders'
import { Programs } from '@/components/Programs'
import { Gallery } from '@/components/Gallery'

const Index = () => {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Methodology />
      <Gallery />
      <Founders />
      <Programs />
    </div>
  )
}

export default Index
