"use client";

import { determineType, Question } from "@/utils/data.util";
import { useMemo, useState } from "react";
import _Swiper from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import QuestionInput from "../Input";
import QuestionSubmit from "../Submit";
import QuestionPagination from "../Navigation";
import QuestionFloatSubmit from "../FloatSubmit";
import { useRouter } from "next/navigation";

type QuestionFormProps = { questions: Question[] };

const QuestionForm = (props: QuestionFormProps) => {
  const [swiper, setSwiper] = useState<_Swiper | null>(null);
  const [questions, setQuestions] = useState(props.questions);
  const [activeIndex, setActiveIndex] = useState(0);
  const { push } = useRouter();

  const handleChangeValue = (questionIndex: number, value: number) => {
    setQuestions(
      questions.with(questionIndex, {
        ...questions[questionIndex],
        value,
      })
    );
    swiper?.slideNext();
  };

  const isDone = useMemo(
    () => questions.every((question) => question.value),
    [questions]
  );

  const isFocusQuestion = useMemo(
    () => activeIndex <= questions.length - 1,
    [activeIndex, questions.length]
  );

  const handleSubmit = () => {
    if (!isDone) {
      const index = questions.findIndex((question) => !question.value);
      return swiper?.slideTo(index);
    }

    const type = determineType(questions);
    push(`/big-five-hexaco/${type}`);
  };

  return (
    <div className="relative h-dvh w-full">
      <Swiper
        className="h-dvh"
        direction="vertical"
        onSwiper={setSwiper}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {questions.map((question, questionIndex) => (
          <SwiperSlide key={question.id}>
            <QuestionInput
              question={question}
              handleValue={(value) => handleChangeValue(questionIndex, value)}
            />
          </SwiperSlide>
        ))}

        <SwiperSlide>
          <QuestionSubmit handleSubmit={handleSubmit} isDone={isDone} />
        </SwiperSlide>
      </Swiper>

      {isFocusQuestion && (
        <div className="absolute top-1 right-2 z-10">
          <QuestionPagination
            active={activeIndex + 1}
            total={questions.length}
          />
        </div>
      )}

      {isDone && isFocusQuestion && (
        <QuestionFloatSubmit handleClick={handleSubmit} />
      )}
    </div>
  );
};

export default QuestionForm;
