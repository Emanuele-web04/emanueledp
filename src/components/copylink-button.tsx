"use client";

import { useState } from "react";
import { IoCheckmark, IoLink } from "react-icons/io5";
import { cn } from "@/lib/utils";

interface CopyLinkButtonProps {
  url: string;
  className?: string;
}

export default function CopyLinkButton({ url, className }: CopyLinkButtonProps) {
    const [isCopied, setIsCopied] = useState("");

    const handleCopy = () => {
        navigator.clipboard.writeText(url);
        setIsCopied(url);
        setTimeout(() => setIsCopied(""), 2000);
    }

  return (
    <>
      <button
        onClick={handleCopy}
        className={cn(
          "p-1.5 hover:bg-gray-100 text-black rounded-full transition-colors border-[1.5px] border-black hover:translate-x-[-2px] hover:translate-y-[-2px] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px]",
          className
        )}
        aria-label="Show QR code"
      >
        {isCopied ? <IoCheckmark className="w-4 h-4" /> : <IoLink className="w-4 h-4" />}
      </button>

    </>
  );
}
