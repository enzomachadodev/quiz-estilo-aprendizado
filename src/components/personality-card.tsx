import { Personality } from "@/lib/types";
import Image from "next/image";

interface PersonalityCardProps {
  personality: Personality;
}

export const PersonalityCard = ({ personality }: PersonalityCardProps) => {
  return (
    <div className="col-span-1 flex flex-col gap-6 rounded-3xl border border-secondary bg-primary p-6 shadow-lg">
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl border-[3px] border-secondary">
        <Image
          alt={personality.name}
          src={personality.image}
          fill
          className="object-cover object-top"
        />
      </div>
      <div className="space-y-3">
        <h3 className="text-3xl font-semibold text-background">
          {personality.name}
        </h3>
        <p className="text-lg font-normal text-background">
          {personality.description}
        </p>
      </div>
    </div>
  );
};
