"use client"

import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { AiFillCamera } from 'react-icons/ai';
import Image from 'next/image';
import Button from '../providers/form/Button';
import { settingProfileInputs } from '@/utils/constants';
import Input from '../providers/form/Input';

const SettingProfile = () => {
    const maxSize = 1048576

    const [uploadedImage, setUploadedImage] = useState<string | null>(null);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        acceptedFiles.forEach((file) => {
            if (file.size <= maxSize) {
                const fileReader = new FileReader()
                fileReader.onload = (event) => {
                    const base64Image = event.target?.result;
                    //console.log(base64Image)
                    if (typeof base64Image === 'string') {
                        setUploadedImage(base64Image)
                        // setValue('imgURL', base64Image)
                    }
                };
                fileReader.readAsDataURL(file);
            } else {
                // setError("imgURL", { message: "Chỉ được upload ảnh dưới một 1MB" })
            }
        });
    }, [])

    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/png': ['.png'],
            'image/jpg': ['.jpg'],
            'image/jpeg': ['.jpeg'],
        },
        onDrop,
    });

    return (
        <form className="relative p-8 flex flex-col gap-10">
            <div className="text-gray-600 text-2xl md:text-3xl font-semibold">Hồ sơ</div>
            <div className="border border-b border-black border-opacity-10"/>
            <div className="flex flex-row gap-10">
                <div className="relative flex flex-col w-2/5 gap-3 items-center">
                    <div {...getRootProps()} className="relative flex-shrink-0 w-full pb-[100%] border-2 border-gray-400 rounded-full cursor-pointer">
                        <input {...getInputProps()} />
                        {uploadedImage ? (
                            <Image
                                src={uploadedImage}
                                alt="Uploaded avatar"
                                className="object-cover rounded-full"
                                fill
                            />
                        ) : (
                            <input {...getInputProps()} />
                        )}
                    </div>
                    <div className="flex flex-row text-primary-blue-cus items-center gap-2 whitespace-nowrap">
                        <AiFillCamera size={30} />
                        <span className="text-lg md:text-xl font-semibold">Đăng tải hình ảnh</span>
                    </div>
                </div>
                <div className="border border-black border-opacity-10" />
                <div className="flex flex-col gap-10 w-full">
                    {settingProfileInputs.map((input) => (
                        <div className="grid grid-cols-7 items-center" key={input.id}>
                            <div className="col-span-2">
                                <label className="text-gray-600 font-semibold text-lg md:text-xl">
                                    {input.label}
                                </label>
                            </div>
                            <div className="col-span-5">
                                <Input
                                    colorInput="bg-[#F5F5F5] border-none md:text-base text-sm"
                                    name={input.name}
                                    type={input.type}
                                    id={input.id}
                                    maxLength={input.maxLength}
                                    flagInput={input.flagInput}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="relative flex justify-center">
                <Button
                    title="Lưu"
                    type="submit"
                    style="py-3 text-xl px-12"
                />
            </div>
        </form >
    )
}

export default SettingProfile;
