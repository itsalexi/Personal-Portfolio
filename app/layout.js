import localFont from 'next/font/local';
import './globals.css';
import Nav from '@/components/Nav';
import { DarkGridHero } from '@/components/DarkGrid';
import Script from 'next/script';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  metadataBase: new URL('https://alexi.life'),
  title: {
    default: 'Alexi Canamo',
    template: '%s | Alexi Canamo',
  },
  description:
    "Alexi is a passionate 18-year-old software developer from the Philippines. He's a second-year college student in Ateneo, studying Computer Science.",
  keywords: [
    'software developer',
    'web developer',
    'Philippines',
    'Computer Science',
    'Ateneo',
    'portfolio',
    'full-stack developer',
    'React',
    'Next.js',
    'JavaScript',
  ],
  authors: [{ name: 'Alexi Canamo' }],
  creator: 'Alexi Canamo',
  publisher: 'Alexi Canamo',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://alexi.life',
    title: 'Alexi Canamo',
    description:
      "Alexi is a passionate 18-year-old software developer from the Philippines. He's a second-year college student in Ateneo, studying Computer Science.",
    siteName: 'Alexi Canamo Portfolio',
    images: [
      {
        url: '/images/seo/og-image.jpg',
        width: 1200,
        height: 600,
        alt: 'Alexi Canamo Portfolio',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alexi Canamo',
    description:
      "Alexi is a passionate 18-year-old software developer from the Philippines. He's a second-year college student in Ateneo, studying Computer Science.",
    creator: '@alexicanamo',
    images: [
      {
        url: '/images/seo/twitter-image.jpg',
        alt: 'Alexi Canamo',
        width: 1200,
        height: 600,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Alexi Canamo',
              url: 'https://alexi.life',
              jobTitle: 'Software Developer',
              description:
                "Alexi is a passionate 18-year-old software developer from the Philippines. He's a second-year college student in Ateneo, studying Computer Science.",
              alumniOf: {
                '@type': 'CollegeOrUniversity',
                name: 'Ateneo de Manila University',
                department: 'Computer Science',
                address: {
                  '@type': 'PostalAddress',
                  addressCountry: 'PH',
                  addressLocality: 'Quezon City',
                  addressRegion: 'Metro Manila',
                },
              },
              knowsAbout: [
                'Software Development',
                'Web Development',
                'Computer Science',
                'React',
                'Next.js',
                'JavaScript',
              ],
              knowsLanguage: ['English', 'Filipino'],
              nationality: {
                '@type': 'Country',
                name: 'Philippines',
              },
              sameAs: [
                'https://github.com/itsalexi',
                'https://linkedin.com/in/alexicanamo',
                'https://www.instagram.com/alexi_canamo',
                'https://www.facebook.com/alexirothluis.canamo',
                'https://ko-fi.com/itsalexi',
                'https://x.com/alexicanamo',
                'https://www.amazon.com/author/alexicanamo',
                'https://www.crunchbase.com/person/alexi-canamo',
              ],
              image: {
                '@type': 'ImageObject',
                url: '/images/seo/profile.jpg',
                width: 400,
                height: 400,
                caption: 'Alexi Canamo - Software Developer',
              },
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': 'https://alexi.life',
              },
              worksFor: {
                '@type': 'Organization',
                name: 'Software Developer',
                url: 'https://alexi.life',
              },
              hasCredential: {
                '@type': 'EducationalCredential',
                credentialCategory: 'degree',
                educationalLevel: 'Bachelor',
                about: {
                  '@type': 'Thing',
                  name: 'Computer Science',
                },
              },
              memberOf: [
                {
                  '@type': 'Organization',
                  name: 'Computer Society of the Ateneo',
                  url: 'https://compsat.org',
                },
              ],
            }),
          }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Alexi Canamo',
              url: 'https://alexi.life',
              description:
                "Alexi is a passionate 18-year-old software developer from the Philippines. He's a second-year college student in Ateneo, studying Computer Science.",
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://alexi.life/search?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
              publisher: {
                '@type': 'Person',
                name: 'Alexi Canamo',
                jobTitle: 'Software Developer',
              },
              inLanguage: 'en-US',
              isAccessibleForFree: true,
              license: 'https://creativecommons.org/licenses/by/4.0/',
            }),
          }}
        />
        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://alexi.life',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Blog',
                  item: 'https://alexi.life/blog',
                },
              ],
            }),
          }}
        />
        <Script
          id="projects-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              name: "Alexi Canamo's Projects",
              description: 'Software development projects and portfolio',
              url: 'https://alexi.life/#projects',
              itemListElement: [
                {
                  '@type': 'SoftwareApplication',
                  name: 'TedX AteneoDeManilaU Website',
                  applicationCategory: 'WebApplication',
                  operatingSystem: 'Web',
                  author: {
                    '@type': 'Person',
                    name: 'Alexi Canamo',
                  },
                  description:
                    'Helped lead a team of three developers to design and build the TEDxAteneoDeManilaU 2025 website, ensuring seamless navigation, modern aesthetics, and optimized performance.',
                  url: 'https://tedxateneodemanilau.com',
                  codeRepository: 'https://github.com/itsalexi/TEDxADMU/',
                  technologies: [
                    'HTML',
                    'CSS',
                    'React',
                    'NextJS',
                    'mobilefriendly',
                  ],
                  screenshot: {
                    '@type': 'ImageObject',
                    url: 'https://alexi.life/assets/tedx.png',
                    width: 1200,
                    height: 630,
                    caption: 'TedX AteneoDeManilaU Website Screenshot',
                  },
                },
                {
                  '@type': 'SoftwareApplication',
                  name: 'Ateneo QPI Calculator',
                  applicationCategory: 'WebApplication',
                  operatingSystem: 'Web',
                  author: {
                    '@type': 'Person',
                    name: 'Alexi Canamo',
                  },
                  description:
                    'A simple easy to use QPI calculator, import your grades, or select your course to be able to calculate your grades fast!',
                  url: 'https://qpi.alexi.life',
                  codeRepository: 'https://github.com/itsalexi/ADMU-QPI',
                  technologies: [
                    'HTML',
                    'CSS',
                    'React',
                    'NextJS',
                    'mobilefriendly',
                  ],
                  screenshot: {
                    '@type': 'ImageObject',
                    url: 'https://alexi.life/assets/QPICalc.png',
                    width: 1200,
                    height: 630,
                    caption: 'Ateneo QPI Calculator Screenshot',
                  },
                },
                {
                  '@type': 'SoftwareApplication',
                  name: 'Ateneo Enlistment Helper',
                  applicationCategory: 'WebApplication',
                  operatingSystem: 'Web',
                  author: {
                    '@type': 'Person',
                    name: 'Alexi Canamo',
                  },
                  description:
                    'An easy way to find available classes and build your schedule in Ateneo. Browse courses, apply filters, and create your ideal timetable with the Ateneo Enlistment Helper!',
                  url: 'https://schedule.alexi.life',
                  codeRepository:
                    'https://github.com/itsalexi/Ateneo-Enlistment',
                  technologies: [
                    'HTML',
                    'CSS',
                    'React',
                    'NextJS',
                    'mobilefriendly',
                  ],
                  screenshot: {
                    '@type': 'ImageObject',
                    url: 'https://alexi.life/assets/EnlistmentHelper.jpg',
                    width: 1200,
                    height: 630,
                    caption: 'Ateneo Enlistment Helper Screenshot',
                  },
                },
                {
                  '@type': 'SoftwareApplication',
                  name: 'Ateneo Tuition Fee Viewer',
                  applicationCategory: 'WebApplication',
                  operatingSystem: 'Web',
                  author: {
                    '@type': 'Person',
                    name: 'Alexi Canamo',
                  },
                  description:
                    'Easily estimate and see how much your tuition will cost at Ateneo with this very intuitive and user friendly web-app.',
                  url: 'https://tuition.alexi.life',
                  codeRepository: 'https://github.com/itsalexi/Ateneo-Tuition',
                  technologies: [
                    'HTML',
                    'CSS',
                    'React',
                    'NextJS',
                    'mobilefriendly',
                  ],
                  screenshot: {
                    '@type': 'ImageObject',
                    url: 'https://alexi.life/assets/TuitionFee.png',
                    width: 1200,
                    height: 630,
                    caption: 'Ateneo Tuition Fee Viewer Screenshot',
                  },
                },
                {
                  '@type': 'SoftwareApplication',
                  name: 'Sharespace',
                  applicationCategory: 'WebApplication',
                  operatingSystem: 'Web',
                  author: {
                    '@type': 'Person',
                    name: 'Alexi Canamo',
                  },
                  description:
                    'A social media blogging platform like Medium and Dev.to! You have the ability to like, share, comment on every post!',
                  url: 'https://sharespace.alexi.life',
                  codeRepository: 'https://github.com/itsalexi/Sharespace',
                  technologies: [
                    'HTML',
                    'CSS',
                    'React',
                    'Firebase',
                    'NextJS',
                    'mobilefriendly',
                  ],
                  screenshot: {
                    '@type': 'ImageObject',
                    url: 'https://alexi.life/assets/sharespace.png',
                    width: 1200,
                    height: 630,
                    caption: 'Sharespace Screenshot',
                  },
                },
                {
                  '@type': 'SoftwareApplication',
                  name: 'Discord Clone',
                  applicationCategory: 'WebApplication',
                  operatingSystem: 'Web',
                  author: {
                    '@type': 'Person',
                    name: 'Alexi Canamo',
                  },
                  description:
                    'A discord clone with full authentication and realtime chat messaging powered by Firebase. Login/Register pages are mobile-friendly, but the main application is not.',
                  url: 'https://alexi.life/projects/discord-clone/',
                  codeRepository: 'https://github.com/itsalexi/Discord-Clone/',
                  technologies: [
                    'HTML',
                    'CSS',
                    'React',
                    'Firebase',
                    'JavaScript',
                  ],
                  screenshot: {
                    '@type': 'ImageObject',
                    url: 'https://alexi.life/assets/discord.png',
                    width: 1200,
                    height: 630,
                    caption: 'Discord Clone Screenshot',
                  },
                },
              ],
            }),
          }}
        />
        <Script
          id="blog-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Blog',
              name: "Alexi Canamo's Blog",
              description:
                'Technical articles and thoughts about software development',
              url: 'https://alexi.life/blog',
              author: {
                '@type': 'Person',
                name: 'Alexi Canamo',
                url: 'https://alexi.life',
                jobTitle: 'Software Developer',
                knowsAbout: [
                  'Software Development',
                  'Web Development',
                  'Computer Science',
                  'React',
                  'Next.js',
                  'JavaScript',
                ],
              },
              publisher: {
                '@type': 'Person',
                name: 'Alexi Canamo',
                url: 'https://alexi.life',
              },
              inLanguage: 'en-US',
              isAccessibleForFree: true,
              blogPost: {
                '@type': 'BlogPosting',
                mainEntityOfPage: {
                  '@type': 'WebPage',
                  '@id': 'https://alexi.life/blog',
                },
                headline: 'Blog Posts',
                description:
                  'Technical articles and thoughts about software development',
                author: {
                  '@type': 'Person',
                  name: 'Alexi Canamo',
                },
                publisher: {
                  '@type': 'Person',
                  name: 'Alexi Canamo',
                },
                isAccessibleForFree: true,
                inLanguage: 'en-US',
              },
            }),
          }}
        />
        <Script
          id="tech-stack-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              name: "Alexi Canamo's Tech Stack",
              description:
                'Technologies and tools used in software development',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  item: {
                    '@type': 'TechArticle',
                    name: 'JavaScript',
                    description: 'Programming language for web development',
                  },
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  item: {
                    '@type': 'TechArticle',
                    name: 'React',
                    description:
                      'JavaScript library for building user interfaces',
                  },
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  item: {
                    '@type': 'TechArticle',
                    name: 'Node.js',
                    description: 'JavaScript runtime environment',
                  },
                },
                {
                  '@type': 'ListItem',
                  position: 4,
                  item: {
                    '@type': 'TechArticle',
                    name: 'Next.js',
                    description: 'React framework for production',
                  },
                },
                {
                  '@type': 'ListItem',
                  position: 5,
                  item: {
                    '@type': 'TechArticle',
                    name: 'Python',
                    description:
                      'Programming language for general-purpose programming',
                  },
                },
                {
                  '@type': 'ListItem',
                  position: 6,
                  item: {
                    '@type': 'TechArticle',
                    name: 'MongoDB',
                    description: 'NoSQL database',
                  },
                },
                {
                  '@type': 'ListItem',
                  position: 7,
                  item: {
                    '@type': 'TechArticle',
                    name: 'PostgreSQL',
                    description: 'Relational database management system',
                  },
                },
                {
                  '@type': 'ListItem',
                  position: 8,
                  item: {
                    '@type': 'TechArticle',
                    name: 'Docker',
                    description: 'Container platform',
                  },
                },
                {
                  '@type': 'ListItem',
                  position: 9,
                  item: {
                    '@type': 'TechArticle',
                    name: 'TailwindCSS',
                    description: 'Utility-first CSS framework',
                  },
                },
                {
                  '@type': 'ListItem',
                  position: 10,
                  item: {
                    '@type': 'TechArticle',
                    name: 'Vercel',
                    description:
                      'Cloud platform for static sites and Serverless Functions',
                  },
                },
                {
                  '@type': 'ListItem',
                  position: 11,
                  item: {
                    '@type': 'TechArticle',
                    name: 'Firebase',
                    description: 'App development platform',
                  },
                },
                {
                  '@type': 'ListItem',
                  position: 12,
                  item: {
                    '@type': 'TechArticle',
                    name: 'Git',
                    description: 'Version control system',
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "86ec04c4f2cb40658a18c7523aa83bc2"}'
        ></script>
        <Nav />
        <DarkGridHero className="min-h-screen">{children}</DarkGridHero>
      </body>
    </html>
  );
}
