# 노무법인 웹사이트

React와 Tailwind CSS를 사용한 전문 노무법인 싱글페이지 웹사이트입니다.

## 기능

- 반응형 디자인 (모바일, 태블릿, 데스크톱 지원)
- 신뢰감 있는 전문적인 디자인
- 서비스 소개
- 전문가 팀 소개
- 상담 문의 폼
- 부드러운 스크롤 네비게이션

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:5173`을 열어 확인하세요.

### 빌드

```bash
npm run build
```

### 미리보기

```bash
npm run preview
```

## 기술 스택

- React 18
- Vite
- Tailwind CSS
- PostCSS
- Autoprefixer

## 프로젝트 구조

```
├── src/
│   ├── components/
│   │   ├── Header.jsx      # 헤더/네비게이션
│   │   ├── Hero.jsx        # 메인 히어로 섹션
│   │   ├── Services.jsx    # 서비스 소개
│   │   ├── Expertise.jsx   # 전문성 및 경력
│   │   ├── Team.jsx        # 팀 소개
│   │   ├── Contact.jsx     # 상담 문의
│   │   └── Footer.jsx      # 푸터
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 커스터마이징

- 색상: `tailwind.config.js`에서 primary 색상을 수정할 수 있습니다
- 내용: 각 컴포넌트 파일에서 텍스트와 정보를 수정할 수 있습니다
- 연락처: `Contact.jsx`와 `Footer.jsx`에서 연락처 정보를 업데이트하세요

