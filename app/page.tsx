'use client';
import Image from "next/image";
import { Htag, Button, P, Tag, Timer, Rating } from "../components"
import { useState } from "react";

export default function Home() {
  const [rating, setRating] = useState(0);

  return (
    <main >

      <Htag className="" h="1">
        Главная страница!
      </Htag>

    </main> 
  );
}
