import apiClient from "@/lib/apiClient"
import { RegistrationPayload, VerifyAccountPayload } from "@/type"




export const registerUser = (payload:RegistrationPayload) => {
    return apiClient('/auth/register', {method: 'POST', body: payload})
}
export const userLogin = (payload:{email: string, password: string}) => {
    return apiClient('/auth/login', {method: 'POST', body: payload})
}

export const googleLogin = (payload:{idToken: string}) => {
    return apiClient('/auth/google-login', {method: 'POST', body: payload})
}


export const getMe = () => {
    return apiClient('/auth/me', {method: 'GET'})
}
export const userLogout = () => {
  return apiClient("/auth/logout", {
    method: "POST",
    credentials: "include",
  });
};

export const verifyAccount = (payload:VerifyAccountPayload) => {
    
  return apiClient("/auth/verification", {method: "POST", body: payload, credentials: "include",
   
  });
};

export const uploadimg = (payload:FormData) => {
    console.log(payload)
  return apiClient("/imgupload/upload", {method: "POST", body: payload, credentials: "include",
   
  });
};