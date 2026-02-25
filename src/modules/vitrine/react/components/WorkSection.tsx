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
  releaseDate: Date;
  links?: { label: string; url: string }[];
};

const getRelativeTime = (date: Date): string => {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays < 1) return "today";
  if (diffDays === 1) return "yesterday";
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    return weeks === 1 ? "1 week ago" : `${weeks} weeks ago`;
  }
  if (diffDays < 365) {
    const months = Math.floor(diffDays / 30);
    return months === 1 ? "1 month ago" : `${months} months ago`;
  }
  const years = Math.floor(diffDays / 365);
  const remainingMonths = Math.floor((diffDays % 365) / 30);
  if (remainingMonths === 0) {
    return years === 1 ? "1 year ago" : `${years} years ago`;
  }
  return years === 1
    ? `over 1 year ago`
    : `over ${years} years ago`;
};

const apps: App[] = [
  {
    name: "Anna Sign Language",
    description:
      "A Duolingo-like educational app for learning sign language (ASL & LSF) with Anna, a friendly mascot guiding users through interactive lessons. Designed to make sign language learning accessible and engaging for everyone.",
    stats: "20,000+ downloads",
    platforms: ["iOS", "Android"],
    icon: annaSignLanguageIcon,
    releaseDate: new Date(2026, 1, 18),
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
    releaseDate: new Date(2025, 8, 7),
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
    platforms: ["formerly iOS", "formerly Android"],
    icon: findMyselfIcon,
    releaseDate: new Date(2024, 9, 23),
  },
  {
    name: "Today's Mission",
    description:
      "A daily challenge-based mobile app where users compete by posting short videos on TikTok. Each day, users receive a challenge; the participant whose video gets the most views wins a cash reward.",
    stats: "400,000+ downloads",
    platforms: ["iOS", "Android"],
    icon: missionDuJourIcon,
    releaseDate: new Date(2023, 6, 16),
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
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-20">
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
                    <h3 className="text-2xl md:text-3xl font-semibold">
                      {app.name}
                    </h3>
                  </div>
                  <p className="mt-4 text-neutral-500 leading-relaxed max-w-xl">
                    {app.description}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
                    <span className="text-neutral-900">{app.stats}</span>
                    <span className="text-neutral-300">
                      {app.platforms.join(" / ")}
                    </span>
                    <span className="text-neutral-400">
                      Launched {getRelativeTime(app.releaseDate)}
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
