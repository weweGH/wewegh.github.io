# 사이트 화면 구조 (Information Architecture)

## 1. Home

- 파일: `index.html`
- 목적: 깃허브 포트폴리오 메인 랜딩 페이지
- 주요 섹션:
    - 

- 하위 이동
    - ABOUT 클릭 → `about-us.html`
    - SERVICES 클릭 → `services.html`
    - PAGES/PORTFOLIO 클릭 → `portfolio.html`
    - PAGES/PROJECT DETAILS 클릭 → `portfolio-details.html`
    - PAGES/ELEMENTS 클릭 → `elements.html`
    - BLOG/BLOG 클릭 → `https://wewegh.tistory.com`
    - BLOG/BLOG DETAILS 클릭 → `single-blog.html`
    - CONTACT 클릭 → `contact.html`

---

## 2. ABOUT

- 파일: `about-us.html`
- 목적: 
- 내용:

---

## 3. SERVICES

- 파일: `services.html`
- 목적: 
- 내용:

---

## 4. PAGES/PORTFOLIO

- 파일: `portfolio.html`
- 목적: 
- 내용:

---

## 5. PAGES/PROJECT DETAILS

- 파일: `portfolio-details.html`
- 목적: 
- 내용:

---

## 6. PAGES/ELEMENTS

- 파일: `elements.html`
- 목적: 
- 내용:

---

## 7. BLOG/BLOG

- 파일: `blog.html`
- 목적: 
- 내용:

---

## 8. BLOG/BLOG DETAILS

- 파일: `single-blog.html`
- 목적: 
- 내용:

---

## 9. CONTACT

- 파일: `contact.html`
- 목적: 
- 내용:

---

## 페이지 구조

```mermaid
graph TD
    Home[index.html<br/>Home] --> Blog[blog.html<br/>Blog]
    Home --> Services[services.html<br/>Services]
    Home --> Portfolio[portfolio.html<br/>Portfolio]
    Home --> About[about-us.html<br/>About]
    Home --> Contact[contact.html<br/>Contact]

    Blog --> SingleBlog[single-blog.html<br/>Blog Detail]
    Portfolio --> PortfolioDetails[portfolio-details.html<br/>Project Detail]
```    

```mermaid
flowchart TD
    Home[Home/index.html]
    About[About/about-us.html]
    Services[Services/services.html]
    Portfolio[Portfolio/portfolio.html]
    Blog[Blog/blog.html]
    Contact[Contact/contact.html]

    Home -->|Navbar: About| About
    Home -->|Navbar: Services| Services
    Home -->|Navbar: Portfolio| Portfolio
    Home -->|Navbar: Blog| Blog
    Home -->|Navbar: Contact| Contact
    Home -->|"Hero CTA: More About Me"| About
```

## Home → 다른 페이지 이동 경로

| 클릭 요소               | 이동 대상              | 코드 위치                                 |
| ----------------------- | ---------------------- | ----------------------------------------- |
| Home                    | index.html             | <a class="nav-link" href="index.html">    |
| About                   | about-us.html          | <a class="nav-link" href="about-us.html"> |
| Services                | services.html          | <a class="nav-link" href="services.html"> |
| Pages → Portfolio       | portfolio.html         | dropdown                                  |
| Pages → Project Details | portfolio-details.html | dropdown                                  |
| Pages → Elements        | elements.html          | dropdown                                  |
| Blog → Blog List        | blog.html              | dropdown                                  |
| Blog → Blog Details     | single-blog.html       | dropdown                                  |
| Contact                 | contact.html           | <a class="nav-link" href="contact.html">  |