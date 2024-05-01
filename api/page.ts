import { API } from "@/app/api";
import { TopPageModel } from "@/interfaces/page.interface";


export async function getPage(alias: string): Promise<TopPageModel | null> {
    const reply = await fetch(`${API.topPage.byAlias}/${alias}`, {
        method: "GET",
        headers: new Headers({ 'content-type': 'application/json;charset=utf-8' })
    });

    if (!reply.ok) return null;

    return reply.json();
}