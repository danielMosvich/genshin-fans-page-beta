"use client";
import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  
  useEffect(() => {
    window.location.href = "/characters"
  }, []);
  return <div></div>;
}
