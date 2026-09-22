const content = {
  en: {
    nav: [
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Experience", href: "#services" },
      { label: "Contact", href: "#contact" }
    ],
    navCta: "Download CV",
    hero: {
      eyebrow: "Ayoub Sowed",
      headline: "IT Support Specialist",
      subtitle:
        "IT Support Specialist with 7 years across help desk, identity & access management (Okta, Google Workspace), device management (Jamf, Intune), and IT operations — plus hands-on experience building and maintaining the business systems I support.",
      actions: {
        projects: "View Projects",
        cv: "Download CV",
        contact: "Contact"
      },
      stats: [
        { value: "Dubai, UAE", label: "Location" },
        { value: "7+ Years", label: "Experience" },
        { value: "Available Immediately", label: "Status" }
      ],
      panelBadge: "Professional summary",
      panelTitle: "First point of contact for people, systems, and access",
      panelText:
        "My background spans help desk support, identity and access management, device management, and everyday IT operations — backed by hands-on experience building and maintaining the systems I support.",
      panelPoints: [
        "Manages identity & access across Okta and Google Workspace (SSO, MFA, provisioning)",
        "Administers device management with Jamf (macOS) and Microsoft Intune (Windows)",
        "Owns onboarding/offboarding, ticketing, and IT operations end to end"
      ]
    },
    about: {
      kicker: "About",
      title: "Professional Summary",
      text:
        "IT Support Specialist based in Dubai, UAE with 7 years of experience across help desk, internal IT support, and systems work, including identity and access management (Okta, Google Workspace, SSO, MFA), device management (Jamf, Microsoft Intune), and everyday collaboration tools (Slack, Microsoft 365). Comfortable being the first point of contact for employees — triaging tickets, resolving workstation and account issues, and managing onboarding and offboarding end to end. Uses scripting and automation to cut down repetitive manual work and keep systems running smoothly.",
      cardTitle: "Highlights",
      bullets: [
        "7 years across help desk, IT support, and systems administration",
        "Identity & access management: Okta, Google Workspace, SSO, MFA",
        "Device management: Jamf (macOS) and Microsoft Intune (Windows)",
        "Clear, patient communicator for technical and non-technical colleagues"
      ]
    },
    skills: {
      kicker: "Skills",
      title: "Core Skills",
      intro:
        "Grouped by the systems, tools, and operational areas I work in day to day.",
      groups: [
        {
          title: "Identity & Access",
          items: ["Okta", "Google Workspace", "SSO", "MFA", "Account Provisioning"]
        },
        {
          title: "Device & MDM",
          items: ["Jamf (macOS)", "Microsoft Intune (Windows)", "Hardware Diagnosis", "Mobile Device Support"]
        },
        {
          title: "Collaboration Tools",
          items: ["Slack", "Microsoft 365", "Teams", "Outlook", "SharePoint"]
        },
        {
          title: "Networking",
          items: ["TCP/IP", "DNS", "Wi-Fi", "VPN", "UniFi / Ubiquiti"]
        },
        {
          title: "IT Operations",
          items: ["Helpdesk Ticketing", "Onboarding / Offboarding", "Hardware Inventory", "Documentation"]
        },
        {
          title: "Application & Systems Support",
          items: ["Business Applications", "Databases", "APIs", "Integrations", "Hosting"]
        },
        {
          title: "Automation",
          items: ["Scripting", "Workflow Automation"]
        },
        {
          title: "Technical Tools",
          items: ["GitHub", "Git", "VS Code", "MySQL", "Supabase", "Netlify", "Hostinger"]
        }
      ]
    },
    projects: {
      kicker: "Projects",
      title: "Selected Work",
      intro:
        "Real systems and platforms I've built and supported — from community platforms to business tools and school administration systems.",
      ctaCase: "View Details",
      ctaDemo: "Contact",
      ctaMore: "View GitHub Profile",
      githubUrl: "https://github.com/Lazycharm",
      items: [
        {
          key: "career-pilot",
          title: "Career Pilot Platform",
          category: "AI Career Platform • UAE Market",
          image: "assets/projects/career-pilot-platform.webp",
          summary:
            "A full AI-driven career system designed to help UAE job seekers build ATS-optimized resumes, improve interview readiness, and increase hiring success.",
          stack: ["React", "Supabase", "Tailwind CSS", "AI Workflows"],
          overview:
            "Career Pilot is a job-readiness platform tailored for the UAE market, helping users build stronger resumes and prepare for interviews with more confidence.",
          problem:
            "Many job seekers struggle to create ATS-friendly resumes and present themselves effectively in a competitive hiring market.",
          solution:
            "I shaped a guided digital experience around resume optimization, interview preparation, and structured career support powered by smart workflows.",
          role:
            "Product direction, frontend development, UX structure, and integration of career-focused AI workflows.",
          outcome:
            "A clearer and more supportive job-search experience designed to improve application quality and interview readiness."
        },
        {
          key: "clearbill",
          title: "ClearBill",
          category: "Business Tool Platform • Billing & Invoicing",
          image: "assets/projects/document-system.webp",
          summary:
            "A billing, quotation, and invoice management system built to replace manual paperwork and streamline everyday business administration.",
          stack: ["Dashboard UI", "Scalable Architecture", "Tailwind CSS", "Workflow Automation"],
          overview:
            "ClearBill turns document-heavy billing processes into a cleaner, more organized workflow for growing businesses.",
          problem:
            "Manual quotation and invoicing processes often slow teams down, create inconsistency, and reduce operational clarity.",
          solution:
            "I designed a streamlined document experience with better structure, faster workflows, and a more professional interface for everyday business tasks.",
          role:
            "System planning, dashboard UX, interface design, and workflow structuring for scalable business operations.",
          outcome:
            "A more efficient document management experience that supports smoother operations and stronger client-facing professionalism."
        },
        {
          key: "iqra-school-management",
          title: "Iqra School Management System",
          category: "Education Platform • School Administration",
          image: "assets/projects/project-placeholder.svg",
          summary:
            "A WordPress-based school management system handling student records, grading, and automated report cards for Iqra school — replacing manual, paper-based administration.",
          stack: ["WordPress", "PHP", "MySQL", "Custom Plugin Development"],
          overview:
            "Built and maintained a custom school management plugin covering student records, class administration, subject and marks management, and automated report card generation.",
          problem:
            "Manual, paper-based student records and report cards made grading, attendance tracking, and academic administration slow and error-prone.",
          solution:
            "I developed and maintained custom PHP modules for grading, marks entry, class administration, and automated report card generation (including A-Level and standard formats), with ongoing fixes and feature patches.",
          role:
            "Systems development, PHP/WordPress plugin customization, database structure, and ongoing maintenance and bug fixes.",
          outcome:
            "A digitized school administration system that reduces manual paperwork and gives staff a reliable way to manage grades, records, and report cards."
        },
        {
          key: "bloom-broom",
          title: "Bloom & Broom",
          category: "Local Service Platform • Ajman Market",
          image: "assets/projects/bloom-broom.webp",
          summary:
            "A conversion-driven local service platform designed to turn Ajman residents into booked cleaning and maintenance clients through a streamlined WhatsApp funnel.",
          stack: ["React", "Tailwind CSS", "Framer Motion", "WhatsApp Funnel"],
          overview:
            "Bloom & Broom is a local service website created to generate trust quickly and convert service interest into direct booking conversations.",
          problem:
            "Local service businesses often lose leads when the path from landing page to inquiry is slow, unclear, or not mobile-friendly.",
          solution:
            "I built a lightweight, high-conversion experience with strong calls to action, clean messaging, and a WhatsApp-first funnel tailored for fast inquiries.",
          role:
            "Website strategy, frontend build, UX planning, and conversion-focused landing page execution.",
          outcome:
            "A sharper local service presence designed to improve lead quality and turn more visits into real conversations."
        },
        {
          key: "cashlink-platform",
          title: "CashLink Platform",
          category: "Multi-Service Platform • UAE Market",
          image: "assets/projects/cashlink-platform.webp",
          summary:
            "A scalable digital platform designed to unify services, businesses, and opportunities for the African community in the UAE.",
          stack: ["React", "Supabase", "Tailwind CSS", "Community Platform"],
          overview:
            "CashLink brings multiple services and community-facing opportunities into one structured digital ecosystem.",
          problem:
            "Users needed an easier way to discover relevant services, connect with businesses, and navigate opportunities within one trusted platform.",
          solution:
            "I focused on clear service discovery, organized platform structure, and a scalable front-end experience that could grow with the community.",
          role:
            "Platform UX, frontend development, structure planning, and system thinking for community-driven scale.",
          outcome:
            "A more accessible and engaging digital platform built to improve discovery, trust, and ongoing user participation."
        },
        {
          key: "barista-training-academy",
          title: "Barista Training Academy UAE",
          category: "Education Platform • UAE Market",
          image: "assets/projects/barista-training-academy.webp",
          summary:
            "A conversion-focused training website designed to attract UAE job seekers and turn them into enrolled students through clear messaging and strong calls to action.",
          stack: ["React", "Node.js", "Supabase", "Lead Funnels"],
          overview:
            "This education platform was built to promote barista training programs and convert interest into inquiries and enrollments.",
          problem:
            "Training providers need to communicate career outcomes clearly and reduce hesitation for prospective students who are comparing options.",
          solution:
            "I structured a persuasive landing experience around outcomes, urgency, and direct inquiry channels to support higher lead conversion.",
          role:
            "Landing page strategy, frontend implementation, lead funnel optimization, and conversion-focused content structuring.",
          outcome:
            "A stronger enrollment-focused website experience that helps generate more serious interest in training programs."
        }
      ]
    },
    services: {
      kicker: "Experience",
      title: "Where I've Worked",
      intro:
        "Professional experience across help desk support, systems administration, and technical operations.",
      items: [
        {
          title: "IT Support & Systems Specialist",
          company: "Blockcube Technical Services LLC",
          meta: "Seasonal · Feb 2025 – Present · United Arab Emirates · Hybrid",
          bullets: [
            "First point of contact for internal team members, triaging tickets and resolving hardware, software, and application issues",
            "Manages user accounts and access across Okta and Google Workspace, including password resets, MFA, and SSO troubleshooting",
            "Handles onboarding and offboarding end to end — provisioning accounts and hardware on day one, revoking access cleanly on exit",
            "Supports Slack and Microsoft 365 for everyday collaboration",
            "Maintains and troubleshoots the company website, monitoring performance and security",
            "Built internal quotation, invoicing, and receipt tools to replace manual processes",
            "Troubleshoots LAN, Wi-Fi, and VPN connectivity, including basic UniFi/Ubiquiti configuration",
            "Tracks hardware inventory and writes internal knowledge base articles"
          ]
        },
        {
          title: "IT Support Specialist / Systems Support",
          company: "Code & Circuit",
          meta: "Freelance · Mar 2025 – May 2026 · United Arab Emirates · Hybrid",
          bullets: [
            "Provided technical support across websites, business applications, hosting environments, and connected systems for multiple clients",
            "Set up and supported user accounts and authentication, including SSO and MFA, across client environments",
            "Built and maintained websites and custom business solutions using databases, REST APIs, authentication, and cloud hosting",
            "Managed deployments across Hostinger and Netlify and monitored systems for availability and performance"
          ]
        },
        {
          title: "Technical Support and Sales Officer",
          company: "Soft Point Electronic Chips Programming LLC",
          meta: "Contract · Oct 2024 – Feb 2026 · United Arab Emirates · Hybrid",
          bullets: [
            "Provided first-line technical support to business clients evaluating electronic programming and embedded hardware solutions",
            "Acted as the technical link between customers and engineering teams, gathering requirements and confirming specifications",
            "Supported product demonstrations, technical onboarding, and troubleshooting sessions"
          ]
        },
        {
          title: "Field Engineer / Web & Systems Support",
          company: "Broadmind Automation LTD",
          meta: "Full-time · Nov 2019 – Jun 2023 · Kampala, Uganda · Hybrid",
          bullets: [
            "Started in field engineering, working with industrial control boards, electrical installations, and technical equipment",
            "Progressed into website and systems support, developing and maintaining the company website",
            "Worked on website improvements, SEO, technical maintenance, and digital automation projects"
          ]
        }
      ]
    },
    why: {
      kicker: "Why Work With Me",
      title: "A partner who understands both the build and the business outcome",
      intro:
        "The difference is not just technical delivery — it’s knowing how design, development, SEO, and performance work together to create stronger business results.",
      reasons: [
        "4+ years of hands-on experience across websites, business systems, and digital products",
        "A rare combination of development, design, SEO, and growth-focused thinking",
        "Built for business results, not just visuals or code quality alone",
        "Comfortable handling both technical execution and conversion-driven strategy",
        "Strong understanding of UX, performance, lead generation, and trust-building"
      ]
    },
    testimonials: {
      kicker: "Testimonials & Social Proof",
      title: "Designed to showcase client trust as the portfolio grows",
      intro:
        "These cards are ready for real testimonials and can be updated easily as more client feedback comes in.",
      items: [
        {
          name: "Client testimonial placeholder",
          text: "“Ayoub brought structure, clarity, and a more professional feel to our platform. Replace this with a real review when available.”"
        },
        {
          name: "Freelance project review placeholder",
          text: "“Great balance of design thinking, technical skill, and business understanding. This block is ready for future social proof.”"
        },
        {
          name: "Hiring / team feedback placeholder",
          text: "“Strong execution, thoughtful UX decisions, and a clear focus on performance and usability.”"
        }
      ]
    },
    cv: {
      kicker: "Resume / CV",
      title: "A concise overview of my experience and technical background",
      text: "Download my CV for a clear summary of IT support experience, technical skills, and projects.",
      button: "Download Resume / CV"
    },
    contact: {
      kicker: "Contact",
      title: "Get in touch",
      intro:
        "Open to IT support, helpdesk, and systems roles — active UAE visa, available immediately.",
      cards: [
        { title: "Email", text: "sowedayoub21@gmail.com", href: "mailto:sowedayoub21@gmail.com" },
        { title: "Phone", text: "+971 56 952 0569", href: "tel:+971569520569" },
        { title: "GitHub", text: "github.com/Lazycharm", href: "https://github.com/Lazycharm" },
        { title: "LinkedIn", text: "linkedin.com/in/ayoub-sowed-43a9282a5", href: "https://www.linkedin.com/in/ayoub-sowed-43a9282a5" },
        { title: "Status", text: "Active UAE Visa · Available Immediately" }
      ]
    },
    footer: {
      tagline: "IT Support Specialist portfolio focused on identity & access, device management, and IT operations.",
      linksTitle: "Quick Links",
      socialTitle: "Profiles",
      links: [
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Experience", href: "#services" },
        { label: "Contact", href: "#contact" }
      ],
      socials: [
        { label: "LinkedIn", href: "https://www.linkedin.com/in/ayoub-sowed-43a9282a5" },
        { label: "GitHub", href: "https://github.com/Lazycharm" },
        { label: "Email", href: "mailto:sowedayoub21@gmail.com" }
      ],
      copyright: `© ${new Date().getFullYear()} Ayoub Sowed. All rights reserved.`
    },
    caseLabels: {
      overview: "Overview",
      problem: "Problem",
      solution: "Solution",
      role: "My Role",
      stack: "Tools / Stack",
      outcome: "Outcome / Impact"
    }
  },
  ar: {
    nav: [
      { label: "نبذة", href: "#about" },
      { label: "المهارات", href: "#skills" },
      { label: "المشاريع", href: "#projects" },
      { label: "الخبرة", href: "#services" },
      { label: "التواصل", href: "#contact" }
    ],
    navCta: "تحميل السيرة الذاتية",
    hero: {
      eyebrow: "أيوب سويد",
      headline: "أخصائي دعم تقني (IT Support Specialist)",
      subtitle:
        "أخصائي دعم تقني بخبرة 7 سنوات في الدعم الفني وإدارة الهوية والوصول (Okta، Google Workspace) وإدارة الأجهزة (Jamf، Intune) والعمليات التقنية — إضافة إلى خبرة عملية في بناء وصيانة الأنظمة التي أدعمها.",
      actions: {
        projects: "عرض المشاريع",
        cv: "تحميل السيرة الذاتية",
        contact: "تواصل"
      },
      stats: [
        { value: "دبي، الإمارات", label: "الموقع" },
        { value: "+7 سنوات", label: "الخبرة" },
        { value: "متاح فورًا", label: "الحالة" }
      ],
      panelBadge: "ملخص مهني",
      panelTitle: "أول نقطة تواصل للموظفين والأنظمة وصلاحيات الوصول",
      panelText:
        "تشمل خبرتي الدعم الفني وإدارة الهوية والوصول وإدارة الأجهزة والعمليات التقنية اليومية، مدعومة بخبرة عملية في بناء وصيانة الأنظمة التي أدعمها.",
      panelPoints: [
        "إدارة الهوية والوصول عبر Okta وGoogle Workspace (SSO، MFA، إنشاء الحسابات)",
        "إدارة الأجهزة عبر Jamf (macOS) وMicrosoft Intune (Windows)",
        "مسؤول كامل عن الإلحاق والإخراج الوظيفي والتذاكر والعمليات التقنية"
      ]
    },
    about: {
      kicker: "نبذة",
      title: "ملخص مهني",
      text:
        "أخصائي دعم تقني مقيم في دبي، الإمارات بخبرة 7 سنوات في الدعم الفني والدعم التقني الداخلي والعمل على الأنظمة، بما في ذلك إدارة الهوية والوصول (Okta، Google Workspace، SSO، MFA)، وإدارة الأجهزة (Jamf، Microsoft Intune)، وأدوات التعاون اليومية (Slack، Microsoft 365). مرتاح في دور أول نقطة تواصل للموظفين — فرز التذاكر وحل مشاكل الأجهزة والحسابات وإدارة الإلحاق والإخراج الوظيفي من البداية للنهاية. أستخدم البرمجة النصية والأتمتة لتقليل الأعمال اليدوية المتكررة والحفاظ على سير الأنظمة بسلاسة.",
      cardTitle: "أبرز النقاط",
      bullets: [
        "7 سنوات خبرة في الدعم الفني والدعم التقني وإدارة الأنظمة",
        "إدارة الهوية والوصول: Okta، Google Workspace، SSO، MFA",
        "إدارة الأجهزة: Jamf (macOS) وMicrosoft Intune (Windows)",
        "تواصل واضح وصبور مع الزملاء التقنيين وغير التقنيين"
      ]
    },
    skills: {
      kicker: "المهارات",
      title: "المهارات الأساسية",
      intro:
        "مجمعة حسب الأنظمة والأدوات والمجالات التشغيلية التي أعمل عليها يوميًا.",
      groups: [
        {
          title: "الهوية والوصول",
          items: ["Okta", "Google Workspace", "SSO", "MFA", "إنشاء وإلغاء الحسابات"]
        },
        {
          title: "إدارة الأجهزة (MDM)",
          items: ["Jamf (macOS)", "Microsoft Intune (Windows)", "تشخيص الأجهزة", "دعم الأجهزة المحمولة"]
        },
        {
          title: "أدوات التعاون",
          items: ["Slack", "Microsoft 365", "Teams", "Outlook", "SharePoint"]
        },
        {
          title: "الشبكات",
          items: ["TCP/IP", "DNS", "Wi-Fi", "VPN", "UniFi / Ubiquiti"]
        },
        {
          title: "العمليات التقنية",
          items: ["نظام تذاكر الدعم الفني", "الإلحاق والإخراج الوظيفي", "جرد الأجهزة", "التوثيق"]
        },
        {
          title: "دعم الأنظمة والتطبيقات",
          items: ["تطبيقات الأعمال", "قواعد البيانات", "APIs", "التكاملات", "الاستضافة"]
        },
        {
          title: "الأتمتة",
          items: ["البرمجة النصية", "أتمتة سير العمل"]
        },
        {
          title: "الأدوات التقنية",
          items: ["GitHub", "Git", "VS Code", "MySQL", "Supabase", "Netlify", "Hostinger"]
        }
      ]
    },
    projects: {
      kicker: "المشاريع",
      title: "أعمال مختارة",
      intro:
        "أنظمة ومنصات حقيقية قمت ببنائها ودعمها — من منصات مجتمعية إلى أدوات أعمال وأنظمة إدارة مدرسية.",
      ctaCase: "عرض التفاصيل",
      ctaDemo: "تواصل",
      ctaMore: "عرض ملف GitHub",
      githubUrl: "https://github.com/Lazycharm",
      items: [
        {
          key: "career-pilot",
          title: "Career Pilot Platform",
          category: "منصة مهنية بالذكاء الاصطناعي • سوق الإمارات",
          image: "assets/projects/career-pilot-platform.webp",
          summary:
            "منصة مهنية متكاملة بالذكاء الاصطناعي تساعد الباحثين عن عمل في الإمارات على بناء سيرة ذاتية متوافقة مع ATS وتحسين الجاهزية للمقابلات وزيادة فرص التوظيف.",
          stack: ["React", "Supabase", "Tailwind CSS", "AI Workflows"],
          overview:
            "Career Pilot منصة لدعم الباحثين عن عمل في الإمارات من خلال تجربة رقمية تساعدهم على بناء ملفات مهنية أقوى والاستعداد للمقابلات بثقة أكبر.",
          problem:
            "يعاني كثير من الباحثين عن عمل من صعوبة في إنشاء سيرة ذاتية متوافقة مع أنظمة التوظيف وإبراز أنفسهم بشكل فعّال في سوق تنافسي.",
          solution:
            "صممت تجربة موجهة حول تحسين السيرة الذاتية والاستعداد للمقابلات ودعم المسار المهني باستخدام تدفقات ذكية ومبسطة.",
          role:
            "توجيه المنتج وتطوير الواجهة وتجربة المستخدم ودمج تدفقات ذكية مرتبطة بالمسار المهني.",
          outcome:
            "تجربة أوضح وأكثر دعمًا للباحثين عن عمل بهدف رفع جودة التقديم والجاهزية للمقابلات."
        },
        {
          key: "clearbill",
          title: "ClearBill",
          category: "منصة أدوات أعمال • فوترة وعروض أسعار",
          image: "assets/projects/document-system.webp",
          summary:
            "نظام لإدارة الفواتير وعروض الأسعار والمستندات صُمم ليحل محل الأعمال الورقية اليدوية ويبسّط الإدارة اليومية للأعمال.",
          stack: ["Dashboard UI", "Scalable Architecture", "Tailwind CSS", "Workflow Automation"],
          overview:
            "يحوّل ClearBill العمليات المعتمدة على المستندات إلى تجربة أوضح وأكثر تنظيمًا بأسلوب SaaS حديث.",
          problem:
            "العمليات اليدوية الخاصة بعروض الأسعار والفواتير غالبًا ما تبطئ الفرق وتسبب عدم اتساق وتقلل من وضوح سير العمل.",
          solution:
            "بنيت تجربة مستندات أكثر سلاسة مع هيكلة أفضل وتدفقات أسرع وواجهة أكثر احترافية للمهام اليومية.",
          role:
            "تخطيط النظام وتصميم تجربة لوحة التحكم وتنظيم الواجهة وهيكلة التدفقات التشغيلية القابلة للتوسع.",
          outcome:
            "تجربة أكثر كفاءة لإدارة المستندات تدعم العمليات اليومية وتمنح حضورًا أكثر احترافية أمام العملاء."
        },
        {
          key: "iqra-school-management",
          title: "Iqra School Management System",
          category: "منصة تعليمية • إدارة مدرسية",
          image: "assets/projects/project-placeholder.svg",
          summary:
            "نظام إدارة مدرسية مبني على ووردبريس يدير سجلات الطلاب والدرجات وبطاقات التقارير الآلية لمدرسة Iqra — ليحل محل الإدارة الورقية اليدوية.",
          stack: ["WordPress", "PHP", "MySQL", "Custom Plugin Development"],
          overview:
            "بنيت وصنت إضافة ووردبريس مخصصة لإدارة المدرسة تغطي سجلات الطلاب وإدارة الصفوف والمواد والدرجات وإصدار بطاقات التقارير آليًا.",
          problem:
            "كانت سجلات الطلاب وبطاقات التقارير الورقية تجعل عمليات الدرجات والحضور والإدارة الأكاديمية بطيئة وعرضة للأخطاء.",
          solution:
            "طورت وصنت وحدات PHP مخصصة لإدارة الدرجات وإدخال العلامات وإدارة الصفوف وإصدار بطاقات التقارير آليًا (بما في ذلك صيغ A-Level والصيغ القياسية)، مع إصلاحات وتحديثات مستمرة.",
          role:
            "تطوير الأنظمة وتخصيص إضافة ووردبريس بلغة PHP وهيكلة قاعدة البيانات والصيانة المستمرة وإصلاح الأخطاء.",
          outcome:
            "نظام إدارة مدرسية رقمي يقلل من الأعمال الورقية ويمنح الطاقم وسيلة موثوقة لإدارة الدرجات والسجلات وبطاقات التقارير."
        },
        {
          key: "bloom-broom",
          title: "Bloom & Broom",
          category: "منصة خدمات محلية • سوق عجمان",
          image: "assets/projects/bloom-broom.webp",
          summary:
            "منصة خدمات محلية تركّز على التحويل وتحويل سكان عجمان إلى عملاء حقيقيين عبر مسار واتساب سريع وواضح.",
          stack: ["React", "Tailwind CSS", "Framer Motion", "WhatsApp Funnel"],
          overview:
            "Bloom & Broom موقع خدمات محلية صُمم لبناء الثقة بسرعة وتحويل الاهتمام إلى محادثات وحجوزات مباشرة.",
          problem:
            "تفقد شركات الخدمات المحلية الكثير من العملاء المحتملين عندما يكون مسار التواصل بطيئًا أو غير واضح أو غير مناسب للجوال.",
          solution:
            "أنشأت تجربة خفيفة وعالية التحويل مع رسائل واضحة ودعوات قوية لاتخاذ إجراء ومسار واتساب مناسب للاستفسارات السريعة.",
          role:
            "استراتيجية الموقع وتطوير الواجهة وتخطيط تجربة المستخدم وتنفيذ صفحة هبوط تركز على التحويل.",
          outcome:
            "حضور رقمي أقوى للخدمات المحلية يساعد على رفع جودة العملاء المحتملين وزيادة المحادثات الفعلية."
        },
        {
          key: "cashlink-platform",
          title: "CashLink Platform",
          category: "منصة متعددة الخدمات • سوق الإمارات",
          image: "assets/projects/cashlink-platform.webp",
          summary:
            "منصة رقمية قابلة للتوسع صُممت لربط الخدمات والأعمال والفرص لأفراد الجالية الأفريقية في الإمارات.",
          stack: ["React", "Supabase", "Tailwind CSS", "Community Platform"],
          overview:
            "CashLink تجمع عدة خدمات وفرص موجهة للمجتمع داخل نظام رقمي واحد منظم وسهل الاستخدام.",
          problem:
            "كان المستخدمون بحاجة إلى طريقة أوضح لاكتشاف الخدمات المناسبة والتواصل مع الأعمال والتنقل داخل منصة موثوقة واحدة.",
          solution:
            "ركزت على تحسين اكتشاف الخدمات وتنظيم هيكلة المنصة وبناء تجربة قابلة للتوسع تدعم نمو المجتمع.",
          role:
            "تجربة المنصة وتطوير الواجهة وتخطيط الهيكلة والتفكير في النظام القابل للنمو.",
          outcome:
            "منصة أكثر سهولة وجاذبية تدعم الاكتشاف والثقة والمشاركة المستمرة من المستخدمين."
        },
        {
          key: "barista-training-academy",
          title: "Barista Training Academy UAE",
          category: "منصة تعليمية • سوق الإمارات",
          image: "assets/projects/barista-training-academy.webp",
          summary:
            "موقع تدريبي يركز على التحويل لجذب الباحثين عن عمل في الإمارات وتحويلهم إلى طلاب مسجلين عبر رسائل واضحة ودعوات قوية لاتخاذ إجراء.",
          stack: ["React", "Node.js", "Supabase", "Lead Funnels"],
          overview:
            "تم بناء هذه المنصة التعليمية للترويج لبرامج تدريب الباريستا وتحويل الاهتمام إلى استفسارات وتسجيلات.",
          problem:
            "تحتاج الجهات التدريبية إلى إبراز النتائج المهنية بوضوح وتقليل تردد الطلاب المحتملين عند المقارنة بين الخيارات.",
          solution:
            "نظمت تجربة هبوط مقنعة تعتمد على إبراز النتائج والإلحاح المهني وقنوات استفسار مباشرة لرفع التحويل.",
          role:
            "استراتيجية صفحة الهبوط وتنفيذ الواجهة وتحسين مسار العملاء المحتملين وتنظيم المحتوى بشكل إقناعي.",
          outcome:
            "تجربة رقمية أقوى تركّز على التسجيل وتساعد على زيادة الاهتمام الجاد ببرامج التدريب."
        }
      ]
    },
    services: {
      kicker: "الخبرة",
      title: "أماكن عملي",
      intro:
        "خبرة مهنية في الدعم الفني وإدارة الأنظمة والعمليات التقنية.",
      items: [
        {
          title: "أخصائي دعم تقني وأنظمة",
          company: "Blockcube Technical Services LLC",
          meta: "موسمي · فبراير 2025 – حتى الآن · الإمارات العربية المتحدة · هجين",
          bullets: [
            "أول نقطة تواصل لأعضاء الفريق الداخلي، فرز التذاكر وحل مشاكل الأجهزة والبرامج والتطبيقات",
            "إدارة حسابات المستخدمين والوصول عبر Okta وGoogle Workspace، بما في ذلك إعادة تعيين كلمات المرور وMFA وحل مشاكل SSO",
            "إدارة الإلحاق والإخراج الوظيفي من البداية للنهاية — تجهيز الحسابات والأجهزة في اليوم الأول وإلغاء الوصول بشكل نظيف عند المغادرة",
            "دعم Slack وMicrosoft 365 للتعاون اليومي",
            "صيانة وحل مشاكل موقع الشركة، ومراقبة الأداء والأمان",
            "بناء أدوات داخلية لعروض الأسعار والفوترة والإيصالات لتحل محل العمليات اليدوية",
            "حل مشاكل الاتصال بشبكة LAN وWi-Fi وVPN، بما في ذلك إعداد أساسي لأجهزة UniFi/Ubiquiti",
            "متابعة جرد الأجهزة وكتابة مقالات قاعدة المعرفة الداخلية"
          ]
        },
        {
          title: "أخصائي دعم تقني / دعم أنظمة",
          company: "Code & Circuit",
          meta: "عمل حر · مارس 2025 – مايو 2026 · الإمارات العربية المتحدة · هجين",
          bullets: [
            "تقديم الدعم الفني عبر المواقع وتطبيقات الأعمال وبيئات الاستضافة والأنظمة المترابطة لعدة عملاء",
            "إعداد ودعم حسابات المستخدمين والمصادقة، بما في ذلك SSO وMFA، عبر بيئات العملاء المختلفة",
            "بناء وصيانة مواقع وحلول أعمال مخصصة باستخدام قواعد البيانات وREST APIs والمصادقة والاستضافة السحابية",
            "إدارة عمليات النشر عبر Hostinger وNetlify ومراقبة الأنظمة من حيث التوفر والأداء"
          ]
        },
        {
          title: "مسؤول دعم فني ومبيعات",
          company: "Soft Point Electronic Chips Programming LLC",
          meta: "عقد · أكتوبر 2024 – فبراير 2026 · الإمارات العربية المتحدة · هجين",
          bullets: [
            "تقديم دعم فني أولي لعملاء الأعمال الذين يقيّمون حلول برمجة الشرائح الإلكترونية والأجهزة المدمجة",
            "العمل كحلقة وصل تقنية بين العملاء وفرق الهندسة، وجمع المتطلبات وتأكيد المواصفات التقنية",
            "دعم العروض التوضيحية للمنتجات والإلحاق التقني وجلسات استكشاف الأخطاء"
          ]
        },
        {
          title: "مهندس ميداني / دعم ويب وأنظمة",
          company: "Broadmind Automation LTD",
          meta: "دوام كامل · نوفمبر 2019 – يونيو 2023 · كمبالا، أوغندا · هجين",
          bullets: [
            "بدأ في الهندسة الميدانية، العمل مع لوحات التحكم الصناعية والتركيبات الكهربائية والمعدات التقنية",
            "انتقل إلى دعم المواقع والأنظمة، تطوير وصيانة موقع الشركة",
            "العمل على تحسينات الموقع وSEO والصيانة التقنية ومشاريع الأتمتة الرقمية"
          ]
        }
      ]
    },
    why: {
      kicker: "لماذا العمل معي؟",
      title: "شريك يفهم التنفيذ التقني والنتيجة التجارية معًا",
      intro:
        "القيمة الحقيقية ليست في البرمجة فقط، بل في فهم كيف يعمل التصميم والتطوير وSEO والأداء معًا لصناعة نتائج أقوى.",
      reasons: [
        "أكثر من +4 سنوات خبرة عملية في المواقع والأنظمة ومنتجات الويب",
        "مزيج نادر بين التطوير والتصميم وSEO والتفكير التجاري",
        "التركيز على نتائج الأعمال وليس على المظهر فقط",
        "القدرة على الجمع بين التنفيذ التقني واستراتيجية التحويل",
        "فهم قوي لتجربة المستخدم والأداء وتوليد العملاء المحتملين وبناء الثقة"
      ]
    },
    testimonials: {
      kicker: "آراء العملاء والدليل الاجتماعي",
      title: "مصمم لعرض الثقة مع نمو الأعمال المستقبلية",
      intro:
        "هذه البطاقات جاهزة لإضافة تقييمات العملاء الحقيقية بسهولة عند توفرها.",
      items: [
        { name: "مكان مخصص لرأي عميل", text: "“أضاف أيوب وضوحًا وهيكلة ولمسة احترافية لمنصتنا. يمكن استبدال هذا النص بمراجعة حقيقية لاحقًا.”" },
        { name: "مكان مخصص لتقييم مشروع مستقل", text: "“توازن ممتاز بين التفكير التصميمي والمهارة التقنية وفهم الأعمال.”" },
        { name: "مكان مخصص لرأي فريق أو جهة توظيف", text: "“تنفيذ قوي وقرارات UX مدروسة وتركيز واضح على الأداء وسهولة الاستخدام.”" }
      ]
    },
    cv: {
      kicker: "السيرة الذاتية",
      title: "نظرة مختصرة على الخبرة والخلفية التقنية",
      text: "حمّل السيرة الذاتية للحصول على ملخص واضح لخبرة الدعم التقني والمهارات والمشاريع.",
      button: "تحميل السيرة الذاتية"
    },
    contact: {
      kicker: "التواصل",
      title: "للتواصل",
      intro: "منفتح على وظائف الدعم التقني ومكتب المساعدة وإدارة الأنظمة — إقامة إماراتية سارية ومتاح للعمل فورًا.",
      cards: [
        { title: "البريد الإلكتروني", text: "sowedayoub21@gmail.com", href: "mailto:sowedayoub21@gmail.com" },
        { title: "الهاتف", text: "+971 56 952 0569", href: "tel:+971569520569" },
        { title: "GitHub", text: "github.com/Lazycharm", href: "https://github.com/Lazycharm" },
        { title: "LinkedIn", text: "linkedin.com/in/ayoub-sowed-43a9282a5", href: "https://www.linkedin.com/in/ayoub-sowed-43a9282a5" },
        { title: "الحالة", text: "إقامة إماراتية سارية · متاح للعمل فورًا" }
      ]
    },
    footer: {
      tagline: "ملف أعمال لأخصائي دعم تقني يركز على إدارة الهوية والوصول وإدارة الأجهزة والعمليات التقنية.",
      linksTitle: "روابط سريعة",
      socialTitle: "الملفات المهنية",
      links: [
        { label: "نبذة", href: "#about" },
        { label: "المشاريع", href: "#projects" },
        { label: "الخبرة", href: "#services" },
        { label: "التواصل", href: "#contact" }
      ],
      socials: [
        { label: "LinkedIn", href: "https://www.linkedin.com/in/ayoub-sowed-43a9282a5" },
        { label: "GitHub", href: "https://github.com/Lazycharm" },
        { label: "البريد الإلكتروني", href: "mailto:sowedayoub21@gmail.com" }
      ],
      copyright: `© ${new Date().getFullYear()} Ayoub Sowed. جميع الحقوق محفوظة.`
    },
    caseLabels: {
      overview: "نظرة عامة",
      problem: "المشكلة",
      solution: "الحل",
      role: "دوري",
      stack: "الأدوات / التقنيات",
      outcome: "النتيجة / الأثر"
    }
  }
};

