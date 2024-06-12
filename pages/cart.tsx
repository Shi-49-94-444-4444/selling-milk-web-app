"use client"

import Container from '@/app/components/hero/Container'
import Layout from '@/app/layout'
import { formatCurrency } from '@/utils/format';
import Image from 'next/image'
import { useState } from 'react';

const Cart = () => {
    const [quantity, setQuantity] = useState(1);

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    return (
        <Layout>
            <Container>
                <div className="relative py-5 flex flex-col gap-3">
                    <section className="grid grid-cols-8 gap-2 bg-white border border-black border-opacity-10 text-gray-500 py-3 px-8 rounded-sm shadow-sm">
                        <div className="col-span-4">
                            Sản Phẩm
                        </div>
                        <div className="col-span-1 text-center">
                            Đơn Giá
                        </div>
                        <div className="col-span-1 text-center">
                            Số Lượng
                        </div>
                        <div className="col-span-1 text-center">
                            Số Tiền
                        </div>
                        <div className="col-span-1 text-center">
                            Thao Tác
                        </div>
                    </section>
                    <section className="bg-white border border-black border-opacity-10 rounded-sm shadow-sm">
                        <section className="grid grid-cols-8 gap-2 items-center p-8">
                            <div className="col-span-4 w-2/3">
                                <div className="w-full flex flex-row gap-2 items-start">
                                    <div className="relative w-32 h-32">
                                        <Image
                                            src="/images/product_1.png"
                                            alt="product"
                                            className="w-32 h-32 object-cover"
                                            width={128}
                                            height={128}
                                        />
                                    </div>
                                    <div className="">
                                        Sữa vinamiu Sữa vinamiu Sữa vinamiuSữa vinamiuSữa vinamiuSữa vinamiuSữa vinamiuSữa vinamiuSữa vinamiu
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1 text-center">
                                Đơn Giá
                            </div>
                            <div className="col-span-1 text-center">
                                <div className="flex flex-row gap-3 items-center">
                                    <div className="flex flex-row text-md text-gray-600 font-semibold border border-black border-opacity-10 w-fit">
                                        <button className="border border-r border-black border-opacity-10 px-4" onClick={decreaseQuantity}>
                                            -
                                        </button>
                                        <input
                                            type="number"
                                            className="w-12 text-center py-1"
                                            value={quantity}
                                            onChange={(e) => setQuantity(Number(e.target.value))}
                                        />
                                        <button className="border border-l border-black border-opacity-10 px-4" onClick={increaseQuantity}>
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1 text-center">
                                Số Tiền
                            </div>
                            <div className="col-span-1 text-primary-cus cursor-pointer text-center">
                                Xóa
                            </div>
                        </section>
                        <div className="border border-b border-black border-opacity-10 relative w-full" />
                        <section className="grid grid-cols-8 gap-2 items-center p-8">
                            <div className="col-span-4 w-2/3">
                                <div className="w-full flex flex-row gap-2 items-start">
                                    <div className="relative w-32 h-32">
                                        <Image
                                            src="/images/product_1.png"
                                            alt="product"
                                            className="w-32 h-32 object-cover"
                                            width={128}
                                            height={128}
                                        />
                                    </div>
                                    <div className="">
                                        Sữa vinamiu Sữa vinamiu Sữa vinamiuSữa vinamiuSữa vinamiuSữa vinamiuSữa vinamiuSữa vinamiuSữa vinamiu
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1 text-center">
                                Đơn Giá
                            </div>
                            <div className="col-span-1 text-center">
                                <div className="flex flex-row gap-3 items-center">
                                    <div className="flex flex-row text-md text-gray-600 font-semibold border border-black border-opacity-10 w-fit">
                                        <button className="border border-r border-black border-opacity-10 px-4" onClick={decreaseQuantity}>
                                            -
                                        </button>
                                        <input
                                            type="number"
                                            className="w-12 text-center py-1"
                                            value={quantity}
                                            onChange={(e) => setQuantity(Number(e.target.value))}
                                        />
                                        <button className="border border-l border-black border-opacity-10 px-4" onClick={increaseQuantity}>
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1 text-center">
                                Số Tiền
                            </div>
                            <div className="col-span-1 text-primary-cus cursor-pointer text-center">
                                Xóa
                            </div>
                        </section>
                        <div className="border border-b border-black border-opacity-10 relative w-full" />
                    </section>
                    <section className="flex flex-col gap-3 bg-white border border-black border-opacity-10 py-3 px-8 rounded-sm shadow-sm">
                        <div className="flex flex-row justify-end items-center gap-20">
                            <div className="text-lg">
                                Voucher
                            </div>
                            <div className="text-primary-cus text-md">
                                Mã giảm giá
                            </div>
                        </div>
                        <div className="flex flex-row justify-end items-center gap-3">
                            <div className="text-lg">
                                Tổng sản phẩm thanh toán (0 sản phẩm):
                            </div>
                            <div className="text-primary-cus text-md text-3xl">
                                {formatCurrency(0)}
                            </div>
                            <button className="text-white bg-primary-cus hover:bg-red-500 py-2 px-10 text-md font-semibold">
                                Mua Hàng
                            </button>
                        </div>
                    </section>
                </div>
            </Container>
        </Layout>
    )
}

export default Cart