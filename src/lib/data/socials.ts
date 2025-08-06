import { Social } from "@/types/social";
import { FaWhatsapp, FaInstagram, FaLinkedinIn, FaYoutube, FaLink } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiSuitcaseSimple } from "react-icons/pi";

export const socials: Social[] = [
  {
    id: "whatsapp",
    name: "WhatsApp",
    url: "https://wa.me/393714231393?text=Ciao%20Emanuele!",
    Icon: FaWhatsapp,
    bgColor: "bg-[#7ae582]", // pastel verde-whatsapp
    accentColor: "text-black"
  },
  {
    id: "twitter",
    name: "Twitter",
    url: "https://x.com/emanueledpt",
    Icon: FaXTwitter,
    bgColor: "bg-gray-800", // pastel azzurro-twitter
    accentColor: "text-white"
  },
  {
    id: "instagram",
    name: "Instagram",
    url: "https://www.instagram.com/emanueledipietro_?igsh=…",
    Icon: FaInstagram,
    bgColor: "bg-gradient-to-r from-[#7760D4] via-[#FC6C85] to-[#FDC71F]", // rosa-viola-giallo pastel
    accentColor: "text-white"
  },
  {
    id: "youtube",
    name: "Youtube",
    url: "https://youtube.com/@emanueledpt?si=…",
    Icon: FaYoutube,
    bgColor: "bg-[#F0585D]", // pastel rosso
    accentColor: "text-white"
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/emanuele-di-pietro-12b464284?",
    Icon: FaLinkedinIn,
    bgColor: "bg-[#0B94E3]", // pastel blu-linkedin
    accentColor: "text-white"
  },
  {
    id: "portfolio",
    name: "Portfolio",
    url: "https://portfolio.emanueledp.site",
    Icon: PiSuitcaseSimple,
    bgColor: "bg-neutral-100", // pastel blu-linkedin
    accentColor: "text-black"
  }
];
