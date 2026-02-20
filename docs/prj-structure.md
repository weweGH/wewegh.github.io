# prj-ompt.html 구조 요약

## 문서 개요
- 대상 파일: `projects/prj-ompt.html`
- 유형: 단일 프로젝트 상세 페이지
- 템플릿: `projects/prj-ompt.html` 자체가 기준 템플릿

## 상단 영역
- YAML Front Matter: `---` 블록 2개
- `<head>`
  - 메타/타이틀/파비콘
  - CSS 로드: `bootstrap.css`, `style.css`, `responsive.css`, `font-awesome.min.css`
  - 인라인 스타일: 페이지 전용 레이아웃/섹션/갤러리 스타일

## 본문 구조
- `header` include
  - `{% include header.html menu_class="page_header" base="../" %}`

- `banner_area`
  - 프로젝트 타이틀/기간 표시
  - `data-i18n` 키 사용

- 본문 `container`
  - 언어 토글 버튼
  - `Project Overview`
    - `meta-card-single` (Snapshot / Impact / Role / Tech Stack)
  - `Decision Narrative`
    - `details-grid` 내 6개 `step-box`
    - CONTEXT / DECISION / FRAMING / INSIGHT / OUTCOME / LEARNING
  - `Project Visuals`
    - `image-section` + `gallery-grid`
    - 썸네일 그리드 및 모달 뷰어

- `footer` include
  - `{% include footer.html %}`

## 갤러리 구성
- 썸네일: `figure.gallery-item` 4개
- 각 아이템에 `data-gallery-item`, `data-full`, `data-caption`, `data-alt`
- 모달: `.gallery-modal` / `.gallery-modal-content`

## 스크립트
- 기본 JS: `jquery-3.2.1.min.js`, `theme.js`, `lang-toggle.js`
- 번역: `window.pageTranslations` (ko/en)
- 갤러리 모달: 인라인 스크립트 (클릭/ESC/바깥 클릭 닫기)

## i18n 규칙
- 본문은 한국어 배치
- 영어는 `window.pageTranslations.en`에만 선언
- `data-i18n` / `data-i18n-html` 키로 토글