const state = {
  lang: "en",
  activeProject: "career-pilot"
};

const elements = {
  navLinks: document.getElementById("navLinks"),
  navPrimaryCta: document.getElementById("navPrimaryCta"),
  langToggle: document.getElementById("langToggle"),
  menuToggle: document.getElementById("menuToggle"),
  navPanel: document.getElementById("navPanel"),
  heroEyebrow: document.getElementById("heroEyebrow"),
  heroHeadline: document.getElementById("heroHeadline"),
  heroSubtitle: document.getElementById("heroSubtitle"),
  ctaProjects: document.getElementById("ctaProjects"),
  ctaCv: document.getElementById("ctaCv"),
  ctaContact: document.getElementById("ctaContact"),
  heroStats: document.getElementById("heroStats"),
  panelBadge: document.getElementById("panelBadge"),
  panelTitle: document.getElementById("panelTitle"),
  panelText: document.getElementById("panelText"),
  panelPoints: document.getElementById("panelPoints"),
  aboutKicker: document.getElementById("aboutKicker"),
  aboutTitle: document.getElementById("aboutTitle"),
  aboutText: document.getElementById("aboutText"),
  aboutCardTitle: document.getElementById("aboutCardTitle"),
  aboutBullets: document.getElementById("aboutBullets"),
  skillsKicker: document.getElementById("skillsKicker"),
  skillsTitle: document.getElementById("skillsTitle"),
  skillsIntro: document.getElementById("skillsIntro"),
  skillsGrid: document.getElementById("skillsGrid"),
  projectsKicker: document.getElementById("projectsKicker"),
  projectsTitle: document.getElementById("projectsTitle"),
  projectsIntro: document.getElementById("projectsIntro"),
  projectsGrid: document.getElementById("projectsGrid"),
  projectsMoreLink: document.getElementById("projectsMoreLink"),
  servicesKicker: document.getElementById("servicesKicker"),
  servicesTitle: document.getElementById("servicesTitle"),
  servicesIntro: document.getElementById("servicesIntro"),
  servicesGrid: document.getElementById("servicesGrid"),
  whyKicker: document.getElementById("whyKicker"),
  whyTitle: document.getElementById("whyTitle"),
  whyIntro: document.getElementById("whyIntro"),
  reasonsList: document.getElementById("reasonsList"),
  testimonialsKicker: document.getElementById("testimonialsKicker"),
  testimonialsTitle: document.getElementById("testimonialsTitle"),
  testimonialsIntro: document.getElementById("testimonialsIntro"),
  testimonialsGrid: document.getElementById("testimonialsGrid"),
  cvKicker: document.getElementById("cvKicker"),
  cvTitle: document.getElementById("cvTitle"),
  cvText: document.getElementById("cvText"),
  cvButton: document.getElementById("cvButton"),
  contactKicker: document.getElementById("contactKicker"),
  contactTitle: document.getElementById("contactTitle"),
  contactIntro: document.getElementById("contactIntro"),
  contactCards: document.getElementById("contactCards"),
  labelName: document.getElementById("labelName"),
  labelEmail: document.getElementById("labelEmail"),
  labelCompany: document.getElementById("labelCompany"),
  labelMessage: document.getElementById("labelMessage"),
  contactSubmit: document.getElementById("contactSubmit"),
  formNote: document.getElementById("formNote"),
  footerTagline: document.getElementById("footerTagline"),
  footerLinksTitle: document.getElementById("footerLinksTitle"),
  footerSocialTitle: document.getElementById("footerSocialTitle"),
  footerLinks: document.getElementById("footerLinks"),
  footerSocials: document.getElementById("footerSocials"),
  footerCopyright: document.getElementById("footerCopyright"),
  contactForm: document.getElementById("contactForm"),
  scrollTopBtn: document.getElementById("scrollTopBtn"),
  dialog: document.getElementById("caseStudyDialog"),
  dialogClose: document.getElementById("dialogClose"),
  caseCategory: document.getElementById("caseCategory"),
  caseTitle: document.getElementById("caseTitle"),
  caseSummary: document.getElementById("caseSummary"),
  caseOverview: document.getElementById("caseOverview"),
  caseProblem: document.getElementById("caseProblem"),
  caseSolution: document.getElementById("caseSolution"),
  caseRole: document.getElementById("caseRole"),
  caseStack: document.getElementById("caseStack"),
  caseOutcome: document.getElementById("caseOutcome"),
  labelOverview: document.getElementById("labelOverview"),
  labelProblem: document.getElementById("labelProblem"),
  labelSolution: document.getElementById("labelSolution"),
  labelRole: document.getElementById("labelRole"),
  labelStack: document.getElementById("labelStack"),
  labelOutcome: document.getElementById("labelOutcome")
};

