
# 회고 작성 규칙

> 회고 작성하기 전, 반드시 숙지!

- '프로젝트 회고' 작성 규칙
    - `html` 파일 내의 위치에 본 문서의 특정 프로젝트에 대한 내용을 그대로 복사 붙여넣기 할 것
    - 본 문서에는 한글과 영어가 함께 작성되어있음. 영어도 그대로 복사 붙여넣기하여 data-i18n 속성 재구성 할 것
    - 1개의 문장만 있을 때는 불릿(`-`, `‣`)을 사용하지 말 것
    - 2개 이상의 문장일 때는 각 문장 앞에 `‣`를 붙이고 `<br>`로 줄바꿈할 것
    - 프로젝트 메타 정보(Snapshot, ROLE, Tech Stack)에는 불릿을 사용하지 말 것
    - 프로젝트 타이틀 규칙
        - `## 프로젝트 한글명 프로젝트 영문명 | 기간` 형식을 유지할 것
        - HTML 배너의 `data-i18n`(ko)에는 한글명을, `window.pageTranslations.en`에는 문서상 영문명을 동일하게 기입할 것
    - 매핑 정보는 다음과 같음
        - Snapshot: `meta-label`이 Snapshot인 `meta-value`
        - ROLE: `meta-label`이 ROLE인 `meta-value`
        - Tech Stack: `meta-label`이 Tech Stack인 `meta-value`
        1. CONTEXT: `step-title`이 CONTEXT인 `step-desc`
        2. DECISION: `step-title`이 DECISION인 `step-desc`
        3. FRAMING: `step-title`이 FRAMING인 `step-desc`
        4. INSIGHT: `step-title`이 INSIGHT인 `step-desc`
        5. OUTCOME: `step-title`이 OUTCOME인 `step-desc`
        6. LEARNING: `step-title`이 LEARNING인 `step-desc`
    - 다국어 토글 규칙
        - HTML 본문에는 한국어만 배치하고, 영어 문장은 `window.pageTranslations.en`에 정의할 것
        - `data-i18n`/`data-i18n-html`을 사용해 토글 시 한 언어만 화면에 노출되도록 구현할 것

---

# 프로젝트 회고

## GTX 영향권 통행 패턴 분석 | 2023.1.10 ~ 2023.6.8

1. CONTEXT
    - GTX 노선 개통·연장에 따른 수도권 교통 수요 변화를 사전에 설명해야 했으나, 기존 통행 분석은 단편적 지표 중심으로 구조적 변화 파악에 한계 존재

2. DECISION
    - 대규모 교통 인프라 사업의 효과를 정량적으로 설명하지 못할 경우, 정책 판단과 대외 커뮤니케이션의 설득력 저하 문제 인식

3. FRAMING
    - 문제를 “통행량이 얼마나 변하는가”가 아닌, “GTX 도입이 수도권 내부·외부 통행 구조를 어떻게 재편하는가”라는 질문으로 재정의

4. INSIGHT
    - 노선 인접 여부보다, 행정구역·OD·시간대에 따라 GTX 영향이 상이하게 분화되는 통행 패턴 확인

5. OUTCOME
    - GTX 영향권을 공간·통행 단위로 구조화하여, 노선별·구간별 통행 변화와 확산 범위를 설명 가능한 분석 체계로 정리

6. LEARNING
    - 교통 데이터 분석의 핵심이 수치 비교가 아니라, 정책 판단에 필요한 구조적 변화 서사를 만드는 데 있음을 인식

--- 

## 교통예보시스템 기능 개선 | 2023.6.19 ~ 2023.12.5

- Snapshot
    - 한국도로공사 교통예보시스템 개발 및 구축

1. CONTEXT
    - 기존 교통 예측이 단순 룰 기반 방식에 의존하며, 시간대·기상·교통 흐름 변화가 충분히 반영되지 않는 상황 존재

2. DECISION
    - 예측 신뢰도 한계로 인해 도로 위 안전 리스크를 사전에 전달할 수 있는 정량적이고 직관적인 지표 부재 문제 인식

3. FRAMING
    - 문제를 “사고를 얼마나 정확히 예측할 것인가”가 아닌, “도로 이용자가 위험 수준을 직관적으로 이해하고 대비할 수 있는가”라는 질문으로 재정의

4. INSIGHT
    - 단일 수치 예측보다, 위험 수준을 단계화해 전달할 때 예보 결과의 이해도와 활용 가능성 증가

5. OUTCOME
    - 시계열 기반 예측 모델과 해석 가능한 안전 등급 체계를 결합한 교통 안전 예보 시스템 구축
    - 예측 결과를 대외 커뮤니케이션에 바로 활용 가능한 지표 형태로 제공

