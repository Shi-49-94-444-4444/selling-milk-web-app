export interface Product {
    id?: string | null
    name?: string | null
    price?: number | null
    img: string
    sale?: number | null
    supplier?: string | null
    idSupplier?: string | null
    discount?: number | null
    title?: number | null
    styleMargin?: boolean | true
}

export interface ListProduct {
    list?: Product[]
}