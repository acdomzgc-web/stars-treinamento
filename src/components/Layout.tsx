/* Layout Component - Integrates Navbar and Footer with the main app structure */

import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <main className="flex-grow flex flex-col w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
