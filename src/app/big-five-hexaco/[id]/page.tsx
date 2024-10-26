import { notFound } from "next/navigation";
import types from "@/data/big-five-hexaco/types.json";

const BigFiveHexacoResultPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const type = types.find((type) => type.id === id);

  if (!type) notFound();

  return (
    <div>
      <pre>{JSON.stringify(type, null, 2)}</pre>
    </div>
  );
};

export default BigFiveHexacoResultPage;