function renderSite() {
  const locale = content[state.lang];

  document.documentElement.lang = state.lang;
  document.documentElement.dir = state.lang === "ar" ? "rtl" : "ltr";
  document.body.classList.toggle("arabic", state.lang === "ar");
  elements.langToggle.textContent = state.lang === "en" ? "العربية" : "English";
  elements.langToggle.setAttribute(
    "aria-label",
    state.lang === "en" ? "Switch language to Arabic" : "Switch language to English"
  );

  renderNavigation(locale);
  renderHero(locale);
  renderAbout(locale);
  renderSkills(locale);
  renderProjects(locale);
  renderServices(locale);
  renderCv(locale);
  renderContact(locale);
  renderFooter(locale);
  renderCaseStudy(state.activeProject);
}

function renderNavigation(locale) {
  elements.navLinks.innerHTML = locale.nav
    .map((item) => `<a href="${item.href}">${item.label}</a>`)
    .join("");
  elements.navPrimaryCta.textContent = locale.navCta;
}

function renderHero(locale) {
  elements.heroEyebrow.textContent = locale.hero.eyebrow;
  elements.heroHeadline.textContent = locale.hero.headline;
  elements.heroSubtitle.textContent = locale.hero.subtitle;
  elements.ctaProjects.textContent = locale.hero.actions.projects;
  elements.ctaCv.textContent = locale.hero.actions.cv;
  elements.ctaContact.textContent = locale.hero.actions.contact;
  elements.panelBadge.textContent = locale.hero.panelBadge;
  elements.panelTitle.textContent = locale.hero.panelTitle;
  elements.panelText.textContent = locale.hero.panelText;

  elements.heroStats.innerHTML = locale.hero.stats
    .map(
      (stat) => `
        <div class="stat-card">
          <strong>${stat.value}</strong>
          <span>${stat.label}</span>
        </div>
      `
    )
    .join("");

  elements.panelPoints.innerHTML = locale.hero.panelPoints.map((point) => `<li>${point}</li>`).join("");
}

