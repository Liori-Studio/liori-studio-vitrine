export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-2xl text-center animate-fade-in">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight text-balance">
          Independent mobile app studio
        </h1>
        <p className="mt-8 text-lg md:text-xl text-neutral-500 leading-relaxed max-w-xl mx-auto">
          We design and develop practical, well-crafted products with a strong
          emphasis on user experience, technical excellence, and sustainable
          monetization.
        </p>
        <div className="mt-12">
          <a
            href="#work"
            className="inline-block text-sm tracking-wide text-neutral-400 hover:text-neutral-900 transition-colors border-b border-neutral-200 hover:border-neutral-900 pb-1"
          >
            View our work
          </a>
        </div>
      </div>
    </section>
  );
};
