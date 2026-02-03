import { getImgPath } from "@/utils/image";

export const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Blog", href: "/#blog" },
];

export const count = [
    {
        icon: getImgPath("/images/counter/star.svg"),
        value: "4.86",
        description: "Out of 5 stars from 3896 reviews on Google platform",
    },
    {
        icon: getImgPath("/images/counter/admin.svg"),
        value: "364",
        description: "Client testimonials received in the year 2021",
    },
    {
        icon: getImgPath("/images/counter/bag.svg"),
        value: "45M+",
        description: "Revenue generated through new projects & marketing",
    },
];

export const Progress = [
  { title: 'Full Stack Development', Progress: 95 },
  { title: 'UX Research & Testing', Progress: 90 },
  { title: 'Product Management', Progress: 85 },
  { title: 'UI & Visual Design', Progress: 92 },
  { title: 'SEO & Web Optimization', Progress: 88 },
  { title: 'WordPress & WooCommerce', Progress: 90 },
  { title: 'PHP & Laravel', Progress: 95 },
  { title: 'React & TypeScript', Progress: 85 },
];


export const Servicebox = [
  {
    icon: getImgPath('/images/services/web-development.svg'),
    title: 'Web Development',
    description:
      'Building responsive, high-performance websites using modern frameworks like React, Laravel, and WordPress.',
  },
  {
    icon: getImgPath('/images/services/ux-ui-design.svg'),
    title: 'UX & UI Design',
    description:
      'Creating user-friendly interfaces and seamless experiences through research, wireframing, and prototyping.',
  },
  {
    icon: getImgPath('/images/services/e-commerce.svg'),
    title: 'E-Commerce Solutions',
    description:
      'Developing custom online stores with WooCommerce, Shopify integrations, and secure payment systems.',
  },
  {
    icon: getImgPath('/images/services/seo.svg'),
    title: 'SEO & Optimization',
    description:
      'Improving search engine visibility, page speed, and overall web performance for higher conversions.',
  },
  {
    icon: getImgPath('/images/services/project-management.svg'),
    title: 'Project Management',
    description:
      'Efficiently managing web development projects, Agile workflows, and team collaboration for timely delivery.',
  },
  {
    icon: getImgPath('/images/services/maintenance.svg'),
    title: 'Website Maintenance',
    description:
      'Ensuring websites stay up-to-date, secure, and fully optimized with regular maintenance and updates.',
  },
];


export const portfolioinfo = [
    {
        image: getImgPath('/images/portfolio/grament.png'),
        alt: 'Portfolio',
        title: 'Garment meterials ordering system',
        slug: 'Laravel',
        info: 'Laravel && React',
        Class: 'md:mt-0'
    },
    {
        image: getImgPath('/images/portfolio/helpAge.jpg'),
        alt: 'Portfolio',
        title: 'Health cares Booking system',
        slug: 'Laravel',
        info: 'Laravel',
        Class: 'md:mt-24'
    },
    {
        image: getImgPath('/images/portfolio/mag.jpg'),
        alt: 'Portfolio',
        title: 'Equipment Inventory System',
        slug: 'Laravel-humans',
        info: 'Laravel',
        Class: 'md:mt-0'
    },
    {
        image: getImgPath('/images/portfolio/nsoft_sys.png'),
        alt: 'Portfolio',
        title: 'Pos System',
        slug: 'Laravel',
        info: 'Laravel',
        Class: 'md:mt-24'
    },
    {
        image: getImgPath('/images/portfolio/pasofin.png'),
        alt: 'Portfolio',
        title: 'Pos and Appoinment System',
        slug: 'Laravel',
        info: 'Laravel',
        Class: 'md:mt-0'
    },
    {
        image: getImgPath('/images/portfolio/stellana.jpg'),
        alt: 'Portfolio',
        title: 'Tyre Manufuctring system',
        slug: 'Laravel',
        info: 'Laravel',
        Class: 'md:mt-0'
    },
   
    
]