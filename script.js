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
      headline: "Full Stack Developer",
      subtitle:
        "I build responsive web applications and business systems with a focus on usability, performance, and maintainable code.",
      actions: {
        projects: "View Projects",
        cv: "Download CV",
        contact: "Contact"
      },
      stats: [
        { value: "Dubai, UAE", label: "Location" },
        { value: "4+ Years", label: "Experience" },
      ],
      panelBadge: "Professional summary",
      panelTitle: "Focused on building reliable digital products",
      panelText:
        "My background spans frontend development, backend systems, UI implementation, and SEO-aware builds for product and business teams.",
      panelPoints: [
        "Builds full stack web apps and internal tools",
        "Comfortable across UI, API, and database layers",
        "Values clean code, fast interfaces, and thoughtful UX"
      ]
    },
    about: {
      kicker: "About",
      title: "Professional Summary",
      text:
        "Full Stack Developer based in Dubai, UAE with 4+ years of experience building web applications, business tools, and responsive user interfaces. I enjoy turning requirements into clean, practical products that are easy to use and maintain.",
      cardTitle: "Highlights",
      bullets: [
        "Full stack delivery across frontend, backend, and database layers",
        "Experience with React, Next.js, Node.js, Laravel, MySQL, and Supabase",
        "Strong attention to UI quality, structure, and performance"
      ]
    },
    skills: {
      kicker: "Skills",
      title: "Technical Skills",
      intro:
        "Grouped by the technologies and tools I use most often across product, platform, and UI work.",
      groups: [
        {
          title: "Frontend",
          items: ["React", "Next.js", "JavaScript", "HTML", "CSS"]
        },
        {
          title: "Backend",
          items: ["Node.js", "Laravel", "PHP"]
        },
        {
          title: "Database",
          items: ["MySQL", "Supabase"]
        },
        {
          title: "Tools",
          items: ["Netlify", "Hostinger", "GitHub", "Cursor AI", "Copilot"]
        },
        {
          title: "Design",
          items: ["Figma", "Photoshop", "UI/UX", "Responsive Design"]
        },
        {
          title: "Marketing",
          items: ["SEO", "SEM", "Google Analytics", "Search Console"]
        }
      ]
    },
    projects: {
      kicker: "Projects",
      title: "Selected Work",
      intro:
        "Recent projects across product development, internal tools, and user-facing platforms.",
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
          key: "document-system",
          title: "Document System",
          category: "Business Tool Platform • SaaS System",
          image: "assets/projects/document-system.webp",
          summary:
            "A scalable business management system built to simplify invoicing, quotations, and document workflows for modern companies.",
          stack: ["Dashboard UI", "Scalable Architecture", "Tailwind CSS", "Workflow Automation"],
          overview:
            "This project focused on turning document-heavy processes into a cleaner, more organized SaaS-style workflow for growing businesses.",
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
      kicker: "Experience Focus",
      title: "Where I Contribute Best",
      intro:
        "The areas below reflect the type of engineering and product work I’m most comfortable contributing to.",
      items: [
        {
          title: "Frontend Development",
          text: "Responsive interfaces built with attention to usability, accessibility, and performance."
        },
        {
          title: "Backend Systems",
          text: "Application logic, APIs, and data-driven workflows for practical business needs."
        },
        {
          title: "Dashboards & Internal Tools",
          text: "Structured systems that help teams manage operations more efficiently."
        },
        {
          title: "UI Implementation",
          text: "Translating product and design requirements into polished, maintainable interfaces."
        },
        {
          title: "Performance & SEO Basics",
          text: "Clean builds with solid structure, speed awareness, and search-friendly foundations."
        },
        {
          title: "Maintenance & Iteration",
          text: "Ongoing improvements, bug fixing, and refinement as products evolve."
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
      text: "Download my CV for a clear summary of projects, skills, and professional experience.",
      button: "Download Resume / CV"
    },
    contact: {
      kicker: "Contact",
      title: "Get in touch",
      intro:
        "Open to full-time roles, contract work, and collaborative product opportunities.",
      cards: [
        { title: "Email", text: "sowedayoub21@gmail.com", href: "mailto:sowedayoub21@gmail.com" },
        { title: "Phone", text: "+971569520569", href: "tel:+971569520569" },
        { title: "GitHub", text: "github.com/Lazycharm", href: "https://github.com/Lazycharm" },
        { title: "LinkedIn", text: "linkedin.com/in/ayoub-sowed-43a9282a5", href: "https://www.linkedin.com/in/ayoub-sowed-43a9282a5" }
      ]
    },
    footer: {
      tagline: "Full Stack Developer portfolio focused on product, platform, and UI work.",
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
      headline: "مطور فل ستاك",
      subtitle:
        "أبني تطبيقات ويب وأنظمة أعمال تركّز على سهولة الاستخدام والأداء الجيد وقابلية الصيانة.",
      actions: {
        projects: "عرض المشاريع",
        cv: "تحميل السيرة الذاتية",
        contact: "تواصل"
      },
      stats: [
        { value: "دبي، الإمارات", label: "الموقع" },
        { value: "+4 سنوات", label: "الخبرة" },
      ],
      panelBadge: "ملخص مهني",
      panelTitle: "تركيز على بناء منتجات رقمية موثوقة",
      panelText:
        "تشمل خبرتي تطوير الواجهات والأنظمة الخلفية وتنفيذ UI وبناء منتجات عملية لفرق الأعمال والمنتجات.",
      panelPoints: [
        "تطوير تطبيقات ويب وأدوات داخلية متكاملة",
        "راحة في العمل على الواجهة وواجهات البرمجة وقواعد البيانات",
        "اهتمام بالكود النظيف وسرعة الواجهة وتجربة المستخدم"
      ]
    },
    about: {
      kicker: "نبذة",
      title: "ملخص مهني",
      text:
        "مطور فل ستاك في دبي، الإمارات بخبرة تتجاوز +4 سنوات في بناء تطبيقات الويب وأدوات الأعمال والواجهات المتجاوبة. أركز على تحويل المتطلبات إلى منتجات عملية ونظيفة وسهلة الاستخدام والصيانة.",
      cardTitle: "أبرز النقاط",
      bullets: [
        "تنفيذ متكامل عبر الواجهة الأمامية والخلفية وقواعد البيانات",
        "خبرة في React وNext.js وNode.js وLaravel وMySQL وSupabase",
        "اهتمام قوي بجودة الواجهة والتنظيم والأداء"
      ]
    },
    skills: {
      kicker: "المهارات",
      title: "المهارات التقنية",
      intro:
        "مجمعة حسب التقنيات والأدوات التي أستخدمها بشكل متكرر في بناء المنتجات والمنصات والواجهات.",
      groups: [
        {
          title: "الواجهة الأمامية",
          items: ["React", "Next.js", "JavaScript", "HTML", "CSS"]
        },
        {
          title: "الواجهة الخلفية",
          items: ["Node.js", "Laravel", "PHP"]
        },
        {
          title: "قواعد البيانات",
          items: ["MySQL", "Supabase"]
        },
        {
          title: "الأدوات",
          items: ["Netlify", "Hostinger", "GitHub", "Cursor AI", "Copilot"]
        },
        {
          title: "التصميم",
          items: ["Figma", "Photoshop", "UI/UX", "Responsive Design"]
        },
        {
          title: "التسويق",
          items: ["SEO", "SEM", "Google Analytics", "Search Console"]
        }
      ]
    },
    projects: {
      kicker: "المشاريع",
      title: "أعمال مختارة",
      intro:
        "مجموعة من المشاريع الحديثة في تطوير المنتجات والأدوات الداخلية والمنصات الموجهة للمستخدم.",
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
          key: "document-system",
          title: "Document System",
          category: "منصة أدوات أعمال • نظام SaaS",
          image: "assets/projects/document-system.webp",
          summary:
            "نظام إدارة أعمال قابل للتوسع صُمم لتبسيط الفواتير وعروض الأسعار وتدفقات المستندات للشركات الحديثة.",
          stack: ["Dashboard UI", "Scalable Architecture", "Tailwind CSS", "Workflow Automation"],
          overview:
            "يركز هذا المشروع على تحويل العمليات المعتمدة على المستندات إلى تجربة أوضح وأكثر تنظيمًا بأسلوب SaaS حديث.",
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
      kicker: "مجالات الخبرة",
      title: "أين أضيف قيمة أكبر",
      intro:
        "تعكس الأقسام التالية نوع العمل الهندسي والمنتجي الذي أستطيع المساهمة فيه بشكل أفضل.",
      items: [
        { title: "تطوير الواجهات", text: "واجهات متجاوبة تركز على سهولة الاستخدام وإمكانية الوصول والأداء." },
        { title: "الأنظمة الخلفية", text: "منطق التطبيقات وواجهات البرمجة وتدفقات البيانات لتلبية احتياجات عملية." },
        { title: "لوحات التحكم والأدوات الداخلية", text: "أنظمة منظمة تساعد الفرق على إدارة العمليات بكفاءة أعلى." },
        { title: "تنفيذ UI", text: "تحويل المتطلبات والتصاميم إلى واجهات متقنة وقابلة للصيانة." },
        { title: "الأداء وSEO الأساسي", text: "بناءات نظيفة وسريعة بهيكل جيد وقابلية أفضل للاكتشاف." },
        { title: "الصيانة والتحسين", text: "تطوير مستمر وإصلاحات وتحسينات مع تطور المنتج." }
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
      text: "حمّل السيرة الذاتية للحصول على ملخص واضح للمشاريع والمهارات والخبرة المهنية.",
      button: "تحميل السيرة الذاتية"
    },
    contact: {
      kicker: "التواصل",
      title: "للتواصل",
      intro: "منفتح على الفرص الوظيفية الكاملة والعقود المهنية والتعاون في بناء المنتجات.",
      cards: [
        { title: "البريد الإلكتروني", text: "sowedayoub21@gmail.com", href: "mailto:sowedayoub21@gmail.com" },
        { title: "الهاتف", text: "+971569520569", href: "tel:+971569520569" },
        { title: "GitHub", text: "github.com/Lazycharm", href: "https://github.com/Lazycharm" },
        { title: "LinkedIn", text: "linkedin.com/in/ayoub-sowed-43a9282a5", href: "https://www.linkedin.com/in/ayoub-sowed-43a9282a5" }
      ]
    },
    footer: {
      tagline: "ملف أعمال لمطور فل ستاك يركز على المنتجات والمنصات وتجربة الواجهة.",
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
          <p>${item.text}</p>
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
