import localFont from 'next/font/local';
import './globals.css';
import Nav from '@/components/Nav';

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
  title: 'Alexi Canamo',
  description:
    "Alexi is a passionate 17-year-old software developer from the Philippines. He's a first-year college student in Ateneo, studying Computer Science.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "86ec04c4f2cb40658a18c7523aa83bc2"}'
        ></script>
        <Nav />
        {children}
      </body>
    </html>
  );
}
