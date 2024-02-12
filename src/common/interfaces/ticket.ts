
interface ITicket {
    id: string;
    name: string;
    location: string;
    image: string;
    description: string;
    price: IPrice;
    rating: IRating
    createdAt: string;
    updatedAt: string;
}

interface IPrice {
    full: number;
    discount: number;
}

interface IRating {
    reviewsCount: number;
    value: number;
}

