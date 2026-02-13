
# 회고 작성 규칙

> 회고 작성하기 전, 반드시 숙지!

- '프로젝트 회고' 작성 규칙
    - `html` 파일 내의 위치에 본 문서의 특정 프로젝트에 대한 내용을 그대로 복사 붙여넣기 할 것
    - 본 문서에는 한글과 영어가 함께 작성되어있음. 영어도 그대로 복사 붙여넣기하여 data-i18n 속성 재구성 할 것
    - 1개의 문장만 있을 때는 불릿(`-`, `‣`)을 사용하지 말 것
    - 2개 이상의 문장일 때는 각 문장 앞에 `‣`를 붙이고 `<br>`로 줄바꿈할 것
    - 프로젝트 메타 정보(Snapshot, ROLE, Tech Stack)에는 불릿을 사용하지 말 것
    - 프로젝트 상세 템플릿 규칙
        - `projects/prj-ompt.html` 구조를 템플릿으로 삼아, Project Overview 카드(Snapshot/Role/Impact/Tech Stack)와 Decision Narrative 섹션(CONTEXT~LEARNING)이 동일한 레이아웃/스타일을 유지하도록 할 것
        - Project Overview 및 Decision Narrative 제목은 동일한 스타일과 텍스트 그림자를 사용하고, 각 섹션 상단에는 굵은 보더 라인이 있어야 함
        - Impact 항목은 “시험 대상 80% 축소 | …” 형식처럼 한 줄 텍스트로 구성하고, 해당 문장은 ko/en 번역 키(`micro_metric_combined`)로 관리할 것
    - 프로젝트 타이틀 규칙
        - `## 프로젝트 한글명 프로젝트 영문명 | 기간` 형식을 유지할 것
        - HTML 배너의 `data-i18n`(ko)에는 한글명을, `window.pageTranslations.en`에는 문서상 영문명을 동일하게 기입할 것
    - 매핑 정보는 다음과 같음
        - Snapshot: `meta-card-single` 내 Snapshot 블록
        - Impact: `meta-card-single` 내 Impact 문장(`micro_metric_combined`)
        - ROLE: `meta-card-single` 내 Role 블록
        - Tech Stack: `meta-card-single` 내 Tech Stack 블록
        1. CONTEXT: `details-grid`의 첫 번째 `step-box`
        2. DECISION: 두 번째 `step-box`
        3. FRAMING: 세 번째 `step-box`
        4. INSIGHT: 네 번째 `step-box`
        5. OUTCOME: 다섯 번째 `step-box`
        6. LEARNING: 여섯 번째 `step-box`
    - 다국어 토글 규칙
        - HTML 본문에는 한국어만 배치하고, 영어 문장은 `window.pageTranslations.en`에 정의할 것
        - `data-i18n`/`data-i18n-html`을 사용해 토글 시 한 언어만 화면에 노출되도록 구현할 것

---

# 프로젝트 회고

## GTX 통행 패턴 분석 GTX Travel Pattern Analysis | 2023.1.10 ~ 2023.6.8

> `projects/prj-tpa.html`

- Snapshot
    - 공공·민간 이동 데이터를 통합해 GTX 영향권의 통행 구조를 정량화하고, 노선 연장 및 신규 노선 검토를 위한 분석 기준을 설계
        - Integrated public and private mobility data to quantify travel structures within the GTX influence area and design analytical criteria for route extension and new line evaluation.

- Impact
    - GTX 영향권 내·외 통행 흐름을 행정구·OD·시간대 단위로 구조화하여 노선 적합성 판단 기준 체계화
        - Structured travel flows within and beyond the GTX influence area by administrative unit, OD pair, and time band, establishing criteria for route suitability assessment.
    - 이질적인 이동 데이터를 통합 분석 가능한 데이터 마트 구조로 정비하여 향후 GTX 영향 분석의 표준 프레임 구축
        - Consolidated heterogeneous mobility datasets into a unified data mart framework, creating a standard foundation for future GTX impact analyses.
    - 통행 구조 기반 해석 체계를 마련함으로써 단순 수요 규모 중심 논의에서 생활권 연결성 중심 평가로 전환
        - Shifted evaluation from raw demand volume to functional living-zone connectivity based on structural travel interpretation.

