"use client"
import { Spinner } from "@/components/ui/spinner";
import { useGoogleLogin } from "@/hook";
import { GoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const GoogleLoginComponent = () => {
    const { mutate: login, isPending } = useGoogleLogin()
const router = useRouter()
    const handelGoogleSuccess = (credentialResponse: { credential?: string; }) => {
        const idToken = credentialResponse.credential;
        if(!idToken){
            toast.error("Invalid email or password", { position: "top-right" })
            return
            
        }
        login({idToken}, {
            onSuccess: (res) => {
                toast.success(res.message, { position: "top-right" })
                router.push('/')
            }, 
            onError: (err) => {
                toast.error("Invalid email or password", { position: "top-right" })
                router.push('/login')
            }
        })
       
    }
    const handelGoogeleError = () => {
        console.log();
    }

    return (
        isPending ? <Spinner /> :
       <GoogleLogin   theme="outline"
      shape="pill"  onSuccess={handelGoogleSuccess} onError={handelGoogeleError}  />
    )
}