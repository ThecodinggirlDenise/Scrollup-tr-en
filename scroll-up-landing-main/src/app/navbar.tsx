import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, MouseEvent } from "react";
import { useRouter, usePathname } from "next/navigation";
import { I18nextProvider } from "react-i18next";
import i18n from "./lib/i18n"; // Ensure this path points to your i18n configuration file
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";

export default function Navbar() {
  const [drawer, setDrawer] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { replace, push } = useRouter();
  const pathname = usePathname();
  const [scrollPosition, setScrollPosition] = useState(0);

  const { t } = useTranslation();

  const sections = [
    { id: "#modern-view", label: t("overview") },
    { id: "#scrollupapp", label: t("app") },
    { id: "#features", label: t("features") },
    { id: "#usage", label: t("usage") },
    { id: "#technical", label: t("technical") },
    { id: "#contact", label: t("contact") },
  ];

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);

    sections.forEach((section) => {
      const element = document.querySelector(section.id);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          setActiveSection(section.id);
        }
      }
    });
  };

  useEffect(() => {
    setDrawer(false);
  }, [pathname]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (pathname === "/") {
      const element = document.querySelector(href);
      if (element) {
        const topPos = element.getBoundingClientRect().top + window.scrollY - 200;
        window.scrollTo({
          top: topPos,
          behavior: "smooth",
        });
      }
    } else {
      push(`/${href}`);
    }
    setDrawer(false);
  };

  return (
    <I18nextProvider i18n={i18n}>
      <div className="z-40 fixed top-0 left-0 w-full py-4 px-8 md:px-48 bg-[#3bb24a] transition-all duration-300">
        <div className="flex justify-between items-center">
          <Image src="/logo.png" alt="logo" width={150} height={50} />
          {/* Desktop Menu */}
          <div className="hidden md:flex justify-end items-center gap-6 w-full">
            {sections.map(({ id, label }) => (
              <Link
                key={id}
                href={id}
                onClick={(e) => handleNavClick(e, id)}
                className={twMerge(
                  "font-medium text-white transition-all duration-300 whitespace-nowrap",
                  activeSection === id && "font-bold"
                )}
              >
                {label}
              </Link>
            ))}
            <button
              onClick={() => i18n.changeLanguage("en")}
              className="flex items-center gap-2"
            >
              <Image src="/UK.png" alt="English" width={20} height={15} />
              EN
            </button>
            <button
              onClick={() => i18n.changeLanguage("tr")}
              className="flex items-center gap-2"
            >
              <Image src="/TURK.png" alt="Turkish" width={20} height={15} />
              TR
            </button>
          </div>

          {/* Hamburger Menu */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setDrawer(!drawer)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Drawer */}
        {drawer && (
          <div className="fixed top-0 left-0 w-full h-[30rem] bg-[#3bb24a] z-50 flex flex-col items-center justify-center gap-8   md:hidden">
            {sections.map(({ id, label }) => (
              <Link
                key={id}
                href={id}
                onClick={(e) => handleNavClick(e, id)}
                className={twMerge(
                  "font-medium text-white text-lg transition-all duration-300",
                  activeSection === id && "font-bold"
                )}
              >
                {label}
              </Link>
            ))}
            <button
              onClick={() => i18n.changeLanguage("en")}
              className="flex items-center gap-2 text-white text-lg"
            >
              <Image src="/UK.png" alt="English" width={20} height={15} />
              EN
            </button>
            <button
              onClick={() => i18n.changeLanguage("tr")}
              className="flex items-center gap-2 text-white text-lg"
            >
              <Image src="/TURK.png" alt="Turkish" width={20} height={15} />
              TR
            </button>
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={() => setDrawer(false)}
            >
              ✕
            </button>
          </div>
        )}
      </div>
    </I18nextProvider>
  );
}