- ROLE
    - 데이터 마트 설계, 전처리 파이프라인 설계, 통행 지표 정의 및 GTX 영향권 패턴 분석 수행
        - Designed the data mart architecture, built preprocessing pipelines, and defined travel indicators to analyze GTX influence-area patterns.

- Tech Stack
    - Python, SQL, Time-Series Aggregation, OD Matrix Modeling, RNN (통행 패턴 예측), Geospatial Analysis

1. CONTEXT
    - GTX A·B·C 노선은 수도권 주요 거점을 30분대로 연결하는 것을 목표로 추진되고 있었음
        - The GTX A, B, and C lines were being developed to connect major metropolitan hubs within 30 minutes.
    - 그러나 GTX 영향권 내·외의 실제 통행 구조에 대한 통합적 분석 근거는 제한적이었음
        - However, integrated analytical evidence on actual travel structures within and beyond the GTX influence area was limited.
    - 교통카드, 티맵 내비게이션, 기지국 데이터 등 다양한 이동 데이터가 존재했으나, 단위·공간 기준·집계 방식이 상이하여 직접 비교 및 통합 해석이 어려운 상황
        - Although transport card, TMAP navigation, and telecom base-station datasets were available, differences in units, spatial definitions, and aggregation standards made direct comparison and integration difficult.

2. DECISION
    - GTX 노선 연장 및 신규 노선 발굴은 대규모 재정이 수반되는 정책적 판단이었음
        - Extending or introducing new GTX lines required large-scale public investment decisions.
    - 단순 통행량 합계만으로는 노선 적합성을 설명하기 어려웠으며, 실제 생활권 연결 구조를 반영한 해석이 필요했음
        - Total travel volume alone was insufficient to explain route suitability; interpretations needed to reflect functional living-zone connectivity.
    - 영향권을 어떻게 정의하고 해석하느냐에 따라 정책 방향과 투자 우선순위가 달라질 수 있는 상황이었음
        - The way the influence area was defined and interpreted could directly affect policy direction and investment priorities.

3. FRAMING
    - “GTX는 단순히 통행량이 많은 구간을 연결하는 사업인가, 아니면 기존 생활권 구조를 재편하는 사업인가?”
        - “Is GTX merely connecting high-volume corridors, or is it reshaping existing living-zone structures?”
    - “GTX 영향권은 행정 경계 기준인가, 실제 OD 흐름 기준인가?”
        - “Should the GTX influence area be defined by administrative boundaries or by actual OD flows?”

4. INSIGHT
    - 교통카드 데이터는 정기적 출퇴근 흐름을, 티맵 데이터는 차량 기반 중장거리 이동을, 기지국 데이터는 체류 중심의 생활권 범위를 보여주며 서로 다른 이동 층위를 형성함을 확인
        -  Transport card data captured regular commuting flows, TMAP data reflected long-distance vehicle movements, and telecom data represented residence-centered living zones—each forming a distinct mobility layer.
    - 일부 외곽 지역은 행정구 경계를 넘는 OD 흐름이 강하게 형성되어 있어, GTX 영향권을 행정 단위가 아닌 ‘통행 연결 구조’ 기준으로 해석해야 함을 확인
        - Certain outer areas exhibited strong cross-boundary OD flows, indicating that the GTX influence area should be interpreted based on structural connectivity rather than administrative borders.
    - 시간대별 분석 결과, 출퇴근 집중형 축과 주말·비정기 이동 중심 축이 구분되며, 노선별 기능적 성격이 상이하게 나타나는 패턴 발견
        - Time-band analysis revealed distinct corridor types—peak-hour commuter axes versus weekend and irregular travel axes—highlighting functional differences across lines.

5. OUTCOME
    - GTX 영향권을 단일 통행량 기준이 아닌, 통행 규모·OD 연결성·시간대 집중도 등 다층 지표로 평가하는 구조로 전환
        - Shifted evaluation of the GTX influence area from a single-volume metric to a multi-layered framework incorporating travel magnitude, OD connectivity, and temporal concentration.
    - 노선 연장 및 신규 노선 검토 시, 생활권 연결성과 구조적 수요 패턴을 반영한 분석 체계 수립
        - Established a route evaluation approach that reflects structural demand patterns and functional living-zone connectivity.
    - 해당 데이터 마트 구조를 기반으로 GTX 통행 예측 모델(RNN 기반) 개발의 기초 데이터로 확장
        - Extended the resulting data mart framework as foundational input for RNN-based GTX travel prediction modeling.

