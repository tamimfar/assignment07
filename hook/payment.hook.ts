import { createPayment, paymentConfirm } from "@/api/payment.api"
import { useMutation } from "@tanstack/react-query"

export const usePayment = () => {
    return useMutation({
        mutationFn: (id: string) => createPayment(id)
    })
}

export const usePaymentExecute = () => {
    return useMutation({
        mutationFn: (paymentId: string) => paymentConfirm(paymentId)
    })
}