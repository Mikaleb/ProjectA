export interface Product {
    ISIN: string;
    marketValue: number;
    name: string;
    numberOfUnits: number;
    quarterlyPerformance: number[];
    unitValue: number;
    yearlyPerformance: number;
}

export interface Category {
    displayOrder: number;
    marketValue: number;
    name: string;
    subcategories: Category[];
    products?: Product[];
}

export interface Portfolio {
    id: number;
    name: string;
    categories: Category[];
}
