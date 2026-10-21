import { createArea, deleteArea, getArea, getAreaById ,updateArea} from "@/api"
import { Area } from "@/type"
import { useMutation, useQuery } from "@tanstack/react-query"

export const useGetArea = () => {
    return useQuery({
        queryKey: ['area'],
        queryFn: getArea,
        retry: false
    })
}

export const useGetAreaById = (id: string) => {
    return useQuery({
        queryKey: ['area', id],
        queryFn: () => getAreaById(id),
        enabled: Boolean(id),
        retry: false
    })
}

export const useDeleteArea = (id: string) => {
    return useMutation({
        mutationFn: (id: string) => deleteArea(id)
    })
}

export  const useUpdateAreaById = (id: string) => {
    return useMutation({
        mutationFn: (payload: Area) => updateArea(id, payload)
    })
}

export const useCreateArea = () => {
   return useMutation({
       mutationFn: createArea
   })
}