import { sendGAEvent as originalSendGAEvent } from "@next/third-parties/google";

type EventCategory =
  | "view"
  | "engagement"
  | "interaction"
  | "achievement"
  | "conversion"
  | "error";

type EventParams = {
  view: {
    page?: string;
    step?: string;
    quizCompleted?: boolean;
    result?: string;
    resultType?: string;
    planSuggested?: string;
  };
  engagement: {
    scrollDepth: number;
  };
  interaction: {
    question?: string;
    answer?: string;
    answerValue?: string;
    percentComplete?: number;
    fromQuestion?: number;
    leadEmail?: string;
  };
  achievement: {
    resultName: string;
    timeToComplete?: number; //TODO
  };
  conversion: {
    leadEmail: string;
    buttonType?: string;
  };
  error: {
    errorMessage?: string;
    state?: string;
  };
};

type EventMap = {
  view: "homePage" | "quizPage" | "formPage" | "resultPage";
  engagement: "resultPageScroll";
  interaction:
    | "startQuizClicked"
    | "questionAnswered"
    | "backButtonClicked"
    | "leadFormSubmitted"
    | "quizReset"
    | "supportButtonClicked";
  achievement: "quizCompleted";
  conversion: "leadCaptured" | "actionButtonClicked";
  error: "leadFormError" | "unexpectedError";
};

export function sendGAEvent<
  Category extends EventCategory,
  Event extends EventMap[Category],
>(
  category: Category,
  eventName: Event,
  params: EventParams[Category] = {} as EventParams[Category],
) {
  const event = `${category}_${eventName}` as const;

  console.log(`Sending GA Event: ${event}`, params);
  console.log(`Tentando enviar evento: ${event}`, {
    params,
    gtagAvailable: !!window.gtag,
  });

  originalSendGAEvent({ event, ...params });
}
