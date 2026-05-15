import Link from "next/link";
import { useTranslations } from "next-intl";
import { sileo } from "sileo";
import { forwardRef, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import {useGSAP} from "@gsap/react";
import { useRef } from "react";
import ThemeToggle from "./ThemeToggle";
import LangButton from "./langBtn";

const menuItems = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "blog", href: "/blog" },
  { key: "services", href: "/services" },
  { key: "contact", href: "/contact" },
];

const socialLinks =[
  {key: "Linkedin", href: "https://www.linkedin.com/in/jose-chambal/", Icon: ArrowUpRight},
  {key: "Facebook", href: "https://www.linkedin.com/in/jose-chambal/", Icon: ArrowUpRight},
  {key: "Instagram", href: "https://www.linkedin.com/in/jose-chambal/", Icon: ArrowUpRight},
  {key: "Nostr", href: "https://www.linkedin.com/in/jose-chambal/", Icon: ArrowUpRight},
  {key: "Whatsapp", href: "https://www.linkedin.com/in/jose-chambal/", Icon: ArrowUpRight},
]

const info = [
  { key: "phone", content: "845790023" },
  { key: "email", content: "example@gmail.com" },
];

type NavbarProps = {
  onClose: () => void;
  isOpen: boolean;
};

const Navbar = forwardRef<HTMLDivElement, NavbarProps>(({ onClose, isOpen }, ref) => {
  const year = new Date().getFullYear();

  const tCopy = useTranslations("copy");
  const t = useTranslations("menu");
  const tCopyright = useTranslations("copyright");

  const tl = useRef<gsap.core.Timeline | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const handleCopy = async (content: string, type: string) => {
    await navigator.clipboard.writeText(content);

    sileo.success({
      title:
        type === "phone" ? tCopy("phone") : tCopy("email"),
    });
  };

  useGSAP(() => {
    if (!navRef.current) return;
    
   
    gsap.set(navRef.current, { clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" });
    gsap.set(".menu-link-item-holder", { y: 75 });
    
    tl.current = gsap.timeline({ paused: true })
      .to(navRef.current, {
        duration: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power4.inOut",
      })
      .to(".menu-link-item-holder", {
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power4.out",
        delay: -0.75,
      }, 0);
  }, { scope: navRef });

  useEffect(() => {
    if (tl.current) {
      if (isOpen) {
        tl.current.play();
      } else {
        tl.current.reverse();
      }
    }
  }, [isOpen]);

  return (
    <nav
      ref={navRef}
      className="absolute -z-1 items-center w-screen h-screen bg-accent  pt-15 top-0 bottom-0 right-0 left-0 px-4 flex justify-around flex-col"
    >
      <ul className="flex w-full items-start px-6 md:px-70 justify-center flex-col">
        {menuItems.map((item) => (
          <li key={item.key} className="menu-link-item-holder">
            <Link
              onClick={onClose}
              href={item.href}
              className="flex items-center text-gray-700 hover:text-white hover:font-semibold transition  rounded-md px-2"
            >
              <span className="text-[60px]">{t(item.key)}</span>
            </Link>
          </li>
        ))}
      </ul>

      <footer className="flex flex-col items-center w-screen justify-between p-10">
        <div className="content flex w-full items-center justify-around">
          <div className="flex flex-col gap-1">
            {socialLinks.map((item) => {
              const Icon = item.Icon;

              return (
                <Link
                  key={item.key}
                  href={item.href}
                  target="_blank"
                  className="flex items-center hover:font-semibold hover:opacity-70 transition"
                >
                  <span className="text-md ">{item.key}</span>
                  <Icon size={16} />
                </Link>
              );
            })}
          </div>

          <div className="flex flex-col  h-full items-start justify-end">
            {info.map((item) => (
              <div
                key={item.key}
                onClick={() => handleCopy(item.content, item.key)}
                className="flex items-center gap-2 cursor-pointer hover:opacity-70 hover:font-semibold active:scale-95 transition"
              >
                <span className="text-sm">{item.content}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-start gap-2  h-full justify-end">
            <LangButton/>
            <ThemeToggle/>
          </div>
        </div>

        <div className="copyrigth flex my-4">
          <h1 className="text-foreground text-xs opacity-60">
            © {year} José Chambal. {tCopyright("copyright")}
          </h1>
        </div>
      </footer>
    </nav>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;