export interface LoginFormData {
    email: string 
    password: string 
}

export interface RegisterFormData {
    username: string 
    email: string 
    phone: string 
    password: string 
    confirmPassword: string 
    avatar?: string
}