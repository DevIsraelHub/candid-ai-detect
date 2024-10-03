import Link from "next/link";
import ArrowWIcon from "../assets/arrow-w.svg";
import CursorImage from "../assets/cursor.png"
import MessageImage from "../assets/message.png"
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-clip text-white bg-[linear-gradient(to_bottom,#000,#200d42_34%,#4f21a1_65%,#a46edb_84%)] flex items-center justify-center">
      <div className="absolute h-[375px] w-[750px] md:w-[1536px] md:h-[768px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#b48cde] bg-[radial-gradient(closest-side,#000_84%,#9560eb)] top-[calc(100%-96px)] md:top-[calc(100%-120px)] lg:top-[calc(100%-200px)]"></div>
      <div className="relative">
        <div className="flex items-center justify-center">
          <Link href="https://docs.google.com/document/d/1OCyvlnxRMF1prDGawhIv5PiCr13EXoFOFLLo2EV14Iw/edit?pli=1" target="_blank" className="inline-flex gap-[10px] border py-1 px-2 rounded-lg border-white/30 group">
            <span className="max-md:text-sm bg-[linear-gradient(to_right,#f87aff,#fb93d0,#ffdd99,#c3f0b2,#2fd8fe)] text-transparent bg-clip-text [-webkit-background-clip:text]">
              Welcome to Candid Ai web 3.0
            </span>
            <span className="inline-flex items-center gap-1">
              Read More
              <ArrowWIcon className="transition group-hover:translate-x-[6px]" />
            </span>
          </Link>
        </div>
        <div className="flex justify-center mt-8">
          <div className="inline-flex relative">
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-center inline-flex max-w-[700px]">
              AI Detection Simplified
            </h1>
            <Image
              src={CursorImage}
              height={200}
              width={200}
              alt="Cursor Image"
              className="absolute top-[108px] max-lg:size-[130px] right-[630px] xl:top-[130px] max-md:hidden"
            />
            <Image
              src={MessageImage}
              height={200}
              width={200}
              alt="Cursor Image"
              className="absolute max-lg:size-[130px] left-[660px] top-[80px] max-md:hidden"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-center md:text-xl mt-8 max-w-xl">
            Detect AI-generated text, images, videos, and audio effortlessly on a single platform, ensuring content authenticity and trust.
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <Link href="/text-detection">
            <button className="bg-white text-black py-3 px-5 rounded-lg font-medium">
              Get Started
            </button>
          </Link>
        </div>
      </div>

    </div>
  );
};
