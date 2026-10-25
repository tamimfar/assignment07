import { RoleGude } from "@/components/auth/RoleGude";

export default function layout ({ children }: { children: React.ReactNode }) {
    return <div>
        <RoleGude role={["ADMIN","USER"]}>

        {children}
        </RoleGude>
        </div>;
};