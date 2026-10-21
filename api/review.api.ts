import apiClient from "@/lib/apiClient"
import { reviewsType } from "@/type"


export const getReviewById = (id:string) => {
    return apiClient(`/reviews/${id}`, {method: 'GET'})
}

export const createReview = (payload:reviewsType) => {
    return apiClient('/reviews', {method: 'POST', body: payload})
}

export const updateReviewById = (id:string, payload:reviewsType) => {
    return apiClient(`/reviews/${id}`, {method: 'PATCH', body: payload })
}

export const deleteReview = (id:string) => {
    return apiClient(`/reviews/${id}`, {method: 'DELETE' })
}

export const getAllReview = () => {
    return apiClient('/reviews', {method: 'GET'})
}
