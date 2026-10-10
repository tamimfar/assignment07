"use client"

import { environmentManager, QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactNode } from "react"


const makeQueryClient = () => {
    return new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 60 * 1000
            }
        }
    })
}

let browgerQueryClient:QueryClient | undefined = undefined

const getQuetyClient = () => {
    if(environmentManager.isServer()){
        return makeQueryClient()
    }else{
        if(!browgerQueryClient){
            browgerQueryClient = makeQueryClient()
        }
        return browgerQueryClient
    }
}


export default function QueryProvider({ children }: { children: ReactNode }) {
    const queryclient = getQuetyClient()
    return (
        <QueryClientProvider client={queryclient}>
            {children}
        </QueryClientProvider>
    )
}

