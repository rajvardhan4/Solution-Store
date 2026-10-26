import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ExperienceProvider } from '@/components/Experience';
import { asset } from '@/lib/paths';

export const metadata = {
  title: { default: 'Solution Store — Thoughtful tools. Real possibilities.', template: '%s | Solution Store' },
  description: 'Explore Chat Pilot and HRM Pilot. Discover features, introductory pricing and live portals at Solution Store.',
  icons: { icon: asset('assets/solution-store-logo-coral-blue.png') },
};
export const viewport = { themeColor: '#080b12' };
const themeScript = `try{document.documentElement.dataset.theme=localStorage.getItem('solution-store-theme')||'dark'}catch(e){document.documentElement.dataset.theme='dark'}`;

export default function RootLayout({ children }) {
  return <html lang="en" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head><body><ExperienceProvider><Header />{children}<Footer /></ExperienceProvider></body></html>;
}
