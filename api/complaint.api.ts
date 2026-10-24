import apiClient from "@/lib/apiClient"
import { ComplaintPayload } from "@/type"

export const getComplaints = () => {
    return apiClient('/complaints', {method: 'GET'})
}

export const getComplaintById = (id:string) => {
    return apiClient(`/complaints/${id}`, {method: 'GET'})
}

export const deleteComplaint = (id:string) => {
    return apiClient(`/complaints/${id}`, {method: 'DELETE'})
}

export const createComplaint = (payload:ComplaintPayload) => {
    return apiClient('/complaints', {method: 'POST', body: payload})
}

export const updateComplaintById = (id:string, payload:ComplaintPayload) => {
    return apiClient(`/complaints/${id}`, {method: 'PATCH', body: payload })
}

export const getTecnicians = () => {
    return apiClient('/technicians', {method: 'GET'})
}

export const  updateStatus = (id:string, status:string) => {
    return apiClient(`/complaints/${id}`, {method: 'PATCH', body: {status}}) 
}