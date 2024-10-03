import LogoIcon from "../assets/logo.svg";
import XSocial from "../assets/social-x.svg";
import InstaSocial from "../assets/social-instagram.svg";
import YTSocial from "../assets/social-youtube.svg"
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="py-6 border-t border-white/15">
      <div className="container md:flex items-center justify-between max-md:space-y-14">
        <div className="flex items-center gap-x-3 max-md:justify-center">
          <div className="flex border h-10 w-10 rounded-lg inlinee-flex items-center justify-center border-white/15">
            <LogoIcon className="w-6 h-6" />
          </div>
          <h2 className="font-bold text-lg text-white">Candid Ai</h2>
        </div>
        <nav className="flex items-center max-md:flex-col gap-5">
          <Link href="#ai-detections" className="text-white/70 hover:text-white">Features</Link>
          <Link href="#" className="text-white/70 hover:text-white">Developers</Link>
          <Link href="#pricing" className="text-white/70 hover:text-white">Pricing</Link>
          <Link href="#" className="text-white/70 hover:text-white">Blog</Link>
          <Link href="#" className="text-white/70 hover:text-white">Developers</Link>
          <Link href="#" className="text-white/70 hover:text-white">FAQ</Link>
        </nav>
        <div className="flex items-center max-md:justify-center gap-x-5">
          <XSocial className="text-white/40 hover:text-white cursor-pointer" />
          <InstaSocial className="text-white/40 hover:text-white cursor-pointer" />
          <YTSocial className="text-white/40 hover:text-white cursor-pointer" />
        </div>
      </div>
    </footer>
  )
};
