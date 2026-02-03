# 기술 개요 (Project Tech Overview)

이 문서는 다른 개발자가 이 레포지토리를 처음 봤을 때, 어떤 기술로 어떻게 구성되어 있는지 한 눈에 이해할 수 있도록 정리한 개요입니다.

## 한 줄 요약
- GitHub Pages에 올려서 서비스하기 쉬운 정적 HTML 포트폴리오 사이트이며, SCSS 기반 스타일링과 일부 PHP 폼 처리 파일이 포함된 구조입니다.

## 핵심 기술 스택
- 정적 사이트: HTML 기반 다중 페이지 (`index.html`, `about-us.html` 등)
- 스타일: SCSS 소스(`scss/`) + 컴파일 결과 CSS(`css/`)
- 스크립트: Vanilla JS 및 외부 라이브러리(`js/`, `vendors/`)
- 템플릿/부분: Jekyll 스타일의 `_includes/`, 설정 파일 `_config.yml`
- 에셋: 이미지(`img/`), 폰트(`fonts/`)
- 폼 처리: `contact_process.php` (연락처 폼 백엔드 처리용)
- 빌드 보조: `prepros-6.config` (SCSS 컴파일 등 프론트엔드 에셋 빌드 도구 설정)

## 동작 방식 요약
- 모든 페이지는 루트에 있는 HTML 파일로 직접 제공됩니다.
- 공통 UI는 `_includes/`에 분리되어 있을 가능성이 높으며(네비게이션, 푸터 등), Jekyll 또는 유사한 정적 템플릿 방식과 함께 사용됩니다.
- SCSS는 `prepros-6.config`를 통해 CSS로 컴파일되어 `css/`에 반영되는 워크플로우를 전제로 합니다.
- `contact_process.php`는 `contact.html`에서 폼 전송 시 사용하는 서버 사이드 처리 파일입니다.

## 디렉터리 맵 (요약)
- `_includes/`: 공통 템플릿 파트
- `css/`: 빌드된 CSS
- `scss/`: 스타일 소스(SCSS)
- `js/`: 커스텀 스크립트
- `vendors/`: 외부 라이브러리/플러그인
- `img/`, `fonts/`: 에셋 리소스
- `docs/`: 프로젝트 문서

## 주요 페이지 엔트리
- `index.html`: 메인 랜딩 페이지
- `about-us.html`, `services.html`, `portfolio.html`, `blog.html`, `contact.html`: 섹션별 개별 페이지
- `portfolio-details.html`, `single-blog.html`: 상세 페이지
- `search-rag.html`, `product-similarity.html`: 프로젝트 상세/실험 페이지

## 로컬 개발 및 수정 흐름 (간단 가이드)
1. 레이아웃/콘텐츠 수정: 해당 HTML 파일 직접 편집
2. 스타일 수정: `scss/` 편집 → CSS 컴파일 → `css/` 반영
3. 스크립트 수정: `js/` 편집

필요하면 이 문서를 기준으로 “빌드/배포 가이드” 또는 “기술 결정 배경” 문서까지 확장할 수 있습니다.
