import * as yup from "yup";

export const loginSchema = yup.object().shape({
    email: yup.string().
        required("Email không được để trống").
        email("Email không hợp lệ"),
    password: yup.string().
        required("Mật khẩu không được để trống").
        min(6, "Mật khẩu phải có ít nhất 6 ký tự").
        max(50, "Mật khẩu chỉ được nhiều nhất 50 ký tự"),
})