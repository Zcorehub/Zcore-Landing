import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl" | "hero";
  showWordmark?: boolean;
  className?: string;
  href?: string;
  onClick?: () => void;
}

const SIZES = {
  sm: { img: 28, text: "text-base" },
  md: { img: 36, text: "text-lg" },
  lg: { img: 48, text: "text-xl" },
  xl: { img: 64, text: "text-2xl" },
  hero: { img: 96, text: "text-3xl" },
};

export function Logo({
  size = "md",
  showWordmark = true,
  className,
  href,
  onClick,
}: LogoProps) {
  const { img, text } = SIZES[size];

  const content = (
    <span className={cn("inline-flex items-center gap-2.5 group", className)}>
      <span className="relative shrink-0 overflow-hidden bg-black">
        <Image
          src="/logo.jpeg"
          alt="ZCore"
          width={img}
          height={img}
          className="object-contain"
          priority={size === "hero" || size === "md"}
        />
      </span>
      {showWordmark && (
        <span
          className={cn(
            "font-black tracking-tight text-white group-hover:text-white/80 transition-colors",
            text
          )}
        >
          ZCore
        </span>
      )}
    </span>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex" onClick={onClick}>
        {content}
      </Link>
    );
  }

  return content;
}
