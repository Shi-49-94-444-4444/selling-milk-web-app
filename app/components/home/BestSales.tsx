import Container from "../hero/Container"
import ProductCarousel from "../providers/products/ProductCarousel"

const BestSales = () => {
    return (
        <Container>
            <div className="bg-white p-4">
                <div className="flex flex-col mb-4">
                    <div className="
                            flex 
                            flex-col
                            transition-all
                            duration-500
                            gap-2
                        "
                    >
                        <div className="
                                text-primary-cus
                                font-semibold
                                md:text-2xl
                                text-xl
                                text-left
                                transition-all
                                duration-500
                            "
                        >
                            Sản phẩm bán chạy
                        </div>
                        <div className="
                                w-full
                                h-[2px] 
                                bg-primary-cus
                                hidden
                                lg:block
                            "
                        />
                    </div>
                </div>
                <div className="h-fit flex items-center">
                    <ProductCarousel />
                </div>
            </div>
        </Container>
    )
}

export default BestSales