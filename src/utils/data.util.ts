import types from "@/data/big-five-hexaco/types.json";

export type Trait =
  | "openness"
  | "conscientiousness"
  | "extraversion"
  | "agreeableness"
  | "emotionalStability";

export type Question = {
  id: number;
  text: string;
  trait: Trait;
  value?: number;
};

export const determineType = (
  questions: Question[]
): (typeof types)[number]["id"] => {
  const {
    openness,
    conscientiousness,
    extraversion,
    agreeableness,
    emotionalStability,
  } = questions.reduce(
    (acc, question) => {
      const { trait, value } = question;
      acc[trait] += value || 0;
      return acc;
    },
    {
      openness: 0,
      conscientiousness: 0,
      extraversion: 0,
      agreeableness: 0,
      emotionalStability: 0,
    }
  );

  if (openness >= 25 && extraversion >= 20) return "curious-explorer";
  if (conscientiousness >= 25 && emotionalStability >= 20)
    return "cautious-strategist";
  if (agreeableness >= 25 && emotionalStability < 15)
    return "warm-collaborator";
  if (openness >= 25 && extraversion < 15) return "independent-thinker";
  if (conscientiousness >= 25 && agreeableness >= 20)
    return "systematic-planner";
  if (agreeableness >= 25 && emotionalStability >= 20)
    return "empathic-mediator";
  if (openness >= 20 && extraversion >= 20) return "adventurous-challenger";
  if (conscientiousness >= 30) return "responsible-coordinator";
  if (openness >= 25 && conscientiousness >= 20)
    return "analytical-problem-solver";
  if (openness >= 25 && emotionalStability < 15) return "emotional-artist";
  if (agreeableness >= 25 && extraversion >= 15) return "agreeable-helper";
  if (emotionalStability >= 25 && extraversion < 15) return "quiet-observer";
  if (openness >= 20 && emotionalStability < 15) return "risk-taking-explorer";
  if (conscientiousness >= 25 && agreeableness < 15)
    return "rule-focused-manager";
  if (emotionalStability >= 25 && agreeableness >= 20)
    return "emotionally-balanced-harmonizer";
  if (openness >= 30) return "creative-innovator";

  return "curious-explorer";
};
