import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Programme from '@/components/Programme'
import Packing from '@/components/Packing'
import Rules from '@/components/Rules'
import Payment from '@/components/Payment'
import Donate from '@/components/Donate'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Programme />
      <Packing />
      <Rules />
      <Payment />
      <Donate />
      <Contact />
      <Footer />
    </main>
  )
}

