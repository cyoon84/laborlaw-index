import React, { useState, useEffect } from 'react'

function Hero() {
  const backgroundImages = [
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', // 비즈니스 협업
    'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', // 사무실 문서 작업
    'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', // 회의 및 협의
    'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', // 현대적 사무실
    'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', // 비즈니스 문서
    'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' // 팀 협업
  ]

  const [selectedImage, setSelectedImage] = useState('')

  useEffect(() => {
    // 컴포넌트 마운트 시 랜덤 이미지 선택
    const randomIndex = Math.floor(Math.random() * backgroundImages.length)
    setSelectedImage(backgroundImages[randomIndex])
  }, [])

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Image */}
      {selectedImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
          style={{
            backgroundImage: `url('${selectedImage}')`
          }}
        ></div>
      )}
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-gray-800/60 to-primary-900/70"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            당신의 노동 권리를
            <br />
            <span className="text-primary-300">전문가와 함께</span> 지키세요
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed drop-shadow-md">
            20년 이상의 경험과 전문성을 바탕으로
            <br />
            근로자와 기업의 노무 문제를 해결합니다
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-all transform hover:scale-105 shadow-lg"
            >
              상담 문의
            </a>
            <a
              href="#services"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-all border-2 border-primary-600"
            >
              서비스 알아보기
            </a>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2 drop-shadow-lg">20+</div>
              <div className="text-gray-100 font-medium">년 경력</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2 drop-shadow-lg">5,000+</div>
              <div className="text-gray-100 font-medium">해결 사례</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2 drop-shadow-lg">98%</div>
              <div className="text-gray-100 font-medium">고객 만족도</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

