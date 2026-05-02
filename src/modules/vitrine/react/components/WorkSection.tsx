import { useEffect, useRef, useState } from "react";
import { cn } from "@root/modules/shared/react/libs/cn";
import ioriFlashcardsIcon from "@root/assets/images/iori-flashcards-icon.png";
import findMyselfIcon from "@root/assets/images/findmyself-icon.png";
import missionDuJourIcon from "@root/assets/images/mission-du-jour-icon.png";
import annaSignLanguageIcon from "@root/assets/images/anna-sign-language-icon.png";
import bibleGoIcon from "@root/assets/images/biblego-icon.png";
import bibleGoDemo from "@root/assets/videos/biblego-demo.mp4";
import annaDemo from "@root/assets/videos/anna-demo.mp4";
import ioriFlashcardsDemo from "@root/assets/videos/iori-flashcards-demo.mp4";
import { PhoneMockup, PhoneDemo } from "./PhoneMockup";

type App = {
  id: string;
  name: string;
  description: string;
  stats?: string;
  platforms: string[];
  icon: string;
  releaseDate: Date;
  links?: { label: string; url: string }[];
  comingSoon?: string;
  demoVideo?: string;
};

const isJustLaunched = (date: Date): boolean => {
  const diffDays = (Date.now() - date.getTime()) / (1000 * 60 * 60 * 24);
  return diffDays < 30;
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
  return years === 1 ? `over 1 year ago` : `over ${years} years ago`;
};

