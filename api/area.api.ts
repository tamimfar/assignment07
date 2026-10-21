import apiClient from "@/lib/apiClient"
import { Area } from "@/type"

export const createArea = (payload:Area) => {
    return apiClient('/areas', {method: 'POST', body: payload})
}
export const getArea = () => {
    return apiClient('/areas', {method: 'GET', })
}
export const getAreaById = (id:string) => {
    return apiClient(`/areas/${id}`, {method: 'GET', })
}
export const updateArea = (id:string, payload:Area) => {
    return apiClient(`/areas/${id}`, {method: 'PATCH', body: payload })
}
export const deleteArea = (id:string) => {
    return apiClient(`/areas/${id}`, {method: 'DELETE' })
}