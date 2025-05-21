
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";

// Sample data
const teamMembers = [
  { 
    id: "1", 
    name: "Alex Kim", 
    role: "Photographer", 
    email: "alex@studio.com",
    avatar: "/placeholder.svg", 
    activeProjects: 3,
    status: "active"
  },
  { 
    id: "2", 
    name: "Jamie Rivera", 
    role: "Editor", 
    email: "jamie@studio.com",
    avatar: "/placeholder.svg", 
    activeProjects: 2,
    status: "active"
  },
  { 
    id: "3", 
    name: "Taylor Morgan", 
    role: "QC", 
    email: "taylor@studio.com",
    avatar: "/placeholder.svg", 
    activeProjects: 4,
    status: "active"
  },
  { 
    id: "4", 
    name: "Morgan Price", 
    role: "Accounts", 
    email: "morgan@studio.com",
    avatar: "/placeholder.svg", 
    activeProjects: 0,
    status: "inactive"
  },
  { 
    id: "5", 
    name: "Riley Cooper", 
    role: "Invert Team", 
    email: "riley@studio.com",
    avatar: "/placeholder.svg", 
    activeProjects: 1,
    status: "active"
  },
];

export default function ManagerTeam() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Team Members</h1>
        <Button>
          <Users className="h-4 w-4 mr-2" />
          Add New Member
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {teamMembers.map(member => (
          <Card key={member.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Avatar className="h-10 w-10">
                <AvatarImage src={member.avatar} alt={member.name} />
                <AvatarFallback>{member.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-lg">{member.name}</CardTitle>
                <CardDescription className="flex items-center gap-2">
                  {member.role}
                  <Badge variant={member.status === "active" ? "default" : "outline"}>
                    {member.status}
                  </Badge>
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground mb-4">{member.email}</div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">
                  {member.activeProjects} active projects
                </span>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
