interface ProductModel {
    _id: string;
    categories: string[];
    tags: string[];
    title: string;
    image: string;
    description: string;
    link: string;
    price: number;
    credit: number;
    oldPrice: number;
    characteristics: ProductCharacteristic[];
    advantages?: string;
    initialRating: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
    html: string;
    blog: Blog;
    companyId: string;
    clicks: number;
    reviews: Review[];
    reviewCount: number;
    reviewAvg?: number;
}
interface Review {
    _id: string;
    name: string;
    title: string;
    description: string;
    rating: number;
    productId: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}
interface Blog {
    text: string;
    _id: string;
    bigImage?: string;
}
interface ProductCharacteristic {
    name: string;
    value: string;
}