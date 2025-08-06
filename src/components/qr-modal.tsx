"use client";

import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { IoClose } from "react-icons/io5";

interface QRModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
}

export default function QRModal({ isOpen, onClose, url }: QRModalProps) {
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      document.body.style.overflow = "hidden";
      // Start animation after a small delay
      setTimeout(() => setIsAnimating(true), 10);
    } else {
      setIsAnimating(false);
      // Wait for animation to complete before unmounting
      setTimeout(() => {
        setShouldRender(false);
        document.body.style.overflow = "unset";
      }, 300);
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!mounted || !shouldRender) return null;

  return (
    <div className="fixed brightness-150 inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isAnimating ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={`relative bg-white rounded-2xl p-8 shadow-2xl border-2 border-black max-w-sm w-full mx-4 transition-all duration-300 ease-out ${
          isAnimating ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-neutral-100 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <IoClose className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="text-center">
          <h3 className="text-xl font-bold ">Scan QR Code</h3>
          <p className="text-neutral-600 mb-6">
            Scan this QR code to visit my website
          </p>

          {/* QR Code */}
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white border-2 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <QRCode
                value={url}
                size={200}
                level="H"
                fgColor="#000000"
                bgColor="#ffffff"
              />
            </div>
          </div>

          <p className="text-sm text-neutral-700">{url}</p>
        </div>
      </div>
    </div>
  );
}
