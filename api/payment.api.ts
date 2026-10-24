import apiClient from "@/lib/apiClient"

export const createPayment = (complaintId:string) => {
    return apiClient('/payments/create', {method: 'POST', body:{complaintId}})
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