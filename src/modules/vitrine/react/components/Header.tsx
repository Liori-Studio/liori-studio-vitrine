export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
      <nav className="max-w-4xl mx-auto px-6 py-6 flex justify-between items-center">
        <a
          href="#"
          className="font-serif text-xl tracking-tight hover:opacity-60 transition-opacity"
        >
          Liori Studio
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
