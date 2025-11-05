import Header from './components/Header.jsx'
import BioCard from './components/BioCard.jsx'
import Family from './components/Family.jsx'
import TimelineHorizontal from './components/TimelineHorizontal.jsx'
import Kundli from './components/Kundli.jsx'
import Footer from './components/Footer.jsx'
import Petals from './components/Petals.jsx'

export default function App() {
  return (
    <div className="page-bg">
      <Header />
      <main>
        <section className="hero">
          <Petals />
          <div className="container d-flex justify-content-center">
            <div className="bio-card-elevated">
              <BioCard />
            </div>
          </div>
        </section>
        <section className="section section-variant-3 wide">
          <TimelineHorizontal />
        </section>
        <section className="section section-variant-2">
          <div className="container">
            <Family />
          </div>
        </section>
        <section className="section section-variant-4">
          <div className="container">
            <Kundli />
          </div>
        </section>
        
      </main>
      <Footer />
    </div>
  )
}


