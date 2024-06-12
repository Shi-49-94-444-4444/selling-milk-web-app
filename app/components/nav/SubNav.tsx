"use client"

import { GlobalContext } from "@/contexts"
import Link from "next/link"
import { useRouter } from "next/router"
import { useContext } from "react"
import { CiBellOn } from "react-icons/ci"
import { MdOutlineContactSupport } from "react-icons/md"
import Cookies from 'js-cookie'
import Image from "next/image"
import { validateURLAvatar } from "@/utils/validData"

const SubNav = () => {
    // const navRouter = [
    //     { title: "Kênh người bán" },
    //     { title: "Trở thành đối tác" }
    // ]

    const router = useRouter()

    const {
        isAuthUser,
        setIsAuthUser,
        setUser,
        user,
        setIsRefresh,
    } = useContext(GlobalContext) || {}

    const handleLogout = async () => {
        if (setIsAuthUser && setUser) {
            setIsAuthUser(false)
            setUser(null)
        }
        Cookies.remove("token")
        localStorage.clear()
        router.push("/").then(() => {
            if (setIsRefresh) {
                setIsRefresh(true)
            }
        })
    }

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
                {isAuthUser ? (
                    <div className="flex flex-row gap-5 items-center">
                        <Link className="flex flex-row gap-1 items-center cursor-pointer hover:text-sub-cus" href="/user/setting-profile">
                            <div className="w-8 h-8 rounded-full">
                                <Image
                                    src={validateURLAvatar(user?.avatar)}
                                    alt="avatar"
                                    className="w-8 h-8 rounded-full"
                                    height={32}
                                    width={32}
                                />
                            </div>
                            <div className="">
                                {user?.username}
                            </div>
                        </Link>
                        <button className="hover:text-sub-cus cursor-pointer" onClick={handleLogout}>
                            Đăng xuất
                        </button>
                    </div>
                ) : (
                    <>
                        <Link className="hover:text-sub-cus cursor-pointer" href="/register">
                            Đăng ký
                        </Link>
                        <Link className="hover:text-sub-cus cursor-pointer" href="/login">
                            Đăng Nhập
                        </Link>
                    </>
                )}
            </div>
        </section>
    )
}

export default SubNav