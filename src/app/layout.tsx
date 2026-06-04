import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Developer Portfolio",
  description: "Systems, Security, and Software Engineering Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // We add the "dark" class here to default to Tailwind's dark mode palette
    <html lang="en" className="dark"> 
      <body className={`${inter.className} bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 min-h-screen antialiased`}>
        
        {/* Global Layout Wrapper */}
        <div className="max-w-3xl mx-auto px-6 py-12 sm:py-20">
          
          {/* Persistent Navigation Header */}
          <header className="flex items-center justify-between mb-16 sm:mb-24">
            <a href="/" className="font-mono font-bold text-sm tracking-tight hover:text-blue-500 transition-colors">
              ~/home
            </a>
            <nav className="flex gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
              <a href="#projects" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Projects</a>
              <a href="#about" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">About</a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Resume</a>
            </nav>
          </header>

          {/* Unique page content gets injected here */}
          <main>{children}</main>
          
          {/* Global Footer */}
          <footer className="mt-32 pt-8 border-t border-zinc-200 dark:border-zinc-900 text-center text-xs text-zinc-500 font-mono">
            &copy; {new Date().getFullYear()} • built with next.js & tailwind
          </footer>
        </div>

      </body>
    </html>
  );
}