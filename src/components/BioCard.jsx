import { useReveal } from '../utils/useReveal.js'

export default function BioCard() {
  const ref = useReveal()
  return (
    <div className="bio-card-new reveal" ref={ref}>
      <div className="bio-card-gradient"></div>
      <div className="bio-card-content">
        <div className="bio-card-header">
          <div className="bio-card-avatar-wrapper">
            <div className="bio-card-avatar-glow"></div>
            <img 
              className="bio-card-avatar" 
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=800&auto=format&fit=crop" 
              alt="Raghav Bhutada" 
            />
          </div>
          <div className="bio-card-intro">
            <h1 className="bio-card-name">Raghav Bhutada</h1>
            <p className="bio-card-tagline">Rooted in tradition, excited about new beginnings</p>
          </div>
        </div>
        
        <div className="bio-card-quote">
          <svg className="quote-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 21C3 17.4 5.4 15 9 15C12.6 15 15 17.4 15 21V21H3V21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 11C3 7.4 5.4 5 9 5C12.6 5 15 7.4 15 11V11H3V11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 3V1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 13V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <p className="bio-card-quote-text">Namaste! I'm Raghav, rooted in tradition and excited about new beginnings. I value family, culture, and meaningful connections.</p>
        </div>

        <div className="bio-card-details">
          <div className="bio-detail-section">
            <h3 className="bio-detail-section-title">Personal Information</h3>
            <div className="bio-detail-grid">
              <div className="bio-detail-item">
                <span className="bio-detail-label">Name</span>
                <span className="bio-detail-value">Raghav Bhutada</span>
              </div>
              <div className="bio-detail-item">
                <span className="bio-detail-label">Birth Date & Time</span>
                <span className="bio-detail-value">05 Oct 2005, 07:00 AM</span>
              </div>
              <div className="bio-detail-item">
                <span className="bio-detail-label">Birth Place</span>
                <span className="bio-detail-value">Nanded</span>
              </div>
              <div className="bio-detail-item">
                <span className="bio-detail-label">Height</span>
                <span className="bio-detail-value">5'6"</span>
              </div>
              <div className="bio-detail-item">
                <span className="bio-detail-label">Blood Group</span>
                <span className="bio-detail-value">O -ve</span>
              </div>
              <div className="bio-detail-item">
                <span className="bio-detail-label">Complexion</span>
                <span className="bio-detail-value">Fair</span>
              </div>
            </div>
          </div>

          <div className="bio-detail-section">
            <h3 className="bio-detail-section-title">Residence</h3>
            <div className="bio-detail-grid">
              <div className="bio-detail-item full-width">
                <span className="bio-detail-label">Temporary Residence</span>
                <span className="bio-detail-value">Shri Krishna Society, Mundhwa, Pune</span>
              </div>
              <div className="bio-detail-item full-width">
                <span className="bio-detail-label">Permanent Residence</span>
                <span className="bio-detail-value">90/A, Ganesh Nagar, Nanded</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bio-card-footer">
          <p className="bio-card-footer-text">"Looking forward to a companionship filled with respect, joy, and shared values."</p>
        </div>
      </div>
    </div>
  )
}


