"use client";
import Image from "next/image";
// import { useEffect } from "react"
import { useFetch } from "../hooks/useFetch";
import Link from "next/link";
import CharacterCard from "../components/characterCard";
import { useEffect, useState } from "react";

export default function Characters() {
  const [characterList, setCharacterList] = useState("");
  const [inputValue, setInputValue] = useState("");
  const { data } = useFetch("https://api.genshin.dev/characters");

  function handleInput(v) {
    setInputValue(v.target.value.toLowerCase());
    const newArray = data.filter((e) =>
      e.includes(v.target.value.toLowerCase())
    );
    setCharacterList(newArray);
  }
  useEffect(() => {
    setInputValue("");
    setCharacterList(data);
  }, [data]);
  return (
    <div className=" min-h-screen bg-white">
      <div
        className="max-w-6xl mx-auto 
        px-4
        sm:px-6
        pt-20
        pb-10
        "
      >
        <h2 className="text-zinc-800 text-5xl sm:text-8xl font-extrabold capitalize">
          Select your character.
        </h2>
        <p className="text-zinc-600 text-xl mt-4">
          select your character and get information, this is the first version
          of the page.
        </p>
      </div>
      <hr />
      <div
        className="max-w-6xl mx-auto 
        p-4
        sm:p-6
        md:p-9
      "
      >
        <div className="ring-1 ring-zinc-500/30 w-full rounded-md flex items-center pl-4 text-xl hover:shadow-md outline-none transition-all">
          <input
            // defaultValue={inputValue}
            onChange={handleInput}
            className="bg-white w-full text-slate-600 rounded-md outline-none
          
          "
            type="text"
            placeholder="Buscar"
          />
          <div
            className="text-white bg-blue-400 flex p-3 m-2 rounded-md cursor-pointer
          transition-all
          shadow-lg
          shadow-blue-500/30
          "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        </div>
      </div>
      {characterList && (
        <div
          className="grid grid-cols-2 px-4 gap-4 
        sm:grid-cols-3 sm:gap-6 sm:px-6 
        md:grid-cols-4 md:gap-9 md:px-9
        lg:grid-cols-5
        max-w-6xl
        mx-auto
        
        "
        >
          {characterList && characterList.length > 0 ? (
            characterList.map((ch, i) => <CharacterCard ch={ch} key={i} />)
          ) : (
            <h2 className="text-xl whitespace-nowrap">character not found.</h2>
          )}
        </div>
      )}
    </div>
  );
}
