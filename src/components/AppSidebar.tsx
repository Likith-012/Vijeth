import { useState } from "react";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton,
  SidebarHeader,
  SidebarTrigger,
  SidebarFooter
} from "@/components/ui/sidebar";
import { useUser, UserRole } from "@/context/UserContext";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  Users, 
  CheckSquare, 
  FileImage, 
  Folder, 
  Calendar, 
  Settings, 
  ChartBar,
  Edit,
  Archive,
  Inbox,
  DollarSign
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";

// Define navigation items for each role
const navigationItems: Record<UserRole, { title: string, icon: any, path: string }[]> = {
  photographer: [
    { title: "Dashboard", icon: LayoutDashboard, path: "/photographer" },
    { title: "My Shoots", icon: FileImage, path: "/photographer/shoots" },
    { title: "Upload Images", icon: Folder, path: "/photographer/upload" },
    { title: "Calendar", icon: Calendar, path: "/photographer/calendar" },
  ],
  editor: [
    { title: "Dashboard", icon: LayoutDashboard, path: "/editor" },
    { title: "Assignments", icon: FileImage, path: "/editor/assignments" },
    { title: "Submissions", icon: CheckSquare, path: "/editor/submissions" },
  ],
  qc: [
    { title: "Dashboard", icon: LayoutDashboard, path: "/qc" },
    { title: "Pending Review", icon: FileImage, path: "/qc/pending" },
    { title: "Approved", icon: CheckSquare, path: "/qc/approved" },
    { title: "Rejected", icon: CheckSquare, path: "/qc/rejected" },
  ],
  client: [
    { title: "Dashboard", icon: LayoutDashboard, path: "/client" },
    { title: "Projects", icon: Folder, path: "/client/projects" },
    { title: "Deliverables", icon: FileImage, path: "/client/deliverables" },
  ],
  studioManager: [
    { title: "Dashboard", icon: LayoutDashboard, path: "/manager" },
    { title: "Projects", icon: Folder, path: "/manager/projects" },
    { title: "Team", icon: Users, path: "/manager/team" },
    { title: "Approvals", icon: CheckSquare, path: "/manager/approvals" },
    { title: "Reports", icon: ChartBar, path: "/manager/reports" },
  ],
  accounts: [
    { title: "Dashboard", icon: LayoutDashboard, path: "/accounts" },
    { title: "Invoices", icon: Folder, path: "/accounts/invoices" },
    { title: "Payments", icon: DollarSign, path: "/accounts/payments" },
  ],
  invert: [
    { title: "Dashboard", icon: LayoutDashboard, path: "/invert" },
    { title: "New Projects", icon: Inbox, path: "/invert/new" },
    { title: "Archives", icon: Archive, path: "/invert/archives" },
    { title: "Team", icon: Users, path: "/invert/team" },
    { title: "Reports", icon: ChartBar, path: "/invert/reports" },
  ],
};

export function AppSidebar() {
  const { currentUser } = useUser();
  const navigate = useNavigate();
  const [activePath, setActivePath] = useState("/");

  // If no user is logged in, return empty sidebar
  if (!currentUser) {
    return <Sidebar className="hidden" />;
  }

  const handleNavigation = (path: string) => {
    setActivePath(path);
    navigate(path);
  };

  const items = navigationItems[currentUser.role] || [];

  return (
    <Sidebar>
      <SidebarHeader className="flex items-center px-4 py-2">
        <div className="flex items-center space-x-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
            <AvatarFallback>{currentUser.name[0]}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">{currentUser.name}</p>
            <p className="text-xs text-muted-foreground capitalize">{currentUser.role}</p>
          </div>
        </div>
        <div className="ml-auto">
          <SidebarTrigger />
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    onClick={() => handleNavigation(item.path)}
                    className={activePath === item.path ? "bg-accent text-accent-foreground" : ""}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup>
          <SidebarGroupLabel>Settings</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton onClick={() => handleNavigation("/settings")}>
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="px-4 py-2">
        <Separator className="my-2" />
        <Button 
          variant="outline" 
          className="w-full" 
          onClick={() => navigate("/")}
        >
          Switch Role
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
