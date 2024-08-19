interface Product {
    _id: string;
    code: string;
    quantity_requested: number;
    price: number;
}

interface quote {
    _id: string;
    createdAt: string;
    updatedAt: string;
    customer_email: string;
    customer_name: string;
    grandTotal: number;
    otp: number;
    otp_expires_at: Date;
    products: Product[];
    status: 'Pending' | 'Cancled' | 'Approved';
}

export interface orderResType {
    success: boolean;
    myQuotes: quote[];
}