function renderAbout(locale) {
  elements.aboutKicker.textContent = locale.about.kicker;
  elements.aboutTitle.textContent = locale.about.title;
  elements.aboutText.textContent = locale.about.text;
  elements.aboutCardTitle.textContent = locale.about.cardTitle;
  elements.aboutBullets.innerHTML = locale.about.bullets
    .map((point) => `<div class="bullet-item">${point}</div>`)
    .join("");
}

function renderSkills(locale) {
  elements.skillsKicker.textContent = locale.skills.kicker;
  elements.skillsTitle.textContent = locale.skills.title;
  elements.skillsIntro.textContent = locale.skills.intro;
  elements.skillsGrid.innerHTML = locale.skills.groups
    .map(
      (group) => `
        <article class="skill-card reveal">
          <h3>${group.title}</h3>
          <div class="skill-list">
            ${group.items.map((item) => `<span class="skill-item">${item}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function renderProjects(locale) {
  elements.projectsKicker.textContent = locale.projects.kicker;
  elements.projectsTitle.textContent = locale.projects.title;
  elements.projectsIntro.textContent = locale.projects.intro;
  elements.projectsMoreLink.textContent = locale.projects.ctaMore;
  elements.projectsMoreLink.href = locale.projects.githubUrl;
  elements.projectsGrid.innerHTML = locale.projects.items
    .map(
      (project) => `
        <article class="project-card reveal">
          <div class="project-thumb">
            <img
              src="${project.image}"
              alt="${project.title} project preview"
              loading="lazy"
              onerror="this.style.display='none'; this.nextElementSibling.hidden = false;"
            />
            <div class="project-thumb-fallback" hidden>
              <strong>${project.title}</strong>
              <span>Preview image unavailable</span>
            </div>
          </div>
          <div class="project-body">
            <span class="chip">${project.category}</span>
            <h3>${project.title}</h3>
            <p>${project.summary}</p>
            <p class="project-role"><strong>${locale.caseLabels.role}:</strong> ${project.role}</p>
            <div class="project-meta">
              ${project.stack.map((tool) => `<span class="chip">${tool}</span>`).join("")}
            </div>
            <div class="project-actions">
              <button class="btn btn-primary case-study-trigger" type="button" data-project="${project.key}">${locale.projects.ctaCase}</button>
              <a class="btn btn-secondary" href="#contact">${locale.projects.ctaDemo}</a>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function renderServices(locale) {
  elements.servicesKicker.textContent = locale.services.kicker;
  elements.servicesTitle.textContent = locale.services.title;
  elements.servicesIntro.textContent = locale.services.intro;
  elements.servicesGrid.innerHTML = locale.services.items
    .map(
      (item) => `
        <article class="service-card reveal">
          <h3>${item.title}</h3>
          <p class="project-role"><strong>${item.company}</strong> · ${item.meta}</p>
          <div class="bullet-list">
            ${item.bullets.map((point) => `<div class="bullet-item">${point}</div>`).join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function renderWhy(locale) {
  elements.whyKicker.textContent = locale.why.kicker;
  elements.whyTitle.textContent = locale.why.title;
  elements.whyIntro.textContent = locale.why.intro;
  elements.reasonsList.innerHTML = locale.why.reasons
    .map((reason) => `<div class="reason-card reveal">${reason}</div>`)
    .join("");
}

function renderTestimonials(locale) {
  elements.testimonialsKicker.textContent = locale.testimonials.kicker;
  elements.testimonialsTitle.textContent = locale.testimonials.title;
  elements.testimonialsIntro.textContent = locale.testimonials.intro;
  elements.testimonialsGrid.innerHTML = locale.testimonials.items
    .map(
      (item) => `
        <article class="testimonial-card reveal">
          <h3>${item.name}</h3>
          <p>${item.text}</p>
        </article>
      `
    )
    .join("");
}

function renderCv(locale) {
  elements.cvKicker.textContent = locale.cv.kicker;
  elements.cvTitle.textContent = locale.cv.title;
  elements.cvText.textContent = locale.cv.text;
  elements.cvButton.textContent = locale.cv.button;
}

function renderContact(locale) {
  elements.contactKicker.textContent = locale.contact.kicker;
  elements.contactTitle.textContent = locale.contact.title;
  elements.contactIntro.textContent = locale.contact.intro;
  elements.contactCards.innerHTML = locale.contact.cards
    .map((card) => {
      const external = card.href?.startsWith("http");
      const tag = card.href ? "a" : "article";
      const attrs = card.href
        ? `href="${card.href}" ${external ? 'target="_blank" rel="noreferrer"' : ""} class="contact-card contact-link-card"`
        : 'class="contact-card"';

      return `
        <${tag} ${attrs}>
          <h3>${card.title}</h3>
          <p>${card.text}</p>
        </${tag}>
      `;
    })
    .join("");
}

function renderFooter(locale) {
  elements.footerTagline.textContent = locale.footer.tagline;
  elements.footerLinksTitle.textContent = locale.footer.linksTitle;
  elements.footerSocialTitle.textContent = locale.footer.socialTitle;
  elements.footerLinks.innerHTML = locale.footer.links
    .map((item) => `<a href="${item.href}">${item.label}</a>`)
    .join("");
  elements.footerSocials.innerHTML = locale.footer.socials
    .map((item) => `<a href="${item.href}">${item.label}</a>`)
    .join("");
  elements.footerCopyright.textContent = locale.footer.copyright;
}

function renderCaseStudy(projectKey) {
  const locale = content[state.lang];
  const project = locale.projects.items.find((item) => item.key === projectKey) || locale.projects.items[0];
  state.activeProject = project.key;

  elements.caseCategory.textContent = project.category;
  elements.caseTitle.textContent = project.title;
  elements.caseSummary.textContent = project.summary;
  elements.caseOverview.textContent = project.overview;
  elements.caseProblem.textContent = project.problem;
  elements.caseSolution.textContent = project.solution;
  elements.caseRole.textContent = project.role;
  elements.caseStack.textContent = project.stack.join(" • ");
  elements.caseOutcome.textContent = project.outcome;
  elements.labelOverview.textContent = locale.caseLabels.overview;
  elements.labelProblem.textContent = locale.caseLabels.problem;
  elements.labelSolution.textContent = locale.caseLabels.solution;
  elements.labelRole.textContent = locale.caseLabels.role;
  elements.labelStack.textContent = locale.caseLabels.stack;
  elements.labelOutcome.textContent = locale.caseLabels.outcome;
}

function openCaseStudy(projectKey) {
  renderCaseStudy(projectKey);
  if (typeof elements.dialog.showModal === "function") {
    elements.dialog.showModal();
  } else {
    elements.dialog.setAttribute("open", "true");
  }
}

function closeCaseStudy() {
  if (typeof elements.dialog.close === "function") {
    elements.dialog.close();
  } else {
    elements.dialog.removeAttribute("open");
  }
}

function setupReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

function toggleScrollTopButton() {
  if (!elements.scrollTopBtn) return;
  elements.scrollTopBtn.classList.toggle("is-visible", window.scrollY > 320);
}

elements.langToggle.addEventListener("click", () => {
  state.lang = state.lang === "en" ? "ar" : "en";
  renderSite();
  setupReveal();
});

elements.menuToggle.addEventListener("click", () => {
  const isOpen = elements.navPanel.classList.toggle("open");
  elements.menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.addEventListener("click", (event) => {
  const trigger = event.target.closest(".case-study-trigger");
  if (trigger) {
    openCaseStudy(trigger.dataset.project);
    return;
  }

  if (event.target.matches(".nav-links a")) {
    elements.navPanel.classList.remove("open");
    elements.menuToggle.setAttribute("aria-expanded", "false");
  }
});

elements.dialogClose.addEventListener("click", closeCaseStudy);

if (elements.scrollTopBtn) {
  elements.scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", toggleScrollTopButton, { passive: true });
}

elements.dialog.addEventListener("click", (event) => {
  const rect = elements.dialog.getBoundingClientRect();
  const isInDialog =
    rect.top <= event.clientY &&
    event.clientY <= rect.top + rect.height &&
    rect.left <= event.clientX &&
    event.clientX <= rect.left + rect.width;

  if (!isInDialog) {
    closeCaseStudy();
  }
});

if (elements.contactForm) {
  elements.contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(elements.contactForm);
    const locale = content[state.lang];
    const name = formData.get("name");
    const email = formData.get("email");
    const company = formData.get("company") || "-";
    const message = formData.get("message");

    const subject = encodeURIComponent(`Project inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany / Role: ${company}\n\nProject details:\n${message}`
    );

    window.location.href = `mailto:sowedayoub21@gmail.com?subject=${subject}&body=${body}`;
    if (elements.formNote) {
      elements.formNote.textContent = locale.contact.labels.note;
    }
  });
}

renderSite();
setupReveal();
toggleScrollTopButton();
