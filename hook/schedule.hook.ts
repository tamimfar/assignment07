
import { createSchedule, deleteSchedule, getSchedule, updateSchedule } from "@/api"
import { MaintenancePayload } from "@/type"
import { useMutation, useQuery } from "@tanstack/react-query"

export const useSchedule = () => {
    return useMutation({
        mutationFn: createSchedule
    })
}

export const useGetSchedule = () => {
    return useQuery({
        queryKey: ['schedule'],
        queryFn: () => getSchedule(),
        retry: false
    })
}

export const useGetScheduleById = (id: string) => {
    return useQuery({
        queryKey: ['schedule', id],
        queryFn: () => getSchedule(),
        enabled: Boolean(id),
        retry: false
    })
}

export const useUpdateSchedule = (id: string) => {
    return useMutation({
        mutationFn: (payload: MaintenancePayload) => updateSchedule(id, payload)
    })
}

export const useDeleteSchedule = () => {
    return useMutation({
        mutationFn: (id: string) => deleteSchedule(id)
    })
}