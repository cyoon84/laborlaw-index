import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">in</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">노무법인 인덱스</h3>
                <p className="text-xs text-gray-400">노무 전문</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              노무법 전문 법률사무소로<br />
              근로자와 기업의 권리를 보호합니다
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">서비스</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-primary-400 transition-colors">근로계약서 검토</a></li>
              <li><a href="#services" className="hover:text-primary-400 transition-colors">해고 및 징계 대응</a></li>
              <li><a href="#services" className="hover:text-primary-400 transition-colors">임금 및 퇴직금</a></li>
              <li><a href="#services" className="hover:text-primary-400 transition-colors">산재 및 안전</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">회사 정보</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#expertise" className="hover:text-primary-400 transition-colors">전문성</a></li>
              <li><a href="#contact" className="hover:text-primary-400 transition-colors">상담 문의</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">연락처</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                050-6742-0430
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hrmexpert@naver.com
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                서울특별시 서초구<br />
                사임당로8길 13<br />
                (서초동, 제일빌딩) 4층<br />
                우: 06640
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2024 노무법인 인덱스. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-primary-400 transition-colors">개인정보처리방침</a>
              <a href="#" className="hover:text-primary-400 transition-colors">이용약관</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

