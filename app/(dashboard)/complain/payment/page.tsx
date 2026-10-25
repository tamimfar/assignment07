"use client";

import { Button } from "@/components/ui/button";
import { usePaymentExecute } from "@/hook/payment.hook";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";
export default function Payment() {
      const searchParams = useSearchParams();
      const {mutate:data} = usePaymentExecute();


 const paymentID = searchParams.get("paymentID");
//  const status = searchParams.get("status");

    const handleConfirm = () => {
       if (!paymentID) {
            toast.error("Payment ID is missing");
            return;
       }

       data(paymentID, {
        onSuccess: () => {
            toast.success("Payment Confirmed");
        },
        
       });
    }

    return (
        <div>
            <h1>Payment</h1>
          
            <Button onClick={handleConfirm}>Confirm</Button>
        </div>
    )
}