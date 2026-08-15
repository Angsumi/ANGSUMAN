# ⚜️ Angsuman Das | Academic & Research Portfolio

[![Portfolio Website](https://img.shields.io/badge/Live_Portfolio-https%3A%2F%2Fangsumi.github.io%2FANGSUMAN%2F-0284c7?style=for-the-badge&logo=google-chrome&logoColor=white)](https://angsumi.github.io/ANGSUMAN/)
[![Document Center](https://img.shields.io/badge/Download_Center-https%3A%2F%2Fangsumi.github.io%2FANGSUMAN%2Fdownload.html-2d6a4f?style=for-the-badge&logo=github-pages&logoColor=white)](https://angsumi.github.io/ANGSUMAN/download.html)
[![PDF Binder Tool](https://img.shields.io/badge/PDF_Binder_Tool-https%3A%2F%2Fangsumi.github.io%2FANGSUMAN%2Fpdf--binder.html-d97706?style=for-the-badge&logo=adobe-acrobat-reader&logoColor=white)](https://angsumi.github.io/ANGSUMAN/pdf-binder.html)
[![CSIR NET JRF](https://img.shields.io/badge/CSIR--UGC_NET_JRF-AIR_180_(97.50%25)-d97706?style=for-the-badge&logo=academy&logoColor=white)](https://angsumi.github.io/ANGSUMAN/#credentials)
[![IELTS Academic](https://img.shields.io/badge/IELTS_Academic-Overall_7.0_(C1)-4f46e5?style=for-the-badge&logo=english&logoColor=white)](https://angsumi.github.io/ANGSUMAN/#credentials)

Welcome to the official repository for **Angsuman Das** — Bioinformatician, Genomic Data Science Researcher, and Educator. This repository serves as the centralized source code and digital repository for my interactive web portfolio, peer-reviewed scientific publications, official academic credentials, document download center, and multi-document PDF binder tool.

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Web Application & Pages](#-web-application--pages)
  - [1. Main Portfolio Landing Page (`index.html`)](#1-main-portfolio-landing-page-indexhtml)
  - [2. Document Download Center & Converter (`download.html`)](#2-document-download-center--converter-downloadhtml)
  - [3. Unified Multi-Document PDF Binder Tool (`pdf-binder.html`)](#3-unified-multi-document-pdf-binder-tool-pdf-binderhtml)
- [Key Features & Interactivity](#-key-features--interactivity)
- [Repository Directory Structure](#-repository-directory-structure)
- [Document Catalog Summary](#-document-catalog-summary)
- [Technical Architecture & Tech Stack](#-technical-architecture--tech-stack)
- [Local Installation & Development](#-local-installation--development)
- [Contact Information](#-contact-information)

---

## 🔬 Overview

I am a **CSIR-UGC NET JRF qualified researcher** (Rank 180 in Life Sciences) with a Master of Science in Zoology (Biochemistry specialization) from Rajiv Gandhi University and a Bachelor of Science (Honours) from Gauhati University. My research bridges **zoology, computational biology, and genomic data science**, focusing on:

- **Structural Bioinformatics**: Homology Modelling, Molecular Docking, and Structural Analysis of Human Toll-Like Receptors (TLR).
- **Genomic Pipelines**: RNA-seq transcriptomics, differential expression analysis, sequence alignment, and Bioconductor R workflows.
- **Ecology & Ethnozoology**: Physico-chemical aquatic ecosystem assessment, biological wastewater treatment, and ethnopharmacological fauna surveys across Northeast India.

---

## 🌐 Web Application & Pages

The web application is engineered as a responsive, dual-theme single-page portfolio with a companion document download center and an intelligent PDF binder tool.

### 1. Main Portfolio Landing Page (`index.html`)
The main portfolio is structured into **6 dedicated, full-width sections**, each with a prominent section header matching the top navigation bar:

- **Hero Section (`#hero`)**: Features status badges (CSIR NET AIR 180, Available for Research), name, summary bio, action buttons (*Download Center, PDF Binder Tool, Preview Resume*), and a 5-box key statistics grid (*NET Rank, ADRE Selection, 8+ Publications, IELTS Score, M.Sc. CGPA*).
- **`01 • ACADEMIC BACKGROUND` (`#about`)**: Full-width 2-column bento grid detailing M.Sc. Zoology, B.Sc. Zoology (Honours), AHSEC 12th Science, and SEBA 10th HSLC degrees with instant marksheets and degree preview triggers.
- **`02 • VALIDATED EXCELLENCE` (`#credentials`)**: Full-width 3-column grid featuring competitive exam credentials (CSIR NET JRF Award Letter, Johns Hopkins 8-Course Genomic Data Science Specialization, IELTS C1 Band, PGDCA Computer Diploma, SLET Life Sciences, and Fine Arts Diploma).
- **`03 • TECHNICAL TOOLKIT` (`#skills`)**: Features an interactive real-time skill search bar filtering 18+ technical skills grouped into *Programming & CLI*, *Computational Biology*, and *Biological Sciences*.
- **`04 • CAREER PATH` (`#experience`)**: Full-width timeline detailing academic teaching experience as Assistant Professor at THB College, Junior Assistant selection under ADRE 2025, Research Traineeship at RASA Life Science Informatics (Pune), and IIT Kharagpur Internship.
- **`05 • SCIENTIFIC RESEARCH` (`#publications`)**: Features interactive category filter tabs (*All, Environmental, Aquatic, AI & Bio, Ethnozoology*) displaying 8 peer-reviewed research papers with direct in-page PDF preview triggers.
- **`06 • DIRECT CONTACT` (`#contact`)**: Dedicated contact section with email cards, phone/WhatsApp pills, social links, and an instant contact drawer.

### 2. Document Download Center & Converter (`download.html`)
The document center provides an organized repository of 40+ official documents, certificates, recommendation letters, identity cards, research papers, and study notes.
- **Live Document Search Bar (`#docSearch`)**: Instantly filters the document archive by title or category.
- **Custom Format & Size Converter (`#convertModal`)**: An integrated client-side document processing tool allowing users to convert any image or document into **PDF, JPG, PNG, or WEBP** formats at **25%, 50%, 75%, or 100% resolution**.

### 3. Unified Multi-Document PDF Binder Tool (`pdf-binder.html`)
A specialized web tool branching from the front page that allows users to search, select, queue, and compile multiple documents into a single united PDF file:
- **Search & Multi-Selection**: Search across Aadhaar, PAN, Passport, Marksheets, Degrees, Certificates, and LORs, selecting items with checkboxes.
- **Page Queue & Re-Ordering**: Interactively move pages up/down or remove items from the selected queue basket.
- **Page Size & Scaling Controls**: Choose output page format (*A4 Standard, US Letter, Original Image Aspect Ratio*), layout scale (*Fit with Margins, Fill Page, Maintain Aspect Ratio*), and page orientation (*Auto-Detect, Forced Portrait, Forced Landscape*).
- **United PDF Export Engine**: Compiles all queued pages into a single multi-page PDF (`.pdf`) download using `jsPDF` and Blob canvas rendering.

---

## ⚡ Key Features & Interactivity

- 📚 **United PDF Compiler**: Search, select, queue, re-order, and combine multiple documents into a single united multi-page PDF.
- 🎨 **Soothing Editorial Design System**: Default **Eye-Soothing Warm Light Theme** (`#FAF9F5` base canvas) designed to eliminate eye strain, with soft sage/sky teal accents.
- 🌙 **Dual-Theme Toggle Engine**: Top header toggle button (`#themeToggleBtn`) switches between Soothing Warm Light and Serene Slate Dark Mode (`#0D1117`) with `localStorage` persistence.
- 🖼️ **In-Page Document Lightbox Modal**: Clicking "Preview PDF" or "View" opens an interactive modal directly over the page to inspect high-resolution certificates, marksheets, or PDFs without leaving the site.
- ⚙️ **Client-Side File Converter (CORS Taint Free)**: Uses `fetch()` Blob URLs (`createObjectURL`) and HTML5 canvas combined with `jsPDF` to perform client-side file conversions with zero server dependencies.
- 🔍 **Real-Time Skill & Document Search**: Instant zero-latency filter searching across technical skills and document downloads.
- 📑 **Clean Image-Free Layout**: Pure typography-first design (`Plus Jakarta Sans`, `Cormorant Garamond`, `JetBrains Mono`) with zero decorative stock image noise.

---

## 📁 Repository Directory Structure

```
ANGSUMAN/
├── index.html                   # Main Portfolio Landing Page
├── download.html                # Document Download Center & Custom Converter
├── pdf-binder.html              # Unified Multi-Document PDF Binder Web Tool
├── style.css                    # Dual-Theme Soothing CSS Design System
├── script.js                   # Interactivity Engine (Theme, Lightbox, Search, Filters)
├── comprehensive_resume_data.txt# Detailed Text Summary of All Qualifications & Marks
├── README.md                    # Comprehensive Repository Documentation
├── AGENTS.md                    # Workspace Isolation & Repository Boundary Rules
└── documents/                   # Official Document Repository
    ├── academic/                # Academic Marksheets & Degree Certificates
    │   ├── 10th_Matric/         # HSLC Marksheet & Pass Certificate
    │   ├── 12th_HS/             # AHSEC Higher Secondary Marksheet & Certificate
    │   ├── BSc_Bachelor/        # Gauhati University Grade Sheets & Degree Certificate
    │   └── MSc_Master/          # Rajiv Gandhi University Semester Marksheets & Degree
    ├── certificates/            # PGDCA, Johns Hopkins, Fine Arts & Literacy Certificates
    ├── competitive_exams/       # CSIR NET JRF Award Letter, IELTS, SLET Result Sheets
    ├── identity_and_personal/   # Aadhaar, PAN, Passport, Caste, Income, Photo & Signature
    ├── publications/            # 8 Peer-Reviewed Research Papers & Manuscripts (PDF)
    ├── recommendations/         # Letters of Recommendation (Abhijit Das, Pankaj Kumar, RASA)
    ├── resume/                  # Compiled Curriculum Vitae & Resume PDFs
    ├── study_materials/         # Ecology, Evolution, Bioinformatic Notes & Datasets
    └── work_and_experience/     # THB College, RASA, Tocklai & ADRE Selection Letters
```

---

## 📖 Document Catalog Summary

| Category | Key Files Included | Format |
| :--- | :--- | :---: |
| **Competitive Exams** | CSIR NET JRF Award Letter, NET Scorecard, IELTS Academic Report, SLET Result | `JPG` / `PDF` |
| **Academic Degrees** | M.Sc. Zoology Degree, M.Sc. Marksheet, B.Sc. Degree, B.Sc. Grade Sheet, 12th & 10th | `JPG` / `PDF` |
| **Certifications** | Johns Hopkins Genomic Data Science, PGDCA Diploma, Fine Arts Diploma, Computer Literacy | `JPG` |
| **Work Experience** | THB College Assistant Professor Experience, RASA Life Science Trainee Cert, ADRE Selection | `JPG` / `PDF` |
| **Publications** | 8 Research Papers (Dye Pollution, Aquatic Remedies, Mass Spec, AI in Bio, Ethnozoology) | `PDF` |
| **Identity & Personal** | Aadhaar (Front/Back), PAN, Driving License, Voter ID, Passport, OBC NCL, Photo & Sig | `JPG` |

---

## 🛠️ Technical Architecture & Tech Stack

- **HTML5 & Semantic Structure**: Accessible markup with strict ARIA labels, semantic tags, and descriptive metadata.
- **Tailwind CSS (CDN) & Vanilla CSS**: Custom CSS design system using CSS variables (`:root` and `[data-theme="dark"]`), subtle micro-animations, diffuse shadows, and responsive grid utilities.
- **JavaScript (ES6+)**: Modular script handling theme toggles, reveal animations, tab filtering, real-time input filtering, and modal lifecycle.
- **Client-Side PDF & Canvas Processing**: `jsPDF` library combined with HTML5 Canvas `toDataURL` for converting images/documents to custom scales and compiling multi-page unified PDFs.
- **Iconography & Fonts**: Google Fonts (*Plus Jakarta Sans, Cormorant Garamond, JetBrains Mono*), FontAwesome 6.5.1, and Devicon.

---

## 🚀 Local Installation & Development

To clone and run this portfolio repository locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Angsumi/ANGSUMAN.git
   cd ANGSUMAN
   ```

2. **Run a Local Web Server**:
   ```bash
   python3 -m http.server 8080
   ```

3. **View in Browser**:
   Open `http://localhost:8080` in your web browser.

---

## ✉️ Contact Information

- **Name**: Angsuman Das
- **Personal Email**: [angsudas62@gmail.com](mailto:angsudas62@gmail.com)
- **Academic Email**: [angsuman.das@rgu.ac.in](mailto:angsuman.das@rgu.ac.in)
- **WhatsApp / Phone**: [+91 7896505109](https://wa.me/917896505109)
- **GitHub**: [github.com/Angsumi](https://github.com/Angsumi)
- **Blog**: [rangachakua.blogspot.com](https://rangachakua.blogspot.com)

---

<div align="center">
  <sub>Designed &amp; Engineered by Angsuman Das &bull; CSIR-UGC NET JRF</sub>
</div>
