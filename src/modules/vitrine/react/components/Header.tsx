import { Logo } from "@root/modules/shared/react/logo/Logo";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
      <nav className="max-w-4xl mx-auto px-6 py-6 flex justify-between items-center">
        <a
          href="#"
          className="flex items-center gap-2.5 hover:opacity-60 transition-opacity"
        >
          <Logo size={28} />
          <span className="text-xl font-semibold tracking-tight">
            Liori Studio
          </span>
        </a>
        <ul className="flex gap-8 text-sm tracking-wide">
          <li>
            <a
              href="#work"
              className="text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              Work
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