6. OUTCOME
    - 대규모 교통 인프라 사업에서 중요한 것은 “수요의 크기”가 아니라 “연결 구조의 방향성”임을 체득
        - Learned that in large-scale transport infrastructure projects, structural connectivity matters more than raw demand magnitude.
    - 서로 다른 이동 데이터를 정합시키는 과정이 단순 전처리가 아니라, 정책 해석 단위를 정의하는 전략적 설계 행위임을 인식
        - Recognized that aligning heterogeneous mobility datasets is not merely preprocessing but a strategic act of defining policy interpretation units.
    - 이후 모든 프로젝트에서 지표를 설계할 때, 먼저 “이 지표가 구조를 설명하는가?”를 판단 기준으로 삼는 사고 습관 형성
        - Since then, I consistently evaluate whether a metric explains structural patterns before adopting it as a decision criterion.

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
- Impact
    - 시험 대상 80% 축소 | 연간 3천만원 비용 절감 | 리드타임 6개월 → 단축
        - Reduced testing scope by 80% | saved ₩30M annually | cut lead time from six months.
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

## RAG 기반 원료 정보 검색 서비스 | RAG-powered Ingredient Retrieval Service  | 2025.4.9 ~ 2025.11.21

> `projects/prj-irf.html`

- Snapshot
    - 원료 첨부파일 약 47만 건을 대상으로 한 RAG 기반 시맨틱 검색 시스템 구축
        - Built a RAG-based semantic search system covering approximately 470,000 ingredient-related documents.
- Impact
    - 수작업 문서 탐색 방식 대체 및 검색 리드타임 대폭 단축 | 사내 시스템 기능 확장
        - Replaced manual document lookup with a semantic search workflow, significantly reducing search lead time | Expanded functionality of the internal system
- ROLE
    - 원료 문서 텍스트 추출, 청킹 전략 설계, 임베딩 생성, 벡터 저장 구조 설계 및 시맨틱 검색 로직 구현 담당
        - Responsible for text extraction from ingredient documents, chunking strategy design, embedding generation, vector storage schema design, and implementation of the semantic retrieval logic.

- Tech Stack
    - AWS Bedrock Embedding, PostgreSQL (pgvector), AWS S3, AWS Lambda, OpenSearch, RAG Architecture

1. CONTEXT
    - 사내에는 PDF, Word, Excel 등 다양한 형식의 원료 관련 첨부파일이 약 47만 건 이상 축적되어 있었음
        - Over 470,000 ingredient-related files had accumulated internally in diverse formats such as PDF, Word, and Excel.
    - 기존 검색은 파일명 또는 단순 키워드 매칭 기반으로 동작하여, 동일 의미라도 표현이 다르면 검색되지 않는 구조
        - The existing search relied on file names or keyword matching, often failing when semantically similar content was phrased differently.
    - 연구원 및 RA 담당자는 필요한 정보를 찾기 위해 문서를 직접 열람하며 반복 탐색을 수행
        - Researchers and RA staff frequently had to open and manually scan multiple documents to locate relevant information.

2. DECISION
    - 원료 안전성, 규제 대응, 고객 대응 과정에서 정확한 문서 근거 확보는 필수적이었음
        - Accurate document references were essential for ingredient safety validation, regulatory 대응, and client communication.
    - 그러나 검색 정확도가 낮아 자료 탐색에 과도한 시간이 소요되고, 정보 누락 리스크가 상존
        - Low search precision led to excessive time spent on retrieval and persistent risks of missing critical information.
    - 단순 기능 개선이 아니라, “검색 체계 자체를 어떻게 재정의할 것인가”에 대한 판단이 필요한 상황
        - The issue required not incremental improvement but a fundamental redesign of the retrieval paradigm.

3. FRAMING
    - “문서를 더 잘 찾을 수 있을까?”가 아니라, “사용자의 질문 의도를 이해하고, 문서 내 의미 단위로 답을 반환할 수 있는가?”로 재정의
        - Reframed the problem from “How can we improve document search?” to “Can we understand user intent and return meaning-level answers from within documents?”
    - 검색 결과를 파일 단위가 아닌 ‘문서 청크 + 맥락 정보’ 단위로 제공하는 구조를 목표로 설정
        - Defined the goal as returning results at the chunk level with contextual metadata rather than at the file level.

