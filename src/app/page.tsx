import { socials } from "@/lib/data/socials";
import GumroadButton from "@/components/gumroad-button";
import QRButton from "@/components/qr-button";
import React from "react";
import Image from "next/image";
import CopyLinkButton from "@/components/copylink-button";

const Home = () => {
  return (
    <div
      className="min-h-screen font-sans bg-white border-x sm:border-x-neutral-200 border-0 relative tracking-tighter w-screen max-w-xl mx-auto"
      style={{
        backgroundImage:
          "radial-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), radial-gradient(rgba(0,0,0,0.04) 1px, transparent 1px)",
        backgroundSize: "18px 18px",
        backgroundPosition: "0 0, 9px 9px",
      }}
    >
      <Image
        src="/dp-banner-min.png"
        alt="Emanuele Di Pietro"
        width={500}
        height={200}
        className="w-full sm:px-8 px-0 rounded-none bg-black"
      />
      <div className="flex flex-col relative -top-20 items-center justify-center p-8">
        <QRButton url="https://emanueledp.site" className="absolute top-20 right-0 m-4" />
        <CopyLinkButton url="https://emanueledp.site" className="absolute top-20 left-0 m-4" />
        <Image
          src="/pfp-min.png"
          alt="Emanuele Di Pietro"
          width={100}
          height={100}
          className="rounded-full size-24 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
        />
        <div className="flex items-center gap-3 mt-4">
          <h1 className="text-3xl font-bold text-black">Emanuele Di Pietro</h1>
        </div>
        <p className="text-sm text-neutral-800">
          Enhancing your online presence.
        </p>
        <div className="flex mt-8 flex-col w-full gap-4">
          {socials.map((social) => (
            <GumroadButton key={social.id} {...social} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
