"use client";
import CharacterTable from "@/app/components/characterTable";
import SkilsTable from "@/app/components/skillsTable";
import { useFetch } from "@/app/hooks/useFetch";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
// import { useEffect } from "react";

export default function Chacaracter({ params }) {
  const [loding, setLoading] = useState("grid");
  const [opacity, setOpacity] = useState(1);
  const { character } = params;
  // const [character, setCharacter] = useState(null)
  const { data } = useFetch(`https://api.genshin.dev/characters/` + character);
  // const {vision} = data
  useEffect(() => {
    // setCharacter(data)
    setTimeout(() => {
      setOpacity(0);
      setTimeout(() => {
        setLoading("none");
      }, 2000);
    }, 1000);
    window.scroll(0, 0);
    // console.log(data);
  }, [data]);
  return data ? (
    <div className="min-h-screen">
      <div className="min-h-screen max-w-6xl mx-auto bg-white shadow-lg flex flex-col sm:flex-row ring-1 ring-zinc-200 rounded-md  mt-10">
        {data && (
          <div
            className="sticky top-20 sm:h-screen lg:min-w-[292px] min-w-[120px] w-[292px]  overflow-hidden border-r-2 border-zinc-200 rounded-l-md"
            style={{ background: `var(--${data.vision})` }}
          >
            <Image
              className=" h-full lg:min-w-[292px] min-w-[120px]   object-cover hidden sm:block"
              width={292}
              height={100}
              src={`https://api.genshin.dev/characters/${character}/gacha-card`}
              alt={character}
              style={{ filter: "drop-shadow(3px 3px 0px white" }}
            />
          </div>
        )}

        {/* DATAS */}
        <div className=" p-4 sm:p-8 flex flex-col gap-5 relative">
          <Link
            href="/characters"
            className="flex gap-2 items-center hover:bg-blue-400 w-fit p-2 rounded-md hover:text-white transition-all shadow-lg ring-1 ring-zinc-200 hover:shadow-blue-400/30 absolute top-3 right-3 capitalize"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.4}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
              />
            </svg>
            <p className="text-md">return </p>
          </Link>
          <div className="flex sm:flex-row flex-col gap-5 items-start">
            <div
              className="min-w-[100px] h-[fit-content]  w-[100px]   min-h-[100px] rounded-md overflow-hidden bg-contain bg-center"
              style={{ backgroundImage: "var(--icon-gradient)" }} /*  */
            >
              <Image
                className="min-h-[100px] min-w-[100px] w-[100px] object-cover mx-auto"
                src={`https://api.genshin.dev/characters/${character}/icon-big`}
                height={112}
                width={100}
                alt={character}
              ></Image>
            </div>
            {data && (
              <div className="flex">
                <div>
                  <h1 className="text-3xl font-semibold">{data.name}</h1>
                  <h2 className="text-md">{data.title}</h2>
                  <p className="text-sm">{data.description}</p>
                </div>
              </div>
            )}
          </div>
          {data && <CharacterTable data={data} />}
          {data && (
            <SkilsTable
              character={character}
              data={data}
              vision={data.vision}
            />
          )}
        </div>
      </div>
    </div>
  ) : (
    <div
      className="absolute w-full h-screen bg-white top-0 z-30 transition-all place-content-center"
      style={{ display: loding, opacity: opacity }}
    >
      <h2 className="text-5xl font-bold">Loading</h2>
    </div>
  );
}