4. INSIGHT
    - 문서를 일정 길이로 청킹하고 임베딩했을 때, 동일 원료에 대한 표현 차이에도 불구하고 의미적으로 근접한 벡터 공간에 분포함을 확인
        - By chunking documents and embedding them, I observed that semantically similar descriptions of the same ingredient clustered closely in vector space despite lexical differences.
    - 파일 단위 검색 대비 청크 단위 검색이 질의-응답 정확도와 맥락 전달력 측면에서 구조적으로 우위
        - Chunk-level retrieval demonstrated structural advantages over file-level search in both query relevance and contextual clarity.
    - 메타데이터(원료코드, 문서명, 페이지 번호)를 함께 반환할 때 사용자의 신뢰도가 크게 향상
        - Returning metadata such as ingredient code, document name, and page number significantly improved user trust and interpretability.

5. OUTCOME
    - AWS S3에 문서를 저장하고, OpenDataLoader로 텍스트를 추출한 뒤 AWS Lambda 기반 전처리 파이프라인 구축
        - Stored documents in AWS S3 and built a preprocessing pipeline using OpenDataLoader and AWS Lambda.
    - AWS Bedrock 임베딩 모델을 활용해 문서 청크를 벡터화하고, PostgreSQL(pgvector)에 저장
        - Vectorized document chunks using AWS Bedrock embeddings and stored them in PostgreSQL with pgvector.
    - OpenSearch와 연동하여 Top-5 유사 청크를 반환하고, 메타 정보를 포함한 검색 API 구현
        - Integrated OpenSearch to return the Top-5 most relevant chunks along with metadata via a search API.
    - 기존 키워드 기반 검색 체계를 의미 기반 RAG 검색 구조로 확장
        - Expanded the internal system from keyword-based retrieval to a RAG-powered semantic search architecture.

6. LEARNING
    - 검색 문제는 “더 많은 데이터를 색인하는 문제”가 아니라, “사용자의 질문을 어떤 단위로 해석하고 반환할 것인가”의 설계 문제라는 관점 정립
        - Established the perspective that retrieval is not about indexing more data, but about designing how user intent is interpreted and returned.
    - LLM·임베딩 기술은 단순 적용이 아니라, 기존 업무 흐름과 결합될 때 조직의 판단 구조를 재설계하는 도구가 될 수 있다는 인식 확장
        - Recognized that LLM and embedding technologies become transformative not by adoption alone, but by being embedded into existing decision workflows to reshape how the organization reasons with information.
    - 데이터 파이프라인, 인프라, 검색 UX를 하나의 의사결정 구조로 통합적으로 설계하는 사고로 확장
        - Expanded my thinking toward integrating data pipelines, infrastructure, and search UX as a unified decision-support architecture.

---

## 유사도 기반 제품 탐색 서비스 Similarity-based Product Discovery Service | 2026.1.14 ~ 2026.2.6

> `projects/prj-pds.html`

- Snapshot
    - 전성분 기반 TF-IDF + Cosine 유사도를 활용해 연구원이 직관적으로 유사 제품을 탐색·비교할 수 있는 웹 서비스 구현
        - Built a product discovery service that enables researchers to intuitively explore and compare similar products using ingredient-level TF-IDF and cosine similarity.
- Impact
    - 초기 유사 제품 탐색 소요시간 60% 단축 | 사내 시스템 기능 확장
        - Reduced initial product discovery time by 60% | Expanded functionality of the internal system
- ROLE
    - 문제 정의부터 유사도 로직 설계, UI 목업, 프론트엔드 구현 및 배포까지 End-to-End 단독 수행
        - Led the project independently end-to-end, from problem definition and similarity logic design to UI prototyping, frontend implementation, and deployment.
- Tech Stack
    - TF-IDF, Cosine Similarity, React

1. CONTEXT
    - 제품 연구 초기 단계에서 타겟 제품을 선정하기 위해 다수의 제품 전성분을 개별적으로 열람·비교해야 하는 구조 존재
        - During the early stages of product research, researchers had to manually review and compare ingredient lists across multiple products to identify suitable target references.
    - 유사한 제형 감을 가진 제품을 찾기 위해 엑셀 기반 검색과 수작업 비교가 반복되며, 탐색 과정이 개인 경험과 감에 의존하는 경향 존재
        - To find products with similar formulation characteristics, they repeatedly relied on Excel-based searches and manual comparisons, and the exploration process tended to depend heavily on individual experience and intuition.

