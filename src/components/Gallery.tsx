const ALLAN_IMG =
  'https://storage.googleapis.com/skip-app-production-bucket/user-attachments/af27e25d-6a45-491b-a52b-d3f49195a037/f3da2f63-1250-484d-ba90-50bba20d6f45'
const RICARDO_IMG =
  'https://storage.googleapis.com/skip-app-production-bucket/user-attachments/af27e25d-6a45-491b-a52b-d3f49195a037/88a291d9-e31b-4cd3-a006-8dce2fc5cce3'

const images = [
  {
    src: 'https://img.usecurling.com/p/800/800?q=crossfit%20box&color=black&dpr=2',
    span: 'col-span-1 md:col-span-2 row-span-2',
    alt: 'Crossfit Training',
    fallback: 'https://img.usecurling.com/p/800/800?q=crossfit%20gym&color=black&dpr=2',
  },
  {
    src: ALLAN_IMG,
    span: 'col-span-1 row-span-1',
    alt: 'Allan Pereira Lifting',
    fallback: 'https://img.usecurling.com/p/800/800?q=crossfit%20athlete&color=black&dpr=2',
  },
  {
    src: 'https://img.usecurling.com/p/800/600?q=weightlifting%20barbell&color=black&dpr=2',
    span: 'col-span-1 row-span-1',
    alt: 'Weightlifting',
    fallback: 'https://img.usecurling.com/p/800/600?q=weights&color=black&dpr=2',
  },
  {
    src: 'https://img.usecurling.com/p/600/800?q=kettlebell%20workout&color=black&dpr=2',
    span: 'col-span-1 row-span-2',
    alt: 'Kettlebell',
    fallback: 'https://img.usecurling.com/p/600/800?q=kettlebell&color=black&dpr=2',
  },
  {
    src: RICARDO_IMG,
    span: 'col-span-1 md:col-span-2 row-span-1',
    alt: 'Ricardo Marquez Coaching',
    fallback: 'https://img.usecurling.com/p/800/800?q=coach&color=black&dpr=2',
  },
]

export function Gallery() {
  return (
    <section className="py-2 bg-background border-b border-border">
      {/* A full-width tight grid for high visual impact */}
      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[300px] gap-2 p-2">
        {images.map((img, i) => (
          <div key={i} className={`relative overflow-hidden group bg-secondary ${img.span}`}>
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover object-center filter grayscale-[30%] contrast-125 group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              crossOrigin="anonymous"
              onError={(e) => {
                if (e.currentTarget.src !== img.fallback) {
                  e.currentTarget.src = img.fallback
                }
              }}
            />
            <div className="absolute inset-0 bg-background/40 group-hover:bg-background/10 transition-colors duration-500" />

            {/* Subtle branding overlay on hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <span className="text-primary/80 font-extrabold text-2xl md:text-4xl tracking-widest uppercase transform scale-150 group-hover:scale-100 transition-transform duration-500 opacity-0 group-hover:opacity-100 blur-sm group-hover:blur-none">
                STARS
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
