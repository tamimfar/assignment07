import apiClient from "@/lib/apiClient"

export const getDashboard = () => {
    return apiClient('/admin/dashboard', {method: 'GET'})
}
export const getUsers = () => {
    return apiClient('/admin/users', {method: 'GET'})
}
export const getTechnicians = () => {
    return apiClient('/admin/technicians', {method: 'GET'})
}

export const updateUserStatas = (payload:{id: string, status: string}) => {
    return apiClient(`/admin/user/${payload.id}/status`, {method: 'PATCH', body: payload})
}

export const getAllUser = () => {
    return apiClient('/admin/users', {method: 'GET'})
}