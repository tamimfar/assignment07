import { schedule } from "@/api"
import { useMutation } from "@tanstack/react-query"

export const useSchedule = () => {
    return useMutation({
        mutationFn: schedule
    })
}