import apiClient from "@/lib/apiClient"

export const createPayment = (payload:string) => {
    return apiClient('/payments/create', {method: 'POST', body: payload})
}

export const getPaymentById = (id:string) => {
    return apiClient(`/payments/${id}`, {method: 'GET'})
}

export const getPayment = () => {
    return apiClient('/payments', {method: 'GET'})
}

export const deletePayment = (id:string) => {
    return apiClient(`/payments/${id}`, {method: 'DELETE'})
}

export const getMyPayment = (id:string, payload:string) => {
    return apiClient(`/payments/my`, {method: 'GET'})
}