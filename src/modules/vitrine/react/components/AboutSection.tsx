const expertise = [
  "Mobile development (iOS, Android, React Native)",
  "Software architecture (DDD, TDD)",
  "UX & product thinking",
  "App monetization (subscriptions, in-app purchases)",
  "App launches and growth",
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6 bg-neutral-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-16">
          About
        </h2>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-sm tracking-wide text-neutral-400 uppercase mb-6">
              Mission
            </h3>
            <p className="text-lg leading-relaxed text-neutral-600">
              To create simple, effective, and thoughtfully designed
              applications by combining strong mobile development expertise,
              product and UX-driven thinking, and a pragmatic approach focused
              on real-world impact.
            </p>
          </div>
          <div>
            <h3 className="text-sm tracking-wide text-neutral-400 uppercase mb-6">
              Expertise
            </h3>
            <ul className="space-y-3">
              {expertise.map((item) => (
                <li key={item} className="text-neutral-600">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
