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

export interface BanksTypes {
    _id: string;
    name: string;
    bankName: string;
    noRekening: string;
}

export interface PaymentTypes {
    _id: string;
    type: string;
    status: string;
    __v: number;
    banks: BanksTypes[];
}

export interface NominalsTypes {
    _id: string;
    coinQuantity: number;
    coinName: string;
    price: number;
}

export interface LoginTypes {
    email: string;
    password: string;
}

export interface UserTypes {
    id: string;
    username: string;
    email: string;
    name: string;
    avatar: string;
}

export interface JWTPayloadTypes {
    player : UserTypes;
    iat: number;
}

export interface CheckoutTypes {
    voucher: string;
    nominal: string;
    payment: string;
    bank: string;
    name: string;
    accountUser: string;
}

export interface HistoryVoucherTopupTypes {
    category: string;
    coinName: string;
    coinQuantity: string;
    gameName: string;
    price: number;
    thumbnail: string
}

export interface HistoryTransactionTypes {
    _id: string;
    historyVoucherTopup : HistoryVoucherTopupTypes
    value: number;
    status: string;
}

export interface TopupCategoriesTypes {
    _id: string;
    value: number;
    name: string;
}
