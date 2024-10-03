import LogoIcon from "../assets/logo.svg";
import MenuIcon from "../assets/icon-menu.svg"
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


export const Header = () => {
  return (
    <header className="border-b border border-white/15 md:border-none max-md:py-4 max-md:fixed top-0 z-50 max-md:w-full max-md:bg-black/20 max-md:backdrop-blur-[10px]">
      <div className="md:container px-6 max-h-[70px] md:fixed inset-0 z-50 top-3">
        <div className="md:bg-black/20 md:backdrop-blur-[10px] top-4 flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-[700px] mx-auto">
          <Link href="/" className="flex items-center gap-x-3 max-md:justify-center">
            <div className="flex border h-10 w-10 rounded-lg inlinee-flex items-center justify-center border-white/15">
              <LogoIcon className="w-8 h-8" />
            </div>
            <h2 className="font-bold text-white">Candid Ai</h2>
          </Link>
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              <Link href="#ai-detections" className=" text-white/70 hover:text-white transition">Features</Link>
              <Link href="#pricing" className=" text-white/70 hover:text-white transition">Pricing</Link>
              <Link href="https://docs.google.com/document/d/1OCyvlnxRMF1prDGawhIv5PiCr13EXoFOFLLo2EV14Iw/edit?pli=1" target="_blank" className=" text-white/70 hover:text-white transition">Blog</Link>
              <Link href="#" className=" text-white/70 hover:text-white transition">Developers</Link>
            </nav>
          </div>
          <div className="flex gap-4 items-center">
            <Link href="#cta">
              <button className="relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]">
                <div className="aboslute inset-0 rounded-lg">
                  <div className="border border-white/20 absolute inset-0 rounded-lg [mask-image:linear-geadient(to_bottom,black,transparent)]"></div>
                  <div className="rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
                  <div className="inset-0 absolute shadow-[0_0_10px_rgb(140,69,255,.7)] rounded-lg"></div>
                </div>
                <span>
                  Join waitlist
                </span>
              </button>
            </Link>
            <Sheet>
              <SheetTrigger className="md:hidden">
                <MenuIcon className="md:hidden" />
              </SheetTrigger>
              <SheetContent className="bg-black border-none">
                <Link href="/" className="flex items-center gap-x-3 max-md:justify-center">
                  <div className="flex border h-10 w-10 rounded-lg inlinee-flex items-center justify-center border-white/15">
                    <LogoIcon className="w-8 h-8" />
                  </div>
                  <h2 className="font-bold text-white">Candid Ai</h2>
                </Link>
                <div className="mt-24">
                  <nav className="space-y-12 flex flex-col text-2xl">
                    <Link href="#ai-detections" className=" text-white/70 hover:text-white transition">Features</Link>
                    <Link href="#pricing" className=" text-white/70 hover:text-white transition">Pricing</Link>
                    <Link href="https://docs.google.com/document/d/1OCyvlnxRMF1prDGawhIv5PiCr13EXoFOFLLo2EV14Iw/edit?pli=1" target="_blank" className=" text-white/70 hover:text-white transition">Blog</Link>
                    <Link href="#" className=" text-white/70 hover:text-white transition">Developers</Link>
                  </nav>
                </div>
                <div className="flex gap-4 items-center">
                  <Link href="#cta" className="w-full mt-24">
                    <button className="relative py-2 px-3 w-full h-12 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]">
                      <div className="aboslute inset-0 rounded-lg">
                        <div className="border border-white/20 absolute inset-0 rounded-lg [mask-image:linear-geadient(to_bottom,black,transparent)]"></div>
                        <div className="rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
                        <div className="inset-0 absolute shadow-[0_0_10px_rgb(140,69,255,.7)] rounded-lg"></div>
                      </div>
                      <span>
                        Join waitlist
                      </span>
                    </button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>

          </div>
        </div>
      </div>
    </header>
  )
};
