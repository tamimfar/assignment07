import { createComplaint, deleteComplaint, getComplaints, updateComplaintById } from "@/api"
import { ComplaintPayload } from "@/type"
import { useMutation, useQuery } from "@tanstack/react-query"

export const useCreateComplaint = () => {
    return useMutation({
        mutationFn: createComplaint
    })
}
export const useUpdateComplaint = ( id:string) => {
    return useMutation({
        mutationFn: ( payload:ComplaintPayload) => updateComplaintById(id, payload)
    })
}

export const useDeleteComplaint = () => {
    return useMutation({
        mutationFn: (id:string) => deleteComplaint(id)
    })
}

export default function useGetComplaint() {
    return useQuery({
        queryKey: ['complaint'],
        queryFn: () => getComplaints(),
        retry: false
    })
}
