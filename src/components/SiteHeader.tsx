import Link from 'next/link';

import Icons from './Icons';
import LocaleSwitcher from './LocaleSwitcher';
import { MainNav } from './MainNav';
import ThemeToggle from './ThemeToggle';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-b-slate-200 bg-white dark:border-b-slate-700 dark:bg-slate-900">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link
              href="https://github.com/hongfaqiu/nextjs13-with-antd-tailwindcss"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              <Icons.Github className="h-5 w-5" />
            </Link>
            <LocaleSwitcher />
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
