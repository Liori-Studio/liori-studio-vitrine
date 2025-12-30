export const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-8">
          Get in touch
        </h2>
        <p className="text-neutral-500 mb-12 max-w-md mx-auto">
          Have a project in mind or want to collaborate? We would love to hear
          from you.
        </p>
        <a
          href="mailto:contact@liori.studio"
          className="inline-block text-lg border-b-2 border-neutral-900 pb-1 hover:opacity-60 transition-opacity"
        >
          contact@liori.studio
        </a>
      </div>
    </section>
  );
};
