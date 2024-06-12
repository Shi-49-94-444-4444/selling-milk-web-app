import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

const MainNav = () => {
    return (
        <section className="flex flex-row gap-5 items-center">
            <div className="flex-shrink-0 relative">
                <Link href="/">
                    <Image
                        src="/images/logo_1.png"
                        alt="logo"
                        height={100}
                        width={100}
                        className="object-cover w-20 h-20"
                    />
                </Link>
            </div>
            <div className="flex flex-row bg-white rounded-sm text-lg w-full h-12 items-center">
                <input
                    placeholder="Nhập tìm kiếm sản phẩm"
                    className="py-2 px-4 text-gray-600 w-full focus:outline-none border-none hover:border-none focus:ring-0"
                />
                <div className="bg-primary-cus w-16 h-10 mr-1 flex items-center justify-center cursor-pointer">
                    <FaSearch size={25} color="white" />
                </div>
            </div>
            <div className="flex flex-shrink-0 items-center justify-center cursor-pointer">
                <IoCartOutline size={40} color="white" />
            </div>
        </section>
    )
}

export default MainNav