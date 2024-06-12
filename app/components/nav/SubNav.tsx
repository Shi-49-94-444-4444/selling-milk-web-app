import Link from "next/link";
import { CiBellOn } from "react-icons/ci";
import { MdOutlineContactSupport } from "react-icons/md";

const SubNav = () => {
    // const navRouter = [
    //     { title: "Kênh người bán" },
    //     { title: "Trở thành đối tác" }
    // ]

    return (
        <section className="flex flex-row justify-between text-white text-sm items-center">
            <div className="flex flex-row gap-5">
                <Link className="hover:text-sub-cus cursor-pointer" href="/product/postProduct">
                    Đăng sản phẩm
                </Link>
            </div>
            <div className="flex flex-row gap-5 items-center">
                <div className="flex flex-row gap-1 items-center hover:text-sub-cus cursor-pointer">
                    <span>
                        <CiBellOn size={25} />
                    </span>
                    <span>
                        Thông báo
                    </span>
                </div>
                <div className="flex flex-row gap-1 items-center hover:text-sub-cus cursor-pointer">
                    <span>
                        <MdOutlineContactSupport size={25} />
                    </span>
                    <span>
                        Hỗ trợ
                    </span>
                </div>
                <Link className="hover:text-sub-cus cursor-pointer" href="/login">
                    Đăng ký
                </Link>
                <Link className="hover:text-sub-cus cursor-pointer" href="/register">
                    Đăng Nhập
                </Link>
            </div>
        </section>
    )
}

export default SubNav