
import { getMe, googleLogin, registerUser, uploadimg, userLogin, userLogout, verifyAccount } from "@/api"
import { useMutation, useQuery } from "@tanstack/react-query"


export const useRegister = () => {
    return useMutation({
         mutationFn: registerUser,
    })
}
export const useLogin = () => {
    return useMutation({
         mutationFn: userLogin,
    })
}
export const useGoogleLogin = () => {
    return useMutation({
         mutationFn: googleLogin,
    })
}

export const useLogout = () => {
    return useMutation({
         mutationFn: userLogout,
    })
}
export const useVerifyAccount =()  => {
    return useMutation({
        mutationFn: verifyAccount
    })
}

export function useGetMe() {
    return useQuery({
        queryKey: ['user'],
        queryFn: getMe,
        retry: false
    })
}

export const useImgUpload = () => {
    return useMutation({
         mutationFn: uploadimg,
    })
}
