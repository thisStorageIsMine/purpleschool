import { Htag } from "../../components"
import { getMenu } from "@/api/Menu";



export default async function Home() {
  const menu = await getMenu();
  return (
    <main >

      <Htag h="1">
        Главная страница!
      </Htag>
      <div>
        {menu.map(i => <div className="text-gray text-xs font-light uppercase" key={i._id.secondCategory} >{i._id.secondCategory}</div>)}
      </div>
    </main>
  );
}

