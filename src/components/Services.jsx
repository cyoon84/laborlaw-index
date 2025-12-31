import React from 'react'

function Services() {
  const services = [
    {
      category: '근로자',
      title: '임금/퇴직금/연차/주휴/휴일연장수당/실업급여',
      description: '근로자에게 지급되어야 할 각종 임금과 수당, 퇴직금 등에 대한 상담 및 청구 서비스를 제공합니다.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      items: [
        '임금 체불 청구',
        '퇴직금 계산 및 청구',
        '연차수당 청구',
        '주휴수당 청구',
        '휴일연장수당 청구',
        '실업급여 신청 지원'
      ]
    },
    {
      category: '근로자',
      title: '부당해고/전직/징계/차별/임금체불/노동부진정',
      description: '부당한 처우에 대한 법적 대응과 노동부 진정을 통한 권리 보호 서비스를 제공합니다.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      items: [
        '부당해고 무효 소송',
        '전직 강요 대응',
        '부당징계 취소 청구',
        '차별 시정 청구',
        '임금체불 신고 및 대응',
        '노동부 진정 대리'
      ]
    },
    {
      category: '사업주',
      title: '인사노무/근로감독대응/HR제도 도입 및 검토',
      description: '기업의 인사노무 관리와 근로감독 대응, HR 제도 구축을 지원합니다.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      items: [
        '인사노무 관리 자문',
        '근로감독 대응 지원',
        'HR 제도 도입 검토',
        '인사 규정 제정',
        '노무 리스크 관리',
        '인사 시스템 구축'
      ]
    },
    {
      category: '사업주',
      title: '근로계약서/취업규칙정비/급여아웃소싱/4대보험',
      description: '기업의 노무 제도 정비와 급여 관리, 4대보험 업무를 지원합니다.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      items: [
        '근로계약서 작성 및 검토',
        '취업규칙 정비',
        '급여 아웃소싱',
        '4대보험 관리',
        '급여 계산 시스템',
        '보험 신고 및 관리'
      ]
    },
    {
      category: '전문',
      title: '노동청, 노동위 사건대리/검토의견서/직장내괴롭힘,성희롱',
      description: '노동청 및 노동위원회 사건 대리와 직장 내 괴롭힘, 성희롱 사건 대응을 제공합니다.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      items: [
        '노동청 사건 대리',
        '노동위원회 사건 대리',
        '검토의견서 작성',
        '직장 내 괴롭힘 대응',
        '성희롱 사건 대응',
        '조사 대응 지원'
      ]
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            주요 서비스 분야
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            근로자와 사업주 모두를 위한 전문 노무 서비스
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg ${
                  service.category === '근로자' 
                    ? 'bg-blue-100 text-blue-600' 
                    : service.category === '사업주'
                    ? 'bg-green-100 text-green-600'
                    : 'bg-purple-100 text-purple-600'
                }`}>
                  {service.icon}
                </div>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                  service.category === '근로자' 
                    ? 'bg-blue-100 text-blue-700' 
                    : service.category === '사업주'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-purple-100 text-purple-700'
                }`}>
                  {service.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-primary-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

