import { Injectable, signal, computed } from '@angular/core';

export type Language = 'es' | 'en';

export const TRANSLATIONS = {
  es: {
    // Navbar
    nav_home: 'Inicio',
    nav_projects: 'Proyectos',
    nav_about: 'Acerca de mí',
    nav_contact: 'Contacto',

    // Footer
    footer_rights: 'Todos los derechos reservados.',
    footer_source: 'Ver código fuente en GitHub',

    // Home
    home_hero_subtitle: 'Ingeniero de Sistemas & Desarrollador Full-Stack. Construyo soluciones digitales con impacto real — desde plataformas de datos empresariales hasta e-commerce y realidad virtual.',
    home_hero_btn_projects: 'Ver Proyectos',
    home_hero_btn_contact: 'Contáctame',
    home_featured_title: 'Experiencia Destacada',
    home_featured_link: 'Ver Trayectoria Completa',
    home_tq_tag: 'Desarrollador Full-Stack',
    home_biscoli_tag: 'E-commerce · Negocio Propio',

    // Home - Philosophy
    home_philosophy_label: 'Mi Filosofía',
    home_philosophy_title: 'Código con propósito, diseño con intención',
    home_philosophy_text: 'Creo que la tecnología tiene el poder de transformar ideas en realidad. Mi enfoque combina la ingeniería robusta con un diseño centrado en el usuario, buscando siempre crear experiencias digitales que no solo funcionen, sino que generen impacto real.',
    home_philosophy_btn: 'Conoce más sobre mí',

    // Home - Services
    home_services_title: 'Lo que hago',
    home_services_subtitle: 'Áreas de enfoque en las que puedo aportar valor a tu proyecto.',
    home_svc_fullstack_title: 'Desarrollo Full-Stack',
    home_svc_fullstack_desc: 'Construcción de aplicaciones web completas, desde APIs robustas hasta interfaces de usuario modernas y responsivas.',
    home_svc_data_title: 'Arquitectura de Datos',
    home_svc_data_desc: 'Diseño e implementación de pipelines de datos, integración de fuentes múltiples y optimización de bases de datos para alto rendimiento.',
    home_svc_immersive_title: 'Experiencias Inmersivas',
    home_svc_immersive_desc: 'Desarrollo de aplicaciones de Realidad Virtual enfocadas en educación y entrenamiento profesional.',

    // Home - Tech Stack
    home_tech_title: 'Tecnologías',
    home_tech_subtitle: 'Las herramientas con las que trabajo día a día.',

    // Home - CTA
    home_cta_title: '¿Tienes un proyecto en mente?',
    home_cta_text: 'Estoy abierto a nuevas oportunidades y colaboraciones. Si buscas un desarrollador comprometido con la calidad y el impacto, hablemos.',
    home_cta_btn: 'Empecemos a construir',

    // Projects
    projects_title: 'Proyectos',
    projects_subtitle: 'Una selección de proyectos personales y profesionales que reflejan mi enfoque en soluciones digitales con impacto.',
    proj_vr_tag: 'Trabajo de Grado · Distinción Meritoria',
    proj_vr_title: 'Aplicación de Realidad Virtual para Anatomía Dental',
    proj_vr_desc: 'Desarrollo de una aplicación inmersiva de realidad virtual diseñada para la enseñanza de anatomía dental a estudiantes de odontología en la Universidad del Valle. El proyecto obtuvo distinción meritoria como trabajo de grado en Ingeniería de Sistemas (2025).',
    proj_biscoli_tag: 'Negocio Propio · E-commerce',
    proj_biscoli_desc: 'Mi propio negocio de galletas saludables. Diseñé y desarrollé desde cero la plataforma e-commerce completa, incluyendo catálogo de productos, sistema de pedidos y administración.',
    proj_btn_visit: 'Visitar Sitio',
    proj_tq_tag: 'Profesional · Full-Stack',
    proj_tq_title: 'Plataforma de Integración de Datos — Tecnoquímicas',
    proj_tq_desc: 'Plataforma de integración de datos para el data warehouse corporativo, procesando +100,000 registros diarios. Incluye un sistema unificado ("Capturador de Variables") que consolidó dos aplicaciones heredadas, reduciendo el tiempo de trabajo del usuario en un 40%.',
    proj_univalle_tag: 'Profesional · Desarrollo Web',
    proj_univalle_title: 'Sistema de Gestión — Universidad del Valle',
    proj_univalle_desc: 'Sistema de gestión de información estudiantil y más de 8 páginas web para el departamento de Discapacidad e Inclusión, mejorando el cumplimiento de accesibilidad y la participación de los usuarios en un 25%.',

    // About
    about_title: 'Acerca de mí',
    about_intro: 'Soy Ingeniero de Sistemas egresado de la Universidad del Valle, apasionado por crear experiencias digitales de alta calidad. Mi trayectoria combina el rigor técnico con una visión de producto para entregar soluciones robustas.',
    about_skills_title: 'Habilidades Técnicas',
    about_skills_lang_title: 'Lenguajes',
    about_skills_lang_desc: 'Go (Golang), JavaScript/TypeScript, C#, Python, SQL, HTML5, CSS3',
    about_skills_frontend: 'Desarrollo Frontend',
    about_skills_front_desc: 'React.js, Angular, AngularJS, Diseño Responsivo',
    about_skills_backend: 'Desarrollo Backend',
    about_skills_back_desc: '.NET Core, Express.js, Django, Flask, APIs RESTful, Microservicios',
    about_skills_db_title: 'Bases de Datos',
    about_skills_db_desc: 'MySQL, SQL Server, MongoDB, Oracle DB',
    about_skills_tools: 'Herramientas & Nube',
    about_skills_tools_desc: 'Git, GitLab CI/CD, Docker, Kubernetes, AWS (EC2, RDS), Joomla',
    about_skills_test_title: 'Pruebas & Metodologías',
    about_skills_test_desc: 'Unitarias, Integración, E2E, Agile/Scrum, Clean Architecture, ETL',
    about_timeline_title: 'Trayectoria Profesional y Académica',

    // About Timeline TQ
    about_tq_role: 'Desarrollador Full-Stack',
    about_tq_company: 'Tecnoquímicas',
    about_tq_bullet1: 'Diseñé y desarrollé interfaces de usuario complejas utilizando AngularJS y React, mejorando la eficiencia operativa del sistema corporativo.',
    about_tq_bullet2: 'Diseñé, desarrollé e implementé APIs RESTful con C# y .NET Core, facilitando la integración de datos para aplicaciones de nivel empresarial.',
    about_tq_bullet3: 'Gestioné bases de datos SQL Server y Oracle, realizando modelado, consultas y optimización de rendimiento para grandes conjuntos de datos.',

    // About Timeline Univalle 1
    about_uv1_role: 'Monitor Académico & Desarrollador',
    about_uv1_company: 'Universidad del Valle · 1 año',
    about_uv1_bullet1: 'Creé y mantuve más de 8 páginas web para el departamento de Discapacidad e Inclusión utilizando Joomla CMS, mejorando el cumplimiento de accesibilidad y la participación de los usuarios en un 25%.',
    about_uv1_bullet2: 'Desarrollé un sistema de gestión de información estudiantil utilizando React, Django y MySQL, agilizando la recolección de datos y la generación de informes para más de 200 estudiantes bajo la política de inclusión.',
    about_uv1_bullet3: 'Brindé soporte técnico a un estudiante con discapacidad visual en el curso de Bases de Datos, adaptando materiales y flujos de trabajo para la accesibilidad.',

    // About Timeline Univalle 2
    about_uv2_role: 'Ingeniería de Sistemas',
    about_uv2_company: 'Universidad del Valle · Título Profesional',
    about_uv2_desc: 'Trabajo de grado con distinción meritoria: Desarrollo de una aplicación de realidad virtual para la enseñanza de anatomía dental para estudiantes de odontología.',

    // Contact
    contact_title: 'Hablemos',
    contact_subtitle: '¿Tienes un proyecto en mente o buscas un desarrollador Full-Stack? Me encantaría saber de ti. Escríbeme y creemos algo increíble juntos.',
    contact_form_name: 'Tu Nombre',
    contact_form_email: 'Tu Email',
    contact_form_subject: 'Asunto',
    contact_form_message: 'Tu Mensaje',
    contact_form_submit: 'Enviar Mensaje',
  },
  en: {
    // Navbar
    nav_home: 'Home',
    nav_projects: 'Projects',
    nav_about: 'About Me',
    nav_contact: 'Contact',

    // Footer
    footer_rights: 'All rights reserved.',
    footer_source: 'View source code on GitHub',

    // Home
    home_hero_subtitle: 'Systems Engineer & Full-Stack Developer. I build digital solutions with real impact — from enterprise data platforms to e-commerce and virtual reality.',
    home_hero_btn_projects: 'View Projects',
    home_hero_btn_contact: 'Contact Me',
    home_featured_title: 'Featured Experience',
    home_featured_link: 'View Full Journey',
    home_tq_tag: 'Full-Stack Developer',
    home_biscoli_tag: 'E-commerce · Own Business',

    // Home - Philosophy
    home_philosophy_label: 'My Philosophy',
    home_philosophy_title: 'Code with purpose, design with intention',
    home_philosophy_text: 'I believe technology has the power to turn ideas into reality. My approach combines robust engineering with user-centered design, always striving to create digital experiences that don\'t just work — they make a real impact.',
    home_philosophy_btn: 'Learn more about me',

    // Home - Services
    home_services_title: 'What I do',
    home_services_subtitle: 'Focus areas where I can add value to your project.',
    home_svc_fullstack_title: 'Full-Stack Development',
    home_svc_fullstack_desc: 'Building complete web applications, from robust APIs to modern, responsive user interfaces.',
    home_svc_data_title: 'Data Architecture',
    home_svc_data_desc: 'Designing and implementing data pipelines, multi-source integration, and database optimization for high performance.',
    home_svc_immersive_title: 'Immersive Experiences',
    home_svc_immersive_desc: 'Developing Virtual Reality applications focused on education and professional training.',

    // Home - Tech Stack
    home_tech_title: 'Technologies',
    home_tech_subtitle: 'The tools I work with every day.',

    // Home - CTA
    home_cta_title: 'Have a project in mind?',
    home_cta_text: 'I\'m open to new opportunities and collaborations. If you\'re looking for a developer committed to quality and impact, let\'s talk.',
    home_cta_btn: 'Let\'s start building',

    // Projects
    projects_title: 'Projects',
    projects_subtitle: 'A selection of personal and professional projects reflecting my approach to impactful digital solutions.',
    proj_vr_tag: 'Thesis Project · Meritorious Distinction',
    proj_vr_title: 'Virtual Reality Application for Dental Anatomy',
    proj_vr_desc: 'Developed an immersive virtual reality application designed for teaching dental anatomy to dentistry students at Universidad del Valle. The project received meritorious distinction as a Systems Engineering thesis (2025).',
    proj_biscoli_tag: 'Own Business · E-commerce',
    proj_biscoli_desc: 'My own healthy cookies business. Designed and developed the entire e-commerce platform from scratch, including product catalog, order system, and administration.',
    proj_btn_visit: 'Visit Site',
    proj_tq_tag: 'Professional · Full-Stack',
    proj_tq_title: 'Data Integration Platform — Tecnoquímicas',
    proj_tq_desc: 'Data integration platform for the corporate data warehouse, processing +100,000 daily records. Includes a unified system ("Variables Capturer") that consolidated two legacy apps, reducing user workflow time by 40%.',
    proj_univalle_tag: 'Professional · Web Development',
    proj_univalle_title: 'Management System — Universidad del Valle',
    proj_univalle_desc: 'Student information management system and over 8 websites for the Disability and Inclusion department, improving accessibility compliance and user engagement by 25%.',

    // About
    about_title: 'About Me',
    about_intro: 'I am a Systems Engineer graduated from Universidad del Valle, passionate about creating high-quality digital experiences. My background combines technical rigor with product vision to deliver robust solutions.',
    about_skills_title: 'Technical Skills',
    about_skills_lang_title: 'Languages',
    about_skills_lang_desc: 'Go (Golang), JavaScript/TypeScript, C#, Python, SQL, HTML5, CSS3',
    about_skills_frontend: 'Frontend Development',
    about_skills_front_desc: 'React.js, Angular, AngularJS, Responsive Design',
    about_skills_backend: 'Backend Development',
    about_skills_back_desc: '.NET Core, Express.js, Django, Flask, RESTful APIs, Microservices',
    about_skills_db_title: 'Databases',
    about_skills_db_desc: 'MySQL, SQL Server, MongoDB, Oracle DB',
    about_skills_tools: 'Tools & Cloud',
    about_skills_tools_desc: 'Git, GitLab CI/CD, Docker, Kubernetes, AWS (EC2, RDS), Joomla',
    about_skills_test_title: 'Testing & Methodologies',
    about_skills_test_desc: 'Unit, Integration, E2E, Agile/Scrum, Clean Architecture, ETL',
    about_timeline_title: 'Professional and Academic Journey',

    // About Timeline TQ
    about_tq_role: 'Full-Stack Developer',
    about_tq_company: 'Tecnoquímicas',
    about_tq_bullet1: 'Designed and developed complex user interfaces using AngularJS and React, improving operational efficiency of the corporate system.',
    about_tq_bullet2: 'Designed, developed, and deployed RESTful APIs with C# and .NET Core, facilitating data integration for enterprise-level applications.',
    about_tq_bullet3: 'Managed SQL Server and Oracle databases, performing modeling, queries, and performance optimization for large datasets.',

    // About Timeline Univalle 1
    about_uv1_role: 'Academic Monitor & Developer',
    about_uv1_company: 'Universidad del Valle · 1 year',
    about_uv1_bullet1: 'Created and maintained over 8 websites for the Disability and Inclusion department using Joomla CMS, improving accessibility compliance and user engagement by 25%.',
    about_uv1_bullet2: 'Developed a student information management system using React, Django, and MySQL, streamlining data collection and reporting for over 200 students under the inclusion policy.',
    about_uv1_bullet3: 'Provided technical support to a visually impaired student in the Databases course, adapting materials and workflows for accessibility.',

    // About Timeline Univalle 2
    about_uv2_role: 'Systems Engineering',
    about_uv2_company: 'Universidad del Valle · Professional Degree',
    about_uv2_desc: 'Meritorious thesis: Development of a virtual reality application for teaching dental anatomy to dentistry students.',

    // Contact
    contact_title: "Let's Talk",
    contact_subtitle: 'Have a project in mind or looking for a Full-Stack developer? I would love to hear from you. Drop me a message and let\'s build something amazing together.',
    contact_form_name: 'Your Name',
    contact_form_email: 'Your Email',
    contact_form_subject: 'Subject',
    contact_form_message: 'Your Message',
    contact_form_submit: 'Send Message',
  }
};

@Injectable({ providedIn: 'root' })
export class TranslationService {
  readonly currentLang = signal<Language>('es');
  readonly t = computed(() => TRANSLATIONS[this.currentLang()]);

  toggleLanguage() {
    this.currentLang.update(lang => lang === 'es' ? 'en' : 'es');
  }

  setLanguage(lang: Language) {
    this.currentLang.set(lang);
  }
}
