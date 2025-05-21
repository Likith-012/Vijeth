
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Camera,
  Paintbrush,
  CheckCircle,
  UserCircle,
  LayoutDashboard,
  Receipt,
  Briefcase,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useUser, UserRole } from "@/context/UserContext";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface RoleCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  selected: boolean;
  onClick: () => void;
}

function RoleCard({ title, description, icon, selected, onClick }: RoleCardProps) {
  return (
    <Card 
      className={cn(
        "cursor-pointer transition-all hover:shadow-md", 
        selected ? "border-primary ring-2 ring-primary/20" : ""
      )}
      onClick={onClick}
    >
      <CardHeader>
        <div className="flex justify-between items-start">
          <div className="p-2 rounded-full bg-primary/10 text-primary">
            {icon}
          </div>
          {selected && (
            <div className="text-primary">
              <CheckCircle className="h-5 w-5" />
            </div>
          )}
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}

const roles = [
  {
    id: "photographer",
    title: "Photographer",
    description: "Capture and upload raw images",
    icon: <Camera className="h-5 w-5" />,
    path: "/photographer"
  },
  {
    id: "editor",
    title: "Image Editor",
    description: "Edit and process images",
    icon: <Paintbrush className="h-5 w-5" />,
    path: "/editor"
  },
  {
    id: "qc",
    title: "QC Team",
    description: "Review images for quality",
    icon: <CheckCircle className="h-5 w-5" />,
    path: "/qc"
  },
  {
    id: "client",
    title: "Client",
    description: "View project progress",
    icon: <UserCircle className="h-5 w-5" />,
    path: "/client"
  },
  {
    id: "studioManager",
    title: "Studio Manager",
    description: "Manage workflow and approvals",
    icon: <LayoutDashboard className="h-5 w-5" />,
    path: "/manager"
  },
  {
    id: "accounts",
    title: "Accounts Team",
    description: "Handle invoicing and payments",
    icon: <Receipt className="h-5 w-5" />,
    path: "/accounts"
  },
  {
    id: "invert",
    title: "Invert Team",
    description: "Add initial project details",
    icon: <Briefcase className="h-5 w-5" />,
    path: "/invert"
  },
];

const demoUsers = {
  photographer: { id: "1", name: "Alex Kim", role: "photographer" as const, email: "alex@example.com" },
  editor: { id: "2", name: "Jamie Rivera", role: "editor" as const, email: "jamie@example.com" },
  qc: { id: "3", name: "Taylor Morgan", role: "qc" as const, email: "taylor@example.com" },
  client: { id: "4", name: "Chris Johnson", role: "client" as const, email: "chris@example.com" },
  studioManager: { id: "5", name: "Jordan Casey", role: "studioManager" as const, email: "jordan@example.com" },
  accounts: { id: "6", name: "Morgan Price", role: "accounts" as const, email: "morgan@example.com" },
  invert: { id: "7", name: "Riley Cooper", role: "invert" as const, email: "riley@example.com" },
};

export function RoleSelection() {
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);
  const { setCurrentUser } = useUser();
  const navigate = useNavigate();

  const handleContinue = () => {
    if (!selectedRole) {
      toast.error("Please select a role to continue");
      return;
    }
    
    // Set the current user based on selected role
    setCurrentUser(demoUsers[selectedRole]);
    
    // Find the role object
    const role = roles.find(r => r.id === selectedRole);
    
    if (role) {
      toast.success(`Signed in as ${role.title}`);
      navigate(role.path);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Select Your Role</h1>
        <p className="text-muted-foreground mt-2">
          Choose a role to see the relevant dashboard and features
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {roles.map((role) => (
          <RoleCard
            key={role.id}
            title={role.title}
            description={role.description}
            icon={role.icon}
            selected={selectedRole === role.id}
            onClick={() => setSelectedRole(role.id as UserRole)}
          />
        ))}
      </div>
      
      <div className="flex justify-center">
        <Button 
          size="lg"
          onClick={handleContinue}
          disabled={!selectedRole}
        >
          Continue as {selectedRole ? roles.find(r => r.id === selectedRole)?.title : "Selected Role"}
        </Button>
      </div>
    </div>
  );
}
