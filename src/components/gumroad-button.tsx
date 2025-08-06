import { cn } from "@/lib/utils";
import { Social } from "@/types/social";
import Link from "next/link";

export default function GumroadButton({
  name,
  url,
  Icon,
  bgColor,
  accentColor,
}: Social) {
  return (
    <div
      className={cn(
        bgColor,
        accentColor,
        "font-medium",
        "px-4 py-3 sm:px-6 sm:py-3",
        "rounded-full text-black",
        "border-2 border-black",
        "hover:border-gray-800",
        "transition-all duration-200",
        "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
        "hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
        "hover:translate-x-[-2px] hover:translate-y-[-2px]",
        "active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
        "active:translate-x-[2px] active:translate-y-[2px]",
        "focus:outline-none cursor-pointer"
      )}
    >
      <Link href={url} target="_blank" className="w-full flex items-center gap-2 justify-center">
        <Icon className="size-5" />
        <span className=" font-semibold tracking-tighter font-sans sm:text-base">
          {name}
        </span>
      </Link>
    </div>
  );
}
