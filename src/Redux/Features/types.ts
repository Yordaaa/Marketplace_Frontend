export interface categoryResTyp {
    _id: string;
    category: string;
}

export interface productResTyp {
    ancestry: string;
    code: string;
    createdAt: string;
    customs_description: string;
    description: string;
    dimensions: {
        length: number;
        width: number;
        height: number;
    };
    hs_code: string;
    hs_description: string;
    leaf: boolean;
    name: string;
    preferred_units: string;
    productImg: string;
    source_id: string;
    updatedAt: string;
    weight: number;
    weight_unit_id: string;
    _id: string;
    quantity?: number;
}

export interface ProductCardProps {
    product: productResTyp;
}

export interface productIdProps {
    id: string;
}

export interface CartItem extends productResTyp {
    quantity: number;
}
