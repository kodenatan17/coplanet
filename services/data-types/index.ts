export interface CategoryTypes {
    _id: string;
    name: string;
    __v: number;
}

export interface MenuItemTypes {
    _id: string;
    status: string;
    name: string;
    thumbnail: string;
    category: CategoryTypes;
}