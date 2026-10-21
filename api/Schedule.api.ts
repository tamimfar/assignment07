import apiClient from "@/lib/apiClient"
import { MaintenancePayload } from "@/type"
export const createSchedule = (payload:MaintenancePayload) => {
    return apiClient('/schedules', {method: 'POST', body: payload})
}
export const getSchedule = () => {
    return apiClient('/schedules', {method: 'GET', })
}

export const getScheduleById = (id:string) => {
    return apiClient(`/schedules/${id}`, {method: 'GET', })
}

export const updateSchedule = (id:string, payload:MaintenancePayload) => {
    return apiClient(`/schedules/${id}`, {method: 'PATCH', body: payload })
}

export const deleteSchedule = (id:string) => {
    return apiClient(`/schedules/${id}`, {method: 'DELETE' })
}
