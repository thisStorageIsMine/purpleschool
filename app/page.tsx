import Image from "next/image";
import { Htag, Button, P, Tag } from "./components"

export default function Home() {
  return (
    <main >
      <Htag h="1">Текст 1</Htag>
      <Htag h="2">Текст 2</Htag>
      <Htag h="3">Текст 3</Htag>
      <Button appearance="primary" arrow="down">Я основная кнопка</Button>
      <Button appearance="ghost" arrow="down">Я кнопка призрак</Button>

      <P size="sm" className="mt-2 ml-3 ">Текст</P>
      <P size="md" className="mt-2 ml-3 text-emerald-100">Текст побольше</P>
      <P size="lg" className="mt-2 ml-3">Текст ещё больше</P>

      <Tag size="sm" appearance="gray">hh.ru</Tag>
      <Tag size="md" appearance="green">1000</Tag>
      <Tag size="md" appearance="red">TEXT</Tag>
      <Tag size="sm" appearance="ghost">DRUTTUT</Tag>
      <Tag size="md" appearance="primary">Oleg</Tag>

    </main> 
  );
}
