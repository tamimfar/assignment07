import apiClient from "@/lib/apiClient"

export const getDashboard = () => {
    return apiClient('/admin/dashboard', {method: 'GET'})
}
export const getUsers = () => {
    return apiClient('/admin/users', {method: 'GET'})
}
export const getUsersById = (id: string) => {
    return apiClient(`/admin/users/${id}`, {method: 'GET'})
}
export const getTechnicians = () => {
    return apiClient('/admin/technicians', {method: 'GET'})
}

export const updateUserStatas = (payload:{id: string, status: string}) => {
    return apiClient(`/admin/users/${payload.id}/status`, {method: 'PATCH', body: payload})
}
export const updateUserRole = (payload:{id: string, status: string}) => {
    return apiClient(`/admin/users/${payload.id}/role`, {method: 'PATCH', body: payload})
}
export const deleteUser = (payload:{id: string, status: string}) => {
    return apiClient(`/admin/users/${payload.id}`, {method: 'DELETE',})
}

export const getAllUser = () => {
    return apiClient('/admin/users', {method: 'GET'})
}

