import questions from "@/data/big-five-hexaco/questions.json";
import { Question } from "@/utils/data.util";
import QuestionForm from "../ui/Question/Form";

const BigFiveHexacoPage = () => {
  return (
    <div>
      <QuestionForm questions={questions as Question[]} />
    </div>
  );
};

export default BigFiveHexacoPage;
