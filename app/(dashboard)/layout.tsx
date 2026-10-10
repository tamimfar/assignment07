import { AuthGude } from "@/components/auth/AuthGude";
import Dashboard from "@/components/dashboard/sidebar";



export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
       <div>
         <Dashboard >
         <AuthGude>{children}</AuthGude> 
         </Dashboard>
       </div>
    );
}