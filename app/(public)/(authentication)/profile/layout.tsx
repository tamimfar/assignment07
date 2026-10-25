import { AuthGude } from "@/components/auth/AuthGude";
import { RoleGude } from "@/components/auth/RoleGude";


export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
       <div>
          
          <RoleGude role={["ADMIN", "USER","TECHNICIAN"]}>{children}</RoleGude>
       </div>
    );
}