import { getAllUser, getUsersById, getDashboard, updateUserStatas } from "@/api"
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
export const useUserId = (id: string) => {
    console.log(id);
  return useQuery({
    queryKey: ["usersId", id],
    queryFn: () => getUsersById(id),
     enabled: Boolean(id),
    retry: false,
  });
};

export const useUpdateStatus = () => {
    return useMutation({
        mutationFn: updateUserStatas
    })
}