import { getPermalink } from './utils/permalinks';
import type { CallToAction } from './types';

export const headerData: {
  links: Array<{
    text: string;
    href?: string;
    links?: Array<{
      text: string;
      href: string;
    }>;
  }>;
  actions: Array<CallToAction>;
} = {
  links: [
    // {
    //   text: 'Homes', // Placeholder, removing for now
    //   links: [
    //     {
    //       text: 'SaaS',
    //       href: getPermalink('/homes/saas'),
    //     },
    //     {
    //       text: 'Startup',
    //       href: getPermalink('/homes/startup'),
    //     },
    //     {
    //       text: 'Mobile App',
    //       href: getPermalink('/homes/mobile-app'),
    //     },
    //     {
    //       text: 'Personal',
    //       href: getPermalink('/homes/personal'),
    //     },
    //   ],
    // },
    {
      text: 'TopNetworks',
      links: [
        { text: 'Servicios', href: '/#servicios' },
        { text: 'Quiénes Somos', href: '/#quienes-somos' },
        { text: 'Estrategia de Contenido', href: '/#estrategia-contenido' },
        { text: 'Nuestras Marcas', href: '/#nuestras-marcas' },
        { text: 'Nuestro Proceso', href: '/#nuestro-proceso' },
        { text: 'Ventajas', href: '/#ventajas' },
        { text: 'Fundadores', href: '/#founders' },
        { text: 'FAQs', href: '/#faqs' },
        { text: 'Contacto', href: '/#contacto' },
      ],
    },
    // {
    //   text: 'Landing', // Placeholder, removing for now
    //   links: [
    //     {
    //       text: 'Lead Generation',
    //       href: getPermalink('/landing/lead-generation'),
    //     },
    //     {
    //       text: 'Long-form Sales',
    //       href: getPermalink('/landing/sales'),
    //     },
    //     {
    //       text: 'Click-Through',
    //       href: getPermalink('/landing/click-through'),
    //     },
    //     {
    //       text: 'Product Details (or Services)',
    //       href: getPermalink('/landing/product'),
    //     },
    //     {
    //       text: 'Coming Soon or Pre-Launch',
    //       href: getPermalink('/landing/pre-launch'),
    //     },
    //     {
    //       text: 'Subscription',
    //       href: getPermalink('/landing/subscription'),
    //     },
    //   ],
    // },
    // {
    //   text: 'Blog', // Assuming no blog for now, can be re-added
    //   links: [
    //     {
    //       text: 'Blog List',
    //       href: getBlogPermalink(),
    //     },
    //     {
    //       text: 'Article',
    //       href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
    //     },
    //     {
    //       text: 'Article (with MDX)',
    //       href: getPermalink('markdown-elements-demo-post', 'post'),
    //     },
    //     {
    //       text: 'Category Page',
    //       href: getPermalink('tutorials', 'category'),
    //     },
    //     {
    //       text: 'Tag Page',
    //       href: getPermalink('astro', 'tag'),
    //     },
    //   ],
    // },
    {
      text: 'Páginas', // Renamed from Pages, kept for Terms/Privacy
      links: [
        // {
        //   text: 'Features (Anchor Link)', // Example, removing
        //   href: getPermalink('/#features'),
        // },
        // {
        //   text: 'Services', // Page link, removing as we have anchor
        //   href: getPermalink('/services'),
        // },
        // {
        //   text: 'Pricing', // Example, removing
        //   href: getPermalink('/pricing'),
        // },
        // {
        //   text: 'About us', // Example, removing
        //   href: getPermalink('/about'),
        // },
        {
          text: 'Contacto', // Keeping page link for contact form
          href: getPermalink('/contact'),
        },
        {
          text: 'Términos y Condiciones',
          href: getPermalink('/terms'),
        },
        {
          text: 'Política de Privacidad',
          href: getPermalink('/privacy'),
        },
      ],
    },
  ],
  actions: [
    {
      variant: 'primary',
      text: 'Conoce Más',
      href: '#servicios',
      icon: 'tabler:arrow-down-circle',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Navegación',
      links: [
        { text: 'Servicios', href: '/#servicios' },
        { text: 'Quiénes Somos', href: '/#quienes-somos' },
        { text: 'Estrategia', href: '/#estrategia-contenido' },
        { text: 'Marcas', href: '/#nuestras-marcas' },
        { text: 'Proceso', href: '/#nuestro-proceso' },
        { text: 'Ventajas', href: '/#ventajas' },
        { text: 'Fundadores', href: '/#founders' },
        { text: 'FAQs', href: '/#faqs' },
        { text: 'Contacto', href: '/#contacto' },
      ],
    },
    {
      title: 'Compañía', // Renamed from Company
      links: [
        // { text: 'About', href: '#' }, // Placeholder
        // { text: 'Blog', href: '#' }, // Placeholder
        // { text: 'Careers', href: '#' }, // Placeholder
        // { text: 'Press', href: '#' }, // Placeholder
        // { text: 'Inclusion', href: '#' }, // Placeholder
        // { text: 'Social Impact', href: '#' }, // Placeholder
        // { text: 'Shop', href: '#' }, // Placeholder
        // Keeping legal links here too for visibility
        { text: 'Términos y Condiciones', href: getPermalink('/terms') },
        { text: 'Política de Privacidad', href: getPermalink('/privacy') },
      ],
    },
    // {
    //   title: 'Platform', // Placeholder, removing
    //   links: [
    //     { text: 'Developer API', href: '#' },
    //     { text: 'Partners', href: '#' },
    //     { text: 'Atom', href: '#' },
    //     { text: 'Electron', href: '#' },
    //     { text: 'AstroWind Desktop', href: '#' },
    //   ],
    // },
    // {
    //   title: 'Support', // Placeholder, removing
    //   links: [
    //     { text: 'Docs', href: '#' },
    //     { text: 'Community Forum', href: '#' },
    //     { text: 'Professional Services', href: '#' },
    //     { text: 'Skills', href: '#' },
    //     { text: 'Status', href: '#' },
    //   ],
    // },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    // { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') }, // RSS feed link removed as button was removed
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/juanjaragavi/topnetworks' }, // Updated GitHub link
  ],
  footNote: `
    © ${new Date().getFullYear()} TopNetworks Inc. Todos los derechos reservados.
  `,
};
