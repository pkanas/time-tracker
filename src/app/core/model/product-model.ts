
export interface Product {
    category: string;
    description: string;
    image: string;
    id: number;
    price: number;
    title: string;
    rating: {
        count: number;
        rate: number;
    };
}
