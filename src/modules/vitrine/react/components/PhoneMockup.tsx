import { useEffect, useRef } from "react";
import { cn } from "@root/modules/shared/react/libs/cn";

export type PhoneDemo = {
  id: string;
  appName: string;
  appIcon: string;
  videoSrc?: string;
};

type PhoneMockupProps = {
  demos: PhoneDemo[];
  activeId: string;
};

export const PhoneMockup = ({ demos, activeId }: PhoneMockupProps) => {
  return (
    <div className="relative w-[280px] select-none">
      <div className="relative rounded-[2.75rem] bg-neutral-950 p-[10px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.35)]">
        <div className="absolute inset-0 rounded-[2.75rem] ring-1 ring-inset ring-white/10 pointer-events-none" />
        <div
          className="relative overflow-hidden rounded-[2.25rem] bg-neutral-50"
          style={{ aspectRatio: "9 / 19.5" }}
        >
          {demos.map((demo) => (
            <PhoneScreenSlide
              key={demo.id}
              demo={demo}
              isActive={activeId === demo.id}
            />
          ))}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[90px] h-[26px] bg-black rounded-full z-10" />
        </div>
      </div>
    </div>
  );
};

type PhoneScreenSlideProps = {
  demo: PhoneDemo;
  isActive: boolean;
};

const PhoneScreenSlide = ({ demo, isActive }: PhoneScreenSlideProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isActive) {
      video.currentTime = 0;
      void video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isActive]);

  return (
    <div
      className={cn(
        "absolute inset-0 transition-opacity duration-700 ease-out",
        isActive ? "opacity-100" : "opacity-0",
      )}
    >
      {demo.videoSrc ? (
        <video
          ref={videoRef}
          src={demo.videoSrc}
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        />
      ) : (
        <DemoUnavailable appName={demo.appName} appIcon={demo.appIcon} />
      )}
    </div>
  );
};

type DemoUnavailableProps = {
  appName: string;
  appIcon: string;
};

const DemoUnavailable = ({ appName, appIcon }: DemoUnavailableProps) => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center gap-6 px-6 text-center bg-gradient-to-br from-neutral-50 via-white to-neutral-100 overflow-hidden">
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, rgba(15,15,15,0.06), transparent 60%)",
        }}
      />
      <div className="relative">
        <div className="absolute inset-0 -m-3 rounded-[28%] bg-neutral-900/5 blur-xl animate-pulse" />
        <img
          src={appIcon}
          alt={`${appName} icon`}
          className="relative w-20 h-20 rounded-[22%] shadow-lg shadow-neutral-900/10"
        />
      </div>
      <div className="relative space-y-2">
        <p className="text-sm font-semibold text-neutral-900 tracking-tight">
          {appName}
        </p>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900/5 backdrop-blur-sm">
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-neutral-400" />
          <span className="text-[11px] tracking-wide text-neutral-500 uppercase">
            No longer available
          </span>
        </div>
      </div>
    </div>
  );
};
