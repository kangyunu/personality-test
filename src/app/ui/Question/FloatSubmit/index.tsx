type QuestionFloatSubmitProps = { handleClick: () => void };

const QuestionFloatSubmit = ({ handleClick }: QuestionFloatSubmitProps) => {
  return (
    <button
      className="z-10 fixed left-0 bottom-0  h-28 w-full bg-blue-500 text-4xl font-bold text-white"
      onClick={handleClick}
    >
      결과보기
    </button>
  );
};

export default QuestionFloatSubmit;
