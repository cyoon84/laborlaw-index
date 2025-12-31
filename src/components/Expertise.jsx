import React from 'react'

function Expertise() {
  const stats = [
    { number: '20+', label: '년 전문 경력', description: '노무 분야 전문 노무사' },
    { number: '5,000+', label: '해결 사례', description: '다양한 노무 분쟁 해결' },
    { number: '98%', label: '고객 만족도', description: '고객 만족도 조사 결과' },
    { number: '24/7', label: '상담 가능', description: '언제든지 상담 가능' }
  ]

  const achievements = [
    {
      title: '대한노무사협회 인증',
      description: '노무법 전문 노무사 인증을 받았습니다'
    },
    {
      title: '노동부 자문 노무사',
      description: '고용노동부 자문 노무사로 활동 중입니다'
    }
  ]

  return (
    <section id="expertise" className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            검증된 전문성과 경험
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            오랜 경험과 전문 지식으로 고객의 권리를 보호합니다
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-primary-600"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {achievement.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            상담 및 해결 프로세스
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { 
                step: '01', 
                title: '상담 신청', 
                desc: '온라인 또는 전화로 상담 신청',
                icon: (
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                )
              },
              { 
                step: '02', 
                title: '사안 분석', 
                desc: '전문가가 사안을 정확히 분석',
                icon: (
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                )
              },
              { 
                step: '03', 
                title: '해결 방안', 
                desc: '최적의 해결 방안 제시',
                icon: (
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                )
              },
              { 
                step: '04', 
                title: '문제 해결', 
                desc: '법률 절차를 통해 문제 해결',
                icon: (
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="p-8">
                    <div className="flex justify-center mb-4">
                      <div className="bg-primary-100 p-4 rounded-full text-primary-600">
                        {item.icon}
                      </div>
                    </div>
                    <div className="text-sm font-bold text-primary-600 mb-2">
                      {item.step}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {item.desc}
                    </p>
                  </div>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-primary-300 z-10">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Expertise

