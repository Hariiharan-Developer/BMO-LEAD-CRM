import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import './Footer.css'

const Footer = () => {

  const [showBackTop, setShowBackTop] = useState(false)

  useEffect(() => {

    const handleScroll = () => {
      setShowBackTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }

  }, [])


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }


  return (
    <footer className="bmo-footer">

      <div className="footer-container">

        {/* COPYRIGHT */}
        <span className="footer-copy">
          © 2026 BMO Software. All rights reserved.
        </span>

      </div>


      {/* STICKY BACK TO TOP */}
      {showBackTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="back-top"
          aria-label="Back to top"
        >
          <ArrowUp
            size={24}
            strokeWidth={2.8}
          />
        </button>
      )}

    </footer>
  )
}

export default Footer
