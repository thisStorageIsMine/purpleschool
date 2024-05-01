import { Metadata } from "next";


export const metadata: Metadata = {
    title: 'Продукты'
}

export default function Product({ params }: { params: { alias: string } }) {

    return (
        <>
            Это страница с продуктом "{params.alias}"
        </>
    )
}