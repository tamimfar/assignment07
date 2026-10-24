import { createAssignment , deleteAssignment, getTechnicians, updateAssignmentById} from "@/api"
import { AssignmentPayload } from "@/type"
import { useMutation, useQuery } from "@tanstack/react-query"

export const useCreateAssignment = () => {
    return useMutation({
        mutationFn: createAssignment
    })
}

export const useTechnician = () => {
    return useQuery({
        queryKey: ['technecian'],
        queryFn: () => getTechnicians(), 
        retry: false
    })
}

export const useUpdateAssignment = (id: string) => {
    return useMutation({
        mutationFn:(payload:AssignmentPayload) => updateAssignmentById(id, payload)
    })
}

export const useDeleteAssignment = () => {
    return useMutation({
        mutationFn: (id: string) => deleteAssignment(id)
    })
}