const apps: App[] = [
  {
    id: "biblego",
    name: "BibleGo",
    description:
      "An interactive Bible learning app inspired by modern education tools. Structured lessons and quizzes guide users step by step through the Old and New Testament.",
    platforms: ["iOS"],
    icon: bibleGoIcon,
    releaseDate: new Date(2026, 4, 2),
    demoVideo: bibleGoDemo,
    links: [
      {
        label: "App Store",
        url: "https://apps.apple.com/fr/app/biblego-%C3%A9tude-de-la-bible/id6764254692",
      },
    ],
    comingSoon: "Soon on Android",
  },
  {
    id: "anna",
    name: "Anna Sign Language",
    description:
      "A Duolingo-like educational app for learning sign language (ASL & LSF) with Anna, a friendly mascot guiding users through interactive lessons. Designed to make sign language learning accessible and engaging for everyone.",
    stats: "200,000+ downloads",
    platforms: ["iOS", "Android"],
    icon: annaSignLanguageIcon,
    releaseDate: new Date(2026, 1, 18),
    demoVideo: annaDemo,
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
    id: "iori-flashcards",
    name: "Iori Flashcards",
    description:
      "An intelligent flashcard language learning app with 80+ languages and dialects available. Approved by teachers, it helps learners memorize more effectively using proven educational methods.",
    stats: "1,000,000+ downloads",
    platforms: ["iOS", "Android"],
    icon: ioriFlashcardsIcon,
    releaseDate: new Date(2025, 8, 7),
    demoVideo: ioriFlashcardsDemo,
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
    id: "find-myself",
    name: "Find Myself",
    description:
      "A facial recognition-based app that helps users find where their photos appear publicly on the internet. Built with a focus on transparency and user control.",
    stats: "800,000+ downloads",
    platforms: ["formerly iOS", "formerly Android"],
    icon: findMyselfIcon,
    releaseDate: new Date(2024, 9, 23),
  },
  {
    id: "todays-mission",
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

const phoneDemos: PhoneDemo[] = apps.map((app) => ({
  id: app.id,
  appName: app.name,
  appIcon: app.icon,
  videoSrc: app.demoVideo,
}));

export const WorkSection = () => {
  const [activeId, setActiveId] = useState<string>(apps[0].id);
  const desktopGridRef = useRef<HTMLDivElement>(null);
  const progress = useScrollProgress(desktopGridRef);

  return (
    <section id="work" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-20">
          Work
        </h2>

        {/* Mobile: stacked entries */}
        <div className="lg:hidden space-y-32">
          {apps.map((app, index) => (
            <MobileAppEntry key={app.id} app={app} index={index} />
          ))}
        </div>

        {/* Desktop: pinned scroll cross-fade */}
        <div
          ref={desktopGridRef}
          className="hidden lg:grid lg:grid-cols-2 lg:gap-16"
        >
          <div className="relative">
            {apps.map((app) => (
              <ScrollTrigger
                key={app.id}
                appId={app.id}
                onActivate={setActiveId}
              />
            ))}
            <div className="absolute inset-0 pointer-events-none">
              <div className="sticky top-0 h-screen flex items-center">
                <div className="relative w-full grid grid-cols-1 grid-rows-1 pointer-events-auto">
                  {apps.map((app, index) => (
                    <DesktopAppCard
                      key={app.id}
                      app={app}
                      index={index}
                      isActive={app.id === activeId}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <aside>
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center gap-8">
              <PhoneMockup demos={phoneDemos} activeId={activeId} />
              <div className="w-[280px] h-[3px] bg-neutral-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-neutral-900 rounded-full origin-left transition-transform duration-150 ease-out"
                  style={{ transform: `scaleX(${progress})` }}
                />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

const useScrollProgress = (ref: React.RefObject<HTMLElement | null>) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calc = () => {
      const node = ref.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      if (total <= 0) {
        setProgress(0);
        return;
      }
      const p = -rect.top / total;
      setProgress(Math.max(0, Math.min(1, p)));
    };
    calc();
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(calc);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ref]);

  return progress;
};

type ScrollTriggerProps = {
  appId: string;
  onActivate: (id: string) => void;
};

const ScrollTrigger = ({ appId, onActivate }: ScrollTriggerProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) onActivate(appId);
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [appId, onActivate]);

  return <div ref={ref} className="h-screen" aria-hidden="true" />;
};

type AppContentBodyProps = {
  app: App;
  index: number;
  showIcon?: boolean;
};

const AppContentBody = ({ app, index, showIcon }: AppContentBodyProps) => (
  <div className="flex items-start gap-8">
    <span className="text-sm text-neutral-300 font-mono pt-1">
      {String(index + 1).padStart(2, "0")}
    </span>
    <div className="flex-1">
      <div className="flex items-center gap-4">
        {showIcon && (
          <img
            src={app.icon}
            alt={`${app.name} icon`}
            className="w-14 h-14 rounded-xl"
          />
        )}
        <h3 className="text-2xl md:text-3xl font-semibold">{app.name}</h3>
      </div>
      <p className="mt-4 text-neutral-500 leading-relaxed max-w-xl">
        {app.description}
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
        {isJustLaunched(app.releaseDate) ? (
          <span className="inline-flex items-center gap-2 text-neutral-900">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            Just launched
          </span>
        ) : (
          <>
            {app.stats && (
              <span className="text-neutral-900">{app.stats}</span>
            )}
            <span className="text-neutral-300">
              {app.platforms.join(" / ")}
            </span>
            <span className="text-neutral-400">
              Launched {getRelativeTime(app.releaseDate)}
            </span>
          </>
        )}
      </div>
      {((app.links && app.links.length > 0) || app.comingSoon) && (
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {app.links?.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-neutral-900 transition-colors border-b border-transparent hover:border-neutral-900"
            >
              {link.label}
            </a>
          ))}
          {app.comingSoon && (
            <span className="text-neutral-300">{app.comingSoon}</span>
          )}
        </div>
      )}
    </div>
  </div>
);

type DesktopAppCardProps = {
  app: App;
  index: number;
  isActive: boolean;
};

const DesktopAppCard = ({ app, index, isActive }: DesktopAppCardProps) => (
  <div
    className={cn(
      "row-start-1 col-start-1 transition-all duration-700 ease-out",
      isActive
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-3 pointer-events-none",
    )}
    aria-hidden={!isActive}
  >
    <AppContentBody app={app} index={index} showIcon />
  </div>
);

type MobileAppEntryProps = {
  app: App;
  index: number;
};

const MobileAppEntry = ({ app, index }: MobileAppEntryProps) => (
  <article>
    <AppContentBody app={app} index={index} showIcon />
    <div className="mt-8 flex justify-center">
      <PhoneMockup
        demos={[
          {
            id: app.id,
            appName: app.name,
            appIcon: app.icon,
            videoSrc: app.demoVideo,
          },
        ]}
        activeId={app.id}
      />
    </div>
  </article>
);
