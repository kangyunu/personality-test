type QuestionSubmitProps = { isDone: boolean; handleSubmit: () => void };

const QuestionSubmit = ({ handleSubmit, isDone }: QuestionSubmitProps) => {
  return (
    <div className="w-full h-full flex flex-col gap-4 items-center justify-center px-4">
      {!isDone && (
        <div className="text-xl text-gray-500">아직 남은 질문이 있어요.</div>
      )}
      <button
        onClick={handleSubmit}
        className="h-28 w-full bg-blue-500
      text-4xl font-bold rounded-2xl text-white"
      >
        {isDone ? "결과보기" : "질문으로 가기"}
      </button>
    </div>
  );
};

export default QuestionSubmit;
