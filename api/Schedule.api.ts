import apiClient from "@/lib/apiClient"
import { MaintenancePayload } from "@/type"
export const schedule = (payload:MaintenancePayload) => {
    return apiClient('/schedules', {method: 'POST', body: payload})
}