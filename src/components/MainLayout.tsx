import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Toaster } from "@/components/ui/sonner";
import { Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    <>
      <SidebarProvider>
        <div className="min-h-screen flex w-full">
          <AppSidebar />
          <div className="flex-1">
            <Outlet />
          </div>
        </div>
      </SidebarProvider>
      <Toaster position="top-right" />
    </>
  );
}
