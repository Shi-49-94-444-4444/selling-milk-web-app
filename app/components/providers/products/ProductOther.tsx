"use client"

import { Product } from "@/types";
import { formatCurrency, formatNumber } from "@/utils/format";
import Image from "next/image"
import Link from "next/link";

const ProductOther: React.FC<Product> = ({
    id,
    name,
    price,
    sale,
    discount,
    title,
    img,
    styleMargin
}) => {
    const none = 0
    const bl = 1 //BestSales
    const dc = 2 //Discount

    return (
        <section className={`
                relative
                rounded-xl
                border-2
                border-black
                border-opacity-10
                cursor-pointer
                transition-all
                duration-500
                shadow-sm
                z-20
                hover:border-red-500
                hover:-translate-y-1
                hover:shadow-md
                bg-white
                overflow-visible
                ${styleMargin ? "mt-4" : ""}
            `}
            key={id}
        >
            <Link href={`/product/detail-product/${id}`}>
                <div className="
                        relative
                        transition-all
                        duration-500
                    "
                >
                    <div className="
                            top-0 
                            left-0 
                            w-full 
                            h-full
                            flex
                            items-center
                            justify-center
                        "
                    >
                        <Image
                            src={img}
                            alt={`product ${id}`}
                            className="
                                    rounded-t-xl
                                    hover:rounded-t-xl
                                    object-fill
                                    w-40
                                    h-60
                                "
                            height={300}
                            width={200}
                            sizes="(max-width: 600px) 100vw, 600px"
                            draggable="false"
                        />
                    </div>
                </div>
                <div className="flex flex-col py-2 px-3 text-lg gap-3">
                    <h1 className="text-gray-700 line-clamp-2 h-12">{name}</h1>
                    <div className="h-8 flex items-center">
                        {title === bl ? (
                            <div className="p-1 text-sm text-red-500 border border-red-500 w-fit font-semibold">
                                Đang bán chạy
                            </div>
                        ) : title === dc ? (
                            <div className="p-1 text-sm bg-primary-cus text-white w-fit font-semibold">
                                {discount}% Giảm
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                    <div className="flex flex-row justify-between items-end">
                        <div className="text-primary-cus text-xl">
                            {formatCurrency(price ? price : 0)}
                        </div>
                        {sale === 0 || (
                            <div className="text-gray-500 text-sm">
                                Đã bán {formatNumber(sale ? sale : 0)}
                            </div>
                        )}
                    </div>
                </div>
            </Link>
        </section>
    )
}

export default ProductOther