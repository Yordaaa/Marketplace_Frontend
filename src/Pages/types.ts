export interface Product {
    code: string;
    quantity: number;
}
export interface quotationDataProps {
    name: string;
    email: string;
    products: Product[];
}

export interface quatationType {
    _id: string;
    customer_name: string;
    customer_email: string;
    status: 'Pending' | 'Cancled' | 'Approved';
    otp?: number;
    otp_expires_at: string;
    createdAt: string;
    updatedAt: string;
    products: Product[];
}
export interface quatationResType {
    success: boolean;
    message: string;
    newQuotationRequest: quatationType;
}

export interface ErrorResponse {
    status: number;
    data: {
        message: string;
        error: any;
        stack?: string;
    };
}