2. DECISION
    - 제품 탐색 속도와 초기 후보 선정의 방향성은 이후 제형 설계 및 실험 범위에 직접적인 영향을 미치는 요소
        - The speed of product exploration and the direction of initial candidate selection directly influence subsequent formulation design and the scope of experimentation.
    - 유사 제품 탐색 과정의 비효율이 연구 판단 지연과 후보 축소의 불확실성으로 이어질 가능성 존재
        - The inefficiency of the similarity exploration process had the potential to delay research decisions and increase uncertainty in narrowing down candidate products.

3. FRAMING
    - “전성분의 구조적 유사성을 기반으로 연구 초기 탐색 과정을 더 일관되게 만들 수 있는가?”
        - “Can we make the early-stage exploration process more consistent by leveraging structural similarity in full ingredient lists?”
    - “유사도 점수를 제시하는 것만으로 충분한가, 아니면 판단에 필요한 맥락까지 함께 제공해야 하는가?”
        - “Is presenting a similarity score alone sufficient, or should we also provide contextual information that supports researchers’ judgment?”

4. INSIGHT
    - TF-IDF + Cosine 기반 유사도 산출 결과 자체보다, 타겟 제품과의 성분 겹침·차이를 함께 시각적으로 제시할 때 이해도가 높아지는 패턴 확인
        - Through the PoC, I observed that researchers’ understanding improved significantly when ingredient overlaps and differences with the target product were visually presented alongside the TF-IDF + cosine similarity score, rather than relying on the score alone.
    - 유사도 점수는 방향성을 제공하지만, 실제 판단은 “어떤 성분이 왜 겹치는지”를 보는 순간에 이루어진다는 점 발견
        - While the similarity score provided directional guidance, actual judgment tended to occur when researchers examined which ingredients overlapped and why.
    - Top-N 전체 리스트보다 Top-5 내에서 직관적으로 비교 가능한 구조가 탐색 집중도를 높임
        - Additionally, presenting a focused Top-5 comparison—rather than a longer Top-N list—helped increase concentration and usability during exploration.

5. OUTCOME
    - 제품 검색 → 타겟 선택 → Top-5 유사 제품 비교 → 성분 겹침·차이 음영 처리로 이어지는 탐색 흐름 설계 및 웹 구현
        - Designed and implemented a structured exploration flow: product search → target selection → Top-5 similar product comparison → visual highlighting of ingredient overlaps and differences.
    - 성분을 원문 순서 그대로 유지하며, 타겟과 겹치는 성분은 파란 음영, 타겟에는 없고 해당 제품에만 존재하는 성분은 노란 음영 처리 → 판단 과정의 가독성과 해석 가능성 강화
        - Ingredient lists were displayed in their original order, with overlapping ingredients highlighted in blue and ingredients unique to the compared product highlighted in yellow, improving readability and interpretability during decision-making.
    - 배포 이후 긍정적 사용자 피드백을 확보했으며, 사내 서비스 기능 확장으로 이어짐
        - Following deployment, the service received positive user feedback and was subsequently expanded as a feature within the internal system.

6. LEARNING
    - 유사도 문제의 핵심은 알고리즘 정밀도가 아니라, 사용자가 어떤 단서로 판단을 내리는지에 대한 이해에 있음을 체득
        - Learned that in similarity-related problems, the core issue is not the marginal precision of the algorithm, but understanding the cues users rely on when making judgments.
    - 모델 결과를 “정답”으로 제시하는 대신, 판단을 돕는 구조로 설계할 때 분석 결과가 실제 업무 흐름에 자연스럽게 흡수된다는 관점 확립
        - By designing the system to support interpretation rather than presenting the model output as a definitive answer, analytical results were more naturally integrated into the actual research workflow.
    - 데이터 기반 기능 역시 하나의 ‘프로덕트’로 보고, 사용자 행동 흐름을 중심으로 설계해야 한다는 사고 확장
        - This experience reinforced the perspective that data-driven features should be treated as products, designed around user behavior and decision flow.
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