6. LEARNING
    - 예측 시스템의 가치는 정확도 자체보다, 판단과 행동으로 연결되는 전달 구조에 있음을 인식

---

## 미생물 방부 시험 효율화 Optimization of Microbial Preservative Testing | 2025.4.4 ~ 2025.12.19

> `projects/prj-ompt.html`

- Snapshot
    - 특정 원료가 미생물에 미치는 영향에 대한 방부력 식별 로직 개발 및 시각화
        - Developed and visualized a logic to identify the impact of specific ingredients on microbial preservative performance.
                
- ROLE
    - 방부 테스트 위험 영역 식별 로직 설계·구현
        - Designed and implemented logic to identify high-risk regions in preservative efficacy testing.

- Tech Stack
    - Time-series Analysis, PCA, Contour Visualization

1. CONTEXT
    - 2025년 4월 기준 유화 립 틴트 방부력 시험 의뢰 건수가 전년 총 건수를 이미 초과한 상황 존재
        - By April 2025, the number of preservative testing requests for emulsified lip tints had already exceeded the total volume of the previous year.
    - 전 색상 시험 확대에 따라 시험 인력·시간 소모가 급증하고, 일부 고객 건은 결과 도출까지 6개월 이상 소요되는 구조 지속
        - As testing expanded to all color variants, the demand on testing resources and time increased substantially, with some client cases taking over six months to reach conclusions.

2. DECISION
    - 시험 대상 증가 증가와 함께 품질 이슈 발생률 및 최종 부적합률이 동반 상승하며, 기존 전수 시험 방식의 지속 가능성에 대한 판단 필요성 대두
        - With both testing volume and quality issue rates rising simultaneously—including higher final non-conformance rates—it became necessary to reassess the sustainability of the existing full-coverage testing approach.

3. FRAMING
    - “미생물 위험이 유사한 색상군을 구조적으로 구분할 수 있는가”
        - Reframed the problem as: “Can we systematically group colors with similar microbial risk profiles?”

4. INSIGHT
    - 미생물 시계열 데이터를 PCA 공간으로 축소해 시각화한 결과, 색소 조성에 따라 방부력 반응이 연속적인 군집 패턴으로 분포함을 확인
        - By projecting microbial time-series data into a PCA space, I observed that preservative responses formed continuous cluster patterns depending on pigment composition.
    - 등고선(contour) 시각화를 통해 미생물 증식 강도가 특정 영역에 집중되는 경향 관찰
        - Contour visualization revealed that high microbial growth intensity tended to concentrate in specific regions of the feature space.

5. OUTCOME
    - PCA 기반 공간 분포와 등고선 시각화를 활용해 취약 영역에 해당하는 대표 호수 선별 로직 구축
        - Built a representative color-selection logic targeting high-risk regions based on PCA spatial distribution and contour patterns.
    - 연간 방부력 시험 대상 약 80% 이상 축소 및 외부 시험 비용 약 3천만 원 절감 성과 도출
        - Reduced annual preservative testing volume by more than 80%, saving approximately ₩30 million in external testing costs.

6. LEARNING
    - 복잡한 실험 데이터를 단순한 수치 비교가 아닌 공간적 패턴으로 시각화할 때, 판단 기준이 명확해지고 조직 내 합의가 훨씬 빠르게 형성된다는 통찰 정립
        - Established the insight that visualizing complex experimental data as spatial patterns—rather than relying on simple numerical comparisons—clarifies decision criteria and accelerates organizational alignment.
    - 결국 의사결정에 있어 중요한 것은 “얼마나 정확한 수치인가”보다 이해관계자가 직관적으로 받아들일 수 있는 방식으로 어떻게 보여주는가라는 인식으로 사고가 확장됨
        - Developed the perspective that effective decision-making depends less on numerical precision alone and more on how intuitively insights are communicated to stakeholders.

---

## RAG 기반 원료 정보 검색 기능 개발 RAG-powered Ingredient Retrieval Feature  | 2025.4.9 ~ 2025.11.21

1. CONTEXT
    - 연구원 및 규제 담당자가 성분 정보 확인 시, 다수의 PDF 문서를 개별적으로 열람해야 하는 구조로 인한 검색 비효율 발생

2. DECISION
    - 성분 검색 비용 증가로 인한 의사결정 지연 및 중복 검토 발생
    - R&D 생산성 저하 및 규제 대응 속도 감소로 이어지는 구조적 문제 인식

3. FRAMING
    - 사용자의 핵심 니즈가 ‘정확한 문서 탐색’인지, 혹은 ‘의사결정에 필요한 핵심 정보와 규제 맥락의 빠른 파악’인지에 대한 문제 재정의

