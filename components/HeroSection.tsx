import React from 'react'
 
export default function HeroSection() {
  return (
    <section className="hero" id="home">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="hero-content">
          <div className="hero-eyebrow">Liquidity | Connectivity | Risk Solutions</div>
          <h1>Access To 8 Asset Markets With Over <em>27,000</em> Instruments</h1>
          <div className="hero-divider" />
          <p className="hero-sub">Advanced infrastructure and pricing sourced directly from Tier 1 banks, with DMA execution built for the demands of institutional and professional traders.</p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">Open Live Account</a>
            <a href="#offer" className="btn-outline">Explore Solutions</a>
          </div>
        </div>
        <div className="hero-stats">
          <div className="hero-stat-item">
            <span className="hero-stat-num">500+</span>
            <span className="hero-stat-label">Clients Served</span>
          </div>
          <div className="hero-stat-item">
            <span className="hero-stat-num">27K+</span>
            <span className="hero-stat-label">Instruments</span>
          </div>
          <div className="hero-stat-item">
            <span className="hero-stat-num">$4B</span>
            <span className="hero-stat-label">Monthly Trades</span>
          </div>
        </div>
      </section>
  )
}

 

