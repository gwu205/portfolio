"use client";

import { X } from "lucide-react";
import Image, { ImageProps } from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export function LightboxImage({ className, ...props }: ImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Prevent scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const { width, height, ...restProps } = props;

  return (
    <>
      <button 
        type="button"
        className={`relative block cursor-zoom-in transition-transform hover:scale-[1.01] ${className || ""}`}
        onClick={() => setIsOpen(true)}
        aria-label={`View larger ${props.alt || 'image'}`}
      >
        <Image width={width} height={height} {...restProps} className="w-full h-auto" />
      </button>

      {isOpen && mounted && createPortal(
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <Image 
            {...props} 
            className="w-auto h-auto max-w-full max-h-[90vh] object-contain rounded-md animate-in zoom-in-95 duration-200 shadow-2xl relative z-10" 
            sizes="100vw"
            quality={100}
            onClick={(e) => e.stopPropagation()}
          />
          <button 
            type="button"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-3 text-white bg-black/50 hover:bg-black/80 backdrop-blur-md rounded-full transition-all z-50 border border-white/10 shadow-lg"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
            aria-label="Close lightbox"
          >
            <X size={24} strokeWidth={2.5} />
          </button>
        </div>,
        document.body
      )}
    </>
  );
}