4. INSIGHT
    - 검색 로그 및 문서 열람 패턴 분석을 통해, 사용자가 문서 원본보다 성분 요약 정보와 규제 맥락 확인에 더 많은 시간을 사용하는 경향 확인

5. OUTCOME
    - 단순 키워드 검색 개선이 아닌, 의사결정 지원을 위한 정보 요약·맥락화 방향으로 문제 해결 전략 설정
    - 시멘틱 서치 기반 RAG 구조 도입을 통한 검색 경험 개선

6. LEARNING
    - 검색 문제의 핵심은 기술적 정확도 자체가 아니라, 사용자가 어떤 결정을 위해 검색하고 있는지를 이해하는 문제라는 인식 강화

---

## 유사 제품 탐색 기능 | 2026.1.14 ~ 2026.2.6

1. CONTEXT
    - 연구 과정에서 특정 제품과 전성분 구성이 유사한 제품을 찾기 위해, 다수의 제품 전성분을 개별적으로 확인·비교해야 하는 상황 존재

2. DECISION
    - 유사 제품 탐색 과정의 비효율이 연구 초기 판단 지연과 후보 축소의 불확실성으로 이어지는 문제 인식

3. FRAMING
    - 성분의 존재 유무만으로도 의미 있는 기준을 제공할 수 있는가?

4. INSIGHT
    - PoC를 통해 유사도 점수보다 전성분 겹침과 차이를 함께 제시할 때 결과 이해와 해석이 용이해지는 경향 확인

5. OUTCOME
    - 유사도 정밀도 고도화가 아닌, Top-5 유사 제품과 성분 겹침·차이를 직관적으로 비교하는 탐색 UI 중심 구현

6. LEARNING
    - 유사도 문제의 핵심이 모델 성능이 아니라, 사용자의 판단 과정과 해석 가능성에 있음을 인식
    
--- 

## 프로젝트명

1. CONTEXT
2. DECISION
3. FRAMING
4. INSIGHT
5. OUTCOME
6. LEARNING

---

# 개인 프로젝트 회고

> 해당 문서는 개인 프로젝트 종료 후 '회고'를 기록합니다. 중단된 프로젝트도 포함. 다음 양식으로 정리

- SNAPSHOT: 프로젝트를 한 줄로 요약

- ROLE: 수행한 역할

- DOMAIN: 도메인 주소

- PROBLEM: 왜 이 문제를 선택했는지

- KEY FEATURES: 주요 기능 3개 내외 (불렛)

- TECH STACK
    
- OUTCOME: 결과 또는 검증 포인트 2~3개

- REFLECTION: 배운 점 2가지, 다시 한다면 바꾸고 싶은 점 1가지. 길게 쓰지말고, 판단력만 드러내기

---

## 만다라트 차트 가이드 | 2025.12.16 ~ 

- SNAPSHOT
    - 만다라트 차트 작성을 ‘편집’이 아닌, 목표 설정을 위한 단계적 가이드 경험으로 재설계한 웹 서비스

- ROLE
    - End-to-End Product Design & Development

- DOMAIN
    - https://mandalart-chart.vercel.app/

- PROBLEM
    - 만다라트 차트는 강력한 목표 설계 도구지만, 구조와 작성 방법이 직관적이지 않음
    - 기존 서비스들은 단순 편집 기능에 집중되어 있어, ‘어떻게 써야 하는지’에 대한 가이드가 부족
    - 목표 설정은 한 번에 끝나지 않는데, 중간 저장이 어려워 작성 이탈 가능성이 높음

- KEY FEATURES
    - 가이드 기반 만다라트 차트 생성·편집
        -  중앙 목표 → 장기 목표 → 실행 과제로 이어지는 단계적 작성 흐름
    - 자동 임시 저장
        - 별도 액션 없이 작성 중 자동 저장, 재방문 시 이어서 작성 가능
    - 차트 미리보기 및 이미지 저장
        - 작성 단계와 무관하게 현재 상태를 9×9 차트 이미지로 저장 가능

- TECH STACK
    - Frontend 중심 웹 서비스: Semantic UI Flow · Browser Storage · Image Export
    
- OUTCOME
    - 로그인 없이 바로 사용할 수 있는 만다라트 차트 웹 서비스 배포
    - 처음 사용자도 구조를 이해하며 작성할 수 있는 가이드 중심 UX 구현

- REFLECTION
    - AI 에이전트와 협업한 첫 엔드투엔드 프로젝트
    - 기능 구현보다, 사용자가 ‘생각을 정리하는 흐름’을 어떻게 경험하는지가 더 중요하다는 것을 체감
    - 가이드형 서비스에서 UI/UX가 곧 제품의 핵심 가치가 된다는 점을 명확히 인식하는 계기

