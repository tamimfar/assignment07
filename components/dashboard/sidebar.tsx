
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Header from "../layout/public/Header";

export default function Dashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset className="min-w-0 bg-slate-50 dark:bg-slate-950">
        {/* Header */}
        <header className="sticky top-0 z-30 flex h-14 w-full items-center border-b border-slate-200 bg-slate-50 px-4 dark:border-slate-800 dark:bg-slate-950">
  {/* Sidebar Toggle */}
  <SidebarTrigger className="-ml-1 shrink-0" />

  <Separator
    orientation="vertical"
    className="mx-2 h-4 shrink-0"
  />

  {/* Header Content */}
  <div className="min-w-0 flex-1">
    <Header />
  </div>
</header>

        {/* Page Content */}
        <main className="min-w-0 flex-1 overflow-x-hidden">
          <div className="w-full p-1 ">
            {children}
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}