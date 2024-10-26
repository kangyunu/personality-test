type QuestionPaginationProps = {
  active: number;
  total: number;
};

const QuestionPagination = ({ active, total }: QuestionPaginationProps) => {
  return <div className="text-sm text-gray-500">{`${active} / ${total}`}</div>;
};
export default QuestionPagination;
