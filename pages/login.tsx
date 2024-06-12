import Background from '@/app/components/hero/Background'
import Input from '@/app/components/providers/form/Input'
import Layout from '@/app/layout'

const LoginPage = () => {
    return (
        <Layout>
            <Background src="/images/login-banner_1.jpg">
                <div className="h-screen flex items-center">
                    <div className="w-1/4 h-fit bg-white rounded-md translate-x-1/2">
                        <div className="flex flex-col gap-8 p-10">
                            <label className="text-2xl">Đăng nhập</label>
                            <form className="w-full flex flex-col gap-8">
                                <Input
                                    placeholder="Email/Số điện thoại"
                                    colorInput="border border-black border-opacity-10 focus:border-opacity-30 focus:border focus:border-black focus:outline-none"
                                />
                                <Input
                                    placeholder="Mất khẩu"
                                    colorInput="border border-black border-opacity-10 focus:border-opacity-30 focus:border focus:border-black focus:outline-none"
                                    type="password"
                                />
                                <div className="flex flex-col gap-2">
                                    <button className="w-full text-center py-2 uppercase rounded-md text-lg text-white bg-primary-cus">
                                        Đăng nhập
                                    </button>
                                    <p className="text-blue-800 cursor-pointer text-sm">
                                        Quên mật khẩu?
                                    </p>
                                </div>
                                <div className="flex flex-row justify-between items-center">
                                    <div className="h-[1px] w-1/3 bg-black bg-opacity-10" />
                                    <div className="uppercase text-black text-opacity-50">Hoặc</div>
                                    <div className="h-[1px] w-1/3 bg-black bg-opacity-10" />
                                </div>
                                <div className="flex items-center justify-center">
                                    <div className="flex flex-row gap-2">
                                        <span className="text-black text-opacity-50">
                                            Bạn mới biết đến chúng tôi?
                                        </span>
                                        <span className="text-primary-cus cursor-pointer">
                                            Đăng ký
                                        </span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Background>
        </Layout>
    )
}

export default LoginPage