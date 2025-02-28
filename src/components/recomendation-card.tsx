import { Recomendation } from "@/lib/types";

interface RecomendationCardProps {
  recomendation: Recomendation;
}

export const RecomendationCard = ({
  recomendation,
}: RecomendationCardProps) => {
  return (
    <div className="col-span-1 flex w-full flex-col gap-6 rounded-3xl border-[3px] border-primary p-6 text-background shadow-lg">
      <div className="mx-auto my-8 aspect-square w-fit rounded-full bg-secondary p-6 text-primary">
        <recomendation.icon size={60} />
      </div>
      <h3 className="text-3xl font-semibold text-primary text-center">{recomendation.title}</h3>
      <p className="text-lg text-black text-justify">{recomendation.description}</p>
    </div>
  );
};
