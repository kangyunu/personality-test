import { notFound } from "next/navigation";
import types from "@/data/big-five-hexaco/types.json";

const getType = (id: string) => types.find((type) => type.id === id);

export const generateStaticParams = () => types.map(({ id }) => ({ id }));
export const generateMetadata = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const type = getType(id);
  if (!type) return undefined;

  return {
    title: type.name,
    description: type.description,
  };
};

const BigFiveHexacoResultPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const type = getType(id);

  if (!type) return notFound();

  return (
    <div className="max-w-2xl m-auto min-h-dvh">
      <div
        className="h-96 w-full bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(/images/${id}.jpg)` }}
      />

      <div className="text-2xl text-bold mt-4 pl-4">{type.name}</div>
      <div className="text-xl text-gray-600 pl-4">({type.english})</div>

      <div className="flex gap-2 justify-start pl-4 mt-2">
        {type.characters.map((character) => (
          <div
            key={character}
            className="rounded-lg border border-gray-400 px-2 font-semibold text-sm bg-gray-400 text-white"
          >
            {character}
          </div>
        ))}
      </div>

      <div className="mt-4 pl-4">{type.description}</div>
    </div>
  );
};

export default BigFiveHexacoResultPage;
