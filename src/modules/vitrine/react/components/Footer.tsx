import { Logo } from "@root/modules/shared/react/logo/Logo";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-100">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center gap-3">
            <Logo size={24} />
            <div>
              <p className="text-lg font-semibold leading-none">Liori Studio</p>
              <p className="text-sm text-neutral-400 mt-1">
                Trade name of Mission du Jour SAS
              </p>
            </div>
          </div>
          <p className="text-sm text-neutral-400">{currentYear}</p>
        </div>
      </div>
    </footer>
  );
};
