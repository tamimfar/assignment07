import { createAssignment , deleteAssignment, getAssignment, getTechnicians, updateAssignmentById} from "@/api"
import { AssignmentPayload } from "@/type"
import { useMutation, useQuery } from "@tanstack/react-query"

export const useCreateAssignment = () => {
    return useMutation({
        mutationFn: createAssignment
    })
}

export const useAssignment = () => {
    return useQuery({
        queryKey: ['assignment'],
        queryFn: () => getAssignment(), 
        retry: false
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
        mutationFn:(status:string) => updateAssignmentById(id, status)
    })
}

export const useDeleteAssignment = () => {
    return useMutation({
        mutationFn: (id:string) => deleteAssignment(id)
    })
}