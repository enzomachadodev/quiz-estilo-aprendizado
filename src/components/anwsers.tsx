import { Question, ResultKey } from "@/lib/types";

interface AnswersProps {
  currentQuestion: Question;
  onClick: (value: ResultKey) => void;
}

export const Answers = ({ currentQuestion, onClick }: AnswersProps) => {
  return (
    <div className="flex flex-col gap-10">
      <h2 className="text-center text-2xl font-semibold text-background sm:text-4xl">
        {currentQuestion.question}
      </h2>
      <div className="mx-auto flex w-full flex-col gap-6">
        {currentQuestion.answers.map((a, index) => (
          <div
            key={index}
            onClick={() => onClick(a.value)}
            className="w-full cursor-pointer rounded-xl border bg-background px-5 py-3 shadow-md duration-200 active:bg-secondary sm:py-4 sm:hover:bg-secondary"
          >
            <p className="text-center text-lg font-medium sm:text-xl">
              {a.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
