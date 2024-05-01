import { API } from "@/app/api";
import { MenuItem } from "@/interfaces/menu.interface";

export async function getMenu(firstCategory: number = 0): Promise<MenuItem[]> {
    const reply = await fetch(API.topPage.find, {
        method: "POST",
        headers: new Headers({ "content-type": "application/json" }),
        body: JSON.stringify({ firstCategory })
    });


    return reply.json();
}