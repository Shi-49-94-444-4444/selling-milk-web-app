"use client"

import Layout from "@/app/layout"
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import Container from "@/app/components/hero/Container";
import Image from "next/image";
import { formatCurrency } from "@/utils/format";
import { FaCartPlus } from "react-icons/fa";
import { BsShop } from "react-icons/bs";
import { LuMessageSquareDashed } from "react-icons/lu";
import ProductCarousel from "@/app/components/providers/products/ProductCarousel";
import ProductOther from "@/app/components/providers/products/ProductOther";
import { listProduct } from "@/utils/constants";

interface ImageCarouselProps {
    images: string[];
}

const images = [
    '/images/product.jpg',
    '/images/product_1.png',
    '/images/product.jpg',
    '/images/product.jpg',
    '/images/product.jpg',
    '/images/product.jpg',
    '/images/product.jpg',
];

const ProductDetail = () => {
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [swiper, setSwiper] = useState<any>(null);
    const [quantity, setQuantity] = useState(1);

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const goToPrevious = () => {
        if (swiper) swiper.slidePrev();
    };

    const goToNext = () => {
        if (swiper) swiper.slideNext();
    };

    return (
        <Layout>
            <div className="relative py-10">
                <Container>
                    <section className="relative w-full bg-white rounded-sm p-6">
                        <div className="grid grid-cols-9 gap-5">
                            <section className="col-span-4 transition-all duration-500">
                                <div className="w-full h-[600px] top-0 left-0 flex items-center justify-center">
                                    <Image
                                        src={selectedImage}
                                        alt="Selected"
                                        className="w-80 h-100 object-fill"
                                        height={800}
                                        width={600}
                                        sizes="(max-width: 600px) 100vw, 600px"
                                        draggable="false"
                                    />
                                </div>
                                <Swiper
                                    onSwiper={setSwiper}
                                    slidesPerView={5}
                                    spaceBetween={10}
                                    navigation={{
                                        prevEl: '.swiper-button-prev',
                                        nextEl: '.swiper-button-next',
                                    }}
                                    modules={[Navigation]}
                                    className="w-full z-30"
                                >
                                    {images.map((src, index) => (
                                        <SwiperSlide key={index}>
                                            <Image
                                                src={src}
                                                alt={`Thumbnail ${index}`}
                                                className={`w-40 h-32 cursor-pointer object-fill ${selectedImage === src ? 'border-2 border-primary-cus' : ''
                                                    }`}
                                                height={100}
                                                width={160}
                                                onMouseEnter={() => setSelectedImage(src)}
                                            />
                                        </SwiperSlide>
                                    ))}
                                    <button
                                        className="z-20 swiper-button-prev absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-30 text-white px-3 py-3 rounded-md text-lg font-bold"
                                        onClick={goToPrevious}
                                    >
                                        &lt;
                                    </button>
                                    <button
                                        className="z-20 swiper-button-next absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-30 text-white px-3 py-3 rounded-md text-lg font-bold"
                                        onClick={goToNext}
                                    >
                                        &gt;
                                    </button>
                                </Swiper>
                            </section>
                            <section className="col-span-5">
                                <div className="flex flex-col gap-3">
                                    <section className="text-2xl">
                                        Sữa Vinimiuuuu
                                    </section>
                                    <section className="flex flex-row justify-between text-gray-500">
                                        <div className="flex flex-row gap-5">
                                            <h2>
                                                Chưa có đánh giá
                                            </h2>
                                            <div className="border border-l border-gray-500 border-opacity-30" />
                                            <div className="flex flex-row gap-1">
                                                <span className="text-black">
                                                    0
                                                </span>
                                                <span>
                                                    Đã bán
                                                </span>
                                            </div>
                                        </div>
                                        <div className="cursor-pointer">
                                            Tố cáo
                                        </div>
                                    </section>
                                    <section className="w-full bg-gray-100 rounded-sm px-6 py-4">
                                        <div className="flex flex-row gap-5 items-center">
                                            <span className="line-through text-gray-500 text-lg">
                                                {formatCurrency(60000)}
                                            </span>
                                            <span className="text-primary-cus text-3xl">
                                                {formatCurrency(150000)}
                                            </span>
                                            <span className="px-2 text-sm bg-primary-cus text-white w-fit font-semibold">
                                                30% Giảm
                                            </span>
                                        </div>
                                    </section>
                                    <section className="flex flex-col gap-8 px-5 pt-4">
                                        <section className="grid grid-cols-5 gap-4 items-center">
                                            <div className="col-span-1">
                                                <div className="text-gray-500 text-md">
                                                    Mã Giảm Giá Của Shop
                                                </div>
                                            </div>
                                            <div className="col-span-4 flex gap-3 text-sm">
                                                <div className="bg-red-100 text-primary-cus w-fit px-2 py-1">
                                                    <div className="flex items-center justify-center">
                                                        Giảm 10%
                                                    </div>
                                                </div>
                                                <div className="bg-red-100 text-primary-cus w-fit px-2 py-1">
                                                    <div className="flex items-center justify-center">
                                                        Giảm 10%
                                                    </div>
                                                </div>
                                                <div className="bg-red-100 text-primary-cus w-fit px-2 py-1">
                                                    <div className="flex items-center justify-center">
                                                        Giảm 10%
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        <section className="grid grid-cols-5 gap-4 items-center">
                                            <div className="col-span-1">
                                                <div className="text-gray-500 text-md">
                                                    Chính Sách Trả Hàng
                                                </div>
                                            </div>
                                            <div className="col-span-4 flex gap-3 text-md">
                                                <div className="flex items-center gap-2">
                                                    <input type="radio" className="text-primary-cus focus:ring-0" checked readOnly />
                                                    <p className="text-gray-500">
                                                        Trả hàng 15 ngày
                                                    </p>
                                                </div>
                                            </div>
                                        </section>
                                        <section className="grid grid-cols-5 gap-4 items-start">
                                            <div className="col-span-1">
                                                <div className="text-gray-500 text-md">
                                                    Vận Chuyển
                                                </div>
                                            </div>
                                            <div className="col-span-4 flex flex-col gap-2 text-md">
                                                <div className="text-primary-cus">
                                                    Hàng Đặt Trước (có hàng sau 5 ngày)
                                                </div>
                                                <div className="">
                                                    Miễn phí vận chuyển
                                                </div>
                                                <div className="text-gray-500">

                                                    Vận Chuyển Tới
                                                </div>
                                            </div>
                                        </section>
                                        <section className="grid grid-cols-5 gap-4 items-center">
                                            <div className="col-span-1">
                                                <div className="text-gray-500 text-md">
                                                    MÀU
                                                </div>
                                            </div>
                                            <div className="col-span-4">
                                                <div className="flex flex-row flex-wrap gap-2 text-md">
                                                    {images.map((src, index) => (
                                                        <div className={`bg-white border w-fit px-2 py-1 flex flex-row gap-1 items-center cursor-pointer ${selectedImage === src ? 'border-primary-cus' : 'border-black border-opacity-10'}`}>
                                                            <Image
                                                                src={src}
                                                                alt={`Thumbnail ${index}`}
                                                                className="w-8 h-8 object-fill"
                                                                height={32}
                                                                width={32}
                                                                onMouseEnter={() => setSelectedImage(src)}
                                                            />
                                                            <span>Sô-cô-la</span>
                                                        </div>
                                                    ))}
                                                </div>

                                            </div>
                                        </section>
                                        <section className="grid grid-cols-5 gap-4 items-center">
                                            <div className="col-span-1">
                                                <div className="text-gray-500 text-md">
                                                    Số Lượng
                                                </div>
                                            </div>
                                            <div className="col-span-4">
                                                <div className="flex flex-row gap-3 items-center">
                                                    <div className="flex flex-row text-md text-gray-600 font-semibold border border-black border-opacity-10 w-fit">
                                                        <button className="border border-r border-black border-opacity-10 px-4 py-1" onClick={decreaseQuantity}>
                                                            -
                                                        </button>
                                                        <input
                                                            type="number"
                                                            className="w-12 text-center"
                                                            value={quantity}
                                                            onChange={(e) => setQuantity(Number(e.target.value))}
                                                        />
                                                        <button className="border border-l border-black border-opacity-10 px-4 py-1" onClick={increaseQuantity}>
                                                            +
                                                        </button>
                                                    </div>
                                                    <div className="text-gray-500 text-sm">
                                                        5757 sản phẩm có sẵn
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        <section className="flex flex-row gap-5 h-full">
                                            <button className="flex flex-row gap-2 px-2 py-1 w-60 h-14 items-center justify-center text-primary-cus bg-red-100 hover:bg-red-50 border border-primary-cus">
                                                <span>
                                                    <FaCartPlus size={30} />
                                                </span>
                                                <span>
                                                    Thêm vào giở hàng
                                                </span>
                                            </button>
                                            <button className="flex flex-row px-2 py-1 w-60 h-14 items-center justify-center text-white bg-red-600 hover:bg-red-500">
                                                Mua ngay
                                            </button>
                                        </section>
                                        <section className="border-b border-black opacity-10 pt-5" />
                                        <section className="flex flex-row gap-5 w-full text-md pt-5">
                                            <span>
                                                Đảm bảo
                                            </span>
                                            <span className="text-gray-500">
                                                Trả hàng miễn phí 15 ngày
                                            </span>
                                        </section>
                                    </section>
                                </div>
                            </section>
                        </div>
                    </section>
                    <section className="relative w-full bg-white rounded-sm p-6 mt-5">
                        <div className="grid grid-cols-10 gap-3 items-center">
                            <section className="col-span-1">
                                <div className="flex flex-shrink-0 w-28 h-28 border border-black border-opacity-20 rounded-full items-center justify-center">
                                    <Image
                                        src="/images/logo_2.jpg"
                                        alt="logo_2"
                                        className="w-28 h-28 object-fill rounded-full"
                                        width={112}
                                        height={112}
                                    />
                                </div>
                            </section>
                            <section className="col-span-2 border-r border-opacity-10">
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-black text-md">GiaGia79</h3>
                                    <div className="flex flex-row gap-3">
                                        <button className="text-primary-cus text-sm border border-primary-cus bg-red-100 flex flex-row gap-2 items-center justify-center w-fit p-2 hover:bg-red-50">
                                            <span>
                                                <LuMessageSquareDashed size={15} />
                                            </span>
                                            <span>
                                                Chat ngay
                                            </span>
                                        </button>
                                        <button className="text-gray-600 text-sm border border-black border-opacity-10 flex flex-row gap-2 items-center justify-center w-fit p-2 hover:bg-gray-50">
                                            <span>
                                                <BsShop size={15} />
                                            </span>
                                            <span>
                                                Xem Shop
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </section>
                            <section className="col-span-7 ml-10">
                                <div className="grid grid-cols-4 gap-3">
                                    <section className="col-span-1">
                                        <div className="flex flex-col gap-6">
                                            <div className="flex flex-row justify-between">
                                                <label className="text-gray-400">
                                                    Đánh giá
                                                </label>
                                                <p className="text-primary-cus">
                                                    30,2k
                                                </p>
                                            </div>
                                            <div className="flex flex-row justify-between">
                                                <label className="text-gray-400">
                                                    Sản phẩm
                                                </label>
                                                <p className="text-primary-cus">
                                                    30,2k
                                                </p>
                                            </div>
                                        </div>
                                    </section>
                                    <section className="col-span-2 px-20">
                                        <div className="flex flex-col gap-6">
                                            <div className="flex flex-row justify-between">
                                                <label className="text-gray-400">
                                                    Tỉ lệ phản hồi
                                                </label>
                                                <p className="text-primary-cus">
                                                    30,2k
                                                </p>
                                            </div>
                                            <div className="flex flex-row justify-between">
                                                <label className="text-gray-400">
                                                    Thời gian phản hồi
                                                </label>
                                                <p className="text-primary-cus">
                                                    30,2k
                                                </p>
                                            </div>
                                        </div>
                                    </section>
                                    <section className="col-span-1">
                                        <div className="flex flex-col gap-6">
                                            <div className="flex flex-row justify-between">
                                                <label className="text-gray-400">
                                                    Tham gia
                                                </label>
                                                <p className="text-primary-cus">
                                                    1 tháng trước
                                                </p>
                                            </div>
                                            <div className="flex flex-row justify-between">
                                                <label className="text-gray-400">
                                                    Người theo dõi
                                                </label>
                                                <p className="text-primary-cus">
                                                    30,2k
                                                </p>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </section>
                        </div>
                    </section>
                    <section className="relative w-full bg-white rounded-sm p-6 mt-5">
                        <div className="flex flex-col gap-7">
                            <section className="flex flex-col gap-5">
                                <div className="w-full bg-[#F5F5F5] text-xl p-4 uppercase">
                                    Chi tiết sản phẩm
                                </div>
                                <div className="flex flex-row justify-between gap-10 text-md w-fit p-4">
                                    <ul className="text-gray-400 flex flex-col gap-4">
                                        <li>
                                            Thương hiệu
                                        </li>
                                        <li>
                                            Xuất xứ
                                        </li>
                                        <li>
                                            Hương vị
                                        </li>
                                        <li>
                                            Hạn sử dụng
                                        </li>
                                        <li>
                                            Kho hàng
                                        </li>
                                        <li>
                                            Gửi từ
                                        </li>
                                    </ul>
                                    <ul className="text-gray-900 flex flex-col gap-4">
                                        <li>
                                            Việt Nam
                                        </li>
                                        <li>
                                            Việt Nam
                                        </li>
                                        <li>
                                            Truyền thống
                                        </li>
                                        <li>
                                            12 tháng
                                        </li>
                                        <li>
                                            2081
                                        </li>
                                        <li>
                                            TP. Hồ Chí Minh
                                        </li>
                                    </ul>
                                </div>
                            </section>
                            <section className="flex flex-col gap-5">
                                <div className="w-full bg-[#F5F5F5] text-xl p-4 uppercase">
                                    Mô tả sản phẩm
                                </div>
                                <ul className="flex flex-col text-base gap-8 p-4">
                                    <li>
                                        Sữa dinh dưỡng (Sữa tiệt trùng) Vinamilk - Bịch 220ml
                                    </li>
                                    <li>
                                        Sữa dinh dưỡng (Sữa tiệt trùng) Vinamilk - Bịch 220ml
                                    </li>
                                    <li>
                                        Sữa dinh dưỡng (Sữa tiệt trùng) Vinamilk - Bịch 220ml
                                    </li>
                                    <li>
                                        Sữa dinh dưỡng (Sữa tiệt trùng) Vinamilk - Bịch 220ml
                                    </li>
                                    <li>
                                        Sữa dinh dưỡng (Sữa tiệt trùng) Vinamilk - Bịch 220ml
                                    </li>
                                    <li>
                                        Sữa dinh dưỡng (Sữa tiệt trùng) Vinamilk - Bịch 220ml
                                    </li>
                                    <li>
                                        Sữa dinh dưỡng (Sữa tiệt trùng) Vinamilk - Bịch 220ml
                                    </li>
                                    <li>
                                        Sữa dinh dưỡng (Sữa tiệt trùng) Vinamilk - Bịch 220ml
                                    </li>
                                </ul>
                            </section>
                        </div>
                    </section>
                    <section className="relative w-full bg-white rounded-sm p-6 mt-5">
                        <div className="flex flex-col gap-5">
                            <h2 className="uppercase text-xl">Đánh giá sản phẩm</h2>
                            <div className="flex flex-col gap-4 p-4 b">
                                <div className="flex flex-row gap-3">
                                    <div className="flex flex-shrink-0 w-16 h-16 rounded-full">
                                        <Image
                                            src="/images/logo_2.jpg"
                                            alt="customer"
                                            className="w-16 h-16 rounded-full object-cover"
                                            width={64}
                                            height={64}
                                        />
                                    </div>
                                    <div className="flex flex-col gap-3 text-sm">
                                        <label className="text-black">
                                            tintranduc799
                                        </label>
                                        <p className="text-gray-500">
                                            2023-11-08 22:45
                                        </p>
                                        <div className="flex flex-col gap-1 text-md">
                                            <div className="flex flex-row gap-2">
                                                <span className="text-gray-500">
                                                    Bao bì/Mẫu mã:
                                                </span>
                                                <span className="text-black">
                                                    10
                                                </span>
                                            </div>
                                            <div className="flex flex-row gap-2">
                                                <span className="text-gray-500">
                                                    Hương vị:
                                                </span>
                                                <span className="text-black">
                                                    10
                                                </span>
                                            </div>
                                        </div>
                                        <p className="text-black text-md">
                                            rấy tốt ray dep rat ngon đk. rất tốt rất đẹp rất rẩt hết sẩy bà bảy bán cháo lòng số 1 shop yêu dấu vẻy golf gloj số 1
                                        </p>
                                        <div className="flex flex-row gap-3">
                                            <div className="relative w-20 h-20">
                                                <Image
                                                    src="/images/product.jpg"
                                                    alt="product"
                                                    className="w-20 h-20 object-fill"
                                                    height={80}
                                                    width={80}
                                                />
                                            </div>
                                            <div className="relative w-20 h-20">
                                                <Image
                                                    src="/images/product.jpg"
                                                    alt="product"
                                                    className="w-20 h-20 object-fill"
                                                    height={80}
                                                    width={80}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-b border-black border-opacity-20 py-5" />
                                <div className="flex flex-row gap-3">
                                    <div className="flex flex-shrink-0 w-16 h-16 rounded-full">
                                        <Image
                                            src="/images/logo_2.jpg"
                                            alt="customer"
                                            className="w-16 h-16 rounded-full object-cover"
                                            width={64}
                                            height={64}
                                        />
                                    </div>
                                    <div className="flex flex-col gap-3 text-sm">
                                        <label className="text-black">
                                            tintranduc799
                                        </label>
                                        <p className="text-gray-500">
                                            2023-11-08 22:45
                                        </p>
                                        <div className="flex flex-col gap-1 text-md">
                                            <div className="flex flex-row gap-2">
                                                <span className="text-gray-500">
                                                    Bao bì/Mẫu mã:
                                                </span>
                                                <span className="text-black">
                                                    10
                                                </span>
                                            </div>
                                            <div className="flex flex-row gap-2">
                                                <span className="text-gray-500">
                                                    Hương vị:
                                                </span>
                                                <span className="text-black">
                                                    10
                                                </span>
                                            </div>
                                        </div>
                                        <p className="text-black text-md">
                                            rấy tốt ray dep rat ngon đk. rất tốt rất đẹp rất rẩt hết sẩy bà bảy bán cháo lòng số 1 shop yêu dấu vẻy golf gloj số 1
                                        </p>
                                        <div className="flex flex-row gap-3">
                                            <div className="relative w-20 h-20">
                                                <Image
                                                    src="/images/product.jpg"
                                                    alt="product"
                                                    className="w-20 h-20 object-fill"
                                                    height={80}
                                                    width={80}
                                                />
                                            </div>
                                            <div className="relative w-20 h-20">
                                                <Image
                                                    src="/images/product.jpg"
                                                    alt="product"
                                                    className="w-20 h-20 object-fill"
                                                    height={80}
                                                    width={80}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-b border-black border-opacity-20 py-5" />
                                <div className="flex flex-row gap-3">
                                    <div className="flex flex-shrink-0 w-16 h-16 rounded-full">
                                        <Image
                                            src="/images/logo_2.jpg"
                                            alt="customer"
                                            className="w-16 h-16 rounded-full object-cover"
                                            width={64}
                                            height={64}
                                        />
                                    </div>
                                    <div className="flex flex-col gap-3 text-sm">
                                        <label className="text-black">
                                            tintranduc799
                                        </label>
                                        <p className="text-gray-500">
                                            2023-11-08 22:45
                                        </p>
                                        <div className="flex flex-col gap-1 text-md">
                                            <div className="flex flex-row gap-2">
                                                <span className="text-gray-500">
                                                    Bao bì/Mẫu mã:
                                                </span>
                                                <span className="text-black">
                                                    10
                                                </span>
                                            </div>
                                            <div className="flex flex-row gap-2">
                                                <span className="text-gray-500">
                                                    Hương vị:
                                                </span>
                                                <span className="text-black">
                                                    10
                                                </span>
                                            </div>
                                        </div>
                                        <p className="text-black text-md">
                                            rấy tốt ray dep rat ngon đk. rất tốt rất đẹp rất rẩt hết sẩy bà bảy bán cháo lòng số 1 shop yêu dấu vẻy golf gloj số 1
                                        </p>
                                        <div className="flex flex-row gap-3">
                                            <div className="relative w-20 h-20">
                                                <Image
                                                    src="/images/product.jpg"
                                                    alt="product"
                                                    className="w-20 h-20 object-fill"
                                                    height={80}
                                                    width={80}
                                                />
                                            </div>
                                            <div className="relative w-20 h-20">
                                                <Image
                                                    src="/images/product.jpg"
                                                    alt="product"
                                                    className="w-20 h-20 object-fill"
                                                    height={80}
                                                    width={80}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-b border-black border-opacity-20 py-5" />
                            </div>
                        </div>
                    </section>
                    <section className="flex flex-col gap-3 mt-10">
                        <label className="text-lg uppercase text-gray-500">
                            CÁC SẢN PHẨM KHÁC CỦA SHOP
                        </label>
                        <div className="h-fit flex items-center">
                            <ProductCarousel />
                        </div>
                    </section>
                    <section className="flex flex-col gap-3 mt-10">
                        <label className="text-lg uppercase text-gray-500">
                            CÓ THỂ BẠN CŨNG THÍCH
                        </label>
                        <div
                            className="
                                grid
                                xl:grid-cols-6
                                lg:grid-cols-5
                                md:grid-cols-4
                                grid-cols-3
                                gap-2
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
                    </section>
                </Container>
            </div>
        </Layout>
    )
}

export default ProductDetail