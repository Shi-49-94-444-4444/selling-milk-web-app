"use client"

import { listProduct } from "@/utils/constants";
import Container from "../hero/Container";
import ProductOther from "../providers/products/ProductOther";

const QuickProduct = () => {
    return (
        <Container>
            <div className="
                    flex 
                    flex-col
                    transition-all
                    duration-500
                    gap-2
                    bg-white
                "
            >
                <div className="
                        pt-2
                        text-primary-cus
                        font-semibold
                        md:text-2xl
                        text-xl
                        text-center
                        transition-all
                        duration-500
                    "
                >
                    Sản phẩm mới nhất
                </div>
                <div className="
                        w-full
                        h-[4px] 
                        bg-primary-cus
                        hidden
                        lg:block
                    "
                />
            </div>
            <div
                className="
                    grid
                    xl:grid-cols-6
                    lg:grid-cols-5
                    md:grid-cols-4
                    grid-cols-3
                    gap-[5px]
                    transition-all
                    duration-500
                    pt-4
                "
            >
                {listProduct.map((item) => (
                    <ProductOther
                        key={item.id}
                        id={item.id}
                        img={item.img}
                        name={item.name}
                        title={item.title}
                        sale={item.sale}
                        discount={item.discount}
                        price={item.price}
                    />
                ))}
            </div>
        </Container>
    );
};

export default QuickProduct;
