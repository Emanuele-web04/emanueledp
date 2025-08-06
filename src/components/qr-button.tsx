"use client";

import { useState } from "react";
import { IoQrCode } from "react-icons/io5";
import QRModal from "./qr-modal";
import { cn } from "@/lib/utils";

interface QRButtonProps {
  url: string;
  className?: string;
}

export default function QRButton({ url, className }: QRButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className={cn(
          "p-1.5 hover:bg-gray-100 rounded-full transition-colors text-black border-[1.5px] border-black hover:translate-x-[-2px] hover:translate-y-[-2px] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px]",
          className
        )}
        aria-label="Show QR code"
      >
        <IoQrCode className="w-4 h-4" />
      </button>

      <QRModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        url={url}
      />
    </>
  );
}
