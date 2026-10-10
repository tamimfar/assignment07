import { getAllUser, getDashboard, updateUserStatas } from "@/api"
import { useMutation, useQuery } from "@tanstack/react-query"


export const useDashboard = () => {
    return useQuery({
        queryKey: ['dashboard'],
        queryFn: getDashboard,
        retry: false
    })
}

export const useUser = () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: getAllUser,
        retry: false
    })
}

export const useUpdateStatus = () => {
    return useMutation({
        mutationFn: updateUserStatas
    })
}