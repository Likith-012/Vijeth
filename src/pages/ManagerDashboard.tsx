
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DashboardStats } from "@/components/DashboardStats";
import { ProjectCard } from "@/components/ProjectCard";
import { useNavigate } from "react-router-dom";

// Sample data
const projects = [
  {
    id: "1",
    title: "Spring Collection Photoshoot",
    client: "Fashion Brand X",
    category: "Fashion",
    jobCardNumber: "JC-2023-001",
    shootDate: "2023-05-15",
    status: "inprogress" as const,
    progress: 65,
    assignedTo: [
      { name: "Alex Kim", role: "Photographer" },
      { name: "Jamie Rivera", role: "Editor" },
    ],
  },
  {
    id: "2",
    title: "Product Catalog Update",
    client: "Home Goods Co.",
    category: "Product",
    jobCardNumber: "JC-2023-002",
    shootDate: "2023-05-18",
    status: "completed" as const,
    progress: 100,
    assignedTo: [
      { name: "Alex Kim", role: "Photographer" },
      { name: "Jamie Rivera", role: "Editor" },
      { name: "Taylor Morgan", role: "QC" },
    ],
  },
  {
    id: "3",
    title: "Corporate Team Headshots",
    client: "Tech Startup Inc.",
    category: "Corporate",
    jobCardNumber: "JC-2023-003",
    shootDate: "2023-05-20",
    status: "pending" as const,
    progress: 25,
    assignedTo: [
      { name: "Alex Kim", role: "Photographer" },
    ],
  },
  {
    id: "4",
    title: "Restaurant Menu Items",
    client: "Gourmet Bistro",
    category: "Food",
    jobCardNumber: "JC-2023-004",
    shootDate: "2023-05-22",
    status: "rejected" as const,
    progress: 80,
    assignedTo: [
      { name: "Alex Kim", role: "Photographer" },
      { name: "Jamie Rivera", role: "Editor" },
      { name: "Taylor Morgan", role: "QC" },
    ],
  }
];

const stats = {
  totalProjects: 24,
  pendingApproval: 5,
  completedProjects: 18,
  rejectedProjects: 1,
  teamMembers: 12,
};

const approvalRequests = [
  { id: "1", title: "Spring Collection Photoshoot", requestedBy: "Taylor Morgan", date: "2023-05-17" },
  { id: "2", title: "Restaurant Menu Items", requestedBy: "Taylor Morgan", date: "2023-05-18" },
];

export default function ManagerDashboard() {
  const navigate = useNavigate();
  
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Studio Manager Dashboard</h1>
        <Button onClick={() => navigate("/manager/projects/new")}>New Project</Button>
      </div>
      
      <DashboardStats stats={stats} />
      
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="approvals">Approvals</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Recent Projects</CardTitle>
                <CardDescription>Latest projects overview</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {projects.slice(0, 3).map(project => (
                  <div key={project.id} className="flex justify-between items-center p-2 border-b">
                    <div>
                      <p className="font-medium">{project.title}</p>
                      <p className="text-xs text-muted-foreground">{project.client}</p>
                    </div>
                    <div className={`w-3 h-3 rounded-full bg-status-${project.status}`}></div>
                  </div>
                ))}
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Pending Approvals</CardTitle>
                <CardDescription>Items waiting for your review</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {approvalRequests.map(request => (
                  <div key={request.id} className="flex justify-between items-center p-2 border-b">
                    <div>
                      <p className="font-medium">{request.title}</p>
                      <p className="text-xs text-muted-foreground">Requested by: {request.requestedBy}</p>
                    </div>
                    <Button size="sm" variant="outline">Review</Button>
                  </div>
                ))}
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Shoots</CardTitle>
                <CardDescription>Scheduled photography sessions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between items-center p-2 border-b">
                  <div>
                    <p className="font-medium">Tech Startup Inc.</p>
                    <p className="text-xs text-muted-foreground">May 20, 2023</p>
                  </div>
                  <p className="text-xs">Corporate</p>
                </div>
                <div className="flex justify-between items-center p-2 border-b">
                  <div>
                    <p className="font-medium">Gourmet Bistro</p>
                    <p className="text-xs text-muted-foreground">May 22, 2023</p>
                  </div>
                  <p className="text-xs">Food</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <h2 className="text-2xl font-bold tracking-tight mt-6">Active Projects</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.map(project => (
              <ProjectCard 
                key={project.id}
                {...project}
                onView={(id) => navigate(`/manager/projects/${id}`)}
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="approvals" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Pending Approvals</CardTitle>
              <CardDescription>Review and approve work from your team</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {approvalRequests.map(request => (
                  <Card key={request.id}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{request.title}</CardTitle>
                      <CardDescription>Requested by {request.requestedBy} on {request.date}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <p className="text-sm">This project has been reviewed by the QC team and is awaiting your approval to proceed to the next stage.</p>
                    </CardContent>
                    <div className="flex justify-end space-x-2 p-4 pt-0">
                      <Button variant="outline">Reject</Button>
                      <Button>Approve</Button>
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="team" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Team Members</CardTitle>
              <CardDescription>Manage your team and assignments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { name: "Alex Kim", role: "Photographer", activeProjects: 3 },
                    { name: "Jamie Rivera", role: "Editor", activeProjects: 2 },
                    { name: "Taylor Morgan", role: "QC", activeProjects: 4 },
                    { name: "Morgan Price", role: "Accounts", activeProjects: 0 },
                    { name: "Riley Cooper", role: "Invert Team", activeProjects: 1 },
                  ].map((member, i) => (
                    <Card key={i}>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{member.name}</CardTitle>
                        <CardDescription>{member.role}</CardDescription>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <p className="text-sm">{member.activeProjects} active projects</p>
                      </CardContent>
                      <div className="flex justify-end p-4 pt-0">
                        <Button variant="outline" size="sm">View Details</Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
