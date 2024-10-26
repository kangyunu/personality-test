"use client";

import { Question } from "@/utils/data.util";
import cn from "classnames";

type QuestionProps = {
  question: Question;
  handleValue: (value: number) => void;
};

const QuestionInput = ({ question, handleValue }: QuestionProps) => {
  const isActive = (value: number) => {
    if (!question.value) return false;
    return question.value >= value;
  };

  const values = [1, 2, 3, 4, 5];
  return (
    <div className="h-full w-full flex flex-col items-center justify-center gap-12">
      <div className="text-2xl font-bold break-keep text-center px-4">
        {question.text}
      </div>
      <div>
        <div className="flex gap-1 items-center">
          <div className="text-xs text-gray-400 mr-2">아니다</div>
          {values.map((value) => (
            <button
              key={value}
              onClick={() => handleValue(value)}
              className={cn(
                "h-14 w-14 border-blue-400 border-4 font-bold text-2xl rounded-full",
                {
                  "bg-transparent": !isActive(value),
                  "!bg-blue-400": isActive(value),
                }
              )}
            ></button>
          ))}
          <div className="text-xs text-gray-400 ml-2">그렇다</div>
        </div>
      </div>
    </div>
  );
};

export default QuestionInput;
