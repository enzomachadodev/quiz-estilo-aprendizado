import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Link from "next/link";

interface ActionButtonProps {
  link: string;
  className?: string;
  onClick?: () => void;
}

export const ActionButton = ({
  link,
  className,
  onClick,
}: ActionButtonProps) => {
  return (
    <Button
      asChild
      className={cn(
        "mt-8 inline-flex h-14 animate-shimmer items-center justify-center rounded-xl border border-yellow-400 bg-[linear-gradient(110deg,#FACC15,45%,#FDE587,55%,#FACC15)] bg-[length:200%_100%] px-6 text-xl font-semibold text-black shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-yellow-50",
        className,
      )}
      onClick={() => {
        if (onClick) onClick();
      }}
    >
      <Link href={link} target="_blank" rel="noopener noreferrer">
        QUERO EVOLUIR AGORA
      </Link>
    </Button>
  );
};
