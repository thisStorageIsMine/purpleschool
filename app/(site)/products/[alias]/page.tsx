import { Metadata } from "next";
import { getPage } from "@/api/page";
import { notFound } from "next/navigation";


export const metadata: Metadata = {
    title: 'Продукты'
}

export default async function Product({ params }: { params: { alias: string } }) {
    const page = await getPage(params.alias);

    if (!page) {
        notFound();
    }

    return (
        <div>
            {page.title}
        </div>
    )
}