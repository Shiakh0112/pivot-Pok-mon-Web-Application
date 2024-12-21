import Link from "next/link";
import Image from "next/image";

interface PokemonCardProps {
  id: number;
  name: string;
  imageUrl: string;
}

export const PokemonCard = ({ id, name, imageUrl }: PokemonCardProps) => {
  return (
    <Link
      href={`/${id}`}
      className="group relative border-2 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 p-5 bg-gradient-to-b from-gray-50 to-white hover:from-indigo-100 hover:to-indigo-50 border-gray-200 hover:border-indigo-400"
    >
      <div className="flex flex-col items-center">
        <div className="relative">
          <Image
            src={imageUrl}
            alt={name}
            width={200}
            height={200}
            className="w-36 h-36 object-cover rounded-full border-4 border-gray-200 group-hover:border-indigo-400 transition-all"
          />
          <div className="absolute inset-0 rounded-full bg-indigo-200 opacity-0 group-hover:opacity-25 transition-all"></div>
        </div>
        <h2 className="text-center font-extrabold mt-4 text-gray-800 text-lg capitalize group-hover:text-indigo-500 transition-colors">
          {name}
        </h2>
      </div>
      {/* Add a subtle glow effect */}
      <div className="absolute inset-0 rounded-lg bg-indigo-400 opacity-0 group-hover:opacity-20 blur-md transition-opacity"></div>
    </Link>
  );
};
