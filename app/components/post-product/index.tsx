"use client"

import ThumbGallery from "./ThumbsGallery"
import { useState } from "react"
import Input from "../providers/form/Input"
import Button from "../providers/form/Button"

const PostNewForm = () => {
    const [uploadImages, setUploadImages] = useState<string[]>([])

    return (
        <form className="grid lg:grid-cols-2 grid-cols-1 gap-10">
            <div className="col-span-1">
                <ThumbGallery setImages={setUploadImages} />
            </div>
            <div className="col-span-1">
                <div className="relative">
                    <div className="flex flex-col gap-8">
                        <div className="grid grid-cols-3 gap-3 items-center">
                            <div className="col-span-1">
                                <label className="text-lg font-semibold text-gray-600">Tên sản phẩm:</label>
                            </div>
                            <div className="col-span-2">
                                <Input
                                    id="title"
                                    name="title"
                                    colorInput="bg-[#F5F5F5]"
                                    type="text"
                                    maxLength={100}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-3 items-center">
                            <div className="col-span-1">
                                <label className="text-lg font-semibold text-gray-600">Thương hiệu:</label>
                            </div>
                            <div className="col-span-2">
                                <Input
                                    id="title"
                                    name="title"
                                    colorInput="bg-[#F5F5F5]"
                                    type="text"
                                    maxLength={100}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-3 items-center">
                            <div className="col-span-1">
                                <label className="text-lg font-semibold text-gray-600">Xuất xứ:</label>
                            </div>
                            <div className="col-span-2">
                                <Input
                                    id="title"
                                    name="title"
                                    colorInput="bg-[#F5F5F5]"
                                    type="text"
                                    maxLength={100}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-3 items-center">
                            <div className="col-span-1">
                                <label className="text-lg font-semibold text-gray-600">Hương vị:</label>
                            </div>
                            <div className="col-span-2">
                                <Input
                                    id="title"
                                    name="title"
                                    colorInput="bg-[#F5F5F5]"
                                    type="text"
                                    maxLength={100}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-3 items-center">
                            <div className="col-span-1">
                                <label className="text-lg font-semibold text-gray-600">Hạn sử dụng:</label>
                            </div>
                            <div className="col-span-2">
                                <Input
                                    id="title"
                                    name="title"
                                    colorInput="bg-[#F5F5F5]"
                                    type="text"
                                    maxLength={100}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-3 items-center">
                            <div className="col-span-1">
                                <label className="text-lg font-semibold text-gray-600">Số lượng hàng:</label>
                            </div>
                            <div className="col-span-2">
                                <Input
                                    id="title"
                                    name="title"
                                    colorInput="bg-[#F5F5F5]"
                                    type="text"
                                    maxLength={100}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-3 items-center">
                            <div className="col-span-1">
                                <label className="text-lg font-semibold text-gray-600">Gửi từ:</label>
                            </div>
                            <div className="col-span-2">
                                <Input
                                    id="title"
                                    name="title"
                                    colorInput="bg-[#F5F5F5]"
                                    type="text"
                                    maxLength={100}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-3 items-center">
                            <div className="col-span-1">
                                <label className="text-lg font-semibold text-gray-600">Giá:</label>
                            </div>
                            <div className="col-span-2">
                                <Input
                                    id="title"
                                    name="title"
                                    colorInput="bg-[#F5F5F5]"
                                    type="text"
                                    maxLength={100}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-3 items-center">
                            <div className="col-span-1">
                                <label className="text-lg font-semibold text-gray-600">Mô tả:</label>
                            </div>
                            <div className="col-span-2">
                                <Input
                                    flagInput
                                    id="description"
                                    name="description"
                                    colorInput="bg-[#F5F5F5]"
                                    type="text"
                                    maxLength={500}
                                />
                            </div>
                        </div>
                        <div className="grid lg:grid-cols-3 grid-cols-1">
                            <div className="lg:col-span-1" />
                            <div className="lg:col-span-2 col-span-1 py-4 flex justify-center">
                                <Button
                                    title="Đăng bài"
                                    style="px-16 py-3 text-xl"
                                    type="submit"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default PostNewForm