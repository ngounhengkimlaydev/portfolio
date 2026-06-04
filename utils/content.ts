export const NAVLINKS = [
  {
    label: "Home",
    url: "/#hero",
  },
  {
    label: "About",
    url: "/#about",
  },
  {
    label: "My Works",
    url: "/my-works",
  },
  {
    label: "Service",
    url: "/#service",
  },
];

export const PROFILE = {
  firstname: "Ngoun",
  lastname: "HengKimlay",
  get fullname() {
    return `${this.firstname} ${this.lastname}`;
  },
  role: "Web Fullstack Developer",
  avatar: "/images/myprofile.png",
};

export const HERO = {
  badge: "Available for freelance",
  headline: `Hey, I'm ${PROFILE.lastname}. I'm a ${PROFILE.role}`,
  subline:
    "I am a web developer passionate about building responsive, visually appealing, and user-friendly web applications.",
};

export const SERVICE = {
  label: "service",
  headline: "Professional Web Solutions for Modern Businesses",
  subline:
    "I deliver high-quality web applications and digital solutions that are responsive, user-friendly, and visually appealing. Let’s collaborate to bring your ideas to life with efficiency and creativity.",
  services: [
    {
      name: "Web Development",
      icon: "Code",
      description:
        "Building fullstack web applications using modern technologies like Node.js, Nuxt.js, Vue.js, and more.",
      thumbnails: "",
    },
    {
      name: "Website Maintenance",
      icon: "Settings",
      description:
        "Providing ongoing support, optimization, and updates to keep your websites secure and efficient.",
      thumbnails: "",
    },
    {
      name: "Freelance Projects",
      icon: "Briefcase",
      description:
        "Collaborating on custom projects from concept to deployment, tailored to client requirements.",
      thumbnails: "",
    },
  ],
};

export const WORK = {
  label: "work",
  headline: "Projects I’ve built to solve real-world problems.",
  subline:
    "I specialize in crafting web applications and digital solutions that are efficient, user-friendly, and visually appealing. Here are some of my notable works.",
  works: [
    {
      name: "Taskio – Task & Project Management",
      live_demo: "https://www.taskio.site/",
      description:
        "Built a full-stack project management application with Nuxt, Nuxt UI, NestJS, and PostgreSQL, implementing authentication, task assignment, project tracking, team collaboration, real-time status updates, and analytics dashboards through a scalable and responsive architecture.",
      thumbnails: "taskio.png",
      type: "Website | Personal",
    },
    {
      name: "Chantrea Cloud",
      live_demo: "https://chantrea-cloud-website.vercel.app/",
      description:
        "Designed and developed a modern cloud services website using Nuxt and Nuxt UI, featuring service showcases, pricing plans, responsive layouts, contact forms, and SEO optimization to provide a professional online presence for cloud hosting solutions.",
      thumbnails: "ct-web.png",
      type: "Website | Personal",
    },
    {
      name: "Logistic System Management",
      live_demo: "",
      description:
        "Built a logistics management platform with Nuxt, Nuxt UI, NestJS, and PostgreSQL, implementing authentication, role-based access control, shipment and inventory management, RESTful APIs, and real-time operational dashboards for efficient logistics workflows.",
      thumbnails: "logistic.png",
      type: "Admin System | Personal",
    },
    {
      name: "TopUp Game Demo",
      live_demo: "https://demo-game-topup.vercel.app/",
      description:
        "Developed a game top-up platform demo that allows users to browse games, select products, simulate purchases, responsive web interface.",
      thumbnails: "top-up.png",
      type: "Website | Personal",
    },
    {
      name: "5L Consult Service",
      live_demo: "",
      description:
        "Developed a comprehensive Admin System for 5L Consult Service, operational workflows through a secure and responsive web-based dashboard.",
      thumbnails: "5l.png",
      type: "Admin System | Company",
    },
    {
      name: "AALL - Motor Booking App",
      live_demo: "https://aall.app/",
      description:
        "Developed the AALL website and Admin CMS, creating responsive interfaces, managing content workflows, and implementing administrative features for the motor booking platform.",
      thumbnails: "aall.png",
      type: "Website | Company",
    },
    {
      name: "KD AESTHETIC CENTER",
      live_demo: "https://kdac.kd-medical.com/",
      description:
        "Developed a modern and responsive website for KD Aesthetic Center.",
      thumbnails: "kd.png",
      type: "Website | Company",
    },
    {
      name: "Big Boss Job",
      live_demo: "https://bigbossjob.com/",
      description:
        "Developed a job portal website to connect job seekers with employers, featuring job listings.",
      thumbnails: "bbj.png",
      type: "Website | Company",
    },
    {
      name: "Navikah Residence",
      live_demo: "https://www.navikahresidence.com/",
      description:
        "Developed a responsive real estate website for Navikah Residence, showcasing condo details.",
      thumbnails: "rms.png",
      type: "Website | Company",
    },
    {
      name: "Mahachak",
      live_demo: "https://mahachak.com/",
      description:
        "Developed a multi-category platform for Mahachak, allowing users to explore job listings, real estate options, and other services with a user-friendly interface.",
      thumbnails: "mdco.png",
      type: "Multi-Category Platform | Company",
    },
  ],
};

export const ABOUT = {
  label: "Let me introduce myself",
  introduce: [
    `My name is ${PROFILE.fullname}, and I am a professional ${PROFILE.role}. I have experience building real-world projects including multi-category platforms, real estate websites, and corporate web applications.`,
    "I enjoy turning ideas into interactive, functional, and visually appealing web solutions. I'm passionate about collaborating and delivering high-quality digital products.",
  ],
};

export const CTA = {
  label: "Let’s Build Something Great Together",
  description:
    "Need a clean, functional UI? I’m here to help bring your vision to life—simple, responsive, and user-focused.",
};
