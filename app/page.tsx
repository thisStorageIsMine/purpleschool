'use client';
import Image from "next/image";
import { Htag, Button, P, Tag, Timer, Rating } from "./components"
import { useState } from "react";

export default function Home() {
  const [rating, setRating] = useState(0);

  return (
    <main >


      <Rating  className="ml-5" rating={rating} setRating={setRating} isEditable={true}/>

    </main> 
  );
}
