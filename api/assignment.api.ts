import apiClient from "@/lib/apiClient"
import { AssignmentPayload } from "@/type"

export const getAssignment = () => {
    return apiClient('/assignments', {method: 'GET'})
}

export const getAssignmentById = (id:string) => {
    return apiClient(`/assignments/${id}`, {method: 'GET'})
}

export const deleteAssignment = (id:string) => {
    return apiClient(`/assignments/${id}`, {method: 'DELETE'})
}

export const createAssignment = (payload:AssignmentPayload) => {
    return apiClient('/assignments', {method: 'POST', body: payload})
}

export const updateAssignmentById = (id:string, payload:AssignmentPayload) => {
    return apiClient(`/assignments/${id}`, {method: 'PATCH', body: payload })
}