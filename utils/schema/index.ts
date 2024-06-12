import * as yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const loginSchema = yup.object().shape({
    email: yup.string().
        required("Email không được để trống").
        email("Email không hợp lệ"),
    password: yup.string().
        required("Mật khẩu không được để trống").
        min(6, "Mật khẩu phải có ít nhất 6 ký tự").
        max(50, "Mật khẩu chỉ được nhiều nhất 50 ký tự"),
})

export const registerSchema = yup.object().shape({
    username: yup.string().
        required("Tên không được để trống ").
        min(4, "Tên tối thiểu 4 kí tự").
        max(50, "Tên nhiều nhất chỉ được 50 kí tự"),
    email: yup.string().
        required("Email không được để trống").
        email("Email không hợp lệ").
        max(50, "Mail nhiều nhất chỉ được 50 kí tự"),
    phone: yup.string().
        required("Số điện thoại không được để trống").
        matches(phoneRegExp, "Số điện thoại phải nhập số").
        min(7, "Số điện thoại có ít nhất 7 số").
        max(15, "Số điện thoại nhiều nhất 15 số"),
    password: yup.string().
        required("Mật khẩu không được để trống").
        min(6, "Mật khẩu phải có ít nhất 6 ký tự").
        max(50, "Mật khẩu nhiều nhất 50 ký tự"),
    confirmPassword: yup.string().
        required("Mật khẩu xác nhận không được để trống").
        oneOf([yup.ref("password"), ""], "Mật khẩu xác nhận phải khớp"),
})