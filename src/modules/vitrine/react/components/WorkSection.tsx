import ioriFlashcardsIcon from "@root/assets/images/iori-flashcards-icon.png";
import findMyselfIcon from "@root/assets/images/findmyself-icon.png";
import missionDuJourIcon from "@root/assets/images/mission-du-jour-icon.png";
import annaSignLanguageIcon from "@root/assets/images/anna-sign-language-icon.png";

type App = {
  name: string;
  description: string;
  stats: string;
  platforms: string[];
  icon: string;
  links?: { label: string; url: string }[];
};

const apps: App[] = [
  {
    name: "Anna Sign Language",
    description:
      "A Duolingo-like educational app for learning sign language with Anna, a friendly mascot guiding users through interactive lessons. Designed to make sign language learning accessible and engaging for everyone.",
    stats: "20,000+ downloads",
    platforms: ["iOS", "Android"],
    icon: annaSignLanguageIcon,
    links: [
      {
        label: "App Store",
        url: "https://apps.apple.com/fr/app/anna-langue-des-signes/id6758141347",
      },
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.annasignlanguage.app",
      },
    ],
  },
  {
    name: "Iori Flashcards",
    description:
      "An intelligent flashcard language learning app with 80+ languages and dialects available. Approved by teachers, it helps learners memorize more effectively using proven educational methods.",
    stats: "700,000+ downloads",
    platforms: ["iOS", "Android"],
    icon: ioriFlashcardsIcon,
    links: [
      {
        label: "App Store",
        url: "https://apps.apple.com/fr/app/iori-flashcards-langues/id6751930245",
      },
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.ioriflashcards.app&hl=en",
      },
    ],
  },
  {
    name: "Find Myself",
    description:
      "A facial recognition-based app that helps users find where their photos appear publicly on the internet. Built with a focus on transparency and user control.",
    stats: "800,000+ downloads",
    platforms: ["Android", "formerly iOS"],
    icon: findMyselfIcon,
    links: [
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.findmyself.app&hl=en",
      },
    ],
  },
  {
    name: "Mission du Jour",
    description:
      "A daily challenge-based mobile app where users compete by posting short videos on TikTok. Each day, users receive a challenge; the participant whose video gets the most views wins a cash reward.",
    stats: "400,000+ downloads",
    platforms: ["iOS", "Android"],
    icon: missionDuJourIcon,
    links: [
      {
        label: "App Store",
        url: "https://apps.apple.com/fr/app/mission-du-jour/id6451213357",
      },
    ],
  },
];

export const WorkSection = () => {
  return (
    <section id="work" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-20">
          Work
        </h2>
        <div className="space-y-24">
          {apps.map((app, index) => (
            <article key={app.name} className="group">
              <div className="flex items-start justify-between gap-8">
                <span className="text-sm text-neutral-300 font-mono">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <div className="flex items-center gap-4">
                    <img
                      src={app.icon}
                      alt={`${app.name} icon`}
                      className="w-14 h-14 rounded-xl"
                    />
                    <h3 className="font-serif text-2xl md:text-3xl">
                      {app.name}
                    </h3>
                  </div>
                  <p className="mt-4 text-neutral-500 leading-relaxed max-w-xl">
                    {app.description}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-6 text-sm">
                    <span className="text-neutral-900">{app.stats}</span>
                    <span className="text-neutral-300">
                      {app.platforms.join(" / ")}
                    </span>
                  </div>
                  {app.links && app.links.length > 0 && (
                    <div className="mt-4 flex gap-6">
                      {app.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-neutral-400 hover:text-neutral-900 transition-colors border-b border-transparent hover:border-neutral-900"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
