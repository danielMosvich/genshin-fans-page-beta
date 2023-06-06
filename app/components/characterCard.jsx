import Image from "next/image";
import Link from "next/link";

export default function CharacterCard({ ch }) {
  return (
    <Link
      href={`/characters/${ch}`}
      className="bg-white rounded-md w-[100%] max-h-[380px] relative overflow-hidden shadow-xl shadow-slate-500/30 cursor-pointer transition-all border-solid ring-2 ring-slate-500/10 
      hover:ring-slate-500/30
      "
      key={ch}
    >
      <Image
        href={`/characters/${ch}`}
        className="rounded-md object-cover w-full h-full hover:scale-105 transition-transform"
        src={`https://api.genshin.dev/characters/${ch}/card`}
        width={300}
        height={390}
        alt={`${ch} image`}
      />
      <div
        className="absolute w-full h-full bg-black/50 top-0 left-0 flex items-end p-4 pointer-events-none "
        style={{
          background:
            "linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(255,255,255,0) 50%)",
        }}
      >
        <h3 className="text-xl font-semibold capitalize mt-3 text-white z-20 text-ellipsis overflow-hidden whitespace-nowrap">
          {ch}
        </h3>
      </div>
    </Link>
  );
}
