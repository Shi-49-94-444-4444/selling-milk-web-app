"use client"

import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';

import useSWR from 'swr';
import ProductOther from './ProductOther'
// import { listProduct } from '@/utils/constants';
import axiosInstance from '@/lib/axios';
import { Product } from '@/types';

const fetcher = (url: string) => axiosInstance.get(url).then(res => res.data);

const ProductCarousel = () => {
    const { data: listProduct, error } = useSWR<Product[]>('/product', fetcher);

    console.log(listProduct)
    
    const sliceProduct = listProduct ? listProduct.slice(0, 8) : []
    
    // console.table(sliceProduct)

    return (
        <Swiper
            modules={[Pagination]}
            spaceBetween={5}
            pagination={{ clickable: true }}
            loop={true}
            breakpoints={{
                640: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                },
                768: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                },
                1024: {
                    slidesPerView: 5,
                    slidesPerGroup: 5,
                },
                1280: {
                    slidesPerView: 6,
                    slidesPerGroup: 6,
                },
            }}
        >
            {sliceProduct.map((item) => (
                <SwiperSlide key={item.id}>
                    <ProductOther
                        id={item.id}
                        img={item.img}
                        name={item.name}
                        title={item.title}
                        sale={item.sale}
                        discount={item.discount}
                        price={item.price}
                        styleMargin={true}
                    />
                </SwiperSlide>
            ))}
            <div className="mt-10" />
        </Swiper>
    );
};

export default ProductCarousel
