import React, { useState, useEffect } from 'react'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg'
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">in</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">노무법인 인덱스</h1>
              <p className="text-xs text-gray-600">노무 전문</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              서비스
            </a>
            <a href="#expertise" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              전문성
            </a>
            <a
              href="#contact"
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium"
            >
              상담 문의
            </a>
          </div>
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="메뉴 열기"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <a 
                href="#services" 
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium py-2"
                onClick={closeMobileMenu}
              >
                서비스
              </a>
              <a 
                href="#expertise" 
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium py-2"
                onClick={closeMobileMenu}
              >
                전문성
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium py-2"
                onClick={closeMobileMenu}
              >
                상담 문의
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header