---

## 네트워크 그래프 관계도 시각화 | 2025.10.17 ~ 진행 중

- SNAPSHOT
    - 네트워크 그래프 개념을 학습하기 위해, 에피소드 흐름에 따라 변화하는 인물 관계를 시각화한 인터랙티브 웹 프로젝트

- ROLE
    - End-to-End Design & Frontend Development

- DOMAIN
    - https://character-network-visualization.vercel.app/

- PROBLEM
    - 네트워크 그래프는 이론적으로는 이해했지만, 실제 데이터 구조와 시각화 흐름을 체감할 기회가 부족
    - 단순 예제가 아닌, 관계가 시간에 따라 축적·변화하는 구조를 직접 구현하며 학습하고자 함
    - 노드·엣지 속성이 시각적 요소로 어떻게 해석되는지 경험이 필요하다고 판단

- KEY FEATURES
    - 인물 관계 네트워크 그래프 시각화
        - 노드(인물)·엣지(관계)를 기반으로 한 force-directed 그래프
    - 에피소드 기반 관계 변화 반영
        - 에피소드 진행에 따라 관계가 누적·업데이트되는 구조
    - 시각적 정보 구분
        - 중요도에 따른 노드 크기, 소속에 따른 색상 구분

- TECH STACK
    - React · TypeScript · react-force-graph-2d · Tailwind CSS
    
- OUTCOME
    - 네트워크 그래프의 데이터 구조(nodes/edges)와 시각화 간의 연결 관계를 명확히 이해
    - force 기반 레이아웃과 사용자 인터랙션(드래그·줌)의 동작 원리 체득

- REFLECTION
    - 네트워크 시각화는 차트보다 데이터 모델링 설계가 훨씬 중요하다는 점을 체감
    - 시각적 요소 하나하나가 데이터 해석에 직접적인 영향을 준다는 것을 학습
    - 다시 한다면, 학습 목적에 맞게 데이터 규모를 더 작게 시작했을 것

---

## 테니스 운동 효과 분석 (RHR 기반) | 2025.11.13 ~ 2025.11.23

- SNAPSHOT
    - 애플워치 RHR 데이터를 활용해, 테니스 운동이 장기적으로 휴식기 심박수에 미친 영향을 검증한 개인 데이터 분석 프로젝트

- ROLE
    - Problem Framing · Data Analysis · Statistical Testing

- BLOG
    - https://wewegh.tistory.com/143

- PROBLEM
    - 꾸준한 운동이 실제로 심혈관 지표 개선으로 이어졌는지 체감이 아닌 데이터로 확인하고 싶었음
    - 단순 전·후 비교가 아닌, 장기 추세와 분포 변화까지 함께 검증할 필요가 있다고 판단
    - 개인 건강 데이터에서도 통계적 검정이 의미를 가질 수 있는지 실험하고자 함

- KEY FEATURES
    - Apple Health RHR 데이터 기반 장기 추세 분석
        - 30일 이동 평균, 연도·월별 변화 시각화
    - 분포 중심 분석
        - boxplot·violin plot을 통한 중심 이동과 분산 변화 확인
    - 통계적 가설 검정
        - 비정규성 고려한 Kruskal-Wallis 검정 적용

- TECH STACK
    - Python · Pandas · Plotly · Non-parametric Statistics
    
- OUTCOME
    - 2022~2025년 동안 RHR이 일관되게 감소하며 분포 또한 안정화됨을 확인
    - 연도별 RHR 차이가 통계적으로 유의미함을 검정으로 입증

- REFLECTION
    - 개인 데이터라도 분석 설계와 검정 방식에 따라 충분히 설득력 있는 결론을 도출할 수 있음을 체감
    - 평균 변화보다 분포·변동성 해석이 건강 데이터에서 더 중요하다는 점을 명확히 인식
    - 다시 한다면, 수면·체중 등 교란 요인을 함께 모델링했을 것

---

## 프로젝트명

- SNAPSHOT: 프로젝트를 한 줄로 요약
- ROLE: 수행한 역할
- DOMAIN: 도메인 주소
- PROBLEM: 왜 이 문제를 선택했는지
- KEY FEATURES: 주요 기능 3개 내외 (불렛)
- TECH STACK  
- OUTCOME: 결과 또는 검증 포인트 2~3개
- REFLECTION: 배운 점 2가지, 다시 한다면 바꾸고 싶은 점 1가지. 길게 쓰지말고, 판단력만 드러내기
